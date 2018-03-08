const { deepCopy } = require('../../libs/utils')
const normalData = require('./normalData')
const inoutData = require('./inoutData')
const defaultMinPeriod = 10 // in minutes
const defaultMaxTopN = 20 // in minutes

class NormalDashboard {
  constructor(minPeriod, maxTopN) {
    this.sets = normalData
    this.minPeriod = minPeriod || defaultMinPeriod
    this.maxTopN = maxTopN || defaultMaxTopN
  }

  get = (dataKey, period, topN) => {
    const target = this.sets[dataKey]
    if (!target || !target.data) return undefined
    const data = target.data
    if (period <= this.minPeriod) return []
    if (topN > this.maxTopN) return deepCopy(data)
    return deepCopy(data.slice(0, topN))
  }
}

class InoutDashboard {
  constructor(minPeriod, maxTopN) {
    this.sets = inoutData
    this.minPeriod = minPeriod || defaultMinPeriod
    this.maxTopN = maxTopN || defaultMaxTopN
  }

  get = (dataKey, period, topN, orderBy) => {
    const target = this.sets[dataKey]
    if (!target || !target[orderBy]) return undefined
    const data = target[orderBy]
    if (period <= this.minPeriod) return []
    if (topN > this.maxTopN) return deepCopy(data)
    return deepCopy(data.slice(0, topN))
  }
}

module.exports = {
  NormalDashboard,
  InoutDashboard,
}
