const { deepCopy } = require('../../libs/utils')
/**
 *
  response = {
    primary: {
      server: '',
      port: 514,
      facility: 16,
      protocol: 'UDP',
      enabled: false,
      logTypes: 0,
    },
    secondary: {
      server: '',
      port: 514,
      facility: 16,
      protocol: 'UDP',
      enabled: false,
      logTypes: 0,
    },
  }
 *
 **/

const defaultData = {
  primary: {
    server: '',
    port: 514,
    facility: 16,
    protocol: 'UDP',
    enabled: false,
    logTypes: 0,
  },
  secondary: {
    server: '',
    port: 514,
    facility: 16,
    protocol: 'UDP',
    enabled: false,
    logTypes: 0,
  },
}

class Syslog {
  constructor() {
    this.data = deepCopy(defaultData)
  }

  get = () => {
    return deepCopy(this.data)
  }

  update = (newData) => {
    this.data = {
      ...this.data,
      ...newData,
    }
  }
}

module.exports = Syslog
