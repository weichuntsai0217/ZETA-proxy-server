/**
 *
  topHostAppBlocked: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/ac/buser',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: data }
 **/

const data = [
    {
      "key": "10.1.1.68",
      "count": 4955,
      "layer2": [
        {
          "key": "IPMSG",
          "count": 991
        },
        {
          "key": "QQ/TM",
          "count": 991
        },
        {
          "key": "RealPlayer",
          "count": 991
        },
        {
          "key": "Telenet Mail",
          "count": 991
        },
        {
          "key": "Viaplay",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.53",
      "count": 3964,
      "layer2": [
        {
          "key": "MLSsoccer",
          "count": 1982
        },
        {
          "key": "Datei.to",
          "count": 991
        },
        {
          "key": "Verychat",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.62",
      "count": 3964,
      "layer2": [
        {
          "key": "CloudMe",
          "count": 991
        },
        {
          "key": "General",
          "count": 991
        },
        {
          "key": "Kazaa Lite Tools K++",
          "count": 991
        },
        {
          "key": "Verychat",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.70",
      "count": 3964,
      "layer2": [
        {
          "key": "Datei.to",
          "count": 991
        },
        {
          "key": "General",
          "count": 991
        },
        {
          "key": "NUBEOX",
          "count": 991
        },
        {
          "key": "Telenet Mail",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.56",
      "count": 2973,
      "layer2": [
        {
          "key": "Kazaa Lite Tools K++",
          "count": 1982
        },
        {
          "key": "Datei.to",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.64",
      "count": 2973,
      "layer2": [
        {
          "key": "ClubBox",
          "count": 991
        },
        {
          "key": "RealPlayer",
          "count": 991
        },
        {
          "key": "Telenet Mail",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.51",
      "count": 1982,
      "layer2": [
        {
          "key": "Deepnet Explorer",
          "count": 991
        },
        {
          "key": "Verychat",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.52",
      "count": 1982,
      "layer2": [
        {
          "key": "ClubBox",
          "count": 991
        },
        {
          "key": "Deepnet Explorer",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.54",
      "count": 1982,
      "layer2": [
        {
          "key": "CloudMe",
          "count": 991
        },
        {
          "key": "Rediff BOL",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.55",
      "count": 1982,
      "layer2": [
        {
          "key": "IPMSG",
          "count": 991
        },
        {
          "key": "Rediff BOL",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.57",
      "count": 1982,
      "layer2": [
        {
          "key": "Datei.to",
          "count": 991
        },
        {
          "key": "NUBEOX",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.58",
      "count": 1982,
      "layer2": [
        {
          "key": "Datei.to",
          "count": 991
        },
        {
          "key": "MLSsoccer",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.59",
      "count": 1982,
      "layer2": [
        {
          "key": "Kazaa Lite Tools K++",
          "count": 991
        },
        {
          "key": "Telenet Mail",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.61",
      "count": 1982,
      "layer2": [
        {
          "key": "Deepnet Explorer",
          "count": 991
        },
        {
          "key": "IPMSG",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.50",
      "count": 991,
      "layer2": [
        {
          "key": "Datei.to",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.60",
      "count": 991,
      "layer2": [
        {
          "key": "Kazaa Lite Tools K++",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.65",
      "count": 991,
      "layer2": [
        {
          "key": "QQ/TM",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.66",
      "count": 991,
      "layer2": [
        {
          "key": "NUBEOX",
          "count": 991
        }
      ]
    },
    {
      "key": "10.1.1.69",
      "count": 991,
      "layer2": [
        {
          "key": "Telenet Mail",
          "count": 991
        }
      ]
    }
]

module.exports = {
  data,
}
