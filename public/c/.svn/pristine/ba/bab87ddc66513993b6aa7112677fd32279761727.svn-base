/*! jQuery v1.10.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery-1.10.0.min.map
 */
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.0", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }
        , w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }
        , q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }
        , _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f, constructor: x, init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        }
        , selector: "", length: 0, toArray: function () {
            return g.call(this)
        }
        , get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }
        , pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }
        , each: function (e, t) {
            return x.each(this, e, t)
        }
        , ready: function (e) {
            return x.ready.promise().done(e), this
        }
        , slice: function () {
            return this.pushStack(g.apply(this, arguments))
        }
        , first: function () {
            return this.eq(0)
        }
        , last: function () {
            return this.eq(-1)
        }
        , eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }
        , map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }
        , end: function () {
            return this.prevObject || this.constructor(null)
        }
        , push: h, sort: [].sort, splice: [].splice
    }
        , x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l);
             u > l;
             l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }
        , x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        }
        , isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? x.readyWait++ : x.ready(!0)
        }
        , ready: function (e) {
            if (e === !0 ? ! --x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }

        }
        , isFunction: function (e) {
            return "function" === x.type(e)
        }
        , isArray: Array.isArray || function (e) {
            return "array" === x.type(e)
        }
        , isWindow: function (e) {
            return null != e && e == e.window
        }
        , isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
        , type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        }
        , isPlainObject: function (e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            }
            catch (r) {
                return !1
            }
            if (x.support.ownLast) for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        }
        , isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }
        , error: function (e) {
            throw Error(e)
        }
        , parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        }
        , parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        }
        , parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            }
            catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        }
        , noop: function () { }, globalEval: function (t) {
            t && x.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }
        , camelCase: function (e) {
            return e.replace(D, "ms-").replace(L, H)
        }
        , nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        , each: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (;
                        o > i;
                        i++) if (r = t.apply(e[i], n), r === !1) break
                }
                else for (i in e) if (r = t.apply(e[i], n), r === !1) break
            }
            else if (a) {
                for (;
                    o > i;
                    i++) if (r = t.call(e[i], i, e[i]), r === !1) break
            }
            else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        }
        , trim: b && !b.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : b.call(e)
        }
            : function (e) {
            return null == e ? "" : (e + "").replace(C, "")
        }
        , makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        }
        , inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0;
                     r > n;
                     n++) if (n in t && t[n] === e) return n
            }
            return -1
        }
        , merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;
                r > o;
                o++) e[i++] = n[o];
            else while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        }
        , grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n;
                 a > o;
                 o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }
        , map: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) for (;
                o > i;
                i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        }
        , guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }
                , i.guid = e.guid = e.guid || x.guid++, i) : t
        }
        , access: function (e, n, r, i, o, a, s) {
            var l = 0, u = e.length, c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            }
            else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(x(e), n)
                })), n)) for (;
                u > l;
                l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        }
        , now: function () {
            return (new Date).getTime()
        }
        , swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }

    }), x.ready.promise = function (t) {
        if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
        else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            }
            catch (i) { } r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    }
                    catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }

            }
            ()
        }
        return n.promise(t)
    }
        , x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = lt(), k = lt(), E = lt(), S = !1, A = function () {
            return 0
        }
            , j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
                var t = 0, n = this.length;
                for (;
                    n > t;
                    t++) if (this[t] === e) return t;
                return -1
            }
            , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }
            , K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        }
        catch (ot) {
            M = {
                apply: H.length ? function (e, t) {
                    _.apply(e, O.call(t))
                }
                    : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }

            }

        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (h && !i) {
                if (o = Z.exec(e)) if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode) return n;
                        if (a.id === s) return n.push(a), n
                    }
                    else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                }
                else {
                    if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = bt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--) c[u] = m + xt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x) try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    }
                    catch (T) { } finally {
                        d || t.removeAttribute("id")
                    }

                }

            }
            return At(e.replace(z, "$1"), t, n, i)
        }
        function st(e) {
            return K.test(e + "")
        }
        function lt() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }
            return t
        }
        function ut(e) {
            return e[b] = !0, e
        }
        function ct(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            }
            catch (n) {
                return !1
            }
            finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }

        }
        function pt(e, t, n) {
            e = e.split("|");
            var r, i = e.length, a = n ? null : t;
            while (i--) (r = o.attrHandle[e[i]]) && r !== t || (o.attrHandle[e[i]] = a)
        }
        function ft(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
        }
        function dt(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        function ht(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
        }
        function gt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }
        function mt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }

        }
        function yt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }

        }
        function vt(e) {
            return ut(function (t) {
                return t = +t, ut(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
            , r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), r.attributes = ct(function (e) {
                return e.innerHTML = "<a href='#'></a>", pt("type|href|height|width", dt, "#" === e.firstChild.getAttribute("href")), pt(B, ft, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
            }), r.input = ct(function (e) {
                return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }), pt("value", ht, r.attributes && r.input), r.getElementsByTagName = ct(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ct(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ct(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }

            }
                , o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }

            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }

            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            }
                : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
                , o.find.CLASS = r.getElementsByClassName && function (e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }
                , m = [], g = [], (r.qsa = st(n.querySelectorAll)) && (ct(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ct(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = st(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ct(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = st(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
                : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }
                , r.sortDetached = ct(function (e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"))
            }), A = d.compareDocumentPosition ? function (e, t) {
                if (e === t) return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
                : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a) return gt(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? gt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }
                , n) : f
        }
            , at.matches = function (e, t) {
            return at(e, null, null, t)
        }
            , at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            }
            catch (i) { } return at(t, f, null, [e]).length > 0
        }
            , at.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }
            , at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }
            , at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
            , at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++]) t === e[o] && (i = n.push(o));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }
            , a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild;
                         e;
                         e = e.nextSibling) n += a(e)
                }
                else if (3 === i || 4 === i) return e.nodeValue
            }
            else for (;
                t = e[r];
                r++) n += a(t);
            return n
        }
            , o = at.selectors = {
            cacheLength: 50, createPseudo: ut, match: Q, attrHandle: {}, find: {}, relative: {
                ">": {
                    dir: "parentNode", first: !0
                }
                , " ": {
                    dir: "parentNode"
                }
                , "+": {
                    dir: "previousSibling", first: !0
                }
                , "~": {
                    dir: "previousSibling"
                }

            }
            , preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }
                , CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                }
                , PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }

            }
            , filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    }
                        : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }

                }
                , CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                }
                , ATTR: function (e, t, n) {
                    return function (r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }

                }
                , CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    }
                        : function (t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [T, d, f];
                                    break
                                }

                            }
                            else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                            else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }

                    }

                }
                , PSEUDO: function (e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function (e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }

            }
            , pseudos: {
                not: ut(function (e) {
                    var t = [], n = [], r = l(e.replace(z, "$1"));
                    return r[b] ? ut(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }

                }), has: ut(function (e) {
                    return function (t) {
                        return at(e, t).length > 0
                    }

                }), contains: ut(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }

                }), lang: ut(function (e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }

                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }
                , root: function (e) {
                    return e === d
                }
                , focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }
                , enabled: function (e) {
                    return e.disabled === !1
                }
                , disabled: function (e) {
                    return e.disabled === !0
                }
                , checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }
                , selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }
                , empty: function (e) {
                    for (e = e.firstChild;
                         e;
                         e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                }
                , parent: function (e) {
                    return !o.pseudos.empty(e)
                }
                , header: function (e) {
                    return tt.test(e.nodeName)
                }
                , input: function (e) {
                    return et.test(e.nodeName)
                }
                , button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }
                , text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }
                , first: vt(function () {
                    return [0]
                }), last: vt(function (e, t) {
                    return [t - 1]
                }), eq: vt(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: vt(function (e, t) {
                    var n = 0;
                    for (;
                        t > n;
                        n += 2) e.push(n);
                    return e
                }), odd: vt(function (e, t) {
                    var n = 1;
                    for (;
                        t > n;
                        n += 2) e.push(n);
                    return e
                }), lt: vt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (;
                        --r >= 0;
                    ) e.push(r);
                    return e
                }), gt: vt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (;
                        t > ++r;
                    ) e.push(r);
                    return e
                })
            }

        };
        for (n in {
            radio: !0, checkbox: !0, file: !0, password: !0, image: !0
        }) o.pseudos[n] = mt(n);
        for (n in {
            submit: !0, reset: !0
        }) o.pseudos[n] = yt(n);
        function bt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n, type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n, type: a, matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }
        function xt(e) {
            var t = 0, n = e.length, r = "";
            for (;
                n > t;
                t++) r += e[t].value;
            return r
        }
        function wt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i)
            }
                : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                }
                else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i) return l === !0
                }
                else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
            }

        }
        function Tt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            }
                : e[0]
        }
        function Ct(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (;
                l > s;
                s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }
        function Nt(e, t, n, r, i, o) {
            return r && !r[b] && (r = Nt(r)), i && !i[b] && (i = Nt(i, o)), ut(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || St(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : Ct(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = Ct(y, d), r(u, [], s, l), c = u.length;
                    while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--) (p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }

                }
                else y = Ct(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }
        function kt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = wt(function (e) {
                    return e === t
                }
                , s, !0), p = wt(function (e) {
                    return F.call(t, e) > -1
                }
                , s, !0), f = [function (e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (;
                i > l;
                l++) if (n = o.relative[e[l].type]) f = [wt(Tt(f), n)];
            else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l;
                         i > r;
                         r++) if (o.relative[e[r].type]) break;
                    return Nt(l > 1 && Tt(f), l > 1 && xt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), i > r && kt(e = e.slice(r)), i > r && xt(e))
                }
                f.push(n)
            }
            return Tt(f)
        }
        function Et(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n);
                     null != (h = N[b]);
                     b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++]) m(x, y, l, c);
                    if (s) {
                        if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
                        y = Ct(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? ut(s) : s
        }
        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = bt(e)), n = t.length;
                while (n--) o = kt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Et(i, r))
            }
            return o
        };
        function St(e, t, n) {
            var r = 0, i = t.length;
            for (;
                i > r;
                r++) at(e, t[r], n);
            return n
        }
        function At(e, t, n, i) {
            var a, s, u, c, p, f = bt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type]) break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && xt(s), !e) return M.apply(n, i), n;
                        break
                    }

                }

            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }
        o.pseudos.nth = o.pseudos.eq;
        function jt() { } jt.prototype = o.filters = o.pseudos, o.setFilters = new jt, r.sortStable = b.split("").sort(A).join("") === b, p(), [0, 0].sort(A), r.detectDuplicates = S, x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }
    (e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0;
                 l && o > a;
                 a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }
            , p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function (t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments), n ? o = l.length : r && (s = t, c(r))
                }
                return this
            }
            , remove: function () {
                return l && x.each(arguments, function (e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                }), this
            }
            , has: function (e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            }
            , empty: function () {
                return l = [], o = 0, this
            }
            , disable: function () {
                return l = u = r = t, this
            }
            , disabled: function () {
                return !l
            }
            , lock: function () {
                return u = t, r || p.disable(), this
            }
            , locked: function () {
                return !u
            }
            , fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !u || (n ? u.push(t) : c(t)), this
            }
            , fire: function () {
                return p.fireWith(this, arguments), this
            }
            , fired: function () {
                return !!i
            }

        };
        return p
    }
        , x.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }
                , always: function () {
                    return i.done(arguments).fail(arguments), this
                }
                , then: function () {
                    var e = arguments;
                    return x.Deferred(function (n) {
                        x.each(t, function (t, o) {
                            var a = o[0], s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }
                , promise: function (e) {
                    return null != e ? x.extend(e, r) : r
                }

            }
                , i = {};
            return r.pipe = r.then, x.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }
                    , t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }
                    , i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }
        , when: function (e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
                return function (r) {
                    t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }

            }
                , s, l, u;
            if (r > 1) for (s = Array(r), l = Array(r), u = Array(r);
                            r > t;
                            t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }

    }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        }
        catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0, change: !0, focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            }
                : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }
    ({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }

    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }

        }

    }
    x.extend({
        cache: {}, noData: {
            applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        }
        , hasData: function (e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        }
        , data: function (e, t, n) {
            return R(e, t, n)
        }
        , removeData: function (e, t) {
            return W(e, t)
        }
        , _data: function (e, t, n) {
            return R(e, t, n, !0)
        }
        , _removeData: function (e, t) {
            return W(e, t, !0)
        }
        , acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }

    }), x.fn.extend({
        data: function (e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes;
                         r.length > a;
                         a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        }
        , removeData: function (e) {
            return this.each(function () {
                x.removeData(this, e)
            })
        }

    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                }
                catch (o) { } x.data(e, n, r)
            }
            else r = t
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        }
        , dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }
        , _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                    empty: x.Callbacks("once memory").add(function () {
                        x._removeData(e, t + "queue"), x._removeData(e, n)
                    })
                })
        }

    }), x.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        }
        , dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        }
        , delay: function (e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }

            })
        }
        , clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }
        , promise: function (e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }

    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        }
        , removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }
        , prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        }
        , removeProp: function (e) {
            return e = x.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                }
                catch (n) { }
            })
        }
        , addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(T) || [];
                        s > a;
                        a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                    o = 0;
                    while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                    n.className = x.trim(r)
                }
            return this
        }
        , removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(T) || [];
                        s > a;
                        a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                    o = 0;
                    while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                    n.className = e ? x.trim(r) : ""
                }
            return this
        }
        , toggleClass: function (e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return x.isFunction(e) ? this.each(function (n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var o, a = 0, s = x(this), l = t, u = e.match(T) || [];
                    while (o = u[a++]) l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o)
                }
                else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        }
        , hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (;
                r > n;
                n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        }
        , val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }

        }

    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }

            }
            , select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (;
                        s > l;
                        l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }
                , set: function (e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }

            }

        }
        , attr: function (e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        }
        , removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        }
        , attrHooks: {
            type: {
                set: function (e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }

                }

            }

        }
        , propFix: {
            "for": "htmlFor", "class": "className"
        }
        , prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        }
        , propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }

            }

        }

    }), X = {
        set: function (e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }

    }
        , x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        }
            : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }

    }), K && Q || (x.attrHooks.value = {
        set: function (e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }

    }), Q || (z = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }

    }
        , x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }
        , x.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }
        , set: z.set
    }
        , x.attrHooks.contenteditable = {
        set: function (e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }

    }
        , x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }

        }

    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }

        }

    }), x.support.style || (x.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }
        , set: function (e, t) {
            return e.style.cssText = t + ""
        }

    }), x.support.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }

    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }

        }
            , x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        }
        catch (e) { }
    }
    x.event = {
        global: {}, add: function (e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }
                    , f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                        type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".")
                    }
                    , c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }

        }
        , remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                    while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                }
                else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }

        }
        , trigger: function (n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode);
                         u;
                         u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    }
                    catch (y) { } x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }

        }
        , dispatch: function (e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }

        }
        , handlers: function (e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) for (;
                u != this;
                u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                    for (o = [], a = 0;
                         l > a;
                         a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                    o.length && s.push({
                        elem: u, handlers: o
                    })
                }
            return n.length > l && s.push({
                elem: this, handlers: n.slice(l)
            }), s
        }
        , fix: function (e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        }
        , props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }

        }
        , mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }

        }
        , special: {
            load: {
                noBubble: !0
            }
            , focus: {
                trigger: function () {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1
                    }
                    catch (e) { }
                }
                , delegateType: "focusin"
            }
            , blur: {
                trigger: function () {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                }
                , delegateType: "focusout"
            }
            , click: {
                trigger: function () {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
                , _default: function (e) {
                    return x.nodeName(e.target, "a")
                }

            }
            , beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }

            }

        }
        , simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e, isSimulated: !0, originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }

    }
        , x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
        : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }
        , x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }
        , x.Event.prototype = {
        isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }
        , stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }
        , stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }

    }
        , x.each({
            mouseenter: "mouseover", mouseleave: "mouseout"
        }
        , function (e, t) {
            x.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }

            }

        }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        }
        , postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        }
        , teardown: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }

    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        }
        , handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }
        , teardown: function () {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }

    }), x.support.focusinBubbles || x.each({
            focus: "focusin", blur: "focusout"
        }
        , function (e, t) {
            var n = 0, r = function (e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
            x.event.special[t] = {
                setup: function () {
                    0 === n++ && a.addEventListener(e, r, !0)
                }
                , teardown: function () {
                    0 === --n && a.removeEventListener(e, r, !0)
                }

            }

        }), x.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return x().off(e), s.apply(this, arguments)
            }
                , i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
                x.event.add(this, e, i, r, n)
            })
        }
        , one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }
        , off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                x.event.remove(this, e, r, n)
            })
        }
        , trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        }
        , triggerHandler: function (e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }

    });
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {
        children: !0, contents: !0, next: !0, prev: !0
    };
    x.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
                for (t = 0;
                     i > t;
                     t++) if (x.contains(r[t], this)) return !0
            }));
            for (t = 0;
                 i > t;
                 t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }
        , has: function (e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0;
                     r > t;
                     t++) if (x.contains(this, n[t])) return !0
            })
        }
        , not: function (e) {
            return this.pushStack(ft(this, e || [], !0))
        }
        , filter: function (e) {
            return this.pushStack(ft(this, e || [], !1))
        }
        , is: function (e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        }
        , closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (;
                i > r;
                r++) for (n = this[r];
                          n && n !== t;
                          n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                    n = o.push(n);
                    break
                }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        }
        , index: function (e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }
        , add: function (e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        }
        , addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }

    });
    function pt(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }
            , parents: function (e) {
                return x.dir(e, "parentNode")
            }
            , parentsUntil: function (e, t, n) {
                return x.dir(e, "parentNode", n)
            }
            , next: function (e) {
                return pt(e, "nextSibling")
            }
            , prev: function (e) {
                return pt(e, "previousSibling")
            }
            , nextAll: function (e) {
                return x.dir(e, "nextSibling")
            }
            , prevAll: function (e) {
                return x.dir(e, "previousSibling")
            }
            , nextUntil: function (e, t, n) {
                return x.dir(e, "nextSibling", n)
            }
            , prevUntil: function (e, t, n) {
                return x.dir(e, "previousSibling", n)
            }
            , siblings: function (e) {
                return x.sibling((e.parentNode || {}).firstChild, e)
            }
            , children: function (e) {
                return x.sibling(e.firstChild)
            }
            , contents: function (e) {
                return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
            }

        }
        , function (e, t) {
            x.fn[e] = function (n, r) {
                var i = x.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
            }

        }), x.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }
        , dir: function (e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        }
        , sibling: function (e, t) {
            var n = [];
            for (;
                e;
                e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }

    });
    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
        option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
        , jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function (e) {
            return x.access(this, function (e) {
                    return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
                }
                , null, e, arguments.length)
        }
        , append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }

            })
        }
        , prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }

            })
        }
        , before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }
        , after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }
        , remove: function (e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (;
                null != (n = r[i]);
                i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        }
        , empty: function () {
            var e, t = 0;
            for (;
                null != (e = this[t]);
                t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }
        , clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        }
        , html: function (e) {
            return x.access(this, function (e) {
                    var n = this[0] || {}, r = 0, i = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                    if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(vt, "<$1></$2>");
                        try {
                            for (;
                                i > r;
                                r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                            n = 0
                        }
                        catch (o) { }
                    }
                    n && this.empty().append(e)
                }
                , null, e, arguments.length)
        }
        , replaceWith: function () {
            var e = x.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                    var r = e[t++], i = e[t++];
                    i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
                }
                , !0), t ? this : this.remove()
        }
        , detach: function (e) {
            return this.remove(e, !0)
        }
        , domManip: function (e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length;
                     c > u;
                     u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0;
                            o > u;
                            u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }

    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function _t(e, t) {
        var n, r = 0;
        for (;
            null != (n = e[r]);
            r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length;
                                  i > r;
                                  r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }

    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

    }
    x.each({
            appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"
        }
        , function (e, t) {
            x.fn[e] = function (e) {
                var n, r = 0, i = [], o = x(e), a = o.length - 1;
                for (;
                    a >= r;
                    r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
                return this.pushStack(i)
            }

        });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) for (s = [], r = e.childNodes || e;
                     null != (o = r[a]);
                     a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0;
                                                                                                                                                                                                                                                                                                         null != (i = s[a]);
                                                                                                                                                                                                                                                                                                         ++a) r[a] && Ot(i, r[a]);
            if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0;
                               null != (i = s[a]);
                               a++) Mt(i, r[a]);
            else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        }
        , buildFragment: function (e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (;
                p > h;
                h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
            else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            }
            else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                i = 0;
                while (o = s[i++]) kt.test(o.type || "") && n.push(o)
            }
            return s = null, f
        }
        , cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (;
                null != (n = e[s]);
                s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }

        }
        , _evalUrl: function (e) {
            return x.ajax({
                url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0
            })
        }

    }), x.fn.extend({
        wrapAll: function (e) {
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }
        , wrapInner: function (e) {
            return x.isFunction(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }
        , wrap: function (e) {
            var t = x.isFunction(e);
            return this.each(function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        }
        , unwrap: function () {
            return this.parent().each(function () {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }

    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }
        , Qt = {
        position: "absolute", visibility: "hidden", display: "block"
    }
        , Kt = {
        letterSpacing: 0, fontWeight: 400
    }
        , Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) if (t = en[i] + n, t in e) return t;
        return r
    }
    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (;
            s > a;
            a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0;
             s > a;
             a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function (e, n) {
            return x.access(this, function (e, n, r) {
                    var i, o, a = {}, s = 0;
                    if (x.isArray(n)) {
                        for (o = Rt(e), i = n.length;
                             i > s;
                             s++) a[n[s]] = x.css(e, n[s], !1, o);
                        return a
                    }
                    return r !== t ? x.style(e, n, r) : x.css(e, n)
                }
                , e, n, arguments.length > 1)
        }
        , show: function () {
            return rn(this, !0)
        }
        , hide: function () {
            return rn(this)
        }
        , toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : nn(this)) ? x(this).show() : x(this).hide()
            })
        }

    }), x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }

                }

            }

        }
        , cssNumber: {
            columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0
        }
        , cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        }
        , style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                }
                catch (c) { }
            }

        }
        , css: function (e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }

    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }
        , Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }
        , Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (;
            4 > o;
            o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }
    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            }
            , set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }

        }

    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }
        , set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }

    }), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? x.swap(e, {
                        display: "inline-block"
                    }
                    , Wt, [e, "marginRight"]) : t
            }

        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }

            }

        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }
        , x.expr.filters.visible = function (e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
            margin: "", padding: "", border: "Width"
        }
        , function (e, t) {
            x.cssHooks[e + t] = {
                expand: function (n) {
                    var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                    for (;
                        4 > r;
                        r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }

            }
                , Ut.test(e) || (x.cssHooks[e + t].set = on)
        });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }
        , serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function (e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                    return {
                        name: t.name, value: e.replace(fn, "\r\n")
                    }

                }) : {
                    name: t.name, value: n.replace(fn, "\r\n")
                }

            }).get()
        }

    }), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
            o(this.name, this.value)
        });
        else for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x.type(t)) r(e, t);
        else for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }

    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
        , bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }
        , unbind: function (e, t) {
            return this.off(e, null, t)
        }
        , delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }
        , undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }

    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    }
    catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }

    }
    function qn(e, n, r, i) {
        var o = {}, a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e, type: a, dataType: "html", data: n
        }).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
                s.each(r, o || [e.responseText, t, e])
            }), this
    }
        , x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }

    }), x.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {
                "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"
            }
            , contents: {
                xml: /xml/, html: /html/, json: /json/
            }
            , responseFields: {
                xml: "responseXML", text: "responseText", json: "responseJSON"
            }
            , converters: {
                "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML
            }
            , flatOptions: {
                url: !0, context: !0
            }

        }
        , ajaxSetup: function (e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        }
        , ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0, getResponseHeader: function (e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                }
                , getAllResponseHeaders: function () {
                    return 2 === b ? a : null
                }
                , setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e, y[e] = t), this
                }
                , overrideMimeType: function (e) {
                    return b || (p.mimeType = e), this
                }
                , statusCode: function (e) {
                    var t;
                    if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                    else C.always(e[C.status]);
                    return this
                }
                , abort: function (e) {
                    var t = e || w;
                    return u && u.abort(t), k(0, t), this
                }

            };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {
                success: 1, error: 1, complete: 1
            }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                        C.abort("timeout")
                    }
                    , p.timeout));
                try {
                    b = 1, u.send(y, k)
                }
                catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }

            }
            else k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        }
        , getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        }
        , getScript: function (e, n) {
            return x.get(e, t, n, "script")
        }

    }), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e, type: n, dataType: o, data: r, success: i
            })
        }

    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in l) if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t);
            else try {
                    t = a(t)
                }
                catch (p) {
                    return {
                        state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o
                    }

                }

        }
        return {
            state: "success", data: t
        }

    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        }
        , contents: {
            script: /(?:java|ecma)script/
        }
        , converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }

        }

    }), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function (t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }
                        , r.insertBefore(n, r.firstChild)
                }
                , abort: function () {
                    n && n.onload(t, !0)
                }

            }

        }

    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }

    }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }
            , n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }
            , i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };
    function In() {
        try {
            return new e.XMLHttpRequest
        }
        catch (t) { }
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (t) { }
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    }
        : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    }
                    catch (u) { } l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                            else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                }
                                catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }

                        }
                        catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }
                        , n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                }
                , abort: function () {
                    r && r(t, !0)
                }

            }

        }

    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, x.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (n.unit = o, n.start = +a || +r || 0, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
        }
        ]
    };
    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (;
            a > o;
            o++) if (r = i[o].call(n, t, e)) return r
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i) return !1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (;
                l > a;
                a++) u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }
            , u = s.promise({
            elem: e, props: x.extend({}, t), opts: x.extend(!0, {
                    specialEasing: {}
                }
                , n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            }
            , stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0;
                     r > n;
                     n++) u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }

        }), c = u.props;
        for (tr(c, u.opts.specialEasing);
             a > o;
             o++) if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e, anim: u, queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        }
        else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function (e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (;
                i > r;
                r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        }
        , prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }

    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }

    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        }
        , cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }
        , run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }

    }
        , rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }
            , set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }

        }

    }
        , rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }

    }
        , x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }

    }), x.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                    opacity: t
                }
                , e, n, r)
        }
        , animate: function (e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
                var t = er(this, x.extend({}, e), o);
                a.finish = function () {
                    t.stop(!0)
                }
                    , (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }
        , stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length;
                     n--;
                ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        }
        , finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length;
                     t--;
                ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0;
                     a > t;
                     t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }

    });
    function ir(e, t) {
        var n, r = {
            height: e
        }
            , i = 0;
        for (t = t ? 1 : 0;
             4 > i;
             i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
            slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: {
                opacity: "show"
            }
            , fadeOut: {
                opacity: "hide"
            }
            , fadeToggle: {
                opacity: "toggle"
            }

        }
        , function (e, t) {
            x.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }

        }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }
            , r
    }
        , x.easing = {
        linear: function (e) {
            return e
        }
        , swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }

    }
        , x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now();
             n.length > r;
             r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }
        , x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }
        , x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }
        , x.fx.stop = function () {
        clearInterval(Un), Un = null
    }
        , x.fx.speeds = {
        slow: 600, fast: 200, _default: 400
    }
        , x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
            top: 0, left: 0
        }
            , a = this[0], s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }
        , x.offset = {
        setOffset: function (e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }

    }
        , x.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                    top: 0, left: 0
                }
                    , r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0)
                }

            }

        }
        , offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }

    }), x.each({
            scrollLeft: "pageXOffset", scrollTop: "pageYOffset"
        }
        , function (e, n) {
            var r = /Y/.test(n);
            x.fn[e] = function (i) {
                return x.access(this, function (e, i, o) {
                        var a = or(e);
                        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
                    }
                    , e, i, arguments.length, null)
            }

        });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
            Height: "height", Width: "width"
        }
        , function (e, n) {
            x.each({
                    padding: "inner" + e, content: n, "": "outer" + e
                }
                , function (r, i) {
                    x.fn[i] = function (i, o) {
                        var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                        return x.access(this, function (n, r, i) {
                                var o;
                                return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                            }
                            , n, a ? i : t, a, null)
                    }

                })
        }), x.fn.size = function () {
        return this.length
    }
        , x.fn.andSelf = x.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);

