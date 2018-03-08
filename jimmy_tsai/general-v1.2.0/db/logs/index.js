const { deepCopy, pickKeys, skipKeys } = require('../../libs/utils')
const data = require('./data')
const defaultMinPeriod = 60 // in minutes

class Logs {
  static maxItems = 5000
  static isEmptyObj = obj => (Object.keys(obj).length === 0)
  static divideObj = (obj, needKeys) => ({
    needObj: pickKeys(obj, needKeys),
    others: skipKeys(obj, needKeys),
  })
  static isAllPass = obj => (
    !Object.keys(obj).some(k => typeof obj[k] !== 'string')
  )
  static conditionKeysMap = {
    ac: [
      'srcIp',
      'instanceId',
      'policyName',
      'behaviorId',
      'actionId',
      'categoryId',
      'applicationName',
    ],
    adp: [
      'srcIp',
      'instanceId',
      'dstPort',
      'signatureName',
      'policyName',
      'vlanId',
      'signatureSeverityId',
      'signatureCategoryId',
      'signatureId',
      'actionId',
      'srcPort',
      'dstIp',
    ],
    audit: [ 'adminIp' ],
    ips: [
      'srcIp',
      'policyName',
      'vlanId',
      'signatureSeverityId',
      'signatureCategoryId',
      'signatureId',
      'srcMsisdn',
      'srcPort',
      'instanceId',
      'dstPort',
      'signatureName',
      'actionId',
      'dstIp',
    ],
    sys: [ 'instanceId', 'severity' ],
    uf: [
      'srcIp',
      'instanceId',
      'policyName',
      'vlanId',
      'actionId',
      'category',
      'url',
    ],
  }
  static isDataConditionValid = (conditions, conditionKeys) => {
    const { divideObj, isEmptyObj, isAllPass } = Logs
    const { needObj, others} = divideObj(conditions, conditionKeys)
    if (!isEmptyObj(others)) return false
    if (!isAllPass(needObj)) return false
    return true
  }

  static isItemsValid = (queryParams) => {
    const { items } = queryParams
    if (
      !items ||
      typeof items !== 'number' ||
      items < 0
    ) return false
    return true
  }

  static isTimeValid = (queryParams) => {
    const { period } = queryParams
    if (typeof period !== 'number') return false
    if (period !== 0) {
      // if period !== 0, please FE don't send startTime or endTime keys in queryParams
      if (queryParams.hasOwnProperty('startTime')) return false
      if (queryParams.hasOwnProperty('endTime')) return false
    } else {
      if (!queryParams.hasOwnProperty('startTime')) return false
      if (!queryParams.hasOwnProperty('endTime')) return false
      const { startTime, endTime } = queryParams
      if (typeof startTime !== 'number') return false
      if (typeof endTime !== 'number') return false
      if (startTime > endTime) return false
    }
    return true
  }

  static isConditionsValid = (src, queryParams) => {
    const { conditions } = queryParams
    const { isDataConditionValid, conditionKeysMap } = Logs
    if (
      !conditions ||
      Array.isArray(conditions) ||
      typeof conditions !== 'object'
    ) {
      return false
    }
    if (!isDataConditionValid(conditions, conditionKeysMap[src])) {
      return false
    }
    return true
  }

  constructor(minPeriod) {
    this.sets = data
    this.minPeriod = minPeriod || defaultMinPeriod
  }


  getErrorCode = (src, queryParams) => {
    // queryParams = { items, period, conditions, startTime, endTime }
    const { isItemsValid, isTimeValid, isConditionsValid } = Logs
    if (!this.sets.hasOwnProperty(src)) return 404 // src is wrong, data is 404 Not Found
    if (
      !queryParams ||
      Array.isArray(queryParams) ||
      typeof queryParams !== 'object'
    ) return 400
    if (
      !isItemsValid(queryParams) ||
      !isTimeValid(queryParams) ||
      !isConditionsValid(src, queryParams)
    ) return 400 // queryParams is not valid. 400 Bad Request
    return null
  }

  get = (src, queryParams) => {
    const { items, period } = queryParams
    const data = this.sets[src]
    if (!data || !Array.isArray(data)) {
      throw 'Error: the "data" argument of Logs.get is not an array.'
    }
    if (period <= this.minPeriod) return []
    if (items > Logs.maxItems) return deepCopy(data)
    return deepCopy(data.slice(0, items))
  }
}

module.exports = Logs
