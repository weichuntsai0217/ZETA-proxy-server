/**
 *
  topAnoBlocked: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/adp/badp',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 **/

const data = [
    {
      "key": "DOS Microsoft RRAS VLS NULL Dereference",
      "count": 4365200,
      "layer2": [
        {
          "key": "10.1.1.62",
          "count": 533200
        },
        {
          "key": "10.1.1.51",
          "count": 483800
        },
        {
          "key": "10.1.1.52",
          "count": 477600
        },
        {
          "key": "10.1.1.50",
          "count": 468600
        },
        {
          "key": "10.1.1.53",
          "count": 444400
        },
        {
          "key": "10.1.1.61",
          "count": 438300
        },
        {
          "key": "10.1.1.60",
          "count": 429500
        },
        {
          "key": "10.1.1.58",
          "count": 410600
        },
        {
          "key": "10.1.1.64",
          "count": 410300
        },
        {
          "key": "10.1.1.63",
          "count": 405600
        }
      ]
    },
    {
      "key": "SHELLCODE Solaris SPARC Bind Shell",
      "count": 4326200,
      "layer2": [
        {
          "key": "10.1.1.57",
          "count": 484500
        },
        {
          "key": "10.1.1.67",
          "count": 468600
        },
        {
          "key": "10.1.1.54",
          "count": 455300
        },
        {
          "key": "10.1.1.60",
          "count": 450800
        },
        {
          "key": "10.1.1.62",
          "count": 441700
        },
        {
          "key": "10.1.1.51",
          "count": 427300
        },
        {
          "key": "10.1.1.58",
          "count": 425900
        },
        {
          "key": "10.1.1.64",
          "count": 407500
        },
        {
          "key": "10.1.1.59",
          "count": 406200
        },
        {
          "key": "10.1.1.66",
          "count": 400900
        }
      ]
    },
    {
      "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
      "count": 4187600,
      "layer2": [
        {
          "key": "10.1.1.53",
          "count": 520000
        },
        {
          "key": "10.1.1.63",
          "count": 497600
        },
        {
          "key": "10.1.1.58",
          "count": 479200
        },
        {
          "key": "10.1.1.57",
          "count": 471500
        },
        {
          "key": "10.1.1.70",
          "count": 448600
        },
        {
          "key": "10.1.1.55",
          "count": 447400
        },
        {
          "key": "10.1.1.54",
          "count": 426200
        },
        {
          "key": "10.1.1.60",
          "count": 413600
        },
        {
          "key": "10.1.1.51",
          "count": 393200
        },
        {
          "key": "10.1.1.64",
          "count": 392300
        }
      ]
    },
    {
      "key": "EXPLOIT Generic HTML Threat -7",
      "count": 3894500,
      "layer2": [
        {
          "key": "10.1.1.70",
          "count": 477500
        },
        {
          "key": "10.1.1.55",
          "count": 439100
        },
        {
          "key": "10.1.1.58",
          "count": 416900
        },
        {
          "key": "10.1.1.62",
          "count": 404100
        },
        {
          "key": "10.1.1.50",
          "count": 401600
        },
        {
          "key": "10.1.1.51",
          "count": 398100
        },
        {
          "key": "10.1.1.53",
          "count": 390800
        },
        {
          "key": "10.1.1.57",
          "count": 369200
        },
        {
          "key": "10.1.1.60",
          "count": 363900
        },
        {
          "key": "10.1.1.69",
          "count": 360400
        }
      ]
    },
    {
      "key": "SHELLCODE BSD x86 Reverse Connect Shell",
      "count": 3600400,
      "layer2": [
        {
          "key": "10.1.1.52",
          "count": 388100
        },
        {
          "key": "10.1.1.54",
          "count": 381500
        },
        {
          "key": "10.1.1.69",
          "count": 374400
        },
        {
          "key": "10.1.1.65",
          "count": 374000
        },
        {
          "key": "10.1.1.64",
          "count": 363100
        },
        {
          "key": "10.1.1.53",
          "count": 362000
        },
        {
          "key": "10.1.1.56",
          "count": 351300
        },
        {
          "key": "10.1.1.59",
          "count": 336800
        },
        {
          "key": "10.1.1.62",
          "count": 335700
        },
        {
          "key": "10.1.1.51",
          "count": 333600
        }
      ]
    }
]

module.exports = {
  data,
}

