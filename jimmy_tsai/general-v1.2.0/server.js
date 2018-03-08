/**
 * Setting follows the link below:
 * https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
 */
const fs = require('fs')
const path = require('path')
const SHA1 = require('crypto-js/sha1')
const express = require('express')
const bodyParser = require('body-parser')
const { skipKeys, pickKeys } = require('./libs/utils')
const db = require('./db')
const app = express()
const psArgv = require('yargs')
  .option('itr', {
    // alias: 'i', -> not work under babel-node, for example: "npm run babel my_script.js -- -i"
    describe: 'Interactive mode flag.',
    type: 'boolean',
  })
  .option('rlf', {
    // alias: 'r', -> not work under babel-node, for example: "npm run babel my_script.js -- -r"
    describe: 'The route list json file name',
     type: 'string',
  })
  .help()
  .alias('h', 'help') // Under babel-node alias -h can work, weird.
  .example('npm run babel $0', 'Start the server without interactive mode.')
  .example('npm run babel $0 -- --itr', 'Start the server on the interactive mode.')
  .example(
    'npm run babel $0 -- --itr --rlf myRouteList.json',
    'Start the server on the interactive mode and with a pre-defined route list json file.'
  )
  .epilog('Copyright 2017 Jimmy Tsai')
  .argv

/**
 * Custom options - START
 */
const port = 3000
const getUser = (userSrc, admingroup, sid, excludes) => ({
  admin: {
    ...skipKeys(userSrc, excludes),
    admingroup,
  },
  clientIp: '1.1.1.1', // fake ip, just for mock server
  sid,
})

const getCheckAuth = (db) => (req, res, next) => {
  if (req.url === '/rest/admin/login') {
    return next()
  }
  const { sid } = req.headers
  const sn = db.session.getBySid(sid)
  if (sn) {
    const { userId, sid } = sn
    const user = db.accounts.getById(userId)
    const admingroup =  db.adminGroup.getById(user.permissionId)
    req.user = getUser(user, admingroup, sid, ['permissionId']) 
    next()
  } else {
    res.writeHead(401, 'sid is not found!')
    res.send()  // don't forget to send
    /**
     * Note 1. Another wat to send status code followed by custom message:
     *   res.statusMessage = 'sid is not found!'
     *   res.sendStatus(401)
     **/
    /**
     * Note 2. Send status code followed by custom message and add json data in response body:
     *   res.writeHead(401, 'sid is not found!', {'content-type': 'application/json'})
     *   res.write(JSON.stringify({aaa: 'bbb'}))
     *   res.send()
     **/
  }
}
const checkAuth = getCheckAuth(db)  // just keep context clear
/*
 * Custom options - END
 **/

if (psArgv.itr) {
  const { stdin, stdout } = process
  const Interactive = require('./interactive')
  let routeList = []
  if (psArgv.rlf) {
    const absPath = path.resolve(__dirname, `./${psArgv.rlf}`)
    routeList = JSON.parse(fs.readFileSync(absPath))
  }
  const itr = new Interactive(stdin, stdin, routeList)
  const { interactiveHandler } = itr
  app.use(bodyParser.json(), interactiveHandler, checkAuth)
} else {
  app.use(bodyParser.json(), checkAuth)
}

/**
 * IMPORTAN NOTE:
 * Keys in req.headers are all lowercase!!!
 * This is the default behavior of express server.
 **/
app.post('/rest/admin/login', function (req, res) {
  const { login, passhash: passHash } = req.headers
  const user = db.accounts.searchAccount(login, passHash)
  if (user) {
    const { permissionId, id: userId } = user
    const sn =  db.session.getByUserId(userId)
    if (sn) db.session.delete(userId)
    const admingroup =  db.adminGroup.getById(permissionId)
    const sid = db.session.create(userId, admingroup.name)
    const resBody = getUser(user, admingroup, sid, ['permissionId', 'passHash', 'email_alert', 'isDefault'])
    res.status(200).json(resBody);
  } else {
    res.status(401).send() // default statusMessage for 401 is 'Unauthorized'.
    // res.status(500).json({errorId: 500, msg: 'some message'});
  }
})

app.post('/rest/admin/logout', function (req, res) {
  const { sid } = req.user
  if (db.session.deleteBySid(sid)) {
    res.status(204).send() // default statusMessage for 204 is 'No Content'.
  } else {
    res.status(500).send()  // default statusMessage for 500 is 'Internal Server Error'.
  }
})

