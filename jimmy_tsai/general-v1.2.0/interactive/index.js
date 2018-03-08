const readline = require('readline')

class Interactive {
  static cmds = {
    cg: ['ls', 'add', 'del', 'dall'],
    // common status codes for "rscode" mode are 400, 401, 403, 404, 405, 500
  }
  
  static emptyRouteMsg = 'Route list is empty.'

  static selectingMsg = '(Press "space" to select, "delete/del" to confirm delete, or "esc" to cancel delete)'

  static rsMode = ['rscode', 'rserrid', 'rsmsg']

  static isRsMode = mode => Interactive.rsMode.includes(mode)

  static getPrefix = (mode, s) => {
    if (mode === 'cg') return 'Config > '
    if (mode === 'rscode') return `Resp ${s} error status code> `
    if (mode === 'rserrid') return `Resp ${s} errorId> `
    if (mode === 'rsmsg') return `Resp ${s} message> `
    return 'undefined >'
  }

  static isInRouteList = (target, list) => (
    list.some(
      item => item.method === target.method && item.url === target.url
    )
  )

  constructor(stdin, stdout, routeList) {
    this.stdin = stdin
    this.stdout = stdout
    this.reqQueue = []
    this.customResp = {
      statusCode: '',
      errorId: '',
      message: '',
    }
    this.routeList = Array.isArray(routeList) ? routeList : [],
    // routeList = [
    //   {
    //     method: 'POST',
    //     url: '/rest/admin/login'
    //   },
    //   ...etc
    // ]
    // UI state - START
    this.state = {
      mode: 'cg', // 'cg', 'rscode', 'rserrid', 'rsmsg'
      hintMsg: '',
      options: [],
      selected: [],
      // historyStack: [], todo
    }
    // UI state - END
    this.cursorPosY = 0
    this.rl = readline.createInterface({
      input: stdin,
      output: stdout,
      historySize: 0, // disable history to avoid keypress of "up" behavior
    })
    this.stdin.setRawMode(true)
    this.renderPrompt()
    this.addListeners()
  }
  
  setState = (newState) => {
    const oldOptionLength = this.state.options.length
    this.state = {
      ...this.state,
      ...newState,
    }
    const { hintMsg, options } = this.state
    if (hintMsg && oldOptionLength === 0) {
      console.log(hintMsg)
    }
    if (options.length === 0) {
      this.renderPrompt()
    } else {
      this.renderOptions()
    }
  }

  renderOptions = () => {
    const { rl, stdout, cursorPosY } = this
    const { options, selected } = this.state
    const items = [ ...options ]
    readline.cursorTo(stdout, 0)
    readline.moveCursor(stdout, 0, -1 * cursorPosY)
    selected.forEach((idx) => {
      items[idx] = items[idx].replace(' ', 'V')
    })
    console.log(items.join('\n'))
    readline.moveCursor(stdout, 0, -1 * items.length + cursorPosY)
  }

