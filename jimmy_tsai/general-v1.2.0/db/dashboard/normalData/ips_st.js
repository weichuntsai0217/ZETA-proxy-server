/**
 *
  topThreatBlocked: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/ips/st',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: data }
 **/

const data = [
    {
      "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
      "count": 21,
      "layer2": [
        {
          "key": "10.1.1.50",
          "count": 4
        },
        {
          "key": "10.1.1.57",
          "count": 4
        },
        {
          "key": "10.1.1.70",
          "count": 4
        },
        {
          "key": "10.1.1.55",
          "count": 3
        },
        {
          "key": "10.1.1.65",
          "count": 3
        },
        {
          "key": "10.1.1.52",
          "count": 2
        },
        {
          "key": "10.1.1.53",
          "count": 2
        },
        {
          "key": "10.1.1.54",
          "count": 2
        },
        {
          "key": "10.1.1.56",
          "count": 2
        },
        {
          "key": "10.1.1.58",
          "count": 2
        },
        {
          "key": "10.1.1.60",
          "count": 2
        },
        {
          "key": "10.1.1.63",
          "count": 2
        },
        {
          "key": "10.1.1.66",
          "count": 2
        },
        {
          "key": "10.1.1.67",
          "count": 2
        },
        {
          "key": "10.1.1.51",
          "count": 1
        },
        {
          "key": "10.1.1.59",
          "count": 1
        },
        {
          "key": "10.1.1.62",
          "count": 1
        },
        {
          "key": "10.1.1.64",
          "count": 1
        },
        {
          "key": "10.1.1.69",
          "count": 1
        }
      ]
    },
    {
      "key": "SHELLCODE BSD x86 Reverse Connect Shell",
      "count": 20,
      "layer2": [
        {
          "key": "10.1.1.63",
          "count": 5
        },
        {
          "key": "10.1.1.55",
          "count": 4
        },
        {
          "key": "10.1.1.57",
          "count": 3
        },
        {
          "key": "10.1.1.59",
          "count": 3
        },
        {
          "key": "10.1.1.60",
          "count": 3
        },
        {
          "key": "10.1.1.50",
          "count": 2
        },
        {
          "key": "10.1.1.53",
          "count": 2
        },
        {
          "key": "10.1.1.56",
          "count": 2
        },
        {
          "key": "10.1.1.58",
          "count": 2
        },
        {
          "key": "10.1.1.61",
          "count": 2
        },
        {
          "key": "10.1.1.62",
          "count": 2
        },
        {
          "key": "10.1.1.66",
          "count": 2
        },
        {
          "key": "10.1.1.68",
          "count": 2
        },
        {
          "key": "10.1.1.54",
          "count": 1
        },
        {
          "key": "10.1.1.64",
          "count": 1
        },
        {
          "key": "10.1.1.67",
          "count": 1
        },
        {
          "key": "10.1.1.69",
          "count": 1
        },
        {
          "key": "10.1.1.70",
          "count": 1
        }
      ]
    },
    {
      "key": "SHELLCODE Solaris SPARC Bind Shell",
      "count": 16,
      "layer2": [
        {
          "key": "10.1.1.59",
          "count": 6
        },
        {
          "key": "10.1.1.58",
          "count": 4
        },
        {
          "key": "10.1.1.63",
          "count": 3
        },
        {
          "key": "10.1.1.52",
          "count": 2
        },
        {
          "key": "10.1.1.56",
          "count": 2
        },
        {
          "key": "10.1.1.57",
          "count": 2
        },
        {
          "key": "10.1.1.60",
          "count": 2
        },
        {
          "key": "10.1.1.67",
          "count": 2
        },
        {
          "key": "10.1.1.50",
          "count": 1
        },
        {
          "key": "10.1.1.53",
          "count": 1
        },
        {
          "key": "10.1.1.54",
          "count": 1
        },
        {
          "key": "10.1.1.55",
          "count": 1
        },
        {
          "key": "10.1.1.64",
          "count": 1
        },
        {
          "key": "10.1.1.65",
          "count": 1
        },
        {
          "key": "10.1.1.66",
          "count": 1
        },
        {
          "key": "10.1.1.69",
          "count": 1
        },
        {
          "key": "10.1.1.70",
          "count": 1
        }
      ]
    },
    {
      "key": "EXPLOIT Generic HTML Threat -7",
      "count": 11,
      "layer2": [
        {
          "key": "10.1.1.63",
          "count": 4
        },
        {
          "key": "10.1.1.54",
          "count": 3
        },
        {
          "key": "10.1.1.53",
          "count": 2
        },
        {
          "key": "10.1.1.57",
          "count": 2
        },
        {
          "key": "10.1.1.59",
          "count": 2
        },
        {
          "key": "10.1.1.64",
          "count": 2
        },
        {
          "key": "10.1.1.50",
          "count": 1
        },
        {
          "key": "10.1.1.55",
          "count": 1
        },
        {
          "key": "10.1.1.61",
          "count": 1
        },
        {
          "key": "10.1.1.65",
          "count": 1
        },
        {
          "key": "10.1.1.66",
          "count": 1
        },
        {
          "key": "10.1.1.68",
          "count": 1
        },
        {
          "key": "10.1.1.69",
          "count": 1
        }
      ]
    },
    {
      "key": "DOS Microsoft RRAS VLS NULL Dereference",
      "count": 9,
      "layer2": [
        {
          "key": "10.1.1.54",
          "count": 3
        },
        {
          "key": "10.1.1.53",
          "count": 2
        },
        {
          "key": "10.1.1.61",
          "count": 2
        },
        {
          "key": "10.1.1.62",
          "count": 2
        },
        {
          "key": "10.1.1.69",
          "count": 2
        },
        {
          "key": "10.1.1.51",
          "count": 1
        },
        {
          "key": "10.1.1.58",
          "count": 1
        },
        {
          "key": "10.1.1.60",
          "count": 1
        },
        {
          "key": "10.1.1.64",
          "count": 1
        },
        {
          "key": "10.1.1.66",
          "count": 1
        },
        {
          "key": "10.1.1.68",
          "count": 1
        }
      ]
    }
]

module.exports = {
  data,
}
