const { deepCopy } = require('../../libs/utils')
// response = {
//   admingroup: {id: 1, name: 'Admin', permissions: -1},
// }
const data = [
  {id: 1, name: 'Admin', permissions: -1},
  {id: 2, name: 'Editor', permissions: 3},
  {id: 3, name: 'Viewer', permissions: 1}
]

class AdminGroup {
  constructor() {
    this.data = data
  }

  getById = (qId) => {
    return deepCopy(this.data.find(item => item.id === parseInt(qId, 10)))
  }
  
  getAllExceptAdmin = () => deepCopy(this.data.filter(item => item.id !== 1))
}

module.exports = AdminGroup