  addListeners = () => {
    this.rl.on('line', (line) => {
      // 'line' event is only triggered by keypress of 'return' or 'enter'
      // and is triggered before 'keypress' of stdin
      const { stdout } = this
      const { mode, options } = this.state
      const input = line.trim()
      if (mode === 'cg' && options.length === 0) {
        if (input.startsWith('add')) {
          // input = "add ${method} ${url}". For example, "add POST /rest/admin/login"
          this.handleAddRoute(input)
          return
        }
        switch (input) {
          case 'ls':
            this.handleListRoute()
            break
          case 'del':
            this.handleDel()
            break
          case 'dall':
            this.handleDall()
            break
          default:
            this.handleCmdNotFound(mode)
            break
        }
      } else if (mode === 'cg' && options.length !== 0) {
        readline.cursorTo(stdout, 0)
        readline.moveCursor(stdout, 0, -1)
      } else if (Interactive.isRsMode(mode)) {
        this.handlePressEnterUnderRsMode(mode, input)
      }
    })

    this.stdin.on('keypress', (str, key) => {
      const { mode, options } = this.state
      const { sequence, name, ctrl, meta, shift } = key
      if (ctrl && name === 'c') {
        console.log('\nExit this process, bye bye!')
        process.exit()
      }
      if (name === 'escape') {
        this.handlePressEsc()
        return
      }
      if (mode === 'cg' && options.length !== 0) {
        // Keep going - START
        if (!ctrl && name === 'up') {
          this.handlePressUp()
        } else if (!ctrl && name === 'down') {
          this.handlePressDown()
        } else if (name === 'left' || name === 'right') {
          this.handlePressLeftOrRight()
        } else if (name === 'space') {
          this.handlePressSpace()
        } else if (name === 'backspace') {
          this.handlePressDelete()
        } else {
          this.handlePressOthers()
        }
        // Keep going - END
      
      }
    
    })
  }

  updateCustomResp = (key, value) => {
    this.customResp[key] = value
  }

  resetCustomResp = () => {
    this.customResp = {
      statusCode: '',
      errorId: '',
      message: '',
    }
  }

  handlePressEnterUnderRsMode = (mode, value) => {
    const { reqQueue } = this
    if (value === 'pass') {
      reqQueue.shift().next()
      if (reqQueue.length === 0) {
        this.setState({
          mode: 'cg',
          hintMsg: '',
          options: [],
          selected: [],
        })
      
      } else {
        this.setState({
          mode: 'rscode',
          hintMsg: '',
          options: [],
          selected: [],
        })
      }
      return
    }
    console.log('before reqQueue.length = ', reqQueue.length)
    if (mode === 'rscode') {
      this.updateCustomResp('statusCode' , value)
      this.setState({
        mode: 'rserrid',
        hintMsg: '',
        options: [],
        selected: [],
      })
    }
    if (mode === 'rserrid') {
      this.updateCustomResp('errorId' , value)
      this.setState({
        mode: 'rsmsg',
        hintMsg: '',
        options: [],
        selected: [],
      })
    }
    if (mode === 'rsmsg') {
      this.updateCustomResp('message' , value)
      const { statusCode, errorId, message } = this.customResp
      const { res } = reqQueue.shift()
      if (errorId) {
        res.status(statusCode).json({ errorId, message })
      } else {
        res.status(statusCode).send()
      }
      console.log('after reqQueue.length = ', reqQueue.length)
      if (reqQueue.length === 0) {
        this.setState({
          mode: 'cg',
          hintMsg: '',
          options: [],
          selected: [],
        })
      
      } else {
        this.setState({
          mode: 'rscode',
          hintMsg: '',
          options: [],
          selected: [],
        })
      }
    }
  }

  handlePressEsc = () => {
    this.updateCursorPosY(0)
    this.setState({
      mode: this.state.mode,
      hintMsg: '',
      options: [],
      selected: [],
    })
  }

  handlePressDelete = () => {
    const { routeList } = this
    const { selected } = this.state
    this.updateCursorPosY(0)
    this.updateRouteList(
      routeList.filter((item, index) => !selected.includes(index))
    )
    this.setState({
      mode: 'cg',
      hintMsg: '',
      options: [],
      selected: [],
    })
    
  }

  updateCursorPosY = (val) => {
    this.cursorPosY = val
  }

  handlePressUp = () => {
    const { stdout } = this
    const tmp = this.cursorPosY - 1
    const topLimit = 0
    if (tmp >= topLimit) {
      this.updateCursorPosY(tmp)
      readline.moveCursor(stdout, 0, -1)
    }
  }

  handlePressDown = () => {
    const { stdout } = this
    const bottomLimit = this.state.options.length - 1
    const tmp = this.cursorPosY + 1
    if (tmp <= bottomLimit) { 
      this.updateCursorPosY(tmp)
      readline.moveCursor(stdout, 0, 1)
    }
  }

