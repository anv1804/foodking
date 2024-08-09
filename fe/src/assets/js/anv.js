!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function () {
    "use strict";
    function t(s, a) {
        undefined === s && (s = {}), undefined === a && (a = {}), Object.keys(a).forEach(i => {
            undefined === s[i] ? s[i] = a[i] : null !== a[i] && "object" == typeof a[i] && "constructor" in a[i] && a[i].constructor === Object && (null !== s[i] && "object" == typeof s[i] && "constructor" in s[i] && s[i].constructor === Object) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
        });
    }
    const s = { body: {}, addEventListener() { }, removeEventListener() { }, activeElement: { blur() { }, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() { } }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() { }, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e;
    }
    const i = {
        document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() { }, pushState() { }, go() { }, back() { } }, CustomEvent: function () {
            return this;
        }, addEventListener() { }, removeEventListener() { }, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() { }, Date() { }, screen: {}, setTimeout() { }, clearTimeout() { }, matchMedia: () => ({}), requestAnimationFrame: e => "undefined" == typeof setTimeout ? (null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object, null) : setTimeout(e, 0), cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e;
    }
    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t, set(e) {
                        t.__proto__ = e;
                    }
                });
            }(this));
        }
    }
    function l(e) {
        undefined === e && (e = []);
        const t = [];
        return e.forEach(e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e);
        }), t;
    }
    function d(e, t) {
        const s = r(), i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e]);
            } else l = function (e, t) {
                if ("string" != typeof e) return [e];
                const s = [], a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s;
            }(e.trim(), t || i);
        } else if (e.nodeType || e === s || e === i) l.push(e); else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e;
        }
        return new n(function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
        }(l));
    }
    d.fn = n.prototype;
    const c = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.add(...a);
            }), this;
        }, removeClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.remove(...a);
            }), this;
        }, hasClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map(e => e.split(" ")));
            return Array.prototype.filter.call(this, e => a.filter(t => e.classList.contains(t)).length > 0).length > 0;
        }, toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map(e => e.split(" ")));
            this.forEach(e => {
                a.forEach(t => {
                    e.classList.toggle(t);
                });
            });
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : undefined;
            for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this;
        }, removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        }, transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this;
        }, transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this;
        }, on: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s); else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s);
                }
            }
            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }
            "function" == typeof t[1] && ([a, r, n] = t, i = undefined), n || (n = false);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i) for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }), t.addEventListener(e, l, n);
                } else for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({ listener: r, proxyListener: o }), t.addEventListener(e, o, n);
                }
            }
            return this;
        }, off: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = undefined), n || (n = false);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
                        const i = a[e];
                        r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1));
                    }
                }
            }
            return this;
        }, trigger: function () {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "), n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, { detail: n, bubbles: true, cancelable: true });
                        i.dom7EventData = s.filter((e, t) => t > 0), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData;
                    }
                }
            }
            return this;
        }, transitionEnd: function (e) {
            const t = this;
            return e && t.on("transitionend", function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s));
            }), this;
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }, styles: function () {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
        }, offset: function () {
            if (this.length > 0) {
                const e = r(), t = a(), s = this[0], i = s.getBoundingClientRect(), n = t.body, l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0, d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
                return { top: i.top + d - l, left: i.left + c - o };
            }
            return null;
        }, css: function (e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];
                    return this;
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this;
            }
            return this;
        }, each: function (e) {
            return e ? (this.forEach((t, s) => {
                e.apply(t, [t, s]);
            }), this) : this;
        }, html: function (e) {
            if (undefined === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        }, text: function (e) {
            if (undefined === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        }, is: function (e) {
            const t = r(), s = a(), i = this[0];
            let l, o;
            if (!i || undefined === e) return false;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return true;
                return false;
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return true;
                return false;
            }
            return false;
        }, index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e;
            }
        }, eq: function (e) {
            if (undefined === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]]);
            }
            return d([this[e]]);
        }, append: function () {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? undefined : arguments[s];
                for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild);
                } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]); else this[s].appendChild(e);
            }
            return this;
        }, prepend: function (e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                const a = t.createElement("div");
                for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
            } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]); else this[s].insertBefore(e, this[s].childNodes[0]);
            return this;
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
        }, nextAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d(t);
        }, prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]);
            }
            return d([]);
        }, prevAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d(t);
        }, parent: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t);
        }, parents: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
            }
            return d(t);
        }, closest: function (e) {
            let t = this;
            return undefined === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        }, find: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e]);
            }
            return d(t);
        }, children: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s]);
            }
            return d(t);
        }, filter: function (e) {
            return d(Array.prototype.filter.call(this, e));
        }, remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        }
    };
    function h(e, t) {
        undefined === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function (e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }
    function f(e) {
        return "undefined" != typeof window && undefined !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function g() {
        const e = Object(arguments.length <= 0 ? undefined : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? undefined : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter(e => t.indexOf(e) < 0);
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t], r = Object.getOwnPropertyDescriptor(a, i);
                    undefined !== r && r.enumerable && ("object" == typeof e[i] && null !== e[i] && e[i].constructor && "Object" === Object.prototype.toString.call(e[i]).slice(8, -1) && ("object" == typeof a[i] && null !== a[i] && a[i].constructor && "Object" === Object.prototype.toString.call(a[i]).slice(8, -1)) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !("object" == typeof e[i] && null !== e[i] && e[i].constructor && "Object" === Object.prototype.toString.call(e[i]).slice(8, -1)) && ("object" == typeof a[i] && null !== a[i] && a[i].constructor && "Object" === Object.prototype.toString.call(a[i]).slice(8, -1)) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i]);
                }
            }
        }
        return e;
    }
    function v(e, t, s) {
        e.style.setProperty(t, s);
    }
    function w(e) {
        let { swiper: t, targetPosition: s, side: a } = e;
        const i = r(), n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => {
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0), r = 0.5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if ((undefined === s && (s = 0), setTimeout(c, s)) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), (undefined === s && (s = 0), setTimeout(c, s))) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({ [a]: c });
            }), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u);
        };
        Date.now();
    }
    let b, x, y;
    function E() {
        return b || (b = function () {
            const e = r(), t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch), passiveListener: function () {
                    let t = false;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = true;
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s);
                    } catch (e) { }
                    return t;
                }(), gestures: "ongesturestart" in e
            };
        }()), b;
    }
    function C(e) {
        return undefined === e && (e = {}), x || (x = function (e) {
            let { userAgent: t } = undefined === e ? {} : e;
            const s = E(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent, l = { ios: false, android: false }, o = a.screen.width, d = a.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = false), c && !m && (l.os = "android", l.android = true), (p || h || u) && (l.os = "ios", l.ios = true), l;
        }(e)), x;
    }
    function T() {
        return y || (y = function () {
            const e = r();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            };
        }()), y;
    }
    Object.keys(c).forEach(e => {
        Object.defineProperty(d.fn, e, { value: c[e], writable: true });
    });
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach(e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
            }), a;
        }, once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r);
            }
            return i.__emitterProxy = t, a.on(e, i, s);
        }, onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
        }, offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        }, off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(e => {
                undefined === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
                });
            }), s) : s;
        }, emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                    e.apply(a, [t, ...s]);
                }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
                    e.apply(a, s);
                });
            }), e;
        }
    };
    var S = {
        updateSize: function () {
            const e = this;
            let t, s;
            const a = e.$el;
            t = undefined !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = undefined !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
        }, updateSlides: function () {
            const e = this;
            function t(t) {
                return e.isHorizontal() ? t : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t];
            }
            const a = e.params, { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e, o = e.virtual && a.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, c = i.children(`.${e.params.slideClass}`), p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [], m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length, b = e.slidesGrid.length;
            let x = a.spaceBetween, y = -f, E = 0, C = 0;
            if (undefined === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c.css({ marginRight: "", marginBottom: "", marginTop: "" }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => undefined !== a.breakpoints[e].slidesPerView).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(true) : n.outerHeight(true); else {
                            const e = parseFloat(r.getPropertyValue(t("width")) || 0), t = parseFloat(r.getPropertyValue(t("padding-left")) || 0), a = parseFloat(r.getPropertyValue(t("padding-right")) || 0), i = parseFloat(r.getPropertyValue(t("margin-left")) || 0), l = parseFloat(r.getPropertyValue(t("margin-right")) || 0), o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l; else {
                                const { clientWidth: s, offsetWidth: r } = n[0];
                                $ = e + t + a + i + l + (r - s);
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($));
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < 0.001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1;
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({ width: `${e.virtualSize + a.spaceBetween}px` }), a.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i);
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
            }
            if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({ [s]: `${x}px` });
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach(t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0);
                }), e -= a.spaceBetween;
                const t = e - r;
                u = u.map(e => e < 0 ? -f : e > t ? t + g : e);
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach(t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0);
                }), e -= a.spaceBetween, e < r) {
                    const t = (r - e) / 2;
                    u.forEach((e, s) => {
                        u[s] = e - t;
                    }), h.forEach((e, s) => {
                        h[s] = e + t;
                    });
                }
            }
            if (Object.assign(e, { slides: c, snapGrid: u, slidesGrid: h, slidesSizesGrid: m }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0], s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + s);
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`, s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t);
            }
        }, updateAutoHeight: function (e) {
            const t = this, s = [], a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : true === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || d([])).each(e => {
                s.push(e);
            }); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !a) break;
                s.push(n(e));
            } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1) if (undefined !== s[i]) {
                const e = s[i].offsetHeight;
                r = e > r ? e : r;
            }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        }, updateSlidesOffset: function () {
            const e = this, t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
        }, updateSlidesProgress: function (e) {
            undefined === e && (e = this && this.translate || 0);
            const t = this, s = t.params, { slides: a, rtlTranslate: i, snapGrid: r } = t;
            if (0 === a.length) return;
            undefined === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), p = -(n - o), u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
            }
            t.visibleSlides = d(t.visibleSlides);
        }, updateProgress: function (e) {
            const t = this;
            if (undefined === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0;
            }
            const s = t.params, a = t.maxTranslate() - t.minTranslate();
            let { progress: i, isBeginning: r, isEnd: n } = t;
            const l = r, o = n;
            0 === a ? (i = 0, r = true, n = true) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, { progress: i, isBeginning: r, isEnd: n }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
        }, updateSlidesClasses: function () {
            const e = this, { slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r } = e, n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
        }, updateActiveIndex: function (e) {
            const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o } = t;
            let d;
            if (undefined === c) {
                for (let e = 0; e < a.length; e += 1) undefined !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || undefined === c) && (c = 0);
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s); else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup);
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, { snapIndex: d, realIndex: p, previousIndex: n, activeIndex: c }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
        }, updateClickedSlide: function (e) {
            const t = this, s = t.params, a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = false;
            if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
                r = true, i = e;
                break;
            }
            if (!a || !r) return t.clickedSlide = undefined, void (t.clickedIndex = undefined);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && undefined !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        }
    };
    var M = {
        getTranslate: function (e) {
            undefined === e && (e = this.isHorizontal() ? "x" : "y");
            const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0;
        }, setTranslate: function (e, t) {
            const s = this, { rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l } = s;
            let o, d = 0, c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
        }, minTranslate: function () {
            return -this.snapGrid[0];
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
        }, translateTo: function (e, t, s, a, i) {
            undefined === e && (e = 0), undefined === t && (t = this.params.speed), undefined === s && (s = true), undefined === a && (a = true);
            const r = this, { params: n, wrapperEl: l } = r;
            if (r.animating && n.preventInteractionOnTransition) return false;
            const o = r.minTranslate(), d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else {
                    if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), true;
                    l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
                }
                return true;
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = true, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), true;
        }
    };
    function P(e) {
        let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
        const { activeIndex: r, previousIndex: n } = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
        }
    }
    var k = {
        slideTo: function (e, t, s, a, i) {
            if (undefined === e && (e = 0), undefined === t && (t = this.params.speed), undefined === s && (s = true), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t;
            }
            const r = this;
            n < 0 && (n = 0);
            const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return false;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
            const v = -o[g];
            if (r.updateProgress(v), l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * v), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]);
                undefined !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e);
            }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return false;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return false;
            }
            let b;
            if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), false;
            if (l.cssMode) {
                const e = r.isHorizontal(), s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = true), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = false;
                    });
                } else {
                    if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), true;
                    h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
                }
                return true;
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = true, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), true;
        }, slideToLoop: function (e, t, s, a) {
            if (undefined === e && (e = 0), undefined === t && (t = this.params.speed), undefined === s && (s = true), "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t;
            }
            const i = this;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
        }, slideNext: function (e, t, s) {
            undefined === e && (e = this.params.speed), undefined === t && (t = true);
            const a = this, { animating: i, enabled: r, params: n } = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", true), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return false;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
        }, slidePrev: function (e, t, s) {
            undefined === e && (e = this.params.speed), undefined === t && (t = true);
            const a = this, { params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d } = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return false;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
            }
            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = c(o ? a.translate : -a.translate), u = n.map(e => c(e));
            let h = n[u.indexOf(p) - 1];
            if (undefined === h && i.cssMode) {
                let e;
                n.forEach((t, s) => {
                    p >= t && (e = s);
                }), undefined !== e && (h = n[e > 0 ? e - 1 : e]);
            }
            let m = 0;
            if (undefined !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", true) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s);
            }
            return a.slideTo(m, e, t, s);
        }, slideReset: function (e, t, s) {
            return undefined === e && (e = this.params.speed), undefined === t && (t = true), this.slideTo(this.activeIndex, e, t, s);
        }, slideToClosest: function (e, t, s, a) {
            undefined === e && (e = this.params.speed), undefined === t && (t = true), undefined === a && (a = 0.5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
        }, slideToClickedSlide: function () {
            const e = this, { params: t, $wrapperEl: s } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), (undefined === t && (t = 0), setTimeout(() => {
                    e.slideTo(r);
                }, t))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), (undefined === t && (t = 0), setTimeout(() => {
                    e.slideTo(r);
                }, t))) : e.slideTo(r);
            } else e.slideTo(r);
        }
    };
    var z = {
        loopCreate: function () {
            const e = this, t = a(), { params: s, $wrapperEl: i } = e, r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e);
                    }
                    n = r.children(`.${s.slideClass}`);
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = [], o = [];
            n.each((e, t) => {
                d(e).attr("data-swiper-slide-index", t);
            });
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]);
            }
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(true)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(true)).addClass(s.slideDuplicateClass));
        }, loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const { activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l } = e;
            let o;
            e.allowSlidePrev = true, e.allowSlideNext = true;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, false, true) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, false, true) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
        }, loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: s } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
        }
    };
    function L(e) {
        const t = this, s = a(), i = r(), n = t.touchEventsData, { params: l, touches: o, enabled: c } = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? function (e, t) {
            return undefined === t && (t = this), function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            }(t);
        }(m, h[0]) : h.closest(m)[0])) return void (t.allowClick = true);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX, v = o.currentY, w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection, b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w) return;
            e.preventDefault();
        }
        if (Object.assign(n, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: undefined, startMoving: undefined }), o.startX = g, o.startY = v, n.touchStartTime = Date.now(), t.allowClick = true, t.updateSize(), t.swipeDirection = undefined, l.threshold > 0 && (n.allowThresholdMove = false), "touchstart" !== p.type) {
            let e = true;
            h.is(n.focusableElements) && (e = false, "SELECT" === h[0].nodeName && (n.isTouched = false)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault();
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
    }
    function O(e) {
        const t = a(), s = this, i = s.touchEventsData, { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
        if (!o) return;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]), h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = false), void (i.isTouched && (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }), i.touchStartTime = Date.now()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
            if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = false, void (i.isMoved = false);
        } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = true, void (s.allowClick = false);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (undefined === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = false : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), undefined === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = true)), i.isScrolling) return void (i.isTouched = false);
        if (!i.startMoving) return;
        s.allowClick = false, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = false, !r.grabCursor || true !== s.allowSlideNext && true !== s.allowSlidePrev || s.setGrabCursor(true), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = true;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = true, b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = false, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = false, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = true), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = true, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }
    function I(e) {
        const t = this, s = t.touchEventsData, { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
        if (!l) return;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = false, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(false), s.isMoved = false, void (s.startMoving = false);
        a.grabCursor && s.isMoved && s.isTouched && (true === t.allowSlideNext || true === t.allowSlidePrev) && t.setGrabCursor(false);
        const d = Date.now(), c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
        }
        if (s.lastClickTime = Date.now(), (undefined === t && (t = 0), setTimeout(() => {
            t.destroyed || (t.allowClick = true);
        }, t)), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = false, s.isMoved = false, void (s.startMoving = false);
        let h;
        if (s.isTouched = false, s.isMoved = false, s.startMoving = false, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: h });
        let m = 0, f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            undefined !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2]);
        }
        let g = null, v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f, b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
        }
    }
    function A() {
        const e = this, { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
        e.allowSlideNext = true, e.allowSlidePrev = true, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, false, true) : e.slideTo(e.activeIndex, 0, false, true), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function G() {
        const e = this, { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, false);
    }
    let N = false;
    function B() { }
    const H = (e, t) => {
        const s = a(), { params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d } = e, c = !!i.nested, p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && { passive: true, capture: false };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? { passive: false, capture: c } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t);
        } else n[p](r.start, e.onTouchStart, false), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, false);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, true), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, true) : e[u]("observerUpdate", A, true);
    };
    var X = {
        attachEvents: function () {
            const e = this, t = a(), { params: s, support: i } = e;
            e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = true), H(e, "on");
        }, detachEvents: function () {
            H(this, "off");
        }
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function () {
            const e = this, { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e, l = function (e, t) {
                const s = [];
                return e.forEach(e => {
                    "object" == typeof e ? Object.keys(e).forEach(a => {
                        e[a] && s.push(t + a);
                    }) : "string" == typeof e && s.push(t + e);
                }), s;
            }(["initialized", s.direction, { "pointer-events": !n.touch }, { "free-mode": e.params.freeMode && s.freeMode.enabled }, { autoheight: s.autoHeight }, { rtl: a }, { grid: s.grid && s.grid.rows > 1 }, { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill }, { android: r.android }, { ios: r.ios }, { "css-mode": s.cssMode }, { centered: s.cssMode && s.centeredSlides }, { "watch-progress": s.watchSlidesProgress }], s.containerModifierClass);
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
        }, removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
        }
    };
    var W = { init: true, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: undefined, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 0, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, preloadImages: true, updateOnImagesReady: true, loop: false, loopAdditionalSlides: 0, loopedSlides: null, loopedSlidesLimit: true, loopFillGroupWithBlank: false, loopPreventsSlide: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: true, _emitClasses: false };
    function j(e, t) {
        return function (s) {
            undefined === s && (s = {});
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && true === e[a] && (e[a] = { auto: true }), a in e && "enabled" in i ? (true === e[a] && (e[a] = { enabled: true }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = true), e[a] || (e[a] = { enabled: false }), g(t, s)) : g(t, s)) : g(t, s);
        };
    }
    const q = {
        eventsEmitter: $, update: S, translate: M, transition: {
            setTransition: function (e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
            }, transitionStart: function (e, t) {
                undefined === e && (e = true);
                const s = this, { params: a } = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            }, transitionEnd: function (e, t) {
                undefined === e && (e = true);
                const s = this, { params: a } = s;
                s.animating = false, a.cssMode || (s.setTransition(0), P({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            }
        }, slide: k, loop: z, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
            }, unsetGrabCursor: function () {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
            }
        }, events: X, breakpoints: {
            setBreakpoint: function () {
                const e = this, { activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r } = e, n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in n ? n[l] : undefined) || e.originalParams, d = Y(e, i), c = Y(e, o), p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                    const s = i[t] && i[t].enabled, a = o[t] && o[t].enabled;
                    s && !a && e[t].disable(), !s && a && e[t].enable();
                });
                const u = o.direction && o.direction !== i.direction, h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(), g(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, false)), e.emit("breakpoint", o);
            }, getBreakpoint: function (e, t, s) {
                if (undefined === t && (t = "window"), !e || "container" === t && !s) return;
                let a = false;
                const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map(e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return { value: n * t, point: e };
                    }
                    return { value: e, point: e };
                });
                l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < l.length; e += 1) {
                    const { point: r, value: n } = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
                }
                return a || "max";
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: a } = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s;
                } else e.isLocked = 1 === e.snapGrid.length;
                true === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), true === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = false), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            }
        }, classes: R, images: {
            loadImage: function (e, t, s, a, i, n) {
                const l = r();
                let o;
                function c() {
                    n && n();
                }
                d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
            }, preloadImages: function () {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (undefined !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), true, t);
                }
            }
        }
    }, _ = {};
    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each(s => {
                    const a = g({}, t, { el: s });
                    e.push(new V(a));
                }), e;
            }
            const r = this;
            r.__swiper__ = true, r.support = E(), r.device = C({ userAgent: t.userAgent }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach(e => {
                null !== { swiper: r, extendParams: j(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r) } && "object" == typeof { swiper: r, extendParams: j(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r) } && "constructor" in { swiper: r, extendParams: j(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r) } && { swiper: r, extendParams: j(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r) }.constructor === Object;
            });
            const l = g({}, W, n);
            return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
                r.on(e, r.params.on[e]);
            }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                enabled: r.params.enabled, el: e, classNames: [], slides: d(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === r.params.direction, isVertical: () => "vertical" === r.params.direction, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"], t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = { start: "touchstart", move: "touchmove", end: "touchend", cancel: "touchcancel" }, r.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
                }(), touchEventsData: { isTouched: undefined, isMoved: undefined, allowTouchCallbacks: undefined, touchStartTime: undefined, isScrolling: undefined, currentTranslate: undefined, startTranslate: undefined, allowThresholdMove: undefined, focusableElements: r.params.focusableElements, lastClickTime: Date.now(), clickTimeout: undefined, velocities: [], allowMomentumBounce: undefined, isTouchEvent: undefined, startMoving: undefined }, allowClick: true, allowTouchMove: r.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r;
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = true, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = false, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, undefined === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each(s => {
                const a = e.getSlideClasses(s);
                t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
            }), e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
            undefined === e && (e = "current"), undefined === t && (t = false);
            const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = true));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = true));
            } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
                (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
            } else for (let e = l - 1; e >= 0; e -= 1) {
                i[l] - i[e] < n && (o += 1);
            }
            return o;
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: s } = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, false, true) : e.slideTo(e.activeIndex, 0, false, true), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        changeDirection(e, t) {
            undefined === t && (t = true);
            const s = this, a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each(t => {
                "vertical" === e ? t.style.width = "" : t.style.height = "";
            }), s.emit("changeDirection"), t && s.update()), s;
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
        }
        mount(e) {
            const t = this;
            if (t.mounted) return true;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return false;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t;
                }
                return s.children ? s.children(i()) : d(s).children(i());
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each(e => {
                    r.append(e);
                });
            }
            return Object.assign(t, { $el: s, el: e, $wrapperEl: r, wrapperEl: r[0], mounted: true, rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"), rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")), wrongRTL: "-webkit-box" === r.css("display") }), true;
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return false === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, false, true) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, false, true), t.attachEvents(), t.initialized = true, t.emit("init"), t.emit("afterInit")), t;
        }
        destroy(e, t) {
            undefined === e && (e = true), undefined === t && (t = true);
            const s = this, { params: a, $el: i, $wrapperEl: r, slides: n } = s;
            return undefined === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = false, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
                s.off(e);
            }), false !== e && (s.$el[0].swiper = null, function (e) {
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null;
                    } catch (e) { }
                    try {
                        delete t[e];
                    } catch (e) { }
                });
            }(s)), s.destroyed = true), null;
        }
        static extendDefaults(e) {
            g(_, e);
        }
        static get extendedDefaults() {
            return _;
        }
        static get defaults() {
            return W;
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach(e => V.installModule(e)), V) : (V.installModule(e), V);
        }
    }
    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach(a => {
            if (!s[a] && true === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n;
            }
        }), s;
    }
    function K(e) {
        const t = this, { $wrapperEl: s, params: a } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]); else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update();
    }
    function Z(e) {
        const t = this, { params: s, $wrapperEl: a, activeIndex: i } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length;
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, false);
    }
    function Q(e, t) {
        const s = this, { $wrapperEl: a, params: i, activeIndex: r } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n;
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, false) : s.slideTo(o, 0, false);
    }
    function J(e) {
        const t = this, { params: s, $wrapperEl: a, activeIndex: i } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0);
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, false) : t.slideTo(l, 0, false);
    }
    function ee() {
        const e = this, t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t);
    }
    function te(e) {
        const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e;
        let c;
        a("beforeInit", () => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }), a("setTranslate", () => {
            s.params.effect === t && i();
        }), a("setTransition", (e, a) => {
            s.params.effect === t && r(a);
        }), a("transitionEnd", () => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each(e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                }), Array.prototype.filter.call(e, t);
            }
        }), a("virtualUpdate", () => {
            s.params.effect === t && (s.slides.length || (c = true), requestAnimationFrame(() => {
                c && s.slides && s.slides.length && (i(), c = false);
            }));
        });
    }
    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t;
    }
    function ae(e) {
        let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
        const { slides: r, activeIndex: n, $wrapperEl: l } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = false;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd(() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = true, t.animating = false;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
            });
        }
    }
    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r;
    }
    Object.keys(q).forEach(e => {
        Object.keys(q[e]).forEach(t => {
            V.prototype[t] = q[e][t];
        });
    }), V.use([function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null, l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
        }, d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange");
        };
        s("init", () => {
            t.params.resizeObserver && undefined !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(e => {
                l = i.requestAnimationFrame(() => {
                    const { width: s, height: a } = t;
                    let i = s, r = a;
                    e.forEach(e => {
                        let { contentBoxSize: s, contentRect: a, target: n } = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
                    }), i === s && r === a || Array.prototype.filter.call(e, t);
                });
            }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
        }), s("destroy", () => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [], l = r(), o = function (e, t) {
            undefined === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)(e => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                    i("observerUpdate", e[0]);
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
            });
            s.observe(e, { attributes: undefined === t.attributes || t.attributes, childList: undefined === t.childList || t.childList, characterData: undefined === t.characterData || t.characterData }), n.push(s);
        };
        s({ observer: false, observeParents: false, observeSlideChildren: false }), a("init", () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) Array.prototype.filter.call(e[t], t);
                }
                Array.prototype.filter.call(t.$el[0], { childList: t.params.observeSlideChildren }), Array.prototype.filter.call(t.$wrapperEl[0], { attributes: false });
            }
        }), a("destroy", () => {
            n.forEach(e => {
                e.disconnect();
            }), n.splice(0, n.length);
        });
    }]);
    const re = [function (e) {
        let t, { swiper: s, extendParams: a, on: i, emit: r } = e;
        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
        }
        function l(e) {
            const { slidesPerView: t, slidesPerGroup: a, centeredSlides: i } = s.params, { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual, { from: d, to: c, slides: p, slidesGrid: u, offset: h } = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
            const w = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, p.length - 1), x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
            function y() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate");
            }
            if (Object.assign(s.virtual, { from: w, to: b, offset: x, slidesGrid: s.slidesGrid }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: x, from: w, to: b, slides: function () {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(p[t]);
                    return e;
                }()
            }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = [], C = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove(); else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (undefined === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
            C.forEach(e => {
                s.$wrapperEl.append(n(p[e], e));
            }), E.sort((e, t) => t - e).forEach(e => {
                s.$wrapperEl.prepend(n(p[e], e));
            }), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y();
        }
        a({ virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, renderExternalUpdate: true, addSlidesBefore: 0, addSlidesAfter: 0 } }), s.virtual = { cache: {}, from: undefined, to: undefined, slides: [], offset: 0, slidesGrid: [] }, i("beforeInit", () => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = true, s.originalParams.watchSlidesProgress = true, s.params.initialSlide || l());
        }), i("setTranslate", () => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
                l();
            }, 100)) : l());
        }), i("init update resize", () => {
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }), Object.assign(s.virtual, {
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
                l(true);
            }, prependSlide: function (e) {
                const t = s.activeIndex;
                let a = t + 1, i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length;
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache, t = {};
                    Object.keys(e).forEach(s => {
                        const a = e[s], r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a;
                    }), s.virtual.cache = t;
                }
                l(true), s.slideTo(a, 0);
            }, removeSlide: function (e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0); else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                l(true), s.slideTo(t, 0);
            }, removeAllSlides: function () {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(true), s.slideTo(0, 0);
            }, update: l
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const l = a(), o = r();
        function c(e) {
            if (!t.enabled) return;
            const { rtlTranslate: s } = t;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i, p = 37 === i, u = 39 === i, h = 38 === i, m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return false;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return false;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = false;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = o.innerWidth, l = o.innerHeight, d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = true;
                        }
                    }
                    if (!e) return;
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = false), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = false), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i);
            }
        }
        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = true);
        }
        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = false);
        }
        t.keyboard = { enabled: false }, s({ keyboard: { enabled: false, onlyInViewport: true, pageUpDown: true } }), i("init", () => {
            t.params.keyboard.enabled && (undefined === t && (t = 0), setTimeout(e, t));
        }), i("destroy", () => {
            t.keyboard.enabled && Date.now();
        }), Object.assign(t.keyboard, { enable: p, disable: u });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = r();
        let l;
        s({ mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), t.mousewheel = { enabled: false };
        let o, c = Date.now();
        const h = [];
        function m() {
            t.enabled && (t.mouseEntered = true);
        }
        function f() {
            t.enabled && (t.mouseEntered = false);
        }
        function v(e) {
            let a = true;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return true;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1, f = function (e) {
                let t = 0, s = 0, a = 0, i = 0;
                return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), { spinX: t, spinY: s, pixelX: a, pixelY: i };
            }(s);
            if (r.forceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return true;
                c = -f.pixelX * m;
            } else {
                if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return true;
                c = -f.pixelY;
            } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c) return true;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = { time: Date.now(), delta: Math.abs(c), direction: Math.sign(c) }, a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = undefined, t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning, u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(l), l = undefined, h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : undefined, a = h[0];
                        if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0); else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? 0.8 : 0.2;
                            o = e, h.splice(0), l = (false && (0 = 0), setTimeout(() => {
                                t.slideToClosest(t.params.speed, true, undefined, s);
                            }, 0));
                        }
                        l || (l = (false && (500 = 0), setTimeout(() => {
                            o = e, h.splice(0), t.slideToClosest(t.params.speed, true, undefined, 0.5);
                        }, 500)));
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return true;
                }
            } else {
                const s = { time: Date.now(), delta: Math.abs(c), direction: Math.sign(c), raw: e };
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : undefined;
                if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && (!(t.params.mousewheel.thresholdDelta && s.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && Date.now() - c < t.params.mousewheel.thresholdTime) && (s.delta >= 6 && Date.now() - c < 60 || (s.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", s.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", s.raw)), c = (new n.Date).getTime(), false)))) : !(t.params.mousewheel.thresholdDelta && s.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && Date.now() - c < t.params.mousewheel.thresholdTime) && (s.delta >= 6 && Date.now() - c < 60 || (s.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", s.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", s.raw)), c = (new n.Date).getTime(), false))), function (e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges) return true;
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return true;
                    return false;
                }(s)) return true;
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = false, false;
        }
        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v);
        }
        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), true) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = true, true);
        }
        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), true) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = false, true);
        }
        a("init", () => {
            !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
        }), a("destroy", () => {
            t.params.cssMode && b(), t.mousewheel.enabled && x();
        }), Object.assign(t.mousewheel, { enable: b, disable: x });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        function r(e) {
            let s;
            return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
        }
        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
        }
        function l() {
            if (t.params.loop) return;
            const { $nextEl: e, $prevEl: s } = t.navigation;
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
        }
        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
        }
        function c(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
        }
        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl), a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: a, prevEl: a && a[0] }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
        }
        function u() {
            const { $nextEl: e, $prevEl: s } = t.navigation;
            e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
        }
        s({ navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }, a("init", () => {
            false === t.params.navigation.enabled ? h() : (undefined === t && (t = 0), setTimeout(e, t), l());
        }), a("toEdge fromEdge lock unlock", () => {
            l();
        }), a("destroy", () => {
            Date.now();
        }), a("enable disable", () => {
            const { $nextEl: e, $prevEl: s } = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
        }), a("click", (e, s) => {
            const { $nextEl: a, $prevEl: r } = t.navigation, n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(true === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
            }
        });
        const h = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), Date.now();
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), (undefined === t && (t = 0), setTimeout(e, t)), l();
            }, disable: h, update: l, init: p, destroy: u
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const r = "swiper-pagination";
        let n;
        s({ pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: e => e, formatFractionTotal: e => e, bulletClass: `${r}-bullet`, bulletActiveClass: `${r}-bullet-active`, modifierClass: `${r}-`, currentClass: `${r}-current`, totalClass: `${r}-total`, hiddenClass: `${r}-hidden`, progressbarFillClass: `${r}-progressbar-fill`, progressbarOppositeClass: `${r}-progressbar-opposite`, clickableClass: `${r}-clickable`, lockClass: `${r}-lock`, horizontalClass: `${r}-horizontal`, verticalClass: `${r}-vertical`, paginationDisabledClass: `${r}-disabled` } }), t.pagination = { el: null, $el: null, bullets: [] };
        let l = 0;
        function c(e, s) {
            const { bulletActiveClass: a } = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
        }
        function p() {
            const e = t.rtl, s = t.params.pagination;
            if (!t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = undefined !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](true), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && undefined !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${s.bulletActiveClass}${e}`).join(" ")), r.length > 1) a.each(e => {
                    const t = d(e), a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"));
                }); else {
                    const e = a.eq(p), r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(i), n = a.eq(o);
                        for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop) if (r >= a.length) {
                            for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                            a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                        } else c(e, "prev"), c(n, "next"); else c(e, "prev"), c(n, "next");
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4), r = (n * i - n) / 2 - u * n, l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`);
                }
            }
            if ("fraction" === s.type && (r.find((undefined === s.currentClass && (s.currentClass = ""), `.${s.currentClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`)).text(s.formatFractionCurrent(p + 1)), r.find((undefined === s.totalClass && (s.totalClass = ""), `.${s.totalClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1, n = 1;
                "horizontal" === e ? i = a : n = a, r.find((undefined === s.progressbarFillClass && (s.progressbarFillClass = ""), `.${s.progressbarFillClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed);
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function u() {
            const e = t.params.pagination;
            if (!t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find((undefined === e.bulletClass && (e.bulletClass = ""), `.${e.bulletClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`));
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
        }
        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
            const e = t.params.pagination;
            if (!e.el) return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(e => d(e).parents(".swiper")[0] === t.el))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", (undefined === e.bulletClass && (e.bulletClass = ""), `.${e.bulletClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`), function (e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }), Object.assign(t.pagination, { $el: s, el: s[0] }), t.enabled || s.addClass(e.lockClass));
        }
        function m() {
            const e = t.params.pagination;
            if (!t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", (undefined === e.bulletClass && (e.bulletClass = ""), `.${e.bulletClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`));
        }
        a("init", () => {
            false === t.params.pagination.enabled ? f() : (h(), Date.now(), (undefined === t && (t = 0), setTimeout(e, t)));
        }), a("activeIndexChange", () => {
            (t.params.loop || undefined === t.snapIndex) && (undefined === t && (t = 0), setTimeout(e, t));
        }), a("snapIndexChange", () => {
            t.params.loop || (undefined === t && (t = 0), setTimeout(e, t));
        }), a("slidesLengthChange", () => {
            t.params.loop && (Date.now(), (undefined === t && (t = 0), setTimeout(e, t)));
        }), a("snapGridLengthChange", () => {
            t.params.loop || (Date.now(), (undefined === t && (t = 0), setTimeout(e, t)));
        }), a("destroy", () => {
            "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
        }), a("enable disable", () => {
            const { $el: e } = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
        }), a("lock unlock", () => {
            undefined === t && (t = 0), setTimeout(e, t);
        }), a("click", (e, s) => {
            const a = s.target, { $el: r } = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(true === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
            }
        });
        const f = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), Date.now(), (undefined === t && (t = 0), setTimeout(e, t));
            }, disable: f, render: u, update: p, init: h, destroy: m
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: i, emit: r } = e;
        const n = a();
        let l, o, c, u, h = false, m = null, f = null;
        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const { scrollbar: e, rtlTranslate: s, progress: a } = t, { $dragEl: i, $el: r } = e, n = t.params.scrollbar;
            let d = (c - o) * a;
            s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout(() => {
                r[0].style.opacity = 0, r.transition(400);
            }, 1e3));
        }
        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const { scrollbar: e } = t, { $dragEl: s, $el: a } = e;
            s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
        }
        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
        }
        function b(e) {
            const { scrollbar: s, rtlTranslate: a } = t, { $el: i } = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        function x(e) {
            const s = t.params.scrollbar, { scrollbar: a, $wrapperEl: i } = t, { $el: n, $dragEl: o } = a;
            h = true, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e);
        }
        function y(e) {
            const { scrollbar: s, $wrapperEl: a } = t, { $el: i, $dragEl: n } = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = false, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e));
        }
        function E(e) {
            const s = t.params.scrollbar, { scrollbar: a, $wrapperEl: i } = t, { $el: n } = a;
            h && (h = false, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = (false && (1e3 = 0), setTimeout(() => {
                n.css("opacity", 0), n.transition(400);
            }, 1e3))), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
        }
        function C(e) {
            const { scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l } = t, o = s.$el;
            if (!o) return;
            const d = o[0], c = !(!l.passiveListener || !r.passiveListeners) && { passive: false, capture: false }, p = !(!l.passiveListener || !r.passiveListeners) && { passive: true, capture: false };
            if (!d) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
        }
        function T() {
            const { scrollbar: e, $el: s } = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, { el: "swiper-scrollbar" });
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
        }
        function $() {
            const e = t.params.scrollbar, s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off");
        }
        s({ scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }, i("init", () => {
            false === t.params.scrollbar.enabled ? S() : (T(), v(), g());
        }), i("update resize observerUpdate lock unlock", () => {
            v();
        }), i("setTranslate", () => {
            g();
        }), i("setTransition", (e, s) => {
            !function (e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
            }(s);
        }), i("enable disable", () => {
            const { $el: e } = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
        }), i("destroy", () => {
            $();
        });
        const S = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $();
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g();
            }, disable: S, updateSize: v, setTranslate: g, init: T, destroy: $
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ parallax: { enabled: false } });
        const i = (e, s) => {
            const { rtl: a } = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                const e = p - (p - 1) * (1 - Math.abs(s));
                i[0].style.opacity = e;
            }
            if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`); else {
                const e = c - (c - 1) * (1 - Math.abs(s));
                i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
            }
        }, r = () => {
            const { $el: e, slides: s, progress: a, snapGrid: r } = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                i(e, a);
            }), s.each((e, s) => {
                let n = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                    i(e, n);
                });
            });
        };
        a("beforeInit", () => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = true, t.originalParams.watchSlidesProgress = true);
        }), a("init", () => {
            t.params.parallax.enabled && r();
        }), a("setTranslate", () => {
            t.params.parallax.enabled && r();
        }), a("setTransition", (e, s) => {
            t.params.parallax.enabled && function (e) {
                undefined === e && (e = t.params.speed);
                const { $el: s } = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a);
                });
            }(s);
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = r();
        s({ zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), t.zoom = { enabled: false };
        let l, o, c, p = 1, u = false;
        const m = { $slideEl: undefined, slideWidth: undefined, slideHeight: undefined, $imageEl: undefined, $imageWrapEl: undefined, maxRatio: 3 }, f = { isTouched: undefined, isMoved: undefined, currentX: undefined, currentY: undefined, minX: undefined, minY: undefined, maxX: undefined, maxY: undefined, width: undefined, height: undefined, startX: undefined, startY: undefined, touchesStart: {}, touchesCurrent: {} }, g = { x: undefined, y: undefined, prevPositionX: undefined, prevPositionY: undefined, prevTime: undefined };
        let v = 1;
        function w(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX, i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
        }
        function b(e) {
            const s = t.support, a = t.params.zoom;
            if (o = false, c = false, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                o = true, m.scaleStart = w(e);
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = true) : m.$imageEl = undefined;
        }
        function x(e) {
            const s = t.support, a = t.params.zoom, i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                c = true, m.scaleMove = w(e);
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e);
        }
        function y(e) {
            const s = t.device, a = t.support, i = t.params.zoom, r = t.zoom;
            if (!a.gestures) {
                if (!o || !c) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                o = false, c = false;
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = false, 1 === r.scale && (m.$slideEl = undefined));
        }
        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length) return;
            if (t.allowClick = false, !f.isTouched || !m.$slideEl) return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
            const a = f.width * s.scale, i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = false);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = false);
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = true, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            }
        }
        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = undefined, m.$imageEl = undefined, m.$imageWrapEl = undefined);
        }
        function T(e) {
            const s = t.zoom, a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), undefined === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
        }
        function $() {
            const e = t.zoom, s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = undefined);
        }
        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e);
        }
        function M() {
            const e = t.support;
            return { passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && { passive: true, capture: false }, activeListenerWithCapture: !e.passiveListener || { passive: false, capture: true } };
        }
        function P() {
            return `.${t.params.slideClass}`;
        }
        function k(e) {
            const { passiveListener: s } = M(), a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s);
        }
        function z() {
            l || (l = true, k("on"));
        }
        function L() {
            l && (l = false, k("off"));
        }
        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = true;
            const s = t.support, { passiveListener: a, activeListenerWithCapture: i } = M(), r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
        }
        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = false;
            const { passiveListener: a, activeListenerWithCapture: i } = M(), r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => v, set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : undefined, s = m.$slideEl ? m.$slideEl[0] : undefined;
                    i("zoomChange", e, t, s);
                }
                v = e;
            }
        }), a("init", () => {
            t.params.zoom.enabled && O();
        }), a("destroy", () => {
            I();
        }), a("touchStart", (e, s) => {
            t.zoom.enabled && function (e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = true, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
            }(s);
        }), a("touchEnd", (e, s) => {
            t.zoom.enabled && function () {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = false, void (f.isMoved = false);
                f.isTouched = false, f.isMoved = false;
                let s = 300, a = 300;
                const i = g.x * s, r = f.currentX + i, n = g.y * a, l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r, f.currentY = l;
                const d = f.width * e.scale, c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            }();
        }), a("doubleTap", (e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
        }), a("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && C();
        }), a("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
        }), Object.assign(t.zoom, { enable: O, disable: I, in: T, out: $, toggle: S });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        s({ lazy: { checkInView: false, enabled: false, loadPrevNext: false, loadPrevNextAmount: 1, loadOnTransitionStart: false, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }), t.lazy = {};
        let n = false, l = false;
        function o(e, s) {
            undefined === s && (s = true);
            const a = t.params.lazy;
            if (undefined === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e), n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(e => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"), u = n.attr("data-sizes"), h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, false, () => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(e => {
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                        }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                Array.prototype.filter.call(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), false);
                            } else {
                                Array.prototype.filter.call(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), false);
                            }
                        }
                        i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
                    }
                }), i("lazyImageLoad", r[0], n[0]);
            });
        }
        function c() {
            const { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t, r = t.virtual && s.virtual.enabled, n = s.lazy;
            let c = s.slidesPerView;
            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return true;
                } else if (a[t]) return true;
                return false;
            }
            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
            }
            if ("auto" === c && (c = 0), l || (l = true), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each(e => {
                Array.prototype.filter.call(r ? d(e).attr("data-swiper-slide-index") : d(e).index(), t);
            }); else if (c > 1) for (let e = i; e < i + c; e += 1) (undefined === t && (t = 0), setTimeout(e, t)) && Array.prototype.filter.call(e, t); else Array.prototype.filter.call(i, t);
            if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                const e = n.loadPrevNextAmount, t = Math.ceil(c), s = Math.min(i + t + Math.max(e, t), a.length), r = Math.max(i - Math.max(t, e), 0);
                for (let e = i + t; e < s; e += 1) (undefined === t && (t = 0), setTimeout(e, t)) && Array.prototype.filter.call(e, t);
                for (let e = r; e < i; e += 1) (undefined === t && (t = 0), setTimeout(e, t)) && Array.prototype.filter.call(e, t);
            } else {
                const t = e.children(`.${s.slideNextClass}`);
                t.length > 0 && Array.prototype.filter.call(Date.now(), t);
                const a = e.children(`.${s.slidePrevClass}`);
                a.length > 0 && Array.prototype.filter.call(Date.now(), t);
            }
        }
        function p() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e), a = s[0] === e, i = a ? e.innerWidth : s[0].offsetWidth, l = a ? e.innerHeight : s[0].offsetHeight, o = t.$el.offset(), { rtlTranslate: u } = t;
            let h = false;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = true;
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: true, capture: false };
            h ? (c(), s.off("scroll", p, f)) : n || (n = true, s.on("scroll", p, f));
        }
        a("beforeInit", () => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = false);
        }), a("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? (undefined === t && (t = 0), setTimeout(e, t)) : c());
        }), a("scroll", () => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
        }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? (undefined === t && (t = 0), setTimeout(e, t)) : c());
        }), a("transitionStart", () => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? (undefined === t && (t = 0), setTimeout(e, t)) : c());
        }), a("transitionEnd", () => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? (undefined === t && (t = 0), setTimeout(e, t)) : c());
        }), a("slideChange", () => {
            const { lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r } = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c();
        }), a("destroy", () => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
        }), Object.assign(t.lazy, { load: c, loadInSlide: o });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        function i(e, t) {
            const s = function () {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e;
                };
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
            }, this;
        }
        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = undefined, delete t.controller.spline);
        }
        s({ controller: { control: undefined, inverse: false, by: "slide" } }), t.controller = { control: undefined }, a("beforeInit", () => {
            t.controller.control = t.params.controller.control;
        }), a("update", () => {
            r();
        }), a("resize", () => {
            r();
        }), a("observerUpdate", () => {
            r();
        }), a("setTranslate", (e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a);
        }), a("setTransition", (e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a);
        }), Object.assign(t.controller, {
            setTranslate: function (e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;
                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function (e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
                }
                if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && Array.prototype.filter.call(a[e], t); else a instanceof l && s !== a && Array.prototype.filter.call(a, t);
            }, setTransition: function (e, s) {
                const a = t.constructor, i = t.controller.control;
                let r;
                function n(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && (undefined === t && (t = 0), setTimeout(() => {
                        s.updateAutoHeight();
                    }, t)), s.$wrapperEl.transitionEnd(() => {
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
                    }));
                }
                if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]); else i instanceof a && s !== i && n(i);
            }
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null } });
        let i = null;
        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e));
        }
        function n(e) {
            e.attr("tabIndex", "0");
        }
        function l(e) {
            e.attr("tabIndex", "-1");
        }
        function o(e, t) {
            e.attr("role", t);
        }
        function c(e, t) {
            e.attr("aria-roledescription", t);
        }
        function p(e, t) {
            e.attr("aria-label", t);
        }
        function u(e) {
            e.attr("aria-disabled", true);
        }
        function h(e) {
            e.attr("aria-disabled", false);
        }
        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y, a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is((undefined === t.params.pagination.bulletClass && (t.params.pagination.bulletClass = ""), `.${t.params.pagination.bulletClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`)) && a[0].click();
        }
        const v = (e, t, s) => {
            n(e), "BUTTON" !== e[0].tagName && (Array.prototype.filter.call(e, "button"), e.on("keydown", m)), (undefined === s && (s = 0), setTimeout(e, s)), function (e, t) {
                e.attr("aria-controls", t);
            }(e, t);
        }, w = e => {
            const s = e.target.closest(`.${t.params.slideClass}`);
            if (!s || !t.slides.includes(s)) return;
            const a = t.slides.indexOf(s) === t.activeIndex, i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0));
        }, b = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && Array.prototype.filter.call(d(t.slides), e.slideRole);
            const s = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
            e.slideLabelMessage && t.slides.each((a, i) => {
                const r = d(a), n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                undefined === e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s) && (e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s) = 0), setTimeout(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s));
            });
        }, x = () => {
            const e = t.params.a11y;
            t.$el.append(i);
            const s = t.$el;
            e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && (undefined === e.containerMessage && (e.containerMessage = 0), setTimeout(s, e.containerMessage));
            const a = t.$wrapperEl, r = e.id || a.attr("id") || `swiper-wrapper-${n = 16, undefined === n && (n = 16), "x".repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))}`;
            var n;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var o;
            let d, u;
            o = r, a.attr("id", o), function (e, t) {
                e.attr("aria-live", t);
            }(a, l), b(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), t.pagination && t.pagination.bullets && t.pagination.bullets.length && t.params.pagination.clickable && t.pagination.$el.on("keydown", (undefined === t.params.pagination.bulletClass && (t.params.pagination.bulletClass = ""), `.${t.params.pagination.bulletClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`), m), t.$el.on("focus", w, true);
        };
        a("beforeInit", () => {
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
        }), a("afterInit", () => {
            t.params.a11y.enabled && x();
        }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
            t.params.a11y.enabled && b();
        }), a("fromEdge toEdge afterInit lock unlock", () => {
            t.params.a11y.enabled && function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const { $nextEl: e, $prevEl: s } = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (Date.now(), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (Date.now(), l(e)) : (h(e), n(e)));
            }();
        }), a("paginationUpdate", () => {
            t.params.a11y.enabled && function () {
                const e = t.params.a11y;
                t.pagination && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(s => {
                    const a = d(s);
                    t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (Array.prototype.filter.call(a, "button"), (undefined === e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1) && (e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1) = 0), setTimeout(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
                });
            }();
        }), a("destroy", () => {
            t.params.a11y.enabled && function () {
                let e, s;
                i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), t.pagination && t.pagination.bullets && t.pagination.bullets.length && t.params.pagination.clickable && t.pagination.$el.off("keydown", (undefined === t.params.pagination.bulletClass && (t.params.pagination.bulletClass = ""), `.${t.params.pagination.bulletClass.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`), m), t.$el.off("focus", w, true);
            }();
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ history: { enabled: false, root: "", replaceState: false, key: "slides", keepQuery: false } });
        let i = false, n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = e => {
            const t = r();
            let s;
            s = e ? new URL(e) : t.location;
            const a = s.pathname.slice(1).split("/").filter(e => "" !== e), i = a.length;
            return { key: a[i - 2], value: a[i - 1] };
        }, d = (e, s) => {
            const a = r();
            if (!i || !t.params.history.enabled) return;
            let n;
            n = t.params.url ? new URL(t.params.url) : a.location;
            const o = t.slides.eq(s);
            let d = l(o.attr("data-history"));
            if (t.params.history.root.length > 0) {
                let s = t.params.history.root;
                "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`;
            } else n.pathname.includes(e) || (d = `${e}/${d}`);
            t.params.history.keepQuery && (d += n.search);
            const c = a.history.state;
            c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({ value: d }, null, d) : a.history.pushState({ value: d }, null, d));
        }, c = (e, s, a) => {
            if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
                const r = t.slides.eq(i);
                if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                    const s = r.index();
                    t.slideTo(s, e, a);
                }
            } else t.slideTo(0, e, a);
        }, p = () => {
            n = Array.prototype.filter.call(t.params.url, t), c(t.params.speed, n.value, false);
        };
        a("init", () => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = false, void (t.params.hashNavigation.enabled = true);
                    i = true, n = Array.prototype.filter.call(t.params.url, t), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p));
                }
            })();
        }), a("destroy", () => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p);
            })();
        }), a("transitionEnd _freeModeNoMomentumRelease", () => {
            i && d(t.params.history.key, t.activeIndex);
        }), a("slideChange", () => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    }, function (e) {
        let { swiper: t, extendParams: s, emit: i, on: n } = e, l = false;
        const o = a(), c = r();
        s({ hashNavigation: { enabled: false, replaceState: false, watchState: false } });
        const p = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                if (undefined === s) return;
                t.slideTo(s);
            }
        }, u = () => {
            if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet"); else {
                const e = t.slides.eq(t.activeIndex), s = e.attr("data-hash") || e.attr("data-history");
                o.location.hash = s || "", i("hashSet");
            }
        };
        n("init", () => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = true;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, true);
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p);
            })();
        }), n("destroy", () => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p);
        }), n("transitionEnd _freeModeNoMomentumRelease", () => {
            l && Date.now();
        }), n("slideChange", () => {
            l && t.params.cssMode && Date.now();
        });
    }, function (e) {
        let t, { swiper: s, extendParams: i, on: r, emit: n } = e;
        function l() {
            if (!s.size) return s.autoplay.running = false, void (s.autoplay.paused = false);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = (undefined === a && (a = 0), setTimeout(() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, true, true), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? !!s.autoplay.running && (undefined !== t && (t && (clearTimeout(t), t = undefined), s.autoplay.running = false, n("autoplayStop"), true)) : (e = s.slideTo(s.slides.length - 1, s.params.speed, true, true), n("autoplay")) : (e = s.slidePrev(s.params.speed, true, true), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, true, true), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? !!s.autoplay.running && (undefined !== t && (t && (clearTimeout(t), t = undefined), s.autoplay.running = false, n("autoplayStop"), true)) : (e = s.slideTo(0, s.params.speed, true, true), n("autoplay")) : (e = s.slideNext(s.params.speed, true, true), n("autoplay")), (s.params.cssMode && s.autoplay.running || false === e) && l();
            }, a));
        }
        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = true, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
                s.$wrapperEl[0].addEventListener(e, h);
            }) : (s.autoplay.paused = false, l())));
        }
        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = false);
        }
        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
                s.$wrapperEl[0].removeEventListener(e, h);
            }), s.autoplay.paused = false, s.autoplay.running ? l() : !!s.autoplay.running && (undefined !== t && (t && (clearTimeout(t), t = undefined), s.autoplay.running = false, n("autoplayStop"), true)));
        }
        function m() {
            s.params.autoplay.disableOnInteraction ? !!s.autoplay.running && (undefined !== t && (t && (clearTimeout(t), t = undefined), s.autoplay.running = false, n("autoplayStop"), true)) : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
                s.$wrapperEl[0].removeEventListener(e, h);
            });
        }
        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = false, n("autoplayResume"), l());
        }
        s.autoplay = { running: false, paused: false }, i({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } }), r("init", () => {
            if (s.params.autoplay.enabled) {
                undefined === t && (!s.autoplay.running && (s.autoplay.running = true, n("autoplayStart"), l(), true));
                a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
            }
        }), r("beforeTransitionStart", (e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : !!s.autoplay.running && (undefined !== t && (t && (clearTimeout(t), t = undefined), s.autoplay.running = false, n("autoplayStop"), true)));
        }), r("sliderFirstMove", () => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? !!s.autoplay.running && (undefined !== t && (t && (clearTimeout(t), t = undefined), s.autoplay.running = false, n("autoplayStop"), true)) : c());
        }), r("touchEnd", () => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
        }), r("destroy", () => {
            s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && (!!s.autoplay.running && (undefined !== t && (t && (clearTimeout(t), t = undefined), s.autoplay.running = false, n("autoplayStop"), true)));
            a().removeEventListener("visibilitychange", u);
        }), Object.assign(s.autoplay, { pause: c, run: l, start: o, stop: d });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ thumbs: { swiper: null, multipleActiveThumbs: true, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
        let i = false, r = false;
        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex, a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(), a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = undefined === s ? a : undefined === a ? s : a - e < e - s ? a : s;
            }
            t.slideTo(i);
        }
        function l() {
            const { thumbs: e } = t.params;
            if (i) return false;
            i = true;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false }); else if ("object" == typeof e.swiper && null !== e.swiper && e.swiper.constructor && "Object" === Object.prototype.toString.call(e.swiper).slice(8, -1)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, { watchSlidesProgress: true, slideToClickedSlide: false }), t.thumbs.swiper = new s(a), r = true;
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), true;
        }
        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r); else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(), a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = undefined === e ? a : undefined === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev";
                } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : undefined));
            }
        }
        t.thumbs = { swiper: null }, a("beforeInit", () => {
            const { thumbs: e } = t.params;
            e && e.swiper && (l(), Array.prototype.filter.call(true, t));
        }), a("slideChange update resize observerUpdate", () => {
            Array.prototype.filter.call(e, t);
        }), a("setTransition", (e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s);
        }), a("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy();
        }), Object.assign(t.thumbs, { init: l, update: o });
    }, function (e) {
        let { swiper: t, extendParams: s, emit: a, once: i } = e;
        s({ freeMode: { enabled: false, momentum: true, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: false, minimumVelocity: 0.02 } }), Object.assign(t, {
            freeMode: {
                onTouchStart: function () {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
                }, onTouchMove: function () {
                    const { touchEventsData: e, touches: s } = t;
                    0 === e.velocities.length && e.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }), e.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: Date.now() });
                }, onTouchEnd: function (e) {
                    let { currentPos: s } = e;
                    const { params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d } = t, c = Date.now() - d.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop(), s = d.velocities.pop(), a = e.position - s.position, i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || Date.now() - e.time > 300) && (t.velocity = 0);
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = false;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = true, d.allowMomentumBounce = true) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = true); else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = true, d.allowMomentumBounce = true) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = true); else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                                    e = t;
                                    break;
                                }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c;
                            }
                            if (f && i("transitionEnd", () => {
                                t.loopFix();
                            }), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate), a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(true, t.swipeDirection), t.animating = true, n.transitionEnd(() => {
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(() => {
                                    t.setTranslate(p), n.transitionEnd(() => {
                                        t && !t.destroyed && t.transitionEnd();
                                    });
                                }, 0));
                            })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(true, t.swipeDirection), t.animating || (t.animating = true, n.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd();
                            }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses();
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease");
                        }
                        (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                    }
                }
            }
        });
    }, function (e) {
        let t, s, a, { swiper: i, extendParams: r } = e;
        r({ grid: { rows: 1, fill: "column" } }), i.grid = {
            initSlides: e => {
                const { slidesPerView: r } = i.params, { rows: n, fill: l } = i.params.grid;
                s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n));
            }, updateSlide: (e, r, n, l) => {
                const { slidesPerGroup: o, spaceBetween: d } = i.params, { rows: c, fill: p } = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c)), a = e - c * o * s, i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({ "-webkit-order": u, order: u });
                } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
            }, updateWrapperSize: (e, s, a) => {
                const { spaceBetween: r, centeredSlides: n, roundLengths: l } = i.params, { rows: o } = i.params.grid;
                if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({ [a("width")]: `${i.virtualSize + r}px` }), n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a);
                    }
                    s.push(...e);
                }
            }
        };
    }, function (e) {
        let { swiper: t } = e;
        Object.assign(t, { appendSlide: K.bind(t), prependSlide: Z.bind(t), addSlide: Q.bind(t), removeSlide: J.bind(t), removeAllSlides: ee.bind(t) });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ fadeEffect: { crossFade: false, transformEl: null } }), te({
            effect: "fade", swiper: t, on: a, setTranslate: () => {
                const { slides: e } = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i, i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({ opacity: n }).transform(`translate3d(${i}px, ${r}px, 0px)`);
                }
            }, setTransition: e => {
                const { transformEl: s } = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({ swiper: t, duration: e, transformEl: s, allSlides: true });
            }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t.params.cssMode })
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } });
        const i = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0));
        };
        te({
            effect: "cube", swiper: t, on: a, setTranslate: () => {
                const { $el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c } = t, p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({ height: `${r}px` })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s, n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0, m = 0, g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                    const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u);
                }
                if (s.css({ "-webkit-transform-origin": `50% 50% -${o / 2}px`, "transform-origin": `50% 50% -${o / 2}px` }), p.shadow) if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`); else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset;
                    m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`);
                }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
            }, setTransition: e => {
                const { $el: s, slides: a } = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
            }, recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each(t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e);
                });
            }, getEffectParams: () => t.params.cubeEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true })
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ flipEffect: { slideShadows: true, limitRotation: true, transformEl: null } });
        const i = (e, s, a) => {
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
        };
        te({
            effect: "flip", swiper: t, on: a, setTranslate: () => {
                const { slides: e, rtlTranslate: s } = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l, c = 0, p = t.params.cssMode ? -o - t.translate : -o, u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h);
                }
            }, setTransition: e => {
                const { transformEl: s } = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({ swiper: t, duration: e, transformEl: s });
            }, recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each(s => {
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
                });
            }, getEffectParams: () => t.params.flipEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t.params.cssMode })
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: true, transformEl: null } }), te({
            effect: "coverflow", swiper: t, on: a, setTranslate: () => {
                const { width: e, height: s, slides: a, slidesSizesGrid: i } = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e), s = i[e], l = (o - t[0].swiperSlideOffset - s / 2) / s, p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0, h = n ? 0 : d * p, m = -c * Math.abs(p), f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p, v = n ? f * p : 0, w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < 0.001 && (v = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(m) < 0.001 && (m = 0), Math.abs(u) < 0.001 && (u = 0), Math.abs(h) < 0.001 && (h = 0), Math.abs(w) < 0.001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
                    }
                }
            }, setTransition: e => {
                const { transformEl: s } = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true })
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ creativeEffect: { transformEl: null, limitProgress: 1, shadowPerProgress: false, progressMultiplier: 1, perspective: true, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } });
        const i = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative", swiper: t, on: a, setTranslate: () => {
                const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t, r = t.params.creativeEffect, { progressMultiplier: n } = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`);
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s), o = a[0].progress, d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset, u = [t.params.cssMode ? -p - t.translate : -p, 0, 0], h = [0, 0, 0];
                    let m = false;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
                    d < 0 ? (f = r.next, m = true) : d > 0 && (f = r.prev, m = true), u.forEach((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
                    }), h.forEach((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n);
                    }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "), v = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${0}deg)`, w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`, b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n, x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({ opacity: b }), f.origin && y.css("transform-origin", f.origin);
                }
            }, setTransition: e => {
                const { transformEl: s } = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({ swiper: t, duration: e, transformEl: s, allSlides: true });
            }, perspective: () => t.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t.params.cssMode })
        });
    }, function (e) {
        let { swiper: t, extendParams: s, on: a } = e;
        s({ cardsEffect: { slideShadows: true, transformEl: null, rotate: true } }), te({
            effect: "cards", swiper: t, on: a, setTranslate: () => {
                const { slides: e, activeIndex: s } = t, a = t.params.cardsEffect, { startTranslate: i, isTouched: r } = t.touchEventsData, n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1, g = -2 * c, v = 8 - 0.75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i, x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                        g += -28 * c * e, f += -0.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%";
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                        const e = h;
                        h = u, u = e;
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c), E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E);
                }
            }, setTransition: e => {
                const { transformEl: s } = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({ swiper: t, duration: e, transformEl: s });
            }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t.params.cssMode })
        });
    }];
    return V.use(re), V;
});