app.post('/rest/admin/chpass', function (req, res) {
  const validatePwd = {
    minLength: (pwd, min, max) => (pwd.length >= min && pwd.length <= max),
    notLoginAccount: (pwd, login) => (!pwd.includes(login)),
    notFullName: (pwd, name) => (!pwd.includes(name)),
    containUppercase: (pwd) => (/[A-Z]/.test(pwd)),
    containLowercase: (pwd) => (/[a-z]/.test(pwd)),
    containDigit: (pwd) => (/\d/.test(pwd)),
    containNonAlphanumeric: (pwd) => (/[\W_]/.test(pwd)),
  }
  const { passHash, login, name, id } = req.user.admin
  const { oldPassword, newPassword } = req.body
  const oldPasswordHash = SHA1(oldPassword).toString()
  if (oldPasswordHash !== passHash) {
    return res.status(400).json({ errorId: 1020, message: '' })
  }
  const {
    minLength,
    notLoginAccount,
    notFullName,
    containUppercase,
    containLowercase,
    containDigit,
    containNonAlphanumeric,
  } = db.accountPolicy.getPasswordComplexity()
  if (!validatePwd.minLength(newPassword, minLength, 32)) {
    return res.status(400).json({ errorId: 10020, message: '' })
  }
  if (notLoginAccount && !validatePwd.notLoginAccount(newPassword, login)) {
    return res.status(400).json({ errorId: 10021, message: '' })
  }
  if (notFullName && !validatePwd.notFullName(newPassword, name)) {
    return res.status(400).json({ errorId: 10022, message: '' })
  }
  if (containUppercase && !validatePwd.containUppercase(newPassword)) {
    return res.status(400).json({ errorId: 10023, message: '' })
  }
  if (containLowercase && !validatePwd.containLowercase(newPassword)) {
    return res.status(400).json({ errorId: 10024, message: '' })
  }
  if (containDigit && !validatePwd.containDigit(newPassword)) {
    return res.status(400).json({ errorId: 10025, message: '' })
  }
  if (containNonAlphanumeric && !validatePwd.containNonAlphanumeric(newPassword)) {
    return res.status(400).json({ errorId: 10026, message: '' })
  }
  db.accounts.changePwd(id, newPassword)
  res.status(204).send() // default statusMessage for 204 is 'No Content'.
})

app.put('/rest/admins/:id/preferences', function(req, res) {
  const { id } = req.params
  const preferences = JSON.stringify(req.body.preferences)
  db.accounts.setUerPrefById(id, preferences)
  res.status(200).json({ preferences })
})

app.get('/rest/admingroups', function(req, res) {
  const admingroups = db.adminGroup.getAllExceptAdmin()
  res.status(200).json({
    admingroups,
    desc: false,
    itemsPerPage: 25,
    orderBy: 'name',
    page: 1,
    total: admingroups.length,
  })
})

app.get('/rest/admins', function(req, res) {
  const admins = db.accounts.getAll().map((user) => {
    const { permissionId } = user
    const admingroup =  db.adminGroup.getById(permissionId)
    return {
      ...skipKeys(user, ['permissionId', 'passHash']),
      admingroup,
    }
  })
  res.status(200).json({
    admins,
    desc: false,
    itemsPerPage: 25,
    orderBy: 'name',
    page: 1,
    total: admins.length,
  })
})

app.route('/rest/admins/accountPolicy')
  .get(function(req, res) {
    res.status(200).json(db.accountPolicy.getAll())
  })
  .put(function(req, res) {
    db.accountPolicy.updateAll(req.body)
    res.status(200).json(
      db.accountPolicy.getAllExceptMaxAttemptsOptions()
    )
  })

app.post('/rest/dashboard/:src/:type', function(req, res) {
  const dataKey = `${req.params.src}_${req.params.type}`
  const { period, topN, orderBy } = req.body
  const data = orderBy
    ? db.inoutDashboard.get(dataKey, period, topN, orderBy)
    : db.normalDashboard.get(dataKey, period, topN)
  if (data) return res.status(200).json({ statistic: data })
  return res.status(404).send()
})

app.post('/rest/logs/:src', function(req, res) {
  const src = req.params.src
  const queryParams = req.body
  const dataKeyMap = {
    ac: 'acLogs',
    adp: 'adpLogs',
    audit: 'auditLogs',
    ips: 'ipsLogs',
    sys: 'systemLogs',
    uf: 'ufLogs',
  }
  const errCode = db.logs.getErrorCode(src, queryParams)
  if (typeof errCode === 'number') return res.status(errCode).send() // errCode is error status code
  const data = db.logs.get(src, queryParams)
  return res.status(200).json({
    ...queryParams,
    hash: 11223344,
    total: data.length,
    [dataKeyMap[src]]: data,
  })
})

app.get('/rest/logs/options/:src/:type', function(req, res) {
  console.log('logs: url = ', req.url)
  console.log('logs: src = ', req.params.src)
  console.log('logs: type = ', req.params.type)
  res.status(200).send()

})
app.get('/rest/logs/options/:src', function(req, res) {
  console.log('logs: url = ', req.url)
  console.log('logs: src = ', req.params.src)
  res.status(200).send()

})

/**
 * create/update account, blockedList and backup/restore, update system time are last to do - START
 */
app.post('/rest/recovery/backup', function(req, res) {
  // res.status(500).json({ errorId: 5011, message: '' })
  res.status(500).json({ errorId: 5021, message: '' })
  res.status(500).send()
  
})
app.post('/rest/recovery/restoreCommit', function(req, res) {
  res.status(400).json({ errorId: 1001, message: '' })
  
})
app.post('/rest/recovery/validate', function(req, res) {
  // res.status(400).json({ errorId: 1030, message: '' })
  res.status(200).json({taskId: 123, isIntegrityOk: false})
  
})
app.get('/rest/admin/blockedList', function(req, res) {
  res.status(200).json({ blockedList: [] }) // wait to implement db.blockedList
})
/* 
 * END
 **/

const server = app.listen(port, function () {
  console.log(`Zeta mock server is listening at http://localhost:${port}`)
})