  handlePressLeftOrRight = () => {
    const { stdout } = this
    readline.cursorTo(stdout, 0)
  }

  handlePressSpace = () => {
    const index = this.state.selected.indexOf(this.cursorPosY)
    if (index === -1) {
      this.setState({
        selected: [ ...this.state.selected, this.cursorPosY ]
      })
    } else {
      let newSelected = [ ...this.state.selected ]
      newSelected.splice(index, 1)
      this.setState({
        selected: newSelected,
      })
    }
  }

  handlePressOthers = () => {
    this.setState({})
  }

  renderPrompt = () => {
    const { getPrefix, isRsMode } = Interactive
    const { rl, reqQueue } = this
    const { mode } = this.state
    const s = isRsMode(mode) && reqQueue.length !== 0 && reqQueue[0]
      ? `${reqQueue[0].req.method} ${reqQueue[0].req.url}`
      : ''
    rl.setPrompt(getPrefix(mode, s))
    rl.prompt()
  }

  handleAddRoute = (input) => {
    const ary = input.split(' ').map(s => s.trim())
    if (
      ary.length !== 3 || !ary[0] || !ary[1] || !ary[2] ||
      typeof ary[0] !== 'string' ||
      typeof ary[1] !== 'string' ||
      typeof ary[2] !== 'string'
    ) {
      this.setState({
        mode: 'cg',
        hintMsg: [
          'Input format is invalid for "add" command.',
          'The valid format is like',
          '"add GET /aaa/bbb/ccc".',
          'Note that only single space is allowed.',
        ].join(' '),
        options: [],
        selected: [],
      })
    } else {
      this.appendToRouteList({ method: ary[1], url: ary[2] })
      this.setState({
        mode: 'cg',
        hintMsg: 'Add a new route successfully.',
        options: [],
        selected: [],
      })
    }
  }

  handleListRoute = () => {
    const hintMsg = this.routeList.length === 0
      ? Interactive.emptyRouteMsg
      : this.routeList.map(({ method, url }) => `${method} ${url}`).join('\n')
    this.setState({
      mode: 'cg',
      hintMsg,
      options: [],
      selected: [],
    })
  }

  handleDel = () => {
    if (this.routeList.length === 0) {
      this.setState({
        mode: 'cg',
        hintMsg: Interactive.emptyRouteMsg,
        options: [],
        selected: [],
      })
      return
    }
    const options = this.routeList.map(
      ({ method, url }) => `  ${method} ${url}`
    )
    this.setState({
      mode: 'cg',
      hintMsg: Interactive.selectingMsg,
      options: options,
      selected: [],
    })
  }

  handleDall = () => {
    this.updateRouteList([])
    this.setState({
      mode: 'cg',
      hintMsg: '',
      options: [],
      selected: [],
    })
  }

  handleCmdNotFound = (mode) => {
    const s = Interactive.cmds[mode].map(s => `"${s}"`).join(', ')
    this.setState({
      mode: 'cg',
      hintMsg: `Command Not Found! Available commands are ${s}`,
      options: [],
      selected: [],
    })
  }

  appendToRouteList = (route) => {
    this.routeList.push(route)
  }

  updateRouteList = (newList) => {
    this.routeList = newList
  }

  updateReqQueue = (req, res, next) => {
    this.reqQueue.push({req, res, next})
    if (this.reqQueue.length === 1) {
      this.setState({
        mode: 'rscode',
        hintMsg: '',
        options: [],
        selected: [],
      })
    }
  }
    
  interactiveHandler = (req, res, next) => {
    const { isInRouteList } = Interactive
    const { routeList } = this
    if (isInRouteList(req, routeList)) {
      this.updateReqQueue(req, res, next)
    } else {
      return next()
    }
  
  } // for server.js use
}

module.exports = Interactive