/*! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
(function (C, z, f, r) {
    var q = f(C), n = f(z), b = f.fancybox = function () {
        b.open.apply(this, arguments)
    }
        , H = navigator.userAgent.match(/msie/), w = null, s = z.createTouch !== r, t = function (a) {
        return a && a.hasOwnProperty && a instanceof f
    }
        , p = function (a) {
        return a && "string" === f.type(a)
    }
        , F = function (a) {
        return p(a) && 0 < a.indexOf("%")
    }
        , l = function (a, d) {
        var e = parseInt(a, 10) || 0;
        d && F(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e)
    }
        , x = function (a, b) {
        return l(a, b) + "px"
    };
    f.extend(b, {
        version: "2.1.4", defaults: {
            padding: 15, margin: 20, width: 800,
            height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !s, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: {
                dataType: "html", headers: {
                    "X-fancyBox": !0
                }

            }
            , iframe: {
                scrolling: "auto", preload: !0
            }
            , swf: {
                wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"
            }
            , keys: {
                next: {
                    13: "left",
                    34: "up", 39: "left", 40: "up"
                }
                , prev: {
                    8: "right", 33: "down", 37: "right", 38: "down"
                }
                , close: [27], play: [32], toggle: [70]
            }
            , direction: {
                next: "left", prev: "right"
            }
            , scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                (H ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }
            , openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
            openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: {
                overlay: !0, title: !0
            }
            , onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop
        }
        , group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
        isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: {
            timer: null, isActive: !1
        }
        , ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
                var k = {}, g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
                    href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c
                }
                    , f.metadata && f.extend(!0, k,
                    c.metadata())) : k = c);
                g = d.href || k.href || (p(c) ? c : null);
                h = d.title !== r ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                p(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : p(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(p(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
                k.isDom) && (m = "inline", j = c));
                f.extend(k, {
                    href: g, type: m, content: j, title: h, selector: l
                });
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== r && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        }
        , cancel: function () {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
            b._afterZoomOut(a))
        }
        , close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        }
        , play: function (a) {
            var d = function () {
                clearTimeout(b.player.timer)
            }
                , e = function () {
                d();
                b.current && b.player.isActive && (b.player.timer =
                    setTimeout(b.next, b.current.playSpeed))
            }
                , c = function () {
                d();
                f("body").unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd")
            };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, f("body").bind({
                    "afterShow.player onUpdate.player": e, "onCancel.player beforeClose.player": c, "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            }
            else c()
        }
        , next: function (a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        }
        ,
        prev: function (a) {
            var d = b.current;
            d && (p(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        }
        , jumpto: function (a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== r && (b.cancel(), b._start(a)))
        }
        , reposition: function (a, d) {
            var e = b.current, c = e ? e.wrap : null, k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({},
                e.dim, k)))
        }
        , update: function (a) {
            var d = a && a.type, e = !d || "orientationchange" === d;
            e && (clearTimeout(w), w = null);
            b.isOpen && !w && (w = setTimeout(function () {
                    var c = b.current;
                    c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), w = null)
                }
                , e && !s ? 0 : 300))
        }
        , toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
                b.trigger("onUpdate")), b.update())
        }
        , hideLoading: function () {
            n.unbind(".loading");
            f("#fancybox-loading").remove()
        }
        , showLoading: function () {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            n.bind("keydown.loading", function (a) {
                if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x
            }))
        }
        , getViewport: function () {
            var a = b.current && b.current.locked ||
                !1, d = {
                x: q.scrollLeft(), y: q.scrollTop()
            };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && C.innerWidth ? C.innerWidth : q.width(), d.h = s && C.innerHeight ? C.innerHeight : q.height());
            return d
        }
        , unbindEvents: function () {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            n.unbind(".fb");
            q.unbind(".fb")
        }
        , bindEvents: function () {
            var a = b.current, d;
            a && (q.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && n.bind("keydown.fb", function (e) {
                var c = e.which || e.keyCode, k =
                    e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
                    if (1 < a.group.length && k[c] !== r) return b[d](k[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
                for (var h = f(d.target || null), j = !1;
                     h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");
                ) j = h[0] && !(h[0].style.overflow &&
                    "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }

            }))
        }
        , trigger: function (a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function (d,
                                                         e) {
                    e && (b.helpers[d] && f.isFunction(b.helpers[d][a])) && (e = f.extend(!0, {}, b.helpers[d].defaults, e), b.helpers[d][a](e, c))
                });
                f.event.trigger(a + ".fb")
            }

        }
        , isImage: function (a) {
            return p(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
        }
        , isSWF: function (a) {
            return p(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        }
        , _start: function (a) {
            var d = {}, e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) &&
            (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: {
                    overlay: {
                        closeClick: !1
                    }

                }

            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive =
                    !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    d.skin.css("padding" + b, x(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                }
                else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }

        }
        , _error: function (a) {
            f.extend(b.coming, {
                type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error
            });
            b._afterLoad()
        }
        , _loadImage: function () {
            var a = b.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width =
                    this.width;
                b.coming.height = this.height;
                b._afterLoad()
            };
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        }
        , _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href, error: function (a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                }
                , success: function (d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }

            }))
        }
        , _loadIframe: function () {
            var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g,
                (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                }
                catch (a) { }
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function () {
                f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        }
        , _preloadImages: function () {
            var a =
                b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
            for (g = 1;
                 g <= c;
                 g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        }
        , _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
            else {
                d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                b.unbindEvents();
                e = a.content;
                c = a.type;
                k = a.scrolling;
                f.extend(b, {
                    wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d
                });
                g = a.href;
                switch (c) {
                    case "inline": case "ajax": case "html": a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                    f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
                        !1)
                }));
                    break;
                    case "image": e = a.tpl.image.replace("{href}", g);
                        break;
                    case "swf": e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
                        e += '<param name="' + a + '" value="' + b + '"></param>';
                        h += " " + a + '="' + b + '"'
                    }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                }
                (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                b.trigger("beforeShow");
                a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                b._setDimension();
                b.reposition();
                b.isOpen = !1;
                b.coming = null;
                b.bindEvents();
                if (b.isOpened) {
                    if (d.prevMethod) b.transitions[d.prevMethod]()
                }
                else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                b._preloadImages()
            }

        }
        , _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth,
                v = h.maxHeight, s = h.scrolling, q = h.scrollOutside ? h.scrollbarWidth : 0, y = h.margin, p = l(y[1] + y[3]), r = l(y[0] + y[2]), z, A, t, D, B, G, C, E, w;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            y = l(k.outerWidth(!0) - k.width());
            z = l(k.outerHeight(!0) - k.height());
            A = p + y;
            t = r + z;
            D = F(c) ? (a.w - A) * l(c) / 100 : c;
            B = F(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (w = h.content, h.autoHeight && 1 === w.data("ready")) try {
                    w[0].contentWindow.document.location && (g.width(D).height(9999), G = w.contents().find("body"), q && G.css("overflow-x",
                        "hidden"), B = G.height())
                }
                catch (H) { }
            }
            else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");
            c = l(D);
            j = l(B);
            E = D / B;
            m = l(F(m) ? l(m, "w") - A : m);
            n = l(F(n) ? l(n, "w") - A : n);
            u = l(F(u) ? l(u, "h") - t : u);
            v = l(F(v) ? l(v, "h") - t : v);
            G = n;
            C = v;
            h.fitToView && (n = Math.min(a.w - A, n), v = Math.min(a.h - t, v));
            A = a.w - p;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / E)), j > v && (j = v, c = l(j * E)), c < m && (c = m, j = l(c / E)), j < u &&
            (j = u, c = l(j * E))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, v)));
            if (h.fitToView) if (g.width(c).height(j), e.width(c + y), a = e.width(), p = e.height(), h.aspectRatio) for (;
                (a > A || p > r) && (c > m && j > u) && !(19 < d++);
            ) j = Math.max(u, Math.min(v, j - 10)), c = l(j * E), c < m && (c = m, j = l(c / E)), c > n && (c = n, j = l(c / E)), g.width(c).height(j), e.width(c + y), a = e.width(), p = e.height();
            else c = Math.max(m, Math.min(c, c - (a - A))), j = Math.max(u, Math.min(j, j - (p - r)));
            q && ("auto" === s && j < B && c + y +
            q < A) && (c += q);
            g.width(c).height(j);
            e.width(c + y);
            a = e.width();
            p = e.height();
            e = (a > A || p > r) && c > m && j > u;
            c = h.aspectRatio ? c < G && j < C && c < D && j < B : (c < G || j < C) && (c < D || j < B);
            f.extend(h, {
                dim: {
                    width: x(a), height: x(p)
                }
                , origWidth: D, origHeight: B, canShrink: e, canExpand: c, wPadding: y, hPadding: z, wrapSpace: p - k.outerHeight(!0), skinSpace: k.height() - j
            });
            !w && (h.autoHeight && j > u && j < v && !c) && g.height("auto")
        }
        , _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = {
                position: "absolute",
                top: c[0], left: c[3]
            };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        }
        , _afterZoomIn: function () {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") &&
                (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        }
        , _afterZoomOut: function (a) {
            a =
                a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null
            });
            b.trigger("afterClose", a)
        }

    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
                (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
            return c = {
                top: x(c.top - h * a.topRatio), left: x(c.left - j * a.leftRatio), width: x(f + j), height: x(g + h)
            }

        }
        , step: function (a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace, h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
            f ? c : c - g * e - h * e))
        }
        , zoomIn: function () {
            var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({
                    opacity: 1
                }
                , d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn
            })
        }
        , zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = {
                opacity: 0.1
            };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c,
                {
                    duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut
                })
        }
        , changeIn: function () {
            var a = b.current, d = a.nextEffect, e = a.pos, c = {
                opacity: 1
            }
                , f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(l(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn
            })
        }
        , changeOut: function () {
            var a =
                b.previous, d = a.prevEffect, e = {
                opacity: 0.1
            }
                , c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
                    f(this).trigger("onReset").remove()
                }

            })
        }

    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0
        }
        , overlay: null, fixed: !1, create: function (a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo("body");
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        }
        , open: function (a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function (a) {
                f(a.target).hasClass("fancybox-overlay") && (b.isActive ? b.close() : d.close())
            });
            this.overlay.css(a.css).show()
        }
        ,
        close: function () {
            f(".fancybox-overlay").remove();
            q.unbind("resize.overlay");
            this.overlay = null;
            !1 !== this.margin && (f("body").css("margin-right", this.margin), this.margin = !1);
            this.el && this.el.removeClass("fancybox-lock")
        }
        , update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            H ? (b = Math.max(z.documentElement.offsetWidth, z.body.offsetWidth), n.width() > b && (a = n.width())) : n.width() > q.width() && (a = n.width());
            this.overlay.width(a).height(n.height())
        }
        , onReady: function (a, b) {
            f(".fancybox-overlay").stop(!0,
                !0);
            this.overlay || (this.margin = n.height() > q.height() || "scroll" === f("body").css("overflow-y") ? f("body").css("margin-right") : !1, this.el = z.all && !z.querySelector ? f("html") : f("body"), this.create(a));
            a.locked && this.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        }
        , beforeShow: function (a, b) {
            b.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && f("body").css("margin-right", l(this.margin) + b.scrollbarWidth));
            this.open(a)
        }
        , onUpdate: function () {
            this.fixed ||
            this.update()
        }
        , afterClose: function (a) {
            this.overlay && !b.isActive && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }

    };
    b.helpers.title = {
        defaults: {
            type: "float", position: "bottom"
        }
        , beforeShow: function (a) {
            var d = b.current, e = d.title, c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (p(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside": c = b.skin;
                        break;
                    case "outside": c = b.wrap;
                        break;
                    case "over": c = b.inner;
                        break;
                    default: c = b.skin, d.appendTo("body"),
                    H && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }

        }

    };
    f.fn.fancybox = function (a) {
        var d, e = f(this), c = this.selector || "", k = function (g) {
            var h = f(this).blur(), j = d, k, l;
            !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l +
                '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
        };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : n.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    n.ready(function () {
        f.scrollbarWidth === r && (f.scrollbarWidth = function () {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === r) {
            var a = f.support, d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"), e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")
        })
    })
})(window, document, jQuery);

/*
 Color animation 20120928
 http://www.bitstorm.org/jquery/color-animation/
 Copyright 2011, 2012 Edwin Martin <edwin@bitstorm.org>
 Released under the MIT and GPL licenses.
 */
(function (d) {
    function m() {
        var b = d("script:first"), a = b.css("color"), c = false;
        if (/^rgba/.test(a)) c = true;
        else try {
            c = a != b.css("color", "rgba(0, 0, 0, 0.5)").css("color");
            b.css("color", a)
        }
        catch (e) { } return c
    }
    function j(b, a, c) {
        var e = "rgb" + (d.support.rgba ? "a" : "") + "(" + parseInt(b[0] + c * (a[0] - b[0]), 10) + "," + parseInt(b[1] + c * (a[1] - b[1]), 10) + "," + parseInt(b[2] + c * (a[2] - b[2]), 10);
        if (d.support.rgba) e += "," + (b && a ? parseFloat(b[3] + c * (a[3] - b[3])) : 1);
        e += ")";
        return e
    }
    function g(b) {
        var a, c;
        if (a = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(b)) c =
            [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 1];
        else if (a = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(b)) c = [parseInt(a[1], 16) * 17, parseInt(a[2], 16) * 17, parseInt(a[3], 16) * 17, 1];
        else if (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) c = [parseInt(a[1]), parseInt(a[2]), parseInt(a[3]), 1];
        else if (a = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(b)) c = [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10), parseFloat(a[4])];
        return c
    }
    d.extend(true, d, {
        support: {
            rgba: m()
        }

    });
    var k = ["color", "backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "outlineColor"];
    d.each(k, function (b, a) {
        d.Tween.propHooks[a] = {
            get: function (c) {
                return d(c.elem).css(a)
            }
            , set: function (c) {
                var e = c.elem.style, i = g(d(c.elem).css(a)), h = g(c.end);
                c.run = function (f) {
                    e[a] = j(i, h, f)
                }

            }

        }

    });
    d.Tween.propHooks.borderColor = {
        set: function (b) {
            var a = b.elem.style, c = [], e = k.slice(2, 6);
            d.each(e, function (h, f) {
                c[f] = g(d(b.elem).css(f))
            });
            var i = g(b.end);
            b.run = function (h) {
                d.each(e, function (f, l) {
                    a[l] = j(c[l], i, h)
                })
            }

        }

    }

})(jQuery);

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */

(function (jQuery) {

    jQuery.hotkeys = {
        version: "0.8",

        specialKeys: {
            8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
            20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
            37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del",
            96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
            104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/",
            112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
            120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
        }
        ,

        shiftNums: {
            "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
            "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
            ".": ">", "/": "?", "\\": "|"
        }
    };

    function keyHandler(handleObj) {
        // Only care when a possible input has been specified
        if (typeof handleObj.data !== "string") {
            return;
        }

        var origHandler = handleObj.handler,
            keys = handleObj.data.toLowerCase().split(" ");

        handleObj.handler = function (event) {
            // Don't fire in text-accepting inputs that we didn't directly bind to
            if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) ||
                event.target.type === "text" || event.target.type === "password")) {
                return;
            }

            // Keypress represents characters, not special keys
            var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
                character = String.fromCharCode(event.which).toLowerCase(),
                key, modif = "", possible = {};

            // check combinations (alt|ctrl|shift+anything)
            if (event.altKey && special !== "alt") {
                modif += "alt+";
            }

            if (event.ctrlKey && special !== "ctrl") {
                modif += "ctrl+";
            }

            // TODO: Need to make sure this works consistently across platforms
            if (event.metaKey && !event.ctrlKey && special !== "meta") {
                modif += "meta+";
            }

            if (event.shiftKey && special !== "shift") {
                modif += "shift+";
            }

            if (special) {
                possible[modif + special] = true;

            }
            else {
                possible[modif + character] = true;
                possible[modif + jQuery.hotkeys.shiftNums[character]] = true;

                // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
                if (modif === "shift+") {
                    possible[jQuery.hotkeys.shiftNums[character]] = true;
                }
            }

            for (var i = 0, l = keys.length;
                 i < l;
                 i++) {
                if (possible[keys[i]]) {
                    return origHandler.apply(this, arguments);
                }
            }
        };
    }

    jQuery.each(["keydown", "keyup", "keypress"], function () {
        jQuery.event.special[this] = {
            add: keyHandler
        };
    });

})(jQuery);

/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    var config = $.cookie = function (key, value, options) {

        // write
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);

            if (value === null) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        for (var i = 0, l = cookies.length;
             i < l;
             i++) {
            var parts = cookies[i].split('=');
            if (decode(parts.shift()) === key) {
                var cookie = decode(parts.join('='));
                return config.json ? JSON.parse(cookie) : cookie;
            }
        }

        return null;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) !== null) {
            $.cookie(key, null, options);
            return true;
        }
        return false;
    };

})(jQuery, document);

/*!
 * Bootstrap.js by @fat & @mdo
 * Copyright 2013 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function (e) {
    function O(e, t) {
        return function (n) {
            return j(e.call(this, n), t)
        }

    }
    function M(e) {
        return function (t) {
            return this.lang().ordinal(e.call(this, t))
        }

    }
    function _() { } function D(e) {
        H(this, e)
    }
    function P(e) {
        var t = this._data = {}, n = e.years || e.year || e.y || 0, r = e.months || e.month || e.M || 0, i = e.weeks || e.week || e.w || 0, s = e.days || e.day || e.d || 0, o = e.hours || e.hour || e.h || 0, u = e.minutes || e.minute || e.m || 0, a = e.seconds || e.second || e.s || 0, f = e.milliseconds || e.millisecond || e.ms || 0;
        this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, t.milliseconds = f % 1e3, a += B(f / 1e3), t.seconds = a % 60, u += B(a / 60), t.minutes = u % 60, o += B(u / 60), t.hours = o % 24, s += B(o / 24), s += i * 7, t.days = s % 30, r += B(s / 30), t.months = r % 12, n += B(r / 12), t.years = n
    }
    function H(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function B(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function j(e, t) {
        var n = e + "";
        while (n.length < t) n = "0" + n;
        return n
    }
    function F(e, t, n) {
        var r = t._milliseconds, i = t._days, s = t._months, o;
        r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())))
    }
    function I(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function q(e, t) {
        var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, s;
        for (s = 0;
             s < n;
             s++) ~ ~e[s] !== ~ ~t[s] && i++;
        return i + r
    }
    function R(e, t) {
        return t.abbr = e, s[e] || (s[e] = new _), s[e].set(t), s[e]
    }
    function U(e) {
        return e ? (!s[e] && o && require("./lang/" + e), s[e]) : t.fn._lang
    }
    function z(e) {
        return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function W(e) {
        var t = e.match(a), n, r;
        for (n = 0, r = t.length;
             n < r;
             n++) A[t[n]] ? t[n] = A[t[n]] : t[n] = z(t[n]);
        return function (i) {
            var s = "";
            for (n = 0;
                 n < r;
                 n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
            return s
        }

    }
    function X(e, t) {
        function r(t) {
            return e.lang().longDateFormat(t) || t
        }
        var n = 5;
        while (n-- && f.test(t)) t = t.replace(f, r);
        return C[t] || (C[t] = W(t)), C[t](e)
    }
    function V(e) {
        switch (e) {
            case "DDDD": return p;
            case "YYYY": return d;
            case "YYYYY": return v;
            case "S": case "SS": case "SSS": case "DDD": return h;
            case "MMM": case "MMMM": case "dd": case "ddd": case "dddd": case "a": case "A": return m;
            case "X": return b;
            case "Z": case "ZZ": return g;
            case "T": return y;
            case "MM": case "DD": case "YY": case "HH": case "hh": case "mm": case "ss": case "M": case "D": case "d": case "H": case "h": case "m": case "s": return c;
            default: return new RegExp(e.replace("\\", ""))
        }

    }
    function $(e, t, n) {
        var r, i, s = n._a;
        switch (e) {
            case "M": case "MM": s[1] = t == null ? 0 : ~ ~t - 1;
            break;
            case "MMM": case "MMMM": r = U(n._l).monthsParse(t), r != null ? s[1] = r : n._isValid = !1;
            break;
            case "D": case "DD": case "DDD": case "DDDD": t != null && (s[2] = ~ ~t);
            break;
            case "YY": s[0] = ~ ~t + (~ ~t > 68 ? 1900 : 2e3);
                break;
            case "YYYY": case "YYYYY": s[0] = ~ ~t;
            break;
            case "a": case "A": n._isPm = (t + "").toLowerCase() === "pm";
            break;
            case "H": case "HH": case "h": case "hh": s[3] = ~ ~t;
            break;
            case "m": case "mm": s[4] = ~ ~t;
            break;
            case "s": case "ss": s[5] = ~ ~t;
            break;
            case "S": case "SS": case "SSS": s[6] = ~ ~(("0." + t) * 1e3);
            break;
            case "X": n._d = new Date(parseFloat(t) * 1e3);
                break;
            case "Z": case "ZZ": n._useUTC = !0, r = (t + "").match(x), r && r[1] && (n._tzh = ~ ~r[1]), r && r[2] && (n._tzm = ~ ~r[2]), r && r[0] === "+" && (n._tzh = -n._tzh, n._tzm = -n._tzm)
        }
        t == null && (n._isValid = !1)
    }
    function J(e) {
        var t, n, r = [];
        if (e._d) return;
        for (t = 0;
             t < 7;
             t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        r[3] += e._tzh || 0, r[4] += e._tzm || 0, n = new Date(0), e._useUTC ? (n.setUTCFullYear(r[0], r[1], r[2]), n.setUTCHours(r[3], r[4], r[5], r[6])) : (n.setFullYear(r[0], r[1], r[2]), n.setHours(r[3], r[4], r[5], r[6])), e._d = n
    }
    function K(e) {
        var t = e._f.match(a), n = e._i, r, i;
        e._a = [];
        for (r = 0;
             r < t.length;
             r++) i = (V(t[r]).exec(n) || [])[0], i && (n = n.slice(n.indexOf(i) + i.length)), A[t[r]] && $(t[r], i, e);
        e._isPm && e._a[3] < 12 && (e._a[3] += 12), e._isPm === !1 && e._a[3] === 12 && (e._a[3] = 0), J(e)
    }
    function Q(e) {
        var t, n, r, i = 99, s, o, u;
        while (e._f.length) {
            t = H({}, e), t._f = e._f.pop(), K(t), n = new D(t);
            if (n.isValid()) {
                r = n;
                break
            }
            u = q(t._a, n.toArray()), u < i && (i = u, r = n)
        }
        H(e, r)
    }
    function G(e) {
        var t, n = e._i;
        if (w.exec(n)) {
            e._f = "YYYY-MM-DDT";
            for (t = 0;
                 t < 4;
                 t++) if (S[t][1].exec(n)) {
                e._f += S[t][0];
                break
            }
            g.exec(n) && (e._f += " Z"), K(e)
        }
        else e._d = new Date(n)
    }
    function Y(t) {
        var n = t._i, r = u.exec(n);
        n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : typeof n == "string" ? G(t) : I(n) ? (t._a = n.slice(0), J(t)) : t._d = n instanceof Date ? new Date(+n) : new Date(n)
    }
    function Z(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r)
    }
    function et(e, t, n) {
        var i = r(Math.abs(e) / 1e3), s = r(i / 60), o = r(s / 60), u = r(o / 24), a = r(u / 365), f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
        return f[2] = t, f[3] = e > 0, f[4] = n, Z.apply({}, f)
    }
    function tt(e, n, r) {
        var i = r - n, s = r - e.day();
        return s > i && (s -= 7), s < i - 7 && (s += 7), Math.ceil(t(e).add("d", s).dayOfYear() / 7)
    }
    function nt(e) {
        var n = e._i, r = e._f;
        return n === null || n === "" ? null : (typeof n == "string" && (e._i = n = U().preparse(n)), t.isMoment(n) ? (e = H({}, n), e._d = new Date(+n._d)) : r ? I(r) ? Q(e) : K(e) : Y(e), new D(e))
    }
    function rt(e, n) {
        t.fn[e] = t.fn[e + "s"] = function (e) {
            var t = this._isUTC ? "UTC" : "";
            return e != null ? (this._d["set" + t + n](e), this) : this._d["get" + t + n]()
        }

    }
    function it(e) {
        t.duration.fn[e] = function () {
            return this._data[e]
        }

    }
    function st(e, n) {
        t.duration.fn["as" + e] = function () {
            return +this / n
        }

    }
    var t, n = "2.0.0", r = Math.round, i, s = {}, o = typeof module != "undefined" && module.exports, u = /^\/?Date\((\-?\d+)/i, a = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, f = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, l = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, c = /\d\d?/, h = /\d{1,3}/, p = /\d{3}/, d = /\d{1,4}/, v = /[+\-]?\d{1,6}/, m = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, g = /Z|[\+\-]\d\d:?\d\d/i, y = /T/i, b = /[\+\-]?\d+(\.\d{1,3})?/, w = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, E = "YYYY-MM-DDTHH:mm:ssZ", S = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], x = /([\+\-]|\d\d)/gi, T = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), N = {
        Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6
    }
        , C = {}, k = "DDD w W M D d".split(" "), L = "M D H h m s w W".split(" "), A = {
        M: function () {
            return this.month() + 1
        }
        , MMM: function (e) {
            return this.lang().monthsShort(this, e)
        }
        , MMMM: function (e) {
            return this.lang().months(this, e)
        }
        , D: function () {
            return this.date()
        }
        , DDD: function () {
            return this.dayOfYear()
        }
        , d: function () {
            return this.day()
        }
        , dd: function (e) {
            return this.lang().weekdaysMin(this, e)
        }
        , ddd: function (e) {
            return this.lang().weekdaysShort(this, e)
        }
        , dddd: function (e) {
            return this.lang().weekdays(this, e)
        }
        , w: function () {
            return this.week()
        }
        , W: function () {
            return this.isoWeek()
        }
        , YY: function () {
            return j(this.year() % 100, 2)
        }
        , YYYY: function () {
            return j(this.year(), 4)
        }
        , YYYYY: function () {
            return j(this.year(), 5)
        }
        , a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        }
        , A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        }
        , H: function () {
            return this.hours()
        }
        , h: function () {
            return this.hours() % 12 || 12
        }
        , m: function () {
            return this.minutes()
        }
        , s: function () {
            return this.seconds()
        }
        , S: function () {
            return ~ ~(this.milliseconds() / 100)
        }
        , SS: function () {
            return j(~ ~(this.milliseconds() / 10), 2)
        }
        , SSS: function () {
            return j(this.milliseconds(), 3)
        }
        , Z: function () {
            var e = -this.zone(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + j(~ ~(e / 60), 2) + ":" + j(~ ~e % 60, 2)
        }
        , ZZ: function () {
            var e = -this.zone(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + j(~ ~(10 * e / 6), 4)
        }
        , X: function () {
            return this.unix()
        }

    };
    while (k.length) i = k.pop(), A[i + "o"] = M(A[i]);
    while (L.length) i = L.pop(), A[i + i] = O(A[i], 2);
    A.DDDD = O(A.DDD, 3), _.prototype = {
        set: function (e) {
            var t, n;
            for (n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t
        }
        , _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (e) {
            return this._months[e.month()]
        }
        , _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (e) {
            return this._monthsShort[e.month()]
        }
        , monthsParse: function (e) {
            var n, r, i, s;
            this._monthsParse || (this._monthsParse = []);
            for (n = 0;
                 n < 12;
                 n++) {
                this._monthsParse[n] || (r = t([2e3, n]), i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"));
                if (this._monthsParse[n].test(e)) return n
            }

        }
        , _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (e) {
            return this._weekdays[e.day()]
        }
        , _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (e) {
            return this._weekdaysShort[e.day()]
        }
        , _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (e) {
            return this._weekdaysMin[e.day()]
        }
        , _longDateFormat: {
            LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"
        }
        , longDateFormat: function (e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        }
        , meridiem: function (e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }
        , _calendar: {
            sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[last] dddd [at] LT", sameElse: "L"
        }
        , calendar: function (e, t) {
            var n = this._calendar[e];
            return typeof n == "function" ? n.apply(t) : n
        }
        , _relativeTime: {
            future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"
        }
        , relativeTime: function (e, t, n, r) {
            var i = this._relativeTime[n];
            return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
        }
        , pastFuture: function (e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
        }
        , ordinal: function (e) {
            return this._ordinal.replace("%d", e)
        }
        , _ordinal: "%d", preparse: function (e) {
            return e
        }
        , postformat: function (e) {
            return e
        }
        , week: function (e) {
            return tt(e, this._week.dow, this._week.doy)
        }
        , _week: {
            dow: 0, doy: 6
        }

    }
        , t = function (e, t, n) {
        return nt({
            _i: e, _f: t, _l: n, _isUTC: !1
        })
    }
        , t.utc = function (e, t, n) {
        return nt({
            _useUTC: !0, _isUTC: !0, _l: n, _i: e, _f: t
        })
    }
        , t.unix = function (e) {
        return t(e * 1e3)
    }
        , t.duration = function (e, n) {
        var r = t.isDuration(e), i = typeof e == "number", s = r ? e._data : i ? {} : e, o;
        return i && (n ? s[n] = e : s.milliseconds = e), o = new P(s), r && e.hasOwnProperty("_lang") && (o._lang = e._lang), o
    }
        , t.version = n, t.defaultFormat = E, t.lang = function (e, n) {
        var r;
        if (!e) return t.fn._lang._abbr;
        n ? R(e, n) : s[e] || U(e), t.duration.fn._lang = t.fn._lang = U(e)
    }
        , t.langData = function (e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), U(e)
    }
        , t.isMoment = function (e) {
        return e instanceof D
    }
        , t.isDuration = function (e) {
        return e instanceof P
    }
        , t.fn = D.prototype = {
        clone: function () {
            return t(this)
        }
        , valueOf: function () {
            return +this._d
        }
        , unix: function () {
            return Math.floor(+this._d / 1e3)
        }
        , toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }
        , toDate: function () {
            return this._d
        }
        , toJSON: function () {
            return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }
        , toArray: function () {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        }
        , isValid: function () {
            return this._isValid == null && (this._a ? this._isValid = !q(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), !!this._isValid
        }
        , utc: function () {
            return this._isUTC = !0, this
        }
        , local: function () {
            return this._isUTC = !1, this
        }
        , format: function (e) {
            var n = X(this, e || t.defaultFormat);
            return this.lang().postformat(n)
        }
        , add: function (e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, 1), this
        }
        , subtract: function (e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, -1), this
        }
        , diff: function (e, n, r) {
            var i = this._isUTC ? t(e).utc() : t(e).local(), s = (this.zone() - i.zone()) * 6e4, o, u;
            return n && (n = n.replace(/s$/, "")), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, u = (this.year() - i.year()) * 12 + (this.month() - i.month()), u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o, n === "year" && (u /= 12)) : (o = this - i - s, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? o / 864e5 : n === "week" ? o / 6048e5 : o), r ? u : B(u)
        }
        , from: function (e, n) {
            return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
        }
        , fromNow: function (e) {
            return this.from(t(), e)
        }
        , calendar: function () {
            var e = this.diff(t().startOf("day"), "days", !0), n = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this))
        }
        , isLeapYear: function () {
            var e = this.year();
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }
        , isDST: function () {
            return this.zone() < t([this.year()]).zone() || this.zone() < t([this.year(), 5]).zone()
        }
        , day: function (e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return e == null ? t : this.add({
                d: e - t
            })
        }
        , startOf: function (e) {
            e = e.replace(/s$/, "");
            switch (e) {
                case "year": this.month(0);
                case "month": this.date(1);
                case "week": case "day": this.hours(0);
                case "hour": this.minutes(0);
                case "minute": this.seconds(0);
                case "second": this.milliseconds(0)
            }
            return e === "week" && this.day(0), this
        }
        , endOf: function (e) {
            return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1)
        }
        , isAfter: function (e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) > +t(e).startOf(n)
        }
        , isBefore: function (e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) < +t(e).startOf(n)
        }
        , isSame: function (e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) === +t(e).startOf(n)
        }
        , zone: function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        }
        , daysInMonth: function () {
            return t.utc([this.year(), this.month() + 1, 0]).date()
        }
        , dayOfYear: function (e) {
            var n = r((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
            return e == null ? n : this.add("d", e - n)
        }
        , isoWeek: function (e) {
            var t = tt(this, 1, 4);
            return e == null ? t : this.add("d", (e - t) * 7)
        }
        , week: function (e) {
            var t = this.lang().week(this);
            return e == null ? t : this.add("d", (e - t) * 7)
        }
        , lang: function (t) {
            return t === e ? this._lang : (this._lang = U(t), this)
        }

    };
    for (i = 0;
         i < T.length;
         i++) rt(T[i].toLowerCase().replace(/s$/, ""), T[i]);
    rt("year", "FullYear"), t.fn.days = t.fn.day, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.duration.fn = P.prototype = {
        weeks: function () {
            return B(this.days() / 7)
        }
        , valueOf: function () {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        }
        , humanize: function (e) {
            var t = +this, n = et(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
        }
        , lang: t.fn.lang
    };
    for (i in N) N.hasOwnProperty(i) && (st(i, N[i]), it(i.toLowerCase()));
    st("Weeks", 6048e5), t.lang("en", {
        ordinal: function (e) {
            var t = e % 10, n = ~ ~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n
        }

    }), o && (module.exports = t), typeof ender == "undefined" && (this.moment = t), typeof define == "function" && define.amd && define("moment", [], function () {
        return t
    })
}).call(this);

/**
 * Intro.js v0.5.0
 * https://github.com/usablica/intro.js
 * MIT licensed
 *
 * Copyright (C) 2013 usabli.ca - A weekend project by Afshin Mehrabani (@afshinmeh)
 */

