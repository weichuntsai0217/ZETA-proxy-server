/**
 *
  topHostThreatDetect: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/ips/ptuser',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 response = { statistic: data }
 **/

const data = [
    {
      "key": "10.1.1.63",
      "count": 14,
      "layer2": [
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 5
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 4
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 3
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        }
      ]
    },
    {
      "key": "10.1.1.59",
      "count": 12,
      "layer2": [
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 6
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 3
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.57",
      "count": 11,
      "layer2": [
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 4
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 3
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 2
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 2
        }
      ]
    },
    {
      "key": "10.1.1.54",
      "count": 10,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 3
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 3
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.53",
      "count": 9,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 2
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 2
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.55",
      "count": 9,
      "layer2": [
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 4
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 3
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.58",
      "count": 9,
      "layer2": [
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 4
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.50",
      "count": 8,
      "layer2": [
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 4
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.60",
      "count": 8,
      "layer2": [
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 3
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.66",
      "count": 7,
      "layer2": [
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 1
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.56",
      "count": 6,
      "layer2": [
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        }
      ]
    },
    {
      "key": "10.1.1.64",
      "count": 6,
      "layer2": [
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 2
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 1
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.69",
      "count": 6,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 2
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 1
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.70",
      "count": 6,
      "layer2": [
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 4
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.61",
      "count": 5,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 2
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.62",
      "count": 5,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 2
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.65",
      "count": 5,
      "layer2": [
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 3
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 1
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.67",
      "count": 5,
      "layer2": [
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 1
        }
      ]
    },
    {
      "key": "10.1.1.52",
      "count": 4,
      "layer2": [
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 2
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 2
        }
      ]
    },
    {
      "key": "10.1.1.68",
      "count": 4,
      "layer2": [
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 2
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 1
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 1
        }
      ]
    }
]

module.exports = {
  data,
}
