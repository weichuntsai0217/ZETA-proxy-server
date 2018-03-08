const { deepCopy } = require('../../libs/utils')
const defaultData = {
  redirectEnabled: false,
  redirectUrl: '',
  message: 'Trend Micro VNFS has detected a suspicious connection attempt from your computer. If you have any questions, contact your security administrator.',
}

class Notification {
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

module.exports = Notification 
