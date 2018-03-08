const { deepCopy, skipKeys } = require('../../libs/utils')

const defaultData = {
  accountPolicy: {
    passwordComplexity: {
      minLength: 8,
      notLoginAccount: false,
      notFullName: false,
      containUppercase: false,
      containLowercase: false,
      containDigit: false,
      containNonAlphanumeric: false
    },
    bruteForceSetting: {
      enabled: false,
      maxAttempts: 3,
      maxAttemptsOptions: [ 3, 5, 10 ],
      duration: 300
    }
  }
}

class accountPolicy {
  constructor() {
    this.data = deepCopy(defaultData)
  }

  getAll = () => {
    return deepCopy(this.data)
  }

  getAllExceptMaxAttemptsOptions = () => {
    const data = deepCopy(this.data)
    data.accountPolicy.bruteForceSetting = skipKeys(
      data.accountPolicy.bruteForceSetting,
      ['maxAttemptsOptions']
    )
    return data
  }

  getPasswordComplexity = () => {
    return deepCopy(this.data.accountPolicy.passwordComplexity)
  }

  updatePasswordComplexity = (newData) => {
    this.data.accountPolicy.passwordComplexity = {
      ...this.data.accountPolicy.passwordComplexity,
      ...newData,
    }
  }

  updateBruteForceSetting = (newData) => {
    this.data.accountPolicy.bruteForceSetting = {
      ...this.data.accountPolicy.bruteForceSetting,
      ...newData,
    }
  }

  updateAll = (newData) => {
    const { passwordComplexity, bruteForceSetting } = newData.accountPolicy
    this.updatePasswordComplexity(passwordComplexity)
    this.updateBruteForceSetting(bruteForceSetting)
  }
}

module.exports = accountPolicy