(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        factory(exports);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], factory);
    } else {
        // Browser globals
        factory(root);
    }
} (this, function (exports) {
    //Default config/variables
    var VERSION = '0.5.0';

    /**
     * IntroJs main class
     *
     * @class IntroJs
     */
    function IntroJs(obj) {
        this._targetElement = obj;

        this._options = {
            /* Next button label in tooltip box */
            nextLabel: 'Next &rarr;',
            /* Previous button label in tooltip box */
            prevLabel: '&larr; Back',
            /* Skip button label in tooltip box */
            skipLabel: 'Skip',
            /* Done button label in tooltip box */
            doneLabel: 'Done',
            /* Default tooltip box position */
            tooltipPosition: 'bottom',
            /* Next CSS class for tooltip boxes */
            tooltipClass: '',
            /* Close introduction when pressing Escape button? */
            exitOnEsc: true,
            /* Close introduction when clicking on overlay layer? */
            exitOnOverlayClick: true,
            /* Show step numbers in introduction? */
            showStepNumbers: false,
            /* Let user use keyboard to navigate the tour? */
            keyboardNavigation: true
        };
    }

    /**
     * Initiate a new introduction/guide from an element in the page
     *
     * @api private
     * @method _introForElement
     * @param {Object} targetElm
     * @returns {Boolean} Success or not?
     */
    function _introForElement(targetElm) {
        var introItems = [],
            self = this;

        if (this._options.steps) {
            //use steps passed programmatically
            var allIntroSteps = [];

            for (var i = 0, stepsLength = this._options.steps.length; i < stepsLength; i++) {
                var currentItem = this._options.steps[i];
                //set the step
                currentItem.step = i + 1;
                //use querySelector function only when developer used CSS selector
                if (typeof(currentItem.element) === 'string') {
                    //grab the element with given selector from the page
                    currentItem.element = document.querySelector(currentItem.element);
                }
                introItems.push(currentItem);
            }

        } else {
            //use steps from data-* annotations

            var allIntroSteps = targetElm.querySelectorAll('*[data-intro]');
            //if there's no element to intro
            if (allIntroSteps.length < 1) {
                return false;
            }

            for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
                var currentElement = allIntroSteps[i];
                introItems.push({
                    element: currentElement,
                    intro: currentElement.getAttribute('data-intro'),
                    step: parseInt(currentElement.getAttribute('data-step'), 10),
                    tooltipClass: currentElement.getAttribute('data-tooltipClass'),
                    position: currentElement.getAttribute('data-position') || this._options.tooltipPosition
                });
            }
        }

        //Ok, sort all items with given steps
        introItems.sort(function (a, b) {
            return a.step - b.step;
        });

        //set it to the introJs object
        self._introItems = introItems;

        //add overlay layer to the page
        if(_addOverlayLayer.call(self, targetElm)) {
            //then, start the show
            _nextStep.call(self);

            var skipButton = targetElm.querySelector('.introjs-skipbutton'),
                nextStepButton = targetElm.querySelector('.introjs-nextbutton');

            self._onKeyDown = function(e) {
                if (e.keyCode === 27 && self._options.exitOnEsc == true) {
                    //escape key pressed, exit the intro
                    _exitIntro.call(self, targetElm);
                    //check if any callback is defined
                    if (self._introExitCallback != undefined) {
                        self._introExitCallback.call(self);
                    }
                } else if(e.keyCode === 37) {
                    //left arrow
                    _previousStep.call(self);
                } else if (e.keyCode === 39 || e.keyCode === 13) {
                    //right arrow or enter
                    _nextStep.call(self);
                    //prevent default behaviour on hitting Enter, to prevent steps being skipped in some browsers
                    if(e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                }
            };

            self._onResize = function(e) {
                _setHelperLayerPosition.call(self, document.querySelector('.introjs-helperLayer'));
            };

            if (window.addEventListener) {
                if(this._options.keyboardNavigation) {
                    window.addEventListener('keydown', self._onKeyDown, true);
                }
                //for window resize
                window.addEventListener("resize", self._onResize, true);
            } else if (document.attachEvent) { //IE
                if(this._options.keyboardNavigation) {
                    document.attachEvent('onkeydown', self._onKeyDown);
                }
                //for window resize
                document.attachEvent("onresize", self._onResize);
            }
        }
        return false;
    }

    /**
     * Go to specific step of introduction
     *
     * @api private
     * @method _goToStep
     */
    function _goToStep(step) {
        //because steps starts with zero
        this._currentStep = step - 2;
        if(typeof (this._introItems) !== 'undefined') {
            _nextStep.call(this);
        }
    }

    /**
     * Go to next step on intro
     *
     * @api private
     * @method _nextStep
     */
    function _nextStep() {
        if (typeof (this._currentStep) === 'undefined') {
            this._currentStep = 0;
        } else {
            ++this._currentStep;
        }

        if((this._introItems.length) <= this._currentStep) {
            //end of the intro
            //check if any callback is defined
            if (typeof (this._introCompleteCallback) === 'function') {
                this._introCompleteCallback.call(this);
            }
            _exitIntro.call(this, this._targetElement);
            return;
        }

        var nextStep = this._introItems[this._currentStep];
        if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
            this._introBeforeChangeCallback.call(this, nextStep.element);
        }

        _showElement.call(this, nextStep);
    }

    /**
     * Go to previous step on intro
     *
     * @api private
     * @method _nextStep
     */
    function _previousStep() {
        if (this._currentStep === 0) {
            return false;
        }

        var nextStep = this._introItems[--this._currentStep];
        if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
            this._introBeforeChangeCallback.call(this, nextStep.element);
        }

        _showElement.call(this, nextStep);
    }

    /**
     * Exit from intro
     *
     * @api private
     * @method _exitIntro
     * @param {Object} targetElement
     */
    function _exitIntro(targetElement) {
        //remove overlay layer from the page
        var overlayLayer = targetElement.querySelector('.introjs-overlay');
        //for fade-out animation
        overlayLayer.style.opacity = 0;
        setTimeout(function () {
            if (overlayLayer.parentNode) {
                overlayLayer.parentNode.removeChild(overlayLayer);
            }
        }, 500);
        //remove all helper layers
        var helperLayer = targetElement.querySelector('.introjs-helperLayer');
        if (helperLayer) {
            helperLayer.parentNode.removeChild(helperLayer);
        }
        //remove `introjs-showElement` class from the element
        var showElement = document.querySelector('.introjs-showElement');
        if (showElement) {
            showElement.className = showElement.className.replace(/introjs-[a-zA-Z]+/g, '').replace(/^\s+|\s+$/g, ''); // This is a manual trim.
        }

        //remove `introjs-fixParent` class from the elements
        var fixParents = document.querySelectorAll('.introjs-fixParent');
        if (fixParents && fixParents.length > 0) {
            for (var i = fixParents.length - 1; i >= 0; i--) {
                fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
            };
        }
        //clean listeners
        if (window.removeEventListener) {
            window.removeEventListener('keydown', this._onKeyDown, true);
        } else if (document.detachEvent) { //IE
            document.detachEvent('onkeydown', this._onKeyDown);
        }
        //set the step to zero
        this._currentStep = undefined;
    }

    /**
     * Render tooltip box in the page
     *
     * @api private
     * @method _placeTooltip
     * @param {Object} targetElement
     * @param {Object} tooltipLayer
     * @param {Object} arrowLayer
     */
    function _placeTooltip(targetElement, tooltipLayer, arrowLayer) {
        //reset the old style
        tooltipLayer.style.top     = null;
        tooltipLayer.style.right   = null;
        tooltipLayer.style.bottom  = null;
        tooltipLayer.style.left    = null;

        //prevent error when `this._currentStep` is undefined
        if(!this._introItems[this._currentStep]) return;

        var tooltipCssClass = '';

        //if we have a custom css class for each step
        var currentStepObj = this._introItems[this._currentStep];
        if (typeof (currentStepObj.tooltipClass) === 'string') {
            tooltipCssClass = currentStepObj.tooltipClass;
        } else {
            tooltipCssClass = this._options.tooltipClass;
        }

        tooltipLayer.className = ('introjs-tooltip ' + tooltipCssClass).replace(/^\s+|\s+$/g, '');

        //custom css class for tooltip boxes
        var tooltipCssClass = this._options.tooltipClass;

        var currentTooltipPosition = this._introItems[this._currentStep].position;
        switch (currentTooltipPosition) {
            case 'top':
                tooltipLayer.style.left = '15px';
                tooltipLayer.style.top = '-' + (_getOffset(tooltipLayer).height + 10) + 'px';
                arrowLayer.className = 'introjs-arrow bottom';
                break;
            case 'right':
                tooltipLayer.style.left = (_getOffset(targetElement).width + 20) + 'px';
                arrowLayer.className = 'introjs-arrow left';
                break;
            case 'left':
                tooltipLayer.style.top = '15px';
                tooltipLayer.style.right = (_getOffset(targetElement).width + 20) + 'px';
                arrowLayer.className = 'introjs-arrow right';
                break;
            case 'bottom':
            // Bottom going to follow the default behavior
            default:
                tooltipLayer.style.bottom = '-' + (_getOffset(tooltipLayer).height + 10) + 'px';
                arrowLayer.className = 'introjs-arrow top';
                break;
        }
    }

    /**
     * Update the position of the helper layer on the screen
     *
     * @api private
     * @method _setHelperLayerPosition
     * @param {Object} helperLayer
     */
    function _setHelperLayerPosition(helperLayer) {
        if(helperLayer) {
            //prevent error when `this._currentStep` in undefined
            if(!this._introItems[this._currentStep]) return;

            var elementPosition = _getOffset(this._introItems[this._currentStep].element);
            //set new position to helper layer
            helperLayer.setAttribute('style', 'width: ' + (elementPosition.width  + 10)  + 'px; ' +
                'height:' + (elementPosition.height + 10)  + 'px; ' +
                'top:'    + (elementPosition.top    - 5)   + 'px;' +
                'left: '  + (elementPosition.left   - 5)   + 'px;');
        }
    }

    /**
     * Show an element on the page
     *
     * @api private
     * @method _showElement
     * @param {Object} targetElement
     */
    function _showElement(targetElement) {

        if (typeof (this._introChangeCallback) !== 'undefined') {
            this._introChangeCallback.call(this, targetElement.element);
        }

        var self = this,
            oldHelperLayer = document.querySelector('.introjs-helperLayer'),
            elementPosition = _getOffset(targetElement.element);

        if(oldHelperLayer != null) {
            var oldHelperNumberLayer = oldHelperLayer.querySelector('.introjs-helperNumberLayer'),
                oldtooltipLayer      = oldHelperLayer.querySelector('.introjs-tooltiptext'),
                oldArrowLayer        = oldHelperLayer.querySelector('.introjs-arrow'),
                oldtooltipContainer  = oldHelperLayer.querySelector('.introjs-tooltip'),
                skipTooltipButton    = oldHelperLayer.querySelector('.introjs-skipbutton'),
                prevTooltipButton    = oldHelperLayer.querySelector('.introjs-prevbutton'),
                nextTooltipButton    = oldHelperLayer.querySelector('.introjs-nextbutton');

            //hide the tooltip
            oldtooltipContainer.style.opacity = 0;

            //set new position to helper layer
            _setHelperLayerPosition.call(self, oldHelperLayer);

            //remove `introjs-fixParent` class from the elements
            var fixParents = document.querySelectorAll('.introjs-fixParent');
            if (fixParents && fixParents.length > 0) {
                for (var i = fixParents.length - 1; i >= 0; i--) {
                    fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
                };
            }

            //remove old classes
            var oldShowElement = document.querySelector('.introjs-showElement');
            oldShowElement.className = oldShowElement.className.replace(/introjs-[a-zA-Z]+/g, '').replace(/^\s+|\s+$/g, '');
            //we should wait until the CSS3 transition is competed (it's 0.3 sec) to prevent incorrect `height` and `width` calculation
            if (self._lastShowElementTimer) {
                clearTimeout(self._lastShowElementTimer);
            }
            self._lastShowElementTimer = setTimeout(function() {
                //set current step to the label
                if(oldHelperNumberLayer != null) {
                    oldHelperNumberLayer.innerHTML = targetElement.step;
                }
                //set current tooltip text
                oldtooltipLayer.innerHTML = targetElement.intro;
                //set the tooltip position
                _placeTooltip.call(self, targetElement.element, oldtooltipContainer, oldArrowLayer);
                //show the tooltip
                oldtooltipContainer.style.opacity = 1;
            }, 350);

        } else {
            var helperLayer  = document.createElement('div'),
                arrowLayer   = document.createElement('div'),
                tooltipLayer = document.createElement('div');

            helperLayer.className = 'introjs-helperLayer';

            //set new position to helper layer
            _setHelperLayerPosition.call(self, helperLayer);

            //add helper layer to target element
            this._targetElement.appendChild(helperLayer);

            arrowLayer.className = 'introjs-arrow';

            tooltipLayer.innerHTML = '<div class="introjs-tooltiptext">' +
                targetElement.intro +
                '</div><div class="introjs-tooltipbuttons"></div>';

            //add helper layer number
            if (this._options.showStepNumbers) {
                var helperNumberLayer = document.createElement('span');
                helperNumberLayer.className = 'introjs-helperNumberLayer';
                helperNumberLayer.innerHTML = targetElement.step;
                helperLayer.appendChild(helperNumberLayer);
            }
            tooltipLayer.appendChild(arrowLayer);
            helperLayer.appendChild(tooltipLayer);

            //next button
            var nextTooltipButton = document.createElement('a');

            nextTooltipButton.onclick = function() {
                if(self._introItems.length - 1 != self._currentStep) {
                    _nextStep.call(self);
                }
            };

            nextTooltipButton.href = 'javascript:void(0);';
            nextTooltipButton.innerHTML = this._options.nextLabel;

            //previous button
            var prevTooltipButton = document.createElement('a');

            prevTooltipButton.onclick = function() {
                if(self._currentStep != 0) {
                    _previousStep.call(self);
                }
            };

            prevTooltipButton.href = 'javascript:void(0);';
            prevTooltipButton.innerHTML = this._options.prevLabel;

            //skip button
            var skipTooltipButton = document.createElement('a');
            skipTooltipButton.className = 'introjs-button introjs-skipbutton';
            skipTooltipButton.href = 'javascript:void(0);';
            skipTooltipButton.innerHTML = this._options.skipLabel;

            skipTooltipButton.onclick = function() {
                if (self._introItems.length - 1 == self._currentStep && typeof (self._introCompleteCallback) === 'function') {
                    self._introCompleteCallback.call(self);
                }

                if (self._introItems.length - 1 != self._currentStep && typeof (self._introExitCallback) === 'function') {
                    self._introExitCallback.call(self);
                }

                _exitIntro.call(self, self._targetElement);
            };

            var tooltipButtonsLayer = tooltipLayer.querySelector('.introjs-tooltipbuttons');
            tooltipButtonsLayer.appendChild(skipTooltipButton);

            //in order to prevent displaying next/previous button always
            if (this._introItems.length > 1) {
                tooltipButtonsLayer.appendChild(prevTooltipButton);
                tooltipButtonsLayer.appendChild(nextTooltipButton);
            }

            //set proper position
            _placeTooltip.call(self, targetElement.element, tooltipLayer, arrowLayer);
        }

        if (this._currentStep == 0) {
            prevTooltipButton.className = 'introjs-button introjs-prevbutton introjs-disabled';
            nextTooltipButton.className = 'introjs-button introjs-nextbutton';
            skipTooltipButton.innerHTML = this._options.skipLabel;
        } else if (this._introItems.length - 1 == this._currentStep) {
            skipTooltipButton.innerHTML = this._options.doneLabel;
            prevTooltipButton.className = 'introjs-button introjs-prevbutton';
            nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-disabled';
        } else {
            prevTooltipButton.className = 'introjs-button introjs-prevbutton';
            nextTooltipButton.className = 'introjs-button introjs-nextbutton';
            skipTooltipButton.innerHTML = this._options.skipLabel;
        }

        //Set focus on "next" button, so that hitting Enter always moves you onto the next step
        nextTooltipButton.focus();

        //add target element position style
        targetElement.element.className += ' introjs-showElement';

        var currentElementPosition = _getPropValue(targetElement.element, 'position');
        if (currentElementPosition !== 'absolute' &&
            currentElementPosition !== 'relative') {
            //change to new intro item
            targetElement.element.className += ' introjs-relativePosition';
        }

        var parentElm = targetElement.element.parentNode;
        while(parentElm != null) {
            if(parentElm.tagName.toLowerCase() === 'body') break;

            var zIndex = _getPropValue(parentElm, 'z-index');
            if(/[0-9]+/.test(zIndex)) {
                parentElm.className += ' introjs-fixParent';
            }
            parentElm = parentElm.parentNode;
        }

        if (!_elementInViewport(targetElement.element)) {
            var rect = targetElement.element.getBoundingClientRect(),
                top = rect.bottom - (rect.bottom - rect.top),
                bottom = rect.bottom - _getWinSize().height-rect.height;

            // Scroll up
            if (top < 0) {
                window.scrollBy(0, top - 30); // 30px padding from edge to look nice


                // Scroll down
            } else {
                window.scrollBy(0, bottom + 100); // 70px + 30px padding from edge to look nice
            }
        }
    }

    /**
     * Get an element CSS property on the page
     * Thanks to JavaScript Kit: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
     *
     * @api private
     * @method _getPropValue
     * @param {Object} element
     * @param {String} propName
     * @returns Element's property value
     */
    function _getPropValue (element, propName) {
        var propValue = '';
        if (element.currentStyle) { //IE
            propValue = element.currentStyle[propName];
        } else if (document.defaultView && document.defaultView.getComputedStyle) { //Others
            propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
        }

        //Prevent exception in IE
        if(propValue && propValue.toLowerCase) {
            return propValue.toLowerCase();
        } else {
            return propValue;
        }
    }

    /**
     * Provides a cross-browser way to get the screen dimensions
     * via: http://stackoverflow.com/questions/5864467/internet-explorer-innerheight
     *
     * @api private
     * @method _getWinSize
     * @returns {Object} width and height attributes
     */
    function _getWinSize() {
        if (window.innerWidth != undefined) {
            return { width: window.innerWidth, height: window.innerHeight };
        } else {
            var D = document.documentElement;
            return { width: D.clientWidth, height: D.clientHeight };
        }
    }

    /**
     * Add overlay layer to the page
     * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
     *
     * @api private
     * @method _elementInViewport
     * @param {Object} el
     */
    function _elementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            (rect.bottom+80) <= window.innerHeight && // add 80 to get the text right
            rect.right <= window.innerWidth
        );
    }

    /**
     * Add overlay layer to the page
     *
     * @api private
     * @method _addOverlayLayer
     * @param {Object} targetElm
     */
    function _addOverlayLayer(targetElm) {
        var overlayLayer = document.createElement('div'),
            styleText = '',
            self = this;

        //set css class name
        overlayLayer.className = 'introjs-overlay';

        //check if the target element is body, we should calculate the size of overlay layer in a better way
        if (targetElm.tagName.toLowerCase() === 'body') {
            styleText += 'top: 0;bottom: 0; left: 0;right: 0;position: fixed;';
            overlayLayer.setAttribute('style', styleText);
        } else {
            //set overlay layer position
            var elementPosition = _getOffset(targetElm);
            if(elementPosition) {
                styleText += 'width: ' + elementPosition.width + 'px; height:' + elementPosition.height + 'px; top:' + elementPosition.top + 'px;left: ' + elementPosition.left + 'px;';
                overlayLayer.setAttribute('style', styleText);
            }
        }

        targetElm.appendChild(overlayLayer);

        overlayLayer.onclick = function() {
            if(self._options.exitOnOverlayClick == true) {
                _exitIntro.call(self, targetElm);
            }
            //check if any callback is defined
            if (self._introExitCallback != undefined) {
                self._introExitCallback.call(self);
            }
        };

        setTimeout(function() {
            styleText += 'opacity: .8;';
            overlayLayer.setAttribute('style', styleText);
        }, 10);
        return true;
    }

    /**
     * Get an element position on the page
     * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
     *
     * @api private
     * @method _getOffset
     * @param {Object} element
     * @returns Element's position info
     */
    function _getOffset(element) {
        var elementPosition = {};

        //set width
        elementPosition.width = element.offsetWidth;

        //set height
        elementPosition.height = element.offsetHeight;

        //calculate element top and left
        var _x = 0;
        var _y = 0;
        while(element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
            _x += element.offsetLeft;
            _y += element.offsetTop;
            element = element.offsetParent;
        }
        //set top
        elementPosition.top = _y;
        //set left
        elementPosition.left = _x;

        return elementPosition;
    }

    /**
     * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
     * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
     *
     * @param obj1
     * @param obj2
     * @returns obj3 a new object based on obj1 and obj2
     */
    function _mergeOptions(obj1,obj2) {
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
        return obj3;
    }

    var introJs = function (targetElm) {
        if (typeof (targetElm) === 'object') {
            //Ok, create a new instance
            return new IntroJs(targetElm);

        } else if (typeof (targetElm) === 'string') {
            //select the target element with query selector
            var targetElement = document.querySelector(targetElm);

            if (targetElement) {
                return new IntroJs(targetElement);
            } else {
                throw new Error('There is no element with given selector.');
            }
        } else {
            return new IntroJs(document.body);
        }
    };

    /**
     * Current IntroJs version
     *
     * @property version
     * @type String
     */
    introJs.version = VERSION;

    //Prototype
    introJs.fn = IntroJs.prototype = {
        clone: function () {
            return new IntroJs(this);
        },
        setOption: function(option, value) {
            this._options[option] = value;
            return this;
        },
        setOptions: function(options) {
            this._options = _mergeOptions(this._options, options);
            return this;
        },
        start: function () {
            _introForElement.call(this, this._targetElement);
            return this;
        },
        goToStep: function(step) {
            _goToStep.call(this, step);
            return this;
        },
        exit: function() {
            _exitIntro.call(this, this._targetElement);
        },
        refresh: function() {
            _setHelperLayerPosition.call(this, document.querySelector('.introjs-helperLayer'));
            return this;
        },
        onbeforechange: function(providedCallback) {
            if (typeof (providedCallback) === 'function') {
                this._introBeforeChangeCallback = providedCallback;
            } else {
                throw new Error('Provided callback for onbeforechange was not a function');
            }
            return this;
        },
        onchange: function(providedCallback) {
            if (typeof (providedCallback) === 'function') {
                this._introChangeCallback = providedCallback;
            } else {
                throw new Error('Provided callback for onchange was not a function.');
            }
            return this;
        },
        oncomplete: function(providedCallback) {
            if (typeof (providedCallback) === 'function') {
                this._introCompleteCallback = providedCallback;
            } else {
                throw new Error('Provided callback for oncomplete was not a function.');
            }
            return this;
        },
        onexit: function(providedCallback) {
            if (typeof (providedCallback) === 'function') {
                this._introExitCallback = providedCallback;
            } else {
                throw new Error('Provided callback for onexit was not a function.');
            }
            return this;
        }
    };

    exports.introJs = introJs;
    return introJs;
}));
"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a){var b={init:function(b){return this.options=a.extend({},a.noty.defaults,b),this.options.layout=this.options.custom?a.noty.layouts.inline:a.noty.layouts[this.options.layout],a.noty.themes[this.options.theme]?this.options.theme=a.noty.themes[this.options.theme]:b.themeClassName=this.options.theme,delete b.layout,delete b.theme,this.options=a.extend({},this.options,this.options.layout.options),this.options.id="noty_"+(new Date).getTime()*Math.floor(1e6*Math.random()),this.options=a.extend({},this.options,b),this._build(),this},_build:function(){var b=a('<div class="noty_bar noty_type_'+this.options.type+'"></div>').attr("id",this.options.id);if(b.append(this.options.template).find(".noty_text").html(this.options.text),this.$bar=null!==this.options.layout.parent.object?a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(b):b,this.options.themeClassName&&this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_"+this.options.type),this.options.buttons){this.options.closeWith=[],this.options.timeout=!1;var c=a("<div/>").addClass("noty_buttons");null!==this.options.layout.parent.object?this.$bar.find(".noty_bar").append(c):this.$bar.append(c);var d=this;a.each(this.options.buttons,function(b,c){var e=a("<button/>").addClass(c.addClass?c.addClass:"gray").html(c.text).attr("id",c.id?c.id:"button-"+b).appendTo(d.$bar.find(".noty_buttons")).bind("click",function(){a.isFunction(c.onClick)&&c.onClick.call(e,d)})})}this.$message=this.$bar.find(".noty_message"),this.$closeButton=this.$bar.find(".noty_close"),this.$buttons=this.$bar.find(".noty_buttons"),a.noty.store[this.options.id]=this},show:function(){var b=this;return b.options.custom?b.options.custom.find(b.options.layout.container.selector).append(b.$bar):a(b.options.layout.container.selector).append(b.$bar),b.options.theme&&b.options.theme.style&&b.options.theme.style.apply(b),"function"===a.type(b.options.layout.css)?this.options.layout.css.apply(b.$bar):b.$bar.css(this.options.layout.css||{}),b.$bar.addClass(b.options.layout.addClass),b.options.layout.container.style.apply(a(b.options.layout.container.selector)),b.showing=!0,b.options.theme&&b.options.theme.style&&b.options.theme.callback.onShow.apply(this),a.inArray("click",b.options.closeWith)>-1&&b.$bar.css("cursor","pointer").one("click",function(a){b.stopPropagation(a),b.options.callback.onCloseClick&&b.options.callback.onCloseClick.apply(b),b.close()}),a.inArray("hover",b.options.closeWith)>-1&&b.$bar.one("mouseenter",function(){b.close()}),a.inArray("button",b.options.closeWith)>-1&&b.$closeButton.one("click",function(a){b.stopPropagation(a),b.close()}),-1==a.inArray("button",b.options.closeWith)&&b.$closeButton.remove(),b.options.callback.onShow&&b.options.callback.onShow.apply(b),b.$bar.animate(b.options.animation.open,b.options.animation.speed,b.options.animation.easing,function(){b.options.callback.afterShow&&b.options.callback.afterShow.apply(b),b.showing=!1,b.shown=!0}),b.options.timeout&&b.$bar.delay(b.options.timeout).promise().done(function(){b.close()}),this},close:function(){if(!(this.closed||this.$bar&&this.$bar.hasClass("i-am-closing-now"))){var b=this;if(this.showing)return b.$bar.queue(function(){b.close.apply(b)}),void 0;if(!this.shown&&!this.showing){var c=[];return a.each(a.noty.queue,function(a,d){d.options.id!=b.options.id&&c.push(d)}),a.noty.queue=c,void 0}b.$bar.addClass("i-am-closing-now"),b.options.callback.onClose&&b.options.callback.onClose.apply(b),b.$bar.clearQueue().stop().animate(b.options.animation.close,b.options.animation.speed,b.options.animation.easing,function(){b.options.callback.afterClose&&b.options.callback.afterClose.apply(b)}).promise().done(function(){b.options.modal&&(a.notyRenderer.setModalCount(-1),0==a.notyRenderer.getModalCount()&&a(".noty_modal").fadeOut("fast",function(){a(this).remove()})),a.notyRenderer.setLayoutCountFor(b,-1),0==a.notyRenderer.getLayoutCountFor(b)&&a(b.options.layout.container.selector).remove(),"undefined"!=typeof b.$bar&&null!==b.$bar&&(b.$bar.remove(),b.$bar=null,b.closed=!0),delete a.noty.store[b.options.id],b.options.theme.callback.onClose.apply(b),b.options.dismissQueue||(a.noty.ontap=!0,a.notyRenderer.render()),b.options.maxVisible>0&&b.options.dismissQueue&&a.notyRenderer.render()})}},setText:function(a){return this.closed||(this.options.text=a,this.$bar.find(".noty_text").html(a)),this},setType:function(a){return this.closed||(this.options.type=a,this.options.theme.style.apply(this),this.options.theme.callback.onShow.apply(this)),this},setTimeout:function(a){if(!this.closed){var b=this;this.options.timeout=a,b.$bar.delay(b.options.timeout).promise().done(function(){b.close()})}return this},stopPropagation:function(a){a=a||window.event,"undefined"!=typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},closed:!1,showing:!1,shown:!1};a.notyRenderer={},a.notyRenderer.init=function(c){var d=Object.create(b).init(c);return d.options.killer&&a.noty.closeAll(),d.options.force?a.noty.queue.unshift(d):a.noty.queue.push(d),a.notyRenderer.render(),"object"==a.noty.returns?d:d.options.id},a.notyRenderer.render=function(){var b=a.noty.queue[0];"object"===a.type(b)?b.options.dismissQueue?b.options.maxVisible>0?a(b.options.layout.container.selector+" li").length<b.options.maxVisible&&a.notyRenderer.show(a.noty.queue.shift()):a.notyRenderer.show(a.noty.queue.shift()):a.noty.ontap&&(a.notyRenderer.show(a.noty.queue.shift()),a.noty.ontap=!1):a.noty.ontap=!0},a.notyRenderer.show=function(b){b.options.modal&&(a.notyRenderer.createModalFor(b),a.notyRenderer.setModalCount(1)),b.options.custom?0==b.options.custom.find(b.options.layout.container.selector).length?b.options.custom.append(a(b.options.layout.container.object).addClass("i-am-new")):b.options.custom.find(b.options.layout.container.selector).removeClass("i-am-new"):0==a(b.options.layout.container.selector).length?a("body").append(a(b.options.layout.container.object).addClass("i-am-new")):a(b.options.layout.container.selector).removeClass("i-am-new"),a.notyRenderer.setLayoutCountFor(b,1),b.show()},a.notyRenderer.createModalFor=function(b){0==a(".noty_modal").length&&a("<div/>").addClass("noty_modal").data("noty_modal_count",0).css(b.options.theme.modal.css).prependTo(a("body")).fadeIn("fast")},a.notyRenderer.getLayoutCountFor=function(b){return a(b.options.layout.container.selector).data("noty_layout_count")||0},a.notyRenderer.setLayoutCountFor=function(b,c){return a(b.options.layout.container.selector).data("noty_layout_count",a.notyRenderer.getLayoutCountFor(b)+c)},a.notyRenderer.getModalCount=function(){return a(".noty_modal").data("noty_modal_count")||0},a.notyRenderer.setModalCount=function(b){return a(".noty_modal").data("noty_modal_count",a.notyRenderer.getModalCount()+b)},a.fn.noty=function(b){return b.custom=a(this),a.notyRenderer.init(b)},a.noty={},a.noty.queue=[],a.noty.ontap=!0,a.noty.layouts={},a.noty.themes={},a.noty.returns="object",a.noty.store={},a.noty.get=function(b){return a.noty.store.hasOwnProperty(b)?a.noty.store[b]:!1},a.noty.close=function(b){return a.noty.get(b)?a.noty.get(b).close():!1},a.noty.setText=function(b,c){return a.noty.get(b)?a.noty.get(b).setText(c):!1},a.noty.setType=function(b,c){return a.noty.get(b)?a.noty.get(b).setType(c):!1},a.noty.clearQueue=function(){a.noty.queue=[]},a.noty.closeAll=function(){a.noty.clearQueue(),a.each(a.noty.store,function(a,b){b.close()})};var c=window.alert;a.noty.consumeAlert=function(b){window.alert=function(c){b?b.text=c:b={text:c},a.notyRenderer.init(b)}},a.noty.stopConsumeAlert=function(){window.alert=c},a.noty.defaults={layout:"top",theme:"defaultTheme",type:"alert",text:"",dismissQueue:!0,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:"toggle"},close:{height:"toggle"},easing:"swing",speed:500},timeout:!1,force:!1,modal:!1,maxVisible:5,killer:!1,closeWith:["click"],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){},onCloseClick:function(){}},buttons:!1},a(window).resize(function(){a.each(a.noty.layouts,function(b,c){c.container.style.apply(a(c.container.selector))})})}(jQuery),window.noty=function(a){return jQuery.notyRenderer.init(a)},function(a){a.noty.layouts.bottom={name:"bottom",options:{},container:{object:'<ul id="noty_bottom_layout_container" />',selector:"ul#noty_bottom_layout_container",style:function(){a(this).css({bottom:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(a){a.noty.layouts.bottomCenter={name:"bottomCenter",options:{},container:{object:'<ul id="noty_bottomCenter_layout_container" />',selector:"ul#noty_bottomCenter_layout_container",style:function(){a(this).css({bottom:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.bottomLeft={name:"bottomLeft",options:{},container:{object:'<ul id="noty_bottomLeft_layout_container" />',selector:"ul#noty_bottomLeft_layout_container",style:function(){a(this).css({bottom:20,left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.bottomRight={name:"bottomRight",options:{},container:{object:'<ul id="noty_bottomRight_layout_container" />',selector:"ul#noty_bottomRight_layout_container",style:function(){a(this).css({bottom:20,right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.center={name:"center",options:{},container:{object:'<ul id="noty_center_layout_container" />',selector:"ul#noty_center_layout_container",style:function(){a(this).css({position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7});var b=a(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");a("body").append(b),b.find(".i-am-closing-now").remove(),b.find("li").css("display","block");var c=b.height();b.remove(),a(this).hasClass("i-am-new")?a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px",top:(a(window).height()-c)/2+"px"}):a(this).animate({left:(a(window).width()-a(this).outerWidth(!1))/2+"px",top:(a(window).height()-c)/2+"px"},500)}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.centerLeft={name:"centerLeft",options:{},container:{object:'<ul id="noty_centerLeft_layout_container" />',selector:"ul#noty_centerLeft_layout_container",style:function(){a(this).css({left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7});var b=a(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");a("body").append(b),b.find(".i-am-closing-now").remove(),b.find("li").css("display","block");var c=b.height();b.remove(),a(this).hasClass("i-am-new")?a(this).css({top:(a(window).height()-c)/2+"px"}):a(this).animate({top:(a(window).height()-c)/2+"px"},500),window.innerWidth<600&&a(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.centerRight={name:"centerRight",options:{},container:{object:'<ul id="noty_centerRight_layout_container" />',selector:"ul#noty_centerRight_layout_container",style:function(){a(this).css({right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7});var b=a(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");a("body").append(b),b.find(".i-am-closing-now").remove(),b.find("li").css("display","block");var c=b.height();b.remove(),a(this).hasClass("i-am-new")?a(this).css({top:(a(window).height()-c)/2+"px"}):a(this).animate({top:(a(window).height()-c)/2+"px"},500),window.innerWidth<600&&a(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.inline={name:"inline",options:{},container:{object:'<ul class="noty_inline_layout_container" />',selector:"ul.noty_inline_layout_container",style:function(){a(this).css({width:"100%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(a){a.noty.layouts.top={name:"top",options:{},container:{object:'<ul id="noty_top_layout_container" />',selector:"ul#noty_top_layout_container",style:function(){a(this).css({top:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(a){a.noty.layouts.topCenter={name:"topCenter",options:{},container:{object:'<ul id="noty_topCenter_layout_container" />',selector:"ul#noty_topCenter_layout_container",style:function(){a(this).css({top:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.topLeft={name:"topLeft",options:{},container:{object:'<ul id="noty_topLeft_layout_container" />',selector:"ul#noty_topLeft_layout_container",style:function(){a(this).css({top:20,left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.topRight={name:"topRight",options:{},container:{object:'<ul id="noty_topRight_layout_container" />',selector:"ul#noty_topRight_layout_container",style:function(){a(this).css({top:20,right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.themes.defaultTheme={name:"defaultTheme",helpers:{borderFix:function(){if(this.options.dismissQueue){var b=this.options.layout.container.selector+" "+this.options.layout.parent.selector;switch(this.options.layout.name){case"top":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).last().css({borderRadius:"0px 0px 5px 5px"});break;case"topCenter":case"topLeft":case"topRight":case"bottomCenter":case"bottomLeft":case"bottomRight":case"center":case"centerLeft":case"centerRight":case"inline":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).first().css({"border-top-left-radius":"5px","border-top-right-radius":"5px"}),a(b).last().css({"border-bottom-left-radius":"5px","border-bottom-right-radius":"5px"});break;case"bottom":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).first().css({borderRadius:"5px 5px 0px 0px"})}}}},modal:{css:{position:"fixed",width:"100%",height:"100%",backgroundColor:"#000",zIndex:1e4,opacity:.6,display:"none",left:0,top:0}},style:function(){switch(this.$bar.css({overflow:"hidden",background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"}),this.$message.css({fontSize:"13px",lineHeight:"16px",textAlign:"center",padding:"8px 10px 9px",width:"auto",position:"relative"}),this.$closeButton.css({position:"absolute",top:4,right:4,width:10,height:10,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",display:"none",cursor:"pointer"}),this.$buttons.css({padding:5,textAlign:"right",borderTop:"1px solid #ccc",backgroundColor:"#fff"}),this.$buttons.find("button").css({marginLeft:5}),this.$buttons.find("button:first").css({marginLeft:0}),this.$bar.bind({mouseenter:function(){a(this).find(".noty_close").stop().fadeTo("normal",1)},mouseleave:function(){a(this).find(".noty_close").stop().fadeTo("normal",0)}}),this.options.layout.name){case"top":this.$bar.css({borderRadius:"0px 0px 5px 5px",borderBottom:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});break;case"topCenter":case"center":case"bottomCenter":case"inline":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"center"});break;case"topLeft":case"topRight":case"bottomLeft":case"bottomRight":case"centerLeft":case"centerRight":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"left"});break;case"bottom":this.$bar.css({borderRadius:"5px 5px 0px 0px",borderTop:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 -2px 4px rgba(0, 0, 0, 0.1)"});break;default:this.$bar.css({border:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"})}switch(this.options.type){case"alert":case"notification":this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"});break;case"warning":this.$bar.css({backgroundColor:"#FFEAA8",borderColor:"#FFC237",color:"#826200"}),this.$buttons.css({borderTop:"1px solid #FFC237"});break;case"error":this.$bar.css({backgroundColor:"red",borderColor:"darkred",color:"#FFF"}),this.$message.css({fontWeight:"bold"}),this.$buttons.css({borderTop:"1px solid darkred"});break;case"information":this.$bar.css({backgroundColor:"#57B7E2",borderColor:"#0B90C4",color:"#FFF"}),this.$buttons.css({borderTop:"1px solid #0B90C4"});break;case"success":this.$bar.css({backgroundColor:"lightgreen",borderColor:"#50C24E",color:"darkgreen"}),this.$buttons.css({borderTop:"1px solid #50C24E"});break;default:this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"})}},callback:{onShow:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)},onClose:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)}}}}(jQuery);
"use strict";
var re=new RegExp("^\\s*([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)\\s*$");
var re2=new RegExp("^\\s*$");
var re3=new RegExp("^\\s*[.0]+\\s*$");
var chat_scroll_freeze_time=60;
var fixup_delay=3*1e3;
var bet_wait_timeout=1*1e3;
var nick,socket,investment,invest_pct,fee,csrf;
var withdraw_address="";
var current_tab,chatlog,chatscroll;
var google_auth;
var settings={};
var debug_chat_scrolling=false;
var followbetqueue=[]
var followbetpara=[]
var followbetstat=[0]
var betbotstat=[0,0,0]
var watchuserarray=[0]; //只觀看用戶，輸入[0]觀看全部，或 [381,123] 看 381和123ID的赌注
var minbetsize=0.01 //最少賭注
var nodeslim=400 //节点限制
var lastdata
var chartingdata=[];
var graphactivated=1;
chartingdata[0]=[];chartingdata[1]=[];chartingdata[2]=[];chartingdata[3]=[];chartingdata[4]=[];chartingdata[5]=[];
var lastdata
//[盈利,上注輸贏]
var betbotpara=[]
var betbotactive=0
var followbotactive=0
function global_bindings_enabled(){
    if($.fancybox.isOpen){
        msg("Keyboard shortcuts are disabled while a dialog box is open.");
        return false
    }
    if(!($('#manual').hasClass('active')&&($('#all').hasClass('active')||$('#me').hasClass('active')))){
        msg("Keyboard shortcuts are only active in manual tab with all or my bet tab opened");
        return false
    }
    clear_msg();
    return true
}
var seed_length=24;
var max_name_length=15;
var results_to_keep=100;
var luck_precision=2;
var ga_fields=["login","withdraw","invest","divest","share","play"];
function GetRandomNum(Min,Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
};

$(document).ready(function(){
    var VPN = GetRandomNum(1,3);


    //    if (VPN == 3){

    // socket=io.connect("http://115.29.171.112:9908/");
    //       };

    //    if (VPN == 2){

    // socket=io.connect("http://199.188.108.136:9908/");
    //       };

    //    if (VPN == 1){

    // socket=io.connect("http://142.4.118.152:9908/");
    //       };

    socket=io.connect("https://doge.btcdice.com:80/", {});
    console.log(socket)
    // socket=io.connect(null,{
    //     secure:true
    // })
});
var fixup_timeout;
function fixup(){
    MakeSound("click");
    $('#a_hi,#a_lo').removeClass('waitingz');
    if($('#pct_bet').val()>parseFloat($('#pct_balance').text())){msg(GetLang(559));$('#a_hi,#a_lo').addClass('waitingz')
    }
    if($('#pct_profit').val()>parseFloat($('#max_profit').text())){msg(GetLang(561));$('#a_hi,#a_lo').addClass('waitingz')
    }
    return;
    if(fixup_timeout)clearTimeout(fixup_timeout);
    fixup_timeout=setTimeout(function(){
            var prefix="pct";
            var bet_o=find_object(prefix,"bet");
            var bet=get_float_string(prefix,"bet",bet_o);
            if(bet!==false){
                bet=bet.replace(/^0*([1-9])/,"$1");
                bet=bet.replace(/([.][0-9]*[1-9])0*/,"$1");
                bet=bet.replace(/([0-9])[.]0*$/,"$1");
                bet=bet.replace(/^[.]/,"0.");
                bet_o.val(bet)
            }
            changed_chance("pct");
            changed_bet("pct")
        }
        ,fixup_delay)
}
function commaify(num){
    if(typeof num!="string"){
        return num
    }
    var num2;
    num=num.replace(/^([0-9]+)([0-9]{3})$/,"$1,$2");
    while(true){
        num2=num.replace(/([0-9])([0-9]{3}[,.])/,"$1,$2");
        if(num==num2)break;
        num=num2
    }
    return num
}
function clear_msg(){
    $("#msg").html("");
}
setInterval('$("#msg").html("");',5000)

function msg(txt){
    if(txt==''||txt==' '){return false;}
    $("#msg").html(txt)
}
function find_object(prefix,id){
    return $("#"+prefix+"_"+id)
}
function validate(){
    return $(".invalid").length===0
}
function set_invalid(obj,state){
    //console.log('invalid', arguments);
    if(state){
        obj.addClass("invalid");
        $(".play").addClass("invalid")
    }
    else{
        obj.removeClass("invalid");
        //TODO 以前bug
        //if($(".invalid").length==2)
        $(".play").removeClass("invalid")
    }

}
function get_waiting(){
    return $("#a_hi.waiting").length>0
}
var waiting_timeout;
function set_waiting(which){
    if(which===false){
        clearTimeout(waiting_timeout);
        $(".play").removeClass("waiting");
        $(".play").removeClass("inactive")
    }
    else{
        waiting_timeout=setTimeout(function(){

                msg(GetLang(560))

                // window.document.location = '/index';
                $(".play").removeClass("waiting");
                $(".play").removeClass("inactive")
            }
            ,bet_wait_timeout);
        $(".play").addClass("waiting");
        if(which=="hi")$("#a_lo").addClass("inactive");
        else $("#a_hi").addClass("inactive")
    }

}
function send_bet(which){
    if(!validate())return;
    if(fixup_timeout)clearTimeout(fixup_timeout);
    set_waiting(which);
    var chance=$("#pct_chance").val();
    var bet=$("#pct_bet").val();
    //console.log(which)
    socket.emit("bet",csrf,{
        chance:chance,bet:tidy(bet),which:which
    })
    MakeSound("dice");
}
function round_down(num){
    return Math.floor(num*1e8+1e-6)/1e8
}
function format_chance(chance){
    chance=chance.toFixed(0);
    chance="00000".substring(0,6-chance.length)+chance;
    return chance.substring(0,2)+"."+chance.substring(2,4)+" "+chance.substring(4,6)
}
function maybe_update_targets(){
    var chance=$("#pct_chance");
    if(chance.val().match(/^ *$/)||chance.hasClass("invalid")){
        $("#hi").html("");
        $("#lo").html("")
    }
    else update_targets(chance.val())
}
function update_targets(chance){
    var chance=parseFloat(chance)*1e4;
    $("#hi").html("> "+format_chance(999999-chance));
    $("#lo").html("< "+format_chance(chance))
}
function set_chance(chance){
    $("#pct_chance").val(chance);
    update_targets(chance)
}
function clicked_chance_min(){
    set_chance("0.0001");
    clear_msg();
    changed_chance("pct");
    fixup();
    return false
}
function clicked_chance_minus(){
    var val=$("#pct_chance").val()-1;
    if(isNaN(val)||val<1e-4)val=1e-4;
    set_chance(val);
    clear_msg();
    changed_chance("pct");
    fixup()
}
function clicked_chance_half(){
    var val=$("#pct_chance").val()/2;
    if(isNaN(val)||val<1e-4)val=1e-4;
    set_chance(val);
    clear_msg();
    changed_chance("pct");
    fixup()
}
function clicked_chance_double(){
    var val=parseFloat($("#pct_chance").val())*2;
    var edge=find_object("pct","edge").val();
    var max_chance=100-2*edge;
    if(isNaN(val)||val>max_chance)val=max_chance;
    set_chance(val);
    clear_msg();
    changed_chance("pct");
    fixup()
}
function clicked_chance_plus(){
    var val=parseFloat($("#pct_chance").val())+1;
    if(val==1.0001)val=1;
    var edge=find_object("pct","edge").val();
    var max_chance=100-2*edge;
    if(isNaN(val)||val>max_chance)val=max_chance;
    set_chance(val);
    clear_msg();
    changed_chance("pct");
    fixup()
}
function clicked_chance_max(){
    var edge=find_object("pct","edge").val();
    var max_chance=100-2*edge;
    set_chance(max_chance);
    clear_msg();
    changed_chance("pct");
    fixup()
}
function clicked_chance_toggle(){
    $(".button_inner_group#chance").toggle()
}
function clicked_bet_toggle(){
    $(".button_inner_group#bet").toggle()
}
function clicked_action_toggle(){
    $(".button_inner_group#action").toggle()
}
function clicked_login(){
    socket.emit("login",csrf,$("#myuser").val(),$("#mypass").val(),$("#mycode").val())
}
function clicked_logout(){
    // $.cookie("btc_dice_com",null,{
    //     path:"/"
    // });
    document.location="/user/logout";
}
function clicked_bet_min(){
    $("#pct_bet").val(config.bet.minimal.toFixed(8));
    changed_bet("pct");
    if($("#pct_profit").val()===0){
        $("#pct_profit").val(config.bet.minimal.toFixed(8));
        changed_profit("pct")
    }
    fixup()
}
function clicked_bet_half(){
    $("#pct_bet").val(tidy($("#pct_bet").val()/2));
    changed_bet("pct");
    fixup()
}
function clicked_bet_double(){
    var bet=$("#pct_bet").val()*2;
    var bal=parseFloat($("#pct_balance").text());
    if(bet>bal)bet=bal;$('#msg').text(GetLang(559))
    $("#pct_bet").val(tidy(bet));
    changed_bet("pct");
    fixup()
}
function clicked_bet_max(){
    var max=parseFloat($("#max_profit").html());
    $("#pct_profit").val(max);
    changed_profit("pct");
    var bet=parseFloat($("#pct_bet").val());
    var bal=parseFloat($("#pct_balance").text());
    if(bet>bal){
        $("#pct_bet").val(tidy(bal));
        clear_msg()
    }
    changed_bet("pct")

    alert(GetLang(558));

}
function clicked_action_bet_hi(){
    clicked_action_bet("hi")
}
function clicked_action_bet_lo(){
    clicked_action_bet("lo")
}
function clicked_action_bet(which){
    if(get_waiting()){
        msg(GetLang(557));
        return
    }
    send_bet(which)
}
function clicked_action_deposit(){
    socket.emit("deposit",csrf)
}
function need_ga(action){
    if(!google_auth.active)return false;
    return google_auth.flags[action]
}
function send_withdraw_request(address,amount,code){
    var num = parseFloat(amount.val());
    if (num && num>0)
        socket.emit("withdraw",csrf,address.val(),amount.val(),code.val());
    else
        form_error(GetLang(556));
}
function clicked_action_withdraw(){
    var wdaddr = withdraw_address? withdraw_address: "";
    var msg=fee==0?"":'<p>'+GetLang(554)+': <span id="wd_bal" /> '+_gConfig.coinunit +'.</p><p>'+GetLang(555)+':'+fee+" " + _gConfig.coinunit ;
    var auth="";
    if(need_ga("withdraw"))auth='<div class="clear"></div>'+'<div class="fleft">Google Auth</div>'+'<div class="fleft input_ok_input"><input id="ga_code"></div>';
    $.fancybox("<div class='withdraw'>"+"<h1>"+_gConfig.cointype +GetLang(156)+"</h1>"+'<div class="fleft">'+GetLang(156)+'：</div>'
        +'<div class="input_ok_input"><input id="wd_address" value="'
        +wdaddr+'" size="40"></div>'
        +'<div class="fleft input_ok_button" style="height:20px;width:65px;"><button id="wd_button">'+GetLang(18)+'</button></div>'
        +'<div class="clear"></div>'+'<div class="fleft">'+GetLang(157)+'：</div>'
        +'<div class="input_ok_input"><input id="wd_amount" size="40"></div>'
        +auth+'<div class="clear"></div>'
        +'<div id="form_error" style="color:red;"></div>'
        +'<div>'+msg+"</div>"
        +"</div>",{
        helpers:{
            overlay:{
                closeClick:true,css:{
                    background:overlaycolor
                }

            }

        }

    });
    var address=$("#wd_address");
    var amount=$("#wd_amount");
    var button=$("#wd_button");
    var code=$("#ga_code");
    $("#wd_bal").html($("#pct_balance").text());
    if(need_ga("withdraw"))code.keypress(function(e){
        if(e.which==13)send_withdraw_request(address,amount,code)
    });
    address.keypress(function(e){
        form_error('');
        if(e.which==13)send_withdraw_request(address,amount,code)
    });
    amount.keypress(function(e){
        form_error('');
        if(e.which==13)send_withdraw_request(address,amount,code)
    });
    button.click(function(e){
        send_withdraw_request(address,amount,code)
    })
}
function clicked_action_random(){
    socket.emit("random",csrf)
}
function clicked_action_invest(html){
    socket.emit("invest_box",csrf)
}
function clicked_action_name(){
    $.fancybox("<div>"
        +"<h2>"+GetLang(159)+"</h2>"
        +"<p>"+GetLang(160)+"</p>"
        +'<div class="input_ok">'
        +'<div class="input_ok_input"><input class="name_input" value="'+nick+'" size="'+max_name_length+'" maxlength="'+max_name_length+'"></div>'
        +'<div class="fleft indent"><button class="name_button">'+GetLang(169)+'</button></div>'
        +'<div class="clear"></div>'
        +"</div>"
        +"</div>");
    //handle_name_input($(".name_input"));
    $(".name_button").click(function(e){
        socket.emit("name",csrf,$(".name_input").val());
        $.fancybox.close()
    })
}
function handle_name_input(obj){
    var emit_name_timeout;
    obj.select().keyup(function(e){
        var tmp=obj.val();
        if(tmp!==""){
            clearTimeout(emit_name_timeout);
            nick=tmp;
            $("#nick").html(quote_html(nick));
            $("#nickhdr").html(quote_html(nick));
            emit_name_timeout=setTimeout(function(){
                    socket.emit("name",csrf,nick)
                }
                ,1e3);
            if(e.which==13)$.fancybox.close()
        }

    })
}
var uid;
function mono(h,id){
    return'<div id="'+id+'" class="monospace">'+h+"</div>"
}
function random_number(length){
    var ret="";
    for(var i=0;
        i<length;
        i++){
        var r=Math.floor(Math.random()*10);
        ret+="0123456789".substring(r,r+1)
    }
    return ret
}
function update_my_stats(bets,wins,losses,luck,wagered,profit){
    $(".bets").html(commaify(bets));
    $("#luck").html(luck);
    $(".wagered").html(commaify(wagered));
    $(".myprofit").html(commaify(profit));
    if(wins!==null){
        $("#wins,#wins2").html(commaify(wins));
        $("#losses,#losses2").html(commaify(losses))
    }

}
function update_settings(s){
    settings=s;
    for(var setting in s)$("#"+setting).val(s[setting])
}
function update_site_stats(site){
    $(".sbets").html(commaify(site.bets.toString()));
    $("#swins").html(commaify(site.wins.toString()));
    $("#slosses").html(commaify(site.losses.toString()));
    $("#sluck").html((site.bets==0?100:site.luck*100/site.bets).toFixed(luck_precision)+"%");
    $(".swagered").html(commaify(site.wagered.toFixed(8)));
    $(".sprofitraw").html(commaify((-site.profit).toFixed(8)));
    $(".sprofitpct").html((-site.profit*100/(site.wagered===0?1:site.wagered)).toFixed(4)+"%");
    if(site.profit>0){
        $(".sprofit_label").html("庄家亏损:");
        $(".sprofit").html(commaify(site.profit.toFixed(8)))
    }
    else{
        $(".sprofit_label").html("庄家获利:");
        $(".sprofit").html(commaify((-site.profit).toFixed(8)))
    }

}
function quote_html(html){
    return $(".tmpbuffer").text(html).html()
}
function update_investment(i,p,pft, max_invest_in){
    if (typeof i === 'number')
        $(".investment").html(commaify((investment=i).toFixed(8)));
    if (typeof p === 'number')
        $(".invest_pct").html(commaify((invest_pct=p).toFixed(6)+"%"));
    if (typeof pft === 'number')
        $(".invest_pft").html(commaify(pft.toFixed(8)));
    if(typeof max_invest_in === 'number')
        $("#max_invest_in").html(commaify(max_invest_in.toFixed(8)));
}
function init(){
    chatscroll=$(".chatscroll"),chatlog=$(".chatlog");
    var chattab=$('ul.tabs > li > a[href="#chat"]'),chatinput=$(".chatinput"),chatscroll_height=chatscroll.height(),scroll_on_chat=true,scroll_on_chat_timeout;
    $("ul.tabs").each(function(){
        var active;
        var content;
        var links=$(this).find("a");
        active=$(links[0]);
        active.addClass("active");
        current_tab=active.attr("href");
        content=$(current_tab);
        links.not(active).each(function(){
            $($(this).attr("href")).hide()
        });
        $(this).on("click","a",function(e){
            active.removeClass("active");
            content.hide();
            active=$(this);
            active.addClass("active");
            current_tab=active.attr("href");
            content=$(current_tab);
            content.show();
            if(current_tab=="#chat"||current_tab=="#account"){
                if(current_tab=="#chat"){
                    if(scroll_on_chat)scroll_to_bottom_of_chat();
                    chatinput.focus();
                    chattab.removeClass("attention")
                }
                $(".key").animate({
                    opacity:.25
                })
            }
            else $(".key").animate({
                opacity:1
            });
            e.preventDefault()
        })
    });
    socket.on("version",function(version){
        $.fancybox('<div class="panel">'+"<p>A new version of the site is available.</p>"+"<p>Reloading in <span id=countdown>10 seconds</span>.</p>"+'<button id="doit">Reload Now</button>'+"</div>",{
            keys:{
                close:[]
            }
            ,closeBtn:false,helpers:{
                overlay:{
                    closeClick:false,css:{
                        background:overlaycolor
                    }

                }

            }

        });
        var count=10;
        var interval=setInterval(function(){
                count--;
                $("#countdown").html(count==1?count+" second":count+" seconds");
                if(count==0){
                    clearInterval(interval);
                    document.location="."
                }

            }
            ,1e3);
        $("#doit").click(function(e){
            document.location="."
        })
    });
    socket.on("welcome",function(name,html){
        nick=name;
        $.fancybox(html,{
            keys:{
                close:[]
            }
            ,helpers:{
                overlay:{
                    closeClick:false,css:{
                        background:overlaycolor
                    }

                }

            }

        });
        var name_o=$("#welcome_name");
        name_o.attr("value",nick);
        name_o.attr("size",max_name_length);
        name_o.attr("maxlength",max_name_length);
        handle_name_input(name_o);
        $(".name_button").click(function(e){
            $.fancybox.close()
        })
    });
    socket.on("dismiss",function(){
        $.fancybox.close()
    });
    socket.on("invest_box",function(html){
        var invest_ga=need_ga("invest");
        var divest_ga=need_ga("divest");
        $.fancybox(html,{
            helpers:{
                overlay:{
                    closeClick:true,css:{
                        background:overlaycolor
                    }

                }

            }

        });
        if(!invest_ga)$("#invest_auth").hide();
        if(!divest_ga)$("#divest_auth").hide();
        $("#inv_balance").html($("#pct_balance").text());
        var invest_code=$("#invest_code");
        var divest_code=$("#divest_code");
        $("#invest_input").focus();
        update_investment(investment,invest_pct,null);
        var invest_input=$("#invest_input"),divest_input=$("#divest_input");
        invest_input.add(invest_code).keypress(function(e){
            if(e.which==13)socket.emit("invest",csrf,invest_input.val(),invest_code.val())
        });
        divest_input.add(divest_code).keypress(function(e){
            if(e.which==13)socket.emit("divest",csrf,divest_input.val(),divest_code.val())
        });
        $("#invest_button").click(function(e){
            socket.emit("invest",csrf,invest_input.val(),invest_code.val())
        });
        $("#divest_button").click(function(e){
            socket.emit("divest",csrf,divest_input.val(),divest_code.val())
        });
        $("#invest_all").click(function(e){
            socket.emit("invest",csrf,"all",invest_code.val())
        });
        $("#divest_all").click(function(e){
            socket.emit("divest",csrf,"all",divest_code.val())
        })
    });
    socket.on("invest",function(i,p,pft,max_invest_in){
        investment=i;
        invest_pct=p;
        update_investment(investment,invest_pct,pft,max_invest_in)
    });
    socket.on("invest_error",function(msg){
        $("#invest_error").html(msg)
        $("#msg").html(msg);
    });
    socket.on("divest_error",function(msg){
        $("#divest_error").html(msg);
        $("#msg").html(msg);
    });
    socket.on("setup_account",function(html){
        $("#login").html(html);
        $("#change_password").click(show_change_password)
    });
    $(".chatbutton").click(function(e){
        chatinput.focus();
        return send_chat(chatinput)
    });
    chatscroll.scroll(function(){
        var chatscroll_offset_top=chatscroll.offset().top,chatlog_outerheight=chatlog.outerHeight()-2;
        if(Math.ceil(chatscroll_height-chatlog.offset().top+chatscroll_offset_top)>chatlog_outerheight){
            if(debug_chat_scrolling)chatscroll.css({
                background:"white"
            });
            clearTimeout(scroll_on_chat_timeout);
            scroll_on_chat=true
        }
        else{
            scroll_on_chat=false;
            if(debug_chat_scrolling)chatscroll.css({
                background:"cyan"
            });
            clearTimeout(scroll_on_chat_timeout);
            scroll_on_chat_timeout=setTimeout(function(){
                    if(debug_chat_scrolling)chatscroll.css({
                        background:"yellow"
                    });
                    scroll_on_chat=true
                }
                ,chat_scroll_freeze_time*1e3)
        }

    });
    socket.on("chat",function(txt,date){
        if(current_tab!="#chat")chattab.addClass("attention");
        add_chat(date,txt);
        if(true)scroll_to_bottom_of_chat()
    });
    socket.on("reload",function(){
        document.location="/index"
    });
    socket.on("set_hash",function(hash){
        var expires=new Date;
        expires.setYear(expires.getFullYear()+50);
        $.cookie("hash",hash,{
            path:"/",expires:expires
        })
    });
    var seen_init=false,seen_results=false;
    socket.on("init",function(data){
        if(seen_init)return;
        seen_init=true;
        csrf=data.csrf;
        uid=data.uid;
        $("#uid").html(uid);
        $("#nick").html(quote_html(nick=data.name));

        up_othe_value(data);
        //move from up_other_value();
        $("#user_balance").html(data.balance);
        $("#user_balance_unrecognized").html(data.user_balance_unrecognized);
        $("#user_balance_wait").html(data.user_balance_wait);

        withdraw_address=data.wdaddr;
        fee=data.fee;
        update_my_stats(data.bets,data.wins,data.losses,data.luck,data.wagered,data.profit);
        update_site_stats(data.stats);
        update_settings(data.settings);
        $("#api_num").html(data.api);
        $("#max_profit").html(data.max_profit);
        $(".bankroll").html(commaify(data.bankroll));
        $("#pct_balance").text(data.balance);				if(parseFloat(data.balance)==0){$('#baldepbtn').show()}else{$('#baldepbtn').hide()}

        set_chance(tidy(data.chance));
        $("#pct_bet").val(tidy(data.bet));
        $("#pct_edge").val(data.edge);
        $("#pct_edge").html(data.edge+"%");
        $("#shash").html(data.shash);
        $("#nonce").html(data.nonce);
        $("#seed").html(data.seed);
        $("#login").html(data.login);
        if(data.username){
            $("#change_password").click(show_change_password)
        }
        else{
            $("#setup_account").click(function(){
                $.box("<div class='setup_account'>"+"<h1>Set Username and Password</h1>"+'<div class="fleft w200 aright rpad">Username</div> '+'<div class="input_ok_input"><input size=40 id="username"></div>'+'<div class="clear"></div>'+'<div class="fleft w200 aright rpad">Password</div>'+'<div class="input_ok_input"><input type="password" size=40 id="password1"></div>'+'<div class="clear"></div>'+'<div class="fleft w200 aright rpad">Repeat Password</div>'+'<div class="input_ok_input"><input type="password" size=40 id="password2"></div>'+'<div class="clear"></div>'+'<div class="fright input_ok_button"><button id="setup_button">OK</button></div>'+'<div class="clear"></div>'+'<div id="form_error"></div>'+"</div>",{
                    helpers:{
                        overlay:{
                            closeClick:true,css:{
                                background:overlaycolor
                            }

                        }

                    }

                });
                var username=$("#username").focus();
                var password1=$("#password1");
                var password2=$("#password2");
                var button=$("#setup_button");
                username.add(password1).add(password2).keypress(function(e){
                    form_error("");
                    if(e.which==13)setup_account(username.val(),password1.val(),password2.val())
                });
                button.click(function(){
                    setup_account(username.val(),password1.val(),password2.val())
                })
            })
        }
        update_investment(data.investment,data.percent,data.invest_pft);
        var prefix="pct";
        get_float_string(prefix,"bet",find_object(prefix,"bet"));
        changed_chance("pct");
        while(data.chat.length){
            var c=JSON.parse(data.chat.shift());
            add_chat(new Date(parseInt(data.chat.shift())),"("+c.user+") <"+c.name.replace(/>/g,"]").replace(/</g,"[")+"> "+c.txt)
        }
        scroll_to_bottom_of_chat();
        set_google_auth_status(data.ga);
        $("#ga_edit").click(function(){
            socket.emit("edit_ga",csrf)
        });
        var history_types=["deposit","withdraw","invest","commission"];
        for(var i in history_types)bind_history(history_types[i])
    });
    socket.on("history",function(type,fields){
        var report='<table class="hist_table"><tr>';
        report+="<th>id</th>";
        report+="<th>when</th>";
        var date,data;
        switch(type){
            case"commission":report+="<th>profit</th>";
                report+="<th>commission</th>";
                report+="<th>reason</th>";
                break;
            case"deposit":report+="<th>amount</th>";
                report+="<th>note</th>";
                break;
            case"invest":report+="<th>what</th>";
                report+="<th>commission</th>";
                report+="<th>% of site</th>";
                report+="<th>principal</th>";
                report+="<th>investment</th>";
                report+="<th>base</th>";
                break;
            case"withdraw":report+="<th>amount</th>";
                report+="<th>address</th>";
                report+="<th>txid</th>";
                break;
            default:return
        }
        report+="</tr>";
        while(true){
            if((data=fields.shift())===undefined)break;
            date=moment(parseInt(data.date)).format(type=="invest"?"YY-MM-DD<br/>HH:mm":"YY-MM-DD HH:mm");
            report+="<tr><td>"+data.eid+"</td><td>"+date+"</td>";
            switch(type){
                case"commission":report+="<td>profit</td>";
                    report+="<td>commission</td>";
                    report+="<td>reason</td>";
                    break;
                case"deposit":report+="<td>"+data.amount.toFixed(8)+"</td>";
                    report+="<td>"+(data.note?data.note:"")+"</td>";
                    break;
                case"invest":report+="<td>"+(data.amount==0?"end-of-period<br/>commission":data.amount>0?"invest "+data.amount.toFixed(8):"divest "+(-data.amount).toFixed(8))+"</td>";
                    report+="<td>"+data.commission.toFixed(8)+"</td>";
                    var from=(data.share_old*100).toFixed(2);
                    var to=(data.share_new*100).toFixed(2);
                    if(from==to)report+="<td>"+to+"</td>";
                    else report+="<td>from "+from+"<br/>to "+to+"</td>";
                    from=data.prin_old.toFixed(8);
                    to=data.prin_new.toFixed(8);
                    if(from==to)report+="<td>"+to+"</td>";
                    else report+="<td>from "+from+"<br/>to "+to+"</td>";
                    from=data.investment_old.toFixed(8);
                    to=data.investment_new.toFixed(8);
                    if(from==to)report+="<td>"+to+"</td>";
                    else report+="<td>from "+from+"<br/>to "+to+"</td>";
                    from=data.base_old.toFixed(8);
                    to=data.base_new.toFixed(8);
                    if(from==to)report+="<td>"+to+"</td>";
                    else report+="<td>from "+from+"<br/>to "+to+"</td>";
                    break;
                case"withdraw":report+="<td>"+data.amount+"</td>";
                    report+="<td>"+data.address+"</td>";
                    if(data.txid)report+='<td><a href="http://blockchain.info/tx/'+data.txid+'" target="_blank">'+data.txid.substring(0,20)+"...</a></td>";
                    else report+="<td></td>";
                    break
            }
            report+="</tr>"
        }
        report+="</table>";
        $("#hist_report").html(report)
    });
    socket.on("setup_ga",function(ga){
        $.fancybox('<div class="setup_ga">'
            +"<h1>"+GetLang(163)+"</h1>"
            +'<div class="fleft">'
            +'<img id="qr" border="0" src="'+ga.qrcode+'"/><div class="secret">'+ga.secret+"</div>"
            +"</div>"
            +'<div class="fleft" id="desc">'
            +'<p>'+GetLang(164)+'</p>'
            +'<p>'+GetLang(165)+'</p>'

            +'<div class="input_ok_input"><input id="ga_code"></div>'
            +'<div class="fleft input_ok_button"><button id="ga_button">'+GetLang(169)+'</button></div>'
            +"</div>"
            +'<div class="clear"></div>'
            +'<div class="gap"></div>'
            +'<div class="important">'+GetLang(166)+'</div>'
            +'<div id="form_error"></div>'
            +"</div>");
        var code=$("#ga_code");
        var button=$("#ga_button");
        code.focus();
        code.keypress(function(e){
            if(e.which==13)socket.emit("setup_ga_code",csrf,code.val())
        });
        button.click(function(e){
            socket.emit("setup_ga_code",csrf,code.val())
        })
    });
    socket.on("edit_ga",function(ga){
        edit_ga(ga)
    });
    socket.on("ga_info",function(ga){
        set_google_auth_status(ga)
    });
    socket.on("ga_code_ok",function(ga){
        $.fancybox.close();
        edit_ga(ga)
    });
    socket.on("ga_code_done",function(){
        $.fancybox.close()
    });
    socket.on("wdaddr",function(wdaddr){
        withdraw_address=wdaddr
    });
    socket.on("balance_on",function(data){
        $("#pct_balance").text(data);				if(parseFloat(data)==0){$('#baldepbtn').show()}else{$('#baldepbtn').hide()}

        $("#user_balance").html(data);
        $("#inv_balance").add("#wd_bal").html(data);
        var prefix="pct";
        get_float_string(prefix,"bet",find_object(prefix,"bet"))
    });
    socket.on("balance",function(data){
        $("#pct_balance").text(data.balance);				if(parseFloat(data.balance)==0){$('#baldepbtn').show()}else{$('#baldepbtn').hide()}

        $("#user_balance").html(data.balance);
        $("#user_balance_unrecognized").html(data.user_balance_unrecognized);
        $("#user_balance_wait").html(data.user_balance_wait);
        $("#inv_balance").add("#wd_bal").html(data.balance);
        var prefix="pct";
        get_float_string(prefix,"bet",find_object(prefix,"bet"))
    });
    socket.on("details",function(html){
        if(ifwebkit()){
            $.fancybox(html,{
                helpers:{
                    overlay:{
                        closeClick:true,css:{
                            background:"rgba(0, 0, 0, 0)"
                        }

                    }

                }

            })
        }else{
            $.fancybox(html,{
                helpers:{
                    overlay:{
                        closeClick:true,css:{
                            background:overlaycolor
                        }

                    }

                }

            })
        }

    });
    socket.on("max_profit",function(max_profit,bankroll){
        $("#max_profit").html(max_profit);
        $(".bankroll").html(commaify(bankroll));
        var prefix="pct";
        var profit_o=find_object(prefix,"profit");
        var profit=get_float_string(prefix,"profit",profit_o)
    });
    socket.on("shash",function(data){
        $("#shash").html(data)
    });
    socket.on("seed",function(data){
        $("#seed").html(data)
    });
    socket.on("bad_seed",function(data){
        $.fancybox.close();
        msg("You have already made "+data+" bet(s) since you last clicked 'randomize' so can't change client seed until you re-randomize,")
    });
    socket.on("nonce",function(data){
        $("#nonce").html(data)
    });
    socket.on("address",function(address,img,confs){
        $.fancybox('<div class="deposit">'+"<h1>充值比特币（BTC）</h1>"+'<div class="fleft">'+'<a target=_blank href="' + img + '"></a>'+"</div>"+'<div class="fleft" id="desc">'+"<p>充值比特币, 请发送到以下收款地址：</p>"+'<p class="address">'+address+"</p>"+"<p>"+confs+"</p>"+"<p>每个用户充值的收款地址都是唯一的，请牢记以上收款地址。</p>"+"</div>"+'<div class="clear">'+"</div>"+"</div>",{
            helpers:{
                overlay:{
                    closeClick:true,css:{
                        background:overlaycolor
                    }

                }

            }

        })
    });
    socket.on("new_client_seed",function(old_secret,old_shash,old_seed,old_nonce,shash){
        var random_seed=random_number(seed_length);
        $.fancybox("<div>"+"<h2>换手气</h2>"
            +"<p>"+GetLang(167)+"</p>"+mono(old_secret,"old_sseed")+'<br><p></p><p></p>'
            +"<p>"+GetLang(168)+"</p>"+mono(old_shash,"old_shash")+'<br><p></p><p></p>'
            +"<p>"+GetLang(170)+"</p>"+mono(old_seed,"old_cseed")+'<br><p></p><p></p>'
            +"<p>"+GetLang(171)+"</p>"+mono(old_nonce,"old_nonce")+'<br><p></p><p></p>'
            +"<p>"+GetLang(172)+"</p>"+'<textarea rows=3 cols=66 class="allcodes" onclick="this.select();">"'+old_secret+'" "'+old_shash+'" "'+old_seed+'" "'+old_nonce+'"</textarea>'
            +"<p>"+GetLang(173)+"</p>"+mono(shash,"new_shash")
            +'<p class="important">'+GetLang(175)+ '：</p>'+'<div class="input_ok">'+'<div class="input_ok_input"><input id="new_cseed" class="seed_input" size="'+seed_length+'" maxlength="'+seed_length+'" value="'+random_seed+'"></div>'+'<div class="fleft indent"><button class="seed_button">'
            +GetLang(169)+'</button></div>'+'<div class="clear"></div>'+"</div>"+'<div class="important" id="form_error"></div>'+"</div>",{
            keys:{
                close:[]
            }
            ,closeBtn:true,helpers:{
                overlay:{
                    closeClick:false,css:{
                        background:overlaycolor
                    }

                }

            }

        });
        var msg="请输入一些随机的数字以保证游戏公平！";
        var seed_o=$(".seed_input");
        var emit_seed_timeout;
        socket.emit("seed",csrf,random_seed,false);
        $(".seed_button").click(function(e){
            if(seed_o.filter(".invalid").length)$("#form_error").html("<p>"+msg+"</p>");
            else{
                clearTimeout(emit_seed_timeout);
                socket.emit("seed",csrf,seed_o.val(),true)
            }

        });
        seed_o.focus().keyup(function(e){
            var seed=seed_o.val();
            if(seed.replace(/[^0-9]/g,"")!=seed||seed==="")seed_o.addClass("invalid");
            else{
                seed_o.removeClass("invalid");
                clearTimeout(emit_seed_timeout);
                emit_seed_timeout=setTimeout(function(){
                        socket.emit("seed",csrf,seed,false)
                    }
                    ,1e3)
            }
            if(e.which==13||e.which==27){
                if(seed_o.filter(".invalid").length)$("#form_error").html("<p>"+msg+"</p>");
                else{
                    clearTimeout(emit_seed_timeout);
                    socket.emit("seed",csrf,seed_o.val(),true)
                }

            }

        })
    });
    socket.on("betinfo",function(data){
        // set_waiting(false);
        msg(data)
    });
    socket.on("jderror",function(data){
        set_waiting(false);
        msg(data)
    });
    socket.on("form_error",function(data){
        form_error(data)
    });
    socket.on("login_error",function(data){
        $("#login_error").html(data)
    });
    socket.on("wins",function(data){
        $("#wins,#wins2").html(commaify(data))
    });
    socket.on("losses",function(data){
        $("#losses,#losses2").html(commaify(data))
    });
    var hi=255;
    var lo=224;
    var on_green="rgba("+lo+", "+hi+", "+lo+", 1)";
    var on_red="rgba("+hi+", "+lo+", "+lo+", 1)";
    var off="transparent";
    var wins=$("#wins");
    var losses=$("#losses");
    wins.css({
        backgroundColor:off
    });
    losses.css({
        backgroundColor:off
    });
    socket.on("result",function(data){
        $(".play").removeClass("waiting");
        $(".play").removeClass("inactive")
        if (data.uid == $("#uid").html()){
            //console.log(data);
            if (data.win){
                //console.log('win');
                MakeSound("win");
            }else
            {
                MakeSound("lose");
            }
        }
        clear_msg();
        var me=data.uid==uid;
        var inuserlist=false
        if($('#watch_player').val()==''||$('#watch_player').val()=='0'){
            inuserlist=true
        }else{
            if(parseInt($('#watch_player').val())==data.uid){
                inuserlist=true
            }else{
                inuserlist=false
            }
        }
        if((parseFloat(data.bet)>=parseFloat($("#gminbet").val())&&inuserlist)||me){add_result(data,me);}
        $("#max_profit").html(data.max_profit);
        $(".bankroll").html(commaify(data.bankroll));
        lastdata=data;
        if(!graphactivated&&scrload>=4){loadgraph();graphactivated=1}
        up_othe_value(data);

        var prefix="pct";
        var profit_o=find_object(prefix,"profit");
        var profit=get_float_string(prefix,"profit",profit_o);
        update_site_stats(data.stats);
        update_investment(data.investment,data.percent,data.invest_pft);

        if(followbotactive&&data.name.indexOf('('+followbetpara[0]+')')!=-1){
            followbetqueue.push(data)
        }

        if(me){
            if(followbotactive){
                followstat(data)
            }
            if(betbotactive){
                processbet(data)
            }
            wins.stop();
            losses.stop();
            if(data.win){
                wins.css({
                    backgroundColor:on_green
                });
                losses.css({
                    backgroundColor:off
                })
            }
            else{
                wins.css({
                    backgroundColor:off
                });
                losses.css({
                    backgroundColor:on_red
                })
            }
            set_waiting(false);
            update_my_stats(data.bets,data.wins,data.losses,data.luck,data.wagered,data.profit,data.stats);

            //move from up_other_value();
            $("#user_balance").html(data.balance);
            $("#user_balance_unrecognized").html(data.user_balance_unrecognized);
            $("#user_balance_wait").html(data.user_balance_wait);

            $("#pct_bet").val(data.bet);
            set_chance(data.chance);
            $("#pct_balance").text(data.balance);				if(parseFloat(data.balance)==0){$('#baldepbtn').show()}else{$('#baldepbtn').hide()}

            $("#inv_balance").add("#wd_bal").html(data.balance);
            $("#nonce").html(data.nonce);
            changed_bet("pct")
        }
        else if(uid<3&&data.this_profit.substring(1)>=10){
            console.log(Date(),"profit",data.this_profit);
            $("#whale").get(0).play()
        }

    });
    socket.on("old_results",function(data){
        if(seen_results)return;
        seen_results=true;
        for(var index in data){
            var result=data[index];
            var me=result.uid==uid;
            if(bet_interesting_p(result.bet,result.this_profit,result.uid,me))add_result(result,me,true)
        }

    });
    handle_events("pct");
    $(".readonly").attr("tabindex","-1").attr("readonly",true);
    if (clicked_chance_min != null ) $("#c_min").click(clicked_chance_min);
    if ( clicked_chance_minus != null ) $("#c_minus").click(clicked_chance_minus);
    if ( clicked_chance_half != null ) $("#c_half").click(clicked_chance_half);
    if ( clicked_chance_double != null ) $("#c_double").click(clicked_chance_double);
    if ( clicked_chance_plus != null ) $("#c_plus").click(clicked_chance_plus);
    if ( clicked_chance_max != null ) $("#c_max").click(clicked_chance_max);
    if ( clicked_chance_toggle != null ) $(".chance_toggle").click(clicked_chance_toggle);
    if (clicked_bet_min != null ) $("#b_min").click(clicked_bet_min);

    if ( clicked_bet_half != null ) $("#b_half").click(clicked_bet_half);
    if ( clicked_bet_double != null ) $("#b_double").click(clicked_bet_double);

    if ( clicked_bet_max != null ) $("#b_max").click(clicked_bet_max);

    if ( clicked_bet_toggle != null ) $(".bet_toggle").click(clicked_bet_toggle);

    if ( clicked_action_bet_lo != null )
    {$("#a_lo").click(clicked_action_bet_lo)}
    else
    {alert("您的账号出现异常，请通知Ray");};
    if ( clicked_action_bet_hi != null ) $("#a_hi").click(clicked_action_bet_hi);

    if ( clicked_action_deposit != null ) $("#a_deposit").click(clicked_action_deposit);
    if ( clicked_action_withdraw != null ) $("#a_withdraw").click(clicked_action_withdraw);
    if ( clicked_action_random != null ) $("#a_random").click(clicked_action_random);
    if ( clicked_action_toggle != null ) $(".action_toggle").click(clicked_action_toggle);
    $("#mypass").val("");
    $("#mycode").val("");
    $("#myuser").val("").add("#mypass").add("#mycode").keypress(function(e){
        if(e.which==13)clicked_login()
    });
    if ( clicked_login != null ) $("#myok").click(clicked_login);
    if ( clicked_logout != null ) $("#logout").click(clicked_logout);
    if ( clicked_logout != null ) $("#logout2").click(clicked_logout);
    if ( clicked_action_name != null ) $("#name").click(clicked_action_name);
    if ( clicked_action_invest != null ) $("#invest_edit").click(clicked_action_invest);
    init_keybindings(chatinput);
    clear_msg()
}
function up_othe_value(data){
    // $("#user_balance").html(data.balance);
    // $("#user_balance_unrecognized").html(data.user_balance_unrecognized);
    // $("#user_balance_wait").html(data.user_balance_wait);

    $("#max_invest").html(commaify(data.max_invest.toFixed(2)));
    $("#max_invest_in").html(commaify(data.max_invest_in.toFixed(8)));

    $("#my_share_number").html(data.my_share_number);
    $("#my_share_number2").html(data.my_share_number);
    $("#all_share_number").html(data.all_share_number);
    $("#all_share_put_number").html(data.all_share_put_number);
    $("#all_share_put_number2").html(data.all_share_put_number);
    $("#share_price").html(data.share_price);

    $("#share_count").html(data.share_count);
    $("#my_share_price").html(data.my_share_price);
}
function bet_interesting_p(bet,profit,uid,me){
    return me||(!settings.min_risk||bet>=settings.min_risk)&&(!settings.min_change||Math.abs(profit)>=settings.min_change)&&(!settings.watch_player||uid==settings.watch_player)
}
function bind_history(type){
    $("#hist_"+type).click(function(){
        socket.emit("history",csrf,type)
    })
}
function form_error(txt){
    $("#form_error").html("<p>"+txt+"</p>")
}
function show_change_password(){
    $.fancybox("<div class='setup_account' style='width: 540px; height: 240px;'>"
        +"<h1>"+GetLang(75)+"</h1>"
        +'<div class="fleft w120 aright rpad">'+GetLang(562)+'：</div> '
        +'<div class="input_ok_input"><input type="password" size=40 id="current"></div>'
        +'<div class="clear"></div><br />'
        +'<div class="fleft w120 aright rpad">'+GetLang(563)+'：</div>'
        +'<div class="input_ok_input"><input type="password" size=40 id="password1"></div>'
        +'<div class="clear"></div><br />'
        +'<div class="fleft w120 aright rpad">'+GetLang(564)+'：</div>'
        +'<div class="input_ok_input"><input type="password" size=40 id="password2"></div>'
        +'<div class="clear"></div><br />'
        +'<div id="form_error"></div>'
        +'<div class="fright input_ok_button"><button id="setup_button">'+GetLang(169)+'</button></div>'
        +'<div class="clear"></div>'
            //+'<div></div>'
        +"</div>",{
        helpers:{
            overlay:{
                closeClick:true,css:{
                    background:overlaycolor
                }

            }

        }

    });
    var current=$("#current").focus();
    var password1=$("#password1");
    var password2=$("#password2");
    var button=$("#setup_button");
    current.add(password1).add(password2).keypress(function(e){
        form_error("");
        if(e.which==13)change_password(current.val(),password1.val(),password2.val())
    });
    button.click(function(){
        change_password(current.val(),password1.val(),password2.val())
    })
}
function change_password(current,password1,password2){
    if(current==""||password1=="")return form_error("请输入有效密码，密码长度在6到16位之间。");
    if(password1!=password2)return form_error("二次密码输入不相同。");
    socket.emit("change_password",csrf,current,password1)
}
function setup_account(username,password1,password2){
    if(username=="")return form_error("Username must not be empty.");
    if(password1==""||password2=="")return form_error("Password must not be empty.");
    if(password1!=password2)return form_error("Passwords aren't the same.");
    socket.emit("setup_account",csrf,username,password1)
}
function edit_ga(ga){
    var flags="";
    for(var i in ga_fields){
        var field=ga_fields[i];
        var flag=ga.flags[field];
        var field_id=field.replace(/ /g,"_");
        if (field == 'login') { field = '登录'; }
        if (field == 'withdraw') { field = '提款'; }
        if (field == 'invest') { field = '投资'; }
        if (field == 'divest') { field = '撤资'; }
        if (field == 'share') { field = '股票'; }
        if (field == 'play') { field = '锁定投注'; }
        flags+='<p><input type="checkbox" id="'+field_id+'_box"'+(flag?' checked="checked"':"")+"> "+field+"</p>"
    }
    $.fancybox('<div class="edit_ga">'
        +'<div class="desc">'+GetLang(163)+'：</div>'
        +'<div class="boxes">'+flags+"</div>"
        +'<div class="desc">请输入6位Google Auth  数字验证码确认是否改变影响范围，如不改变请关闭此页面。<br/><br/></div>'
        +'<div class="input_ok_input"><input id="ga_code"></div>'
        +'<div class="fleft input_ok_button"><button id="ga_button">确认</button></div>'
        +'<div class="clear"></div>'
        +'<div id="form_error"></div>'
        +"</div>");
    var code=$("#ga_code");
    var button=$("#ga_button");
    code.keypress(function(e){
        if(e.which==13)done_edit_ga(code)
    });
    button.click(function(e){
        done_edit_ga(code)
    })
}
function done_edit_ga(code){
    var flags={};
    for(var i in ga_fields){
        var field=ga_fields[i];
        var field_id=field.replace(/ /g,"_");
        flags[field]=$("#"+field_id+"_box").prop("checked")
    }
    socket.emit("done_edit_ga",csrf,code.val(),flags)
}
function set_google_auth_status(ga){
    google_auth=ga;
    var info="";
    var status="开启";
    if(ga.active){
        status="已"+status;
        var enabled=[];
        for(var i in ga.flags)if(ga.flags[i])enabled.push(i);
        if(enabled.length)info="Authentication is required for "+enabled.join(", ")+".";
        else info="Authenication is not required for any activity."
    }else{
        //show_ga_warning();
        status="未"+status;
    }
    // $("#ga_info").html(info);
    $("#ga_status").html(status)
}
function add_chat(date,txt){
    txt=quote_html(txt).replace(/([^0-9a-z#])((?:bet(?:id)?|roll):? |#)([1-9][0-9]{4,8})\b/gi,'$1<a target="_blank" href="/roll/$3">$2$3</a>');
    txt=txt.replace(/(http:\/\/www.btc-dice.com\/roll\/)([1-9][0-9]{0,8})/gi,' <a target="_blank" href="/roll/$2">$2</a> ');
    txt=txt.replace(/bitcoin-talk/gi,"bitcoin-talk (a phishing site, do not visit)");
    txt=txt.replace(/lnputs.io/gi,"Lnputs.io (a phishing site, do not visit)");
    txt=txt.replace(/([^a-zA-Z0-9=?/])(?:(?:https?:\/\/)?blockchain[.]info\/tx\/)?([0-9a-f]{8})([0-9a-f]{56})\b/g,'$1[<a target="_blank" href="http://blockchain.info/tx/$2$3">$2</a>]');
    txt=txt.replace(/([^a-zA-Z0-9=?/])(?:(?:https?:\/\/)?blockchain[.]info\/address\/)?(1[1-9A-HJ-NP-Za-km-z]{7})([1-9A-HJ-NP-Za-km-z]{24,26})\b/g,'$1[<a target="_blank" href="http://blockchain.info/address/$2$3">$2</a>]');
    chatlog.append(moment(date).format("HH:mm:ss")+" "+txt+"<br/>")
}
function scroll_to_bottom_of_chat(){
    chatscroll.stop().animate({
            scrollTop:chatscroll[0].scrollHeight
        }
        ,1e3)
}
function send_chat(chatinput){
    var txt=chatinput.val();
    if(txt=="")scroll_to_bottom_of_chat();
    else{
        socket.emit("chat",csrf,txt);
        chatinput.val("")
    }
    return false
}
function init_keybindings(chatinput){
    chatinput.keypress(function(e){
        if(e.which==13)return send_chat(chatinput)
    });
    var where=$("input").not(".typing").add(document);
    var nothing="abcdefghijklmnopqrstuvwxyz,<[]=-;\\'`/";
    var len=nothing.length;
    var just_return=function(){
        return false
    };
    for(var i=0;
        i<len;
        i++)where.bind("keypress",nothing.substring(i,i+1),just_return);
    function bind_key(key,binding){
        where.bind("keypress",key,function(){
            if(!global_bindings_enabled())return;
            binding();
            return false
        })
    }
    var keybindings={
        a:clicked_chance_min,s:clicked_chance_minus,d:clicked_chance_plus,f:clicked_chance_max,z:clicked_bet_min,x:clicked_bet_half,c:clicked_bet_double,b:clicked_bet_max,h:clicked_action_bet_hi,l:clicked_action_bet_lo,i:clicked_action_deposit,o:clicked_action_withdraw,p:clicked_action_random
    };
    for(var key in keybindings)bind_key(key,keybindings[key]);
    var settings=["min_risk","min_change","roll_delay"];
    for(var i in settings)bind_keys_for_float_input(settings[i]);
    var settings=["watch_player"];
    for(var i in settings)bind_keys_for_int_input(settings[i])
}
var setting_timeouts={};
function bind_keys_for_float_input(setting){
    var obj=$("#"+setting);
    obj.keyup(function(e){
        var value=obj.val();
        value=value.replace(/[^0-9.]/g,"");
        clearTimeout(setting_timeouts[setting]);
        setting_timeouts[setting]=setTimeout(function(){
                socket.emit("setting",csrf,"float",setting,value)
            }
            ,3*1e3);
        settings[setting]=parseFloat(value)
    })
}
function bind_keys_for_int_input(setting){
    var obj=$("#"+setting);
    obj.keyup(function(e){
        var value=obj.val();
        value=value.replace(/[^0-9]/g,"");
        clearTimeout(setting_timeouts[setting]);
        setting_timeouts[setting]=setTimeout(function(){
                socket.emit("setting",csrf,"int",setting,value)
            }
            ,3*1e3);
        settings[setting]=parseInt(value)
    })
}
function format_percentage(p){
    p=p.toFixed(0);
    p="00000"+p;
    p=p.substring(p.length-6);
    var p1=p.substring(0,2);
    var p2=p.substring(2,4);
    var p3=p.substring(4,6);
    return'<span class="s1">'+p1+'.</span><span class="s2">'+p2+'</span><span class="s3">'+p3+"</span>"
}
function invisible(txt){
    return'<div class="skinny">&nbsp;'+txt+": </div>"
}
function formatInt(value){
    var txt = value.toFixed(8);
    var index = txt.length-1;
    while(index>=0){
        if (txt[index]!=='0')
            break;
        index--;
    }
    return txt.substring(0, index+1);
}
function add_result(r,me,all){
    var result="";
    var other=r.high?r.lucky<r.chance*1e4:r.lucky>=(100-r.chance)*1e4;
    var win=r.win?other?"win gold":"win":other?"lose":"lose imp";
    var mine=me?"me ":"";
    var tmp="tmp"+r.betid;
    var compare=r.high?"&gt;":"&lt;";
    var target=r.high?(100-r.chance)*1e4-1:r.chance*1e4;
    result+='<div class="result '+win+" "+mine+'">';
    result+=invisible("user");
    result+='<div class="who">';
    result+=quote_html(r['name']);
    result+="</div>";
    result+=invisible("date");
    result+='<div class="when">';
    result+=moment(r.date.toString(),"X").format("YYYY-MM-DD HH:mm:ss");
    result+="</div>";
    result+=invisible("betid");
    result+='<div class="betid">';
    result+='<a class="'+tmp+'" href="/roll/'+r.betid+'">'+r.betid+"</a>";
    result+="</div>";
    result+=invisible("lucky");
    result+='<div class="lucky">';
    result+=format_percentage(r.lucky);
    result+="</div>";
    result+=invisible("target");
    result+='<div class="chance">';
    result+=compare+format_percentage(target);
    result+="</div>";
    result+=invisible("bet");
    result+='<div class="bet">';
    result+=add_zeroes(formatInt(r.bet));
    result+="</div>";
    result+=invisible("payout");
    result+='<div class="payout">';
    result+=r.payout+"x";
    result+="</div>";
    result+=invisible("profit");
    result+='<div class="profit"><span class="s1">';
    var txtprofit = r.this_profit;
    result+=add_zeroes(txtprofit.substr(0,1) + parseFloat(txtprofit.substr(1)).toFixed(8).replace(/0+$/,''));
    result+="</span></div></div>";
    if(all!==false)add_result_row(".results#all",result,r.betid,tmp);
    if(me)add_result_row(".results#me",result,r.betid,tmp);
    $("."+tmp).removeClass(tmp)
}
function add_zeroes(num){
    if(typeof num=="number")num=num.toString();
    var num2="";
    var matches=num.match(/([+-]?[0-9]*)[.]([0-9]*)/);
    if(matches)num=matches[1]+"."+matches[2];
    else{
        num2=".";
        matches=["",num,""]
    }
    if(matches[2].length!=8)num2+="00000000".substring(matches[2].length);
    return num+(num2?'<span class="zero">'+num2+"</span>":"")
}
function add_result_row(selector,result,betid,tmp){
    $(selector).prepend(result);
    $("."+tmp).off("click").click(function(e){
        click_bet_roll(betid);
        //socket.emit("roll",csrf,betid);
        return false
    });
    if($(selector+" div.result").length>results_to_keep)$(selector+" div.result:last-child").remove()
}
function get_float_string(prefix,name,obj){
    var val=obj.val();
    var fixed=8;
    if(name=="chance")fixed=4;
    var val2=chop_extra_decimals(obj.val(),fixed);
    if(val!=val2){
        val=val2;
        obj.val(val)
    }
    if(!re.test(val)||name!="bet"&&name!="balance"&&name!="profit"&&name!="payout"&&name!="chance"&&re3.test(val)){
        if(re2.test(val)&&name!="bet")set_invalid(obj,false,1449);
        else set_invalid(obj,true, 1450);
        return false
    }
    var ok=true;
    var edge;
    switch(name){
        case"payout":edge=find_object(prefix,"edge").val();
            var min_payout=(100-edge)/(100-2*edge);
            break;
        case"chance":
            if(val<1e-4){
                var min_chance=1e-4;
                msg('minimum chance is <button id="doit">'+min_chance+"%</button> (one in a million chance)");
                $("#doit").click(function(e){
                    set_chance(min_chance);
                    clear_msg();
                    changed_chance(prefix)
                });
                ok=false
            }
            else{
                edge=find_object(prefix,"edge").val();
                var max_chance=100-2*edge;
                if(val>max_chance){
                    if(val>max_chance+1e-6){
                        msg('maximum chance is <button id="doit">'+max_chance+"%</button>");
                        $("#doit").click(function(e){
                            set_chance(max_chance);
                            clear_msg();
                            changed_chance(prefix)
                        });
                        ok=false
                    }
                    else{
                        set_chance(max_chance);
                        clear_msg()
                    }

                }

            }
            break;
        case"bet":if(false&&val<1e-8){
            msg('minimum bet is <button id="doit">0.00001 BTC</button>');
            $("#doit").click(function(e){
                obj.val("0.00001");
                clear_msg();
                changed_bet(prefix)
            });
            ok=false
        }
        else{
            var bal=parseFloat(find_object(prefix,"balance").val());
            if(val>bal){
                $("#doit").click(function(e){
                    obj.val(bal);
                    clear_msg();
                    changed_bet(prefix)
                });
                ok=false
            }

        }
            break;
        case"profit":if(val<1e-8&&parseFloat($("#pct_bet").val())!==0){
            msg('why bet if you can\'t win?  set profit to at least <button id="doit">0.00001 BTC</button>');
            $("#doit").click(function(e){
                obj.val("0.00001");
                clear_msg();
                changed_profit(prefix)
            });
            ok=false
        }
        else if(!check_profit(val))ok=false;
            break
    }
    if(!ok){
        set_invalid(obj,true,1527);
        return val
    }
    set_invalid(obj,false,1530);
    return val
}
function tidy(val){
    var fixed=8;
    if(typeof val=="number")val=val.toFixed(fixed);
    val=val.replace(/([.].*?)0+$/,"$1");
    val=val.replace(/[.]$/,"");
    return val
}
function chop_extra_decimals(val,fixed){
    switch(fixed){
        case 4:val=val.replace(/([.][0-9]{4}).*$/,"$1");
            break;
        case 8:val=val.replace(/([.][0-9]{8}).*$/,"$1");
            break
    }
    return val
}
function changed_bet(prefix){
    var bet_o=find_object(prefix,"bet");
    var bet=get_float_string(prefix,"bet",bet_o);
    if(!bet){
        find_object(prefix,"profit").val("");
        return
    }
    var bet2=chop_extra_decimals(bet,8);
    if(bet!=bet2){
        bet_o.val(bet2);
        bet=bet2
    }
    bet=parseFloat(bet);
    var payout=get_float_string(prefix,"payout",find_object(prefix,"payout"));
    if(!payout){
        find_object(prefix,"profit").val("");
        return
    }
    var ret=round_down(bet*payout);
    var profit=ret-bet;
    var profit_o=find_object(prefix,"profit");
    profit_o.val(tidy(profit));
    check_profit(profit)
}
function check_profit(profit){
    var max=parseFloat($("#max_profit").html());
    var profit_o=find_object("pct","profit");
    if(profit>max+1e-9){
        set_invalid(profit_o,true,1577);
        if(max==0)msg("庄家坐庄金额归零了!<br/>"+'请点击「投资」帮助我们。');
        else{
            msg('目前最大盈利上限是 <button id="doit">'+max.toFixed(2)+" BTC</button> (此数目等於庄家坐庄总金额的百分之一。)");
            $("#doit").click(function(e){
                profit_o.val(max);
                clear_msg();
                changed_profit("pct")
            })
        }
        return false
    }
    set_invalid(profit_o,false,1589);
    return true
}
function changed_profit(prefix){
    var profit_o=find_object(prefix,"profit");
    var profit=get_float_string(prefix,"profit",profit_o);
    if(!profit){
        return
    }
    var profit2=chop_extra_decimals(profit,8);
    if(profit!=profit2){
        profit_o.val(profit2);
        profit=profit2
    }
    profit=parseFloat(profit);
    var payout=get_float_string(prefix,"payout",find_object(prefix,"payout"));
    if(!payout)return;
    var bet=Math.floor(profit/(payout-1)*1e8+1e-6)/1e8;
    if(round_down(bet*(payout-1))==0)bet+=1e-8;
    bet=tidy(bet);
    var bet_o=find_object(prefix,"bet");
    if(bet_o.val()!=bet)bet_o.val(bet)
}
function typed_amount(prefix,this_name,change_name){
    var re=new RegExp("^\\s*([0-9]+[.]?[0-9]*|[0-9]*[.]?[0-9]+)\\s*$");
    var this_obj=find_object(prefix,this_name);
    var change_obj=find_object(prefix,change_name);
    var edge_obj=find_object(prefix,"edge");
    var edge_text=get_float_string(prefix,"edge",edge_obj);
    var this_text=get_float_string(prefix,this_name,this_obj);
    if(!edge_text||!this_text){
        if(edge_text||this_text){
            change_obj.val("");
            get_float_string(prefix,change_name,change_obj)
        }
        changed_bet(prefix);
        return
    }
    var edge=parseFloat(edge_text);
    var this_amount=parseFloat(this_text);
    if(!isFinite(edge)||isNaN(edge)||this_amount<0||!isFinite(this_amount)||isNaN(this_amount)){
        change_obj.var("");
        get_float_string(prefix,change_name,change_obj);
        changed_bet(prefix);
        return
    }
    if(this_amount===0){
        change_obj.val("0");
        get_float_string(prefix,change_name,change_obj);
        changed_bet(prefix);
        return
    }
    var val,fixed;
    if(this_name=="payout"){
        val=(100-edge)/this_amount;
        fixed=4
    }
    else{
        val=(100-edge)/this_amount;
        fixed=8
    }
    val=val.toFixed(fixed);
    val=val.replace(/([.].*?)0+$/,"$1");
    val=val.replace(/[.]$/,"");
    change_obj.val(val);
    get_float_string(prefix,change_name,change_obj);
    changed_bet(prefix)
}
function changed_chance(prefix){
    typed_amount(prefix,"chance","payout");
    return false
}
function changed_payout(prefix){
    typed_amount(prefix,"payout","chance")
}
function handle_events_for_input(prefix,field,fun){
    var input=find_object(prefix,field);
    input.on("cut paste",function(e){
        setTimeout(function(){
                fun(prefix)
            }
            ,10)
    });
    input.keyup(function(e){
        fun(prefix)
    })
}
function handle_events(prefix){
    handle_events_for_input(prefix,"chance",function(p){
        clear_msg();
        changed_chance(p);
        maybe_update_targets();
        fixup()
    });
    handle_events_for_input(prefix,"payout",function(p){
        clear_msg();
        changed_payout(p);
        maybe_update_targets();
        fixup()
    });
    handle_events_for_input(prefix,"bet",function(p){
        clear_msg();
        changed_bet(p);
        fixup()
    });
    handle_events_for_input(prefix,"profit",function(p){
        clear_msg();
        changed_profit(p);
        fixup()
    });
    var button=find_object(prefix,"button");
    button.on("click",function(e){
        alert("you clicked the button")
    })
}
function betlog(data){$('.ctext').prepend(new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+':' + ' - ' +data+'<br>');}
function processfollow(){
//將在隊列的下注
    if(!followbotactive){return false;}
    if(followbetqueue.length==0){return false;}
    var nobetthis=0;
    if(tidy(followbetqueue[0]['bet']*followbetpara[1])<0.00001&&tidy(followbetqueue[0]['bet']*followbetpara[1])!=0){betlog('下注太小，最小下注0.00000001，本次將不會下注。');nobetthis=1}
    if(tidy(followbetqueue[0]['bet']*followbetpara[1])>parseFloat($('#pct_balance').text())){betlog('亲~ 你不够比特币下注了，往上方的储值键按一按吧');betlog('下注器停止');followbotactive=0;return false;}
    if(tidy(followbetqueue[0]['bet']*followbetpara[1])*(0.99/(followbetqueue[0]['chance']/100))>parseFloat($('#max_profit').text())){betlog('下注太高了，最大赢'+$('#max_profit').text()+'BTC，本次將不會下注。');nobetthis=1}
    if(!nobetthis){
        socket.emit("bet",csrf,{
            chance:followbetqueue[0]['chance'],bet:tidy(followbetqueue[0]['bet']*followbetpara[1]),which:(followbetqueue[0]['high'] == 1 ? "hi" : "lo")
        })
        betlog('跟投器下注：'+followbetqueue[0]['chance']+'%, '+tidy(followbetqueue[0]['bet']*followbetpara[1])+'BTC '+(followbetqueue[0]['high'] == 1 ? "押大" : "押小"))
    }
    followbetqueue.shift();
}
function initfollowbot(){
    followbetqueue=[]
    followbetstat=[0,0,0]
    followbotactive=1
    $('#console').removeClass('hide')
    $('#betoptions').addClass('hide')

    betlog('跟投器启动')
}
function followstat(data){
//處理跟投狀態
    followbetstat[0]=followbetstat[0]+parseFloat(data['this_profit'])
    console.log(followbetstat[0])
    if(data['win']){
        followbetstat[1]++
    }else{
        followbetstat[2]++
    }
    betlog('跟投器下注结果 @'+data['chance']+'%, '+tidy(data['bet'])+config.coinunit+' '+(data['high'] == 1 ? "押大" : "押小")+'. 结果幸运数：'+(data['lucky']/10000)+' ('+(data['win']==1 ? '赢' : '输' )+'), 利润：'+data['this_profit']+config.coinunit+' ')

    if(followbetstat[0]>followbetpara[2]){
        followbotactive=0;betlog('跟投器终止，以达到止赚')
    }
    if(followbetstat[0]<(followbetpara[3]*-1)){
        followbotactive=0;betlog('跟投器终止，以达到止蚀')
    }
}

function initbot(){

    betbotstat=[0,0,0,0,0,0]
//[盈利,輸，贏，上注輸贏，最大連輸，最大連贏]

    betbotactive=1
    processbet()
    $('#console').removeClass('hide')
    $('#betoptions').addClass('hide')
    betlog('投注器启动')

}
function stopallbot(a){
    logbotdata()
    clearTimeout(awaitingbet)
    betbotactive=0
    followbotactive=0
    if(a){
        $('#console').addClass('hide')
        $('#betoptions').removeClass('hide')
    }
}
function logbotdata(){
    if(betbotactive){
        betlog('贏：'+betbotstat[1]+' · 輸：'+betbotstat[2]+ ' · 現在連贏/輸(負數)：'+betbotstat[3]+ ' · 最大連贏：'+betbotstat[4]+ ' · 最大連輸：'+betbotstat[5]+ ' · 盈利：'+betbotstat[0].toFixed(9)+' · 幾率：'+betbotpara[0]+' · 下注：'+betbotpara[1]+' · 止赚：'+betbotpara[2]+' · 止损：'+betbotpara[3]+' · 单注最大下注：'+betbotpara[4])
    }
    if(followbotactive){
        betlog('盈利：'+followbetstat[0].toFixed(9)+' · 贏：'+followbetstat[1]+' · 輸：'+followbetstat[2]+ ' · 被跟蹤者：'+followbetpara[0]+' · 下注比：'+followbetpara[1]+' · 止赚：'+followbetpara[2]+' · 止损：'+followbetpara[3]+' · 单注最大下注：'+betbotpara[4])
    }
}
var awaitingbet
function processbet(data){
//處理Bot狀態
    if(!betbotactive){return false;}
    var bchance=betbotpara[0]
    var bwager=betbotpara[1]
    var bstopwin=betbotpara[2]
    var bstoploss=betbotpara[3]
    var maxbet=betbotpara[4]
    var afterwinaction=betbotpara[5]
    var afterwinvar=betbotpara[6]
    var afterlossaction=betbotpara[7]
    var afterlossvar=betbotpara[8]
    var betdir=betbotpara[9]

    if(typeof(data)!='undefined'){
        var thisbetprofit=data['this_profit']
        var thisbetwl=data['win']
        var beforechange=bwager
        betlog('投注器下注结果 @'+data['chance']+'%, '+tidy(data['bet'])+config.coinunit+' '+(data['high'] == 1 ? "押大" : "押小")+'. 结果幸运数：'+(data['lucky']/10000)+' ('+(data['win']==1 ? '赢' : '输' )+'), 利润：'+data['this_profit']+config.coinunit+' ')
        if(thisbetwl){
            if(afterwinaction==0){beforechange=afterwinvar}
            if(afterwinaction==1){beforechange=beforechange*afterwinvar}
            if(afterwinaction==2){beforechange=beforechange+afterwinvar}
            if(afterwinaction==3){beforechange=beforechange/afterwinvar}
            if(afterwinaction==4){beforechange=beforechange-afterwinvar}
            if(betbotpara[10]){if(betbotpara[9]){betbotpara[9]=0}else{betbotpara[9]=1} betlog('换边下注')}
            betbotstat[1]++
            if(betbotstat[3]<0){betbotstat[3]=0}
            betbotstat[3]++
            if(betbotstat[3]>betbotstat[4]){betbotstat[4]=betbotstat[3]}
        }else{
            if(afterlossaction==0){beforechange=afterlossvar}
            if(afterlossaction==1){beforechange=beforechange*afterlossvar}
            if(afterlossaction==2){beforechange=beforechange+afterlossvar}
            if(afterlossaction==3){beforechange=beforechange/afterlossvar}
            if(afterlossaction==4){beforechange=beforechange-afterlossvar}
            if(betbotpara[11]){if(betbotpara[9]){betbotpara[9]=0}else{betbotpara[9]=1} betlog('换边下注')}

            betbotstat[2]++
            if(betbotstat[3]>0){betbotstat[3]=0}
            betbotstat[3]--
            if((betbotstat[3]*-1)>betbotstat[5]){betbotstat[5]=betbotstat[3]*-1}
        }
        betdir=betbotpara[9]
        if(beforechange==0||(beforechange>=0.00001&&beforechange<=maxbet&&beforechange<=parseFloat($('#max_profit').text())&&beforechange<=maxbet&&beforechange<=parseFloat($('#pct_balance').text()))){
            bwager=beforechange
            betbotpara[1]=bwager
        }else{
            betlog('投注金额已达上限或下限(0.00001),暂停');
            return betbotactive = false;
            //betlog('若改变下注额会达到下限（0.00001 '+config.coinunit+'）或上限（单注最大下注额），故不作改变')
        }
        betbotstat[0]=betbotstat[0]+parseFloat(thisbetprofit)
    }
    if(betbotstat[0]>bstopwin){betlog('达到止赚，投注器终止');betbotactive=0;stopallbot();return false;}
    if(betbotstat[0]<(bstoploss*-1)){betlog('达到止蚀，投注器终止');betbotactive=0;stopallbot();return false;}
    if(tidy(bwager)>parseFloat($('#pct_balance').text())){betlog('资金不足，投注器终止');stopallbot();return false;}
    if(tidy(bwager)*(0.99/(bchance/100))>parseFloat($('#max_profit').text())){betlog('下注额太大，最大利润为'+$('#max_profit').text()+config.coinunit+'，投注器终止');betbotactive=0;stopallbot();return false;}
    var bottimeout=1200
    if(bwager<0.0005){bottimeout=3000}
    bottimeout=0;

    awaitingbet=setTimeout(function(){  socket.emit("bet",csrf,{
        chance:bchance,bet:tidy(bwager),which:(betdir == 1 ? "hi" : "lo")
    })
        betlog('投注器下注 @'+bchance+'%, '+tidy(bwager)+config.coinunit+' '+(betdir == 1 ? "押大" : "押小"))},bottimeout)

//準備Bot下注
    if(betbotpara[0]!=0){}
}

function betbotupdate() {
    if (betbotactive)
        return false;

    if ($('#bot_chance').val() == "" || $('#bot_bet').val() == "" || $('#bot_stopprofit').val() == "" || $('#bot_stoploss').val() == "" || $('#bot_limit').val() == "" || $('#bot_afterwin').val() == "" || ($('#bot_afterwinvar').val() == "" && $('#bot_afterwin').val() != "9") || $('#bot_afterloss').val() == "" || ($('#bot_afterloss').val() != "9" && $('#bot_afterlossvar').val() == "") || $('#bot_dir').val() == "") {
        $('#bot_start').addClass('waitingz');
    } else {
        betbotpara = [
            parseFloat($('#bot_chance').val()),
            parseFloat($('#bot_bet').val()),
            parseFloat($('#bot_stopprofit').val()),
            parseFloat($('#bot_stoploss').val()),
            parseFloat($('#bot_limit').val()),
            parseFloat($('#bot_afterwin').val()),
            parseFloat($('#bot_afterwinvar').val()),
            parseFloat($('#bot_afterloss').val()),
            parseFloat($('#bot_afterlossvar').val()),
            parseFloat($('#bot_dir').val()),
            parseFloat($('#bot_afterwindir').val()),
            parseFloat($('#bot_afterlossdir').val())
        ];
        console.log(betbotpara);
        $('#bot_start').removeClass('waitingz');
    }
    //[chance,bet,stopwin,stoploss,maxbet,afterwin,afterwinvar,afterloss,afterlessvar,big1small0]
}

function followbotupdate(){
//id rate win loss
    if(followbotactive){return false;}
    if($("#followid").val()==""||$("#followrate").val()==""||$("#followwin").val()==""||$("#followloss").val()==""){
        $('#followbotstart').addClass('waitingz')
    }else{
        $('#followbotstart').removeClass('waitingz')
        $("#folid").text($("#followid").val())
        $("#folrate").text($("#followrate").val())
        $("#folwin").text($("#followwin").val())
        $("#folloss").text($("#followloss").val())
        followbetpara=[$("#followid").val(),parseFloat($("#followrate").val()/100),parseFloat($("#followwin").val()),parseFloat($("#followloss").val())]
    }
}
setInterval(processfollow,1500)
//每1.5秒處理一次
function loadgraph(){
    var g = new Bluff.Line('chartarea', '872x300');

    chartingdata[0].push((lastdata.stats.profit)*-1)
    chartingdata[1].push(lastdata.bankroll)
    chartingdata[2].push(lastdata.stats.wagered)
    chartingdata[3].push(lastdata.wagered)
    chartingdata[4].push(parseFloat(lastdata.profit))
    chartingdata[5].push(parseFloat(lastdata.invest_pft))

    g.hide_title=true
    g.theme_37signals();
    g.set_background({colors: ['#999', '#999']})
    for (var i=0;i<chartingdata.length;i++)
    { 		while(chartingdata[i].length > parseInt($("#gnodespoint").text())){
        chartingdata[i].shift()
    }
    }
    // $("#gminbet").text(minbetsize);$("#gshowuser").text(watchuserarray.join(","))
    if($('#ghouseprofit').is(':checked')){
        g.data("盈利",chartingdata[0])
    }
    if($('#ghouse').is(':checked')){
        g.data("庄款",chartingdata[1])
    }
    if($('#gbets').is(':checked')){
        g.data("赌注量",chartingdata[2])
    }
    if($('#gmybets').is(':checked')){
        g.data("我的赌注量",chartingdata[3])
    }
    if($('#gmywin').is(':checked')){
        g.data("我的下注盈利",chartingdata[4])
    }
    if($('#gmyhouseprofit').is(':checked')){
        g.data("坐庄盈利",chartingdata[5])
    }
    g.draw();
    setTimeout(function(){loadgraph()},2000)
}

var seen_init = false, seen_results = false;
user_init = function (data) {
    if (seen_init) return;
    seen_init = true;
    csrf = data.csrf;
    uid = data.uid;
    $("#uid").html(uid);
    $("#nick").html(quote_html(nick = data.name));

    up_othe_value(data);

    withdraw_address = data.wdaddr;
    fee = data.fee;
    update_my_stats(data.bets, data.wins, data.losses, data.luck, data.wagered, data.profit);
    update_site_stats(data.stats);
    update_settings(data.settings);
    $("#api_num").html(data.api);
    $("#max_profit").html(data.max_profit);
    $(".bankroll").html(commaify(data.bankroll));
    $("#pct_balance").html(data.balance);
    if(parseFloat(data.balance)==0){$('#baldepbtn').show()}else{$('#baldepbtn').hide()}

    set_chance(tidy(data.chance));
    $("#pct_bet").val(tidy(data.bet));
    $("#pct_edge").val(data.edge);
    $("#pct_edge").html(data.edge + "%");
    $("#shash").html(data.shash);
    $("#nonce").html(data.nonce);
    $("#seed").html(data.seed);
    $("#login").html(data.login);
    if (data.username) {
        $("#change_password").click(show_change_password)
    }
    else {
        $("#setup_account").click(function () {
            $.fancybox("<div class='setup_account'>" + "<h1>Set Username and Password</h1>" + '<div class="fleft w200 aright rpad">Username</div> ' + '<div class="input_ok_input"><input size=40 id="username"></div>' + '<div class="clear"></div>' + '<div class="fleft w200 aright rpad">Password</div>' + '<div class="input_ok_input"><input type="password" size=40 id="password1"></div>' + '<div class="clear"></div>' + '<div class="fleft w200 aright rpad">Repeat Password</div>' + '<div class="input_ok_input"><input type="password" size=40 id="password2"></div>' + '<div class="clear"></div>' + '<div class="fright input_ok_button"><button id="setup_button">OK</button></div>' + '<div class="clear"></div>' + '<div id="form_error"></div>' + "</div>", {
                helpers: {
                    overlay: {
                        closeClick: true, css: {
                            background: "rgba(0, 0, 0, 0.5)"
                        }

                    }

                }

            });
            var username = $("#username").focus();
            var password1 = $("#password1");
            var password2 = $("#password2");
            var button = $("#setup_button");
            username.add(password1).add(password2).keypress(function (e) {
                form_error("");
                if (e.which == 13) setup_account(username.val(), password1.val(), password2.val())
            });
            button.click(function () {
                setup_account(username.val(), password1.val(), password2.val())
            })
        })
    }
    update_investment(data.investment, data.percent, data.invest_pft);
    var prefix = "pct";
    get_float_string(prefix, "bet", find_object(prefix, "bet"));
    changed_chance("pct");
    while (data.chat.length) {
        var c = JSON.parse(data.chat.shift());
        add_chat(new Date(parseInt(data.chat.shift())), "(" + c.user + ") <" + c.name.replace(/>/g, "]").replace(/</g, "[") + "> " + c.txt)
    }
    scroll_to_bottom_of_chat();
    set_google_auth_status(data.ga);
    $("#ga_edit").click(function () {
        socket.emit("edit_ga", csrf)
    });
    var history_types = ["deposit", "withdraw", "invest", "commission"];
    for (var i in history_types) bind_history(history_types[i])
}


// $("#a_pai").click(clicked_action_pai);
//function clicked_action_pai() {
//    //alert('aa');
//    window.open('allbetlist');
//}



//var evbus = $({});
//socket.emit("invest_box",csrf)

var fancyboxOptions = null;

$(function(){
    fancyboxOptions = {
        helpers: {
            overlay: {
                closeClick: true,
                css: {
                    background: overlaycolor
                }
            }
        }
    };

    $("#a_deposit").click(clicked_action_deposit);
});

function show_ga_warning(){
    var html  = "<div class='withdraw'><h1>安全警告</h1><br/><p>&nbsp;&nbsp;您的账户<span style=\"color:red\">未设置</span>GA认证。</p><p>&nbsp;&nbsp;为了保证您的资金安全，请设置Google Auth认证。</p></div>";
    $.fancybox(html, fancyboxOptions);
}

function clicked_action_deposit() {
    $.get("/fancybox/deposit", function(html) {
        $.fancybox(html, fancyboxOptions);
    });
};

function click_bet_roll(betId){
    $.get('/fancybox/roll?id='+betId, function(html){
        $.fancybox(html, fancyboxOptions);
    });
}

function clicked_action_invest(html) {
    $.get("/fancybox/invest", function(html) {
        var invest_ga = need_ga("invest");
        var divest_ga = need_ga("divest");
        $.fancybox(html, fancyboxOptions);

        if (!invest_ga) $("#invest_auth").hide();
        if (!divest_ga) $("#divest_auth").hide();
        $("#inv_balance").html(commaify($("#pct_balance").text()));
        var invest_code = $("#invest_code");
        var divest_code = $("#divest_code");
        $("#invest_input").focus();
        update_investment(investment, invest_pct, null);

        var invest_input = $("#invest_input"),
            divest_input = $("#divest_input");

        function onkeypress(event){
            $("#invest_error").html('');
            $("#devest_error").html('');
            // Allow: backspace, delete, tab, escape, enter and .
            if ( $.inArray(event.keyCode,[46,8,9,27,13,190]) !== -1 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                    // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            else {
                // Ensure that it is a number and stop the keypress
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                    event.preventDefault();
                }
            }
        }

        invest_input.keydown(onkeypress);
        divest_input.keydown(onkeypress);

        function fireInvest() {
            var maxIn = parseFloat($("#max_invest_in").text().replace(/,/g, ''));
            var balance = parseFloat($("#pct_balance").text().replace(/,/g, ''));
            var amount = parseFloat(invest_input.val());
            if (!amount || amount <= 0 || balance < amount) {
                $("#invest_error").html('投资金额值不正确，请重填');
            } else if (maxIn<amount){
                $("#invest_error").html('超出系统最大投资额');
            } else {
                socket.emit("invest", csrf, invest_input.val(), invest_code.val());
                //$.fancybox.close();
            }
        }
        function fireDevest() {
            var max = parseFloat($(".investment:first").text().replace(/,/g, ''));
            var amount = parseFloat(divest_input.val());
            if (!amount || amount <= 0 || amount > max) {
                $("#divest_error").html('撤资金额值不正确，请重填');
            } else {
                socket.emit("divest", csrf, amount, divest_code.val());
                //$.fancybox.close();
            }
        }

        invest_input.add(invest_code).keypress(function(e) {
            if (e.which == 13)
                fireInvest(); //socket.emit("invest", csrf, invest_input.val(), invest_code.val())
        });
        divest_input.add(divest_code).keypress(function(e) {
            if (e.which == 13)
                fireDevest();
        });

        $("#invest_button").click(fireInvest);
        $("#divest_button").click(fireDevest);
        $("#invest_all").click(function(e) {
            var maxIn = parseFloat($("#max_invest_in").text().replace(/,/g, ''));
            var balance = parseFloat($("#pct_balance").text().replace(/,/g, ''));
            if (maxIn<balance){
                $("#invest_error").html('超出系统最大投资额');
            }else{
                socket.emit("invest", csrf, "all", invest_code.val());
                $.fancybox.close();
            }
        });
        $("#divest_all").click(function(e) {
            socket.emit("divest", csrf, "all", divest_code.val());
            $.fancybox.close();
        })
    });
}

function weblogic(){
    this.checkpoint = 0;
}

weblogic.prototype.setup = function(sockio) {
    for (var i in this) {
        if (i.length > 2 && i.substr(0, 2) == 'on') {
            sockio.on(i.substr(2).toLowerCase(), this[i].bind(this));
        }
    }
};

function updateGlobalstat(systat){
    $(".bankroll").html(commaify(systat.balance.toFixed(8)));
    $("#max_profit").html(systat.maxBetProfit.toFixed(2));
    $("#max_invest").html(commaify(systat.maxInvest.toFixed(2)));
    $("#max_invest_in").html(commaify(systat.maxInvestIn.toFixed(8)));
    $(".sprofitraw").html(commaify((systat.profit).toFixed(8)));
    $(".sprofitpct").html((systat.profit*100/systat.wagered).toFixed(4)+"%");
    if(systat.profit<0){
        $(".sprofit_label").html("庄家亏损:");
        $(".sprofit").html(commaify(-systat.profit.toFixed(8)))
    }
    else{
        $(".sprofit_label").html("庄家获利:");
        $(".sprofit").html(commaify((systat.profit).toFixed(8)))
    }
    $(".sbets").html(commaify(systat.betCnt.toString()));
    $("#swins").html(commaify(systat.winCnt.toString()));
    $("#slosses").html(commaify(systat.lossCnt.toString()));
    $("#sluck").html((systat.betCnt==0?100:systat.luck*100/systat.betCnt).toFixed(8)+"%");
}

function updateUserstat(userstat){
//    //$("#luck").html(luck);
    $(".bets").html(commaify(userstat.betCnt.toFixed(0)));

    $(".wagered").html(commaify(userstat.wagered.toFixed(8)));
    $(".myprofit").html(commaify(userstat.profit.toFixed(8)));
    $("#wins,#wins2").html(commaify(userstat.winCnt.toFixed(0)));
    $("#losses,#losses2").html(commaify(userstat.lossCnt.toFixed(0)));
    // lastChance : userstat.lastChance,
    // lastWagered: basic.fromInt(userstat.lastWagered),
}

function updateDeposit(deposit){

}

weblogic.prototype.onResult3 = function(systat, deposit, userstat, bet, betkey){
    updateGlobalstat(systat);
    updateUserstat(userstat);
    updateDeposit(deposit);
};

weblogic.prototype.onInvest3 = function(systat, invest){
    updateGlobalstat(systat);
    // $(".bankroll").html(commaify(systat.balance.toFixed(8)));
    // //$("#sprofitraw").html()
    // $("#max_profit").html(systat.maxBetProfit.toFixed(2));
    // $("#max_invest").html(commaify(systat.maxInvest.toFixed(2)));
    // $("#max_invest_in").html(commaify(systat.maxInvestIn.toFixed(8)));

    update_investment(invest.balance, invest.percent, invest.profit);
    //     $(".investment").html(commaify((investment=i).toFixed(8)));
    // $(".invest_pct").html(commaify((invest_pct=p).toFixed(6)+"%"));
    // if(pft!==null)$(".invest_pft").html(commaify(pft.toFixed(8)));
    // if(max_invest_in)
    //    $("#max_invest_in").html(commaify(max_invest_in.toFixed(8)));

};

weblogic.prototype.onsystat = function(tick, systat){
    if(this.checkpoint<tick){
        this.checkpoint = tick;
        // $(".bankroll").text(commaify(systat.balance.toFix(8)));
        // $(".sprofitraw").text(commaify(systat.profit.toFix(8)));
    }
};

$(function() {
    (new weblogic()).setup(socket);

    $('#referlink').click(function() {
        $.get("/fancybox/referral", function(html) {
            $.fancybox(html, fancyboxOptions);
        });
    });
});

$(function update_sublinks(){
    var mydomain = null;
    var hostname = document.location.hostname;

    for (var i = 0; i < _gConfig.domains.length; i++) {
        var domain = _gConfig.domains[i];
        if (hostname.lastIndexOf(domain) != -1){
            mydomain = domain;
            break;
        }
    }

    if (mydomain == null || mydomain == "btc-dice.com")
        return ;

    $(".sublinks").each(function(index, a){
        a.protocol = document.location.protocol;
        var port = document.location.port;
        if (port!=="" && port!==0 && port !=="80" && port!==80)
            a.port = document.location.port;
        a.hostname = a.hostname.replace("btc-dice.com", mydomain);
    });
});
var scrload = 1;

function sload() {
    scrload++;
    console.log('loaded' + scrload + 'scripts');
}

// $(document).ready(function() {
//   $.getScript("http://www.btc-dice.com/javascripts/bluff.js").done(function() {
//     sload()
//   });
//   $.getScript("http://www.btc-dice.com/javascripts/js-class.js").done(function() {
//     sload()
//   });
//   $.getScript("http://www.btc-dice.com/javascripts/excanvas.js").done(function() {
//     sload()
//   });
// });

//KEYS: gnodespoint gminbet gshowuser ghouseprofit ghouse gbets gmybets gmywin gmyhouseprofit
function startguide(lang) {
    var guidelang = lang || 'zh';
    var introobject = [];
    var introguidezh = introJs();
    var introguideen = introJs();
    introguidezh.setOptions({
        steps: [{
            element: '.logo',
            intro: '欢迎来到'+_gConfig.hostname +'，在这里您可以玩即时开奖的骰子游戏，返奖率高达99％。',
            position: 'bottom'
        }, {
            element: '#all .results_container',
            intro: '这里是我们玩家投注的实时开奖记录，大家可以24小时观战。',
            position: 'top'
        }, {
            element: '.topbind',
            intro: '为保障每一位玩家的知情权，我们做到了公平公正公开，提供了一览无余的一站式资料，方便玩家了解基本信息。',
            position: 'top'
        }, {
            element: '#navright',
            intro: '这里可以实现充值、提现、换种子、查看您个人历史操作记录和排行榜的功能，确保玩家可以了解所有人的胜负。我们使用最具保值增值潜力的'+_gConfig.cointype+'作筹码，兑换无抽税，接近0手续费，在您娱乐的同时还能享受'+_gConfig.cointype+'升值带来的收益。',
            position: 'bottom'
        }, {
            element: '.tab-content.betting',
            intro: '这里显示您可以下注的余额，您可以根据个人喜好选择输赢的概率，押大押小，还可以0下注进行尝试，祝您好运！',
            position: 'top'
        }, {
            element: '.tabbar',
            intro: _gConfig.hostname +'還提供了投资坐庄丶股票的相关讯息，玩家相互交流的聊天室，您玩累了不妨来看看，里面会有很多人为您呐喊助威。',
            position: 'top'
        }, {
            element: '.mpbox',
            intro: '单注最大盈利为庄家投资额的1%，代表您单注能赢来的最大金额，只需轻点鼠标，就有机会赢得价值几万元的'+_gConfig.cointype+'了！',
            position: 'bottom'
        }],
        skipLabel: "跳过",
        nextLabel: "下一个",
        prevLabel: "上一个",
        doneLabel: '完成',
    });
    introguideen.setOptions({
        steps: [{
            element: '.container .header',
            intro: 'Welcome to BTC-DICE.com, where you can play instant dice game with only 1% house edge and win some Bitcoin!',
            position: 'bottom'
        }, {
            element: '#all .results_container',
            intro: 'This is our real-time streamed bets. Busy day and night.',
            position: 'top'
        }, {
            element: '.chatstat.statsborder',
            intro: 'We concern about having every user informed. So we offer convenient one-stop information. Open and Fair.',
            position: 'top'
        }, {
            element: '#action',
            intro: 'Would like to get started, view history or meet the Gambling Maestro of the day? You are in the right place. Play now with Bitcoin. No tax, low fee. Ensure you can enjoy gambling with a low cost.',
            position: 'bottom'
        }, {
            element: '.finance',
            intro: 'You are free to choose the odds, payouts. Even the direction of the outcome! Provably Fair gaming at the very best.',
            position: 'top'
        }, {
            element: '.tabs',
            intro: 'BTC-DICE also offers more than gambling. To invest in the house or our stocks, even a chatroom to share your own strategies. Every feature at a glance',
            position: 'top'
        }, {
            element: '.fright.stats',
            intro: 'Thousands worth of Bitcoin could be yours today. Stop procrastinating and get started!',
            position: 'top'
        }]
    });
    $('a[href="#all"]').click();
    if (guidelang == 'zh') {
        introguidezh.start();
    }
    if (guidelang == 'en') {
        introguideen.start();
    }
}

function ifwebkit() {
    var userAgentInfo = navigator.userAgent;
    var flag = false;
    if (userAgentInfo.indexOf("Safari") != -1) {
        flag = true;
    }
    if (userAgentInfo.indexOf("Chrome") != -1) {
        flag = true;
    }
    if (userAgentInfo.indexOf("WebKit") != -1) {
        flag = true;
    }
    return flag;
}

function ifmoz() {
    var userAgentInfo = navigator.userAgent;
    var flag = false;
    if (userAgentInfo.indexOf("Firefox") != -1) {
        flag = true;
    }
    return flag;
}

function ifie() {
    var userAgentInfo = navigator.userAgent;
    var flag = false;
    if (userAgentInfo.indexOf("MSIE") != -1) {
        flag = true;
    }
    return flag;
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('#topbind').addClass('bindtop');
        $('#affixplaceholder').removeClass('hide');
    } else {
        $('#topbind').removeClass('bindtop');
        $('#affixplaceholder').addClass('hide');
    }
});
$(function() {
    var webapp = {
        notify: function(message, type) {
            noty({
                text: message,
                layout: 'bottomCenter',
                timeout: 10000,
                type: type || 'success'
            });
        },
        nick: function(nickname) {
            $("#nick").html(nickname);
            $("#nickhdr").html(nickname);
            nick = nickname;
        }
    };

    for (var i in webapp)
        socket.on(i, webapp[i]);
});

var 	message_en={
    "0": "Account",
    "1": "All bet",
    "2": "My Bet",
    "3": "Chat",
    "4": "Statistics",
    "5": "Fair",
    "6": "ID",
    "7": "Investment",
    "8": "Stock",
    "9": "Help",
    "10": "Change Seed",
    "11": "Historical Record",
    "12": "Deposit Record",
    "13": "Withdraw Record",
    "14": "Log Out",
    "15": "Switch Coin",
    "16": "Info",
    "17": "Deposit",
    "18": "Withdraw",
    "19": "My Balance",
    "20": "Amount",
    "21": "Profit",
    "22": "Bets",
    "23": "Loss/Win",
    "24": "My Investment",
    "25": "My Investment Profit",
    "26": "All Investment",
    "27": "All Investment Profit",
    "28": "Max Profit Per Bet",
    "29": "Manual",
    "30": "Automatic",
    "31": "Chance",
    "32": "Payout",
    "33": "Bet Coin",
    "34": "Profit",
    "35": "Bet",
    "36": "High",
    "37": "Low",
    "38": "Nickname",
    "39": "Time",
    "40": "BetID",
    "41": "Lucky",
    "42": "Target",
    "43": "My Stats",
    "44": "Win",
    "45": "Loss",
    "46": "Investment",
    "47": "All User Stats",
    "48": "Profit %",
    "49": "Stop",
    "50": "Cancel All Operation",
    "51": "Get Data",
    "52": "Erase Data",
    "53":"The fairness of every diced random point in the game can be reversely " ,
    "54":"verified through mathematical formulas, which indicates that the site has no way to cheat by pre-determning the result of the game. " ,
    "55":"When you click the button of Change Seed in the  ID, the system will produce a series of SHA256 hash of the server seed ,reset the betid,and pair the client random seed set by yourself . " ,
    "56":" The SHA256 hash of the server seed currently using is："	,
    "57":" The client seed that you are using is："	,
    "58":" BetID："	,
    "59":"Introduction of the Algorithm"	,
    "60":"For example, given the SHA256 hash of the server seed is 「AB123CD」, client seed is 「1234567」, when you begin to bet at your first time, the system will compose those bytes into 「1234567:2」"	,
    "61":"Then, we operate hmac-sha522 with the server seed and 「1234567:1」 to get a hexadecimal alphabetic string with 228 units."	,
    "62":"We convert the first five units into decimal numeral that should be from 0 to 1048575 (16^5-1)."	,
    "63":"If the number is less than 1,000,000, it will be divided by 10,000 to be as the result of bet, which should range from 0.0000 to 99.9999."	,
    "64":"If the number is more than 1,000,000, the last five hexadecimal units of the number will be extracted out to imitate the previous arithmetic process."	,
    "65":"If all the twenty five series of number is exactly more than 1,000,000, the last three series of number with hexadecimal units will be converted into decimal ones and be divided by 10,000."	,
    "66":"Thus the result should range from 0.0000 to 0.4095. "	,
    "67":"Verifying the bet"	,
    "68":"Third-party site to verify bet results"	,
    "69":" Infomation"	,
    "70":"We strongly advise you set Google Authenticator to improve your  security."	,
    "71":" ID:"	,
    "72":" Name:"	,
    "73":"Nickname:"	,
    "74":"Google Authenticator:"	,
    "75":"Change Password"	,
    "76":"Edit"	,
    "77":"Balance Infomation"	,
    "78":"Balance"	,
    "79":"Deposit Without Confirm"	,
    "80":"Withdraw Pending"	,
    "81":"Set Search Condition"	,
    "82":"Show bets under following condition"	,
    "83":"User ID:"	,
    "84":"Minimun Bet:"	,
    "85":"Max Investment Limit"	,
    "86":"Investment Allowance"	,
    "87":"My Investment / All Investment",
    "88":"All Investors",
    "89":"Being an investor!"	,
    "90":"You can invest some BTC to the site as a banker, which can not only improve the upper limit of bet, but also provide an opportunity to get the profit of the site.",
    "91":"Being a banker cannot make sure you win.",
    "92":"In the long term, The investors’ profit should approach to 1% of the total bet amount without the consideration of fees. ",
    "93":"The site charges ",
    "94":"of investors’ per profit as fee, which will be rewarded to the shareholders through dividends. ",
    "95":"It takes about 10 seconds when you apply investment or divestment 。 ",
    "96":"Invest",
    "97":"My BD-Stock Number:",
    "98":"Total cumulative dividends of this month:",
    "99":"Dividends of each share of this month:",
    "100":"My cumulative dividends of this month:",
    "101":"The number of the original stock issued by the site:",
    "102":"The number of the original stock will be rewarded to players:",
    "103":"The number of the original stock rewarded:",
    "104": "Introduction of BD-Stock!"	,
    "105": "The total number of the stock is 1 million shares, no more shares will be issued in future.",
    "106": "The issuer holds 65% (650,000 shares) and makes a commitment of freezing his shares for 6 months once the stock is publicly traded."	,
    "107": "The strategic investors hold 10% (1,000,000 shares) and have the rights to priority distributions."	,
    "108": "The dividend comes from the site’s  net profits. The dividend will be carried out monthly and be issued first Monday of each month(Taipei Time)."	,
    "109": "The issuer reserves the rights to premium buy-back those rewarded shares without damaging current shareholders’ interest."	,
    "110": "Historical dividends"		,
    "111":"BD-Stock is able to exchange on",
    "112":"What is the place?",
    "113":" is a online casino where you can play a dice game with your digital  coins. The house edge  is only 1%.",
    "114":"We states that, with the exception of virtual coins, any kind of use or exchange of other currencies issued by any political entity or actor at the site is discouraged and forbidden.",
    "115":"You can select your chance to win and bet size, and roll hi or lo. Then you can get the results of the game instantly: win or loss.",
    "116":"There is a live chat room, where you can communicate with other players. They may give you some advice of how to bet。",
    "117":"Additionally, you can be an Investor of the site, so-called Banker, which can probably improve the max profit of a single bet。 ",
    "118":"The reason of why other players try to persuade you to bet is that their wins probably necessitate your losses. It means that this is a zero-game.",
    "119":"How to deposit?",
    "120":"Click the button of Deposit on the top right corner, then send your coin to the receiving bitcoin address of your  on btc-dice.com.  ",
    "121":"Your depositing address on the site is unique so that you can reuse the address. ",
    "122":"According to different coin payment mechanism, you can receive your funds only after one to ten confirmation",
    "123":"How to withdraw?",
    "124":"Click the button of Withdraw on the top right corner, input the withdrawing address and amount. If you have set up Google Auth, you should input the verifying code additionally.",
    "125":"We charge some coins from each withdraw as pay fee.",
    "126":"Withdraw procedure is automatic (Ten-mintues routine)。Frequent or high value  transactions will be pended few hours for manual review. If your withdraw don't reach your address in 30 minutes, plz contact webmaster.",
    "127":"Can the site refund to the player after his bet?",
    "128":"We will not refund to the player after his bet because every result of one bet is ultimate and one-time. ",
    "129":"If the site find out a player cheat in some way,it has the rights to frozen the cheater’s  without early warning.",
    "130":"How to contact us?",
    "131":"How we charge?",


    "132":"Home",
    "133":"Ranking",
    "134":"Bet History",
    "135":"Investment Report",
    "136":"Investment",
    "137":"Invest/Divest History",
    "138":"My Historical Investment",
    "139":"Stock and Dividends",
    "140":"Push Stock",
    "141":"Push Record",
    "142":"Historical Dividends Paid",

    "143":"Period",
    "144":"Begin",
    "145":"End",
    "146":"Search",
    "147":"Balance not enough!",
    "148":"More than max profit per bet!!",
    "149":"Respond very slow now.",
    "150":"Next Bet is Maximum.",
    "151":"Please wait last result.",
    "152":"Invalid amount",
    "153":"Withdraw fee is : ",
    "154":"",
    "155":"All withdraw will be manual reviewd if you don't set up Google Authenticator.",
    "156":"Address",
    "157":"Amount",
    "158":"GA Code",
    "159":"Change Nickname",
    "160":"Plz input a new nickname",
    "161":"Investor's loss",
    "162":"Investor's profit",
    "163":"Set up Google Authenticator",
    "164":"To enable Google Authenicator on btc-dice make sure the app is installed on your phone . ",
    "165":"Scan barcode with mobile on the screen, and input the key under it.",
    "166":"Make a backup copy of the code under the QR code on paper for when you lose or reset your phone!",



    "167":"Last Server Seed ：",
    "168":"Hash of Last Server Seed ：",
    "169":"Confirm",
    "170":"Client Seed：",
    "171":"BetID ：",
    "172":"Here are the previous four values in a single field for easy copy/pasting into a verification tool：",
    "173":"System will pick new hash of server seed automatically：",
    "174":"Input here",
    "175":"Type up to 24 random digits (0 through 9) to re-randomize with your own seed",
    "176":"Please input some randomize number.",
    "177":"Change Password",
    "178":"Current password：",
    "179":"New password：",
    "180":"Confirm new password：",
    "181":"Plz input valid password.Length of password is between 6 to 16。",
    "182":"The passwords you input are different",
    "183":"Login",
    "184":"Invest",
    "185":"Divest",
    "186":"Stock",
    "187":"Bet",
    "188":"",
    "189":"Please input GA code to change security condition。",
    "190":"Open",
    "191":"Start",
    "192":"Fast",
    "193":"Normal",
    "194":"Slow",

    "300":"Stop-loss",
    "301":"Profit limit",
    "302":"Max betting",
    "303":"After win",
    "304":"Do nothing",
    "305":"Set betting equal ",
    "306":"Betting times",
    "307":"Betting plus",
    "308":"Betting divide by",
    "309":"Betting minus",
    "310":"Don't change",
    "311":"Change betting side",
    "312":"After loss",
    "313":"Start",
    "400":"My Refer Link",
    "401":"My Rebate",
    "500":"Stock transfer record",
    "501":"No.",
    "502":"Time",
    "503":"Transfer",
    "504":"From",
    "505":"To",
    "506":"Amount",
    "507":"Complete",
    "508":"Investor's Balance",
    "509":"Investment Percent",
    "510":"Invest, Divest  Request",
    "511":"Time Range",
    "512":"Actual Amount",
    "513":"Processed",
    "514":"processing time",
    "515":"Deposit Detail",
    "516":"Deposit Detail",
    "517":"Deposit Detail",
    "518":"Betting Summary ",
    "519":"Date ",
    "520":"Number of Player ",
    "521":"Amount of Bet ",
    "522":"Win",
    "523":"Loss",
    "524":"Result",
    "525":"Bets ",
    "526":"Total Bet Amount ",
    "527":"Reward ",
    "528":"Betting Daily Statistics ",
    "529":"Reward ",
    "530":"Withdraw Address ",
    "531":"Withdraw Amount ",
    "532":"Processing Result ",
    "533":"Withdraw TxID ",
    "534":"Update Date ",
    "535":"Comments ",
    "536":"Deposit Address",
    "537":"Deposit Amount",
    "538":"Confirms",
    "539":"User ID",
    "540":"Transfer Stock",
    "541":"My Account:",
    "542":"My Stock",
    "543":"Reciveing User ID",
    "544":"Amount of Stock",
    "545":"This is a one-way transferring ,unable to cancel after your confirmation.",
    "546":"Dividend History ",
    "547":"Amount of Stock",
    "548":"Accrued Dividend",
    "549":"EPS",
    "550":"Last Phase Balance ",
    "551":"Investment Percent ",
    "552":"Ignore  unchanged  ",
    "553":"Investment History ",
    "554":"Available balance ",
    "555":"Fee for each withdraw ",
    "556":"invalid amonut ",
    "557":"Please wait for result. ",
    "558":"Next bet will be MAXIMUM amount. ",
    "559":"Not enough balance. ",
    "560":"System response too slow. ",
    "561":"Out of max profit per bet",
    "562":"Current Password ",
    "563":"New Password ",
    "564":"Confirm Password",
    "565":"Make sure that your Google Auth is ready before your deposit to protect your assests.",
    "1000":"test",
    "3000": 'times',
    "3001": 'Alternate',
    "3002": 'Site 1',
    "3003": 'Site 2',
    "3004": 'Site 3'
};


var message_chs ={
    "0": "我的帐号",
    "1": "所有投注",
    "2": "我的投注",
    "3": "聊天",
    "4": "统计",
    "5": "公平",
    "6": "帐号",
    "7": "投资",
    "8": "股票",
    "9": "帮助",
    "10": "换手气",
    "11": "历史资料",
    "12": "存款资料",
    "13": "提现资料",
    "14": "登出",
    "15": "换币种",
    "16": "查询",
    "17": "存款",
    "18": "提款",
    "19": "余额",
    "20": "投注金额",
    "21": "投注盈利",
    "22": "投数次数",
    "23": "输/赢次数 ",
    "24": "我的投资",
    "25": "投资盈利",
    "26": "庄家资金",
    "27": "庄家盈利(已扣除分红)",
    "28": "单注最大盈利",
    "29": "手动",
    "30": "自动",
    "31": "获胜机率",
    "32": "赔率",
    "33": "投注金额",
    "34": "获胜盈利",
    "35": "押",
    "36": "大",
    "37": "小",
    "38": "昵称",
    "39": "时间",
    "40": "投注单号",
    "41": "幸运数",
    "42": "条件",
    "43": "我的统计",
    "44": "赢",
    "45": "输",
    "46": "总投资",
    "47": "所有玩家统计",
    "48": "盈亏比例",
    "49": "停止",
    "50": "中断所有投注",
    "51": "获取资料",
    "52": "清除资料",
    "53":"此游戏可由数学公式反向验证出来每一个掷出的随机点数都是公正的， " ,
    "54":"营运方无法预先决定胜负结果。" ,
    "55":"当你按下画面右上角的「换手气」按钮，系统将会产生一组服务器随机种子的SHA256散列值，再配合客户自行设定的 客户随机种子，及投注流水号，我们将上述三个资料合并运算, 产生公正且随机的投注结果。 " ,
    "56":"您目前正在使用服务器随机种子的SHA256散列值是："	,
    "57":"客户随机种子："	,
    "58":"投注流水号："	,
    "59":"算法介绍"	,
    "60":"比如说，如果你的服务器随机种子的散列值是「AB123CD」客户种子是「1234567」而且你将开始投第一注，系统会将字串合并成「1234567:1」。"	,
    "61":"然后，我们使用服务器随机种子和「1234567:1」进行hmac-sha512运算，得出一个128位字元的十六进位字符串。"	,
    "62":"我们采取前5位换算成十进位，此数值范围应为应为 0 到 1048575 (16^5-1)。"	,
    "63":"如果小于100万，我们将此数字除以1万做为投注结果，此数值范围应为应为 00.0000 到 99.9999。"	,
    "64":"如果大于100万，我们取后面5个十六进位数值并重复前面过程直到取得投注结果。"	,
    "65":"如果恰好全部25组都大于100万，我们用最后剩下的3组十六进位数值换算成十进位，并除以1万，"	,
    "66":"此数值范围应为 0.0000 到 0.4095。 "	,
    "67":"投注验证"	,
    "68":"第三方投注验证网站"	,
    "69":"安全信息"	,
    "70":"强烈建议使用Google Auth身份认证以增加个人帐户安全性。"	,
    "71":"我的用户ID是:"	,
    "72":"我的账号是:"	,
    "73":"我的网站昵称是:"	,
    "74":"身份验证 (Google Authenticator) :"	,
    "75":"修改密码"	,
    "76":"修改"	,
    "77":"资金信息"	,
    "78":"可用余额"	,
    "79":"充值未确认金额"	,
    "80":"提款冻结金额"	,
    "81":"设定所有投注查询条件"	,
    "82":"按以下条件显示投注信息："	,
    "83":"用户编号:"	,
    "84":"赌注不低於:"	,
    "85":"当前最大投资上限为"	,
    "86":"还能投资"	,
    "87":"我的投资占庄家总资金",
    "88":"查看所有投资者",
    "89":"成为投资者！"	,
    "90":"您可以投资一些币在网站上坐庄。这既增加了最大投注上限，还可以保留您在网站上的利润。",
    "91":"坐庄不是一定获胜。",
    "92":"长远来看，如果不计算佣金的话，庄家的利润应该接近於全部赌注的1％",
    "93":"目前网站收取庄家获胜时投注金额 ",
    "94":"为佣金，所有佣金将做为股票红利回馈到股东 ",
    "95":"申请投资或撤资时，最快需10秒钟才会生效。 ",
    "96":"投资",
    "97":"我的BD流通股数:",
    "98":"本月累积分红总数 :",
    "99":"本月每股累积分红 :",
    "100":"本月我的累积分红:",
    "101":"网站总共发行原始股票:",
    "102":"预计送出:",
    "103":"已送出 :",
    "104": "股票介绍"	,
    "105": "我们只发行100万股原始股，保证以后永不增发。",
    "106": "创办人所持有的65%股份，在公开上市后，无条件自动冻结6个月以保証股东权益。"	,
    "107": "战略投资者所持有的10%股份，在公开上市后，将优先配售。其馀免费分发给玩家的25%股份，将在其後进行自由流通。"	,
    "108": "分红日期为每月的第一个周一，分红来自于网站的全部利润。"	,
    "109": "本网站保留对原始股溢价强制回购的权利。"	,
    "110": "查看历史分红"		,
    "111":"BD流通股可在796交易所交易",
    "112":"这是什么地方？",
    "113":"是一个电子货币的线上游戏场，在这里您可以玩即时开奖的骰子游戏，返奖率高达99％。",
    "114":"营运方不接收任何法定货币，也不兑换任何法定货币。",
    "115":"选择您的机率和投注，然后选择“押大或押小”，掷骰子后并得到即时的结果：赢或输。",
    "116":"网站还有一个即时聊天室，您可以在聊天室与其他玩家互动。他们可能会试图说服您怎么下注，会提供更多的参考建议给您。",
    "117":"另外，您可以在网站选择做投资者，所谓的“庄家”，同时帮助我们的玩家提高了单注最大盈利。",
    "118":"这就是为什么玩家在聊天室里试图说服您下注 - 他们赢了，意味著您失去了...",
    "119":"我该如何充值？",
    "120":"点击网站右上角 [充值] 按钮，再COPY收款地址进行付款操作。",
    "121":"每个用户注册后会分配一个唯一的付款钱包地址，可重覆使用作为您的充值渠道。 ",
    "122":"按照不同币种的付款机制，您的付款需要1到5个确认后才能被划入到您的帐户上。(确认时间约为5到20分钟)，您可以在存款资料中实时查询。",
    "123":"我该如何提款？",
    "124":"点击网站右上角 提款 按钮，输入收款地址、金额，如果开启Google Auth身份验证，则输入6位数字验证码，再点击 提款 。",
    "125":"每次提款将扣除一定金额的手续费作为转账费用，详见提款页面。",
    "126":"提款作业全自动处理，每十分钟一次。频繁或大额转帐，系统会自动转人工审核。超过30分钟未到帐的，请通知下管理员。",
    "127":"投注后能退款嘛？",
    "128":"所有投注的结果是最终且一次性的，不接受任何要求退回投注。 ",
    "129":"如果发现有任何作弊行为，运营方有权利无预警冻结帐户。",
    "130":"怎么联系我们？",
    "131":"网站如何收费?",


    "132":"首页",
    "133":"排行榜",
    "134":"投注历史资料",
    "135":"投资报告",
    "136":"投资",
    "137":"历史投资和撤资资料",
    "138":"我的历史投资",
    "139":"股票和分红",
    "140":"站内转股",
    "141":"站内转股历史资料",
    "142":"历史分红资料",

    "143":"时段",
    "144":"开始",
    "145":"结束",
    "146":"搜寻",
    "147":"馀额不足!",
    "148":"超过单注最大盈利!",
    "149":"网速反应慢.",
    "150":"注意，下一注是最大金额投注。",
    "151":"请等最新的投注结果",
    "152":"金额不正确",
    "153":"提款手续费 : ",
    "154":"",
    "155":"未设置谷歌身份验证(GA)的话，所有提款都需客服人工审核。",
    "156":"提款地址",
    "157":"提款金额",
    "158":"GA验证码",
    "159":"修改密码",
    "160":"请输入新的密码",
    "161":"投资者损失",
    "162":"投资者利润",
    "163":"设定谷歌身份验证",
    "164":"&nbsp;&nbsp;要在智能手机上通过360手机助手连接电脑搜索、下载、安装“google身份验证器”软件。将手机中的google身份验证器安装好后，选择软件中的“账户设置”-“输入提供的秘钥”来输入网站显示的英文字符串。您手机里的google身份验证器就会生成一个与您账户相对应的六位动态口令，每30秒变换一次。 此后当您需要输入谷歌验证码的时候，首先确认手机时间和电脑显示时间一致，在允许的时间内输入有效数字，这样，就双重保障了您的账户安全。<a href=\"http://v.youku.com/v_show/id_XNjk1Mjg5MTAw.html\" target=\"_blank\">绑定谷歌身份验证器（GA）视频教程</a>",
    "165":"用手机扫瞄左边的QR码，接著输入手机上提示的6位数数字并点击「确认」。",
    "166":"QR码下方的字串请另行备份在纸上，如果手机遗失或故障时可在另一台手机上使用!",



    "167":"上一个服务器种子 ：",
    "168":"服务器种子散列值 ：",
    "169":"确认",
    "170":"客户种子：",
    "171":"投注编号：",
    "172":"这里是验证投注结果时需要的资料",
    "173":"系统会自动设定新的服务器种子之散列值：",
    "174":"在此输入",
    "175":"可输入最长24个数字(0至9)以设定您的客户端种子。",
    "176":"请输入一些随机的数字.",
    "177":"修改密码",
    "178":"现在密码：",
    "179":"新密码：",
    "180":"确认新密码：",
    "181":"请输入6 至16位长度的密码。",
    "182":"输入的密码相异",
    "183":"登入",
    "184":"投资",
    "185":"撤资",
    "186":"股票",
    "187":"投注",
    "188":"您可以在此设定Google Auth身份验证的影响范围：",
    "189":"请输入6位Google Auth数字验证码确认是否改变影响范围，如不改变请关闭此页面。",
    "190":"开启",
    "191":"开始",
    "192":"快",
    "193":"普通",
    "194":"慢",
    "300":"止损",
    "301":"止盈",
    "302":"最大投注额",
    "303":"获胜後",
    "304":"不做任何改变",
    "305":"将下注额设到 ",
    "306":"将现时下注额乘",
    "307":"将现时下注额加",
    "308":"将现时下注额除",
    "309":"将现时下注额减",
    "310":"不更换押大押小",
    "311":"並更换押大押小",
    "312":"失败后",
    "313":"开始",
    "400":"我的推广链接",
    "401":"我的返利",
    "500":"股票转让记录",
    "501":"编号",
    "502":"时间",
    "503":"接收/转出",
    "504":"转出方",
    "505":"接收方",
    "506":"股份数量",
    "507":"完成时间",

    "508":"庄家投资余额",
    "509":"份额",
    "510":"投资/撤资请求",
    "511":"时间范围",
    "512":"实际金额",
    "513":"已处理",
    "514":"处理日期",
    "515":"充值详情",
    "516":"充值详情",
    "517":"充值详情",
    "518":"投注统计",
    "519":"日期",
    "520":"玩家人数",
    "521":"总投注",
    "522":"赢",
    "523":"输",
    "524":"结果",
    "525":"总投注",
    "526":"总投注金额",
    "527":"增送股份",
    "528":"投注日统计",
    "529":"增送股份",
    "530":"提款地址",
    "531":"提款金額",
    "532":"处理结果",
    "533":"交易号",
    "534":"更新时间",
    "535":"备注信息",
    "536":"存款地址",
    "537":"存款金额",
    "538":"确认次数",
    "539":"用户编号",
    "540":"股票转让",
    "541":"我的账号",
    "542":"我的股票",
    "543":"接收方用户ID",
    "544":"转让股票数量",
    "545":"股票转让后无法退回，操作请谨慎。",
    "546":"分红历史记录",
    "547":"股票数",
    "548":"累积分红总数",
    "549":"每股盈利",
    "550":"上期余额",
    "551":"投资比例",
    "552":"忽略盈利未变动记录",
    "553":"投资历史余额",
    "554":"可使用金额",
    "555":"每次提款手续费",
    "556":"无效的金额",
    "557":"请等待上一注的结果。",
    "558":"下一注投注金额将会是以最大金额投注",
    "559":"馀额不足",
    "560":"系统反应时间过长，请降低投注速度。",
    "561":"已超过单注盈利上限",
    "562":"当前密码",
    "563":"新密码",
    "564":"确认新密码",
    "565":"充值前，请先确认帐号己经启用Google Auth，以保护你的资金安全。",

    "1000":"test",
    "3000": '倍',
    "3001": '备用线路',
    "3002": '线路1',
    "3003": '线路2',
    "3004": '线路3'
};



function InitLang() {
    var lang = getCookie('LANG_COOKIE');
    if (!lang){
        lang='chs';
        setCookie('LANG_COOKIE',lang);
    }
    //getbetcookie();



//console.log('lang:'+lang);

    var oLangArea = document.getElementsByTagName("LANGS");
//console.log('lang length:'+oLangArea.length);
    for(var i=0;i<=oLangArea.length;i++){
        if  ( typeof oLangArea[i] != "undefined" ) {
            //if  ( typeof oLangArea[i].getAttribute("id") !=  "undefined") {
            if  ( oLangArea[i].getAttribute("id")) {
                var s =oLangArea[i].getAttribute("id");
                var j= (oLangArea[i].getAttribute("id")).substring(1);

                //oLangArea[i].innerHTML = eval('message.'+lang+'['+j+']');

                if (lang == "chs"){
                    oLangArea[i].innerHTML = eval('message_chs['+j+']');
                }
                if (lang == "en"){
                    oLangArea[i].innerHTML = eval('message_en['+j+']');
                }

            }
        }
    }
    var oLangArea = document.getElementsByTagName("option");
    for(var i=0;i<=oLangArea.length;i++){
        if  ( typeof oLangArea[i] != "undefined" ) {
            if  ( typeof oLangArea[i].getAttribute("id") !=  "undefined") {

                var j= (oLangArea[i].getAttribute("id")).substring(1);

                //oLangArea[i].innerHTML = eval('message.'+lang+'['+j+']');
                if (lang == "chs"){
                    oLangArea[i].innerHTML = eval('message_chs['+j+']');
                }
                if (lang == "en"){
                    oLangArea[i].innerHTML = eval('message_en['+j+']');
                }
            }
        }
    }
}

function GetLang(id) {
    var lang = getCookie('LANG_COOKIE');
    if (lang == "chs"){
        return(message_chs[id]);
    }
    if (lang == "en"){
        return(message_en[id]);
    }

}
function clickChange(langs){
    console.log('langs:'+langs);
    if (langs== 1){
        setCookie('LANG_COOKIE','chs');
    }
    if (langs== 2){
        setCookie('LANG_COOKIE','en');
    }
    InitLang();
}
function setCookie(name,value) {
    console.log(name);
    console.log(value);

    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + 1000*60*60*24*2000);
    document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString();
}

function getCookie(name)
{
    var arr = document.cookie.split("; ");
    for(var i=0;i<arr.length;i++)
        if (arr[i].split("=")[0] == name)
            return unescape(arr[i].split("=")[1]);
    return null;
}



// ----------------------------------------------------------------------------
// Buzz, a Javascript HTML5 Audio library
// v1.1.0 - released 2013-08-15 13:18
// Licensed under the MIT license.
// http://buzz.jaysalvat.com/
// ----------------------------------------------------------------------------
// Copyright (C) 2010-2013 Jay Salvat
// http://jaysalvat.com/
// ----------------------------------------------------------------------------

(function(t,n,e){"undefined"!=typeof module&&module.exports?module.exports=e():"function"==typeof n.define&&n.define.amd?define(t,[],e):n[t]=e()})("buzz",this,function(){var t={defaults:{autoplay:!1,duration:5e3,formats:[],loop:!1,placeholder:"--",preload:"metadata",volume:80,document:document},types:{mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",aac:"audio/aac",m4a:"audio/x-m4a"},sounds:[],el:document.createElement("audio"),sound:function(n,e){function i(t){for(var n=[],e=t.length-1,i=0;e>=i;i++)n.push({start:t.start(i),end:t.end(i)});return n}function u(t){return t.split(".").pop()}function s(n,e){var i=r.createElement("source");i.src=e,t.types[u(e)]&&(i.type=t.types[u(e)]),n.appendChild(i)}e=e||{};var r=e.document||t.defaults.document,o=0,a=[],h={},l=t.isSupported();if(this.load=function(){return l?(this.sound.load(),this):this},this.play=function(){return l?(this.sound.play(),this):this},this.togglePlay=function(){return l?(this.sound.paused?this.sound.play():this.sound.pause(),this):this},this.pause=function(){return l?(this.sound.pause(),this):this},this.isPaused=function(){return l?this.sound.paused:null},this.stop=function(){return l?(this.setTime(0),this.sound.pause(),this):this},this.isEnded=function(){return l?this.sound.ended:null},this.loop=function(){return l?(this.sound.loop="loop",this.bind("ended.buzzloop",function(){this.currentTime=0,this.play()}),this):this},this.unloop=function(){return l?(this.sound.removeAttribute("loop"),this.unbind("ended.buzzloop"),this):this},this.mute=function(){return l?(this.sound.muted=!0,this):this},this.unmute=function(){return l?(this.sound.muted=!1,this):this},this.toggleMute=function(){return l?(this.sound.muted=!this.sound.muted,this):this},this.isMuted=function(){return l?this.sound.muted:null},this.setVolume=function(t){return l?(0>t&&(t=0),t>100&&(t=100),this.volume=t,this.sound.volume=t/100,this):this},this.getVolume=function(){return l?this.volume:this},this.increaseVolume=function(t){return this.setVolume(this.volume+(t||1))},this.decreaseVolume=function(t){return this.setVolume(this.volume-(t||1))},this.setTime=function(t){if(!l)return this;var n=!0;return this.whenReady(function(){n===!0&&(n=!1,this.sound.currentTime=t)}),this},this.getTime=function(){if(!l)return null;var n=Math.round(100*this.sound.currentTime)/100;return isNaN(n)?t.defaults.placeholder:n},this.setPercent=function(n){return l?this.setTime(t.fromPercent(n,this.sound.duration)):this},this.getPercent=function(){if(!l)return null;var n=Math.round(t.toPercent(this.sound.currentTime,this.sound.duration));return isNaN(n)?t.defaults.placeholder:n},this.setSpeed=function(t){return l?(this.sound.playbackRate=t,this):this},this.getSpeed=function(){return l?this.sound.playbackRate:null},this.getDuration=function(){if(!l)return null;var n=Math.round(100*this.sound.duration)/100;return isNaN(n)?t.defaults.placeholder:n},this.getPlayed=function(){return l?i(this.sound.played):null},this.getBuffered=function(){return l?i(this.sound.buffered):null},this.getSeekable=function(){return l?i(this.sound.seekable):null},this.getErrorCode=function(){return l&&this.sound.error?this.sound.error.code:0},this.getErrorMessage=function(){if(!l)return null;switch(this.getErrorCode()){case 1:return"MEDIA_ERR_ABORTED";case 2:return"MEDIA_ERR_NETWORK";case 3:return"MEDIA_ERR_DECODE";case 4:return"MEDIA_ERR_SRC_NOT_SUPPORTED";default:return null}},this.getStateCode=function(){return l?this.sound.readyState:null},this.getStateMessage=function(){if(!l)return null;switch(this.getStateCode()){case 0:return"HAVE_NOTHING";case 1:return"HAVE_METADATA";case 2:return"HAVE_CURRENT_DATA";case 3:return"HAVE_FUTURE_DATA";case 4:return"HAVE_ENOUGH_DATA";default:return null}},this.getNetworkStateCode=function(){return l?this.sound.networkState:null},this.getNetworkStateMessage=function(){if(!l)return null;switch(this.getNetworkStateCode()){case 0:return"NETWORK_EMPTY";case 1:return"NETWORK_IDLE";case 2:return"NETWORK_LOADING";case 3:return"NETWORK_NO_SOURCE";default:return null}},this.set=function(t,n){return l?(this.sound[t]=n,this):this},this.get=function(t){return l?t?this.sound[t]:this.sound:null},this.bind=function(t,n){if(!l)return this;t=t.split(" ");for(var e=this,i=function(t){n.call(e,t)},u=0;t.length>u;u++){var s=t[u],r=s;s=r.split(".")[0],a.push({idx:r,func:i}),this.sound.addEventListener(s,i,!0)}return this},this.unbind=function(t){if(!l)return this;t=t.split(" ");for(var n=0;t.length>n;n++)for(var e=t[n],i=e.split(".")[0],u=0;a.length>u;u++){var s=a[u].idx.split(".");(a[u].idx==e||s[1]&&s[1]==e.replace(".",""))&&(this.sound.removeEventListener(i,a[u].func,!0),a.splice(u,1))}return this},this.bindOnce=function(t,n){if(!l)return this;var e=this;return h[o++]=!1,this.bind(t+"."+o,function(){h[o]||(h[o]=!0,n.call(e)),e.unbind(t+"."+o)}),this},this.trigger=function(t){if(!l)return this;t=t.split(" ");for(var n=0;t.length>n;n++)for(var e=t[n],i=0;a.length>i;i++){var u=a[i].idx.split(".");if(a[i].idx==e||u[0]&&u[0]==e.replace(".","")){var s=r.createEvent("HTMLEvents");s.initEvent(u[0],!1,!0),this.sound.dispatchEvent(s)}}return this},this.fadeTo=function(n,e,i){function u(){setTimeout(function(){n>s&&n>o.volume?(o.setVolume(o.volume+=1),u()):s>n&&o.volume>n?(o.setVolume(o.volume-=1),u()):i instanceof Function&&i.apply(o)},r)}if(!l)return this;e instanceof Function?(i=e,e=t.defaults.duration):e=e||t.defaults.duration;var s=this.volume,r=e/Math.abs(s-n),o=this;return this.play(),this.whenReady(function(){u()}),this},this.fadeIn=function(t,n){return l?this.setVolume(0).fadeTo(100,t,n):this},this.fadeOut=function(t,n){return l?this.fadeTo(0,t,n):this},this.fadeWith=function(t,n){return l?(this.fadeOut(n,function(){this.stop()}),t.play().fadeIn(n),this):this},this.whenReady=function(t){if(!l)return null;var n=this;0===this.sound.readyState?this.bind("canplay.buzzwhenready",function(){t.call(n)}):t.call(n)},l&&n){for(var d in t.defaults)t.defaults.hasOwnProperty(d)&&(e[d]=e[d]||t.defaults[d]);if(this.sound=r.createElement("audio"),n instanceof Array)for(var c in n)n.hasOwnProperty(c)&&s(this.sound,n[c]);else if(e.formats.length)for(var f in e.formats)e.formats.hasOwnProperty(f)&&s(this.sound,n+"."+e.formats[f]);else s(this.sound,n);e.loop&&this.loop(),e.autoplay&&(this.sound.autoplay="autoplay"),this.sound.preload=e.preload===!0?"auto":e.preload===!1?"none":e.preload,this.setVolume(e.volume),t.sounds.push(this)}},group:function(t){function n(){for(var n=e(null,arguments),i=n.shift(),u=0;t.length>u;u++)t[u][i].apply(t[u],n)}function e(t,n){return t instanceof Array?t:Array.prototype.slice.call(n)}t=e(t,arguments),this.getSounds=function(){return t},this.add=function(n){n=e(n,arguments);for(var i=0;n.length>i;i++)t.push(n[i])},this.remove=function(n){n=e(n,arguments);for(var i=0;n.length>i;i++)for(var u=0;t.length>u;u++)if(t[u]==n[i]){t.splice(u,1);break}},this.load=function(){return n("load"),this},this.play=function(){return n("play"),this},this.togglePlay=function(){return n("togglePlay"),this},this.pause=function(t){return n("pause",t),this},this.stop=function(){return n("stop"),this},this.mute=function(){return n("mute"),this},this.unmute=function(){return n("unmute"),this},this.toggleMute=function(){return n("toggleMute"),this},this.setVolume=function(t){return n("setVolume",t),this},this.increaseVolume=function(t){return n("increaseVolume",t),this},this.decreaseVolume=function(t){return n("decreaseVolume",t),this},this.loop=function(){return n("loop"),this},this.unloop=function(){return n("unloop"),this},this.setTime=function(t){return n("setTime",t),this},this.set=function(t,e){return n("set",t,e),this},this.bind=function(t,e){return n("bind",t,e),this},this.unbind=function(t){return n("unbind",t),this},this.bindOnce=function(t,e){return n("bindOnce",t,e),this},this.trigger=function(t){return n("trigger",t),this},this.fade=function(t,e,i,u){return n("fade",t,e,i,u),this},this.fadeIn=function(t,e){return n("fadeIn",t,e),this},this.fadeOut=function(t,e){return n("fadeOut",t,e),this}},all:function(){return new t.group(t.sounds)},isSupported:function(){return!!t.el.canPlayType},isOGGSupported:function(){return!!t.el.canPlayType&&t.el.canPlayType('audio/ogg; codecs="vorbis"')},isWAVSupported:function(){return!!t.el.canPlayType&&t.el.canPlayType('audio/wav; codecs="1"')},isMP3Supported:function(){return!!t.el.canPlayType&&t.el.canPlayType("audio/mpeg;")},isAACSupported:function(){return!!t.el.canPlayType&&(t.el.canPlayType("audio/x-m4a;")||t.el.canPlayType("audio/aac;"))},toTimer:function(t,n){var e,i,u;return e=Math.floor(t/3600),e=isNaN(e)?"--":e>=10?e:"0"+e,i=n?Math.floor(t/60%60):Math.floor(t/60),i=isNaN(i)?"--":i>=10?i:"0"+i,u=Math.floor(t%60),u=isNaN(u)?"--":u>=10?u:"0"+u,n?e+":"+i+":"+u:i+":"+u},fromTimer:function(t){var n=(""+t).split(":");return n&&3==n.length&&(t=3600*parseInt(n[0],10)+60*parseInt(n[1],10)+parseInt(n[2],10)),n&&2==n.length&&(t=60*parseInt(n[0],10)+parseInt(n[1],10)),t},toPercent:function(t,n,e){var i=Math.pow(10,e||0);return Math.round(100*t/n*i)/i},fromPercent:function(t,n,e){var i=Math.pow(10,e||0);return Math.round(n/100*t*i)/i}};return t});
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';
var mClick = new buzz.sound( "/sounds/click", {
    formats: ["mp3"]
});
var mDice = new buzz.sound( "/sounds/dice", {
    formats: ["mp3"]
});

var mWin = new buzz.sound( "/sounds/win", {
    formats: ["mp3"]
});
var mLose = new buzz.sound( "/sounds/lose", {
    formats: ["mp3"]
});

function MakeSound(id){


    if (id == "click"){
        //mClick.play();
    }
    if (id == "dice"){
        //mDice.play();
    }

    if (id == "win"){
        //mWin.play();
    }
    if (id == "lose"){
        //mLose.play();
    }


}

InitLang();