import firebase from '@firebase/app';
(function() {
    var g, aa = aa || {},
        k = this;

    function l(a) { return "string" == typeof a }

    function ba(a) { return "boolean" == typeof a }

    function ca() {}

    function da(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ea(a) { return null === a }

    function fa(a) { return "array" == da(a) }

    function ha(a) { var b = da(a); return "array" == b || "object" == b && "number" == typeof a.length }

    function n(a) { return "function" == da(a) }

    function q(a) { var b = typeof a; return "object" == b && null != a || "function" == b }
    var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ja = 0;

    function ka(a, b, c) { return a.call.apply(a.bind, arguments) }

    function ma(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() { return a.apply(b, arguments) }
    }

    function r(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r = ka : r = ma; return r.apply(null, arguments) }

    function na(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var oa = Date.now || function() { return +new Date };

    function t(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ob = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ed = function(a, c, f) { for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e]; return b.prototype[c].apply(a, d) }
    };

    function pa(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }

    function qa(a) { if (!a) return !1; try { return !!a.$goog_Thenable } catch (b) { return !1 } };

    function u(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, u);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    t(u, Error);
    u.prototype.name = "CustomError";

    function ra(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        u.call(this, c + a[d])
    }
    t(ra, u);
    ra.prototype.name = "AssertionError";

    function sa(a, b) { throw new ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)); };

    function ta(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null
    }
    ta.prototype.get = function() {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.c();
        return a
    };

    function ua(a, b) {
        a.f(b);
        100 > a.b && (a.b++, b.next = a.a, a.a = b)
    };

    function va() { this.b = this.a = null }
    var xa = new ta(function() { return new wa }, function(a) { a.reset() });
    va.prototype.add = function(a, b) {
        var c = xa.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    };

    function ya() {
        var a = za,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b
    }

    function wa() { this.next = this.b = this.a = null }
    wa.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    };
    wa.prototype.reset = function() { this.next = this.b = this.a = null };
    var Aa = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) {
            if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        v = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var d = a.length, e = l(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a) };

    function Ba(a, b) {
        var c = a.length,
            d = l(a) ? a.split("") : a;
        for (--c; 0 <= c; --c) c in d && b.call(void 0, d[c], c, a)
    }
    var Ca = Array.prototype.map ? function(a, b) { return Array.prototype.map.call(a, b, void 0) } : function(a, b) { for (var c = a.length, d = Array(c), e = l(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d },
        Da = Array.prototype.some ? function(a, b) { return Array.prototype.some.call(a, b, void 0) } : function(a, b) {
            for (var c = a.length, d = l(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Ea(a) {
        a: {
            var b = Fa;
            for (var c = a.length, d = l(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) { b = e; break a }
            b = -1
        }
        return 0 > b ? null : l(a) ? a.charAt(b) : a[b]
    }

    function Ga(a, b) { return 0 <= Aa(a, b) }

    function Ha(a, b) {
        b = Aa(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function w(a, b) {
        var c = 0;
        Ba(a, function(d, e) { b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++ })
    }

    function Ia(a) { return Array.prototype.concat.apply([], arguments) }

    function Ja(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] };

    function Ka(a, b) { for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift(); return d + c.join("%s") }
    var La = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

    function Ma(a) { if (!Na.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Oa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Pa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Qa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ra, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Sa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ta, "&#0;")); return a }
    var Oa = /&/g,
        Pa = /</g,
        Qa = />/g,
        Ra = /"/g,
        Sa = /'/g,
        Ta = /\x00/g,
        Na = /[\x00&<>"']/;

    function y(a, b) { return -1 != a.indexOf(b) }

    function Ua(a, b) { return a < b ? -1 : a > b ? 1 : 0 };
    var Va;
    a: {
        var Wa = k.navigator;
        if (Wa) { var Xa = Wa.userAgent; if (Xa) { Va = Xa; break a } }
        Va = ""
    }

    function z(a) { return y(Va, a) };

    function Ya(a, b) { for (var c in a) b.call(void 0, a[c], c, a) }

    function Za(a) { for (var b in a) return !1; return !0 }

    function $a(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function bb(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < ab.length; f++) c = ab[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } };

    function cb(a) { k.setTimeout(function() { throw a; }, 0) }
    var db;

    function eb() {
        var a = k.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = r(function(a) {
                if (("*" == d || a.origin == d) && a.data ==
                    c) this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = { postMessage: function() { b.postMessage(c, d) } }
        });
        if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var a = c.wb;
                    c.wb = null;
                    a()
                }
            };
            return function(a) {
                d.next = { wb: a };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function(a) { k.setTimeout(a, 0) }
    };

    function fb(a, b) {
        hb || ib();
        jb || (hb(), jb = !0);
        za.add(a, b)
    }
    var hb;

    function ib() {
        if (k.Promise && k.Promise.resolve) {
            var a = k.Promise.resolve(void 0);
            hb = function() { a.then(kb) }
        } else hb = function() { var a = kb;!n(k.setImmediate) || k.Window && k.Window.prototype && !z("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (db || (db = eb()), db(a)) : k.setImmediate(a) }
    }
    var jb = !1,
        za = new va;

    function kb() {
        for (var a; a = ya();) {
            try { a.a.call(a.b) } catch (b) { cb(b) }
            ua(xa, a)
        }
        jb = !1
    };

    function A(a, b) {
        this.a = lb;
        this.i = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != ca) try {
            var c = this;
            a.call(b, function(a) { mb(c, nb, a) }, function(a) {
                if (!(a instanceof ob)) try { if (a instanceof Error) throw a; throw Error("Promise rejected."); } catch (e) {}
                mb(c, pb, a)
            })
        } catch (d) { mb(this, pb, d) }
    }
    var lb = 0,
        nb = 2,
        pb = 3;

    function qb() {
        this.next = this.f = this.b = this.g = this.a = null;
        this.c = !1
    }
    qb.prototype.reset = function() {
        this.f = this.b = this.g = this.a = null;
        this.c = !1
    };
    var rb = new ta(function() { return new qb }, function(a) { a.reset() });

    function sb(a, b, c) {
        var d = rb.get();
        d.g = a;
        d.b = b;
        d.f = c;
        return d
    }

    function B(a) {
        if (a instanceof A) return a;
        var b = new A(ca);
        mb(b, nb, a);
        return b
    }

    function C(a) { return new A(function(b, c) { c(a) }) }

    function tb(a, b, c) { ub(a, b, c, null) || fb(na(b, a)) }

    function vb(a) {
        return new A(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(a, c) {
                        d--;
                        e[a] = c;
                        0 == d && b(e)
                    }, h = function(a) { c(a) }, m = 0, p; m < a.length; m++) p = a[m], tb(p, na(f, m), h);
            else b(e)
        })
    }

    function wb(a) {
        return new A(function(b) {
            var c = a.length,
                d = [];
            if (c)
                for (var e = function(a, e, f) {
                        c--;
                        d[a] = e ? { Db: !0, value: f } : { Db: !1, reason: f };
                        0 == c && b(d)
                    }, f = 0, h; f < a.length; f++) h = a[f], tb(h, na(e, f, !0), na(e, f, !1));
            else b(d)
        })
    }
    A.prototype.then = function(a, b, c) { return xb(this, n(a) ? a : null, n(b) ? b : null, c) };
    pa(A);
    g = A.prototype;
    g.ia = function(a, b) {
        a = sb(a, a, b);
        a.c = !0;
        yb(this, a);
        return this
    };
    g.s = function(a, b) { return xb(this, null, a, b) };
    g.cancel = function(a) {
        this.a == lb && fb(function() {
            var b = new ob(a);
            zb(this, b)
        }, this)
    };

    function zb(a, b) {
        if (a.a == lb)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, h = c.b; h && (h.c || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
                    e && (c.a == lb && 1 == d ? zb(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Ab(c), Bb(c, e, pb, b)))
                }
                a.c = null
            } else mb(a, pb, b)
    }

    function yb(a, b) {
        a.b || a.a != nb && a.a != pb || Cb(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }

    function xb(a, b, c, d) {
        var e = sb(null, null, null);
        e.a = new A(function(a, h) {
            e.g = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (x) { h(x) }
            } : a;
            e.b = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    void 0 === e && b instanceof ob ? h(b) : a(e)
                } catch (x) { h(x) }
            } : h
        });
        e.a.c = a;
        yb(a, e);
        return e.a
    }
    g.Nc = function(a) {
        this.a = lb;
        mb(this, nb, a)
    };
    g.Oc = function(a) {
        this.a = lb;
        mb(this, pb, a)
    };

    function mb(a, b, c) { a.a == lb && (a === c && (b = pb, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, ub(c, a.Nc, a.Oc, a) || (a.i = c, a.a = b, a.c = null, Cb(a), b != pb || c instanceof ob || Db(a, c))) }

    function ub(a, b, c, d) {
        if (a instanceof A) return yb(a, sb(b || ca, c || null, d)), !0;
        if (qa(a)) return a.then(b, c, d), !0;
        if (q(a)) try { var e = a.then; if (n(e)) return Eb(a, e, b, c, d), !0 } catch (f) { return c.call(d, f), !0 }
        return !1
    }

    function Eb(a, b, c, d, e) {
        function f(a) { m || (m = !0, d.call(e, a)) }

        function h(a) { m || (m = !0, c.call(e, a)) }
        var m = !1;
        try { b.call(a, h, f) } catch (p) { f(p) }
    }

    function Cb(a) { a.h || (a.h = !0, fb(a.Yb, a)) }

    function Ab(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.f = null);
        return b
    }
    g.Yb = function() {
        for (var a; a = Ab(this);) Bb(this, a, this.a, this.i);
        this.h = !1
    };

    function Bb(a, b, c, d) {
        if (c == pb && b.b && !b.c)
            for (; a && a.g; a = a.c) a.g = !1;
        if (b.a) b.a.c = null, Fb(b, c, d);
        else try { b.c ? b.g.call(b.f) : Fb(b, c, d) } catch (e) { Gb.call(null, e) }
        ua(rb, b)
    }

    function Fb(a, b, c) { b == nb ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c) }

    function Db(a, b) {
        a.g = !0;
        fb(function() { a.g && Gb.call(null, b) })
    }
    var Gb = cb;

    function ob(a) { u.call(this, a) }
    t(ob, u);
    ob.prototype.name = "cancel";

    function Hb() {
        0 != Ib && (Jb[this[ia] || (this[ia] = ++ja)] = this);
        this.qa = this.qa;
        this.ja = this.ja
    }
    var Ib = 0,
        Jb = {};
    Hb.prototype.qa = !1;

    function Kb(a) {
        if (!a.qa && (a.qa = !0, a.va(), 0 != Ib)) {
            var b = a[ia] || (a[ia] = ++ja);
            if (0 != Ib && a.ja && 0 < a.ja.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
            delete Jb[b]
        }
    }
    Hb.prototype.va = function() {
        if (this.ja)
            for (; this.ja.length;) this.ja.shift()()
    };

    function Lb(a) { Lb[" "](a); return a }
    Lb[" "] = ca;

    function Mb(a, b) { var c = Nb; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
    var Ob = z("Opera"),
        Pb = z("Trident") || z("MSIE"),
        Qb = z("Edge"),
        Rb = Qb || Pb,
        Sb = z("Gecko") && !(y(Va.toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        Tb = y(Va.toLowerCase(), "webkit") && !z("Edge");

    function Ub() { var a = k.document; return a ? a.documentMode : void 0 }
    var Vb;
    a: {
        var Wb = "",
            Xb = function() { var a = Va; if (Sb) return /rv:([^\);]+)(\)|;)/.exec(a); if (Qb) return /Edge\/([\d\.]+)/.exec(a); if (Pb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Tb) return /WebKit\/(\S+)/.exec(a); if (Ob) return /(?:Version)[ \/]?(\S+)/.exec(a) }();Xb && (Wb = Xb ? Xb[1] : "");
        if (Pb) { var Yb = Ub(); if (null != Yb && Yb > parseFloat(Wb)) { Vb = String(Yb); break a } }
        Vb = Wb
    }
    var Nb = {};

    function Zb(a) {
        return Mb(a, function() {
            for (var b = 0, c = La(String(Vb)).split("."), d = La(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || "",
                    m = d[f] || "";
                do {
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                    if (0 == h[0].length && 0 == m[0].length) break;
                    b = Ua(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || Ua(0 == h[2].length, 0 == m[2].length) || Ua(h[2], m[2]);
                    h = h[3];
                    m = m[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var $b;
    var ac = k.document;
    $b = ac && Pb ? Ub() || ("CSS1Compat" == ac.compatMode ? parseInt(Vb, 10) : 5) : void 0;
    var bc = Object.freeze || function(a) { return a };
    var cc = !Pb || 9 <= Number($b),
        dc = Pb && !Zb("9"),
        ec = function() {
            if (!k.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
            k.addEventListener("test", ca, b);
            k.removeEventListener("test", ca, b);
            return a
        }();

    function D(a, b) {
        this.type = a;
        this.b = this.target = b;
        this.Kb = !0
    }
    D.prototype.preventDefault = function() { this.Kb = !1 };

    function fc(a, b) {
        D.call(this, a ? a.type : "");
        this.relatedTarget = this.b = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.a = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;
            if (b = a.relatedTarget) {
                if (Sb) {
                    a: {
                        try { Lb(b.nodeName); var e = !0; break a } catch (f) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else "mouseover" == c ? b =
                a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey =
                a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = l(a.pointerType) ? a.pointerType : gc[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    t(fc, D);
    var gc = bc({ 2: "touch", 3: "pen", 4: "mouse" });
    fc.prototype.preventDefault = function() {
        fc.ob.preventDefault.call(this);
        var a = this.a;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, dc) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {}
    };
    fc.prototype.f = function() { return this.a };
    var hc = "closure_listenable_" + (1E6 * Math.random() | 0),
        ic = 0;

    function jc(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.La = e;
        this.key = ++ic;
        this.oa = this.Ia = !1
    }

    function kc(a) {
        a.oa = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.La = null
    };

    function lc(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    lc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var h = mc(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Ia = !1)) : (b = new jc(b, this.src, f, !!d, e), b.Ia = c, a.push(b));
        return b
    };

    function nc(a, b) {
        var c = b.type;
        c in a.a && Ha(a.a[c], b) && (kc(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    }

    function mc(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.oa && f.listener == b && f.capture == !!c && f.La == d) return e } return -1 };
    var oc = "closure_lm_" + (1E6 * Math.random() | 0),
        pc = {},
        qc = 0;

    function rc(a, b, c, d, e) {
        if (d && d.once) sc(a, b, c, d, e);
        else if (fa(b))
            for (var f = 0; f < b.length; f++) rc(a, b[f], c, d, e);
        else c = tc(c), a && a[hc] ? uc(a, b, c, q(d) ? !!d.capture : !!d, e) : vc(a, b, c, !1, d, e)
    }

    function vc(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = q(e) ? !!e.capture : !!e,
            m = wc(a);
        m || (a[oc] = m = new lc(a));
        c = m.add(b, c, d, h, f);
        if (!c.proxy) {
            d = xc();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) ec || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(yc(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            qc++
        }
    }

    function xc() {
        var a = zc,
            b = cc ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c };
        return b
    }

    function sc(a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++) sc(a, b[f], c, d, e);
        else c = tc(c), a && a[hc] ? Ac(a, b, c, q(d) ? !!d.capture : !!d, e) : vc(a, b, c, !0, d, e)
    }

    function E(a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++) E(a, b[f], c, d, e);
        else(d = q(d) ? !!d.capture : !!d, c = tc(c), a && a[hc]) ? (a = a.l, b = String(b).toString(), b in a.a && (f = a.a[b], c = mc(f, c, d, e), -1 < c && (kc(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = wc(a)) && (b = a.a[b.toString()], a = -1, b && (a = mc(b, c, d, e)), (c = -1 < a ? b[a] : null) && Bc(c))
    }

    function Bc(a) {
        if ("number" != typeof a && a && !a.oa) {
            var b = a.src;
            if (b && b[hc]) nc(b.l, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(yc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                qc--;
                (c = wc(b)) ? (nc(c, a), 0 == c.b && (c.src = null, b[oc] = null)) : kc(a)
            }
        }
    }

    function yc(a) { return a in pc ? pc[a] : pc[a] = "on" + a }

    function Cc(a, b, c, d) {
        var e = !0;
        if (a = wc(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.oa && (f = Dc(f, d), e = e && !1 !== f)
                }
        return e
    }

    function Dc(a, b) {
        var c = a.listener,
            d = a.La || a.src;
        a.Ia && Bc(a);
        return c.call(d, b)
    }

    function zc(a, b) {
        if (a.oa) return !0;
        if (!cc) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = k, d = 0; d < b.length; d++)
                    if (c = c[b[d]], null == c) { b = null; break a }
                b = c
            }
            d = b;
            b = new fc(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode) try { d.keyCode = -1; break a } catch (h) { e = !0 }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.b; e; e = e.parentNode) d.push(e);a = a.type;
                for (e = d.length - 1; 0 <= e; e--) {
                    b.b = d[e];
                    var f = Cc(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; e < d.length; e++) b.b = d[e],
                f = Cc(d[e], a, !1, b),
                c = c && f
            }
            return c
        }
        return Dc(a,
            new fc(b, this))
    }

    function wc(a) { a = a[oc]; return a instanceof lc ? a : null }
    var Ec = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function tc(a) {
        if (n(a)) return a;
        a[Ec] || (a[Ec] = function(b) { return a.handleEvent(b) });
        return a[Ec]
    };

    function F() {
        Hb.call(this);
        this.l = new lc(this);
        this.Rb = this;
        this.Va = null
    }
    t(F, Hb);
    F.prototype[hc] = !0;
    F.prototype.addEventListener = function(a, b, c, d) { rc(this, a, b, c, d) };
    F.prototype.removeEventListener = function(a, b, c, d) { E(this, a, b, c, d) };
    F.prototype.dispatchEvent = function(a) {
        var b, c = this.Va;
        if (c)
            for (b = []; c; c = c.Va) b.push(c);
        c = this.Rb;
        var d = a.type || a;
        if (l(a)) a = new D(a, c);
        else if (a instanceof D) a.target = a.target || c;
        else {
            var e = a;
            a = new D(d, c);
            bb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var h = a.b = b[f];
                e = Fc(h, d, !0, a) && e
            }
        h = a.b = c;
        e = Fc(h, d, !0, a) && e;
        e = Fc(h, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) h = a.b = b[f], e = Fc(h, d, !1, a) && e;
        return e
    };
    F.prototype.va = function() {
        F.ob.va.call(this);
        if (this.l) {
            var a = this.l,
                b = 0,
                c;
            for (c in a.a) {
                for (var d = a.a[c], e = 0; e < d.length; e++) ++b, kc(d[e]);
                delete a.a[c];
                a.b--
            }
        }
        this.Va = null
    };

    function uc(a, b, c, d, e) { a.l.add(String(b), c, !1, d, e) }

    function Ac(a, b, c, d, e) { a.l.add(String(b), c, !0, d, e) }

    function Fc(a, b, c, d) {
        b = a.l.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.oa && h.capture == c) {
                var m = h.listener,
                    p = h.La || h.src;
                h.Ia && nc(a.l, h);
                e = !1 !== m.call(p, d) && e
            }
        }
        return e && 0 != d.Kb
    };

    function Gc(a, b, c) {
        if (n(a)) c && (a = r(a, c));
        else if (a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0)
    }

    function Hc(a) { var b = null; return (new A(function(c, d) { b = Gc(function() { c(void 0) }, a); - 1 == b && d(Error("Failed to schedule timer.")) })).s(function(a) { k.clearTimeout(b); throw a; }) };

    function Ic(a) {
        if (a.S && "function" == typeof a.S) return a.S();
        if (l(a)) return a.split("");
        if (ha(a)) { for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]); return b }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Jc(a) {
        if (a.U && "function" == typeof a.U) return a.U();
        if (!a.S || "function" != typeof a.S) {
            if (ha(a) || l(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            b = [];
            c = 0;
            for (var d in a) b[c++] = d;
            return b
        }
    }

    function Kc(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (ha(a) || l(a)) v(a, b, void 0);
        else
            for (var c = Jc(a), d = Ic(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
    };

    function Lc(a, b) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var c = arguments.length;
        if (1 < c) { if (c % 2) throw Error("Uneven number of arguments"); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else if (a)
            if (a instanceof Lc)
                for (c = a.U(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    g = Lc.prototype;
    g.S = function() { Mc(this); for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]); return a };
    g.U = function() { Mc(this); return this.a.concat() };
    g.clear = function() {
        this.b = {};
        this.c = this.a.length = 0
    };

    function Mc(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Nc(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], Nc(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }
    g.get = function(a, b) { return Nc(this.b, a) ? this.b[a] : b };
    g.set = function(a, b) {
        Nc(this.b, a) || (this.c++, this.a.push(a));
        this.b[a] = b
    };
    g.forEach = function(a, b) {
        for (var c = this.U(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };

    function Nc(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };
    var Oc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Pc(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    };

    function Qc(a, b) {
        this.b = this.l = this.c = "";
        this.i = null;
        this.h = this.g = "";
        this.f = !1;
        if (a instanceof Qc) {
            this.f = void 0 !== b ? b : a.f;
            Rc(this, a.c);
            this.l = a.l;
            this.b = a.b;
            Sc(this, a.i);
            this.g = a.g;
            b = a.a;
            var c = new Tc;
            c.c = b.c;
            b.a && (c.a = new Lc(b.a), c.b = b.b);
            Uc(this, c);
            this.h = a.h
        } else a && (c = String(a).match(Oc)) ? (this.f = !!b, Rc(this, c[1] || "", !0), this.l = Vc(c[2] || ""), this.b = Vc(c[3] || "", !0), Sc(this, c[4]), this.g = Vc(c[5] || "", !0), Uc(this, c[6] || "", !0), this.h = Vc(c[7] || "")) : (this.f = !!b, this.a = new Tc(null, this.f))
    }
    Qc.prototype.toString = function() {
        var a = [],
            b = this.c;
        b && a.push(Wc(b, Xc, !0), ":");
        var c = this.b;
        if (c || "file" == b) a.push("//"), (b = this.l) && a.push(Wc(b, Xc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.i, null != c && a.push(":", String(c));
        if (c = this.g) this.b && "/" != c.charAt(0) && a.push("/"), a.push(Wc(c, "/" == c.charAt(0) ? Yc : Zc, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.h) && a.push("#", Wc(c, $c));
        return a.join("")
    };

    function Rc(a, b, c) {
        a.c = c ? Vc(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }

    function Sc(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.i = b
        } else a.i = null
    }

    function Uc(a, b, c) { b instanceof Tc ? (a.a = b, ad(a.a, a.f)) : (c || (b = Wc(b, bd)), a.a = new Tc(b, a.f)) }

    function G(a, b, c) { a.a.set(b, c) }

    function cd(a, b) { return a.a.get(b) }

    function dd(a) { return a instanceof Qc ? new Qc(a) : new Qc(a, void 0) }

    function ed(a, b) {
        var c = new Qc(null, void 0);
        Rc(c, "https");
        a && (c.b = a);
        b && (c.g = b);
        return c
    }

    function Vc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" }

    function Wc(a, b, c) { return l(a) ? (a = encodeURI(a).replace(b, fd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null }

    function fd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) }
    var Xc = /[#\/\?@]/g,
        Zc = /[#\?:]/g,
        Yc = /[#\?]/g,
        bd = /[#\?@]/g,
        $c = /#/g;

    function Tc(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!b
    }

    function gd(a) { a.a || (a.a = new Lc, a.b = 0, a.c && Pc(a.c, function(b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c) })) }

    function hd(a) {
        var b = Jc(a);
        if ("undefined" == typeof b) throw Error("Keys are undefined");
        var c = new Tc(null, void 0);
        a = Ic(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = a[d];
            fa(f) ? id(c, e, f) : c.add(e, f)
        }
        return c
    }
    g = Tc.prototype;
    g.add = function(a, b) {
        gd(this);
        this.c = null;
        a = jd(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b += 1;
        return this
    };

    function kd(a, b) {
        gd(a);
        b = jd(a, b);
        Nc(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, Nc(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a)))
    }
    g.clear = function() {
        this.a = this.c = null;
        this.b = 0
    };

    function ld(a, b) {
        gd(a);
        b = jd(a, b);
        return Nc(a.a.b, b)
    }
    g.forEach = function(a, b) {
        gd(this);
        this.a.forEach(function(c, d) { v(c, function(c) { a.call(b, c, d, this) }, this) }, this)
    };
    g.U = function() {
        gd(this);
        for (var a = this.a.S(), b = this.a.U(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.S = function(a) {
        gd(this);
        var b = [];
        if (l(a)) ld(this, a) && (b = Ia(b, this.a.get(jd(this, a))));
        else { a = this.a.S(); for (var c = 0; c < a.length; c++) b = Ia(b, a[c]) }
        return b
    };
    g.set = function(a, b) {
        gd(this);
        this.c = null;
        a = jd(this, a);
        ld(this, a) && (this.b -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.b += 1;
        return this
    };
    g.get = function(a, b) { a = a ? this.S(a) : []; return 0 < a.length ? String(a[0]) : b };

    function id(a, b, c) {
        kd(a, b);
        0 < c.length && (a.c = null, a.a.set(jd(a, b), Ja(c)), a.b += c.length)
    }
    g.toString = function() {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.U(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.S(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        }
        return this.c = a.join("&")
    };

    function jd(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b
    }

    function ad(a, b) {
        b && !a.f && (gd(a), a.c = null, a.a.forEach(function(a, b) {
            var c = b.toLowerCase();
            b != c && (kd(this, b), id(this, c, a))
        }, a));
        a.f = b
    };
    var md = !Pb || 9 <= Number($b);

    function nd() {
        this.a = "";
        this.b = od
    }
    nd.prototype.na = !0;
    nd.prototype.ma = function() { return this.a };
    nd.prototype.toString = function() { return "Const{" + this.a + "}" };

    function pd(a) {
        if (a instanceof nd && a.constructor === nd && a.b === od) return a.a;
        sa("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }
    var od = {};

    function qd(a) {
        var b = new nd;
        b.a = a;
        return b
    }
    qd("");

    function rd() {
        this.a = "";
        this.b = sd
    }
    rd.prototype.na = !0;
    rd.prototype.ma = function() { return this.a };
    rd.prototype.toString = function() { return "TrustedResourceUrl{" + this.a + "}" };

    function td(a) {
        if (a instanceof rd && a.constructor === rd && a.b === sd) return a.a;
        sa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + da(a));
        return "type_error:TrustedResourceUrl"
    }

    function ud(a, b) {
        var c = pd(a);
        if (!vd.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(wd, function(a, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            a = b[e];
            return a instanceof nd ? pd(a) : encodeURIComponent(String(a))
        });
        return xd(a)
    }
    var wd = /%{(\w+)}/g,
        vd = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,
        sd = {};

    function xd(a) {
        var b = new rd;
        b.a = a;
        return b
    };

    function yd() {
        this.a = "";
        this.b = zd
    }
    yd.prototype.na = !0;
    yd.prototype.ma = function() { return this.a };
    yd.prototype.toString = function() { return "SafeUrl{" + this.a + "}" };

    function Ad(a) {
        if (a instanceof yd && a.constructor === yd && a.b === zd) return a.a;
        sa("expected object of type SafeUrl, got '" + a + "' of type " + da(a));
        return "type_error:SafeUrl"
    }
    var Bd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Cd(a) {
        if (a instanceof yd) return a;
        a = a.na ? a.ma() : String(a);
        Bd.test(a) || (a = "about:invalid#zClosurez");
        return Dd(a)
    }
    var zd = {};

    function Dd(a) {
        var b = new yd;
        b.a = a;
        return b
    }
    Dd("about:blank");

    function Ed() {
        this.a = "";
        this.b = Fd
    }
    Ed.prototype.na = !0;
    Ed.prototype.ma = function() { return this.a };
    Ed.prototype.toString = function() { return "SafeHtml{" + this.a + "}" };

    function Gd(a) {
        if (a instanceof Ed && a.constructor === Ed && a.b === Fd) return a.a;
        sa("expected object of type SafeHtml, got '" + a + "' of type " + da(a));
        return "type_error:SafeHtml"
    }
    var Fd = {};

    function Hd(a) {
        var b = new Ed;
        b.a = a;
        return b
    }
    Hd("<!DOCTYPE html>");
    Hd("");
    Hd("<br>");

    function Id(a) { var b = document; return l(a) ? b.getElementById(a) : a }

    function Jd(a, b) { Ya(b, function(b, d) { b && b.na && (b = b.ma()); "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Kd.hasOwnProperty(d) ? a.setAttribute(Kd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b }) }
    var Kd = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

    function Ld(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            h = d[1];
        if (!md && h && (h.name || h.type)) {
            f = ["<", f];
            h.name && f.push(' name="', Ma(h.name), '"');
            if (h.type) {
                f.push(' type="', Ma(h.type), '"');
                var m = {};
                bb(m, h);
                delete m.type;
                h = m
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        h && (l(h) ? f.className = h : fa(h) ? f.className = h.join(" ") : Jd(f, h));
        2 < d.length && Md(e, f, d);
        return f
    }

    function Md(a, b, c) {
        function d(c) { c && b.appendChild(l(c) ? a.createTextNode(c) : c) }
        for (var e = 2; e < c.length; e++) { var f = c[e];!ha(f) || q(f) && 0 < f.nodeType ? d(f) : v(Nd(f) ? Ja(f) : f, d) }
    }

    function Nd(a) { if (a && "number" == typeof a.length) { if (q(a)) return "function" == typeof a.item || "string" == typeof a.item; if (n(a)) return "function" == typeof a.item } return !1 };

    function Od(a) {
        var b = [];
        Pd(new Qd, a, b);
        return b.join("")
    }

    function Qd() {}

    function Pd(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (fa(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Pd(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Rd(d, c), c.push(":"), Pd(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Rd(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) &&
                        !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Sd = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        Td = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Rd(a, b) {
        b.push('"', a.replace(Td, function(a) {
            var b = Sd[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Sd[a] = b);
            return b
        }), '"')
    };

    function Ud() { var a = H(); return Pb && !!$b && 11 == $b || /Edge\/\d+/.test(a) }

    function Vd() { return k.window && k.window.location.href || self && self.location && self.location.href || "" }

    function Wd(a, b) {
        b = b || k.window;
        var c = "about:blank";
        a && (c = Ad(Cd(a)));
        b.location.href = c
    }

    function Xd(a, b) {
        var c = [],
            d;
        for (d in a) d in b ? typeof a[d] != typeof b[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < Xd(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
        for (d in b) d in a || c.push(d);
        return c
    }

    function Yd() {
        var a = H();
        a = Zd(a) != $d ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
        return a && 30 > a ? !1 : !Pb || !$b || 9 < $b
    }

    function ae(a) { a = (a || H()).toLowerCase(); return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1 }

    function be(a) { a = a || k.window; try { a.close() } catch (b) {} }

    function ce(a, b, c) {
        var d = Math.floor(1E9 * Math.random()).toString();
        b = b || 500;
        c = c || 600;
        var e = (window.screen.availHeight - c) / 2,
            f = (window.screen.availWidth - b) / 2;
        b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 };
        c = H().toLowerCase();
        d && (b.target = d, y(c, "crios/") && (b.target = "_blank"));
        Zd(H()) == de && (a = a || "http://localhost", b.scrollbars = !0);
        c = a || "";
        (a = b) || (a = {});
        d = window;
        b = c instanceof yd ? c : Cd("undefined" != typeof c.href ? c.href : String(c));
        c = a.target || c.target;
        e = [];
        for (h in a) switch (h) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(h + "=" + a[h]);
                break;
            case "target":
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(h + "=" + (a[h] ? 1 : 0))
        }
        var h = e.join(",");
        (z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c ? (h = d.document.createElement("A"), b instanceof yd || b instanceof yd || (b = b.na ? b.ma() : String(b), Bd.test(b) || (b = "about:invalid#zClosurez"), b = Dd(b)), h.href = Ad(b), h.setAttribute("target", c), a.noreferrer &&
            h.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, d, 1), h.dispatchEvent(a), h = {}) : a.noreferrer ? (h = d.open("", c, h), a = Ad(b), h && (Rb && y(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), h.opener = null, qd("b/12014412, meta tag with sanitized URL"), a = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ma(a) + '">', a = Hd(a), h.document.write(Gd(a)), h.document.close())) : (h = d.open(Ad(b), c, h)) && a.noopener && (h.opener = null);
        if (h) try { h.focus() } catch (m) {}
        return h
    }

    function ee(a) {
        return new A(function(b) {
            function c() {
                Hc(2E3).then(function() {
                    if (!a || a.closed) b();
                    else return c()
                })
            }
            return c()
        })
    }
    var fe = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    function ge() { var a = null; return (new A(function(b) { "complete" == k.document.readyState ? b() : (a = function() { b() }, sc(window, "load", a)) })).s(function(b) { E(window, "load", a); throw b; }) }

    function he() {
        return ie(void 0) ? ge().then(function() {
            return new A(function(a, b) {
                var c = k.document,
                    d = setTimeout(function() { b(Error("Cordova framework is not ready.")) }, 1E3);
                c.addEventListener("deviceready", function() {
                    clearTimeout(d);
                    a()
                }, !1)
            })
        }) : C(Error("Cordova must run in an Android or iOS file scheme."))
    }

    function ie(a) { a = a || H(); return !("file:" !== je() || !a.toLowerCase().match(/iphone|ipad|ipod|android/)) }

    function ke() { var a = k.window; try { return !(!a || a == a.top) } catch (b) { return !1 } }

    function le() { return "object" !== typeof k.window && "function" === typeof k.importScripts }

    function me() { return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : le() ? "Worker" : "Browser" }

    function ne() { var a = me(); return "ReactNative" === a || "Node" === a }

    function oe() { for (var a = 50, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--; return b.join("") }
    var de = "Firefox",
        $d = "Chrome";

    function Zd(a) {
        var b = a.toLowerCase();
        if (y(b, "opera/") || y(b, "opr/") || y(b, "opios/")) return "Opera";
        if (y(b, "iemobile")) return "IEMobile";
        if (y(b, "msie") || y(b, "trident/")) return "IE";
        if (y(b, "edge/")) return "Edge";
        if (y(b, "firefox/")) return de;
        if (y(b, "silk/")) return "Silk";
        if (y(b, "blackberry")) return "Blackberry";
        if (y(b, "webos")) return "Webos";
        if (!y(b, "safari/") || y(b, "chrome/") || y(b, "crios/") || y(b, "android"))
            if (!y(b, "chrome/") && !y(b, "crios/") || y(b, "edge/")) {
                if (y(b, "android")) return "Android";
                if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                    2 == a.length) return a[1]
            } else return $d;
        else return "Safari";
        return "Other"
    }
    var pe = { Uc: "FirebaseCore-web", Wc: "FirebaseUI-web" };

    function qe(a, b) {
        b = b || [];
        var c = [],
            d = {},
            e;
        for (e in pe) d[pe[e]] = !0;
        for (e = 0; e < b.length; e++) "undefined" !== typeof d[b[e]] && (delete d[b[e]], c.push(b[e]));
        c.sort();
        b = c;
        b.length || (b = ["FirebaseCore-web"]);
        c = me();
        "Browser" === c ? (d = H(), c = Zd(d)) : "Worker" === c && (d = H(), c = Zd(d) + "-" + c);
        return c + "/JsCore/" + a + "/" + b.join(",")
    }

    function H() { return k.navigator && k.navigator.userAgent || "" }

    function I(a, b) {
        a = a.split(".");
        b = b || k;
        for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) b = b[a[c]];
        c != a.length && (b = void 0);
        return b
    }

    function re() {
        try {
            var a = k.localStorage,
                b = se();
            if (a) return a.setItem(b, "1"), a.removeItem(b), Ud() ? !!k.indexedDB : !0
        } catch (c) { return le() && !!k.indexedDB }
        return !1
    }

    function te() { return (ue() || "chrome-extension:" === je() || ie()) && !ne() && re() && !le() }

    function ue() { return "http:" === je() || "https:" === je() }

    function je() { return k.location && k.location.protocol || null }

    function ve(a) { a = a || H(); return ae(a) || Zd(a) == de ? !1 : !0 }

    function we(a) { return "undefined" === typeof a ? null : Od(a) }

    function xe(a) {
        var b = {},
            c;
        for (c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
        return b
    }

    function ye(a) { if (null !== a) return JSON.parse(a) }

    function se(a) { return a ? a : Math.floor(1E9 * Math.random()).toString() }

    function ze(a) { a = a || H(); return "Safari" == Zd(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0 }

    function Ae() {
        var a = k.___jsl;
        if (a && a.H)
            for (var b in a.H)
                if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP)
                    for (var c = 0; c < a.CP.length; c++) a.CP[c] = null
    }

    function Be(a, b) {
        if (a > b) throw Error("Short delay should be less than long delay!");
        this.a = a;
        this.c = b;
        a = H();
        b = me();
        this.b = ae(a) || "ReactNative" === b
    }
    Be.prototype.get = function() { var a = k.navigator; return (a && "boolean" === typeof a.onLine && (ue() || "chrome-extension:" === je() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5E3, this.a) };

    function Ce() { var a = k.document; return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0 }

    function De() {
        var a = k.document,
            b = null;
        return Ce() || !a ? B() : (new A(function(c) {
            b = function() { Ce() && (a.removeEventListener("visibilitychange", b, !1), c()) };
            a.addEventListener("visibilitychange", b, !1)
        })).s(function(c) { a.removeEventListener("visibilitychange", b, !1); throw c; })
    }

    function Ee(a) { try { var b = new Date(parseInt(a, 10)); if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString() } catch (c) {} return null }

    function Fe() { return !(!I("fireauth.oauthhelper", k) && !I("fireauth.iframe", k)) }

    function Ge() { var a = k.navigator; return a && a.serviceWorker && a.serviceWorker.controller || null }

    function He() { var a = k.navigator; return a && a.serviceWorker ? B().then(function() { return a.serviceWorker.ready }).then(function(a) { return a.active || null }).s(function() { return null }) : B(null) };
    var Ie = {};

    function Je(a) { Ie[a] || (Ie[a] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a)) };
    var Ke;
    try {
        var Le = {};
        Object.defineProperty(Le, "abcd", { configurable: !0, enumerable: !0, value: 1 });
        Object.defineProperty(Le, "abcd", { configurable: !0, enumerable: !0, value: 2 });
        Ke = 2 == Le.abcd
    } catch (a) { Ke = !1 }

    function J(a, b, c) { Ke ? Object.defineProperty(a, b, { configurable: !0, enumerable: !0, value: c }) : a[b] = c }

    function K(a, b) {
        if (b)
            for (var c in b) b.hasOwnProperty(c) && J(a, c, b[c])
    }

    function Me(a) {
        var b = {};
        K(b, a);
        return b
    }

    function Ne(a) {
        var b = {},
            c;
        for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }

    function Oe(a, b) { if (!b || !b.length) return !0; if (!a) return !1; for (var c = 0; c < b.length; c++) { var d = a[b[c]]; if (void 0 === d || null === d || "" === d) return !1 } return !0 }

    function Pe(a) { var b = a; if ("object" == typeof a && null != a) { b = "length" in a ? [] : {}; for (var c in a) J(b, c, Pe(a[c])) } return b };

    function Qe(a) {
        var b = {},
            c = a[Re],
            d = a[Se];
        a = a[Te];
        if (!a || a != Ue && !c) throw Error("Invalid provider user info!");
        b[Ve] = d || null;
        b[We] = c || null;
        J(this, Xe, a);
        J(this, Ye, Pe(b))
    }
    var Ue = "EMAIL_SIGNIN",
        Re = "email",
        Se = "newEmail",
        Te = "requestType",
        We = "email",
        Ve = "fromEmail",
        Ye = "data",
        Xe = "operation";

    function L(a, b) {
        this.code = Ze + a;
        this.message = b || $e[a] || ""
    }
    t(L, Error);
    L.prototype.C = function() { return { code: this.code, message: this.message } };
    L.prototype.toJSON = function() { return this.C() };

    function af(a) { var b = a && a.code; return b ? new L(b.substring(Ze.length), a.message) : null }
    var Ze = "auth/",
        $e = {
            "argument-error": "",
            "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
            "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
            "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
            "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
            "cordova-not-ready": "Cordova framework is not ready.",
            "cors-unsupported": "This browser is not supported.",
            "credential-already-in-use": "This credential is already associated with a different user account.",
            "custom-token-mismatch": "The custom token corresponds to a different audience.",
            "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
            "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
            "email-already-in-use": "The email address is already in use by another account.",
            "expired-action-code": "The action code has expired. ",
            "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
            "internal-error": "An internal error has occurred.",
            "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
            "invalid-app-id": "The mobile app identifier is not registed for the current project.",
            "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
            "invalid-auth-event": "An internal error has occurred.",
            "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
            "invalid-continue-uri": "The continue URL provided in the request is invalid.",
            "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
            "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
            "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
            "invalid-email": "The email address is badly formatted.",
            "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
            "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
            "invalid-credential": "The supplied auth credential is malformed or has expired.",
            "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
            "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
            "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
            "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
            "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
            "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
            "wrong-password": "The password is invalid or the user does not have a password.",
            "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
            "invalid-provider-id": "The specified provider ID is invalid.",
            "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
            "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
            "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
            "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
            "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
            "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
            "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
            "missing-continue-uri": "A continue URL must be provided in the request.",
            "missing-iframe-start": "An internal error has occurred.",
            "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
            "missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.",
            "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
            "app-deleted": "This instance of FirebaseApp has been deleted.",
            "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
            "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
            "no-auth-event": "An internal error has occurred.",
            "no-such-provider": "User was not linked to an account with the given provider.",
            "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
            "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
            "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
            "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
            "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
            "provider-already-linked": "User can only be linked to one identity for the given provider.",
            "quota-exceeded": "The project's quota for this operation has been exceeded.",
            "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
            "redirect-operation-pending": "A redirect sign-in operation is already pending.",
            "rejected-credential": "The request contains malformed or mismatching credentials.",
            timeout: "The operation has timed out.",
            "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
            "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
            "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
            "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
            "user-cancelled": "User did not grant your application the permissions it requested.",
            "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
            "user-disabled": "The user account has been disabled by an administrator.",
            "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
            "user-signed-out": "",
            "weak-password": "The password must be 6 characters long or more.",
            "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
        };

    function bf(a) {
        var b = a[cf];
        if ("undefined" === typeof b) throw new L("missing-continue-uri");
        if ("string" !== typeof b || "string" === typeof b && !b.length) throw new L("invalid-continue-uri");
        this.h = b;
        this.b = this.a = null;
        this.g = !1;
        var c = a[df];
        if (c && "object" === typeof c) {
            b = c[ef];
            var d = c[ff];
            c = c[gf];
            if ("string" === typeof b && b.length) {
                this.a = b;
                if ("undefined" !== typeof d && "boolean" !== typeof d) throw new L("argument-error", ff + " property must be a boolean when specified.");
                this.g = !!d;
                if ("undefined" !== typeof c && ("string" !==
                        typeof c || "string" === typeof c && !c.length)) throw new L("argument-error", gf + " property must be a non empty string when specified.");
                this.b = c || null
            } else { if ("undefined" !== typeof b) throw new L("argument-error", ef + " property must be a non empty string when specified."); if ("undefined" !== typeof d || "undefined" !== typeof c) throw new L("missing-android-pkg-name"); }
        } else if ("undefined" !== typeof c) throw new L("argument-error", df + " property must be a non null object when specified.");
        this.f = null;
        if ((b = a[hf]) && "object" ===
            typeof b)
            if (b = b[jf], "string" === typeof b && b.length) this.f = b;
            else { if ("undefined" !== typeof b) throw new L("argument-error", jf + " property must be a non empty string when specified."); }
        else if ("undefined" !== typeof b) throw new L("argument-error", hf + " property must be a non null object when specified.");
        b = a[kf];
        if ("undefined" !== typeof b && "boolean" !== typeof b) throw new L("argument-error", kf + " property must be a boolean when specified.");
        this.c = !!b;
        a = a[lf];
        if ("undefined" !== typeof a && ("string" !== typeof a || "string" ===
                typeof a && !a.length)) throw new L("argument-error", lf + " property must be a non empty string when specified.");
        this.i = a || null
    }
    var df = "android",
        lf = "dynamicLinkDomain",
        kf = "handleCodeInApp",
        hf = "iOS",
        cf = "url",
        ff = "installApp",
        gf = "minimumVersion",
        ef = "packageName",
        jf = "bundleId";

    function mf(a) {
        var b = {};
        b.continueUrl = a.h;
        b.canHandleCodeInApp = a.c;
        if (b.androidPackageName = a.a) b.androidMinimumVersion = a.b, b.androidInstallApp = a.g;
        b.iOSBundleId = a.f;
        b.dynamicLinkDomain = a.i;
        for (var c in b) null === b[c] && delete b[c];
        return b
    };

    function nf(a) { return Ca(a, function(a) { a = a.toString(16); return 1 < a.length ? a : "0" + a }).join("") };
    var of = null,
        pf = null;

    function qf(a) {
        var b = "";
        rf(a, function(a) { b += String.fromCharCode(a) });
        return b
    }

    function rf(a, b) {
        function c(b) {
            for (; d < a.length;) {
                var c = a.charAt(d++),
                    e = pf[c];
                if (null != e) return e;
                if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
            }
            return b
        }
        sf();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                h = c(64),
                m = c(64);
            if (64 === m && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2), 64 != m && b(h << 6 & 192 | m))
        }
    }

    function sf() {
        if (!of) {
            of = {};
            pf = {};
            for (var a = 0; 65 > a; a++) of[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), pf[of[a]] = a, 62 <= a && (pf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };

    function tf(a) {
        this.c = a.sub;
        oa();
        this.a = a.provider_id || a.firebase && a.firebase.sign_in_provider || null;
        this.b = !!a.is_anonymous || "anonymous" == this.a
    }
    tf.prototype.f = function() { return this.b };

    function uf(a) { return (a = vf(a)) && a.sub && a.iss && a.aud && a.exp ? new tf(a) : null }

    function vf(a) {
        if (!a) return null;
        a = a.split(".");
        if (3 != a.length) return null;
        a = a[1];
        for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) a += ".";
        try { return JSON.parse(qf(a)) } catch (d) {}
        return null
    };
    var wf = { $c: { ab: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", ib: "https://securetoken.googleapis.com/v1/token", id: "p" }, bd: { ab: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", ib: "https://staging-securetoken.sandbox.googleapis.com/v1/token", id: "s" }, cd: { ab: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", ib: "https://test-securetoken.sandbox.googleapis.com/v1/token", id: "t" } };

    function xf(a) {
        for (var b in wf)
            if (wf[b].id === a) return a = wf[b], { firebaseEndpoint: a.ab, secureTokenEndpoint: a.ib };
        return null
    }
    var yf;
    yf = xf("__EID__") ? "__EID__" : void 0;
    var zf = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
        Af = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        Bf = { Vc: { Ma: "locale", Ba: 500, Aa: 600, Na: "facebook.com", hb: Af }, Xc: { Ma: null, Ba: 500, Aa: 620, Na: "github.com", hb: Af }, Yc: { Ma: "hl", Ba: 515, Aa: 680, Na: "google.com", hb: Af }, dd: { Ma: "lang", Ba: 485, Aa: 705, Na: "twitter.com", hb: zf } };

    function Cf(a) {
        for (var b in Bf)
            if (Bf[b].Na == a) return Bf[b];
        return null
    };

    function Df(a) {
        var b = {};
        b["facebook.com"] = Ef;
        b["google.com"] = Ff;
        b["github.com"] = Gf;
        b["twitter.com"] = Hf;
        var c = a && a[If];
        try { if (c) return b[c] ? new b[c](a) : new Jf(a); if ("undefined" !== typeof a[Kf]) return new Lf(a) } catch (d) {}
        return null
    }
    var Kf = "idToken",
        If = "providerId";

    function Lf(a) {
        var b = a[If];
        if (!b && a[Kf]) {
            var c = uf(a[Kf]);
            c && c.a && (b = c.a)
        }
        if (!b) throw Error("Invalid additional user info!");
        if ("anonymous" == b || "custom" == b) b = null;
        c = !1;
        "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
        J(this, "providerId", b);
        J(this, "isNewUser", c)
    }

    function Jf(a) {
        Lf.call(this, a);
        a = ye(a.rawUserInfo || "{}");
        J(this, "profile", Pe(a || {}))
    }
    t(Jf, Lf);

    function Ef(a) { Jf.call(this, a); if ("facebook.com" != this.providerId) throw Error("Invalid provider ID!"); }
    t(Ef, Jf);

    function Gf(a) {
        Jf.call(this, a);
        if ("github.com" != this.providerId) throw Error("Invalid provider ID!");
        J(this, "username", this.profile && this.profile.login || null)
    }
    t(Gf, Jf);

    function Ff(a) { Jf.call(this, a); if ("google.com" != this.providerId) throw Error("Invalid provider ID!"); }
    t(Ff, Jf);

    function Hf(a) {
        Jf.call(this, a);
        if ("twitter.com" != this.providerId) throw Error("Invalid provider ID!");
        J(this, "username", a.screenName || null)
    }
    t(Hf, Jf);

    function Mf(a) { this.a = dd(a) };

    function Nf(a) {
        var b = dd(a),
            c = cd(b, "link"),
            d = cd(dd(c), "link");
        b = cd(b, "deep_link_id");
        return cd(dd(b), "link") || b || d || c || a
    };

    function Of(a, b) { return a.then(function(a) { if (a[M]) { var c = uf(a[M]); if (!c || b != c.c) throw new L("user-mismatch"); return a } throw new L("user-mismatch"); }).s(function(a) { throw a && a.code && a.code == Ze + "user-not-found" ? new L("user-mismatch") : a; }) }

    function Pf(a, b) {
        if (b) this.a = b;
        else throw new L("internal-error", "failed to construct a credential");
        J(this, "providerId", a);
        J(this, "signInMethod", a)
    }
    Pf.prototype.la = function(a) { return Qf(a, Rf(this)) };
    Pf.prototype.b = function(a, b) {
        var c = Rf(this);
        c.idToken = b;
        return Sf(a, c)
    };
    Pf.prototype.f = function(a, b) { return Of(Tf(a, Rf(this)), b) };

    function Rf(a) { return { pendingToken: a.a, requestUri: "http://localhost" } }
    Pf.prototype.C = function() { return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a } };

    function Uf(a, b, c) {
        this.a = null;
        if (b.idToken || b.accessToken) b.idToken && J(this, "idToken", b.idToken), b.accessToken && J(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && J(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);
        else if (b.oauthToken && b.oauthTokenSecret) J(this, "accessToken", b.oauthToken), J(this, "secret", b.oauthTokenSecret);
        else throw new L("internal-error", "failed to construct a credential");
        J(this, "providerId", a);
        J(this, "signInMethod", c)
    }
    Uf.prototype.la = function(a) { return Qf(a, Vf(this)) };
    Uf.prototype.b = function(a, b) {
        var c = Vf(this);
        c.idToken = b;
        return Sf(a, c)
    };
    Uf.prototype.f = function(a, b) { var c = Vf(this); return Of(Tf(a, c), b) };

    function Vf(a) {
        var b = {};
        a.idToken && (b.id_token = a.idToken);
        a.accessToken && (b.access_token = a.accessToken);
        a.secret && (b.oauth_token_secret = a.secret);
        b.providerId = a.providerId;
        a.nonce && !a.a && (b.nonce = a.nonce);
        b = { postBody: hd(b).toString(), requestUri: "http://localhost" };
        a.a && (delete b.postBody, b.pendingToken = a.a);
        return b
    }
    Uf.prototype.C = function() {
        var a = { providerId: this.providerId, signInMethod: this.signInMethod };
        this.idToken && (a.oauthIdToken = this.idToken);
        this.accessToken && (a.oauthAccessToken = this.accessToken);
        this.secret && (a.oauthTokenSecret = this.secret);
        this.nonce && (a.nonce = this.nonce);
        this.a && (a.pendingToken = this.a);
        return a
    };

    function Wf(a, b) {
        this.Dc = b || [];
        K(this, { providerId: a, isOAuthProvider: !0 });
        this.yb = {};
        this.cb = (Cf(a) || {}).Ma || null;
        this.$a = null
    }
    Wf.prototype.Da = function(a) { this.yb = $a(a); return this };

    function Xf(a) {
        if ("string" !== typeof a || 0 != a.indexOf("saml.")) throw new L("argument-error", 'SAML provider IDs must be prefixed with "saml."');
        Wf.call(this, a, [])
    }
    t(Xf, Wf);

    function N(a) {
        Wf.call(this, a, Af);
        this.a = []
    }
    t(N, Wf);
    N.prototype.ua = function(a) { Ga(this.a, a) || this.a.push(a); return this };
    N.prototype.Eb = function() { return Ja(this.a) };
    N.prototype.credential = function(a, b, c) { if (!a && !b) throw new L("argument-error", "credential failed: must provide the ID token and/or the access token."); return new Uf(this.providerId, { idToken: a || null, accessToken: b || null, nonce: c || null }, this.providerId) };

    function Yf() { N.call(this, "facebook.com") }
    t(Yf, N);
    J(Yf, "PROVIDER_ID", "facebook.com");
    J(Yf, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");

    function Zf(a) {
        if (!a) throw new L("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
        var b = a;
        q(a) && (b = a.accessToken);
        return (new Yf).credential(null, b)
    }

    function $f() { N.call(this, "github.com") }
    t($f, N);
    J($f, "PROVIDER_ID", "github.com");
    J($f, "GITHUB_SIGN_IN_METHOD", "github.com");

    function ag(a) {
        if (!a) throw new L("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
        var b = a;
        q(a) && (b = a.accessToken);
        return (new $f).credential(null, b)
    }

    function bg() {
        N.call(this, "google.com");
        this.ua("profile")
    }
    t(bg, N);
    J(bg, "PROVIDER_ID", "google.com");
    J(bg, "GOOGLE_SIGN_IN_METHOD", "google.com");

    function cg(a, b) {
        var c = a;
        q(a) && (c = a.idToken, b = a.accessToken);
        return (new bg).credential(c, b)
    }

    function dg() { Wf.call(this, "twitter.com", zf) }
    t(dg, Wf);
    J(dg, "PROVIDER_ID", "twitter.com");
    J(dg, "TWITTER_SIGN_IN_METHOD", "twitter.com");

    function eg(a, b) {
        var c = a;
        q(c) || (c = { oauthToken: a, oauthTokenSecret: b });
        if (!c.oauthToken || !c.oauthTokenSecret) throw new L("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
        return new Uf("twitter.com", c, "twitter.com")
    }

    function fg(a, b, c) {
        this.a = a;
        this.c = b;
        J(this, "providerId", "password");
        J(this, "signInMethod", c === O.EMAIL_LINK_SIGN_IN_METHOD ? O.EMAIL_LINK_SIGN_IN_METHOD : O.EMAIL_PASSWORD_SIGN_IN_METHOD)
    }
    fg.prototype.la = function(a) { return this.signInMethod == O.EMAIL_LINK_SIGN_IN_METHOD ? P(a, gg, { email: this.a, oobCode: this.c }) : P(a, hg, { email: this.a, password: this.c }) };
    fg.prototype.b = function(a, b) { return this.signInMethod == O.EMAIL_LINK_SIGN_IN_METHOD ? P(a, ig, { idToken: b, email: this.a, oobCode: this.c }) : P(a, jg, { idToken: b, email: this.a, password: this.c }) };
    fg.prototype.f = function(a, b) { return Of(this.la(a), b) };
    fg.prototype.C = function() { return { email: this.a, password: this.c, signInMethod: this.signInMethod } };

    function O() { K(this, { providerId: "password", isOAuthProvider: !1 }) }

    function kg(a, b) { b = lg(b); if (!b) throw new L("argument-error", "Invalid email link!"); return new fg(a, b, O.EMAIL_LINK_SIGN_IN_METHOD) }

    function lg(a) {
        a = Nf(a);
        a = new Mf(a);
        var b = cd(a.a, "oobCode") || null;
        return "signIn" === (cd(a.a, "mode") || null) && b ? b : null
    }
    K(O, { PROVIDER_ID: "password" });
    K(O, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" });
    K(O, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" });

    function mg(a) {
        if (!(a.Ta && a.Sa || a.Fa && a.$)) throw new L("internal-error");
        this.a = a;
        J(this, "providerId", "phone");
        J(this, "signInMethod", "phone")
    }
    mg.prototype.la = function(a) { return a.Ua(ng(this)) };
    mg.prototype.b = function(a, b) {
        var c = ng(this);
        c.idToken = b;
        return P(a, og, c)
    };
    mg.prototype.f = function(a, b) {
        var c = ng(this);
        c.operation = "REAUTH";
        a = P(a, pg, c);
        return Of(a, b)
    };
    mg.prototype.C = function() {
        var a = { providerId: "phone" };
        this.a.Ta && (a.verificationId = this.a.Ta);
        this.a.Sa && (a.verificationCode = this.a.Sa);
        this.a.Fa && (a.temporaryProof = this.a.Fa);
        this.a.$ && (a.phoneNumber = this.a.$);
        return a
    };

    function ng(a) { return a.a.Fa && a.a.$ ? { temporaryProof: a.a.Fa, phoneNumber: a.a.$ } : { sessionInfo: a.a.Ta, code: a.a.Sa } }

    function qg(a) {
        try { this.a = a || firebase.auth() } catch (b) { throw new L("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp()."); }
        K(this, { providerId: "phone", isOAuthProvider: !1 })
    }
    qg.prototype.Ua = function(a, b) {
        var c = this.a.b;
        return B(b.verify()).then(function(d) {
            if (!l(d)) throw new L("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
            switch (b.type) {
                case "recaptcha":
                    return rg(c, { phoneNumber: a, recaptchaToken: d }).then(function(a) { "function" === typeof b.reset && b.reset(); return a }, function(a) { "function" === typeof b.reset && b.reset(); throw a; });
                default:
                    throw new L("argument-error",
                        'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
            }
        })
    };

    function sg(a, b) { if (!a) throw new L("missing-verification-id"); if (!b) throw new L("missing-verification-code"); return new mg({ Ta: a, Sa: b }) }
    K(qg, { PROVIDER_ID: "phone" });
    K(qg, { PHONE_SIGN_IN_METHOD: "phone" });

    function tg(a) {
        if (a.temporaryProof && a.phoneNumber) return new mg({ Fa: a.temporaryProof, $: a.phoneNumber });
        var b = a && a.providerId;
        if (!b || "password" === b) return null;
        var c = a && a.oauthAccessToken,
            d = a && a.oauthTokenSecret,
            e = a && a.nonce,
            f = a && a.oauthIdToken,
            h = a && a.pendingToken;
        try {
            switch (b) {
                case "google.com":
                    return cg(f, c);
                case "facebook.com":
                    return Zf(c);
                case "github.com":
                    return ag(c);
                case "twitter.com":
                    return eg(c, d);
                default:
                    return c || d || f || h ? h ? 0 == b.indexOf("saml.") ? new Pf(b, h) : new Uf(b, {
                        pendingToken: h,
                        idToken: a.oauthIdToken,
                        accessToken: a.oauthAccessToken
                    }, b) : (new N(b)).credential(f, c, e) : null
            }
        } catch (m) { return null }
    }

    function ug(a) { if (!a.isOAuthProvider) throw new L("invalid-oauth-provider"); };

    function vg(a, b, c, d, e, f) {
        this.b = a;
        this.c = b || null;
        this.f = c || null;
        this.g = d || null;
        this.h = f || null;
        this.a = e || null;
        if (this.f || this.a) { if (this.f && this.a) throw new L("invalid-auth-event"); if (this.f && !this.g) throw new L("invalid-auth-event"); } else throw new L("invalid-auth-event");
    }
    vg.prototype.C = function() { return { type: this.b, eventId: this.c, urlResponse: this.f, sessionId: this.g, postBody: this.h, error: this.a && this.a.C() } };

    function wg(a) { a = a || {}; return a.type ? new vg(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && af(a.error), a.postBody) : null };

    function xg() {
        this.b = null;
        this.a = []
    }
    var yg = null;
    xg.prototype.subscribe = function(a) {
        var b = this;
        this.a.push(a);
        this.b || (this.b = function(a) { for (var c = 0; c < b.a.length; c++) b.a[c](a) }, a = I("universalLinks.subscribe", k), "function" === typeof a && a(null, this.b))
    };
    xg.prototype.unsubscribe = function(a) { w(this.a, function(b) { return b == a }) };

    function zg(a) {
        var b = "unauthorized-domain",
            c = void 0,
            d = dd(a);
        a = d.b;
        d = d.c;
        "chrome-extension" == d ? c = Ka("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Ka("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
        L.call(this, b, c)
    }
    t(zg, L);

    function Ag(a, b, c) {
        L.call(this, a, c);
        a = b || {};
        a.zb && J(this, "email", a.zb);
        a.$ && J(this, "phoneNumber", a.$);
        a.credential && J(this, "credential", a.credential)
    }
    t(Ag, L);
    Ag.prototype.C = function() {
        var a = { code: this.code, message: this.message };
        this.email && (a.email = this.email);
        this.phoneNumber && (a.phoneNumber = this.phoneNumber);
        var b = this.credential && this.credential.C();
        b && bb(a, b);
        return a
    };
    Ag.prototype.toJSON = function() { return this.C() };

    function Bg(a) {
        if (a.code) {
            var b = a.code || "";
            0 == b.indexOf(Ze) && (b = b.substring(Ze.length));
            var c = { credential: tg(a) };
            if (a.email) c.zb = a.email;
            else if (a.phoneNumber) c.$ = a.phoneNumber;
            else if (!c.credential) return new L(b, a.message || void 0);
            return new Ag(b, c, a.message)
        }
        return null
    };
    var Cg = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function Dg() {}
    Dg.prototype.c = null;

    function Eg(a) { return a.c || (a.c = a.b()) };
    var Fg;

    function Gg() {}
    t(Gg, Dg);
    Gg.prototype.a = function() { var a = Hg(this); return a ? new ActiveXObject(a) : new XMLHttpRequest };
    Gg.prototype.b = function() {
        var a = {};
        Hg(this) && (a[0] = !0, a[1] = !0);
        return a
    };

    function Hg(a) { if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) { for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) { var d = b[c]; try { return new ActiveXObject(d), a.f = d } catch (e) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"); } return a.f }
    Fg = new Gg;

    function Ig() {}
    t(Ig, Dg);
    Ig.prototype.a = function() { var a = new XMLHttpRequest; if ("withCredentials" in a) return a; if ("undefined" != typeof XDomainRequest) return new Jg; throw Error("Unsupported browser"); };
    Ig.prototype.b = function() { return {} };

    function Jg() {
        this.a = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseText = "";
        this.status = -1;
        this.statusText = "";
        this.a.onload = r(this.ec, this);
        this.a.onerror = r(this.Fb, this);
        this.a.onprogress = r(this.fc, this);
        this.a.ontimeout = r(this.ic, this)
    }
    g = Jg.prototype;
    g.open = function(a, b, c) {
        if (null != c && !c) throw Error("Only async requests are supported.");
        this.a.open(a, b)
    };
    g.send = function(a) {
        if (a)
            if ("string" == typeof a) this.a.send(a);
            else throw Error("Only string data is supported");
        else this.a.send()
    };
    g.abort = function() { this.a.abort() };
    g.setRequestHeader = function() {};
    g.getResponseHeader = function(a) { return "content-type" == a.toLowerCase() ? this.a.contentType : "" };
    g.ec = function() {
        this.status = 200;
        this.responseText = this.a.responseText;
        Kg(this, 4)
    };
    g.Fb = function() {
        this.status = 500;
        this.responseText = "";
        Kg(this, 4)
    };
    g.ic = function() { this.Fb() };
    g.fc = function() {
        this.status = 200;
        Kg(this, 1)
    };

    function Kg(a, b) { a.readyState = b; if (a.onreadystatechange) a.onreadystatechange() }
    g.getAllResponseHeaders = function() { return "content-type: " + this.a.contentType };

    function Lg(a, b, c) { this.reset(a, b, c, void 0, void 0) }
    Lg.prototype.a = null;
    var Mg = 0;
    Lg.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || Mg++;
        d || oa();
        delete this.a
    };

    function Ng(a) {
        this.f = a;
        this.b = this.c = this.a = null
    }

    function Og(a, b) {
        this.name = a;
        this.value = b
    }
    Og.prototype.toString = function() { return this.name };
    var Pg = new Og("SEVERE", 1E3),
        Qg = new Og("WARNING", 900),
        Rg = new Og("CONFIG", 700),
        Sg = new Og("FINE", 500);

    function Tg(a) {
        if (a.c) return a.c;
        if (a.a) return Tg(a.a);
        sa("Root logger has no level set.");
        return null
    }
    Ng.prototype.log = function(a, b, c) {
        if (a.value >= Tg(this).value)
            for (n(b) && (b = b()), a = new Lg(a, String(b), this.f), c && (a.a = c), c = this; c;) c = c.a
    };
    var Ug = {},
        Vg = null;

    function Wg(a) {
        Vg || (Vg = new Ng(""), Ug[""] = Vg, Vg.c = Rg);
        var b;
        if (!(b = Ug[a])) {
            b = new Ng(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = Wg(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            Ug[a] = b
        }
        return b
    };

    function Xg(a, b) { a && a.log(Sg, b, void 0) };

    function Yg(a) { this.f = a }
    t(Yg, Dg);
    Yg.prototype.a = function() { return new Zg(this.f) };
    Yg.prototype.b = function(a) { return function() { return a } }({});

    function Zg(a) {
        F.call(this);
        this.i = a;
        this.readyState = $g;
        this.status = 0;
        this.responseText = this.statusText = "";
        this.onreadystatechange = null;
        this.g = new Headers;
        this.b = null;
        this.h = "GET";
        this.c = "";
        this.a = !1;
        this.f = Wg("goog.net.FetchXmlHttp")
    }
    t(Zg, F);
    var $g = 0;
    g = Zg.prototype;
    g.open = function(a, b) {
        if (this.readyState != $g) throw this.abort(), Error("Error reopening a connection");
        this.h = a;
        this.c = b;
        this.readyState = 1;
        ah(this)
    };
    g.send = function(a) {
        if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
        this.a = !0;
        var b = { headers: this.g, method: this.h, credentials: void 0, cache: void 0 };
        a && (b.body = a);
        this.i.fetch(new Request(this.c, b)).then(this.hc.bind(this), this.Gb.bind(this))
    };
    g.abort = function() {
        this.responseText = "";
        this.g = new Headers;
        this.status = 0;
        1 <= this.readyState && this.a && 4 != this.readyState && (this.readyState = 4, this.a = !1, ah(this));
        this.readyState = $g
    };
    g.hc = function(a) { this.a && (this.b || (this.b = a.headers, this.readyState = 2, ah(this)), this.a && (this.readyState = 3, ah(this), this.a && a.text().then(this.gc.bind(this, a), this.Gb.bind(this)))) };
    g.gc = function(a, b) { this.a && (this.status = a.status, this.statusText = a.statusText, this.responseText = b, this.readyState = 4, ah(this)) };
    g.Gb = function(a) {
        var b = this.f;
        b && b.log(Qg, "Failed to fetch url " + this.c, a instanceof Error ? a : Error(a));
        this.a && (this.readyState = 4, ah(this))
    };
    g.setRequestHeader = function(a, b) { this.g.append(a, b) };
    g.getResponseHeader = function(a) { return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.f) && a.log(Qg, "Attempting to get response header but no headers have been received for url: " + this.c, void 0), "") };
    g.getAllResponseHeaders = function() {
        if (!this.b) {
            var a = this.f;
            a && a.log(Qg, "Attempting to get all response headers but no headers have been received for url: " + this.c, void 0);
            return ""
        }
        a = [];
        for (var b = this.b.entries(), c = b.next(); !c.done;) c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
        return a.join("\r\n")
    };

    function ah(a) { a.onreadystatechange && a.onreadystatechange.call(a) };

    function bh(a) {
        F.call(this);
        this.headers = new Lc;
        this.D = a || null;
        this.c = !1;
        this.w = this.a = null;
        this.h = this.N = this.m = "";
        this.f = this.I = this.i = this.G = !1;
        this.g = 0;
        this.u = null;
        this.o = ch;
        this.v = this.O = !1
    }
    t(bh, F);
    var ch = "";
    bh.prototype.b = Wg("goog.net.XhrIo");
    var dh = /^https?$/i,
        eh = ["POST", "PUT"];

    function fh(a, b, c, d, e) {
        if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.m + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.m = b;
        a.h = "";
        a.N = c;
        a.G = !1;
        a.c = !0;
        a.a = a.D ? a.D.a() : Fg.a();
        a.w = a.D ? Eg(a.D) : Eg(Fg);
        a.a.onreadystatechange = r(a.Jb, a);
        try { Xg(a.b, gh(a, "Opening Xhr")), a.I = !0, a.a.open(c, String(b), !0), a.I = !1 } catch (h) {
            Xg(a.b, gh(a, "Error opening Xhr: " + h.message));
            hh(a, h);
            return
        }
        b = d || "";
        var f = new Lc(a.headers);
        e && Kc(e, function(a, b) { f.set(b, a) });
        e = Ea(f.U());
        d = k.FormData && b instanceof
        k.FormData;
        !Ga(eh, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) { this.a.setRequestHeader(b, a) }, a);
        a.o && (a.a.responseType = a.o);
        "withCredentials" in a.a && a.a.withCredentials !== a.O && (a.a.withCredentials = a.O);
        try { ih(a), 0 < a.g && (a.v = jh(a.a), Xg(a.b, gh(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.v)), a.v ? (a.a.timeout = a.g, a.a.ontimeout = r(a.Ga, a)) : a.u = Gc(a.Ga, a.g, a)), Xg(a.b, gh(a, "Sending request")), a.i = !0, a.a.send(b), a.i = !1 } catch (h) {
            Xg(a.b,
                gh(a, "Send error: " + h.message)), hh(a, h)
        }
    }

    function jh(a) { return Pb && Zb(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout }

    function Fa(a) { return "content-type" == a.toLowerCase() }
    g = bh.prototype;
    g.Ga = function() { "undefined" != typeof aa && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Xg(this.b, gh(this, this.h)), this.dispatchEvent("timeout"), this.abort(8)) };

    function hh(a, b) {
        a.c = !1;
        a.a && (a.f = !0, a.a.abort(), a.f = !1);
        a.h = b;
        kh(a);
        lh(a)
    }

    function kh(a) { a.G || (a.G = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")) }
    g.abort = function() { this.a && this.c && (Xg(this.b, gh(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), lh(this)) };
    g.va = function() {
        this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), lh(this, !0));
        bh.ob.va.call(this)
    };
    g.Jb = function() { this.qa || (this.I || this.i || this.f ? mh(this) : this.wc()) };
    g.wc = function() { mh(this) };

    function mh(a) {
        if (a.c && "undefined" != typeof aa)
            if (a.w[1] && 4 == nh(a) && 2 == oh(a)) Xg(a.b, gh(a, "Local request error detected and ignored"));
            else if (a.i && 4 == nh(a)) Gc(a.Jb, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == nh(a)) {
            Xg(a.b, gh(a, "Request complete"));
            a.c = !1;
            try {
                var b = oh(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.m).match(Oc)[1] || null;
                        if (!f && k.self && k.self.location) {
                            var h = k.self.location.protocol;
                            f = h.substr(0, h.length - 1)
                        }
                        e = !dh.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    try { var m = 2 < nh(a) ? a.a.statusText : "" } catch (p) { Xg(a.b, "Can not get status: " + p.message), m = "" }
                    a.h = m + " [" + oh(a) + "]";
                    kh(a)
                }
            } finally { lh(a) }
        }
    }

    function lh(a, b) {
        if (a.a) {
            ih(a);
            var c = a.a,
                d = a.w[0] ? ca : null;
            a.a = null;
            a.w = null;
            b || a.dispatchEvent("ready");
            try { c.onreadystatechange = d } catch (e) {
                (a = a.b) && a.log(Pg, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
            }
        }
    }

    function ih(a) {
        a.a && a.v && (a.a.ontimeout = null);
        a.u && (k.clearTimeout(a.u), a.u = null)
    }

    function nh(a) { return a.a ? a.a.readyState : 0 }

    function oh(a) { try { return 2 < nh(a) ? a.a.status : -1 } catch (b) { return -1 } }

    function ph(a) { try { return a.a ? a.a.responseText : "" } catch (b) { return Xg(a.b, "Can not get responseText: " + b.message), "" } }
    g.getResponse = function() {
        try {
            if (!this.a) return null;
            if ("response" in this.a) return this.a.response;
            switch (this.o) {
                case ch:
                case "text":
                    return this.a.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
            }
            var a = this.b;
            a && a.log(Pg, "Response type " + this.o + " is not supported on this browser", void 0);
            return null
        } catch (b) { return Xg(this.b, "Can not get response: " + b.message), null }
    };

    function gh(a, b) { return b + " [" + a.N + " " + a.m + " " + oh(a) + "]" };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    function qh(a, b) {
        this.g = [];
        this.v = a;
        this.u = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.m = this.w = this.i = !1;
        this.h = 0;
        this.b = null;
        this.l = 0
    }
    qh.prototype.cancel = function(a) {
        if (this.a) this.c instanceof qh && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel())
            }
            this.v ? this.v.call(this.u, this) : this.m = !0;
            this.a || (a = new rh(this), sh(this), th(this, !1, a))
        }
    };
    qh.prototype.o = function(a, b) {
        this.i = !1;
        th(this, a, b)
    };

    function th(a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        uh(a)
    }

    function sh(a) {
        if (a.a) {
            if (!a.m) throw new vh(a);
            a.m = !1
        }
    }
    qh.prototype.D = function() {
        sh(this);
        th(this, !0, null)
    };

    function wh(a, b) { xh(a, null, b, void 0) }

    function xh(a, b, c, d) {
        a.g.push([b, c, d]);
        a.a && uh(a)
    }
    qh.prototype.then = function(a, b, c) {
        var d, e, f = new A(function(a, b) {
            d = a;
            e = b
        });
        xh(this, d, function(a) { a instanceof rh ? f.cancel() : e(a) });
        return f.then(a, b, c)
    };
    pa(qh);

    function yh(a) { return Da(a.g, function(a) { return n(a[1]) }) }

    function uh(a) {
        if (a.h && a.a && yh(a)) {
            var b = a.h,
                c = zh[b];
            c && (k.clearTimeout(c.a), delete zh[b]);
            a.h = 0
        }
        a.b && (a.b.l--, delete a.b);
        b = a.c;
        for (var d = c = !1; a.g.length && !a.i;) {
            var e = a.g.shift(),
                f = e[0],
                h = e[1];
            e = e[2];
            if (f = a.f ? h : f) try {
                var m = f.call(e || a.u, b);
                void 0 !== m && (a.f = a.f && (m == b || m instanceof Error), a.c = b = m);
                if (qa(b) || "function" === typeof k.Promise && b instanceof k.Promise) d = !0, a.i = !0
            } catch (p) { b = p, a.f = !0, yh(a) || (c = !0) }
        }
        a.c = b;
        d && (m = r(a.o, a, !0), d = r(a.o, a, !1), b instanceof qh ? (xh(b, m, d), b.w = !0) : b.then(m, d));
        c && (b =
            new Ah(b), zh[b.a] = b, a.h = b.a)
    }

    function vh() { u.call(this) }
    t(vh, u);
    vh.prototype.message = "Deferred has already fired";
    vh.prototype.name = "AlreadyCalledError";

    function rh() { u.call(this) }
    t(rh, u);
    rh.prototype.message = "Deferred was canceled";
    rh.prototype.name = "CanceledError";

    function Ah(a) {
        this.a = k.setTimeout(r(this.c, this), 0);
        this.b = a
    }
    Ah.prototype.c = function() { delete zh[this.a]; throw this.b; };
    var zh = {};

    function Bh(a) {
        var b = {},
            c = b.document || document,
            d = td(a),
            e = document.createElement("SCRIPT"),
            f = { Lb: e, Ga: void 0 },
            h = new qh(Ch, f),
            m = null,
            p = null != b.timeout ? b.timeout : 5E3;
        0 < p && (m = window.setTimeout(function() {
            Dh(e, !0);
            var a = new Eh(Fh, "Timeout reached for loading script " + d);
            sh(h);
            th(h, !1, a)
        }, p), f.Ga = m);
        e.onload = e.onreadystatechange = function() { e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Dh(e, b.fd || !1, m), h.D()) };
        e.onerror = function() {
            Dh(e, !0, m);
            var a = new Eh(Gh, "Error while loading script " +
                d);
            sh(h);
            th(h, !1, a)
        };
        f = b.attributes || {};
        bb(f, { type: "text/javascript", charset: "UTF-8" });
        Jd(e, f);
        e.src = td(a);
        Hh(c).appendChild(e);
        return h
    }

    function Hh(a) { var b; return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement }

    function Ch() {
        if (this && this.Lb) {
            var a = this.Lb;
            a && "SCRIPT" == a.tagName && Dh(a, !0, this.Ga)
        }
    }

    function Dh(a, b, c) {
        null != c && k.clearTimeout(c);
        a.onload = ca;
        a.onerror = ca;
        a.onreadystatechange = ca;
        b && window.setTimeout(function() { a && a.parentNode && a.parentNode.removeChild(a) }, 0)
    }
    var Gh = 0,
        Fh = 1;

    function Eh(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        u.call(this, c);
        this.code = a
    }
    t(Eh, u);

    function Ih(a) { this.f = a }
    t(Ih, Dg);
    Ih.prototype.a = function() { return new this.f };
    Ih.prototype.b = function() { return {} };

    function Jh(a, b, c) {
        this.b = a;
        a = b || {};
        this.i = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
        this.l = a.secureTokenTimeout || Kh;
        this.f = $a(a.secureTokenHeaders || Lh);
        this.g = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
        this.h = a.firebaseTimeout || Mh;
        this.a = $a(a.firebaseHeaders || Nh);
        c && (this.a["X-Client-Version"] = c, this.f["X-Client-Version"] = c);
        c = "Node" == me();
        c = k.XMLHttpRequest || c && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
        if (!c &&
            !le()) throw new L("internal-error", "The XMLHttpRequest compatibility library was not found.");
        this.c = void 0;
        le() ? this.c = new Yg(self) : ne() ? this.c = new Ih(c) : this.c = new Ig
    }
    var Oh, M = "idToken",
        Kh = new Be(3E4, 6E4),
        Lh = { "Content-Type": "application/x-www-form-urlencoded" },
        Mh = new Be(3E4, 6E4),
        Nh = { "Content-Type": "application/json" };

    function Ph(a, b) { b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"] }

    function Qh(a, b) { b ? (a.a["X-Client-Version"] = b, a.f["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.f["X-Client-Version"]) }

    function Rh(a, b, c, d, e, f, h) {
        Yd() || le() ? a = r(a.o, a) : (Oh || (Oh = new A(function(a, b) { Sh(a, b) })), a = r(a.m, a));
        a(b, c, d, e, f, h)
    }
    Jh.prototype.o = function(a, b, c, d, e, f) {
        if (le() && ("undefined" === typeof k.fetch || "undefined" === typeof k.Headers || "undefined" === typeof k.Request)) throw new L("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
        var h = new bh(this.c);
        if (f) { h.g = Math.max(0, f); var m = setTimeout(function() { h.dispatchEvent("timeout") }, f) }
        uc(h, "complete", function() {
            m && clearTimeout(m);
            var a = null;
            try {
                a =
                    JSON.parse(ph(this)) || null
            } catch (x) { a = null }
            b && b(a)
        });
        Ac(h, "ready", function() {
            m && clearTimeout(m);
            Kb(this)
        });
        Ac(h, "timeout", function() {
            m && clearTimeout(m);
            Kb(this);
            b && b(null)
        });
        fh(h, a, c, d, e)
    };
    var Th = qd("https://apis.google.com/js/client.js?onload=%{onload}"),
        Uh = "__fcb" + Math.floor(1E6 * Math.random()).toString();

    function Sh(a, b) {
        if (((window.gapi || {}).client || {}).request) a();
        else {
            k[Uh] = function() {
                ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
            };
            var c = ud(Th, { onload: Uh });
            wh(Bh(c), function() { b(Error("CORS_UNSUPPORTED")) })
        }
    }
    Jh.prototype.m = function(a, b, c, d, e) {
        var f = this;
        Oh.then(function() {
            window.gapi.client.setApiKey(f.b);
            var h = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null);
            window.gapi.client.request({
                path: a,
                method: c,
                body: d,
                headers: e,
                authType: "none",
                callback: function(a) {
                    window.gapi.auth.setToken(h);
                    b && b(a)
                }
            })
        }).s(function(a) { b && b({ error: { message: a && a.message || "CORS_UNSUPPORTED" } }) })
    };

    function Vh(a, b) { return new A(function(c, d) { "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Rh(a, a.i + "?key=" + encodeURIComponent(a.b), function(a) { a ? a.error ? d(Wh(a)) : a.access_token && a.refresh_token ? c(a) : d(new L("internal-error")) : d(new L("network-request-failed")) }, "POST", hd(b).toString(), a.f, a.l.get()) : d(new L("internal-error")) }) }

    function Xh(a, b, c, d, e, f) {
        var h = dd(a.g + b);
        G(h, "key", a.b);
        f && G(h, "cb", oa().toString());
        var m = "GET" == c;
        if (m)
            for (var p in d) d.hasOwnProperty(p) && G(h, p, d[p]);
        return new A(function(b, f) { Rh(a, h.toString(), function(a) { a ? a.error ? f(Wh(a, e || {})) : b(a) : f(new L("network-request-failed")) }, c, m ? void 0 : Od(xe(d)), a.a, a.h.get()) })
    }

    function Yh(a) { if (!Cg.test(a.email)) throw new L("invalid-email"); }

    function Zh(a) { "email" in a && Yh(a) }

    function $h(a, b) { return P(a, ai, { identifier: b, continueUri: ue() ? Vd() : "http://localhost" }).then(function(a) { return a.allProviders || [] }) }

    function bi(a, b) { return P(a, ai, { identifier: b, continueUri: ue() ? Vd() : "http://localhost" }).then(function(a) { return a.signinMethods || [] }) }

    function ci(a) { return P(a, di, {}).then(function(a) { return a.authorizedDomains || [] }) }

    function ei(a) { if (!a[M]) throw new L("internal-error"); }

    function fi(a) { if (a.phoneNumber || a.temporaryProof) { if (!a.phoneNumber || !a.temporaryProof) throw new L("internal-error"); } else { if (!a.sessionInfo) throw new L("missing-verification-id"); if (!a.code) throw new L("missing-verification-code"); } }
    Jh.prototype.Qa = function() { return P(this, gi, {}) };
    Jh.prototype.pb = function(a, b) { return P(this, hi, { idToken: a, email: b }) };
    Jh.prototype.qb = function(a, b) { return P(this, jg, { idToken: a, password: b }) };
    var ii = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
    g = Jh.prototype;
    g.rb = function(a, b) {
        var c = { idToken: a },
            d = [];
        Ya(ii, function(a, f) {
            var e = b[f];
            null === e ? d.push(a) : f in b && (c[f] = e)
        });
        d.length && (c.deleteAttribute = d);
        return P(this, hi, c)
    };
    g.kb = function(a, b) {
        a = { requestType: "PASSWORD_RESET", email: a };
        bb(a, b);
        return P(this, ji, a)
    };
    g.lb = function(a, b) {
        a = { requestType: "EMAIL_SIGNIN", email: a };
        bb(a, b);
        return P(this, ki, a)
    };
    g.jb = function(a, b) {
        a = { requestType: "VERIFY_EMAIL", idToken: a };
        bb(a, b);
        return P(this, li, a)
    };

    function rg(a, b) { return P(a, mi, b) }
    g.Ua = function(a) { return P(this, ni, a) };

    function oi(a, b, c) { return P(a, pi, { idToken: b, deleteProvider: c }) }

    function qi(a) { if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken) throw new L("internal-error"); }

    function ri(a, b) { b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Tc(a.postBody), ld(a, "nonce") && (b.nonce = a.get("nonce")))); return b }

    function si(a) {
        var b = null;
        a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Bg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Bg(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b = Bg(a)) : a.errorMessage && (b = ti(a.errorMessage));
        if (b) throw b;
        if (!a[M]) throw new L("internal-error");
    }

    function Qf(a, b) { b.returnIdpCredential = !0; return P(a, ui, b) }

    function Sf(a, b) { b.returnIdpCredential = !0; return P(a, vi, b) }

    function Tf(a, b) {
        b.returnIdpCredential = !0;
        b.autoCreate = !1;
        return P(a, wi, b)
    }

    function xi(a) { if (!a.oobCode) throw new L("invalid-action-code"); }
    g.Za = function(a, b) { return P(this, yi, { oobCode: a, newPassword: b }) };
    g.Ja = function(a) { return P(this, zi, { oobCode: a }) };
    g.Wa = function(a) { return P(this, Ai, { oobCode: a }) };
    var Ai = { endpoint: "setAccountInfo", B: xi, da: "email" },
        zi = { endpoint: "resetPassword", B: xi, J: function(a) { var b = a.requestType; if (!b || !a.email && "EMAIL_SIGNIN" != b) throw new L("internal-error"); } },
        Bi = { endpoint: "signupNewUser", B: function(a) { Yh(a); if (!a.password) throw new L("weak-password"); }, J: ei, R: !0 },
        ai = { endpoint: "createAuthUri" },
        Ci = { endpoint: "deleteAccount", T: ["idToken"] },
        pi = { endpoint: "setAccountInfo", T: ["idToken", "deleteProvider"], B: function(a) { if (!fa(a.deleteProvider)) throw new L("internal-error"); } },
        gg = { endpoint: "emailLinkSignin", T: ["email", "oobCode"], B: Yh, J: ei, R: !0 },
        ig = { endpoint: "emailLinkSignin", T: ["idToken", "email", "oobCode"], B: Yh, J: ei, R: !0 },
        Di = { endpoint: "getAccountInfo" },
        ki = {
            endpoint: "getOobConfirmationCode",
            T: ["requestType"],
            B: function(a) {
                if ("EMAIL_SIGNIN" != a.requestType) throw new L("internal-error");
                Yh(a)
            },
            da: "email"
        },
        li = { endpoint: "getOobConfirmationCode", T: ["idToken", "requestType"], B: function(a) { if ("VERIFY_EMAIL" != a.requestType) throw new L("internal-error"); }, da: "email" },
        ji = {
            endpoint: "getOobConfirmationCode",
            T: ["requestType"],
            B: function(a) {
                if ("PASSWORD_RESET" != a.requestType) throw new L("internal-error");
                Yh(a)
            },
            da: "email"
        },
        di = { ub: !0, endpoint: "getProjectConfig", Ib: "GET" },
        Ei = { ub: !0, endpoint: "getRecaptchaParam", Ib: "GET", J: function(a) { if (!a.recaptchaSiteKey) throw new L("internal-error"); } },
        yi = { endpoint: "resetPassword", B: xi, da: "email" },
        mi = { endpoint: "sendVerificationCode", T: ["phoneNumber", "recaptchaToken"], da: "sessionInfo" },
        hi = { endpoint: "setAccountInfo", T: ["idToken"], B: Zh, R: !0 },
        jg = {
            endpoint: "setAccountInfo",
            T: ["idToken"],
            B: function(a) { Zh(a); if (!a.password) throw new L("weak-password"); },
            J: ei,
            R: !0
        },
        gi = { endpoint: "signupNewUser", J: ei, R: !0 },
        ui = { endpoint: "verifyAssertion", B: qi, Oa: ri, J: si, R: !0 },
        wi = { endpoint: "verifyAssertion", B: qi, Oa: ri, J: function(a) { if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new L("user-not-found"); if (a.errorMessage) throw ti(a.errorMessage); if (!a[M]) throw new L("internal-error"); }, R: !0 },
        vi = {
            endpoint: "verifyAssertion",
            B: function(a) {
                qi(a);
                if (!a.idToken) throw new L("internal-error");
            },
            Oa: ri,
            J: si,
            R: !0
        },
        Fi = { endpoint: "verifyCustomToken", B: function(a) { if (!a.token) throw new L("invalid-custom-token"); }, J: ei, R: !0 },
        hg = { endpoint: "verifyPassword", B: function(a) { Yh(a); if (!a.password) throw new L("wrong-password"); }, J: ei, R: !0 },
        ni = { endpoint: "verifyPhoneNumber", B: fi, J: ei },
        og = {
            endpoint: "verifyPhoneNumber",
            B: function(a) {
                if (!a.idToken) throw new L("internal-error");
                fi(a)
            },
            J: function(a) {
                if (a.temporaryProof) throw a.code = "credential-already-in-use", Bg(a);
                ei(a)
            }
        },
        pg = {
            Xb: { USER_NOT_FOUND: "user-not-found" },
            endpoint: "verifyPhoneNumber",
            B: fi,
            J: ei
        };

    function P(a, b, c) {
        if (!Oe(c, b.T)) return C(new L("internal-error"));
        var d = b.Ib || "POST",
            e;
        return B(c).then(b.B).then(function() { b.R && (c.returnSecureToken = !0); return Xh(a, b.endpoint, d, c, b.Xb, b.ub || !1) }).then(function(a) { e = a; return b.Oa ? b.Oa(c, e) : e }).then(b.J).then(function() { if (!b.da) return e; if (!(b.da in e)) throw new L("internal-error"); return e[b.da] })
    }

    function ti(a) { return Wh({ error: { errors: [{ message: a }], code: 400, message: a } }) }

    function Wh(a, b) {
        var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
        var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };
        if (c = d[c] ? new L(d[c]) : null) return c;
        c = a.error && a.error.message || "";
        d = {
            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_EMAIL: "invalid-email",
            INVALID_PASSWORD: "wrong-password",
            USER_DISABLED: "user-disabled",
            MISSING_PASSWORD: "internal-error",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
            INVALID_SENDER: "invalid-sender",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            INVALID_PROVIDER_ID: "invalid-provider-id",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            CORS_UNSUPPORTED: "cors-unsupported",
            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
            INVALID_APP_ID: "invalid-app-id",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            WEAK_PASSWORD: "weak-password",
            OPERATION_NOT_ALLOWED: "operation-not-allowed",
            USER_CANCELLED: "user-cancelled",
            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
            INVALID_APP_CREDENTIAL: "invalid-app-credential",
            INVALID_CODE: "invalid-verification-code",
            INVALID_PHONE_NUMBER: "invalid-phone-number",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_APP_CREDENTIAL: "missing-app-credential",
            MISSING_CODE: "missing-verification-code",
            MISSING_PHONE_NUMBER: "missing-phone-number",
            MISSING_SESSION_INFO: "missing-verification-id",
            QUOTA_EXCEEDED: "quota-exceeded",
            SESSION_EXPIRED: "code-expired",
            REJECTED_CREDENTIAL: "rejected-credential",
            INVALID_CONTINUE_URI: "invalid-continue-uri",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            INVALID_CERT_HASH: "invalid-cert-hash"
        };
        bb(d, b || {});
        b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ?
            b[1] : void 0;
        for (var e in d)
            if (0 === c.indexOf(e)) return new L(d[e], b);
            !b && a && (b = we(a));
        return new L("internal-error", b)
    };

    function Gi(a) {
        this.b = a;
        this.a = null;
        this.fb = Hi(this)
    }

    function Hi(a) {
        return Ii().then(function() {
            return new A(function(b, c) {
                I("gapi.iframes.getContext")().open({ where: document.body, url: a.b, messageHandlersFilter: I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function(d) {
                    function e() {
                        clearTimeout(f);
                        b()
                    }
                    a.a = d;
                    a.a.restyle({ setHideOnLeave: !1 });
                    var f = setTimeout(function() { c(Error("Network Error")) }, Ji.get());
                    d.ping(e).then(e, function() { c(Error("Network Error")) })
                })
            })
        })
    }

    function Ki(a, b) { return a.fb.then(function() { return new A(function(c) { a.a.send(b.type, b, c, I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }) }

    function Li(a, b) { a.fb.then(function() { a.a.register("authEvent", b, I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }
    var Mi = qd("https://apis.google.com/js/api.js?onload=%{onload}"),
        Ni = new Be(3E4, 6E4),
        Ji = new Be(5E3, 15E3),
        Oi = null;

    function Ii() {
        return Oi ? Oi : Oi = (new A(function(a, b) {
            function c() {
                Ae();
                I("gapi.load")("gapi.iframes", {
                    callback: a,
                    ontimeout: function() {
                        Ae();
                        b(Error("Network Error"))
                    },
                    timeout: Ni.get()
                })
            }
            if (I("gapi.iframes.Iframe")) a();
            else if (I("gapi.load")) c();
            else {
                var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();
                k[d] = function() { I("gapi.load") ? c() : b(Error("Network Error")) };
                d = ud(Mi, { onload: d });
                B(Bh(d)).s(function() { b(Error("Network Error")) })
            }
        })).s(function(a) { Oi = null; throw a; })
    };

    function Pi(a, b, c) {
        this.i = a;
        this.g = b;
        this.h = c;
        this.f = null;
        this.a = ed(this.i, "/__/auth/iframe");
        G(this.a, "apiKey", this.g);
        G(this.a, "appName", this.h);
        this.b = null;
        this.c = []
    }
    Pi.prototype.toString = function() {
        this.f ? G(this.a, "v", this.f) : kd(this.a.a, "v");
        this.b ? G(this.a, "eid", this.b) : kd(this.a.a, "eid");
        this.c.length ? G(this.a, "fw", this.c.join(",")) : kd(this.a.a, "fw");
        return this.a.toString()
    };

    function Qi(a, b, c, d, e) {
        this.o = a;
        this.m = b;
        this.c = c;
        this.l = d;
        this.h = this.g = this.i = null;
        this.a = e;
        this.f = null
    }
    Qi.prototype.toString = function() {
        var a = ed(this.o, "/__/auth/handler");
        G(a, "apiKey", this.m);
        G(a, "appName", this.c);
        G(a, "authType", this.l);
        if (this.a.isOAuthProvider) {
            var b = this.a;
            try { var c = firebase.app(this.c).auth().ea() } catch (m) { c = null }
            b.$a = c;
            G(a, "providerId", this.a.providerId);
            b = this.a;
            c = xe(b.yb);
            for (var d in c) c[d] = c[d].toString();
            d = b.Dc;
            c = $a(c);
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f in c && delete c[f]
            }
            b.cb && b.$a && !c[b.cb] && (c[b.cb] = b.$a);
            Za(c) || G(a, "customParameters", we(c))
        }
        "function" === typeof this.a.Eb &&
            (b = this.a.Eb(), b.length && G(a, "scopes", b.join(",")));
        this.i ? G(a, "redirectUrl", this.i) : kd(a.a, "redirectUrl");
        this.g ? G(a, "eventId", this.g) : kd(a.a, "eventId");
        this.h ? G(a, "v", this.h) : kd(a.a, "v");
        if (this.b)
            for (var h in this.b) this.b.hasOwnProperty(h) && !cd(a, h) && G(a, h, this.b[h]);
        this.f ? G(a, "eid", this.f) : kd(a.a, "eid");
        h = Ri(this.c);
        h.length && G(a, "fw", h.join(","));
        return a.toString()
    };

    function Ri(a) { try { return firebase.app(a).auth().ya() } catch (b) { return [] } }

    function Si(a, b, c, d, e) {
        this.m = a;
        this.f = b;
        this.b = c;
        this.c = d || null;
        this.h = e || null;
        this.o = this.u = this.v = null;
        this.g = [];
        this.l = this.a = null
    }

    function Ti(a) {
        var b = Vd();
        return ci(a).then(function(a) {
            a: {
                var c = dd(b),
                    e = c.c;c = c.b;
                for (var f = 0; f < a.length; f++) {
                    var h = a[f];
                    var m = c;
                    var p = e;
                    0 == h.indexOf("chrome-extension://") ? m = dd(h).b == m && "chrome-extension" == p : "http" != p && "https" != p ? m = !1 : fe.test(h) ? m = m == h : (h = h.split(".").join("\\."), m = (new RegExp("^(.+\\." + h + "|" + h + ")$", "i")).test(m));
                    if (m) { a = !0; break a }
                }
                a = !1
            }
            if (!a) throw new zg(Vd());
        })
    }

    function Ui(a) {
        if (a.l) return a.l;
        a.l = ge().then(function() {
            if (!a.u) {
                var b = a.c,
                    c = a.h,
                    d = Ri(a.b),
                    e = new Pi(a.m, a.f, a.b);
                e.f = b;
                e.b = c;
                e.c = Ja(d || []);
                a.u = e.toString()
            }
            a.i = new Gi(a.u);
            Vi(a)
        });
        return a.l
    }
    g = Si.prototype;
    g.Ea = function(a, b, c) {
        var d = new L("popup-closed-by-user"),
            e = new L("web-storage-unsupported"),
            f = this,
            h = !1;
        return this.ga().then(function() { Wi(f).then(function(c) { c || (a && be(a), b(e), h = !0) }) }).s(function() {}).then(function() { if (!h) return ee(a) }).then(function() { if (!h) return Hc(c).then(function() { b(d) }) })
    };
    g.Mb = function() { var a = H(); return !ve(a) && !ze(a) };
    g.Hb = function() { return !1 };
    g.Cb = function(a, b, c, d, e, f, h) {
        if (!a) return C(new L("popup-blocked"));
        if (h && !ve()) return this.ga().s(function(b) {
            be(a);
            e(b)
        }), d(), B();
        this.a || (this.a = Ti(Xi(this)));
        var m = this;
        return this.a.then(function() {
            var b = m.ga().s(function(b) {
                be(a);
                e(b);
                throw b;
            });
            d();
            return b
        }).then(function() {
            ug(c);
            if (!h) {
                var d = Yi(m.m, m.f, m.b, b, c, null, f, m.c, void 0, m.h);
                Wd(d, a)
            }
        }).s(function(a) { "auth/network-request-failed" == a.code && (m.a = null); throw a; })
    };

    function Xi(a) { a.o || (a.v = a.c ? qe(a.c, Ri(a.b)) : null, a.o = new Jh(a.f, xf(a.h), a.v)); return a.o }
    g.Ca = function(a, b, c) {
        this.a || (this.a = Ti(Xi(this)));
        var d = this;
        return this.a.then(function() {
            ug(b);
            var e = Yi(d.m, d.f, d.b, a, b, Vd(), c, d.c, void 0, d.h);
            Wd(e)
        }).s(function(a) { "auth/network-request-failed" == a.code && (d.a = null); throw a; })
    };
    g.ga = function() { var a = this; return Ui(this).then(function() { return a.i.fb }).s(function() { a.a = null; throw new L("network-request-failed"); }) };
    g.Qb = function() { return !0 };

    function Yi(a, b, c, d, e, f, h, m, p, x) {
        a = new Qi(a, b, c, d, e);
        a.i = f;
        a.g = h;
        a.h = m;
        a.b = $a(p || null);
        a.f = x;
        return a.toString()
    }

    function Vi(a) {
        if (!a.i) throw Error("IfcHandler must be initialized!");
        Li(a.i, function(b) {
            var c = {};
            if (b && b.authEvent) {
                var d = !1;
                b = wg(b.authEvent);
                for (c = 0; c < a.g.length; c++) d = a.g[c](b) || d;
                c = {};
                c.status = d ? "ACK" : "ERROR";
                return B(c)
            }
            c.status = "ERROR";
            return B(c)
        })
    }

    function Wi(a) { var b = { type: "webStorageSupport" }; return Ui(a).then(function() { return Ki(a.i, b) }).then(function(a) { if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport; throw Error(); }) }
    g.wa = function(a) { this.g.push(a) };
    g.Ka = function(a) { w(this.g, function(b) { return b == a }) };

    function Zi(a) {
        this.a = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
        if (!this.a) throw new L("internal-error", "The React Native compatibility library was not found.");
        this.type = "asyncStorage"
    }
    g = Zi.prototype;
    g.get = function(a) { return B(this.a.getItem(a)).then(function(a) { return a && ye(a) }) };
    g.set = function(a, b) { return B(this.a.setItem(a, we(b))) };
    g.P = function(a) { return B(this.a.removeItem(a)) };
    g.Y = function() {};
    g.ca = function() {};

    function $i(a) {
        this.b = a;
        this.a = {};
        this.c = r(this.f, this)
    }
    var aj = [];

    function bj() {
        var a = le() ? self : null;
        v(aj, function(c) { c.b == a && (b = c) });
        if (!b) {
            var b = new $i(a);
            aj.push(b)
        }
        return b
    }
    $i.prototype.f = function(a) {
        var b = a.data.eventType,
            c = a.data.eventId,
            d = this.a[b];
        if (d && 0 < d.length) {
            a.ports[0].postMessage({ status: "ack", eventId: c, eventType: b, response: null });
            var e = [];
            v(d, function(b) { e.push(B().then(function() { return b(a.origin, a.data.data) })) });
            wb(e).then(function(d) {
                var e = [];
                v(d, function(a) { e.push({ fulfilled: a.Db, value: a.value, reason: a.reason ? a.reason.message : void 0 }) });
                v(e, function(a) { for (var b in a) "undefined" === typeof a[b] && delete a[b] });
                a.ports[0].postMessage({
                    status: "done",
                    eventId: c,
                    eventType: b,
                    response: e
                })
            })
        }
    };
    $i.prototype.subscribe = function(a, b) {
        Za(this.a) && this.b.addEventListener("message", this.c);
        "undefined" === typeof this.a[a] && (this.a[a] = []);
        this.a[a].push(b)
    };
    $i.prototype.unsubscribe = function(a, b) {
        "undefined" !== typeof this.a[a] && b ? (w(this.a[a], function(a) { return a == b }), 0 == this.a[a].length && delete this.a[a]) : b || delete this.a[a];
        Za(this.a) && this.b.removeEventListener("message", this.c)
    };

    function cj(a) { this.a = a }
    cj.prototype.postMessage = function(a, b) { this.a.postMessage(a, b) };

    function dj(a) {
        this.c = a;
        this.b = !1;
        this.a = []
    }

    function ej(a, b, c, d) {
        var e, f = c || {},
            h, m, p, x = null;
        if (a.b) return C(Error("connection_unavailable"));
        var gb = d ? 800 : 50,
            la = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
        return (new A(function(c, d) {
            la ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), la.port1.start(), m = setTimeout(function() { d(Error("unsupported_event")) }, gb), h = function(a) {
                a.data.eventId === e && ("ack" === a.data.status ? (clearTimeout(m), p = setTimeout(function() { d(Error("timeout")) }, 3E3)) : "done" === a.data.status ? (clearTimeout(p),
                    "undefined" !== typeof a.data.response ? c(a.data.response) : d(Error("unknown_error"))) : (clearTimeout(m), clearTimeout(p), d(Error("invalid_response"))))
            }, x = { messageChannel: la, onMessage: h }, a.a.push(x), la.port1.addEventListener("message", h), a.c.postMessage({ eventType: b, eventId: e, data: f }, [la.port2])) : d(Error("connection_unavailable"))
        })).then(function(b) { fj(a, x); return b }).s(function(b) { fj(a, x); throw b; })
    }

    function fj(a, b) {
        if (b) {
            var c = b.messageChannel,
                d = b.onMessage;
            c && (c.port1.removeEventListener("message", d), c.port1.close());
            w(a.a, function(a) { return a == b })
        }
    }
    dj.prototype.close = function() {
        for (; 0 < this.a.length;) fj(this, this.a[0]);
        this.b = !0
    };

    function gj() {
        if (!hj()) throw new L("web-storage-unsupported");
        this.c = {};
        this.a = [];
        this.b = 0;
        this.m = k.indexedDB;
        this.type = "indexedDB";
        this.g = this.l = this.f = this.i = null;
        this.u = !1;
        this.h = null;
        var a = this;
        le() && self ? (this.l = bj(), this.l.subscribe("keyChanged", function(b, c) { return ij(a).then(function(b) { 0 < b.length && v(a.a, function(a) { a(b) }); return { keyProcessed: Ga(b, c.key) } }) }), this.l.subscribe("ping", function() { return B(["keyChanged"]) })) : He().then(function(b) {
            if (a.h = b) a.g = new dj(new cj(b)), ej(a.g, "ping", null, !0).then(function(b) { b[0].fulfilled && Ga(b[0].value, "keyChanged") && (a.u = !0) }).s(function() {})
        })
    }
    var jj;

    function kj(a) {
        return new A(function(b, c) {
            var d = a.m.deleteDatabase("firebaseLocalStorageDb");
            d.onsuccess = function() { b() };
            d.onerror = function(a) { c(Error(a.target.error)) }
        })
    }

    function lj(a) {
        return new A(function(b, c) {
            var d = a.m.open("firebaseLocalStorageDb", 1);
            d.onerror = function(a) {
                try { a.preventDefault() } catch (f) {}
                c(Error(a.target.error))
            };
            d.onupgradeneeded = function(a) { a = a.target.result; try { a.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" }) } catch (f) { c(f) } };
            d.onsuccess = function(d) {
                d = d.target.result;
                d.objectStoreNames.contains("firebaseLocalStorage") ? b(d) : kj(a).then(function() { return lj(a) }).then(function(a) { b(a) }).s(function(a) { c(a) })
            }
        })
    }

    function mj(a) { a.o || (a.o = lj(a)); return a.o }

    function hj() { try { return !!k.indexedDB } catch (a) { return !1 } }

    function nj(a) { return a.objectStore("firebaseLocalStorage") }

    function oj(a, b) { return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly") }

    function pj(a) {
        return new A(function(b, c) {
            a.onsuccess = function(a) { a && a.target ? b(a.target.result) : b() };
            a.onerror = function(a) { c(a.target.error) }
        })
    }
    g = gj.prototype;
    g.set = function(a, b) {
        var c = !1,
            d, e = this;
        return mj(this).then(function(b) {
            d = b;
            b = nj(oj(d, !0));
            return pj(b.get(a))
        }).then(function(f) {
            var h = nj(oj(d, !0));
            if (f) return f.value = b, pj(h.put(f));
            e.b++;
            c = !0;
            f = {};
            f.fbase_key = a;
            f.value = b;
            return pj(h.add(f))
        }).then(function() { e.c[a] = b; return qj(e, a) }).ia(function() { c && e.b-- })
    };

    function qj(a, b) { return a.g && a.h && Ge() === a.h ? ej(a.g, "keyChanged", { key: b }, a.u).then(function() {}).s(function() {}) : B() }
    g.get = function(a) { return mj(this).then(function(b) { return pj(nj(oj(b, !1)).get(a)) }).then(function(a) { return a && a.value }) };
    g.P = function(a) {
        var b = !1,
            c = this;
        return mj(this).then(function(d) {
            b = !0;
            c.b++;
            return pj(nj(oj(d, !0))["delete"](a))
        }).then(function() { delete c.c[a]; return qj(c, a) }).ia(function() { b && c.b-- })
    };

    function ij(a) {
        return mj(a).then(function(a) {
            var b = nj(oj(a, !1));
            return b.getAll ? pj(b.getAll()) : new A(function(a, c) {
                var d = [],
                    e = b.openCursor();
                e.onsuccess = function(b) {
                    (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d)
                };
                e.onerror = function(a) { c(a.target.error) }
            })
        }).then(function(b) {
            var c = {},
                d = [];
            if (0 == a.b) {
                for (d = 0; d < b.length; d++) c[b[d].fbase_key] = b[d].value;
                d = Xd(a.c, c);
                a.c = c
            }
            return d
        })
    }
    g.Y = function(a) {
        0 == this.a.length && rj(this);
        this.a.push(a)
    };
    g.ca = function(a) {
        w(this.a, function(b) { return b == a });
        0 == this.a.length && sj(this)
    };

    function rj(a) {
        function b() { a.f = setTimeout(function() { a.i = ij(a).then(function(b) { 0 < b.length && v(a.a, function(a) { a(b) }) }).then(function() { b() }).s(function(a) { "STOP_EVENT" != a.message && b() }) }, 800) }
        sj(a);
        b()
    }

    function sj(a) {
        a.i && a.i.cancel("STOP_EVENT");
        a.f && (clearTimeout(a.f), a.f = null)
    };

    function tj(a) {
        var b = this,
            c = null;
        this.a = [];
        this.type = "indexedDB";
        this.c = a;
        this.b = B().then(function() {
            if (hj()) {
                var a = se(),
                    e = "__sak" + a;
                jj || (jj = new gj);
                c = jj;
                return c.set(e, a).then(function() { return c.get(e) }).then(function(b) { if (b !== a) throw Error("indexedDB not supported!"); return c.P(e) }).then(function() { return c }).s(function() { return b.c })
            }
            return b.c
        }).then(function(a) {
            b.type = a.type;
            a.Y(function(a) { v(b.a, function(b) { b(a) }) });
            return a
        })
    }
    g = tj.prototype;
    g.get = function(a) { return this.b.then(function(b) { return b.get(a) }) };
    g.set = function(a, b) { return this.b.then(function(c) { return c.set(a, b) }) };
    g.P = function(a) { return this.b.then(function(b) { return b.P(a) }) };
    g.Y = function(a) { this.a.push(a) };
    g.ca = function(a) { w(this.a, function(b) { return b == a }) };

    function uj() {
        this.a = {};
        this.type = "inMemory"
    }
    g = uj.prototype;
    g.get = function(a) { return B(this.a[a]) };
    g.set = function(a, b) { this.a[a] = b; return B() };
    g.P = function(a) { delete this.a[a]; return B() };
    g.Y = function() {};
    g.ca = function() {};

    function vj() {
        if (!wj()) { if ("Node" == me()) throw new L("internal-error", "The LocalStorage compatibility library was not found."); throw new L("web-storage-unsupported"); }
        this.a = xj() || firebase.INTERNAL.node.localStorage;
        this.type = "localStorage"
    }

    function xj() {
        try {
            var a = k.localStorage,
                b = se();
            a && (a.setItem(b, "1"), a.removeItem(b));
            return a
        } catch (c) { return null }
    }

    function wj() {
        var a = "Node" == me();
        a = xj() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
        if (!a) return !1;
        try { return a.setItem("__sak", "1"), a.removeItem("__sak"), !0 } catch (b) { return !1 }
    }
    g = vj.prototype;
    g.get = function(a) { var b = this; return B().then(function() { var c = b.a.getItem(a); return ye(c) }) };
    g.set = function(a, b) {
        var c = this;
        return B().then(function() {
            var d = we(b);
            null === d ? c.P(a) : c.a.setItem(a, d)
        })
    };
    g.P = function(a) { var b = this; return B().then(function() { b.a.removeItem(a) }) };
    g.Y = function(a) { k.window && rc(k.window, "storage", a) };
    g.ca = function(a) { k.window && E(k.window, "storage", a) };

    function yj() { this.type = "nullStorage" }
    g = yj.prototype;
    g.get = function() { return B(null) };
    g.set = function() { return B() };
    g.P = function() { return B() };
    g.Y = function() {};
    g.ca = function() {};

    function zj() {
        if (!Aj()) { if ("Node" == me()) throw new L("internal-error", "The SessionStorage compatibility library was not found."); throw new L("web-storage-unsupported"); }
        this.a = Bj() || firebase.INTERNAL.node.sessionStorage;
        this.type = "sessionStorage"
    }

    function Bj() {
        try {
            var a = k.sessionStorage,
                b = se();
            a && (a.setItem(b, "1"), a.removeItem(b));
            return a
        } catch (c) { return null }
    }

    function Aj() {
        var a = "Node" == me();
        a = Bj() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
        if (!a) return !1;
        try { return a.setItem("__sak", "1"), a.removeItem("__sak"), !0 } catch (b) { return !1 }
    }
    g = zj.prototype;
    g.get = function(a) { var b = this; return B().then(function() { var c = b.a.getItem(a); return ye(c) }) };
    g.set = function(a, b) {
        var c = this;
        return B().then(function() {
            var d = we(b);
            null === d ? c.P(a) : c.a.setItem(a, d)
        })
    };
    g.P = function(a) { var b = this; return B().then(function() { b.a.removeItem(a) }) };
    g.Y = function() {};
    g.ca = function() {};

    function Cj() {
        var a = {};
        a.Browser = Dj;
        a.Node = Ej;
        a.ReactNative = Fj;
        a.Worker = Gj;
        this.a = a[me()]
    }
    var Hj, Dj = { A: vj, Ra: zj },
        Ej = { A: vj, Ra: zj },
        Fj = { A: Zi, Ra: yj },
        Gj = { A: vj, Ra: yj };
    var Ij = { Zc: "local", NONE: "none", ad: "session" };

    function Jj(a) {
        var b = new L("invalid-persistence-type"),
            c = new L("unsupported-persistence-type");
        a: {
            for (d in Ij)
                if (Ij[d] == a) { var d = !0; break a }
            d = !1
        }
        if (!d || "string" !== typeof a) throw b;
        switch (me()) {
            case "ReactNative":
                if ("session" === a) throw c;
                break;
            case "Node":
                if ("none" !== a) throw c;
                break;
            default:
                if (!re() && "none" !== a) throw c;
        }
    }

    function Kj() {
        var a = !ze(H()) && ke() ? !0 : !1,
            b = ve(),
            c = re();
        this.o = a;
        this.h = b;
        this.l = c;
        this.a = {};
        Hj || (Hj = new Cj);
        a = Hj;
        try { this.g = !Ud() && Fe() || !k.indexedDB ? new a.a.A : new tj(le() ? new uj : new a.a.A) } catch (d) { this.g = new uj, this.h = !0 }
        try { this.i = new a.a.Ra } catch (d) { this.i = new uj }
        this.m = new uj;
        this.f = r(this.Pb, this);
        this.b = {}
    }
    var Lj;

    function Mj() { Lj || (Lj = new Kj); return Lj }

    function Nj(a, b) {
        switch (b) {
            case "session":
                return a.i;
            case "none":
                return a.m;
            default:
                return a.g
        }
    }

    function Oj(a, b) { return "firebase:" + a.name + (b ? ":" + b : "") }

    function Pj(a, b, c) {
        var d = Oj(b, c),
            e = Nj(a, b.A);
        return a.get(b, c).then(function(f) {
            var h = null;
            try { h = ye(k.localStorage.getItem(d)) } catch (m) {}
            if (h && !f) return k.localStorage.removeItem(d), a.set(b, h, c);
            h && f && "localStorage" != e.type && k.localStorage.removeItem(d)
        })
    }
    g = Kj.prototype;
    g.get = function(a, b) { return Nj(this, a.A).get(Oj(a, b)) };

    function Qj(a, b, c) { c = Oj(b, c); "local" == b.A && (a.b[c] = null); return Nj(a, b.A).P(c) }
    g.set = function(a, b, c) {
        var d = Oj(a, c),
            e = this,
            f = Nj(this, a.A);
        return f.set(d, b).then(function() { return f.get(d) }).then(function(b) { "local" == a.A && (e.b[d] = b) })
    };
    g.addListener = function(a, b, c) {
        a = Oj(a, b);
        this.l && (this.b[a] = k.localStorage.getItem(a));
        Za(this.a) && (Nj(this, "local").Y(this.f), this.h || (Ud() || !Fe()) && k.indexedDB || !this.l || Rj(this));
        this.a[a] || (this.a[a] = []);
        this.a[a].push(c)
    };
    g.removeListener = function(a, b, c) {
        a = Oj(a, b);
        this.a[a] && (w(this.a[a], function(a) { return a == c }), 0 == this.a[a].length && delete this.a[a]);
        Za(this.a) && (Nj(this, "local").ca(this.f), Sj(this))
    };

    function Rj(a) {
        Sj(a);
        a.c = setInterval(function() {
            for (var b in a.a) {
                var c = k.localStorage.getItem(b),
                    d = a.b[b];
                c != d && (a.b[b] = c, c = new fc({ type: "storage", key: b, target: window, oldValue: d, newValue: c, a: !0 }), a.Pb(c))
            }
        }, 1E3)
    }

    function Sj(a) { a.c && (clearInterval(a.c), a.c = null) }
    g.Pb = function(a) {
        if (a && a.f) {
            var b = a.a.key;
            if (null == b)
                for (var c in this.a) {
                    var d = this.b[c];
                    "undefined" === typeof d && (d = null);
                    var e = k.localStorage.getItem(c);
                    e !== d && (this.b[c] = e, this.Xa(c))
                } else if (0 == b.indexOf("firebase:") && this.a[b]) {
                    "undefined" !== typeof a.a.a ? Nj(this, "local").ca(this.f) : Sj(this);
                    if (this.o)
                        if (c = k.localStorage.getItem(b), d = a.a.newValue, d !== c) null !== d ? k.localStorage.setItem(b, d) : k.localStorage.removeItem(b);
                        else if (this.b[b] === d && "undefined" === typeof a.a.a) return;
                    var f = this;
                    c = function() {
                        if ("undefined" !==
                            typeof a.a.a || f.b[b] !== k.localStorage.getItem(b)) f.b[b] = k.localStorage.getItem(b), f.Xa(b)
                    };
                    Pb && $b && 10 == $b && k.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c()
                }
        } else v(a, r(this.Xa, this))
    };
    g.Xa = function(a) { this.a[a] && v(this.a[a], function(a) { a() }) };

    function Tj(a) {
        this.a = a;
        this.b = Mj()
    }
    var Uj = { name: "authEvent", A: "local" };

    function Vj(a) { return a.b.get(Uj, a.a).then(function(a) { return wg(a) }) };

    function Wj() { this.a = Mj() };

    function Xj() { this.b = -1 };

    function Yj(a, b) {
        this.b = Zj;
        this.f = k.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
        this.g = this.c = 0;
        this.a = [];
        this.i = a;
        this.h = b;
        this.l = k.Int32Array ? new Int32Array(64) : Array(64);
        void 0 !== ak || (k.Int32Array ? ak = new Int32Array(bk) : ak = bk);
        this.reset()
    }
    var ak;
    t(Yj, Xj);
    for (var Zj = 64, ck = Zj - 1, dk = [], ek = 0; ek < ck; ek++) dk[ek] = 0;
    var fk = Ia(128, dk);
    Yj.prototype.reset = function() {
        this.g = this.c = 0;
        this.a = k.Int32Array ? new Int32Array(this.h) : Ja(this.h)
    };

    function gk(a) {
        for (var b = a.f, c = a.l, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
        for (b = 16; 64 > b; b++) {
            e = c[b - 15] | 0;
            d = c[b - 2] | 0;
            var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
                h = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = f + h | 0
        }
        d = a.a[0] | 0;
        e = a.a[1] | 0;
        var m = a.a[2] | 0,
            p = a.a[3] | 0,
            x = a.a[4] | 0,
            gb = a.a[5] | 0,
            la = a.a[6] | 0;
        f = a.a[7] | 0;
        for (b = 0; 64 > b; b++) {
            var Rl = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & m ^ e & m) | 0;
            h = x & gb ^ ~x & la;
            f = f + ((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>>
                25 | x << 7)) | 0;
            h = h + (ak[b] | 0) | 0;
            h = f + (h + (c[b] | 0) | 0) | 0;
            f = la;
            la = gb;
            gb = x;
            x = p + h | 0;
            p = m;
            m = e;
            e = d;
            d = h + Rl | 0
        }
        a.a[0] = a.a[0] + d | 0;
        a.a[1] = a.a[1] + e | 0;
        a.a[2] = a.a[2] + m | 0;
        a.a[3] = a.a[3] + p | 0;
        a.a[4] = a.a[4] + x | 0;
        a.a[5] = a.a[5] + gb | 0;
        a.a[6] = a.a[6] + la | 0;
        a.a[7] = a.a[7] + f | 0
    }

    function hk(a, b, c) {
        void 0 === c && (c = b.length);
        var d = 0,
            e = a.c;
        if (l(b))
            for (; d < c;) a.f[e++] = b.charCodeAt(d++), e == a.b && (gk(a), e = 0);
        else if (ha(b))
            for (; d < c;) {
                var f = b[d++];
                if (!("number" == typeof f && 0 <= f && 255 >= f && f == (f | 0))) throw Error("message must be a byte array");
                a.f[e++] = f;
                e == a.b && (gk(a), e = 0)
            } else throw Error("message must be string or array");
        a.c = e;
        a.g += c
    }
    var bk = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804,
        4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
    ];

    function ik() { Yj.call(this, 8, jk) }
    t(ik, Yj);
    var jk = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

    function kk(a, b, c, d, e) {
        this.m = a;
        this.i = b;
        this.l = c;
        this.o = d || null;
        this.u = e || null;
        this.h = b + ":" + c;
        this.v = new Wj;
        this.g = new Tj(this.h);
        this.f = null;
        this.b = [];
        this.a = this.c = null
    }

    function lk(a) { return new L("invalid-cordova-configuration", a) }
    g = kk.prototype;
    g.ga = function() {
        return this.za ? this.za : this.za = he().then(function() {
            if ("function" !== typeof I("universalLinks.subscribe", k)) throw lk("cordova-universal-links-plugin-fix is not installed");
            if ("undefined" === typeof I("BuildInfo.packageName", k)) throw lk("cordova-plugin-buildinfo is not installed");
            if ("function" !== typeof I("cordova.plugins.browsertab.openUrl", k)) throw lk("cordova-plugin-browsertab is not installed");
            if ("function" !== typeof I("cordova.InAppBrowser.open", k)) throw lk("cordova-plugin-inappbrowser is not installed");
        }, function() { throw new L("cordova-not-ready"); })
    };

    function mk() { for (var a = 20, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--; return b.join("") }

    function nk(a) {
        var b = new ik;
        hk(b, a);
        a = [];
        var c = 8 * b.g;
        56 > b.c ? hk(b, fk, 56 - b.c) : hk(b, fk, b.b - (b.c - 56));
        for (var d = 63; 56 <= d; d--) b.f[d] = c & 255, c /= 256;
        gk(b);
        for (d = c = 0; d < b.i; d++)
            for (var e = 24; 0 <= e; e -= 8) a[c++] = b.a[d] >> e & 255;
        return nf(a)
    }
    g.Ea = function(a, b) { b(new L("operation-not-supported-in-this-environment")); return B() };
    g.Cb = function() { return C(new L("operation-not-supported-in-this-environment")) };
    g.Qb = function() { return !1 };
    g.Mb = function() { return !0 };
    g.Hb = function() { return !0 };
    g.Ca = function(a, b, c) {
        if (this.c) return C(new L("redirect-operation-pending"));
        var d = this,
            e = k.document,
            f = null,
            h = null,
            m = null,
            p = null;
        return this.c = B().then(function() { ug(b); return ok(d) }).then(function() { return pk(d, a, b, c) }).then(function() {
            return (new A(function(a, b) {
                h = function() {
                    var b = I("cordova.plugins.browsertab.close", k);
                    a();
                    "function" === typeof b && b();
                    d.a && "function" === typeof d.a.close && (d.a.close(), d.a = null);
                    return !1
                };
                d.wa(h);
                m = function() { f || (f = Hc(2E3).then(function() { b(new L("redirect-cancelled-by-user")) })) };
                p = function() { Ce() && m() };
                e.addEventListener("resume", m, !1);
                H().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", p, !1)
            })).s(function(a) { return qk(d).then(function() { throw a; }) })
        }).ia(function() {
            m && e.removeEventListener("resume", m, !1);
            p && e.removeEventListener("visibilitychange", p, !1);
            f && f.cancel();
            h && d.Ka(h);
            d.c = null
        })
    };

    function pk(a, b, c, d) {
        var e = mk(),
            f = new vg(b, d, null, e, new L("no-auth-event")),
            h = I("BuildInfo.packageName", k);
        if ("string" !== typeof h) throw new L("invalid-cordova-configuration");
        var m = I("BuildInfo.displayName", k),
            p = {};
        if (H().toLowerCase().match(/iphone|ipad|ipod/)) p.ibi = h;
        else if (H().toLowerCase().match(/android/)) p.apn = h;
        else return C(new L("operation-not-supported-in-this-environment"));
        m && (p.appDisplayName = m);
        e = nk(e);
        p.sessionId = e;
        var x = Yi(a.m, a.i, a.l, b, c, null, d, a.o, p, a.u);
        return a.ga().then(function() {
            var b =
                a.h;
            return a.v.a.set(Uj, f.C(), b)
        }).then(function() {
            var b = I("cordova.plugins.browsertab.isAvailable", k);
            if ("function" !== typeof b) throw new L("invalid-cordova-configuration");
            var c = null;
            b(function(b) {
                if (b) {
                    c = I("cordova.plugins.browsertab.openUrl", k);
                    if ("function" !== typeof c) throw new L("invalid-cordova-configuration");
                    c(x)
                } else {
                    c = I("cordova.InAppBrowser.open", k);
                    if ("function" !== typeof c) throw new L("invalid-cordova-configuration");
                    b = H();
                    b = !(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
                    a.a = c(x, b ? "_blank" : "_system", "location=yes")
                }
            })
        })
    }

    function rk(a, b) { for (var c = 0; c < a.b.length; c++) try { a.b[c](b) } catch (d) {} }

    function ok(a) {
        a.f || (a.f = a.ga().then(function() {
            return new A(function(b) {
                function c(d) {
                    b(d);
                    a.Ka(c);
                    return !1
                }
                a.wa(c);
                sk(a)
            })
        }));
        return a.f
    }

    function qk(a) {
        var b = null;
        return Vj(a.g).then(function(c) {
            b = c;
            c = a.g;
            return Qj(c.b, Uj, c.a)
        }).then(function() { return b })
    }

    function sk(a) {
        function b(b) {
            d = !0;
            e && e.cancel();
            qk(a).then(function(d) {
                var e = c;
                if (d && b && b.url) {
                    var f = null;
                    e = Nf(b.url); - 1 != e.indexOf("/__/auth/callback") && (f = dd(e), f = ye(cd(f, "firebaseError") || null), f = (f = "object" === typeof f ? af(f) : null) ? new vg(d.b, d.c, null, null, f) : new vg(d.b, d.c, e, d.g));
                    e = f || c
                }
                rk(a, e)
            })
        }
        var c = new vg("unknown", null, null, null, new L("no-auth-event")),
            d = !1,
            e = Hc(500).then(function() { return qk(a).then(function() { d || rk(a, c) }) }),
            f = k.handleOpenURL;
        k.handleOpenURL = function(a) {
            0 == a.toLowerCase().indexOf(I("BuildInfo.packageName",
                k).toLowerCase() + "://") && b({ url: a });
            if ("function" === typeof f) try { f(a) } catch (m) { console.error(m) }
        };
        yg || (yg = new xg);
        yg.subscribe(b)
    }
    g.wa = function(a) {
        this.b.push(a);
        ok(this).s(function(b) { "auth/invalid-cordova-configuration" === b.code && (b = new vg("unknown", null, null, null, new L("no-auth-event")), a(b)) })
    };
    g.Ka = function(a) { w(this.b, function(b) { return b == a }) };

    function tk(a) {
        this.a = a;
        this.b = Mj()
    }
    var uk = { name: "pendingRedirect", A: "session" };

    function vk(a) { return a.b.set(uk, "pending", a.a) }

    function wk(a) { return Qj(a.b, uk, a.a) }

    function xk(a) { return a.b.get(uk, a.a).then(function(a) { return "pending" == a }) };

    function yk(a, b, c) {
        this.u = a;
        this.l = b;
        this.m = c;
        this.h = [];
        this.f = !1;
        this.i = r(this.bb, this);
        this.b = new zk;
        this.o = new Ak;
        this.g = new tk(this.l + ":" + this.m);
        this.c = {};
        this.c.unknown = this.b;
        this.c.signInViaRedirect = this.b;
        this.c.linkViaRedirect = this.b;
        this.c.reauthViaRedirect = this.b;
        this.c.signInViaPopup = this.o;
        this.c.linkViaPopup = this.o;
        this.c.reauthViaPopup = this.o;
        this.a = Bk(this.u, this.l, this.m, yf)
    }

    function Bk(a, b, c, d) { var e = firebase.SDK_VERSION || null; return ie() ? new kk(a, b, c, e, d) : new Si(a, b, c, e, d) }
    g = yk.prototype;
    g.reset = function() {
        this.f = !1;
        this.a.Ka(this.i);
        this.a = Bk(this.u, this.l, this.m)
    };
    g.Ya = function() { this.b.Ya() };

    function Ck(a) { a.f || (a.f = !0, a.a.wa(a.i)); var b = a.a; return a.a.ga().s(function(c) { a.a == b && a.reset(); throw c; }) }

    function Dk(a) {
        a.a.Mb() && Ck(a).s(function(b) {
            var c = new vg("unknown", null, null, null, new L("operation-not-supported-in-this-environment"));
            Ek(b) && a.bb(c)
        });
        a.a.Hb() || Fk(a.b)
    }
    g.subscribe = function(a) {
        Ga(this.h, a) || this.h.push(a);
        if (!this.f) {
            var b = this;
            xk(this.g).then(function(a) {
                a ? wk(b.g).then(function() {
                    Ck(b).s(function(a) {
                        var c = new vg("unknown", null, null, null, new L("operation-not-supported-in-this-environment"));
                        Ek(a) && b.bb(c)
                    })
                }) : Dk(b)
            }).s(function() { Dk(b) })
        }
    };
    g.unsubscribe = function(a) { w(this.h, function(b) { return b == a }) };
    g.bb = function(a) {
        if (!a) throw new L("invalid-auth-event");
        for (var b = !1, c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            if (d.vb(a.b, a.c)) {
                (b = this.c[a.b]) && b.h(a, d);
                b = !0;
                break
            }
        }
        Fk(this.b);
        return b
    };
    var Gk = new Be(2E3, 1E4),
        Hk = new Be(3E4, 6E4);
    yk.prototype.fa = function() { return this.b.fa() };

    function Ik(a, b, c, d, e, f) { return a.a.Cb(b, c, d, function() { a.f || (a.f = !0, a.a.wa(a.i)) }, function() { a.reset() }, e, f) }

    function Ek(a) { return a && "auth/cordova-not-ready" == a.code ? !0 : !1 }
    yk.prototype.Ca = function(a, b, c) {
        var d = this,
            e;
        return vk(this.g).then(function() {
            return d.a.Ca(a, b, c).s(function(a) {
                if (Ek(a)) throw new L("operation-not-supported-in-this-environment");
                e = a;
                return wk(d.g).then(function() { throw e; })
            }).then(function() { return d.a.Qb() ? new A(function() {}) : wk(d.g).then(function() { return d.fa() }).then(function() {}).s(function() {}) })
        })
    };
    yk.prototype.Ea = function(a, b, c, d) { return this.a.Ea(c, function(c) { a.ha(b, null, c, d) }, Gk.get()) };
    var Jk = {};

    function Kk(a, b, c) {
        var d = b + ":" + c;
        Jk[d] || (Jk[d] = new yk(a, b, c));
        return Jk[d]
    }

    function zk() {
        this.b = null;
        this.f = [];
        this.c = [];
        this.a = null;
        this.i = this.g = !1
    }
    zk.prototype.reset = function() {
        this.b = null;
        this.a && (this.a.cancel(), this.a = null)
    };
    zk.prototype.h = function(a, b) {
        if (a) {
            this.reset();
            this.g = !0;
            var c = a.b,
                d = a.c,
                e = a.a && "auth/web-storage-unsupported" == a.a.code,
                f = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
            this.i = !(!e && !f);
            "unknown" != c || e || f ? a.a ? (Lk(this, !0, null, a.a), B()) : b.xa(c, d) ? Mk(this, a, b) : C(new L("invalid-auth-event")) : (Lk(this, !1, null, null), B())
        } else C(new L("invalid-auth-event"))
    };

    function Fk(a) { a.g || (a.g = !0, Lk(a, !1, null, null)) }
    zk.prototype.Ya = function() { this.g && !this.i && Lk(this, !1, null, null) };

    function Mk(a, b, c) {
        c = c.xa(b.b, b.c);
        var d = b.f,
            e = b.g,
            f = b.h,
            h = !!b.b.match(/Redirect$/);
        c(d, e, f).then(function(b) { Lk(a, h, b, null) }).s(function(b) { Lk(a, h, null, b) })
    }

    function Nk(a, b) {
        a.b = function() { return C(b) };
        if (a.c.length)
            for (var c = 0; c < a.c.length; c++) a.c[c](b)
    }

    function Ok(a, b) {
        a.b = function() { return B(b) };
        if (a.f.length)
            for (var c = 0; c < a.f.length; c++) a.f[c](b)
    }

    function Lk(a, b, c, d) {
        b ? d ? Nk(a, d) : Ok(a, c) : Ok(a, { user: null });
        a.f = [];
        a.c = []
    }
    zk.prototype.fa = function() { var a = this; return new A(function(b, c) { a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), Pk(a)) }) };

    function Pk(a) {
        var b = new L("timeout");
        a.a && a.a.cancel();
        a.a = Hc(Hk.get()).then(function() { a.b || (a.g = !0, Lk(a, !0, null, b)) })
    }

    function Ak() {}
    Ak.prototype.h = function(a, b) {
        if (a) {
            var c = a.b,
                d = a.c;
            a.a ? (b.ha(a.b, null, a.a, a.c), B()) : b.xa(c, d) ? Qk(a, b) : C(new L("invalid-auth-event"))
        } else C(new L("invalid-auth-event"))
    };

    function Qk(a, b) {
        var c = a.c,
            d = a.b;
        b.xa(d, c)(a.f, a.g, a.h).then(function(a) { b.ha(d, a, null, c) }).s(function(a) { b.ha(d, null, a, c) })
    };

    function Rk() {
        this.sb = !1;
        Object.defineProperty(this, "appVerificationDisabled", { get: function() { return this.sb }, set: function(a) { this.sb = a }, enumerable: !1 })
    };

    function Sk(a, b) {
        this.a = b;
        J(this, "verificationId", a)
    }
    Sk.prototype.confirm = function(a) { a = sg(this.verificationId, a); return this.a(a) };

    function Tk(a, b, c, d) { return (new qg(a)).Ua(b, c).then(function(a) { return new Sk(a, d) }) };

    function Uk(a) {
        var b = vf(a);
        if (!(b && b.exp && b.auth_time && b.iat)) throw new L("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
        K(this, { token: a, expirationTime: Ee(1E3 * b.exp), authTime: Ee(1E3 * b.auth_time), issuedAtTime: Ee(1E3 * b.iat), signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null, claims: b })
    };

    function Vk(a, b, c) {
        this.h = a;
        this.i = b;
        this.g = c;
        this.c = 3E4;
        this.f = 96E4;
        this.b = null;
        this.a = this.c;
        if (this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!");
    }
    Vk.prototype.start = function() {
        this.a = this.c;
        Wk(this, !0)
    };

    function Xk(a, b) {
        if (b) return a.a = a.c, a.g();
        b = a.a;
        a.a *= 2;
        a.a > a.f && (a.a = a.f);
        return b
    }

    function Wk(a, b) {
        a.stop();
        a.b = Hc(Xk(a, b)).then(function() { return De() }).then(function() { return a.h() }).then(function() { Wk(a, !0) }).s(function(b) { a.i(b) && Wk(a, !1) })
    }
    Vk.prototype.stop = function() { this.b && (this.b.cancel(), this.b = null) };

    function Yk(a) {
        this.f = a;
        this.b = this.a = null;
        this.c = 0
    }
    Yk.prototype.C = function() { return { apiKey: this.f.b, refreshToken: this.a, accessToken: this.b, expirationTime: this.c } };

    function Zk(a, b) {
        var c = b[M],
            d = b.refreshToken;
        b = $k(b.expiresIn);
        a.b = c;
        a.c = b;
        a.a = d
    }

    function al(a, b) {
        a.b = b.b;
        a.a = b.a;
        a.c = b.c
    }

    function $k(a) { return oa() + 1E3 * parseInt(a, 10) }

    function bl(a, b) {
        return Vh(a.f, b).then(function(b) {
            a.b = b.access_token;
            a.c = $k(b.expires_in);
            a.a = b.refresh_token;
            return { accessToken: a.b, expirationTime: a.c, refreshToken: a.a }
        }).s(function(b) { "auth/user-token-expired" == b.code && (a.a = null); throw b; })
    }
    Yk.prototype.getToken = function(a) { a = !!a; return this.b && !this.a ? C(new L("user-token-expired")) : a || !this.b || oa() > this.c - 3E4 ? this.a ? bl(this, { grant_type: "refresh_token", refresh_token: this.a }) : B(null) : B({ accessToken: this.b, expirationTime: this.c, refreshToken: this.a }) };

    function cl(a, b) {
        this.a = a || null;
        this.b = b || null;
        K(this, { lastSignInTime: Ee(b || null), creationTime: Ee(a || null) })
    }

    function dl(a) { return new cl(a.a, a.b) }
    cl.prototype.C = function() { return { lastLoginAt: this.b, createdAt: this.a } };

    function el(a, b, c, d, e, f) { K(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, phoneNumber: f || null, providerId: b }) }

    function fl(a, b) { D.call(this, a); for (var c in b) this[c] = b[c] }
    t(fl, D);

    function Q(a, b, c) {
        this.G = [];
        this.m = a.apiKey;
        this.o = a.appName;
        this.u = a.authDomain || null;
        a = firebase.SDK_VERSION ? qe(firebase.SDK_VERSION) : null;
        this.b = new Jh(this.m, xf(yf), a);
        this.h = new Yk(this.b);
        gl(this, b[M]);
        Zk(this.h, b);
        J(this, "refreshToken", this.h.a);
        hl(this, c || {});
        F.call(this);
        this.I = !1;
        this.u && te() && (this.a = Kk(this.u, this.m, this.o));
        this.N = [];
        this.i = null;
        this.w = il(this);
        this.V = r(this.Ha, this);
        var d = this;
        this.ka = null;
        this.ta = function(a) { d.pa(a.g) };
        this.X = null;
        this.O = [];
        this.sa = function(a) {
            jl(d,
                a.c)
        };
        this.W = null
    }
    t(Q, F);
    Q.prototype.pa = function(a) {
        this.ka = a;
        Ph(this.b, a)
    };
    Q.prototype.ea = function() { return this.ka };

    function kl(a, b) {
        a.X && E(a.X, "languageCodeChanged", a.ta);
        (a.X = b) && rc(b, "languageCodeChanged", a.ta)
    }

    function jl(a, b) {
        a.O = b;
        Qh(a.b, firebase.SDK_VERSION ? qe(firebase.SDK_VERSION, a.O) : null)
    }
    Q.prototype.ya = function() { return Ja(this.O) };

    function ll(a, b) {
        a.W && E(a.W, "frameworkChanged", a.sa);
        (a.W = b) && rc(b, "frameworkChanged", a.sa)
    }
    Q.prototype.Ha = function() { this.w.b && (this.w.stop(), this.w.start()) };

    function ml(a) { try { return firebase.app(a.o).auth() } catch (b) { throw new L("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.o + "'!"); } }

    function il(a) { return new Vk(function() { return a.F(!0) }, function(a) { return a && "auth/network-request-failed" == a.code ? !0 : !1 }, function() { var b = a.h.c - oa() - 3E5; return 0 < b ? b : 0 }) }

    function nl(a) { a.D || a.w.b || (a.w.start(), E(a, "tokenChanged", a.V), rc(a, "tokenChanged", a.V)) }

    function ol(a) {
        E(a, "tokenChanged", a.V);
        a.w.stop()
    }

    function gl(a, b) {
        a.ra = b;
        J(a, "_lat", b)
    }

    function pl(a, b) { w(a.N, function(a) { return a == b }) }

    function ql(a) { for (var b = [], c = 0; c < a.N.length; c++) b.push(a.N[c](a)); return wb(b).then(function() { return a }) }

    function rl(a) { a.a && !a.I && (a.I = !0, a.a.subscribe(a)) }

    function hl(a, b) { K(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || !1, phoneNumber: b.phoneNumber || null, isAnonymous: b.isAnonymous || !1, metadata: new cl(b.createdAt, b.lastLoginAt), providerData: [] }) }
    J(Q.prototype, "providerId", "firebase");

    function sl() {}

    function tl(a) { return B().then(function() { if (a.D) throw new L("app-deleted"); }) }

    function ul(a) { return Ca(a.providerData, function(a) { return a.providerId }) }

    function vl(a, b) { b && (wl(a, b.providerId), a.providerData.push(b)) }

    function wl(a, b) { w(a.providerData, function(a) { return a.providerId == b }) }

    function xl(a, b, c) {
        ("uid" != b || c) && a.hasOwnProperty(b) && J(a, b, c)
    }

    function yl(a, b) { a != b && (K(a, { uid: b.uid, displayName: b.displayName, photoURL: b.photoURL, email: b.email, emailVerified: b.emailVerified, phoneNumber: b.phoneNumber, isAnonymous: b.isAnonymous, providerData: [] }), b.metadata ? J(a, "metadata", dl(b.metadata)) : J(a, "metadata", new cl), v(b.providerData, function(b) { vl(a, b) }), al(a.h, b.h), J(a, "refreshToken", a.h.a)) }
    g = Q.prototype;
    g.reload = function() { var a = this; return R(this, tl(this).then(function() { return zl(a).then(function() { return ql(a) }).then(sl) })) };

    function zl(a) { return a.F().then(function(b) { var c = a.isAnonymous; return Al(a, b).then(function() { c || xl(a, "isAnonymous", !1); return b }) }) }
    g.dc = function(a) { return this.F(a).then(function(a) { return new Uk(a) }) };
    g.F = function(a) {
        var b = this;
        return R(this, tl(this).then(function() { return b.h.getToken(a) }).then(function(a) {
            if (!a) throw new L("internal-error");
            a.accessToken != b.ra && (gl(b, a.accessToken), b.dispatchEvent(new fl("tokenChanged")));
            xl(b, "refreshToken", a.refreshToken);
            return a.accessToken
        }))
    };

    function Bl(a, b) { b[M] && a.ra != b[M] && (Zk(a.h, b), a.dispatchEvent(new fl("tokenChanged")), gl(a, b[M]), xl(a, "refreshToken", a.h.a)) }

    function Al(a, b) { return P(a.b, Di, { idToken: b }).then(r(a.xc, a)) }
    g.xc = function(a) {
        a = a.users;
        if (!a || !a.length) throw new L("internal-error");
        a = a[0];
        hl(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, phoneNumber: a.phoneNumber, lastLoginAt: a.lastLoginAt, createdAt: a.createdAt });
        for (var b = Cl(a), c = 0; c < b.length; c++) vl(this, b[c]);
        xl(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length))
    };

    function Cl(a) { return (a = a.providerUserInfo) && a.length ? Ca(a, function(a) { return new el(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl, a.phoneNumber) }) : [] }
    g.gb = function(a) {
        var b = this,
            c = null;
        return R(this, a.f(this.b, this.uid).then(function(a) {
            Bl(b, a);
            c = Dl(b, a, "reauthenticate");
            b.i = null;
            return b.reload()
        }).then(function() { return c }), !0)
    };
    g.yc = function(a) { Je("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead."); return this.gb(a).then(function() {}) };

    function El(a, b) { return zl(a).then(function() { if (Ga(ul(a), b)) return ql(a).then(function() { throw new L("provider-already-linked"); }) }) }
    g.eb = function(a) {
        var b = this,
            c = null;
        return R(this, El(this, a.providerId).then(function() { return b.F() }).then(function(c) { return a.b(b.b, c) }).then(function(a) { c = Dl(b, a, "link"); return Fl(b, a) }).then(function() { return c }))
    };
    g.pc = function(a) { Je("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead."); return this.eb(a).then(function(a) { return a.user }) };
    g.qc = function(a, b) { var c = this; return R(this, El(this, "phone").then(function() { return Tk(ml(c), a, b, r(c.eb, c)) })) };
    g.zc = function(a, b) { var c = this; return R(this, B().then(function() { return Tk(ml(c), a, b, r(c.gb, c)) }), !0) };

    function Dl(a, b, c) {
        var d = tg(b);
        b = Df(b);
        return Me({ user: a, credential: d, additionalUserInfo: b, operationType: c })
    }

    function Fl(a, b) { Bl(a, b); return a.reload().then(function() { return a }) }
    g.pb = function(a) { var b = this; return R(this, this.F().then(function(c) { return b.b.pb(c, a) }).then(function(a) { Bl(b, a); return b.reload() })) };
    g.Rc = function(a) { var b = this; return R(this, this.F().then(function(c) { return a.b(b.b, c) }).then(function(a) { Bl(b, a); return b.reload() })) };
    g.qb = function(a) { var b = this; return R(this, this.F().then(function(c) { return b.b.qb(c, a) }).then(function(a) { Bl(b, a); return b.reload() })) };
    g.rb = function(a) {
        if (void 0 === a.displayName && void 0 === a.photoURL) return tl(this);
        var b = this;
        return R(this, this.F().then(function(c) { return b.b.rb(c, { displayName: a.displayName, photoUrl: a.photoURL }) }).then(function(a) {
            Bl(b, a);
            xl(b, "displayName", a.displayName || null);
            xl(b, "photoURL", a.photoUrl || null);
            v(b.providerData, function(a) { "password" === a.providerId && (J(a, "displayName", b.displayName), J(a, "photoURL", b.photoURL)) });
            return ql(b)
        }).then(sl))
    };
    g.Pc = function(a) {
        var b = this;
        return R(this, zl(this).then(function(c) {
            return Ga(ul(b), a) ? oi(b.b, c, [a]).then(function(a) {
                var c = {};
                v(a.providerUserInfo || [], function(a) { c[a.providerId] = !0 });
                v(ul(b), function(a) { c[a] || wl(b, a) });
                c[qg.PROVIDER_ID] || J(b, "phoneNumber", null);
                return ql(b)
            }) : ql(b).then(function() { throw new L("no-such-provider"); })
        }))
    };
    g.delete = function() {
        var a = this;
        return R(this, this.F().then(function(b) { return P(a.b, Ci, { idToken: b }) }).then(function() { a.dispatchEvent(new fl("userDeleted")) })).then(function() {
            for (var b = 0; b < a.G.length; b++) a.G[b].cancel("app-deleted");
            kl(a, null);
            ll(a, null);
            a.G = [];
            a.D = !0;
            ol(a);
            J(a, "refreshToken", null);
            a.a && a.a.unsubscribe(a)
        })
    };
    g.vb = function(a, b) { return "linkViaPopup" == a && (this.g || null) == b && this.f || "reauthViaPopup" == a && (this.g || null) == b && this.f || "linkViaRedirect" == a && (this.aa || null) == b || "reauthViaRedirect" == a && (this.aa || null) == b ? !0 : !1 };
    g.ha = function(a, b, c, d) { "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.g || null) || (c && this.v ? this.v(c) : b && !c && this.f && this.f(b), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v) };
    g.xa = function(a, b) { return "linkViaPopup" == a && b == (this.g || null) ? r(this.Ab, this) : "reauthViaPopup" == a && b == (this.g || null) ? r(this.Bb, this) : "linkViaRedirect" == a && (this.aa || null) == b ? r(this.Ab, this) : "reauthViaRedirect" == a && (this.aa || null) == b ? r(this.Bb, this) : null };
    g.rc = function(a) { var b = this; return Gl(this, "linkViaPopup", a, function() { return El(b, a.providerId).then(function() { return ql(b) }) }, !1) };
    g.Ac = function(a) { return Gl(this, "reauthViaPopup", a, function() { return B() }, !0) };

    function Gl(a, b, c, d, e) {
        if (!te()) return C(new L("operation-not-supported-in-this-environment"));
        if (a.i && !e) return C(a.i);
        var f = Cf(c.providerId),
            h = se(a.uid + ":::"),
            m = null;
        (!ve() || ke()) && a.u && c.isOAuthProvider && (m = Yi(a.u, a.m, a.o, b, c, null, h, firebase.SDK_VERSION || null));
        var p = ce(m, f && f.Ba, f && f.Aa);
        d = d().then(function() { Hl(a); if (!e) return a.F().then(function() {}) }).then(function() { return Ik(a.a, p, b, c, h, !!m) }).then(function() {
            return new A(function(c, d) {
                a.ha(b, null, new L("cancelled-popup-request"), a.g || null);
                a.f = c;
                a.v = d;
                a.g = h;
                a.c = a.a.Ea(a, b, p, h)
            })
        }).then(function(a) { p && be(p); return a ? Me(a) : null }).s(function(a) { p && be(p); throw a; });
        return R(a, d, e)
    }
    g.sc = function(a) { var b = this; return Il(this, "linkViaRedirect", a, function() { return El(b, a.providerId) }, !1) };
    g.Bc = function(a) { return Il(this, "reauthViaRedirect", a, function() { return B() }, !0) };

    function Il(a, b, c, d, e) {
        if (!te()) return C(new L("operation-not-supported-in-this-environment"));
        if (a.i && !e) return C(a.i);
        var f = null,
            h = se(a.uid + ":::");
        d = d().then(function() { Hl(a); if (!e) return a.F().then(function() {}) }).then(function() { a.aa = h; return ql(a) }).then(function(b) { a.ba && (b = a.ba, b = b.b.set(Jl, a.C(), b.a)); return b }).then(function() { return a.a.Ca(b, c, h) }).s(function(b) { f = b; if (a.ba) return Kl(a.ba); throw f; }).then(function() { if (f) throw f; });
        return R(a, d, e)
    }

    function Hl(a) { if (!a.a || !a.I) { if (a.a && !a.I) throw new L("internal-error"); throw new L("auth-domain-config-required"); } }
    g.Ab = function(a, b, c) {
        var d = this;
        this.c && (this.c.cancel(), this.c = null);
        var e = null,
            f = this.F().then(function(e) { return Sf(d.b, { requestUri: a, postBody: c, sessionId: b, idToken: e }) }).then(function(a) { e = Dl(d, a, "link"); return Fl(d, a) }).then(function() { return e });
        return R(this, f)
    };
    g.Bb = function(a, b, c) {
        var d = this;
        this.c && (this.c.cancel(), this.c = null);
        var e = null,
            f = B().then(function() { return Of(Tf(d.b, { requestUri: a, sessionId: b, postBody: c }), d.uid) }).then(function(a) {
                e = Dl(d, a, "reauthenticate");
                Bl(d, a);
                d.i = null;
                return d.reload()
            }).then(function() { return e });
        return R(this, f, !0)
    };
    g.jb = function(a) {
        var b = this,
            c = null;
        return R(this, this.F().then(function(b) { c = b; return "undefined" === typeof a || Za(a) ? {} : mf(new bf(a)) }).then(function(a) { return b.b.jb(c, a) }).then(function(a) { if (b.email != a) return b.reload() }).then(function() {}))
    };

    function R(a, b, c) {
        var d = Ll(a, b, c);
        a.G.push(d);
        d.ia(function() { Ha(a.G, d) });
        return d
    }

    function Ll(a, b, c) { return a.i && !c ? (b.cancel(), C(a.i)) : b.s(function(b) {!b || "auth/user-disabled" != b.code && "auth/user-token-expired" != b.code || (a.i || a.dispatchEvent(new fl("userInvalidated")), a.i = b); throw b; }) }
    g.toJSON = function() { return this.C() };
    g.C = function() {
        var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.m, appName: this.o, authDomain: this.u, stsTokenManager: this.h.C(), redirectEventId: this.aa || null };
        this.metadata && bb(a, this.metadata.C());
        v(this.providerData, function(b) { a.providerData.push(Ne(b)) });
        return a
    };

    function Ml(a) {
        if (!a.apiKey) return null;
        var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName },
            c = {};
        if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c[M] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - oa()) / 1E3;
        else return null;
        var d = new Q(b, c, a);
        a.providerData && v(a.providerData, function(a) { a && vl(d, Me(a)) });
        a.redirectEventId && (d.aa = a.redirectEventId);
        return d
    }

    function Nl(a, b, c, d) {
        var e = new Q(a, b);
        c && (e.ba = c);
        d && jl(e, d);
        return e.reload().then(function() { return e })
    }

    function Ol(a, b, c, d) {
        b = b || { apiKey: a.m, authDomain: a.u, appName: a.o };
        var e = a.h,
            f = {};
        f[M] = e.b;
        f.refreshToken = e.a;
        f.expiresIn = (e.c - oa()) / 1E3;
        b = new Q(b, f);
        c && (b.ba = c);
        d && jl(b, d);
        yl(b, a);
        return b
    };

    function Pl(a) {
        this.a = a;
        this.b = Mj()
    }
    var Jl = { name: "redirectUser", A: "session" };

    function Kl(a) { return Qj(a.b, Jl, a.a) }

    function Ql(a, b) { return a.b.get(Jl, a.a).then(function(a) { a && b && (a.authDomain = b); return Ml(a || {}) }) };

    function Sl(a) {
        this.a = a;
        this.b = Mj();
        this.c = null;
        this.f = Tl(this);
        this.b.addListener(Ul("local"), this.a, r(this.g, this))
    }
    Sl.prototype.g = function() {
        var a = this,
            b = Ul("local");
        Vl(this, function() { return B().then(function() { return a.c && "local" != a.c.A ? a.b.get(b, a.a) : null }).then(function(c) { if (c) return Wl(a, "local").then(function() { a.c = b }) }) })
    };

    function Wl(a, b) {
        var c = [],
            d;
        for (d in Ij) Ij[d] !== b && c.push(Qj(a.b, Ul(Ij[d]), a.a));
        c.push(Qj(a.b, Xl, a.a));
        return vb(c)
    }

    function Tl(a) {
        var b = Ul("local"),
            c = Ul("session"),
            d = Ul("none");
        return Pj(a.b, b, a.a).then(function() { return a.b.get(c, a.a) }).then(function(e) { return e ? c : a.b.get(d, a.a).then(function(c) { return c ? d : a.b.get(b, a.a).then(function(c) { return c ? b : a.b.get(Xl, a.a).then(function(a) { return a ? Ul(a) : b }) }) }) }).then(function(b) { a.c = b; return Wl(a, b.A) }).s(function() { a.c || (a.c = b) })
    }
    var Xl = { name: "persistence", A: "session" };

    function Ul(a) { return { name: "authUser", A: a } }
    Sl.prototype.mb = function(a) {
        var b = null,
            c = this;
        Jj(a);
        return Vl(this, function() { return a != c.c.A ? c.b.get(c.c, c.a).then(function(d) { b = d; return Wl(c, a) }).then(function() { c.c = Ul(a); if (b) return c.b.set(c.c, b, c.a) }) : B() })
    };

    function Yl(a) { return Vl(a, function() { return a.b.set(Xl, a.c.A, a.a) }) }

    function Zl(a, b) { return Vl(a, function() { return a.b.set(a.c, b.C(), a.a) }) }

    function $l(a) { return Vl(a, function() { return Qj(a.b, a.c, a.a) }) }

    function am(a, b) { return Vl(a, function() { return a.b.get(a.c, a.a).then(function(a) { a && b && (a.authDomain = b); return Ml(a || {}) }) }) }

    function Vl(a, b) { a.f = a.f.then(b, b); return a.f };

    function bm(a) {
        this.m = !1;
        J(this, "settings", new Rk);
        J(this, "app", a);
        if (S(this).options && S(this).options.apiKey) a = firebase.SDK_VERSION ? qe(firebase.SDK_VERSION) : null, this.b = new Jh(S(this).options && S(this).options.apiKey, xf(yf), a);
        else throw new L("invalid-api-key");
        this.N = [];
        this.o = [];
        this.I = [];
        this.Tb = firebase.INTERNAL.createSubscribe(r(this.mc, this));
        this.O = void 0;
        this.Ub = firebase.INTERNAL.createSubscribe(r(this.nc, this));
        cm(this, null);
        this.h = new Sl(S(this).options.apiKey + ":" + S(this).name);
        this.w =
            new Pl(S(this).options.apiKey + ":" + S(this).name);
        this.V = T(this, dm(this));
        this.i = T(this, em(this));
        this.X = !1;
        this.ka = r(this.Mc, this);
        this.Ha = r(this.Z, this);
        this.ra = r(this.bc, this);
        this.sa = r(this.jc, this);
        this.ta = r(this.kc, this);
        fm(this);
        this.INTERNAL = {};
        this.INTERNAL["delete"] = r(this.delete, this);
        this.INTERNAL.logFramework = r(this.tc, this);
        this.u = 0;
        F.call(this);
        gm(this);
        this.G = []
    }
    t(bm, F);

    function hm(a) {
        D.call(this, "languageCodeChanged");
        this.g = a
    }
    t(hm, D);

    function im(a) {
        D.call(this, "frameworkChanged");
        this.c = a
    }
    t(im, D);
    g = bm.prototype;
    g.mb = function(a) { a = this.h.mb(a); return T(this, a) };
    g.pa = function(a) { this.W === a || this.m || (this.W = a, Ph(this.b, this.W), this.dispatchEvent(new hm(this.ea()))) };
    g.ea = function() { return this.W };
    g.Sc = function() {
        var a = k.navigator;
        this.pa(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null)
    };
    g.tc = function(a) {
        this.G.push(a);
        Qh(this.b, firebase.SDK_VERSION ? qe(firebase.SDK_VERSION, this.G) : null);
        this.dispatchEvent(new im(this.G))
    };
    g.ya = function() { return Ja(this.G) };

    function gm(a) {
        Object.defineProperty(a, "lc", { get: function() { return this.ea() }, set: function(a) { this.pa(a) }, enumerable: !1 });
        a.W = null
    }
    g.toJSON = function() { return { apiKey: S(this).options.apiKey, authDomain: S(this).options.authDomain, appName: S(this).name, currentUser: U(this) && U(this).C() } };

    function jm(a) { return a.Sb || C(new L("auth-domain-config-required")) }

    function fm(a) {
        var b = S(a).options.authDomain,
            c = S(a).options.apiKey;
        b && te() && (a.Sb = a.V.then(function() {
            if (!a.m) {
                a.a = Kk(b, c, S(a).name);
                a.a.subscribe(a);
                U(a) && rl(U(a));
                if (a.D) {
                    rl(a.D);
                    var d = a.D;
                    d.pa(a.ea());
                    kl(d, a);
                    d = a.D;
                    jl(d, a.G);
                    ll(d, a);
                    a.D = null
                }
                return a.a
            }
        }))
    }
    g.vb = function(a, b) {
        switch (a) {
            case "unknown":
            case "signInViaRedirect":
                return !0;
            case "signInViaPopup":
                return this.g == b && !!this.f;
            default:
                return !1
        }
    };
    g.ha = function(a, b, c, d) { "signInViaPopup" == a && this.g == d && (c && this.v ? this.v(c) : b && !c && this.f && this.f(b), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v) };
    g.xa = function(a, b) { return "signInViaRedirect" == a || "signInViaPopup" == a && this.g == b && this.f ? r(this.ac, this) : null };
    g.ac = function(a, b, c) {
        var d = this;
        a = { requestUri: a, postBody: c, sessionId: b };
        this.c && (this.c.cancel(), this.c = null);
        var e = null,
            f = null,
            h = Qf(d.b, a).then(function(a) {
                e = tg(a);
                f = Df(a);
                return a
            });
        a = d.V.then(function() { return h }).then(function(a) { return km(d, a) }).then(function() { return Me({ user: U(d), credential: e, additionalUserInfo: f, operationType: "signIn" }) });
        return T(this, a)
    };
    g.Kc = function(a) {
        if (!te()) return C(new L("operation-not-supported-in-this-environment"));
        var b = this,
            c = Cf(a.providerId),
            d = se(),
            e = null;
        (!ve() || ke()) && S(this).options.authDomain && a.isOAuthProvider && (e = Yi(S(this).options.authDomain, S(this).options.apiKey, S(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));
        var f = ce(e, c && c.Ba, c && c.Aa);
        c = jm(this).then(function(b) { return Ik(b, f, "signInViaPopup", a, d, !!e) }).then(function() {
            return new A(function(a, c) {
                b.ha("signInViaPopup", null, new L("cancelled-popup-request"),
                    b.g);
                b.f = a;
                b.v = c;
                b.g = d;
                b.c = b.a.Ea(b, "signInViaPopup", f, d)
            })
        }).then(function(a) { f && be(f); return a ? Me(a) : null }).s(function(a) { f && be(f); throw a; });
        return T(this, c)
    };
    g.Lc = function(a) {
        if (!te()) return C(new L("operation-not-supported-in-this-environment"));
        var b = this,
            c = jm(this).then(function() { return Yl(b.h) }).then(function() { return b.a.Ca("signInViaRedirect", a) });
        return T(this, c)
    };
    g.fa = function() {
        if (!te()) return C(new L("operation-not-supported-in-this-environment"));
        var a = this,
            b = jm(this).then(function() { return a.a.fa() }).then(function(a) { return a ? Me(a) : null });
        return T(this, b)
    };
    g.Qc = function(a) {
        if (!a) return C(new L("null-user"));
        var b = this,
            c = {};
        c.apiKey = S(this).options.apiKey;
        c.authDomain = S(this).options.authDomain;
        c.appName = S(this).name;
        var d = Ol(a, c, b.w, b.ya());
        return T(this, this.i.then(function() { if (S(b).options.apiKey != a.m) return d.reload() }).then(function() {
            if (U(b) && a.uid == U(b).uid) return yl(U(b), a), b.Z(a);
            cm(b, d);
            rl(d);
            return b.Z(d)
        }).then(function() { lm(b) }))
    };

    function km(a, b) {
        var c = {};
        c.apiKey = S(a).options.apiKey;
        c.authDomain = S(a).options.authDomain;
        c.appName = S(a).name;
        return a.V.then(function() { return Nl(c, b, a.w, a.ya()) }).then(function(b) {
            if (U(a) && b.uid == U(a).uid) return yl(U(a), b), a.Z(b);
            cm(a, b);
            rl(b);
            return a.Z(b)
        }).then(function() { lm(a) })
    }

    function cm(a, b) {
        U(a) && (pl(U(a), a.Ha), E(U(a), "tokenChanged", a.ra), E(U(a), "userDeleted", a.sa), E(U(a), "userInvalidated", a.ta), ol(U(a)));
        b && (b.N.push(a.Ha), rc(b, "tokenChanged", a.ra), rc(b, "userDeleted", a.sa), rc(b, "userInvalidated", a.ta), 0 < a.u && nl(b));
        J(a, "currentUser", b);
        b && (b.pa(a.ea()), kl(b, a), jl(b, a.G), ll(b, a))
    }
    g.nb = function() {
        var a = this,
            b = this.i.then(function() {
                if (!U(a)) return B();
                cm(a, null);
                return $l(a.h).then(function() { lm(a) })
            });
        return T(this, b)
    };

    function mm(a) { var b = Ql(a.w, S(a).options.authDomain).then(function(b) { if (a.D = b) b.ba = a.w; return Kl(a.w) }); return T(a, b) }

    function dm(a) {
        var b = S(a).options.authDomain,
            c = mm(a).then(function() { return am(a.h, b) }).then(function(b) { return b ? (b.ba = a.w, a.D && (a.D.aa || null) == (b.aa || null) ? b : b.reload().then(function() { return Zl(a.h, b).then(function() { return b }) }).s(function(c) { return "auth/network-request-failed" == c.code ? b : $l(a.h) })) : null }).then(function(b) { cm(a, b || null) });
        return T(a, c)
    }

    function em(a) {
        return a.V.then(function() { return a.fa() }).s(function() {}).then(function() { if (!a.m) return a.ka() }).s(function() {}).then(function() {
            if (!a.m) {
                a.X = !0;
                var b = a.h;
                b.b.addListener(Ul("local"), b.a, a.ka)
            }
        })
    }
    g.Mc = function() {
        var a = this;
        return am(this.h, S(this).options.authDomain).then(function(b) {
            if (!a.m) {
                var c;
                if (c = U(a) && b) {
                    c = U(a).uid;
                    var d = b.uid;
                    c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d
                }
                if (c) return yl(U(a), b), U(a).F();
                if (U(a) || b) cm(a, b), b && (rl(b), b.ba = a.w), a.a && a.a.subscribe(a), lm(a)
            }
        })
    };
    g.Z = function(a) { return Zl(this.h, a) };
    g.bc = function() {
        lm(this);
        this.Z(U(this))
    };
    g.jc = function() { this.nb() };
    g.kc = function() { this.nb() };

    function nm(a, b) {
        var c = null,
            d = null;
        return T(a, b.then(function(b) {
            c = tg(b);
            d = Df(b);
            return km(a, b)
        }).then(function() { return Me({ user: U(a), credential: c, additionalUserInfo: d, operationType: "signIn" }) }))
    }
    g.mc = function(a) {
        var b = this;
        this.addAuthTokenListener(function() { a.next(U(b)) })
    };
    g.nc = function(a) {
        var b = this;
        om(this, function() { a.next(U(b)) })
    };
    g.vc = function(a, b, c) {
        var d = this;
        this.X && firebase.Promise.resolve().then(function() { n(a) ? a(U(d)) : n(a.next) && a.next(U(d)) });
        return this.Tb(a, b, c)
    };
    g.uc = function(a, b, c) {
        var d = this;
        this.X && firebase.Promise.resolve().then(function() {
            d.O = d.getUid();
            n(a) ? a(U(d)) : n(a.next) && a.next(U(d))
        });
        return this.Ub(a, b, c)
    };
    g.cc = function(a) {
        var b = this,
            c = this.i.then(function() { return U(b) ? U(b).F(a).then(function(a) { return { accessToken: a } }) : null });
        return T(this, c)
    };
    g.Nb = function(a) {
        var b = this;
        return this.i.then(function() { return nm(b, P(b.b, Fi, { token: a })) }).then(function(a) {
            var c = a.user;
            xl(c, "isAnonymous", !1);
            b.Z(c);
            return a
        })
    };
    g.Ec = function(a) { Je("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead."); return this.Nb(a) };
    g.Fc = function(a, b) { Je("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead."); return this.Ob(a, b) };
    g.Ob = function(a, b) { var c = this; return this.i.then(function() { return nm(c, P(c.b, hg, { email: a, password: b })) }) };
    g.xb = function(a, b) { var c = this; return this.i.then(function() { return nm(c, P(c.b, Bi, { email: a, password: b })) }) };
    g.Wb = function(a, b) { Je("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead."); return this.xb(a, b) };
    g.Hc = function(a) { Je("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead."); return this.Pa(a).then(function(a) { return a.user }) };
    g.Pa = function(a) { var b = this; return this.i.then(function() { return nm(b, a.la(b.b)) }) };
    g.Qa = function() {
        var a = this;
        return this.i.then(function() {
            var b = U(a);
            if (b && b.isAnonymous) { var c = Me({ providerId: null, isNewUser: !1 }); return Me({ user: b, credential: null, additionalUserInfo: c, operationType: "signIn" }) }
            return nm(a, a.b.Qa()).then(function(b) {
                var c = b.user;
                xl(c, "isAnonymous", !0);
                a.Z(c);
                return b
            })
        })
    };
    g.Gc = function() { Je("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead."); return this.Qa() };

    function S(a) { return a.app }

    function U(a) { return a.currentUser }
    g.getUid = function() { return U(this) && U(this).uid || null };

    function pm(a) { return U(a) && U(a)._lat || null }

    function lm(a) {
        if (a.X) {
            for (var b = 0; b < a.o.length; b++)
                if (a.o[b]) a.o[b](pm(a));
            if (a.O !== a.getUid() && a.I.length)
                for (a.O = a.getUid(), b = 0; b < a.I.length; b++)
                    if (a.I[b]) a.I[b](pm(a))
        }
    }
    g.Vb = function(a) {
        this.addAuthTokenListener(a);
        this.u++;
        0 < this.u && U(this) && nl(U(this))
    };
    g.Cc = function(a) {
        var b = this;
        v(this.o, function(c) { c == a && b.u-- });
        0 > this.u && (this.u = 0);
        0 == this.u && U(this) && ol(U(this));
        this.removeAuthTokenListener(a)
    };
    g.addAuthTokenListener = function(a) {
        var b = this;
        this.o.push(a);
        T(this, this.i.then(function() { b.m || Ga(b.o, a) && a(pm(b)) }))
    };
    g.removeAuthTokenListener = function(a) { w(this.o, function(b) { return b == a }) };

    function om(a, b) {
        a.I.push(b);
        T(a, a.i.then(function() {!a.m && Ga(a.I, b) && a.O !== a.getUid() && (a.O = a.getUid(), b(pm(a))) }))
    }
    g.delete = function() {
        this.m = !0;
        for (var a = 0; a < this.N.length; a++) this.N[a].cancel("app-deleted");
        this.N = [];
        this.h && (a = this.h, a.b.removeListener(Ul("local"), a.a, this.ka));
        this.a && (this.a.unsubscribe(this), this.a.Ya());
        return firebase.Promise.resolve()
    };

    function T(a, b) {
        a.N.push(b);
        b.ia(function() { Ha(a.N, b) });
        return b
    }
    g.Zb = function(a) { Je("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead."); return T(this, $h(this.b, a)) };
    g.$b = function(a) { return T(this, bi(this.b, a)) };
    g.oc = function(a) { return !!lg(a) };
    g.lb = function(a, b) { var c = this; return T(this, B().then(function() { var a = new bf(b); if (!a.c) throw new L("argument-error", kf + " must be true when sending sign in link to email"); return mf(a) }).then(function(b) { return c.b.lb(a, b) }).then(function() {})) };
    g.Tc = function(a) { return this.Ja(a).then(function(a) { return a.data.email }) };
    g.Za = function(a, b) { return T(this, this.b.Za(a, b).then(function() {})) };
    g.Ja = function(a) { return T(this, this.b.Ja(a).then(function(a) { return new Qe(a) })) };
    g.Wa = function(a) { return T(this, this.b.Wa(a).then(function() {})) };
    g.kb = function(a, b) { var c = this; return T(this, B().then(function() { return "undefined" === typeof b || Za(b) ? {} : mf(new bf(b)) }).then(function(b) { return c.b.kb(a, b) }).then(function() {})) };
    g.Jc = function(a, b) { return T(this, Tk(this, a, b, r(this.Pa, this))) };
    g.Ic = function(a, b) { var c = this; return T(this, B().then(function() { var d = kg(a, b || Vd()); return c.Pa(d) })) };

    function qm() {}
    qm.prototype.render = function() {};
    qm.prototype.reset = function() {};
    qm.prototype.getResponse = function() {};
    qm.prototype.execute = function() {};

    function rm() {
        this.a = {};
        this.b = 1E12
    }
    var sm = null;
    rm.prototype.render = function(a, b) { this.a[this.b.toString()] = new tm(a, b); return this.b++ };
    rm.prototype.reset = function(a) {
        var b = um(this, a);
        a = vm(a);
        b && a && (b.delete(), delete this.a[a])
    };
    rm.prototype.getResponse = function(a) { return (a = um(this, a)) ? a.getResponse() : null };
    rm.prototype.execute = function(a) {
        (a = um(this, a)) && a.execute()
    };

    function um(a, b) { return (b = vm(b)) ? a.a[b] || null : null }

    function vm(a) { return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null }

    function tm(a, b) {
        this.g = !1;
        this.c = b;
        this.a = this.b = null;
        this.h = "invisible" !== this.c.size;
        this.f = Id(a);
        var c = this;
        this.i = function() { c.execute() };
        this.h ? this.execute() : rc(this.f, "click", this.i)
    }
    tm.prototype.getResponse = function() { wm(this); return this.b };
    tm.prototype.execute = function() {
        wm(this);
        var a = this;
        this.a || (this.a = setTimeout(function() {
            a.b = oe();
            var b = a.c.callback,
                c = a.c["expired-callback"];
            if (b) try { b(a.b) } catch (d) {}
            a.a = setTimeout(function() {
                a.a = null;
                a.b = null;
                if (c) try { c() } catch (d) {}
                a.h && a.execute()
            }, 6E4)
        }, 500))
    };
    tm.prototype.delete = function() {
        wm(this);
        this.g = !0;
        clearTimeout(this.a);
        this.a = null;
        E(this.f, "click", this.i)
    };

    function wm(a) { if (a.g) throw Error("reCAPTCHA mock was already deleted!"); };

    function xm() {}
    xm.prototype.g = function() { sm || (sm = new rm); return B(sm) };
    xm.prototype.c = function() {};
    var ym = null;

    function zm() {
        this.b = k.grecaptcha ? Infinity : 0;
        this.f = null;
        this.a = "__rcb" + Math.floor(1E6 * Math.random()).toString()
    }
    var Am = qd("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
        Bm = new Be(3E4, 6E4);
    zm.prototype.g = function(a) {
        var b = this;
        return new A(function(c, d) {
            var e = setTimeout(function() { d(new L("network-request-failed")) }, Bm.get());
            if (!k.grecaptcha || a !== b.f && !b.b) {
                k[b.a] = function() {
                    if (k.grecaptcha) {
                        b.f = a;
                        var f = k.grecaptcha.render;
                        k.grecaptcha.render = function(a, c) {
                            a = f(a, c);
                            b.b++;
                            return a
                        };
                        clearTimeout(e);
                        c(k.grecaptcha)
                    } else clearTimeout(e), d(new L("internal-error"));
                    delete k[b.a]
                };
                var f = ud(Am, { onload: b.a, hl: a || "" });
                B(Bh(f)).s(function() {
                    clearTimeout(e);
                    d(new L("internal-error", "Unable to load external reCAPTCHA dependencies!"))
                })
            } else clearTimeout(e),
                c(k.grecaptcha)
        })
    };
    zm.prototype.c = function() { this.b-- };
    var Cm = null;

    function Dm(a, b, c, d, e, f, h) {
        J(this, "type", "recaptcha");
        this.c = this.f = null;
        this.D = !1;
        this.m = b;
        this.g = null;
        h ? (ym || (ym = new xm), h = ym) : (Cm || (Cm = new zm), h = Cm);
        this.o = h;
        this.a = c || { theme: "light", type: "image" };
        this.h = [];
        if (this.a[Em]) throw new L("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
        this.i = "invisible" === this.a[Fm];
        if (!k.document) throw new L("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
        if (!Id(b) || !this.i && Id(b).hasChildNodes()) throw new L("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
        this.u = new Jh(a, f || null, e || null);
        this.v = d || function() { return null };
        var m = this;
        this.l = [];
        var p = this.a[Gm];
        this.a[Gm] = function(a) {
            Hm(m, a);
            if ("function" === typeof p) p(a);
            else if ("string" === typeof p) { var b = I(p, k); "function" === typeof b && b(a) }
        };
        var x = this.a[Im];
        this.a[Im] = function() {
            Hm(m, null);
            if ("function" === typeof x) x();
            else if ("string" === typeof x) {
                var a =
                    I(x, k);
                "function" === typeof a && a()
            }
        }
    }
    var Gm = "callback",
        Im = "expired-callback",
        Em = "sitekey",
        Fm = "size";

    function Hm(a, b) { for (var c = 0; c < a.l.length; c++) try { a.l[c](b) } catch (d) {} }

    function Jm(a, b) { w(a.l, function(a) { return a == b }) }

    function Km(a, b) {
        a.h.push(b);
        b.ia(function() { Ha(a.h, b) });
        return b
    }
    g = Dm.prototype;
    g.za = function() { var a = this; return this.f ? this.f : this.f = Km(this, B().then(function() { if (ue() && !le()) return ge(); throw new L("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment."); }).then(function() { return a.o.g(a.v()) }).then(function(b) { a.g = b; return P(a.u, Ei, {}) }).then(function(b) { a.a[Em] = b.recaptchaSiteKey }).s(function(b) { a.f = null; throw b; })) };
    g.render = function() {
        Lm(this);
        var a = this;
        return Km(this, this.za().then(function() {
            if (null === a.c) {
                var b = a.m;
                if (!a.i) {
                    var c = Id(b);
                    b = Ld("DIV");
                    c.appendChild(b)
                }
                a.c = a.g.render(b, a.a)
            }
            return a.c
        }))
    };
    g.verify = function() {
        Lm(this);
        var a = this;
        return Km(this, this.render().then(function(b) {
            return new A(function(c) {
                var d = a.g.getResponse(b);
                if (d) c(d);
                else {
                    var e = function(b) { b && (Jm(a, e), c(b)) };
                    a.l.push(e);
                    a.i && a.g.execute(a.c)
                }
            })
        }))
    };
    g.reset = function() {
        Lm(this);
        null !== this.c && this.g.reset(this.c)
    };

    function Lm(a) { if (a.D) throw new L("internal-error", "RecaptchaVerifier instance has been destroyed."); }
    g.clear = function() {
        Lm(this);
        this.D = !0;
        this.o.c();
        for (var a = 0; a < this.h.length; a++) this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
        if (!this.i) { a = Id(this.m); for (var b; b = a.firstChild;) a.removeChild(b) }
    };

    function Mm(a, b, c) {
        var d = !1;
        try { this.b = c || firebase.app() } catch (h) { throw new L("argument-error", "No firebase.app.App instance is currently initialized."); }
        if (this.b.options && this.b.options.apiKey) c = this.b.options.apiKey;
        else throw new L("invalid-api-key");
        var e = this,
            f = null;
        try { f = this.b.auth().ya() } catch (h) {}
        try { d = this.b.auth().settings.appVerificationDisabledForTesting } catch (h) {}
        f = firebase.SDK_VERSION ? qe(firebase.SDK_VERSION, f) : null;
        Dm.call(this, c, a, b, function() {
            try { var a = e.b.auth().ea() } catch (m) {
                a =
                    null
            }
            return a
        }, f, xf(yf), d)
    }
    t(Mm, Dm);

    function Nm(a, b, c, d) {
        a: {
            c = Array.prototype.slice.call(c);
            var e = 0;
            for (var f = !1, h = 0; h < b.length; h++)
                if (b[h].optional) f = !0;
                else {
                    if (f) throw new L("internal-error", "Argument validator encountered a required argument after an optional argument.");
                    e++
                }
            f = b.length;
            if (c.length < e || f < c.length) d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";
            else {
                for (e = 0; e < c.length; e++)
                    if (f = b[e].optional && void 0 === c[e], !b[e].M(c[e]) && !f) {
                        b = b[e];
                        if (0 > e || e >= Om.length) throw new L("internal-error",
                            "Argument validator received an unsupported number of arguments.");
                        c = Om[e];
                        d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.K + ".";
                        break a
                    }
                d = null
            }
        }
        if (d) throw new L("argument-error", a + " failed: " + d);
    }
    var Om = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

    function V(a, b) { return { name: a || "", K: "a valid string", optional: !!b, M: l } }

    function Pm(a, b) { return { name: a || "", K: "a boolean", optional: !!b, M: ba } }

    function W(a, b) { return { name: a || "", K: "a valid object", optional: !!b, M: q } }

    function Qm(a, b) { return { name: a || "", K: "a function", optional: !!b, M: n } }

    function Rm(a, b) { return { name: a || "", K: "null", optional: !!b, M: ea } }

    function Sm() { return { name: "", K: "an HTML element", optional: !1, M: function(a) { return !!(a && a instanceof Element) } } }

    function Tm() { return { name: "auth", K: "an instance of Firebase Auth", optional: !0, M: function(a) { return !!(a && a instanceof bm) } } }

    function Um() { return { name: "app", K: "an instance of Firebase App", optional: !0, M: function(a) { return !!(a && a instanceof firebase.app.App) } } }

    function Vm(a) { return { name: a ? a + "Credential" : "credential", K: a ? "a valid " + a + " credential" : "a valid credential", optional: !1, M: function(b) { if (!b) return !1; var c = !a || b.providerId === a; return !(!b.la || !c) } } }

    function Wm() { return { name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(a) { return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider")) } } }

    function Xm() { return { name: "applicationVerifier", K: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, M: function(a) { return !!(a && l(a.type) && n(a.verify)) } } }

    function X(a, b, c, d) { return { name: c || "", K: a.K + " or " + b.K, optional: !!d, M: function(c) { return a.M(c) || b.M(c) } } };

    function Y(a, b) {
        for (var c in b) {
            var d = b[c].name;
            a[d] = Ym(d, a[c], b[c].j)
        }
    }

    function Zm(a, b) {
        for (var c in b) {
            var d = b[c].name;
            d !== c && Object.defineProperty(a, d, {
                get: na(function(a) { return this[a] }, c),
                set: na(function(a, b, c, d) {
                    Nm(a, [c], [d], !0);
                    this[b] = d
                }, d, c, b[c].tb),
                enumerable: !0
            })
        }
    }

    function Z(a, b, c, d) { a[b] = Ym(b, c, d) }

    function Ym(a, b, c) {
        function d() {
            var a = Array.prototype.slice.call(arguments);
            Nm(e, c, a);
            return b.apply(this, a)
        }
        if (!c) return b;
        var e = $m(a),
            f;
        for (f in b) d[f] = b[f];
        for (f in b.prototype) d.prototype[f] = b.prototype[f];
        return d
    }

    function $m(a) { a = a.split("."); return a[a.length - 1] };
    Y(bm.prototype, {
        Wa: { name: "applyActionCode", j: [V("code")] },
        Ja: { name: "checkActionCode", j: [V("code")] },
        Za: { name: "confirmPasswordReset", j: [V("code"), V("newPassword")] },
        xb: { name: "createUserWithEmailAndPassword", j: [V("email"), V("password")] },
        Wb: { name: "createUserAndRetrieveDataWithEmailAndPassword", j: [V("email"), V("password")] },
        Zb: { name: "fetchProvidersForEmail", j: [V("email")] },
        $b: { name: "fetchSignInMethodsForEmail", j: [V("email")] },
        fa: { name: "getRedirectResult", j: [] },
        oc: { name: "isSignInWithEmailLink", j: [V("emailLink")] },
        uc: { name: "onAuthStateChanged", j: [X(W(), Qm(), "nextOrObserver"), Qm("opt_error", !0), Qm("opt_completed", !0)] },
        vc: { name: "onIdTokenChanged", j: [X(W(), Qm(), "nextOrObserver"), Qm("opt_error", !0), Qm("opt_completed", !0)] },
        kb: { name: "sendPasswordResetEmail", j: [V("email"), X(W("opt_actionCodeSettings", !0), Rm(null, !0), "opt_actionCodeSettings", !0)] },
        lb: { name: "sendSignInLinkToEmail", j: [V("email"), W("actionCodeSettings")] },
        mb: { name: "setPersistence", j: [V("persistence")] },
        Pa: {
            name: "signInAndRetrieveDataWithCredential",
            j: [Vm()]
        },
        Qa: { name: "signInAnonymously", j: [] },
        Gc: { name: "signInAnonymouslyAndRetrieveData", j: [] },
        Hc: { name: "signInWithCredential", j: [Vm()] },
        Nb: { name: "signInWithCustomToken", j: [V("token")] },
        Ec: { name: "signInAndRetrieveDataWithCustomToken", j: [V("token")] },
        Ob: { name: "signInWithEmailAndPassword", j: [V("email"), V("password")] },
        Ic: { name: "signInWithEmailLink", j: [V("email"), V("emailLink", !0)] },
        Fc: { name: "signInAndRetrieveDataWithEmailAndPassword", j: [V("email"), V("password")] },
        Jc: {
            name: "signInWithPhoneNumber",
            j: [V("phoneNumber"),
                Xm()
            ]
        },
        Kc: { name: "signInWithPopup", j: [Wm()] },
        Lc: { name: "signInWithRedirect", j: [Wm()] },
        Qc: { name: "updateCurrentUser", j: [X(function(a) { return { name: "user", K: "an instance of Firebase User", optional: !!a, M: function(a) { return !!(a && a instanceof Q) } } }(), Rm(), "user")] },
        nb: { name: "signOut", j: [] },
        toJSON: { name: "toJSON", j: [V(null, !0)] },
        Sc: { name: "useDeviceLanguage", j: [] },
        Tc: { name: "verifyPasswordResetCode", j: [V("code")] }
    });
    Zm(bm.prototype, { lc: { name: "languageCode", tb: X(V(), Rm(), "languageCode") } });
    bm.Persistence = Ij;
    bm.Persistence.LOCAL = "local";
    bm.Persistence.SESSION = "session";
    bm.Persistence.NONE = "none";
    Y(Q.prototype, {
        "delete": { name: "delete", j: [] },
        dc: { name: "getIdTokenResult", j: [Pm("opt_forceRefresh", !0)] },
        F: { name: "getIdToken", j: [Pm("opt_forceRefresh", !0)] },
        eb: { name: "linkAndRetrieveDataWithCredential", j: [Vm()] },
        pc: { name: "linkWithCredential", j: [Vm()] },
        qc: { name: "linkWithPhoneNumber", j: [V("phoneNumber"), Xm()] },
        rc: { name: "linkWithPopup", j: [Wm()] },
        sc: { name: "linkWithRedirect", j: [Wm()] },
        gb: { name: "reauthenticateAndRetrieveDataWithCredential", j: [Vm()] },
        yc: { name: "reauthenticateWithCredential", j: [Vm()] },
        zc: {
            name: "reauthenticateWithPhoneNumber",
            j: [V("phoneNumber"), Xm()]
        },
        Ac: { name: "reauthenticateWithPopup", j: [Wm()] },
        Bc: { name: "reauthenticateWithRedirect", j: [Wm()] },
        reload: { name: "reload", j: [] },
        jb: { name: "sendEmailVerification", j: [X(W("opt_actionCodeSettings", !0), Rm(null, !0), "opt_actionCodeSettings", !0)] },
        toJSON: { name: "toJSON", j: [V(null, !0)] },
        Pc: { name: "unlink", j: [V("provider")] },
        pb: { name: "updateEmail", j: [V("email")] },
        qb: { name: "updatePassword", j: [V("password")] },
        Rc: { name: "updatePhoneNumber", j: [Vm("phone")] },
        rb: { name: "updateProfile", j: [W("profile")] }
    });
    Y(rm.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
    Y(qm.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } });
    Y(A.prototype, { ia: { name: "finally" }, s: { name: "catch" }, then: { name: "then" } });
    Zm(Rk.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", tb: Pm("appVerificationDisabledForTesting") } });
    Y(Sk.prototype, { confirm: { name: "confirm", j: [V("verificationCode")] } });
    Z(O, "credential", function(a, b) { return new fg(a, b) }, [V("email"), V("password")]);
    Y(Yf.prototype, { ua: { name: "addScope", j: [V("scope")] }, Da: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(Yf, "credential", Zf, [X(V(), W(), "token")]);
    Z(O, "credentialWithLink", kg, [V("email"), V("emailLink")]);
    Y($f.prototype, { ua: { name: "addScope", j: [V("scope")] }, Da: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z($f, "credential", ag, [X(V(), W(), "token")]);
    Y(bg.prototype, { ua: { name: "addScope", j: [V("scope")] }, Da: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(bg, "credential", cg, [X(V(), X(W(), Rm()), "idToken"), X(V(), Rm(), "accessToken", !0)]);
    Y(dg.prototype, { Da: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(dg, "credential", eg, [X(V(), W(), "token"), V("secret", !0)]);
    Y(N.prototype, { ua: { name: "addScope", j: [V("scope")] }, credential: { name: "credential", j: [X(V(), Rm(), "idToken", !0), X(V(), Rm(), "accessToken", !0), X(V(), Rm(), "nonce", !0)] }, Da: { name: "setCustomParameters", j: [W("customOAuthParameters")] } });
    Z(qg, "credential", sg, [V("verificationId"), V("verificationCode")]);
    Y(qg.prototype, { Ua: { name: "verifyPhoneNumber", j: [V("phoneNumber"), Xm()] } });
    Y(L.prototype, { toJSON: { name: "toJSON", j: [V(null, !0)] } });
    Y(Ag.prototype, { toJSON: { name: "toJSON", j: [V(null, !0)] } });
    Y(zg.prototype, { toJSON: { name: "toJSON", j: [V(null, !0)] } });
    Y(Mm.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } });
    (function() {
        if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
            var a = { Auth: bm, Error: L };
            Z(a, "EmailAuthProvider", O, []);
            Z(a, "FacebookAuthProvider", Yf, []);
            Z(a, "GithubAuthProvider", $f, []);
            Z(a, "GoogleAuthProvider", bg, []);
            Z(a, "TwitterAuthProvider", dg, []);
            Z(a, "OAuthProvider", N, [V("providerId")]);
            Z(a, "SAMLAuthProvider", Xf, [V("providerId")]);
            Z(a, "PhoneAuthProvider", qg, [Tm()]);
            Z(a, "RecaptchaVerifier", Mm, [X(V(), Sm(), "recaptchaContainer"), W("recaptchaParameters", !0), Um()]);
            firebase.INTERNAL.registerService("auth", function(a, c) {
                a = new bm(a);
                c({ INTERNAL: { getUid: r(a.getUid, a), getToken: r(a.cc, a), addAuthTokenListener: r(a.Vb, a), removeAuthTokenListener: r(a.Cc, a) } });
                return a
            }, a, function(a, c) { if ("create" === a) try { c.auth() } catch (d) {} });
            firebase.INTERNAL.extendNamespace({ User: Q })
        } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

//# sourceMappingURL=auth.esm.js.map