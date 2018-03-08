const { deepCopy } = require('../../libs/utils')

// data = [
//  {
//    userId,
//    sid,
//    lastUpdated,
//  }
// ]

class Session {
  constructor() {
    this.data = []
  }

  create = (userId, adminGroupName) => {
    const randomId = Math.floor(Math.random()*1000000)
    const sid = `mock-server-${adminGroupName}-${randomId}`
    this.data.push({
      userId: parseInt(userId, 10),
      sid,
      lastUpdated: Date.now(),
    })
    return sid
  }

  getAll = () => (
    deepCopy(this.data)
  )

  getByUserId = (qUserId) => {
    return deepCopy(this.data.find(item => item.userId === parseInt(qUserId, 10)))
  }

  getBySid = (qSid) => {
    return deepCopy(this.data.find(item => item.sid === qSid))
  }

  delete = (qUserId) => {
    const index = this.data.findIndex(item => item.userId === parseInt(qUserId, 10))
    if (index !== -1) this.data.splice(index, 1)
  }

  deleteBySid = (qSid) => {
    const index = this.data.findIndex(item => item.sid === qSid)
    if (index === -1) return false
    this.data.splice(index, 1)
    return true
  }
}

module.exports = Session 
