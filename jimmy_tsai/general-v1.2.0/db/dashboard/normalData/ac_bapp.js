/**
 *
  topAppBlocked: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/ac/bapp',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: data }
 **/

const data = [
    {
      "key": "Datei.to",
      "count": 13874,
      "layer2": [
        {
          "key": "10.1.1.50",
          "count": 991
        },
        {
          "key": "10.1.1.53",
          "count": 991
        },
        {
          "key": "10.1.1.56",
          "count": 991
        },
        {
          "key": "10.1.1.57",
          "count": 991
        },
        {
          "key": "10.1.1.58",
          "count": 991
        },
        {
          "key": "10.1.1.70",
          "count": 991
        }
      ]
    },
    {
      "key": "ClubBox",
      "count": 8919,
      "layer2": [
        {
          "key": "10.1.1.52",
          "count": 991
        },
        {
          "key": "10.1.1.64",
          "count": 991
        }
      ]
    },
    {
      "key": "General",
      "count": 7928,
      "layer2": [
        {
          "key": "10.1.1.62",
          "count": 991
        },
        {
          "key": "10.1.1.70",
          "count": 991
        }
      ]
    },
    {
      "key": "Kazaa Lite Tools K++",
      "count": 7928,
      "layer2": [
        {
          "key": "10.1.1.56",
          "count": 1982
        },
        {
          "key": "10.1.1.59",
          "count": 991
        },
        {
          "key": "10.1.1.60",
          "count": 991
        },
        {
          "key": "10.1.1.62",
          "count": 991
        }
      ]
    },
    {
      "key": "MLSsoccer",
      "count": 7928,
      "layer2": [
        {
          "key": "10.1.1.53",
          "count": 1982
        },
        {
          "key": "10.1.1.58",
          "count": 991
        }
      ]
    },
    {
      "key": "Verychat",
      "count": 7928,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 991
        },
        {
          "key": "10.1.1.53",
          "count": 991
        },
        {
          "key": "10.1.1.62",
          "count": 991
        }
      ]
    },
    {
      "key": "NUBEOX",
      "count": 6937,
      "layer2": [
        {
          "key": "10.1.1.57",
          "count": 991
        },
        {
          "key": "10.1.1.66",
          "count": 991
        },
        {
          "key": "10.1.1.70",
          "count": 991
        }
      ]
    },
    {
      "key": "Telenet Mail",
      "count": 6937,
      "layer2": [
        {
          "key": "10.1.1.59",
          "count": 991
        },
        {
          "key": "10.1.1.64",
          "count": 991
        },
        {
          "key": "10.1.1.68",
          "count": 991
        },
        {
          "key": "10.1.1.69",
          "count": 991
        },
        {
          "key": "10.1.1.70",
          "count": 991
        }
      ]
    },
    {
      "key": "Rediff BOL",
      "count": 5946,
      "layer2": [
        {
          "key": "10.1.1.54",
          "count": 991
        },
        {
          "key": "10.1.1.55",
          "count": 991
        }
      ]
    },
    {
      "key": "QQ/TM",
      "count": 4955,
      "layer2": [
        {
          "key": "10.1.1.65",
          "count": 991
        },
        {
          "key": "10.1.1.68",
          "count": 991
        }
      ]
    },
    {
      "key": "RealPlayer",
      "count": 4955,
      "layer2": [
        {
          "key": "10.1.1.64",
          "count": 991
        },
        {
          "key": "10.1.1.68",
          "count": 991
        }
      ]
    },
    {
      "key": "Viaplay",
      "count": 4955,
      "layer2": [
        {
          "key": "10.1.1.68",
          "count": 991
        }
      ]
    },
    {
      "key": "IPMSG",
      "count": 3964,
      "layer2": [
        {
          "key": "10.1.1.55",
          "count": 991
        },
        {
          "key": "10.1.1.61",
          "count": 991
        },
        {
          "key": "10.1.1.68",
          "count": 991
        }
      ]
    },
    {
      "key": "CloudMe",
      "count": 2973,
      "layer2": [
        {
          "key": "10.1.1.54",
          "count": 991
        },
        {
          "key": "10.1.1.62",
          "count": 991
        }
      ]
    },
    {
      "key": "Deepnet Explorer",
      "count": 2973,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 991
        },
        {
          "key": "10.1.1.52",
          "count": 991
        },
        {
          "key": "10.1.1.61",
          "count": 991
        }
      ]
    }
]

module.exports = {
  data,
}
