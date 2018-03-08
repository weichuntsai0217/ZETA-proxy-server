/**
 *
  topWrsCatTraffic: ({ top: topN, volOrderBy: orderBy, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/wrs/urlvol',
    key: 'statistic',
    form: { topN, orderBy, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: dataBoth }
 response = { statistic: dataIn }
 response = { statistic: dataOut }
 **/

const dataBoth = [
    {
      "key": "Adult / Mature Content",
      "in": 1000,
      "out": 1000
    }
]

const dataIn = [
    {
      "key": "Adult / Mature Content",
      "count": 1000
    }
]

const dataOut = [
    {
      "key": "Adult / Mature Content",
      "count": 1000
    }
]

module.exports = {
  both: dataBoth,
  in: dataIn,
  out: dataOut,
}
