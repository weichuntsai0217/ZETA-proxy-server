const deepCopy = obj => {
  if (!obj || typeof obj !== 'object') return obj
  return JSON.parse(JSON.stringify(obj))
}
const chooseKeys = isPicked => (obj, keys) => {
  const res = Object.keys(obj).reduce((acc, k) => {
    if (isPicked ? keys.includes(k) : !keys.includes(k)) acc[k] = obj[k]
    return acc
  } , {})
  return deepCopy(res)
}
module.exports = {
  deepCopy,
  pickKeys: chooseKeys(true),
  skipKeys: chooseKeys(false),
}
