/**
 *
  topWrsCat: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/wrs/burlcat',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: data }
 **/

const data = [
    {
      "key": "Adult / Mature Content",
      "count": 1000
    }
]

module.exports = {
  data,
}
