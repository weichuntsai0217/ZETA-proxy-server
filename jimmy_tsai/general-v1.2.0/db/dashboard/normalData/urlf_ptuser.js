/**
 *
  topHostUrlDetect: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/urlf/ptuser',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: data }
 **/

const data = [
    {
      "key": "10.1.1.51",
      "count": 7,
      "layer2": [
        {
          "key": "Illegal / Prohibited Content",
          "count": 2
        },
        {
          "key": "Sex Education",
          "count": 2
        },
        {
          "key": "Adult / Mature Content",
          "count": 1
        },
        {
          "key": "Illegal / Questionable",
          "count": 1
        },
        {
          "key": "General",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.60",
      "count": 4,
      "layer2": [
        {
          "key": "General",
          "count": 2
        },
        {
          "key": "Violence / Hate / Racism",
          "count": 1
        },
        {
          "key": "Abortion",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.68",
      "count": 4,
      "layer2": [
        {
          "key": "Pornography",
          "count": 1
        },
        {
          "key": "Illegal / Questionable",
          "count": 1
        },
        {
          "key": "Arts",
          "count": 1
        },
        {
          "key": "General",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.55",
      "count": 3,
      "layer2": [
        {
          "key": "Sex Education",
          "count": 1
        },
        {
          "key": "Intimate Apparel / Swimsuit",
          "count": 1
        },
        {
          "key": "General",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.57",
      "count": 3,
      "layer2": [
        {
          "key": "Adult / Mature Content",
          "count": 1
        },
        {
          "key": "Sex Education",
          "count": 1
        },
        {
          "key": "Gambling",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.58",
      "count": 3,
      "layer2": [
        {
          "key": "Adult / Mature Content",
          "count": 1
        },
        {
          "key": "Illegal / Prohibited Content",
          "count": 1
        },
        {
          "key": "Gambling",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.63",
      "count": 3,
      "layer2": [
        {
          "key": "General",
          "count": 2
        },
        {
          "key": "Tasteless",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.66",
      "count": 3,
      "layer2": [
        {
          "key": "General",
          "count": 2
        },
        {
          "key": "Pornography",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.69",
      "count": 3,
      "layer2": [
        {
          "key": "Illegal / Prohibited Content",
          "count": 1
        },
        {
          "key": "Recreation / Hobbies",
          "count": 1
        },
        {
          "key": "Arts",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.70",
      "count": 3,
      "layer2": [
        {
          "key": "Alcohol / Tobacco",
          "count": 1
        },
        {
          "key": "Abortion",
          "count": 1
        },
        {
          "key": "Recreation / Hobbies",
          "count": 1
        }
      ]
    }
]

module.exports = {
  data,
}
