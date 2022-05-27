;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6756: function (n, t, e) {
      "use strict"
      e.r(t),
        e.d(t, {
          default: function () {
            return B
          },
        })
      var r,
        i,
        s = e(809),
        u = e.n(s),
        o = e(266),
        a = e(2809),
        c = { Solana: "Solana", BSC: "BSC" },
        d =
          ((r = {}),
          (0, a.Z)(r, c.Solana, {
            main: "solana",
            unit: "SOL",
            gst: "green-satoshi-token",
            gmt: "green-metaverse-token",
          }),
          (0, a.Z)(r, c.BSC, {
            main: "bnb",
            unit: "BNB",
            gst: "green-satoshi-token-bsc",
            gmt: "green-metaverse-token",
          }),
          r),
        l = { Common: "Common", Uncommon: "Uncommon" },
        m = ((i = {}), (0, a.Z)(i, l.Common, "#d3d3d3"), (0, a.Z)(i, l.Uncommon, "#98fb98"), i),
        g = e(7294),
        h = e(9029),
        f = e(5147),
        x = e(5893),
        p = [0, 1, 2, 3, 4, 5, 6],
        v = function (n) {
          return n === l.Uncommon ? 4 : 1
        },
        j = function (n) {
          var t,
            e,
            r,
            i = n.realm,
            s = n.crypts,
            u = n.mintingRate,
            o = n.r1,
            a = n.m1,
            c = n.r2,
            l = n.m2,
            m = (0, g.useState)(!1),
            f = m[0],
            p = m[1],
            j = (function (n, t, e, r, i) {
              var s = (n.gst / 2) * v(t),
                u = (n.gst / 2) * v(r),
                o = (n.gmt / 2) * v(t),
                a = (n.gmt / 2) * v(r)
              return {
                gst: s + (s / 2) * Math.max(0, e - 1) + u + (u / 2) * Math.max(0, i - 1),
                gmt: o + (o / 2) * Math.max(0, e - 1) + a + (a / 2) * Math.max(0, i - 1),
              }
            })(u, o, a, c, l),
            y = d[i],
            S =
              (null ===
                (t = s.find(function (n) {
                  return n.id === y.gst
                })) || void 0 === t
                ? void 0
                : t.jpy) || 0,
            C =
              (null ===
                (e = s.find(function (n) {
                  return n.id === y.gmt
                })) || void 0 === e
                ? void 0
                : e.jpy) || 0,
            b =
              (null ===
                (r = s.find(function (n) {
                  return n.id === y.main
                })) || void 0 === r
                ? void 0
                : r.jpy) || 0,
            Z = 1.02 * (j.gst * S + j.gmt * C),
            k = 20 * S + 10 * C
          return (0, x.jsxs)("div", {
            children: [
              (0, x.jsxs)("div", {
                onClick: function () {
                  return p(!0)
                },
                children: [j.gst, "-", j.gmt],
              }),
              (0, x.jsxs)(h.Z, {
                show: f,
                onHide: function () {
                  return p(!1)
                },
                children: [
                  (0, x.jsx)(h.Z.Header, {
                    closeButton: !0,
                    children: (0, x.jsxs)(h.Z.Title, {
                      children: [i, " ", o, " ", a, " x ", c, " ", l],
                    }),
                  }),
                  (0, x.jsxs)(h.Z.Body, {
                    children: [
                      (0, x.jsxs)("div", {
                        children: ["\u30df\u30f3\u30c8\u8cbb\u7528: GST", j.gst, "-GMT", j.gmt],
                      }),
                      (0, x.jsxs)("div", {
                        children: [
                          "\u30df\u30f3\u30c8\u8cbb\u7528\uff08BNB\uff09: ",
                          (Z / b).toFixed(2),
                          y.unit,
                        ],
                      }),
                      (0, x.jsxs)("div", {
                        children: [
                          "\u30df\u30f3\u30c8\u8cbb\u7528\uff08\u5186\uff09: \xa5",
                          Z.toFixed(2),
                        ],
                      }),
                      (0, x.jsx)("hr", {}),
                      (0, x.jsxs)("div", {
                        children: ["Lvup\u8cbb\u7528: \xa5", (k / b).toFixed(2), y.unit],
                      }),
                      (0, x.jsxs)("div", {
                        children: [
                          "\u30df\u30f3\u30c8\u8cbb\u7528\uff08Lvup\u8fbc\uff09: \xa5",
                          ((Z + k) / b).toFixed(2),
                          y.unit,
                        ],
                      }),
                      (0, x.jsx)("hr", {}),
                      (0, x.jsxs)("div", {
                        children: [
                          "\u6700\u4f4e\u8ca9\u58f2\u4fa1\u683c: \xa5",
                          ((Z + k) / 0.94 / b).toFixed(2),
                          y.unit,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        y = function (n) {
          var t = n.mintingRate,
            e = n.rarerity1,
            r = n.rarerity2,
            i = n.realm,
            s = n.crypts
          return (0, x.jsx)(f.Z, {
            striped: !0,
            bordered: !0,
            hover: !0,
            size: "sm",
            children: (0, x.jsxs)("tbody", {
              children: [
                (0, x.jsxs)("tr", {
                  children: [
                    (0, x.jsx)("td", {}),
                    p.map(function (n) {
                      return (0, x.jsx)("td", { style: { backgroundColor: m[e] }, children: n }, n)
                    }),
                  ],
                }),
                p.map(function (n) {
                  return (0, x.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, x.jsx)("td", { style: { backgroundColor: m[r] }, children: n }),
                        p.map(function (u) {
                          return (0,
                          x.jsx)("td", { children: (0, x.jsx)(j, { realm: i, crypts: s, mintingRate: t, r1: e, m1: u, r2: r, m2: n }) }, u)
                        }),
                      ],
                    },
                    n
                  )
                }),
              ],
            }),
          })
        },
        S = e(3319),
        C = [
          { gst: 40, gmt: 160 },
          { gst: 80, gmt: 120 },
          { gst: 100, gmt: 100 },
          { gst: 120, gmt: 80 },
          { gst: 160, gmt: 40 },
          { gst: 200, gmt: 0 },
        ],
        b = function (n) {
          var t = n.value,
            e = n.onChange
          return (0, x.jsx)(S.Z.Select, {
            value: JSON.stringify(t),
            onChange: (function (n) {
              function t(t) {
                return n.apply(this, arguments)
              }
              return (
                (t.toString = function () {
                  return n.toString()
                }),
                t
              )
            })(function (n) {
              e(JSON.parse(n.target.value))
            }),
            children: C.map(function (n) {
              var t = JSON.stringify(n)
              return (0, x.jsxs)("option", { value: t, children: ["GST", n.gst, "-GMT", n.gmt] }, t)
            }),
          })
        },
        Z = function (n) {
          var t = n.value,
            e = n.onChange
          return (0, x.jsx)(S.Z.Select, {
            value: t,
            onChange: (function (n) {
              function t(t) {
                return n.apply(this, arguments)
              }
              return (
                (t.toString = function () {
                  return n.toString()
                }),
                t
              )
            })(function (n) {
              e(n.target.value)
            }),
            children: Object.values(c).map(function (n) {
              return (0, x.jsx)("option", { value: n, children: n }, n)
            }),
          })
        },
        k = function (n) {
          var t = n.value,
            e = n.onChange
          return (0, x.jsx)(S.Z.Select, {
            value: t,
            onChange: (function (n) {
              function t(t) {
                return n.apply(this, arguments)
              }
              return (
                (t.toString = function () {
                  return n.toString()
                }),
                t
              )
            })(function (n) {
              e(n.target.value)
            }),
            children: Object.values(l).map(function (n) {
              return (0, x.jsx)("option", { value: n, children: n }, n)
            }),
          })
        },
        _ = (function () {
          var n = (0, o.Z)(
            u().mark(function n() {
              var t, e
              return u().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.next = 2),
                        fetch(
                          "https://script.google.com/macros/s/AKfycbxehX_2FJ-NopjtNC0EffWz0IAlw_HeInxY14M5R-p3WTC-HnBsQXB-WX1p6pvsvNud7A/exec"
                        )
                      )
                    case 2:
                      return (t = n.sent), (n.next = 5), t.json()
                    case 5:
                      return (
                        (e = n.sent),
                        n.abrupt(
                          "return",
                          e.map(function (n) {
                            return {
                              id: n.id,
                              symbol: n.symbol,
                              name: n.name,
                              jpy: n.jpy,
                              usd: n.usd,
                              lastUpdatedAt: new Date(n.lastUpdatedAt),
                            }
                          })
                        )
                      )
                    case 7:
                    case "end":
                      return n.stop()
                  }
              }, n)
            })
          )
          return function () {
            return n.apply(this, arguments)
          }
        })(),
        w = e(682),
        N = function () {
          var n = (0, g.useState)([]),
            t = n[0],
            e = n[1],
            r = (0, g.useState)({ gst: 100, gmt: 100 }),
            i = r[0],
            s = r[1],
            a = (0, g.useState)(l.Common),
            d = a[0],
            m = a[1],
            h = (0, g.useState)(l.Common),
            p = h[0],
            v = h[1],
            j = (0, g.useState)(c.BSC),
            S = j[0],
            C = j[1],
            N = (function () {
              var n = (0, o.Z)(
                u().mark(function n() {
                  return u().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.t0 = e), (n.next = 3), _()
                        case 3:
                          ;(n.t1 = n.sent), (0, n.t0)(n.t1)
                        case 5:
                        case "end":
                          return n.stop()
                      }
                  }, n)
                })
              )
              return function () {
                return n.apply(this, arguments)
              }
            })()
          return (
            (0, g.useEffect)(function () {
              N()
            }, []),
            (0, x.jsxs)(w.Z, {
              children: [
                (0, x.jsx)(f.Z, {
                  striped: !0,
                  bordered: !0,
                  hover: !0,
                  size: "sm",
                  children: (0, x.jsx)("tbody", {
                    children: t.map(function (n) {
                      return (0,
                      x.jsxs)("tr", { children: [(0, x.jsx)("td", { children: n.symbol }), (0, x.jsxs)("td", { children: ["\xa5", n.jpy] }), (0, x.jsxs)("td", { children: ["$", n.usd] })] }, n.id)
                    }),
                  }),
                }),
                (0, x.jsx)(Z, { value: S, onChange: C }),
                (0, x.jsx)(b, { value: i, onChange: s }),
                (0, x.jsx)(k, { value: d, onChange: m }),
                (0, x.jsx)(k, { value: p, onChange: v }),
                (0, x.jsx)(y, { mintingRate: i, rarerity1: d, rarerity2: p, realm: S, crypts: t }),
              ],
            })
          )
        }
      N.suppressFirstRenderFlicker = !0
      var B = N
    },
    7540: function (n, t, e) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(6756)
        },
      ])
    },
  },
  function (n) {
    n.O(0, [774, 632, 888, 179], function () {
      return (t = 7540), n((n.s = t))
      var t
    })
    var t = n.O()
    _N_E = t
  },
])
