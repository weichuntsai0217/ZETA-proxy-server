const { deepCopy } = require('../../libs/utils')
/**
 *
  response = {
    urlDb: {
      mode: 0,
      server: '',
      port: 5274,
    }
  }
 *
 **/
const defaultData = {
  mode: 0,
  server: '',
  port: 5274,
}


class UrlDb {
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

module.exports = UrlDb 
