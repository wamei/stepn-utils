;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1428: function (e, t, r) {
      e.exports = r(7985)
    },
    7354: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          default: function () {
            return l
          },
        })
      var n = r(2809),
        o = r(2540),
        u = r(1428),
        i = r(2918),
        s = (r(8114), r(5893))
      function a(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function l(e) {
        var t = e.Component,
          r = e.pageProps,
          n =
            t.getLayout ||
            function (e) {
              return e
            }
        return (0, s.jsx)(o.ErrorBoundary, {
          FallbackComponent: f,
          onReset: (0, u.useQueryErrorResetBoundary)().reset,
          children: n((0, s.jsx)(t, c({}, r))),
        })
      }
      function f(e) {
        var t = e.error
        return (0, s.jsx)(i.ErrorComponent, {
          statusCode: t.statusCode || 400,
          title: t.message || t.name,
        })
      }
    },
    8421: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(7354)
        },
      ])
    },
    8114: function () {},
    7985: function (e, t, r) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useQuery", {
          enumerable: !0,
          get: function () {
            return s.useQuery
          },
        }),
        Object.defineProperty(t, "usePaginatedQuery", {
          enumerable: !0,
          get: function () {
            return s.usePaginatedQuery
          },
        }),
        Object.defineProperty(t, "useInfiniteQuery", {
          enumerable: !0,
          get: function () {
            return s.useInfiniteQuery
          },
        }),
        Object.defineProperty(t, "useMutation", {
          enumerable: !0,
          get: function () {
            return s.useMutation
          },
        }),
        Object.defineProperty(t, "MutateFunction", {
          enumerable: !0,
          get: function () {
            return s.MutateFunction
          },
        }),
        Object.defineProperty(t, "queryClient", {
          enumerable: !0,
          get: function () {
            return a.queryClient
          },
        }),
        Object.defineProperty(t, "getQueryKey", {
          enumerable: !0,
          get: function () {
            return a.getQueryKey
          },
        }),
        Object.defineProperty(t, "getInfiniteQueryKey", {
          enumerable: !0,
          get: function () {
            return a.getInfiniteQueryKey
          },
        }),
        Object.defineProperty(t, "invalidateQuery", {
          enumerable: !0,
          get: function () {
            return a.invalidateQuery
          },
        }),
        Object.defineProperty(t, "setQueryData", {
          enumerable: !0,
          get: function () {
            return a.setQueryData
          },
        }),
        Object.defineProperty(t, "useQueryErrorResetBoundary", {
          enumerable: !0,
          get: function () {
            return c.useQueryErrorResetBoundary
          },
        }),
        Object.defineProperty(t, "QueryClient", {
          enumerable: !0,
          get: function () {
            return c.QueryClient
          },
        }),
        Object.defineProperty(t, "dehydrate", {
          enumerable: !0,
          get: function () {
            return l.dehydrate
          },
        }),
        Object.defineProperty(t, "invoke", {
          enumerable: !0,
          get: function () {
            return f.invoke
          },
        })
      var n = {},
        o = d(r(2179)),
        u = d(r(9481)),
        i = d(r(9083)),
        s = r(294),
        a = r(9110),
        c = r(8767),
        l = r(4721),
        f = r(5497)
      function d(e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var n =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, r)
                  : {}
              n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r])
            }
        return (t.default = e), t
      }
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e]
              },
            }))
      }),
        Object.keys(u).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(n, e) ||
              (e in t && t[e] === u[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return u[e]
                },
              }))
        }),
        Object.keys(i).forEach(function (e) {
          "default" !== e &&
            "__esModule" !== e &&
            (Object.prototype.hasOwnProperty.call(n, e) ||
              (e in t && t[e] === i[e]) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return i[e]
                },
              }))
        })
    },
    5497: function (e, t, r) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.invoke = function (e, t) {
          if ("undefined" === typeof e)
            throw new Error(
              "invoke is missing the first argument - it must be a query or mutation function"
            )
          if (n.isClient) {
            return e(t, { fromInvoke: !0 })
          }
          return e(t)
        })
      var n = r(566)
    },
    294: function (e, t, r) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useQuery = function (e, t, r = {}) {
          if ("undefined" === typeof e)
            throw new Error("useQuery is missing the first argument - it must be a query function")
          const a = Boolean(!0)
          var f
          let d =
            (!u.isServer || !a) &&
            (null !== (f = null === r || void 0 === r ? void 0 : r.enabled) && void 0 !== f
              ? f
              : null !== (null === r || void 0 === r ? void 0 : r.enabled))
          const y = !1 !== d && (null === r || void 0 === r ? void 0 : r.suspense)
          o.useSession({ suspense: y }).isLoading && (d = !1)
          const p = s.useRouter().isReady || (u.isServer && a),
            b = i.sanitizeQuery(e),
            v = i.getQueryKey(e, t),
            m = n.useQuery(
              c(
                {
                  queryKey: p ? v : ["_routerNotReady_"],
                  queryFn: p ? () => b(t, { fromQueryHook: !0 }) : i.emptyQueryFn,
                },
                r,
                { enabled: d }
              )
            ),
            { data: g } = m,
            O = l(m, ["data"])
          if (
            O.isIdle &&
            u.isServer &&
            !1 !== a &&
            !g &&
            (!r || !("suspense" in r) || r.suspense) &&
            (!r || !("enabled" in r) || r.enabled)
          )
            throw new Promise(() => {})
          const P = c({}, O, i.getQueryCacheFunctions(e, t))
          return [g, P]
        }),
        (t.usePaginatedQuery = function (e, t, r = {}) {
          if ("undefined" === typeof e)
            throw new Error(
              "usePaginatedQuery is missing the first argument - it must be a query function"
            )
          const a = Boolean(!0)
          var f
          let d =
            (!u.isServer || !a) &&
            (null !== (f = null === r || void 0 === r ? void 0 : r.enabled) && void 0 !== f
              ? f
              : null !== (null === r || void 0 === r ? void 0 : r.enabled))
          const y = !1 !== d && (null === r || void 0 === r ? void 0 : r.suspense)
          o.useSession({ suspense: y }).isLoading && (d = !1)
          const p = s.useRouter().isReady || (u.isServer && a),
            b = i.sanitizeQuery(e),
            v = i.getQueryKey(e, t),
            m = n.useQuery(
              c(
                {
                  queryKey: p ? v : ["_routerNotReady_"],
                  queryFn: p ? () => b(t, { fromQueryHook: !0 }) : i.emptyQueryFn,
                },
                r,
                { keepPreviousData: !0, enabled: d }
              )
            ),
            { data: g } = m,
            O = l(m, ["data"])
          if (
            O.isIdle &&
            u.isServer &&
            !1 !== a &&
            !g &&
            (!r || !("suspense" in r) || r.suspense) &&
            (!r || !("enabled" in r) || r.enabled)
          )
            throw new Promise(() => {})
          const P = c({}, O, i.getQueryCacheFunctions(e, t))
          return [g, P]
        }),
        (t.useInfiniteQuery = function (e, t, r) {
          if ("undefined" === typeof e)
            throw new Error(
              "useInfiniteQuery is missing the first argument - it must be a query function"
            )
          const a = Boolean(!0)
          var f
          let d =
            (!u.isServer || !a) &&
            (null !== (f = null === r || void 0 === r ? void 0 : r.enabled) && void 0 !== f
              ? f
              : null !== (null === r || void 0 === r ? void 0 : r.enabled))
          const y = !1 !== d && (null === r || void 0 === r ? void 0 : r.suspense)
          o.useSession({ suspense: y }).isLoading && (d = !1)
          const p = s.useRouter().isReady || (u.isServer && a),
            b = i.sanitizeQuery(e),
            v = i.getInfiniteQueryKey(e, t),
            m = n.useInfiniteQuery(
              c(
                {
                  queryKey: p ? v : ["_routerNotReady_"],
                  queryFn: p
                    ? ({ pageParam: e }) => b(t(e), { fromQueryHook: !0 })
                    : i.emptyQueryFn,
                },
                r,
                { enabled: d }
              )
            ),
            { data: g } = m,
            O = l(m, ["data"])
          if (
            O.isIdle &&
            u.isServer &&
            !1 !== a &&
            !g &&
            (!r || !("suspense" in r) || r.suspense) &&
            (!r || !("enabled" in r) || r.enabled)
          )
            throw new Promise(() => {})
          const P = c({}, O, i.getQueryCacheFunctions(e, t), {
            pageParams: null === g || void 0 === g ? void 0 : g.pageParams,
          })
          return [null === g || void 0 === g ? void 0 : g.pages, P]
        }),
        (t.useMutation = function (e, t) {
          const r = i.sanitizeMutation(e),
            o = n.useMutation((e) => r(e, { fromQueryHook: !0 }), c({ throwOnError: !0 }, t)),
            { mutate: u, mutateAsync: s } = o,
            a = l(o, ["mutate", "mutateAsync"])
          return [s, a]
        })
      var n = r(8767),
        o = r(9083),
        u = r(566),
        i = r(9110),
        s = r(4651)
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r)
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            n.forEach(function (t) {
              a(e, t, r[t])
            })
        }
        return e
      }
      function l(e, t) {
        if (null == e) return {}
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              o = {},
              u = Object.keys(e)
            for (n = 0; n < u.length; n++) (r = u[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e)
          for (n = 0; n < u.length; n++)
            (r = u[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]))
        }
        return o
      }
    },
    9481: function (e, t, r) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.buildRpcResolver = function (
          e,
          { resolverName: t, resolverType: r, routePath: o, middleware: u }
        ) {
          const i = e,
            s = n.normalizeApiRoute(o)
          return (
            (i.middleware = u),
            (i._isRpcClient = !0),
            (i._resolverName = t),
            (i._resolverType = r),
            (i._routePath = s),
            i
          )
        }),
        (t.buildRpcClient = function ({ resolverName: e, resolverType: t, routePath: r }) {
          const c = n.normalizeApiRoute(r),
            d = l(function* (e, t = {}) {
              if (
                (t.fromQueryHook ||
                  t.fromInvoke ||
                  console.warn(
                    "[Deprecation] Directly calling queries/mutations is deprecated in favor of invoke(queryFn, params)"
                  ),
                s.isServer)
              )
                return Promise.resolve()
              f("Starting request for", c, "with", e, "and", t)
              const n = { "Content-Type": "application/json" },
                d = u.getAntiCSRFToken()
              let y
              d
                ? (f("Adding antiCSRFToken cookie header", d), (n[i.HEADER_CSRF] = d))
                : f("No antiCSRFToken cookie found"),
                (y = t.alreadySerialized ? e : o.serialize(e))
              const p = new AbortController()
              return window
                .fetch(c, {
                  method: "POST",
                  headers: n,
                  credentials: "include",
                  redirect: "follow",
                  body: JSON.stringify({ params: y.json, meta: { params: y.meta } }),
                  signal: p.signal,
                })
                .then(
                  l(function* (n) {
                    if (
                      (f("Received request for", r),
                      n.headers &&
                        (n.headers.get(i.HEADER_PUBLIC_DATA_TOKEN) &&
                          (u.getPublicDataStore().updateState(), f("Public data updated")),
                        n.headers.get(i.HEADER_SESSION_CREATED) &&
                          (f("Session created"),
                          setTimeout(
                            l(function* () {
                              f("Invalidating react-query cache..."),
                                yield a.queryClient.cancelQueries(),
                                yield a.queryClient.resetQueries(),
                                a.queryClient.getMutationCache().clear()
                            }),
                            100
                          )),
                        n.headers.get(i.HEADER_CSRF_ERROR)))
                    ) {
                      const e = new s.CSRFTokenMismatchError()
                      throw ((e.stack = null), e)
                    }
                    if (n.ok) {
                      let i
                      try {
                        i = yield n.json()
                      } catch (d) {
                        const e = new Error(`Failed to parse json from ${r}`)
                        throw ((e.stack = null), e)
                      }
                      if (i.error) {
                        let e = o.deserialize({
                          json: i.error,
                          meta: null === (c = i.meta) || void 0 === c ? void 0 : c.error,
                        })
                        "AuthenticationError" === e.name &&
                          u.getPublicDataStore().getData().userId &&
                          u.getPublicDataStore().clear()
                        const t = e.message.match(/invalid.*prisma.*invocation/i)
                        throw (
                          (t && !("code" in e) && ((e = new Error(t[0])), (e.statusCode = 500)),
                          (e.stack = null),
                          e)
                        )
                      }
                      {
                        var c
                        const n = o.deserialize({
                          json: i.result,
                          meta: null === (c = i.meta) || void 0 === c ? void 0 : c.result,
                        })
                        if (!t.fromQueryHook) {
                          const t = a.getQueryKeyFromUrlAndParams(r, e)
                          a.queryClient.setQueryData(t, n)
                        }
                        return n
                      }
                    }
                    {
                      const e = new Error(n.statusText)
                      throw ((e.statusCode = n.status), (e.path = r), (e.stack = null), e)
                    }
                  })
                )
            })
          return (
            (d._isRpcClient = !0),
            (d._resolverName = e),
            (d._resolverType = t),
            (d._routePath = c),
            d
          )
        })
      var n = r(1063),
        o = r(3992),
        u = r(9083),
        i = r(2179),
        s = r(566),
        a = r(9110)
      function c(e, t, r, n, o, u, i) {
        try {
          var s = e[u](i),
            a = s.value
        } catch (c) {
          return void r(c)
        }
        s.done ? t(a) : Promise.resolve(a).then(n, o)
      }
      function l(e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (n, o) {
            var u = e.apply(t, r)
            function i(e) {
              c(u, n, o, i, s, "next", e)
            }
            function s(e) {
              c(u, n, o, i, s, "throw", e)
            }
            i(void 0)
          })
        }
      }
      const f = r(5467)("blitz:rpc")
    },
    2918: function (e, t, r) {
      e.exports = r(3359)
    },
    2540: function (e, t, r) {
      e.exports = r(566)
    },
    2809: function (e, t, r) {
      "use strict"
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [774, 179], function () {
      return t(8421), t(4651)
    })
    var r = e.O()
    _N_E = r
  },
])
