/**
 *
  topUrlBlocked: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/urlf/burl',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: data }
 **/
const data = [
    {
      "key": "test1",
      "count": 4,
      "layer2": [
        {
          "key": "10.1.1.55",
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
      "key": "test12",
      "count": 4,
      "layer2": [
        {
          "key": "10.1.1.68",
          "count": 2
        },
        {
          "key": "10.1.1.57",
          "count": 1
        },
        {
          "key": "10.1.1.69",
          "count": 1
        }
      ]
    },
    {
      "key": "test4",
      "count": 4,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 2
        },
        {
          "key": "10.1.1.55",
          "count": 1
        },
        {
          "key": "10.1.1.68",
          "count": 1
        }
      ]
    },
    {
      "key": "test7",
      "count": 4,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 1
        },
        {
          "key": "10.1.1.53",
          "count": 1
        },
        {
          "key": "10.1.1.59",
          "count": 1
        },
        {
          "key": "10.1.1.65",
          "count": 1
        }
      ]
    },
    {
      "key": "test9",
      "count": 4,
      "layer2": [
        {
          "key": "10.1.1.66",
          "count": 2
        },
        {
          "key": "10.1.1.61",
          "count": 1
        },
        {
          "key": "10.1.1.63",
          "count": 1
        }
      ]
    },
    {
      "key": "test14",
      "count": 3,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 1
        },
        {
          "key": "10.1.1.62",
          "count": 1
        },
        {
          "key": "10.1.1.68",
          "count": 1
        }
      ]
    },
    {
      "key": "test15",
      "count": 3,
      "layer2": [
        {
          "key": "10.1.1.54",
          "count": 1
        },
        {
          "key": "10.1.1.58",
          "count": 1
        },
        {
          "key": "10.1.1.64",
          "count": 1
        }
      ]
    },
    {
      "key": "test2",
      "count": 3,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 1
        },
        {
          "key": "10.1.1.56",
          "count": 1
        },
        {
          "key": "10.1.1.60",
          "count": 1
        }
      ]
    },
    {
      "key": "test3",
      "count": 3,
      "layer2": [
        {
          "key": "10.1.1.57",
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
      "key": "test0",
      "count": 2,
      "layer2": [
        {
          "key": "10.1.1.54",
          "count": 1
        },
        {
          "key": "10.1.1.58",
          "count": 1
        }
      ]
    },
    {
      "key": "test13",
      "count": 2,
      "layer2": [
        {
          "key": "10.1.1.57",
          "count": 1
        },
        {
          "key": "10.1.1.66",
          "count": 1
        }
      ]
    },
    {
      "key": "test17",
      "count": 2,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 1
        },
        {
          "key": "10.1.1.67",
          "count": 1
        }
      ]
    },
    {
      "key": "test18",
      "count": 2,
      "layer2": [
        {
          "key": "10.1.1.51",
          "count": 1
        },
        {
          "key": "10.1.1.63",
          "count": 1
        }
      ]
    },
    {
      "key": "test19",
      "count": 2,
      "layer2": [
        {
          "key": "10.1.1.58",
          "count": 1
        },
        {
          "key": "10.1.1.60",
          "count": 1
        }
      ]
    },
    {
      "key": "test20",
      "count": 2,
      "layer2": [
        {
          "key": "10.1.1.56",
          "count": 1
        },
        {
          "key": "10.1.1.70",
          "count": 1
        }
      ]
    },
    {
      "key": "test5",
      "count": 2,
      "layer2": [
        {
          "key": "10.1.1.63",
          "count": 1
        },
        {
          "key": "10.1.1.64",
          "count": 1
        }
      ]
    },
    {
      "key": "test10",
      "count": 1,
      "layer2": [
        {
          "key": "10.1.1.60",
          "count": 1
        }
      ]
    },
    {
      "key": "test11",
      "count": 1,
      "layer2": [
        {
          "key": "10.1.1.60",
          "count": 1
        }
      ]
    },
    {
      "key": "test16",
      "count": 1,
      "layer2": [
        {
          "key": "10.1.1.55",
          "count": 1
        }
      ]
    },
    {
      "key": "test6",
      "count": 1,
      "layer2": [
        {
          "key": "10.1.1.53",
          "count": 1
        }
      ]
    }
]

module.exports = {
  data,
}
