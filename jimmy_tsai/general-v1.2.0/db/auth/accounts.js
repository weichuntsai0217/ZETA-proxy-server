const SHA1 = require('crypto-js/sha1')
const { deepCopy } = require('../../libs/utils')
// response = {
//   admin: {
//     admingroup: {id: 1, name: 'Admin', permissions: -1},
//     description: null,
//     email: '',
//     id: 1,
//     login: 'admin',
//     name: 'MOCK-ADMIN',
//     preferences: '',
//     needChangePwd: false,
//   },
//   clientIp: '1.1.1.1',
//   sid: 'mock-server-admin-sid',
// }

let adminUser = {
  permissionId: 1,
  description: null,
  email: '',
  id: 1,
  login: 'admin',
  passHash: 'd864934644cd577757afa824138ae169fd5ecbed', // "trendmicro" hashed by SHA1 in FE
  name: 'MOCK-ADMIN',
  preferences: '',
  needChangePwd: true,
  email_alert: false,
  isDefault: true,
}

let editorUser = {
  permissionId: 2,
  description: null,
  email: '',
  id: 2,
  login: 'editor',
  passHash: 'd864934644cd577757afa824138ae169fd5ecbed', // "trendmicro" hashed by SHA1 in FE
  name: 'MOCK-EDITOR',
  preferences: '',
  needChangePwd: true,
  email_alert: false,
  isDefault: false,
}


let viewerUser = {
  permissionId: 3,
  description: null,
  email: '',
  id: 3,
  login: 'viewer',
  passHash: 'd864934644cd577757afa824138ae169fd5ecbed', // "trendmicro" hashed by SHA1 in FE
  name: 'MOCK-VIEWER',
  preferences: '',
  needChangePwd: true,
  email_alert: false,
  isDefault: false,
}


let data = [adminUser, editorUser, viewerUser]

class Accounts {
  constructor() {
    this.data = deepCopy(data)
    this.nextId = data.length + 1
  }

  getAll = () => deepCopy(this.data)

  getById = (qId) => deepCopy(this.data.find(item => item.id === parseInt(qId, 10)))

  searchAccount = (qLogin, qPassHash) => {
    const user = this.data.find(
      ({login, passHash}) => (login === qLogin && passHash === qPassHash)
    )
    return deepCopy(user) || undefined
  }

  setUerPrefById = (qId, preferences) => {
    qId = parseInt(qId, 10)
    let user = this.data.find(item => item.id === qId)
    if (user) {
      user.preferences = preferences
    } else {
      throw 'setUerPrefById failed: id doesn\'t exist.'
    }
  }

  changePwd = (qId, password) => {
    qId = parseInt(qId, 10)
    let user = this.data.find(item => item.id === qId)
    user.passHash = SHA1(password).toString()
    if (user.needChangePwd) user.needChangePwd = false
  }

}

module.exports = Accounts 
