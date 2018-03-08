/**
 *
  topHostAnoBlocked: ({ top: topN, period }) => ({
    method: 'POST',
    path: '/rest/dashboard/adp/ptuser',
    key: 'statistic',
    form: { topN, period: parseInt(period, 10) },
  }),
 *
 **/

const data = [
    {
      "key": "10.1.1.53",
      "count": 2109600,
      "layer2": [
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 520000
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 444400
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 392400
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 390800
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 362000
        }
      ]
    },
    {
      "key": "10.1.1.58",
      "count": 2062200,
      "layer2": [
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 479200
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 425900
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 416900
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 410600
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 329600
        }
      ]
    },
    {
      "key": "10.1.1.62",
      "count": 2052900,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 533200
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 441700
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 404100
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 338200
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 335700
        }
      ]
    },
    {
      "key": "10.1.1.51",
      "count": 2036000,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 483800
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 427300
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 398100
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 393200
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 333600
        }
      ]
    },
    {
      "key": "10.1.1.55",
      "count": 1984300,
      "layer2": [
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 447400
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 439100
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 388200
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 376100
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 333500
        }
      ]
    },
    {
      "key": "10.1.1.60",
      "count": 1979700,
      "layer2": [
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 450800
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 429500
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 413600
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 363900
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 321900
        }
      ]
    },
    {
      "key": "10.1.1.57",
      "count": 1961000,
      "layer2": [
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 484500
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 471500
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 369200
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 364900
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 270900
        }
      ]
    },
    {
      "key": "10.1.1.50",
      "count": 1948400,
      "layer2": [
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 468600
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 401600
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 391300
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 353500
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 333400
        }
      ]
    },
    {
      "key": "10.1.1.54",
      "count": 1926700,
      "layer2": [
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 455300
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 426200
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 381500
        },
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 359600
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 304100
        }
      ]
    },
    {
      "key": "10.1.1.70",
      "count": 1915700,
      "layer2": [
        {
          "key": "EXPLOIT Generic HTML Threat -7",
          "count": 477500
        },
        {
          "key": "WEB MiniUPnPd 1.0 Stack Buffer Overflow Remote Code Execution (CVE-2013-0230)",
          "count": 448600
        },
        {
          "key": "DOS Microsoft RRAS VLS NULL Dereference",
          "count": 362200
        },
        {
          "key": "SHELLCODE Solaris SPARC Bind Shell",
          "count": 322000
        },
        {
          "key": "SHELLCODE BSD x86 Reverse Connect Shell",
          "count": 305400
        }
      ]
    }
]


module.exports = {
  data,
}
