/**
 * Setting follows the link below:
 * https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
 */
var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000

/**
 * Data - START
 */
let adminUser = {
  admin: {
    admingroup: {id: 1, name: 'Admin', permissions: -1},
    description: null,
    email: '',
    id: 1,
    login: 'admin',
    name: 'MOCK-ADMIN',
    preferences: '',
    needChangePwd: false,
  },
  clientIp: '1.1.1.1',
  sid: 'mock-server-admin-sid',
}

let editorUser = {
  admin: {
    admingroup: {id: 2, name: 'Editor', permissions: 3},
    description: null,
    email: '',
    id: 2,
    login: 'editor',
    name: 'MOCK-EDITOR',
    preferences: '',
    needChangePwd: true,
  },
  clientIp: '1.1.1.1',
  sid: 'mock-server-editor-sid',
}

let viewerUser = {
  admin: {
    admingroup: {id: 3, name: 'Viewer', permissions: 1},
    description: null,
    email: '',
    id: 3,
    login: 'viewer',
    name: 'MOCK-VIEWER',
    preferences: '',
    needChangePwd: true,
  },
  clientIp: '1.1.1.1',
  sid: 'mock-server-viewer-sid',
}
/**
 * Data - END
 */


app.use(bodyParser.json())
app.post('/rest/admin/login', function (req, res) {
  const { login, passhash } = req.headers
  console.log('login: ', login)
  console.log('passhash: ', passhash)
  res.status(200).json(adminUser);
  // res.status(500).json({errorId: 500, msg: 'bbb'});
})

app.post('/rest/admin/logout', function (req, res) {
   res.status(500).json({errorId: 500, msg: 'aaa'});
})

app.post('/rest/admin/chpass', function (req, res) {
   adminUser.admin.needChangePwd = false
   res.status(204).json({})
})

app.post('/rest/recovery/backup', function(req, res) {
    var filename = 'backup-mock-server.zip';
    var fileDir = './' + filename
    var mimeType = 'application/octet-stream';
    fs.stat(fileDir, function(error, stat) {
      if (error) { throw error; }
      res.writeHead(200, {
        'content-disposition': 'attachment; filename = ' + filename,
        'content-type' : mimeType,
        'Content-Length' : stat.size
      });
      
      var fileStream = fs.createReadStream(fileDir);
      fileStream.on('data', function (data) {
          res.write(data);
      });
      fileStream.on('end', function() {
          res.end();
      });

    });
})

var server = app.listen(PORT, function () {
   console.log(`Mock server is listening at http://localhost:${PORT}`)
})
