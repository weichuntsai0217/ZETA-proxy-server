const { deepCopy } = require('../../libs/utils')
/**
 *
  response = {
    info: {
      version: '1.2.0',
      name: 'Trend Micro Virtual Network Function Suite Director',
    }
  }
 *
 **/

class Sysinfo {
  constructor() {
    this.data = {
      info: {
        version: '1.2.0',
        name: 'Trend Micro Virtual Network Function Suite Director',
      }
    }
  }

  get = () => {
    return deepCopy(this.data)
  }
}

module.exports = Sysinfo
