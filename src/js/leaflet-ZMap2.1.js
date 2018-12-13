///<jscompress sourcefile="leaflet.js" />
/* @preserve
 * Leaflet 1.3.4, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
! function(t, i) {
	"object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
}(this, function(t) {
	"use strict";

	function i(t) {
		var i, e, n, o;
		for (e = 1, n = arguments.length; e < n; e++) {
			o = arguments[e];
			for (i in o) t[i] = o[i]
		}
		return t
	}

	function e(t, i) {
		var e = Array.prototype.slice;
		if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
		var n = e.call(arguments, 2);
		return function() {
			return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
		}
	}

	function n(t) {
		return t._leaflet_id = t._leaflet_id || ++ei, t._leaflet_id
	}

	function o(t, i, e) {
		var n, o, s, r;
		return r = function() {
			n = !1, o && (s.apply(e, o), o = !1)
		}, s = function() {
			n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
		}
	}

	function s(t, i, e) {
		var n = i[1],
			o = i[0],
			s = n - o;
		return t === n && e ? t : ((t - o) % s + s) % s + o
	}

	function r() {
		return !1
	}

	function a(t, i) {
		var e = Math.pow(10, void 0 === i ? 6 : i);
		return Math.round(t * e) / e
	}

	function h(t) {
		return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
	}

	function u(t) {
		return h(t).split(/\s+/)
	}

	function l(t, i) {
		t.hasOwnProperty("options") || (t.options = t.options ? ii(t.options) : {});
		for (var e in i) t.options[e] = i[e];
		return t.options
	}

	function c(t, i, e) {
		var n = [];
		for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
		return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
	}

	function _(t, i) {
		return t.replace(ni, function(t, e) {
			var n = i[e];
			if (void 0 === n) throw new Error("No value provided for variable " + t);
			return "function" == typeof n && (n = n(i)), n
		})
	}

	function d(t, i) {
		for (var e = 0; e < t.length; e++)
			if (t[e] === i) return e;
		return -1
	}

	function p(t) {
		return window["webkit" + t] || window["moz" + t] || window["ms" + t]
	}

	function m(t) {
		var i = +new Date,
			e = Math.max(0, 16 - (i - ri));
		return ri = i + e, window.setTimeout(t, e)
	}

	function f(t, i, n) {
		if (!n || ai !== m) return ai.call(window, e(t, i));
		t.call(i)
	}

	function g(t) {
		t && hi.call(window, t)
	}

	function v() {}

	function y(t) {
		if ("undefined" != typeof L && L && L.Mixin) {
			t = oi(t) ? t : [t];
			for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
		}
	}

	function x(t, i, e) {
		this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
	}

	function w(t, i, e) {
		return t instanceof x ? t : oi(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e)
	}

	function P(t, i) {
		if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
	}

	function b(t, i) {
		return !t || t instanceof P ? t : new P(t, i)
	}

	function T(t, i) {
		if (t)
			for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
	}

	function z(t, i) {
		return t instanceof T ? t : new T(t, i)
	}

	function M(t, i, e) {
		if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
		this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
	}

	function C(t, i, e) {
		return t instanceof M ? t : oi(t) && "object" != typeof t[0] ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e)
	}

	function S(t, i, e, n) {
		if (oi(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
		this._a = t, this._b = i, this._c = e, this._d = n
	}

	function Z(t, i, e, n) {
		return new S(t, i, e, n)
	}

	function E(t) {
		return document.createElementNS("http://www.w3.org/2000/svg", t)
	}

	function k(t, i) {
		var e, n, o, s, r, a, h = "";
		for (e = 0, o = t.length; e < o; e++) {
			for (n = 0, s = (r = t[e]).length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
			h += i ? Ji ? "z" : "x" : ""
		}
		return h || "M0 0"
	}

	function A(t) {
		return navigator.userAgent.toLowerCase().indexOf(t) >= 0
	}

	function B(t, i, e, n) {
		return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this
	}

	function I(t, i, e) {
		var n = t["_leaflet_" + i + e];
		return "touchstart" === i ? t.removeEventListener(te, n, !1) : "touchmove" === i ? t.removeEventListener(ie, n, !1) : "touchend" === i && (t.removeEventListener(ee, n, !1), t.removeEventListener(ne, n, !1)), this
	}

	function O(t, i, n) {
		var o = e(function(t) {
			if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
				if (!(oe.indexOf(t.target.tagName) < 0)) return;
				Pt(t)
			}
			j(t, i)
		});
		t["_leaflet_touchstart" + n] = o, t.addEventListener(te, o, !1), re || (document.documentElement.addEventListener(te, R, !0), document.documentElement.addEventListener(ie, N, !0), document.documentElement.addEventListener(ee, D, !0), document.documentElement.addEventListener(ne, D, !0), re = !0)
	}

	function R(t) {
		se[t.pointerId] = t, ae++
	}

	function N(t) {
		se[t.pointerId] && (se[t.pointerId] = t)
	}

	function D(t) {
		delete se[t.pointerId], ae--
	}

	function j(t, i) {
		t.touches = [];
		for (var e in se) t.touches.push(se[e]);
		t.changedTouches = [t], i(t)
	}

	function W(t, i, e) {
		var n = function(t) {
			(t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i)
		};
		t["_leaflet_touchmove" + e] = n, t.addEventListener(ie, n, !1)
	}

	function H(t, i, e) {
		var n = function(t) {
			j(t, i)
		};
		t["_leaflet_touchend" + e] = n, t.addEventListener(ee, n, !1), t.addEventListener(ne, n, !1)
	}

	function F(t, i, e) {
		function n(t) {
			var i;
			if (Vi) {
				if (!bi || "mouse" === t.pointerType) return;
				i = ae
			} else i = t.touches.length;
			if (!(i > 1)) {
				var e = Date.now(),
					n = e - (s || e);
				r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e
			}
		}

		function o(t) {
			if (a && !r.cancelBubble) {
				if (Vi) {
					if (!bi || "mouse" === t.pointerType) return;
					var e, n, o = {};
					for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
					r = o
				}
				r.type = "dblclick", i(r), s = null
			}
		}
		var s, r, a = !1,
			h = 250;
		return t[le + he + e] = n, t[le + ue + e] = o, t[le + "dblclick" + e] = i, t.addEventListener(he, n, !1), t.addEventListener(ue, o, !1), t.addEventListener("dblclick", i, !1), this
	}

	function U(t, i) {
		var e = t[le + he + i],
			n = t[le + ue + i],
			o = t[le + "dblclick" + i];
		return t.removeEventListener(he, e, !1), t.removeEventListener(ue, n, !1), bi || t.removeEventListener("dblclick", o, !1), this
	}

	function V(t) {
		return "string" == typeof t ? document.getElementById(t) : t
	}

	function q(t, i) {
		var e = t.style[i] || t.currentStyle && t.currentStyle[i];
		if ((!e || "auto" === e) && document.defaultView) {
			var n = document.defaultView.getComputedStyle(t, null);
			e = n ? n[i] : null
		}
		return "auto" === e ? null : e
	}

	function G(t, i, e) {
		var n = document.createElement(t);
		return n.className = i || "", e && e.appendChild(n), n
	}

	function K(t) {
		var i = t.parentNode;
		i && i.removeChild(t)
	}

	function Y(t) {
		for (; t.firstChild;) t.removeChild(t.firstChild)
	}

	function X(t) {
		var i = t.parentNode;
		i.lastChild !== t && i.appendChild(t)
	}

	function J(t) {
		var i = t.parentNode;
		i.firstChild !== t && i.insertBefore(t, i.firstChild)
	}

	function $(t, i) {
		if (void 0 !== t.classList) return t.classList.contains(i);
		var e = et(t);
		return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
	}

	function Q(t, i) {
		if (void 0 !== t.classList)
			for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
		else if (!$(t, i)) {
			var s = et(t);
			it(t, (s ? s + " " : "") + i)
		}
	}

	function tt(t, i) {
		void 0 !== t.classList ? t.classList.remove(i) : it(t, h((" " + et(t) + " ").replace(" " + i + " ", " ")))
	}

	function it(t, i) {
		void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
	}

	function et(t) {
		return void 0 === t.className.baseVal ? t.className : t.className.baseVal
	}

	function nt(t, i) {
		"opacity" in t.style ? t.style.opacity = i : "filter" in t.style && ot(t, i)
	}

	function ot(t, i) {
		var e = !1,
			n = "DXImageTransform.Microsoft.Alpha";
		try {
			e = t.filters.item(n)
		} catch (t) {
			if (1 === i) return
		}
		i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
	}

	function st(t) {
		for (var i = document.documentElement.style, e = 0; e < t.length; e++)
			if (t[e] in i) return t[e];
		return !1
	}

	function rt(t, i, e) {
		var n = i || new x(0, 0);
		t.style[ce] = (Ri ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
	}

	function at(t, i) {
		t._leaflet_pos = i, ji ? rt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
	}

	function ht(t) {
		return t._leaflet_pos || new x(0, 0)
	}

	function ut() {
		mt(window, "dragstart", Pt)
	}

	function lt() {
		ft(window, "dragstart", Pt)
	}

	function ct(t) {
		for (; - 1 === t.tabIndex;) t = t.parentNode;
		t.style && (_t(), me = t, fe = t.style.outline, t.style.outline = "none", mt(window, "keydown", _t))
	}

	function _t() {
		me && (me.style.outline = fe, me = void 0, fe = void 0, ft(window, "keydown", _t))
	}

	function dt(t) {
		do {
			t = t.parentNode
		} while (!(t.offsetWidth && t.offsetHeight || t === document.body));
		return t
	}

	function pt(t) {
		var i = t.getBoundingClientRect();
		return {
			x: i.width / t.offsetWidth || 1,
			y: i.height / t.offsetHeight || 1,
			boundingClientRect: i
		}
	}

	function mt(t, i, e, n) {
		if ("object" == typeof i)
			for (var o in i) gt(t, o, i[o], e);
		else
			for (var s = 0, r = (i = u(i)).length; s < r; s++) gt(t, i[s], e, n);
		return this
	}

	function ft(t, i, e, n) {
		if ("object" == typeof i)
			for (var o in i) vt(t, o, i[o], e);
		else if (i)
			for (var s = 0, r = (i = u(i)).length; s < r; s++) vt(t, i[s], e, n);
		else {
			for (var a in t[ye]) vt(t, a, t[ye][a]);
			delete t[ye]
		}
		return this
	}

	function gt(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : "");
		if (t[ye] && t[ye][s]) return this;
		var r = function(i) {
				return e.call(o || t, i || window.event)
			},
			a = r;
		Vi && 0 === i.indexOf("touch") ? B(t, i, r, s) : !qi || "dblclick" !== i || !F || Vi && Ei ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function(i) {
			i = i || window.event, Ct(t, i) && a(i)
		}, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && zi && (r = function(t) {
			St(t, a)
		}), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[ye] = t[ye] || {}, t[ye][s] = r
	}

	function vt(t, i, e, o) {
		var s = i + n(e) + (o ? "_" + n(o) : ""),
			r = t[ye] && t[ye][s];
		if (!r) return this;
		Vi && 0 === i.indexOf("touch") ? I(t, i, s) : !qi || "dblclick" !== i || !U || Vi && Ei ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : U(t, s), t[ye][s] = null
	}

	function yt(t) {
		return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Mt(t), this
	}

	function xt(t) {
		return gt(t, "mousewheel", yt), this
	}

	function wt(t) {
		return mt(t, "mousedown touchstart dblclick", yt), gt(t, "click", zt), this
	}

	function Pt(t) {
		return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
	}

	function Lt(t) {
		return Pt(t), yt(t), this
	}

	function bt(t, i) {
		if (!i) return new x(t.clientX, t.clientY);
		var e = pt(i),
			n = e.boundingClientRect;
		return new x((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
	}

	function Tt(t) {
		return bi ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / xe : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
	}

	function zt(t) {
		we[t.type] = !0
	}

	function Mt(t) {
		var i = we[t.type];
		return we[t.type] = !1, i
	}

	function Ct(t, i) {
		var e = i.relatedTarget;
		if (!e) return !0;
		try {
			for (; e && e !== t;) e = e.parentNode
		} catch (t) {
			return !1
		}
		return e !== t
	}

	function St(t, i) {
		var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
			n = ge && e - ge;
		n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? Lt(t) : (ge = e, i(t))
	}

	function Zt(t, i) {
		if (!i || !t.length) return t.slice();
		var e = i * i;
		return t = Bt(t, e), t = kt(t, e)
	}

	function Et(t, i, e) {
		return Math.sqrt(Dt(t, i, e, !0))
	}

	function kt(t, i) {
		var e = t.length,
			n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
		n[0] = n[e - 1] = 1, At(t, n, i, 0, e - 1);
		var o, s = [];
		for (o = 0; o < e; o++) n[o] && s.push(t[o]);
		return s
	}

	function At(t, i, e, n, o) {
		var s, r, a, h = 0;
		for (r = n + 1; r <= o - 1; r++)(a = Dt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
		h > e && (i[s] = 1, At(t, i, e, n, s), At(t, i, e, s, o))
	}

	function Bt(t, i) {
		for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Nt(t[n], t[o]) > i && (e.push(t[n]), o = n);
		return o < s - 1 && e.push(t[s - 1]), e
	}

	function It(t, i, e, n, o) {
		var s, r, a, h = n ? ke : Rt(t, e),
			u = Rt(i, e);
		for (ke = u;;) {
			if (!(h | u)) return [t, i];
			if (h & u) return !1;
			a = Rt(r = Ot(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a)
		}
	}

	function Ot(t, i, e, n, o) {
		var s, r, a = i.x - t.x,
			h = i.y - t.y,
			u = n.min,
			l = n.max;
		return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o)
	}

	function Rt(t, i) {
		var e = 0;
		return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
	}

	function Nt(t, i) {
		var e = i.x - t.x,
			n = i.y - t.y;
		return e * e + n * n
	}

	function Dt(t, i, e, n) {
		var o, s = i.x,
			r = i.y,
			a = e.x - s,
			h = e.y - r,
			u = a * a + h * h;
		return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r)
	}

	function jt(t) {
		return !oi(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
	}

	function Wt(t) {
		return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), jt(t)
	}

	function Ht(t, i, e) {
		var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
		for (o = 0, u = t.length; o < u; o++) t[o]._code = Rt(t[o], i);
		for (r = 0; r < 4; r++) {
			for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = Ot(h, a, l, i, e))._code = Rt(c, i), n.push(c)) : (h._code & l && ((c = Ot(h, a, l, i, e))._code = Rt(c, i), n.push(c)), n.push(a));
			t = n
		}
		return t
	}

	function Ft(t, i) {
		var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
			a = r ? r.coordinates : null,
			h = [],
			u = i && i.pointToLayer,
			l = i && i.coordsToLatLng || Ut;
		if (!a && !r) return null;
		switch (r.type) {
			case "Point":
				return e = l(a), u ? u(t, e) : new $e(e);
			case "MultiPoint":
				for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new $e(e));
				return new Ke(h);
			case "LineString":
			case "MultiLineString":
				return n = Vt(a, "LineString" === r.type ? 0 : 1, l), new nn(n, i);
			case "Polygon":
			case "MultiPolygon":
				return n = Vt(a, "Polygon" === r.type ? 1 : 2, l), new on(n, i);
			case "GeometryCollection":
				for (o = 0, s = r.geometries.length; o < s; o++) {
					var c = Ft({
						geometry: r.geometries[o],
						type: "Feature",
						properties: t.properties
					}, i);
					c && h.push(c)
				}
				return new Ke(h);
			default:
				throw new Error("Invalid GeoJSON object.")
		}
	}

	function Ut(t) {
		return new M(t[1], t[0], t[2])
	}

	function Vt(t, i, e) {
		for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Vt(t[s], i - 1, e) : (e || Ut)(t[s]), o.push(n);
		return o
	}

	function qt(t, i) {
		return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)]
	}

	function Gt(t, i, e, n) {
		for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Gt(t[s], i - 1, e, n) : qt(t[s], n));
		return !i && e && o.push(o[0]), o
	}

	function Kt(t, e) {
		return t.feature ? i({}, t.feature, {
			geometry: e
		}) : Yt(e)
	}

	function Yt(t) {
		return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
			type: "Feature",
			properties: {},
			geometry: t
		}
	}

	function Xt(t, i) {
		return new sn(t, i)
	}

	function Jt(t, i) {
		return new mn(t, i)
	}

	function $t(t) {
		return Xi ? new vn(t) : null
	}

	function Qt(t) {
		return Ji || $i ? new Pn(t) : null
	}
	var ti = Object.freeze;
	Object.freeze = function(t) {
		return t
	};
	var ii = Object.create || function() {
			function t() {}
			return function(i) {
				return t.prototype = i, new t
			}
		}(),
		ei = 0,
		ni = /\{ *([\w_-]+) *\}/g,
		oi = Array.isArray || function(t) {
			return "[object Array]" === Object.prototype.toString.call(t)
		},
		si = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		ri = 0,
		ai = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
		hi = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function(t) {
			window.clearTimeout(t)
		},
		ui = (Object.freeze || Object)({
			freeze: ti,
			extend: i,
			create: ii,
			bind: e,
			lastId: ei,
			stamp: n,
			throttle: o,
			wrapNum: s,
			falseFn: r,
			formatNum: a,
			trim: h,
			splitWords: u,
			setOptions: l,
			getParamString: c,
			template: _,
			isArray: oi,
			indexOf: d,
			emptyImageUrl: si,
			requestFn: ai,
			cancelFn: hi,
			requestAnimFrame: f,
			cancelAnimFrame: g
		});
	v.extend = function(t) {
		var e = function() {
				this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
			},
			n = e.__super__ = this.prototype,
			o = ii(n);
		o.constructor = e, e.prototype = o;
		for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
		return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(ii(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function() {
			if (!this._initHooksCalled) {
				n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
				for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this)
			}
		}, e
	}, v.include = function(t) {
		return i(this.prototype, t), this
	}, v.mergeOptions = function(t) {
		return i(this.prototype.options, t), this
	}, v.addInitHook = function(t) {
		var i = Array.prototype.slice.call(arguments, 1),
			e = "function" == typeof t ? t : function() {
				this[t].apply(this, i)
			};
		return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
	};
	var li = {
		on: function(t, i, e) {
			if ("object" == typeof t)
				for (var n in t) this._on(n, t[n], i);
			else
				for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
			return this
		},
		off: function(t, i, e) {
			if (t)
				if ("object" == typeof t)
					for (var n in t) this._off(n, t[n], i);
				else
					for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
			else delete this._events;
			return this
		},
		_on: function(t, i, e) {
			this._events = this._events || {};
			var n = this._events[t];
			n || (n = [], this._events[t] = n), e === this && (e = void 0);
			for (var o = {
					fn: i,
					ctx: e
				}, s = n, r = 0, a = s.length; r < a; r++)
				if (s[r].fn === i && s[r].ctx === e) return;
			s.push(o)
		},
		_off: function(t, i, e) {
			var n, o, s;
			if (this._events && (n = this._events[t]))
				if (i) {
					if (e === this && (e = void 0), n)
						for (o = 0, s = n.length; o < s; o++) {
							var a = n[o];
							if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
						}
				} else {
					for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
					delete this._events[t]
				}
		},
		fire: function(t, e, n) {
			if (!this.listens(t, n)) return this;
			var o = i({}, e, {
				type: t,
				target: this,
				sourceTarget: e && e.sourceTarget || this
			});
			if (this._events) {
				var s = this._events[t];
				if (s) {
					this._firingCount = this._firingCount + 1 || 1;
					for (var r = 0, a = s.length; r < a; r++) {
						var h = s[r];
						h.fn.call(h.ctx || this, o)
					}
					this._firingCount--
				}
			}
			return n && this._propagateEvent(o), this
		},
		listens: function(t, i) {
			var e = this._events && this._events[t];
			if (e && e.length) return !0;
			if (i)
				for (var n in this._eventParents)
					if (this._eventParents[n].listens(t, i)) return !0;
			return !1
		},
		once: function(t, i, n) {
			if ("object" == typeof t) {
				for (var o in t) this.once(o, t[o], i);
				return this
			}
			var s = e(function() {
				this.off(t, i, n).off(t, s, n)
			}, this);
			return this.on(t, i, n).on(t, s, n)
		},
		addEventParent: function(t) {
			return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
		},
		removeEventParent: function(t) {
			return this._eventParents && delete this._eventParents[n(t)], this
		},
		_propagateEvent: function(t) {
			for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
				layer: t.target,
				propagatedFrom: t.target
			}, t), !0)
		}
	};
	li.addEventListener = li.on, li.removeEventListener = li.clearAllEventListeners = li.off, li.addOneTimeEventListener = li.once, li.fireEvent = li.fire, li.hasEventListeners = li.listens;
	var ci = v.extend(li),
		_i = Math.trunc || function(t) {
			return t > 0 ? Math.floor(t) : Math.ceil(t)
		};
	x.prototype = {
		clone: function() {
			return new x(this.x, this.y)
		},
		add: function(t) {
			return this.clone()._add(w(t))
		},
		_add: function(t) {
			return this.x += t.x, this.y += t.y, this
		},
		subtract: function(t) {
			return this.clone()._subtract(w(t))
		},
		_subtract: function(t) {
			return this.x -= t.x, this.y -= t.y, this
		},
		divideBy: function(t) {
			return this.clone()._divideBy(t)
		},
		_divideBy: function(t) {
			return this.x /= t, this.y /= t, this
		},
		multiplyBy: function(t) {
			return this.clone()._multiplyBy(t)
		},
		_multiplyBy: function(t) {
			return this.x *= t, this.y *= t, this
		},
		scaleBy: function(t) {
			return new x(this.x * t.x, this.y * t.y)
		},
		unscaleBy: function(t) {
			return new x(this.x / t.x, this.y / t.y)
		},
		round: function() {
			return this.clone()._round()
		},
		_round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		floor: function() {
			return this.clone()._floor()
		},
		_floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function() {
			return this.clone()._ceil()
		},
		_ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		trunc: function() {
			return this.clone()._trunc()
		},
		_trunc: function() {
			return this.x = _i(this.x), this.y = _i(this.y), this
		},
		distanceTo: function(t) {
			var i = (t = w(t)).x - this.x,
				e = t.y - this.y;
			return Math.sqrt(i * i + e * e)
		},
		equals: function(t) {
			return (t = w(t)).x === this.x && t.y === this.y
		},
		contains: function(t) {
			return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
		},
		toString: function() {
			return "Point(" + a(this.x) + ", " + a(this.y) + ")"
		}
	}, P.prototype = {
		extend: function(t) {
			return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
		},
		getCenter: function(t) {
			return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
		},
		getBottomLeft: function() {
			return new x(this.min.x, this.max.y)
		},
		getTopRight: function() {
			return new x(this.max.x, this.min.y)
		},
		getTopLeft: function() {
			return this.min
		},
		getBottomRight: function() {
			return this.max
		},
		getSize: function() {
			return this.max.subtract(this.min)
		},
		contains: function(t) {
			var i, e;
			return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
		},
		intersects: function(t) {
			t = b(t);
			var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x >= i.x && n.x <= e.x,
				r = o.y >= i.y && n.y <= e.y;
			return s && r
		},
		overlaps: function(t) {
			t = b(t);
			var i = this.min,
				e = this.max,
				n = t.min,
				o = t.max,
				s = o.x > i.x && n.x < e.x,
				r = o.y > i.y && n.y < e.y;
			return s && r
		},
		isValid: function() {
			return !(!this.min || !this.max)
		}
	}, T.prototype = {
		extend: function(t) {
			var i, e, n = this._southWest,
				o = this._northEast;
			if (t instanceof M) i = t, e = t;
			else {
				if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
				if (i = t._southWest, e = t._northEast, !i || !e) return this
			}
			return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this
		},
		pad: function(t) {
			var i = this._southWest,
				e = this._northEast,
				n = Math.abs(i.lat - e.lat) * t,
				o = Math.abs(i.lng - e.lng) * t;
			return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o))
		},
		getCenter: function() {
			return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
		},
		getSouthWest: function() {
			return this._southWest
		},
		getNorthEast: function() {
			return this._northEast
		},
		getNorthWest: function() {
			return new M(this.getNorth(), this.getWest())
		},
		getSouthEast: function() {
			return new M(this.getSouth(), this.getEast())
		},
		getWest: function() {
			return this._southWest.lng
		},
		getSouth: function() {
			return this._southWest.lat
		},
		getEast: function() {
			return this._northEast.lng
		},
		getNorth: function() {
			return this._northEast.lat
		},
		contains: function(t) {
			t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
			var i, e, n = this._southWest,
				o = this._northEast;
			return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
		},
		intersects: function(t) {
			t = z(t);
			var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat >= i.lat && n.lat <= e.lat,
				r = o.lng >= i.lng && n.lng <= e.lng;
			return s && r
		},
		overlaps: function(t) {
			t = z(t);
			var i = this._southWest,
				e = this._northEast,
				n = t.getSouthWest(),
				o = t.getNorthEast(),
				s = o.lat > i.lat && n.lat < e.lat,
				r = o.lng > i.lng && n.lng < e.lng;
			return s && r
		},
		toBBoxString: function() {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
		},
		equals: function(t, i) {
			return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
		},
		isValid: function() {
			return !(!this._southWest || !this._northEast)
		}
	}, M.prototype = {
		equals: function(t, i) {
			return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
		},
		toString: function(t) {
			return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
		},
		distanceTo: function(t) {
			return pi.distance(this, C(t))
		},
		wrap: function() {
			return pi.wrapLatLng(this)
		},
		toBounds: function(t) {
			var i = 180 * t / 40075017,
				e = i / Math.cos(Math.PI / 180 * this.lat);
			return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
		},
		clone: function() {
			return new M(this.lat, this.lng, this.alt)
		}
	};
	var di = {
			latLngToPoint: function(t, i) {
				var e = this.projection.project(t),
					n = this.scale(i);
				return this.transformation._transform(e, n)
			},
			pointToLatLng: function(t, i) {
				var e = this.scale(i),
					n = this.transformation.untransform(t, e);
				return this.projection.unproject(n)
			},
			project: function(t) {
				return this.projection.project(t)
			},
			unproject: function(t) {
				return this.projection.unproject(t)
			},
			scale: function(t) {
				return 256 * Math.pow(2, t)
			},
			zoom: function(t) {
				return Math.log(t / 256) / Math.LN2
			},
			getProjectedBounds: function(t) {
				if (this.infinite) return null;
				var i = this.projection.bounds,
					e = this.scale(t);
				return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
			},
			infinite: !1,
			wrapLatLng: function(t) {
				var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
				return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
			},
			wrapLatLngBounds: function(t) {
				var i = t.getCenter(),
					e = this.wrapLatLng(i),
					n = i.lat - e.lat,
					o = i.lng - e.lng;
				if (0 === n && 0 === o) return t;
				var s = t.getSouthWest(),
					r = t.getNorthEast();
				return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o))
			}
		},
		pi = i({}, di, {
			wrapLng: [-180, 180],
			R: 6371e3,
			distance: function(t, i) {
				var e = Math.PI / 180,
					n = t.lat * e,
					o = i.lat * e,
					s = Math.sin((i.lat - t.lat) * e / 2),
					r = Math.sin((i.lng - t.lng) * e / 2),
					a = s * s + Math.cos(n) * Math.cos(o) * r * r,
					h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				return this.R * h
			}
		}),
		mi = {
			R: 6378137,
			MAX_LATITUDE: 85.0511287798,
			project: function(t) {
				var i = Math.PI / 180,
					e = this.MAX_LATITUDE,
					n = Math.max(Math.min(e, t.lat), -e),
					o = Math.sin(n * i);
				return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
			},
			unproject: function(t) {
				var i = 180 / Math.PI;
				return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
			},
			bounds: function() {
				var t = 6378137 * Math.PI;
				return new P([-t, -t], [t, t])
			}()
		};
	S.prototype = {
		transform: function(t, i) {
			return this._transform(t.clone(), i)
		},
		_transform: function(t, i) {
			return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
		},
		untransform: function(t, i) {
			return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
		}
	};
	var fi, gi, vi, yi = i({}, pi, {
			code: "EPSG:3857",
			projection: mi,
			transformation: function() {
				var t = .5 / (Math.PI * mi.R);
				return Z(t, .5, -t, .5)
			}()
		}),
		xi = i({}, yi, {
			code: "EPSG:900913"
		}),
		wi = document.documentElement.style,
		Pi = "ActiveXObject" in window,
		Li = Pi && !document.addEventListener,
		bi = "msLaunchUri" in navigator && !("documentMode" in document),
		Ti = A("webkit"),
		zi = A("android"),
		Mi = A("android 2") || A("android 3"),
		Ci = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
		Si = zi && A("Google") && Ci < 537 && !("AudioNode" in window),
		Zi = !!window.opera,
		Ei = A("chrome"),
		ki = A("gecko") && !Ti && !Zi && !Pi,
		Ai = !Ei && A("safari"),
		Bi = A("phantom"),
		Ii = "OTransition" in wi,
		Oi = 0 === navigator.platform.indexOf("Win"),
		Ri = Pi && "transition" in wi,
		Ni = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !Mi,
		Di = "MozPerspective" in wi,
		ji = !window.L_DISABLE_3D && (Ri || Ni || Di) && !Ii && !Bi,
		Wi = "undefined" != typeof orientation || A("mobile"),
		Hi = Wi && Ti,
		Fi = Wi && Ni,
		Ui = !window.PointerEvent && window.MSPointerEvent,
		Vi = !(!window.PointerEvent && !Ui),
		qi = !window.L_NO_TOUCH && (Vi || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
		Gi = Wi && Zi,
		Ki = Wi && ki,
		Yi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
		Xi = !!document.createElement("canvas").getContext,
		Ji = !(!document.createElementNS || !E("svg").createSVGRect),
		$i = !Ji && function() {
			try {
				var t = document.createElement("div");
				t.innerHTML = '<v:shape adj="1"/>';
				var i = t.firstChild;
				return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
			} catch (t) {
				return !1
			}
		}(),
		Qi = (Object.freeze || Object)({
			ie: Pi,
			ielt9: Li,
			edge: bi,
			webkit: Ti,
			android: zi,
			android23: Mi,
			androidStock: Si,
			opera: Zi,
			chrome: Ei,
			gecko: ki,
			safari: Ai,
			phantom: Bi,
			opera12: Ii,
			win: Oi,
			ie3d: Ri,
			webkit3d: Ni,
			gecko3d: Di,
			any3d: ji,
			mobile: Wi,
			mobileWebkit: Hi,
			mobileWebkit3d: Fi,
			msPointer: Ui,
			pointer: Vi,
			touch: qi,
			mobileOpera: Gi,
			mobileGecko: Ki,
			retina: Yi,
			canvas: Xi,
			svg: Ji,
			vml: $i
		}),
		te = Ui ? "MSPointerDown" : "pointerdown",
		ie = Ui ? "MSPointerMove" : "pointermove",
		ee = Ui ? "MSPointerUp" : "pointerup",
		ne = Ui ? "MSPointerCancel" : "pointercancel",
		oe = ["INPUT", "SELECT", "OPTION"],
		se = {},
		re = !1,
		ae = 0,
		he = Ui ? "MSPointerDown" : Vi ? "pointerdown" : "touchstart",
		ue = Ui ? "MSPointerUp" : Vi ? "pointerup" : "touchend",
		le = "_leaflet_",
		ce = st(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
		_e = st(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
		de = "webkitTransition" === _e || "OTransition" === _e ? _e + "End" : "transitionend";
	if ("onselectstart" in document) fi = function() {
		mt(window, "selectstart", Pt)
	}, gi = function() {
		ft(window, "selectstart", Pt)
	};
	else {
		var pe = st(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
		fi = function() {
			if (pe) {
				var t = document.documentElement.style;
				vi = t[pe], t[pe] = "none"
			}
		}, gi = function() {
			pe && (document.documentElement.style[pe] = vi, vi = void 0)
		}
	}
	var me, fe, ge, ve = (Object.freeze || Object)({
			TRANSFORM: ce,
			TRANSITION: _e,
			TRANSITION_END: de,
			get: V,
			getStyle: q,
			create: G,
			remove: K,
			empty: Y,
			toFront: X,
			toBack: J,
			hasClass: $,
			addClass: Q,
			removeClass: tt,
			setClass: it,
			getClass: et,
			setOpacity: nt,
			testProp: st,
			setTransform: rt,
			setPosition: at,
			getPosition: ht,
			disableTextSelection: fi,
			enableTextSelection: gi,
			disableImageDrag: ut,
			enableImageDrag: lt,
			preventOutline: ct,
			restoreOutline: _t,
			getSizedParentNode: dt,
			getScale: pt
		}),
		ye = "_leaflet_events",
		xe = Oi && Ei ? 2 * window.devicePixelRatio : ki ? window.devicePixelRatio : 1,
		we = {},
		Pe = (Object.freeze || Object)({
			on: mt,
			off: ft,
			stopPropagation: yt,
			disableScrollPropagation: xt,
			disableClickPropagation: wt,
			preventDefault: Pt,
			stop: Lt,
			getMousePosition: bt,
			getWheelDelta: Tt,
			fakeStop: zt,
			skipped: Mt,
			isExternalTarget: Ct,
			addListener: mt,
			removeListener: ft
		}),
		Le = ci.extend({
			run: function(t, i, e, n) {
				this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = ht(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
			},
			stop: function() {
				this._inProgress && (this._step(!0), this._complete())
			},
			_animate: function() {
				this._animId = f(this._animate, this), this._step()
			},
			_step: function(t) {
				var i = +new Date - this._startTime,
					e = 1e3 * this._duration;
				i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
			},
			_runFrame: function(t, i) {
				var e = this._startPos.add(this._offset.multiplyBy(t));
				i && e._round(), at(this._el, e), this.fire("step")
			},
			_complete: function() {
				g(this._animId), this._inProgress = !1, this.fire("end")
			},
			_easeOut: function(t) {
				return 1 - Math.pow(1 - t, this._easeOutPower)
			}
		}),
		be = ci.extend({
			options: {
				crs: yi,
				center: void 0,
				zoom: void 0,
				minZoom: void 0,
				maxZoom: void 0,
				layers: [],
				maxBounds: void 0,
				renderer: void 0,
				zoomAnimation: !0,
				zoomAnimationThreshold: 4,
				fadeAnimation: !0,
				markerZoomAnimation: !0,
				transform3DLimit: 8388608,
				zoomSnap: 1,
				zoomDelta: 1,
				trackResize: !0
			},
			initialize: function(t, i) {
				i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, {
					reset: !0
				}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = _e && ji && !Gi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), mt(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
			},
			setView: function(t, e, n) {
				return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({
					animate: n.animate
				}, n.zoom), n.pan = i({
					animate: n.animate,
					duration: n.duration
				}, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
			},
			setZoom: function(t, i) {
				return this._loaded ? this.setView(this.getCenter(), t, {
					zoom: i
				}) : (this._zoom = t, this)
			},
			zoomIn: function(t, i) {
				return t = t || (ji ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
			},
			zoomOut: function(t, i) {
				return t = t || (ji ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
			},
			setZoomAround: function(t, i, e) {
				var n = this.getZoomScale(i),
					o = this.getSize().divideBy(2),
					s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
					r = this.containerPointToLatLng(o.add(s));
				return this.setView(r, i, {
					zoom: e
				})
			},
			_getBoundsCenterZoom: function(t, i) {
				i = i || {}, t = t.getBounds ? t.getBounds() : z(t);
				var e = w(i.paddingTopLeft || i.padding || [0, 0]),
					n = w(i.paddingBottomRight || i.padding || [0, 0]),
					o = this.getBoundsZoom(t, !1, e.add(n));
				if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
					center: t.getCenter(),
					zoom: o
				};
				var s = n.subtract(e).divideBy(2),
					r = this.project(t.getSouthWest(), o),
					a = this.project(t.getNorthEast(), o);
				return {
					center: this.unproject(r.add(a).divideBy(2).add(s), o),
					zoom: o
				}
			},
			fitBounds: function(t, i) {
				if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
				var e = this._getBoundsCenterZoom(t, i);
				return this.setView(e.center, e.zoom, i)
			},
			fitWorld: function(t) {
				return this.fitBounds([
					[-90, -180],
					[90, 180]
				], t)
			},
			panTo: function(t, i) {
				return this.setView(t, this._zoom, {
					pan: i
				})
			},
			panBy: function(t, i) {
				if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
				if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
				if (this._panAnim || (this._panAnim = new Le, this._panAnim.on({
						step: this._onPanTransitionStep,
						end: this._onPanTransitionEnd
					}, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
					Q(this._mapPane, "leaflet-pan-anim");
					var e = this._getMapPanePos().subtract(t).round();
					this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
				} else this._rawPanBy(t), this.fire("move").fire("moveend");
				return this
			},
			flyTo: function(t, i, e) {
				function n(t) {
					var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
						e = Math.sqrt(i * i + 1) - i;
					return e < 1e-9 ? -18 : Math.log(e)
				}

				function o(t) {
					return (Math.exp(t) - Math.exp(-t)) / 2
				}

				function s(t) {
					return (Math.exp(t) + Math.exp(-t)) / 2
				}

				function r(t) {
					return o(t) / s(t)
				}

				function a(t) {
					return m * (s(w) / s(w + y * t))
				}

				function h(t) {
					return m * (s(w) * r(w + y * t) - o(w)) / x
				}

				function u(t) {
					return 1 - Math.pow(1 - t, 1.5)
				}

				function l() {
					var e = (Date.now() - P) / b,
						n = u(e) * L;
					e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), {
						flyTo: !0
					})) : this._move(t, i)._moveEnd(!0)
				}
				if (!1 === (e = e || {}).animate || !ji) return this.setView(t, i, e);
				this._stop();
				var c = this.project(this.getCenter()),
					_ = this.project(t),
					d = this.getSize(),
					p = this._zoom;
				t = C(t), i = void 0 === i ? p : i;
				var m = Math.max(d.x, d.y),
					g = m * this.getZoomScale(p, i),
					v = _.distanceTo(c) || 1,
					y = 1.42,
					x = y * y,
					w = n(0),
					P = Date.now(),
					L = (n(1) - w) / y,
					b = e.duration ? 1e3 * e.duration : 1e3 * L * .8;
				return this._moveStart(!0, e.noMoveStart), l.call(this), this
			},
			flyToBounds: function(t, i) {
				var e = this._getBoundsCenterZoom(t, i);
				return this.flyTo(e.center, e.zoom, i)
			},
			setMaxBounds: function(t) {
				return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
			},
			setMinZoom: function(t) {
				var i = this.options.minZoom;
				return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
			},
			setMaxZoom: function(t) {
				var i = this.options.maxZoom;
				return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
			},
			panInsideBounds: function(t, i) {
				this._enforcingBounds = !0;
				var e = this.getCenter(),
					n = this._limitCenter(e, this._zoom, z(t));
				return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
			},
			invalidateSize: function(t) {
				if (!this._loaded) return this;
				t = i({
					animate: !1,
					pan: !0
				}, !0 === t ? {
					animate: !0
				} : t);
				var n = this.getSize();
				this._sizeChanged = !0, this._lastCenter = null;
				var o = this.getSize(),
					s = n.divideBy(2).round(),
					r = o.divideBy(2).round(),
					a = s.subtract(r);
				return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
					oldSize: n,
					newSize: o
				})) : this
			},
			stop: function() {
				return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
			},
			locate: function(t) {
				if (t = this._locateOptions = i({
						timeout: 1e4,
						watch: !1
					}, t), !("geolocation" in navigator)) return this._handleGeolocationError({
					code: 0,
					message: "Geolocation not supported."
				}), this;
				var n = e(this._handleGeolocationResponse, this),
					o = e(this._handleGeolocationError, this);
				return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
			},
			stopLocate: function() {
				return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
			},
			_handleGeolocationError: function(t) {
				var i = t.code,
					e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
				this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
					code: i,
					message: "Geolocation error: " + e + "."
				})
			},
			_handleGeolocationResponse: function(t) {
				var i = new M(t.coords.latitude, t.coords.longitude),
					e = i.toBounds(2 * t.coords.accuracy),
					n = this._locateOptions;
				if (n.setView) {
					var o = this.getBoundsZoom(e);
					this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
				}
				var s = {
					latlng: i,
					bounds: e,
					timestamp: t.timestamp
				};
				for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
				this.fire("locationfound", s)
			},
			addHandler: function(t, i) {
				if (!i) return this;
				var e = this[t] = new i(this);
				return this._handlers.push(e), this.options[t] && e.enable(), this
			},
			remove: function() {
				if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
				try {
					delete this._container._leaflet_id, delete this._containerId
				} catch (t) {
					this._container._leaflet_id = void 0, this._containerId = void 0
				}
				void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), K(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (g(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
				var t;
				for (t in this._layers) this._layers[t].remove();
				for (t in this._panes) K(this._panes[t]);
				return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
			},
			createPane: function(t, i) {
				var e = G("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
				return t && (this._panes[t] = e), e
			},
			getCenter: function() {
				return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
			},
			getZoom: function() {
				return this._zoom
			},
			getBounds: function() {
				var t = this.getPixelBounds();
				return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
			},
			getMinZoom: function() {
				return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
			},
			getMaxZoom: function() {
				return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
			},
			getBoundsZoom: function(t, i, e) {
				t = z(t), e = w(e || [0, 0]);
				var n = this.getZoom() || 0,
					o = this.getMinZoom(),
					s = this.getMaxZoom(),
					r = t.getNorthWest(),
					a = t.getSouthEast(),
					h = this.getSize().subtract(e),
					u = b(this.project(a, n), this.project(r, n)).getSize(),
					l = ji ? this.options.zoomSnap : 1,
					c = h.x / u.x,
					_ = h.y / u.y,
					d = i ? Math.max(c, _) : Math.min(c, _);
				return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
			},
			getSize: function() {
				return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
			},
			getPixelBounds: function(t, i) {
				var e = this._getTopLeftPoint(t, i);
				return new P(e, e.add(this.getSize()))
			},
			getPixelOrigin: function() {
				return this._checkIfLoaded(), this._pixelOrigin
			},
			getPixelWorldBounds: function(t) {
				return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
			},
			getPane: function(t) {
				return "string" == typeof t ? this._panes[t] : t
			},
			getPanes: function() {
				return this._panes
			},
			getContainer: function() {
				return this._container
			},
			getZoomScale: function(t, i) {
				var e = this.options.crs;
				return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
			},
			getScaleZoom: function(t, i) {
				var e = this.options.crs;
				i = void 0 === i ? this._zoom : i;
				var n = e.zoom(t * e.scale(i));
				return isNaN(n) ? 1 / 0 : n
			},
			project: function(t, i) {
				return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i)
			},
			unproject: function(t, i) {
				return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i)
			},
			layerPointToLatLng: function(t) {
				var i = w(t).add(this.getPixelOrigin());
				return this.unproject(i)
			},
			latLngToLayerPoint: function(t) {
				return this.project(C(t))._round()._subtract(this.getPixelOrigin())
			},
			wrapLatLng: function(t) {
				return this.options.crs.wrapLatLng(C(t))
			},
			wrapLatLngBounds: function(t) {
				return this.options.crs.wrapLatLngBounds(z(t))
			},
			distance: function(t, i) {
				return this.options.crs.distance(C(t), C(i))
			},
			containerPointToLayerPoint: function(t) {
				return w(t).subtract(this._getMapPanePos())
			},
			layerPointToContainerPoint: function(t) {
				return w(t).add(this._getMapPanePos())
			},
			containerPointToLatLng: function(t) {
				var i = this.containerPointToLayerPoint(w(t));
				return this.layerPointToLatLng(i)
			},
			latLngToContainerPoint: function(t) {
				return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))
			},
			mouseEventToContainerPoint: function(t) {
				return bt(t, this._container)
			},
			mouseEventToLayerPoint: function(t) {
				return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
			},
			mouseEventToLatLng: function(t) {
				return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
			},
			_initContainer: function(t) {
				var i = this._container = V(t);
				if (!i) throw new Error("Map container not found.");
				if (i._leaflet_id) throw new Error("Map container is already initialized.");
				mt(i, "scroll", this._onScroll, this), this._containerId = n(i)
			},
			_initLayout: function() {
				var t = this._container;
				this._fadeAnimated = this.options.fadeAnimation && ji, Q(t, "leaflet-container" + (qi ? " leaflet-touch" : "") + (Yi ? " leaflet-retina" : "") + (Li ? " leaflet-oldie" : "") + (Ai ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
				var i = q(t, "position");
				"absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
			},
			_initPanes: function() {
				var t = this._panes = {};
				this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), at(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Q(t.markerPane, "leaflet-zoom-hide"), Q(t.shadowPane, "leaflet-zoom-hide"))
			},
			_resetView: function(t, i) {
				at(this._mapPane, new x(0, 0));
				var e = !this._loaded;
				this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
				var n = this._zoom !== i;
				this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
			},
			_moveStart: function(t, i) {
				return t && this.fire("zoomstart"), i || this.fire("movestart"), this
			},
			_move: function(t, i, e) {
				void 0 === i && (i = this._zoom);
				var n = this._zoom !== i;
				return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
			},
			_moveEnd: function(t) {
				return t && this.fire("zoomend"), this.fire("moveend")
			},
			_stop: function() {
				return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
			},
			_rawPanBy: function(t) {
				at(this._mapPane, this._getMapPanePos().subtract(t))
			},
			_getZoomSpan: function() {
				return this.getMaxZoom() - this.getMinZoom()
			},
			_panInsideMaxBounds: function() {
				this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
			},
			_checkIfLoaded: function() {
				if (!this._loaded) throw new Error("Set map center and zoom first.")
			},
			_initEvents: function(t) {
				this._targets = {}, this._targets[n(this._container)] = this;
				var i = t ? ft : mt;
				i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), ji && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
			},
			_onResize: function() {
				g(this._resizeRequest), this._resizeRequest = f(function() {
					this.invalidateSize({
						debounceMoveend: !0
					})
				}, this)
			},
			_onScroll: function() {
				this._container.scrollTop = 0, this._container.scrollLeft = 0
			},
			_onMoveEnd: function() {
				var t = this._getMapPanePos();
				Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
			},
			_findEventTargets: function(t, i) {
				for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
					if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
						a = !0;
						break
					}
					if (e && e.listens(i, !0)) {
						if (s && !Ct(r, t)) break;
						if (o.push(e), s) break
					}
					if (r === this._container) break;
					r = r.parentNode
				}
				return o.length || a || s || !Ct(r, t) || (o = [this]), o
			},
			_handleDOMEvent: function(t) {
				if (this._loaded && !Mt(t)) {
					var i = t.type;
					"mousedown" !== i && "keypress" !== i || ct(t.target || t.srcElement), this._fireDOMEvent(t, i)
				}
			},
			_mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
			_fireDOMEvent: function(t, e, n) {
				if ("click" === t.type) {
					var o = i({}, t);
					o.type = "preclick", this._fireDOMEvent(o, o.type, n)
				}
				if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
					var s = n[0];
					"contextmenu" === e && s.listens(e, !0) && Pt(t);
					var r = {
						originalEvent: t
					};
					if ("keypress" !== t.type) {
						var a = s.getLatLng && (!s._radius || s._radius <= 10);
						r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
					}
					for (var h = 0; h < n.length; h++)
						if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
				}
			},
			_draggableMoved: function(t) {
				return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
			},
			_clearHandlers: function() {
				for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
			},
			whenReady: function(t, i) {
				return this._loaded ? t.call(i || this, {
					target: this
				}) : this.on("load", t, i), this
			},
			_getMapPanePos: function() {
				return ht(this._mapPane) || new x(0, 0)
			},
			_moved: function() {
				var t = this._getMapPanePos();
				return t && !t.equals([0, 0])
			},
			_getTopLeftPoint: function(t, i) {
				return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
			},
			_getNewPixelOrigin: function(t, i) {
				var e = this.getSize()._divideBy(2);
				return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
			},
			_latLngToNewLayerPoint: function(t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return this.project(t, i)._subtract(n)
			},
			_latLngBoundsToNewLayerBounds: function(t, i, e) {
				var n = this._getNewPixelOrigin(e, i);
				return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
			},
			_getCenterLayerPoint: function() {
				return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
			},
			_getCenterOffset: function(t) {
				return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
			},
			_limitCenter: function(t, i, e) {
				if (!e) return t;
				var n = this.project(t, i),
					o = this.getSize().divideBy(2),
					s = new P(n.subtract(o), n.add(o)),
					r = this._getBoundsOffset(s, e, i);
				return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
			},
			_limitOffset: function(t, i) {
				if (!i) return t;
				var e = this.getPixelBounds(),
					n = new P(e.min.add(t), e.max.add(t));
				return t.add(this._getBoundsOffset(n, i))
			},
			_getBoundsOffset: function(t, i, e) {
				var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
					o = n.min.subtract(t.min),
					s = n.max.subtract(t.max);
				return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
			},
			_rebound: function(t, i) {
				return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
			},
			_limitZoom: function(t) {
				var i = this.getMinZoom(),
					e = this.getMaxZoom(),
					n = ji ? this.options.zoomSnap : 1;
				return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
			},
			_onPanTransitionStep: function() {
				this.fire("move")
			},
			_onPanTransitionEnd: function() {
				tt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
			},
			_tryAnimatedPan: function(t, i) {
				var e = this._getCenterOffset(t)._trunc();
				return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0)
			},
			_createAnimProxy: function() {
				var t = this._proxy = G("div", "leaflet-proxy leaflet-zoom-animated");
				this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
					var i = ce,
						e = this._proxy.style[i];
					rt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
				}, this), this.on("load moveend", function() {
					var t = this.getCenter(),
						i = this.getZoom();
					rt(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
				}, this), this._on("unload", this._destroyAnimProxy, this)
			},
			_destroyAnimProxy: function() {
				K(this._proxy), delete this._proxy
			},
			_catchTransitionEnd: function(t) {
				this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
			},
			_nothingToAnimate: function() {
				return !this._container.getElementsByClassName("leaflet-zoom-animated").length
			},
			_tryAnimatedZoom: function(t, i, e) {
				if (this._animatingZoom) return !0;
				if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
				var n = this.getZoomScale(i),
					o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
				return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function() {
					this._moveStart(!0, !1)._animateZoom(t, i, !0)
				}, this), !0)
			},
			_animateZoom: function(t, i, n, o) {
				this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, Q(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
					center: t,
					zoom: i,
					noUpdate: o
				}), setTimeout(e(this._onZoomTransitionEnd, this), 250))
			},
			_onZoomTransitionEnd: function() {
				this._animatingZoom && (this._mapPane && tt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function() {
					this._moveEnd(!0)
				}, this))
			}
		}),
		Te = v.extend({
			options: {
				position: "topright"
			},
			initialize: function(t) {
				l(this, t)
			},
			getPosition: function() {
				return this.options.position
			},
			setPosition: function(t) {
				var i = this._map;
				return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
			},
			getContainer: function() {
				return this._container
			},
			addTo: function(t) {
				this.remove(), this._map = t;
				var i = this._container = this.onAdd(t),
					e = this.getPosition(),
					n = t._controlCorners[e];
				return Q(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
			},
			remove: function() {
				return this._map ? (K(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
			},
			_refocusOnMap: function(t) {
				this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
			}
		}),
		ze = function(t) {
			return new Te(t)
		};
	be.include({
		addControl: function(t) {
			return t.addTo(this), this
		},
		removeControl: function(t) {
			return t.remove(), this
		},
		_initControlPos: function() {
			function t(t, o) {
				var s = e + t + " " + e + o;
				i[t + o] = G("div", s, n)
			}
			var i = this._controlCorners = {},
				e = "leaflet-",
				n = this._controlContainer = G("div", e + "control-container", this._container);
			t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
		},
		_clearControlPos: function() {
			for (var t in this._controlCorners) K(this._controlCorners[t]);
			K(this._controlContainer), delete this._controlCorners, delete this._controlContainer
		}
	});
	var Me = Te.extend({
			options: {
				collapsed: !0,
				position: "topright",
				autoZIndex: !0,
				hideSingleBase: !1,
				sortLayers: !1,
				sortFunction: function(t, i, e, n) {
					return e < n ? -1 : n < e ? 1 : 0
				}
			},
			initialize: function(t, i, e) {
				l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
				for (var n in t) this._addLayer(t[n], n);
				for (n in i) this._addLayer(i[n], n, !0)
			},
			onAdd: function(t) {
				this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
				for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
				return this._container
			},
			addTo: function(t) {
				return Te.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
			},
			onRemove: function() {
				this._map.off("zoomend", this._checkDisabledLayers, this);
				for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
			},
			addBaseLayer: function(t, i) {
				return this._addLayer(t, i), this._map ? this._update() : this
			},
			addOverlay: function(t, i) {
				return this._addLayer(t, i, !0), this._map ? this._update() : this
			},
			removeLayer: function(t) {
				t.off("add remove", this._onLayerChange, this);
				var i = this._getLayer(n(t));
				return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
			},
			expand: function() {
				Q(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
				var t = this._map.getSize().y - (this._container.offsetTop + 50);
				return t < this._form.clientHeight ? (Q(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : tt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
			},
			collapse: function() {
				return tt(this._container, "leaflet-control-layers-expanded"), this
			},
			_initLayout: function() {
				var t = "leaflet-control-layers",
					i = this._container = G("div", t),
					e = this.options.collapsed;
				i.setAttribute("aria-haspopup", !0), wt(i), xt(i);
				var n = this._form = G("form", t + "-list");
				e && (this._map.on("click", this.collapse, this), zi || mt(i, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this));
				var o = this._layersLink = G("a", t + "-toggle", i);
				o.href = "#", o.title = "Layers", qi ? (mt(o, "click", Lt), mt(o, "click", this.expand, this)) : mt(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = G("div", t + "-base", n), this._separator = G("div", t + "-separator", n), this._overlaysList = G("div", t + "-overlays", n), i.appendChild(n)
			},
			_getLayer: function(t) {
				for (var i = 0; i < this._layers.length; i++)
					if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
			},
			_addLayer: function(t, i, n) {
				this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
					layer: t,
					name: i,
					overlay: n
				}), this.options.sortLayers && this._layers.sort(e(function(t, i) {
					return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
				}, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
			},
			_update: function() {
				if (!this._container) return this;
				Y(this._baseLayersList), Y(this._overlaysList), this._layerControlInputs = [];
				var t, i, e, n, o = 0;
				for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
				return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
			},
			_onLayerChange: function(t) {
				this._handlingClick || this._update();
				var i = this._getLayer(n(t.target)),
					e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
				e && this._map.fire(e, i)
			},
			_createRadioElement: function(t, i) {
				var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
					n = document.createElement("div");
				return n.innerHTML = e, n.firstChild
			},
			_addItem: function(t) {
				var i, e = document.createElement("label"),
					o = this._map.hasLayer(t.layer);
				t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), mt(i, "click", this._onInputClick, this);
				var s = document.createElement("span");
				s.innerHTML = " " + t.name;
				var r = document.createElement("div");
				return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
			},
			_onInputClick: function() {
				var t, i, e = this._layerControlInputs,
					n = [],
					o = [];
				this._handlingClick = !0;
				for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
				for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
				for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
				this._handlingClick = !1, this._refocusOnMap()
			},
			_checkDisabledLayers: function() {
				for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
			},
			_expandIfNotCollapsed: function() {
				return this._map && !this.options.collapsed && this.expand(), this
			},
			_expand: function() {
				return this.expand()
			},
			_collapse: function() {
				return this.collapse()
			}
		}),
		Ce = Te.extend({
			options: {
				position: "topleft",
				zoomInText: "+",
				zoomInTitle: "Zoom in",
				zoomOutText: "&#x2212;",
				zoomOutTitle: "Zoom out"
			},
			onAdd: function(t) {
				var i = "leaflet-control-zoom",
					e = G("div", i + " leaflet-bar"),
					n = this.options;
				return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
			},
			onRemove: function(t) {
				t.off("zoomend zoomlevelschange", this._updateDisabled, this)
			},
			disable: function() {
				return this._disabled = !0, this._updateDisabled(), this
			},
			enable: function() {
				return this._disabled = !1, this._updateDisabled(), this
			},
			_zoomIn: function(t) {
				!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_zoomOut: function(t) {
				!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_createButton: function(t, i, e, n, o) {
				var s = G("a", e, n);
				return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), wt(s), mt(s, "click", Lt), mt(s, "click", o, this), mt(s, "click", this._refocusOnMap, this), s
			},
			_updateDisabled: function() {
				var t = this._map,
					i = "leaflet-disabled";
				tt(this._zoomInButton, i), tt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && Q(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && Q(this._zoomInButton, i)
			}
		});
	be.mergeOptions({
		zoomControl: !0
	}), be.addInitHook(function() {
		this.options.zoomControl && (this.zoomControl = new Ce, this.addControl(this.zoomControl))
	});
	var Se = Te.extend({
			options: {
				position: "bottomleft",
				maxWidth: 100,
				metric: !0,
				imperial: !0
			},
			onAdd: function(t) {
				var i = G("div", "leaflet-control-scale"),
					e = this.options;
				return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
			},
			onRemove: function(t) {
				t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
			},
			_addScales: function(t, i, e) {
				t.metric && (this._mScale = G("div", i, e)), t.imperial && (this._iScale = G("div", i, e))
			},
			_update: function() {
				var t = this._map,
					i = t.getSize().y / 2,
					e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
				this._updateScales(e)
			},
			_updateScales: function(t) {
				this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
			},
			_updateMetric: function(t) {
				var i = this._getRoundNum(t),
					e = i < 1e3 ? i + " m" : i / 1e3 + " km";
				this._updateScale(this._mScale, e, i / t)
			},
			_updateImperial: function(t) {
				var i, e, n, o = 3.2808399 * t;
				o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
			},
			_updateScale: function(t, i, e) {
				t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
			},
			_getRoundNum: function(t) {
				var i = Math.pow(10, (Math.floor(t) + "").length - 1),
					e = t / i;
				return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e
			}
		}),
		Ze = Te.extend({
			options: {
				position: "bottomright",
				prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
			},
			initialize: function(t) {
				l(this, t), this._attributions = {}
			},
			onAdd: function(t) {
				t.attributionControl = this, this._container = G("div", "leaflet-control-attribution"), wt(this._container);
				for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
				return this._update(), this._container
			},
			setPrefix: function(t) {
				return this.options.prefix = t, this._update(), this
			},
			addAttribution: function(t) {
				return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
			},
			removeAttribution: function(t) {
				return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
			},
			_update: function() {
				if (this._map) {
					var t = [];
					for (var i in this._attributions) this._attributions[i] && t.push(i);
					var e = [];
					this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
				}
			}
		});
	be.mergeOptions({
		attributionControl: !0
	}), be.addInitHook(function() {
		this.options.attributionControl && (new Ze).addTo(this)
	});
	Te.Layers = Me, Te.Zoom = Ce, Te.Scale = Se, Te.Attribution = Ze, ze.layers = function(t, i, e) {
		return new Me(t, i, e)
	}, ze.zoom = function(t) {
		return new Ce(t)
	}, ze.scale = function(t) {
		return new Se(t)
	}, ze.attribution = function(t) {
		return new Ze(t)
	};
	var Ee = v.extend({
		initialize: function(t) {
			this._map = t
		},
		enable: function() {
			return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
		},
		disable: function() {
			return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
		},
		enabled: function() {
			return !!this._enabled
		}
	});
	Ee.addTo = function(t, i) {
		return t.addHandler(i, this), this
	};
	var ke, Ae = {
			Events: li
		},
		Be = qi ? "touchstart mousedown" : "mousedown",
		Ie = {
			mousedown: "mouseup",
			touchstart: "touchend",
			pointerdown: "touchend",
			MSPointerDown: "touchend"
		},
		Oe = {
			mousedown: "mousemove",
			touchstart: "touchmove",
			pointerdown: "touchmove",
			MSPointerDown: "touchmove"
		},
		Re = ci.extend({
			options: {
				clickTolerance: 3
			},
			initialize: function(t, i, e, n) {
				l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
			},
			enable: function() {
				this._enabled || (mt(this._dragStartTarget, Be, this._onDown, this), this._enabled = !0)
			},
			disable: function() {
				this._enabled && (Re._dragging === this && this.finishDrag(), ft(this._dragStartTarget, Be, this._onDown, this), this._enabled = !1, this._moved = !1)
			},
			_onDown: function(t) {
				if (!t._simulated && this._enabled && (this._moved = !1, !$(this._element, "leaflet-zoom-anim") && !(Re._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Re._dragging = this, this._preventOutline && ct(this._element), ut(), fi(), this._moving)))) {
					this.fire("down");
					var i = t.touches ? t.touches[0] : t,
						e = dt(this._element);
					this._startPoint = new x(i.clientX, i.clientY), this._parentScale = pt(e), mt(document, Oe[t.type], this._onMove, this), mt(document, Ie[t.type], this._onUp, this)
				}
			},
			_onMove: function(t) {
				if (!t._simulated && this._enabled)
					if (t.touches && t.touches.length > 1) this._moved = !0;
					else {
						var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
							e = new x(i.clientX, i.clientY)._subtract(this._startPoint);
						(e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Pt(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ht(this._element).subtract(e), Q(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Q(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
					}
			},
			_updatePosition: function() {
				var t = {
					originalEvent: this._lastEvent
				};
				this.fire("predrag", t), at(this._element, this._newPos), this.fire("drag", t)
			},
			_onUp: function(t) {
				!t._simulated && this._enabled && this.finishDrag()
			},
			finishDrag: function() {
				tt(document.body, "leaflet-dragging"), this._lastTarget && (tt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
				for (var t in Oe) ft(document, Oe[t], this._onMove, this), ft(document, Ie[t], this._onUp, this);
				lt(), gi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
					distance: this._newPos.distanceTo(this._startPos)
				})), this._moving = !1, Re._dragging = !1
			}
		}),
		Ne = (Object.freeze || Object)({
			simplify: Zt,
			pointToSegmentDistance: Et,
			closestPointOnSegment: function(t, i, e) {
				return Dt(t, i, e)
			},
			clipSegment: It,
			_getEdgeIntersection: Ot,
			_getBitCode: Rt,
			_sqClosestPointOnSegment: Dt,
			isFlat: jt,
			_flat: Wt
		}),
		De = (Object.freeze || Object)({
			clipPolygon: Ht
		}),
		je = {
			project: function(t) {
				return new x(t.lng, t.lat)
			},
			unproject: function(t) {
				return new M(t.y, t.x)
			},
			bounds: new P([-180, -90], [180, 90])
		},
		We = {
			R: 6378137,
			R_MINOR: 6356752.314245179,
			bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
			project: function(t) {
				var i = Math.PI / 180,
					e = this.R,
					n = t.lat * i,
					o = this.R_MINOR / e,
					s = Math.sqrt(1 - o * o),
					r = s * Math.sin(n),
					a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
				return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n)
			},
			unproject: function(t) {
				for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
				return new M(a * e, t.x * e / n)
			}
		},
		He = (Object.freeze || Object)({
			LonLat: je,
			Mercator: We,
			SphericalMercator: mi
		}),
		Fe = i({}, pi, {
			code: "EPSG:3395",
			projection: We,
			transformation: function() {
				var t = .5 / (Math.PI * We.R);
				return Z(t, .5, -t, .5)
			}()
		}),
		Ue = i({}, pi, {
			code: "EPSG:4326",
			projection: je,
			transformation: Z(1 / 180, 1, -1 / 180, .5)
		}),
		Ve = i({}, di, {
			projection: je,
			transformation: Z(1, 0, -1, 0),
			scale: function(t) {
				return Math.pow(2, t)
			},
			zoom: function(t) {
				return Math.log(t) / Math.LN2
			},
			distance: function(t, i) {
				var e = i.lng - t.lng,
					n = i.lat - t.lat;
				return Math.sqrt(e * e + n * n)
			},
			infinite: !0
		});
	di.Earth = pi, di.EPSG3395 = Fe, di.EPSG3857 = yi, di.EPSG900913 = xi, di.EPSG4326 = Ue, di.Simple = Ve;
	var qe = ci.extend({
		options: {
			pane: "overlayPane",
			attribution: null,
			bubblingMouseEvents: !0
		},
		addTo: function(t) {
			return t.addLayer(this), this
		},
		remove: function() {
			return this.removeFrom(this._map || this._mapToAdd)
		},
		removeFrom: function(t) {
			return t && t.removeLayer(this), this
		},
		getPane: function(t) {
			return this._map.getPane(t ? this.options[t] || t : this.options.pane)
		},
		addInteractiveTarget: function(t) {
			return this._map._targets[n(t)] = this, this
		},
		removeInteractiveTarget: function(t) {
			return delete this._map._targets[n(t)], this
		},
		getAttribution: function() {
			return this.options.attribution
		},
		_layerAdd: function(t) {
			var i = t.target;
			if (i.hasLayer(this)) {
				if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
					var e = this.getEvents();
					i.on(e, this), this.once("remove", function() {
						i.off(e, this)
					}, this)
				}
				this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
					layer: this
				})
			}
		}
	});
	be.include({
		addLayer: function(t) {
			if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
			var i = n(t);
			return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
		},
		removeLayer: function(t) {
			var i = n(t);
			return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
				layer: t
			}), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
		},
		hasLayer: function(t) {
			return !!t && n(t) in this._layers
		},
		eachLayer: function(t, i) {
			for (var e in this._layers) t.call(i, this._layers[e]);
			return this
		},
		_addLayers: function(t) {
			for (var i = 0, e = (t = t ? oi(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
		},
		_addZoomLimit: function(t) {
			!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
		},
		_removeZoomLimit: function(t) {
			var i = n(t);
			this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
		},
		_updateZoomLevels: function() {
			var t = 1 / 0,
				i = -1 / 0,
				e = this._getZoomSpan();
			for (var n in this._zoomBoundLayers) {
				var o = this._zoomBoundLayers[n].options;
				t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
			}
			this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
		}
	});
	var Ge = qe.extend({
			initialize: function(t, i) {
				l(this, i), this._layers = {};
				var e, n;
				if (t)
					for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
			},
			addLayer: function(t) {
				var i = this.getLayerId(t);
				return this._layers[i] = t, this._map && this._map.addLayer(t), this
			},
			removeLayer: function(t) {
				var i = t in this._layers ? t : this.getLayerId(t);
				return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
			},
			hasLayer: function(t) {
				return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
			},
			clearLayers: function() {
				return this.eachLayer(this.removeLayer, this)
			},
			invoke: function(t) {
				var i, e, n = Array.prototype.slice.call(arguments, 1);
				for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n);
				return this
			},
			onAdd: function(t) {
				this.eachLayer(t.addLayer, t)
			},
			onRemove: function(t) {
				this.eachLayer(t.removeLayer, t)
			},
			eachLayer: function(t, i) {
				for (var e in this._layers) t.call(i, this._layers[e]);
				return this
			},
			getLayer: function(t) {
				return this._layers[t]
			},
			getLayers: function() {
				var t = [];
				return this.eachLayer(t.push, t), t
			},
			setZIndex: function(t) {
				return this.invoke("setZIndex", t)
			},
			getLayerId: function(t) {
				return n(t)
			}
		}),
		Ke = Ge.extend({
			addLayer: function(t) {
				return this.hasLayer(t) ? this : (t.addEventParent(this), Ge.prototype.addLayer.call(this, t), this.fire("layeradd", {
					layer: t
				}))
			},
			removeLayer: function(t) {
				return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ge.prototype.removeLayer.call(this, t), this.fire("layerremove", {
					layer: t
				})) : this
			},
			setStyle: function(t) {
				return this.invoke("setStyle", t)
			},
			bringToFront: function() {
				return this.invoke("bringToFront")
			},
			bringToBack: function() {
				return this.invoke("bringToBack")
			},
			getBounds: function() {
				var t = new T;
				for (var i in this._layers) {
					var e = this._layers[i];
					t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
				}
				return t
			}
		}),
		Ye = v.extend({
			options: {
				popupAnchor: [0, 0],
				tooltipAnchor: [0, 0]
			},
			initialize: function(t) {
				l(this, t)
			},
			createIcon: function(t) {
				return this._createIcon("icon", t)
			},
			createShadow: function(t) {
				return this._createIcon("shadow", t)
			},
			_createIcon: function(t, i) {
				var e = this._getIconUrl(t);
				if (!e) {
					if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
					return null
				}
				var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
				return this._setIconStyles(n, t), n
			},
			_setIconStyles: function(t, i) {
				var e = this.options,
					n = e[i + "Size"];
				"number" == typeof n && (n = [n, n]);
				var o = w(n),
					s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
				t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
			},
			_createImg: function(t, i) {
				return i = i || document.createElement("img"), i.src = t, i
			},
			_getIconUrl: function(t) {
				return Yi && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
			}
		}),
		Xe = Ye.extend({
			options: {
				iconUrl: "marker-icon.png",
				iconRetinaUrl: "marker-icon-2x.png",
				shadowUrl: "marker-shadow.png",
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				tooltipAnchor: [16, -28],
				shadowSize: [41, 41]
			},
			_getIconUrl: function(t) {
				return Xe.imagePath || (Xe.imagePath = this._detectIconPath()), (this.options.imagePath || Xe.imagePath) + Ye.prototype._getIconUrl.call(this, t)
			},
			_detectIconPath: function() {
				var t = G("div", "leaflet-default-icon-path", document.body),
					i = q(t, "background-image") || q(t, "backgroundImage");
				return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
			}
		}),
		Je = Ee.extend({
			initialize: function(t) {
				this._marker = t
			},
			addHooks: function() {
				var t = this._marker._icon;
				this._draggable || (this._draggable = new Re(t, t, !0)), this._draggable.on({
					dragstart: this._onDragStart,
					predrag: this._onPreDrag,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this).enable(), Q(t, "leaflet-marker-draggable")
			},
			removeHooks: function() {
				this._draggable.off({
					dragstart: this._onDragStart,
					predrag: this._onPreDrag,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this).disable(), this._marker._icon && tt(this._marker._icon, "leaflet-marker-draggable")
			},
			moved: function() {
				return this._draggable && this._draggable._moved
			},
			_adjustPan: function(t) {
				var i = this._marker,
					e = i._map,
					n = this._marker.options.autoPanSpeed,
					o = this._marker.options.autoPanPadding,
					s = ht(i._icon),
					r = e.getPixelBounds(),
					a = e.getPixelOrigin(),
					h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
				if (!h.contains(s)) {
					var u = w((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
					e.panBy(u, {
						animate: !1
					}), this._draggable._newPos._add(u), this._draggable._startPos._add(u), at(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t))
				}
			},
			_onDragStart: function() {
				this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
			},
			_onPreDrag: function(t) {
				this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)))
			},
			_onDrag: function(t) {
				var i = this._marker,
					e = i._shadow,
					n = ht(i._icon),
					o = i._map.layerPointToLatLng(n);
				e && at(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
			},
			_onDragEnd: function(t) {
				g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
			}
		}),
		$e = qe.extend({
			options: {
				icon: new Xe,
				interactive: !0,
				keyboard: !0,
				title: "",
				alt: "",
				zIndexOffset: 0,
				opacity: 1,
				riseOnHover: !1,
				riseOffset: 250,
				pane: "markerPane",
				bubblingMouseEvents: !1,
				draggable: !1,
				autoPan: !1,
				autoPanPadding: [50, 50],
				autoPanSpeed: 10
			},
			initialize: function(t, i) {
				l(this, i), this._latlng = C(t)
			},
			onAdd: function(t) {
				this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
			},
			onRemove: function(t) {
				this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
			},
			getEvents: function() {
				return {
					zoom: this.update,
					viewreset: this.update
				}
			},
			getLatLng: function() {
				return this._latlng
			},
			setLatLng: function(t) {
				var i = this._latlng;
				return this._latlng = C(t), this.update(), this.fire("move", {
					oldLatLng: i,
					latlng: this._latlng
				})
			},
			setZIndexOffset: function(t) {
				return this.options.zIndexOffset = t, this.update()
			},
			setIcon: function(t) {
				return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
			},
			getElement: function() {
				return this._icon
			},
			update: function() {
				if (this._icon && this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng).round();
					this._setPos(t)
				}
				return this
			},
			_initIcon: function() {
				var t = this.options,
					i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
					e = t.icon.createIcon(this._icon),
					n = !1;
				e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), Q(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				});
				var o = t.icon.createShadow(this._shadow),
					s = !1;
				o !== this._shadow && (this._removeShadow(), s = !0), o && (Q(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
			},
			_removeIcon: function() {
				this.options.riseOnHover && this.off({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				}), K(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
			},
			_removeShadow: function() {
				this._shadow && K(this._shadow), this._shadow = null
			},
			_setPos: function(t) {
				at(this._icon, t), this._shadow && at(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
			},
			_updateZIndex: function(t) {
				this._icon.style.zIndex = this._zIndex + t
			},
			_animateZoom: function(t) {
				if(this._map==null)
				return;
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
				this._setPos(i)
			},
			_initInteraction: function() {
				if (this.options.interactive && (Q(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Je)) {
					var t = this.options.draggable;
					this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Je(this), t && this.dragging.enable()
				}
			},
			setOpacity: function(t) {
				return this.options.opacity = t, this._map && this._updateOpacity(), this
			},
			_updateOpacity: function() {
				var t = this.options.opacity;
				nt(this._icon, t), this._shadow && nt(this._shadow, t)
			},
			_bringToFront: function() {
				this._updateZIndex(this.options.riseOffset)
			},
			_resetZIndex: function() {
				this._updateZIndex(0)
			},
			_getPopupAnchor: function() {
				return this.options.icon.options.popupAnchor
			},
			_getTooltipAnchor: function() {
				return this.options.icon.options.tooltipAnchor
			}
		}),
		Qe = qe.extend({
			options: {
				stroke: !0,
				color: "#3388ff",
				weight: 3,
				opacity: 1,
				lineCap: "round",
				lineJoin: "round",
				dashArray: null,
				dashOffset: null,
				fill: !1,
				fillColor: null,
				fillOpacity: .2,
				fillRule: "evenodd",
				interactive: !0,
				bubblingMouseEvents: !0
			},
			beforeAdd: function(t) {
				this._renderer = t.getRenderer(this)
			},
			onAdd: function() {
				this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
			},
			onRemove: function() {
				this._renderer._removePath(this)
			},
			redraw: function() {
				return this._map && this._renderer._updatePath(this), this
			},
			setStyle: function(t) {
				return l(this, t), this._renderer && this._renderer._updateStyle(this), this
			},
			bringToFront: function() {
				return this._renderer && this._renderer._bringToFront(this), this
			},
			bringToBack: function() {
				return this._renderer && this._renderer._bringToBack(this), this
			},
			getElement: function() {
				return this._path
			},
			_reset: function() {
				this._project(), this._update()
			},
			_clickTolerance: function() {
				return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
			}
		}),
		tn = Qe.extend({
			options: {
				fill: !0,
				radius: 10
			},
			initialize: function(t, i) {
				l(this, i), this._latlng = C(t), this._radius = this.options.radius
			},
			setLatLng: function(t) {
				return this._latlng = C(t), this.redraw(), this.fire("move", {
					latlng: this._latlng
				})
			},
			getLatLng: function() {
				return this._latlng
			},
			setRadius: function(t) {
				return this.options.radius = this._radius = t, this.redraw()
			},
			getRadius: function() {
				return this._radius
			},
			setStyle: function(t) {
				var i = t && t.radius || this._radius;
				return Qe.prototype.setStyle.call(this, t), this.setRadius(i), this
			},
			_project: function() {
				this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
			},
			_updateBounds: function() {
				var t = this._radius,
					i = this._radiusY || t,
					e = this._clickTolerance(),
					n = [t + e, i + e];
				this._pxBounds = new P(this._point.subtract(n), this._point.add(n))
			},
			_update: function() {
				this._map && this._updatePath()
			},
			_updatePath: function() {
				this._renderer._updateCircle(this)
			},
			_empty: function() {
				return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
			},
			_containsPoint: function(t) {
				return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
			}
		}),
		en = tn.extend({
			initialize: function(t, e, n) {
				if ("number" == typeof e && (e = i({}, n, {
						radius: e
					})), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
				this._mRadius = this.options.radius
			},
			setRadius: function(t) {
				return this._mRadius = t, this.redraw()
			},
			getRadius: function() {
				return this._mRadius
			},
			getBounds: function() {
				var t = [this._radius, this._radiusY || this._radius];
				return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
			},
			setStyle: Qe.prototype.setStyle,
			_project: function() {
				var t = this._latlng.lng,
					i = this._latlng.lat,
					e = this._map,
					n = e.options.crs;
				if (n.distance === pi.distance) {
					var o = Math.PI / 180,
						s = this._mRadius / pi.R / o,
						r = e.project([i + s, t]),
						a = e.project([i - s, t]),
						h = r.add(a).divideBy(2),
						u = e.unproject(h).lat,
						l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
					(isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
				} else {
					var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
					this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
				}
				this._updateBounds()
			}
		}),
		nn = Qe.extend({
			options: {
				smoothFactor: 1,
				noClip: !1
			},
			initialize: function(t, i) {
				l(this, i), this._setLatLngs(t)
			},
			getLatLngs: function() {
				return this._latlngs
			},
			setLatLngs: function(t) {
				return this._setLatLngs(t), this.redraw()
			},
			isEmpty: function() {
				return !this._latlngs.length
			},
			closestLayerPoint: function(t) {
				for (var i, e, n = 1 / 0, o = null, s = Dt, r = 0, a = this._parts.length; r < a; r++)
					for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
						var c = s(t, i = h[u - 1], e = h[u], !0);
						c < n && (n = c, o = s(t, i, e))
					}
				return o && (o.distance = Math.sqrt(n)), o
			},
			getCenter: function() {
				if (!this._map) throw new Error("Must add layer to map before using getCenter()");
				var t, i, e, n, o, s, r, a = this._rings[0],
					h = a.length;
				if (!h) return null;
				for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
				if (0 === i) return this._map.layerPointToLatLng(a[0]);
				for (t = 0, n = 0; t < h - 1; t++)
					if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
			},
			getBounds: function() {
				return this._bounds
			},
			addLatLng: function(t, i) {
				return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw()
			},
			_setLatLngs: function(t) {
				this._bounds = new T, this._latlngs = this._convertLatLngs(t)
			},
			_defaultShape: function() {
				return jt(this._latlngs) ? this._latlngs : this._latlngs[0]
			},
			_convertLatLngs: function(t) {
				for (var i = [], e = jt(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
				return i
			},
			_project: function() {
				var t = new P;
				this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
				var i = this._clickTolerance(),
					e = new x(i, i);
				this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
			},
			_projectLatlngs: function(t, i, e) {
				var n, o, s = t[0] instanceof M,
					r = t.length;
				if (s) {
					for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
					i.push(o)
				} else
					for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
			},
			_clipPoints: function() {
				var t = this._renderer._bounds;
				if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else {
						var i, e, n, o, s, r, a, h = this._parts;
						for (i = 0, n = 0, o = this._rings.length; i < o; i++)
							for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = It(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
					}
			},
			_simplifyPoints: function() {
				for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Zt(t[e], i)
			},
			_update: function() {
				this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
			},
			_updatePath: function() {
				this._renderer._updatePoly(this)
			},
			_containsPoint: function(t, i) {
				var e, n, o, s, r, a, h = this._clickTolerance();
				if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
				for (e = 0, s = this._parts.length; e < s; e++)
					for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
						if ((i || 0 !== n) && Et(t, a[o], a[n]) <= h) return !0;
				return !1
			}
		});
	nn._flat = Wt;
	var on = nn.extend({
			options: {
				fill: !0
			},
			isEmpty: function() {
				return !this._latlngs.length || !this._latlngs[0].length
			},
			getCenter: function() {
				if (!this._map) throw new Error("Must add layer to map before using getCenter()");
				var t, i, e, n, o, s, r, a, h, u = this._rings[0],
					l = u.length;
				if (!l) return null;
				for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
				return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
			},
			_convertLatLngs: function(t) {
				var i = nn.prototype._convertLatLngs.call(this, t),
					e = i.length;
				return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i
			},
			_setLatLngs: function(t) {
				nn.prototype._setLatLngs.call(this, t), jt(this._latlngs) && (this._latlngs = [this._latlngs])
			},
			_defaultShape: function() {
				return jt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
			},
			_clipPoints: function() {
				var t = this._renderer._bounds,
					i = this.options.weight,
					e = new x(i, i);
				if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
					if (this.options.noClip) this._parts = this._rings;
					else
						for (var n, o = 0, s = this._rings.length; o < s; o++)(n = Ht(this._rings[o], t, !0)).length && this._parts.push(n)
			},
			_updatePath: function() {
				this._renderer._updatePoly(this, !0)
			},
			_containsPoint: function(t) {
				var i, e, n, o, s, r, a, h, u = !1;
				if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
				for (o = 0, a = this._parts.length; o < a; o++)
					for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
				return u || nn.prototype._containsPoint.call(this, t, !0)
			}
		}),
		sn = Ke.extend({
			initialize: function(t, i) {
				l(this, i), this._layers = {}, t && this.addData(t)
			},
			addData: function(t) {
				var i, e, n, o = oi(t) ? t : t.features;
				if (o) {
					for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
					return this
				}
				var s = this.options;
				if (s.filter && !s.filter(t)) return this;
				var r = Ft(t, s);
				return r ? (r.feature = Yt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
			},
			resetStyle: function(t) {
				return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
			},
			setStyle: function(t) {
				return this.eachLayer(function(i) {
					this._setLayerStyle(i, t)
				}, this)
			},
			_setLayerStyle: function(t, i) {
				"function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
			}
		}),
		rn = {
			toGeoJSON: function(t) {
				return Kt(this, {
					type: "Point",
					coordinates: qt(this.getLatLng(), t)
				})
			}
		};
	$e.include(rn), en.include(rn), tn.include(rn), nn.include({
		toGeoJSON: function(t) {
			var i = !jt(this._latlngs),
				e = Gt(this._latlngs, i ? 1 : 0, !1, t);
			return Kt(this, {
				type: (i ? "Multi" : "") + "LineString",
				coordinates: e
			})
		}
	}), on.include({
		toGeoJSON: function(t) {
			var i = !jt(this._latlngs),
				e = i && !jt(this._latlngs[0]),
				n = Gt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
			return i || (n = [n]), Kt(this, {
				type: (e ? "Multi" : "") + "Polygon",
				coordinates: n
			})
		}
	}), Ge.include({
		toMultiPoint: function(t) {
			var i = [];
			return this.eachLayer(function(e) {
				i.push(e.toGeoJSON(t).geometry.coordinates)
			}), Kt(this, {
				type: "MultiPoint",
				coordinates: i
			})
		},
		toGeoJSON: function(t) {
			var i = this.feature && this.feature.geometry && this.feature.geometry.type;
			if ("MultiPoint" === i) return this.toMultiPoint(t);
			var e = "GeometryCollection" === i,
				n = [];
			return this.eachLayer(function(i) {
				if (i.toGeoJSON) {
					var o = i.toGeoJSON(t);
					if (e) n.push(o.geometry);
					else {
						var s = Yt(o);
						"FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
					}
				}
			}), e ? Kt(this, {
				geometries: n,
				type: "GeometryCollection"
			}) : {
				type: "FeatureCollection",
				features: n
			}
		}
	});
	var an = Xt,
		hn = qe.extend({
			options: {
				opacity: 1,
				alt: "",
				interactive: !1,
				crossOrigin: !1,
				errorOverlayUrl: "",
				zIndex: 1,
				className: ""
			},
			initialize: function(t, i, e) {
				this._url = t, this._bounds = z(i), l(this, e)
			},
			onAdd: function() {
				this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Q(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
			},
			onRemove: function() {
				K(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
			},
			setOpacity: function(t) {
				return this.options.opacity = t, this._image && this._updateOpacity(), this
			},
			setStyle: function(t) {
				return t.opacity && this.setOpacity(t.opacity), this
			},
			bringToFront: function() {
				return this._map && X(this._image), this
			},
			bringToBack: function() {
				return this._map && J(this._image), this
			},
			setUrl: function(t) {
				return this._url = t, this._image && (this._image.src = t), this
			},
			setBounds: function(t) {
				return this._bounds = z(t), this._map && this._reset(), this
			},
			getEvents: function() {
				var t = {
					zoom: this._reset,
					viewreset: this._reset
				};
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			setZIndex: function(t) {
				return this.options.zIndex = t, this._updateZIndex(), this
			},
			getBounds: function() {
				return this._bounds
			},
			getElement: function() {
				return this._image
			},
			_initImage: function() {
				var t = "IMG" === this._url.tagName,
					i = this._image = t ? this._url : G("img");
				Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), this.options.className && Q(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
			},
			_animateZoom: function(t) {
				var i = this._map.getZoomScale(t.zoom),
					e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
				rt(this._image, e, i)
			},
			_reset: function() {
				var t = this._image,
					i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
					e = i.getSize();
				at(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
			},
			_updateOpacity: function() {
				nt(this._image, this.options.opacity)
			},
			_updateZIndex: function() {
				this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
			},
			_overlayOnError: function() {
				this.fire("error");
				var t = this.options.errorOverlayUrl;
				t && this._url !== t && (this._url = t, this._image.src = t)
			}
		}),
		un = hn.extend({
			options: {
				autoplay: !0,
				loop: !0
			},
			_initImage: function() {
				var t = "VIDEO" === this._url.tagName,
					i = this._image = t ? this._url : G("video");
				if (Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
					for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
					this._url = n.length > 0 ? o : [i.src]
				} else {
					oi(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
					for (var a = 0; a < this._url.length; a++) {
						var h = G("source");
						h.src = this._url[a], i.appendChild(h)
					}
				}
			}
		}),
		ln = qe.extend({
			options: {
				offset: [0, 7],
				className: "",
				pane: "popupPane"
			},
			initialize: function(t, i) {
				l(this, t), this._source = i
			},
			onAdd: function(t) {
				this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && nt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && nt(this._container, 1), this.bringToFront()
			},
			onRemove: function(t) {
				t._fadeAnimated ? (nt(this._container, 0), this._removeTimeout = setTimeout(e(K, void 0, this._container), 200)) : K(this._container)
			},
			getLatLng: function() {
				return this._latlng
			},
			setLatLng: function(t) {
				return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this
			},
			getContent: function() {
				return this._content
			},
			setContent: function(t) {
				return this._content = t, this.update(), this
			},
			getElement: function() {
				return this._container
			},
			update: function() {
				this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
			},
			getEvents: function() {
				var t = {
					zoom: this._updatePosition,
					viewreset: this._updatePosition
				};
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			isOpen: function() {
				return !!this._map && this._map.hasLayer(this)
			},
			bringToFront: function() {
				return this._map && X(this._container), this
			},
			bringToBack: function() {
				return this._map && J(this._container), this
			},
			_updateContent: function() {
				if (this._content) {
					var t = this._contentNode,
						i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
					if ("string" == typeof i) t.innerHTML = i;
					else {
						for (; t.hasChildNodes();) t.removeChild(t.firstChild);
						t.appendChild(i)
					}
					this.fire("contentupdate")
				}
			},
			_updatePosition: function() {
				if (this._map) {
					var t = this._map.latLngToLayerPoint(this._latlng),
						i = w(this.options.offset),
						e = this._getAnchor();
					this._zoomAnimated ? at(this._container, t.add(e)) : i = i.add(t).add(e);
					var n = this._containerBottom = -i.y,
						o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
					this._container.style.bottom = n + "px", this._container.style.left = o + "px"
				}
			},
			_getAnchor: function() {
				return [0, 0]
			}
		}),
		cn = ln.extend({
			options: {
				maxWidth: 300,
				minWidth: 50,
				maxHeight: null,
				autoPan: !0,
				autoPanPaddingTopLeft: null,
				autoPanPaddingBottomRight: null,
				autoPanPadding: [5, 5],
				keepInView: !1,
				closeButton: !0,
				autoClose: !0,
				closeOnEscapeKey: !0,
				className: ""
			},
			openOn: function(t) {
				return t.openPopup(this), this
			},
			onAdd: function(t) {
				ln.prototype.onAdd.call(this, t), t.fire("popupopen", {
					popup: this
				}), this._source && (this._source.fire("popupopen", {
					popup: this
				}, !0), this._source instanceof Qe || this._source.on("preclick", yt))
			},
			onRemove: function(t) {
				ln.prototype.onRemove.call(this, t), t.fire("popupclose", {
					popup: this
				}), this._source && (this._source.fire("popupclose", {
					popup: this
				}, !0), this._source instanceof Qe || this._source.off("preclick", yt))
			},
			getEvents: function() {
				var t = ln.prototype.getEvents.call(this);
				return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
			},
			_close: function() {
				this._map && this._map.closePopup(this)
			},
			_initLayout: function() {
				var t = "leaflet-popup",
					i = this._container = G("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
					e = this._wrapper = G("div", t + "-content-wrapper", i);
				if (this._contentNode = G("div", t + "-content", e), wt(e), xt(this._contentNode), mt(e, "contextmenu", yt), this._tipContainer = G("div", t + "-tip-container", i), this._tip = G("div", t + "-tip", this._tipContainer), this.options.closeButton) {
					var n = this._closeButton = G("a", t + "-close-button", i);
					n.href = "#close", n.innerHTML = "&#215;", mt(n, "click", this._onCloseButtonClick, this)
				}
			},
			_updateLayout: function() {
				var t = this._contentNode,
					i = t.style;
				i.width = "", i.whiteSpace = "nowrap";
				var e = t.offsetWidth;
				e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
				var n = t.offsetHeight,
					o = this.options.maxHeight;
				o && n > o ? (i.height = o + "px", Q(t, "leaflet-popup-scrolled")) : tt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
			},
			_animateZoom: function(t) {
				var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
					e = this._getAnchor();
				at(this._container, i.add(e))
			},
			_adjustPan: function() {
				if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
					var t = this._map,
						i = parseInt(q(this._container, "marginBottom"), 10) || 0,
						e = this._container.offsetHeight + i,
						n = this._containerWidth,
						o = new x(this._containerLeft, -e - this._containerBottom);
					o._add(ht(this._container));
					var s = t.layerPointToContainerPoint(o),
						r = w(this.options.autoPanPadding),
						a = w(this.options.autoPanPaddingTopLeft || r),
						h = w(this.options.autoPanPaddingBottomRight || r),
						u = t.getSize(),
						l = 0,
						c = 0;
					s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
				}
			},
			_onCloseButtonClick: function(t) {
				this._close(), Lt(t)
			},
			_getAnchor: function() {
				return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
			}
		});
	be.mergeOptions({
		closePopupOnClick: !0
	}), be.include({
		openPopup: function(t, i, e) {
			return t instanceof cn || (t = new cn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
		},
		closePopup: function(t) {
			return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
		}
	}), qe.include({
		bindPopup: function(t, i) {
			return t instanceof cn ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new cn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			}), this._popupHandlersAdded = !0), this
		},
		unbindPopup: function() {
			return this._popup && (this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			}), this._popupHandlersAdded = !1, this._popup = null), this
		},
		openPopup: function(t, i) {
			if (t instanceof qe || (i = t, t = this), t instanceof Ke)
				for (var e in this._layers) {
					t = this._layers[e];
					break
				}
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
		},
		closePopup: function() {
			return this._popup && this._popup._close(), this
		},
		togglePopup: function(t) {
			return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
		},
		isPopupOpen: function() {
			return !!this._popup && this._popup.isOpen()
		},
		setPopupContent: function(t) {
			return this._popup && this._popup.setContent(t), this
		},
		getPopup: function() {
			return this._popup
		},
		_openPopup: function(t) {
			var i = t.layer || t.target;
			this._popup && this._map && (Lt(t), i instanceof Qe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
		},
		_movePopup: function(t) {
			this._popup.setLatLng(t.latlng)
		},
		_onKeyPress: function(t) {
			13 === t.originalEvent.keyCode && this._openPopup(t)
		}
	});
	var _n = ln.extend({
		options: {
			pane: "tooltipPane",
			offset: [0, 0],
			direction: "auto",
			permanent: !1,
			sticky: !1,
			interactive: !1,
			opacity: .9
		},
		onAdd: function(t) {
			ln.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
				tooltip: this
			}), this._source && this._source.fire("tooltipopen", {
				tooltip: this
			}, !0)
		},
		onRemove: function(t) {
			ln.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
				tooltip: this
			}), this._source && this._source.fire("tooltipclose", {
				tooltip: this
			}, !0)
		},
		getEvents: function() {
			var t = ln.prototype.getEvents.call(this);
			return qi && !this.options.permanent && (t.preclick = this._close), t
		},
		_close: function() {
			this._map && this._map.closeTooltip(this)
		},
		_initLayout: function() {
			var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
			this._contentNode = this._container = G("div", t)
		},
		_updateLayout: function() {},
		_adjustPan: function() {},
		_setPosition: function(t) {
			var i = this._map,
				e = this._container,
				n = i.latLngToContainerPoint(i.getCenter()),
				o = i.layerPointToContainerPoint(t),
				s = this.options.direction,
				r = e.offsetWidth,
				a = e.offsetHeight,
				h = w(this.options.offset),
				u = this._getAnchor();
			"top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), tt(e, "leaflet-tooltip-right"), tt(e, "leaflet-tooltip-left"), tt(e, "leaflet-tooltip-top"), tt(e, "leaflet-tooltip-bottom"), Q(e, "leaflet-tooltip-" + s), at(e, t)
		},
		_updatePosition: function() {
			var t = this._map.latLngToLayerPoint(this._latlng);
			this._setPosition(t)
		},
		setOpacity: function(t) {
			this.options.opacity = t, this._container && nt(this._container, t)
		},
		_animateZoom: function(t) {
			var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
			this._setPosition(i)
		},
		_getAnchor: function() {
			return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
		}
	});
	be.include({
		openTooltip: function(t, i, e) {
			return t instanceof _n || (t = new _n(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
		},
		closeTooltip: function(t) {
			return t && this.removeLayer(t), this
		}
	}), qe.include({
		bindTooltip: function(t, i) {
			return t instanceof _n ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new _n(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
		},
		unbindTooltip: function() {
			return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
		},
		_initTooltipInteractions: function(t) {
			if (t || !this._tooltipHandlersAdded) {
				var i = t ? "off" : "on",
					e = {
						remove: this.closeTooltip,
						move: this._moveTooltip
					};
				this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), qi && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
			}
		},
		openTooltip: function(t, i) {
			if (t instanceof qe || (i = t, t = this), t instanceof Ke)
				for (var e in this._layers) {
					t = this._layers[e];
					break
				}
			return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (Q(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
		},
		closeTooltip: function() {
			return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (tt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
		},
		toggleTooltip: function(t) {
			return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
		},
		isTooltipOpen: function() {
			return this._tooltip.isOpen()
		},
		setTooltipContent: function(t) {
			return this._tooltip && this._tooltip.setContent(t), this
		},
		getTooltip: function() {
			return this._tooltip
		},
		_openTooltip: function(t) {
			var i = t.layer || t.target;
			this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
		},
		_moveTooltip: function(t) {
			var i, e, n = t.latlng;
			this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
		}
	});
	var dn = Ye.extend({
		options: {
			iconSize: [12, 12],
			html: !1,
			bgPos: null,
			className: "leaflet-div-icon"
		},
		createIcon: function(t) {
			var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
				e = this.options;
			if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
				var n = w(e.bgPos);
				i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
			}
			return this._setIconStyles(i, "icon"), i
		},
		createShadow: function() {
			return null
		}
	});
	Ye.Default = Xe;
	var pn = qe.extend({
			options: {
				tileSize: 256,
				opacity: 1,
				updateWhenIdle: Wi,
				updateWhenZooming: !0,
				updateInterval: 200,
				zIndex: 1,
				bounds: null,
				minZoom: 0,
				maxZoom: void 0,
				maxNativeZoom: void 0,
				minNativeZoom: void 0,
				noWrap: !1,
				pane: "tilePane",
				className: "",
				keepBuffer: 2
			},
			initialize: function(t) {
				l(this, t)
			},
			onAdd: function() {
				this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
			},
			beforeAdd: function(t) {
				t._addZoomLimit(this)
			},
			onRemove: function(t) {
				this._removeAllTiles(), K(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
			},
			bringToFront: function() {
				return this._map && (X(this._container), this._setAutoZIndex(Math.max)), this
			},
			bringToBack: function() {
				return this._map && (J(this._container), this._setAutoZIndex(Math.min)), this
			},
			getContainer: function() {
				return this._container
			},
			setOpacity: function(t) {
				return this.options.opacity = t, this._updateOpacity(), this
			},
			setZIndex: function(t) {
				return this.options.zIndex = t, this._updateZIndex(), this
			},
			isLoading: function() {
				return this._loading
			},
			redraw: function() {
				return this._map && (this._removeAllTiles(), this._update()), this
			},
			getEvents: function() {
				var t = {
					viewprereset: this._invalidateAll,
					viewreset: this._resetView,
					zoom: this._resetView,
					moveend: this._onMoveEnd
				};
				return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
			},
			createTile: function() {
				return document.createElement("div")
			},
			getTileSize: function() {
				var t = this.options.tileSize;
				return t instanceof x ? t : new x(t, t)
			},
			_updateZIndex: function() {
				this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
			},
			_setAutoZIndex: function(t) {
				for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
				isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
			},
			_updateOpacity: function() {
				if (this._map && !Li) {
					nt(this._container, this.options.opacity);
					var t = +new Date,
						i = !1,
						e = !1;
					for (var n in this._tiles) {
						var o = this._tiles[n];
						if (o.current && o.loaded) {
							var s = Math.min(1, (t - o.loaded) / 200);
							nt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
						}
					}
					e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
				}
			},
			_onOpaqueTile: r,
			_initContainer: function() {
				this._container || (this._container = G("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
			},
			_updateLevels: function() {
				var t = this._tileZoom,
					i = this.options.maxZoom;
				if (void 0 !== t) {
					for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (K(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
					var n = this._levels[t],
						o = this._map;
					return n || ((n = this._levels[t] = {}).el = G("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
				}
			},
			_onUpdateLevel: r,
			_onRemoveLevel: r,
			_onCreateLevel: r,
			_pruneTiles: function() {
				if (this._map) {
					var t, i, e = this._map.getZoom();
					if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
					else {
						for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
						for (t in this._tiles)
							if ((i = this._tiles[t]).current && !i.active) {
								var n = i.coords;
								this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
							}
						for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
					}
				}
			},
			_removeTilesAtZoom: function(t) {
				for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
			},
			_removeAllTiles: function() {
				for (var t in this._tiles) this._removeTile(t)
			},
			_invalidateAll: function() {
				for (var t in this._levels) K(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
				this._removeAllTiles(), this._tileZoom = void 0
			},
			_retainParent: function(t, i, e, n) {
				var o = Math.floor(t / 2),
					s = Math.floor(i / 2),
					r = e - 1,
					a = new x(+o, +s);
				a.z = +r;
				var h = this._tileCoordsToKey(a),
					u = this._tiles[h];
				return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n))
			},
			_retainChildren: function(t, i, e, n) {
				for (var o = 2 * t; o < 2 * t + 2; o++)
					for (var s = 2 * i; s < 2 * i + 2; s++) {
						var r = new x(o, s);
						r.z = e + 1;
						var a = this._tileCoordsToKey(r),
							h = this._tiles[a];
						h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
					}
			},
			_resetView: function(t) {
				var i = t && (t.pinch || t.flyTo);
				this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
			},
			_animateZoom: function(t) {
				this._setView(t.center, t.zoom, !0, t.noUpdate)
			},
			_clampZoom: function(t) {
				var i = this.options;
				return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
			},
			_setView: function(t, i, e, n) {
				var o = this._clampZoom(Math.round(i));
				(void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
				var s = this.options.updateWhenZooming && o !== this._tileZoom;
				n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
			},
			_setZoomTransforms: function(t, i) {
				for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
			},
			_setZoomTransform: function(t, i, e) {
				var n = this._map.getZoomScale(e, t.zoom),
					o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
				ji ? rt(t.el, o, n) : at(t.el, o)
			},
			_resetGrid: function() {
				var t = this._map,
					i = t.options.crs,
					e = this._tileSize = this.getTileSize(),
					n = this._tileZoom,
					o = this._map.getPixelWorldBounds(this._tileZoom);
				o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
			},
			_onMoveEnd: function() {
				this._map && !this._map._animatingZoom && this._update()
			},
			_getTiledPixelBounds: function(t) {
				var i = this._map,
					e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
					n = i.getZoomScale(e, this._tileZoom),
					o = i.project(t, this._tileZoom).floor(),
					s = i.getSize().divideBy(2 * n);
				return new P(o.subtract(s), o.add(s))
			},
			_update: function(t) {
				var i = this._map;
				if (i) {
					var e = this._clampZoom(i.getZoom());
					if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
						var n = this._getTiledPixelBounds(t),
							o = this._pxBoundsToTileRange(n),
							s = o.getCenter(),
							r = [],
							a = this.options.keepBuffer,
							h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
						if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
						for (var u in this._tiles) {
							var l = this._tiles[u].coords;
							l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1)
						}
						if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
						else {
							for (var c = o.min.y; c <= o.max.y; c++)
								for (var _ = o.min.x; _ <= o.max.x; _++) {
									var d = new x(_, c);
									if (d.z = this._tileZoom, this._isValidTile(d)) {
										var p = this._tiles[this._tileCoordsToKey(d)];
										p ? p.current = !0 : r.push(d)
									}
								}
							if (r.sort(function(t, i) {
									return t.distanceTo(s) - i.distanceTo(s)
								}), 0 !== r.length) {
								this._loading || (this._loading = !0, this.fire("loading"));
								var m = document.createDocumentFragment();
								for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
								this._level.el.appendChild(m)
							}
						}
					}
				}
			},
			_isValidTile: function(t) {
				var i = this._map.options.crs;
				if (!i.infinite) {
					var e = this._globalTileRange;
					if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
				}
				if (!this.options.bounds) return !0;
				var n = this._tileCoordsToBounds(t);
				return z(this.options.bounds).overlaps(n)
			},
			_keyToBounds: function(t) {
				return this._tileCoordsToBounds(this._keyToTileCoords(t))
			},
			_tileCoordsToNwSe: function(t) {
				var i = this._map,
					e = this.getTileSize(),
					n = t.scaleBy(e),
					o = n.add(e);
				return [i.unproject(n, t.z), i.unproject(o, t.z)]
			},
			_tileCoordsToBounds: function(t) {
				var i = this._tileCoordsToNwSe(t),
					e = new T(i[0], i[1]);
				return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
			},
			_tileCoordsToKey: function(t) {
				return t.x + ":" + t.y + ":" + t.z
			},
			_keyToTileCoords: function(t) {
				var i = t.split(":"),
					e = new x(+i[0], +i[1]);
				return e.z = +i[2], e
			},
			_removeTile: function(t) {
				var i = this._tiles[t];
				i && (K(i.el), delete this._tiles[t], this.fire("tileunload", {
					tile: i.el,
					coords: this._keyToTileCoords(t)
				}))
			},
			_initTile: function(t) {
				Q(t, "leaflet-tile");
				var i = this.getTileSize();
				t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, Li && this.options.opacity < 1 && nt(t, this.options.opacity), zi && !Mi && (t.style.WebkitBackfaceVisibility = "hidden")
			},
			_addTile: function(t, i) {
				var n = this._getTilePos(t),
					o = this._tileCoordsToKey(t),
					s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
				this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), at(s, n), this._tiles[o] = {
					el: s,
					coords: t,
					current: !0
				}, i.appendChild(s), this.fire("tileloadstart", {
					tile: s,
					coords: t
				})
			},
			_tileReady: function(t, i, n) {
				i && this.fire("tileerror", {
					error: i,
					tile: n,
					coords: t
				});
				var o = this._tileCoordsToKey(t);
				(n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (nt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (Q(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
					tile: n.el,
					coords: t
				})), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Li || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
			},
			_getTilePos: function(t) {
				return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
			},
			_wrapCoords: function(t) {
				var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
				return i.z = t.z, i
			},
			_pxBoundsToTileRange: function(t) {
				var i = this.getTileSize();
				return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
			},
			_noTilesToLoad: function() {
				for (var t in this._tiles)
					if (!this._tiles[t].loaded) return !1;
				return !0
			}
		}),
		mn = pn.extend({
			options: {
				minZoom: 0,
				maxZoom: 18,
				subdomains: "abc",
				errorTileUrl: "",
				zoomOffset: 0,
				tms: !1,
				zoomReverse: !1,
				detectRetina: !1,
				crossOrigin: !1
			},
			initialize: function(t, i) {
				this._url = t, (i = l(this, i)).detectRetina && Yi && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), zi || this.on("tileunload", this._onTileRemove)
			},
			setUrl: function(t, i) {
				return this._url = t, i || this.redraw(), this
			},
			createTile: function(t, i) {
				var n = document.createElement("img");
				return mt(n, "load", e(this._tileOnLoad, this, i, n)), mt(n, "error", e(this._tileOnError, this, i, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
			},
			getTileUrl: function(t) {
				var e = {
					r: Yi ? "@2x" : "",
					s: this._getSubdomain(t),
					x: t.x,
					y: t.y,
					z: this._getZoomForUrl()
				};
				if (this._map && !this._map.options.crs.infinite) {
					var n = this._globalTileRange.max.y - t.y;
					this.options.tms && (e.y = n), e["-y"] = n
				}
				return _(this._url, i(e, this.options))
			},
			_tileOnLoad: function(t, i) {
				Li ? setTimeout(e(t, this, null, i), 0) : t(null, i)
			},
			_tileOnError: function(t, i, e) {
				var n = this.options.errorTileUrl;
				n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
			},
			_onTileRemove: function(t) {
				t.tile.onload = null
			},
			_getZoomForUrl: function() {
				var t = this._tileZoom,
					i = this.options.maxZoom,
					e = this.options.zoomReverse,
					n = this.options.zoomOffset;
				return e && (t = i - t), t + n
			},
			_getSubdomain: function(t) {
				var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
				return this.options.subdomains[i]
			},
			_abortLoading: function() {
				var t, i;
				for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = si, K(i), delete this._tiles[t]))
			},
			_removeTile: function(t) {
				var i = this._tiles[t];
				if (i) return Si || i.el.setAttribute("src", si), pn.prototype._removeTile.call(this, t)
			},
			_tileReady: function(t, i, e) {
				if (this._map && (!e || e.getAttribute("src") !== si)) return pn.prototype._tileReady.call(this, t, i, e)
			}
		}),
		fn = mn.extend({
			defaultWmsParams: {
				service: "WMS",
				request: "GetMap",
				layers: "",
				styles: "",
				format: "image/jpeg",
				transparent: !1,
				version: "1.1.1"
			},
			options: {
				crs: null,
				uppercase: !1
			},
			initialize: function(t, e) {
				this._url = t;
				var n = i({}, this.defaultWmsParams);
				for (var o in e) o in this.options || (n[o] = e[o]);
				var s = (e = l(this, e)).detectRetina && Yi ? 2 : 1,
					r = this.getTileSize();
				n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
			},
			onAdd: function(t) {
				this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
				var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
				this.wmsParams[i] = this._crs.code, mn.prototype.onAdd.call(this, t)
			},
			getTileUrl: function(t) {
				var i = this._tileCoordsToNwSe(t),
					e = this._crs,
					n = b(e.project(i[0]), e.project(i[1])),
					o = n.min,
					s = n.max,
					r = (this._wmsVersion >= 1.3 && this._crs === Ue ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
					a = mn.prototype.getTileUrl.call(this, t);
				return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
			},
			setParams: function(t, e) {
				return i(this.wmsParams, t), e || this.redraw(), this
			}
		});
	mn.WMS = fn, Jt.wms = function(t, i) {
		return new fn(t, i)
	};
	var gn = qe.extend({
			options: {
				padding: .1,
				tolerance: 0
			},
			initialize: function(t) {
				l(this, t), n(this), this._layers = this._layers || {}
			},
			onAdd: function() {
				this._container || (this._initContainer(), this._zoomAnimated && Q(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
			},
			onRemove: function() {
				this.off("update", this._updatePaths, this), this._destroyContainer()
			},
			getEvents: function() {
				var t = {
					viewreset: this._reset,
					zoom: this._onZoom,
					moveend: this._update,
					zoomend: this._onZoomEnd
				};
				return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
			},
			_onAnimZoom: function(t) {
				this._updateTransform(t.center, t.zoom)
			},
			_onZoom: function() {
				this._updateTransform(this._map.getCenter(), this._map.getZoom())
			},
			_updateTransform: function(t, i) {
				var e = this._map.getZoomScale(i, this._zoom),
					n = ht(this._container),
					o = this._map.getSize().multiplyBy(.5 + this.options.padding),
					s = this._map.project(this._center, i),
					r = this._map.project(t, i).subtract(s),
					a = o.multiplyBy(-e).add(n).add(o).subtract(r);
				ji ? rt(this._container, a, e) : at(this._container, a)
			},
			_reset: function() {
				this._update(), this._updateTransform(this._center, this._zoom);
				for (var t in this._layers) this._layers[t]._reset()
			},
			_onZoomEnd: function() {
				for (var t in this._layers) this._layers[t]._project()
			},
			_updatePaths: function() {
				for (var t in this._layers) this._layers[t]._update()
			},
			_update: function() {
				var t = this.options.padding,
					i = this._map.getSize(),
					e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
				this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
			}
		}),
		vn = gn.extend({
			getEvents: function() {
				var t = gn.prototype.getEvents.call(this);
				return t.viewprereset = this._onViewPreReset, t
			},
			_onViewPreReset: function() {
				this._postponeUpdatePaths = !0
			},
			onAdd: function() {
				gn.prototype.onAdd.call(this), this._draw()
			},
			_initContainer: function() {
				var t = this._container = document.createElement("canvas");
				mt(t, "mousemove", o(this._onMouseMove, 32, this), this), mt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), mt(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
			},
			_destroyContainer: function() {
				g(this._redrawRequest), delete this._ctx, K(this._container), ft(this._container), delete this._container
			},
			_updatePaths: function() {
				if (!this._postponeUpdatePaths) {
					this._redrawBounds = null;
					for (var t in this._layers) this._layers[t]._update();
					this._redraw()
				}
			},
			_update: function() {
				if (!this._map._animatingZoom || !this._bounds) {
					this._drawnLayers = {}, gn.prototype._update.call(this);
					var t = this._bounds,
						i = this._container,
						e = t.getSize(),
						n = Yi ? 2 : 1;
					at(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Yi && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
				}
			},
			_reset: function() {
				gn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
			},
			_initPath: function(t) {
				this._updateDashArray(t), this._layers[n(t)] = t;
				var i = t._order = {
					layer: t,
					prev: this._drawLast,
					next: null
				};
				this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
			},
			_addPath: function(t) {
				this._requestRedraw(t)
			},
			_removePath: function(t) {
				var i = t._order,
					e = i.next,
					o = i.prev;
				e ? e.prev = o : this._drawLast = o, o ? o.next = e : this._drawFirst = e, delete this._drawnLayers[t._leaflet_id], delete t._order, delete this._layers[n(t)], this._requestRedraw(t)
			},
			_updatePath: function(t) {
				this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
			},
			_updateStyle: function(t) {
				this._updateDashArray(t), this._requestRedraw(t)
			},
			_updateDashArray: function(t) {
				if ("string" == typeof t.options.dashArray) {
					var i, e = t.options.dashArray.split(/[, ]+/),
						n = [];
					for (i = 0; i < e.length; i++) n.push(Number(e[i]));
					t.options._dashArray = n
				} else t.options._dashArray = t.options.dashArray
			},
			_requestRedraw: function(t) {
				this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
			},
			_extendRedrawBounds: function(t) {
				if (t._pxBounds) {
					var i = (t.options.weight || 0) + 1;
					this._redrawBounds = this._redrawBounds || new P, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
				}
			},
			_redraw: function() {
				this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
			},
			_clear: function() {
				var t = this._redrawBounds;
				if (t) {
					var i = t.getSize();
					this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
				} else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
			},
			_draw: function() {
				var t, i = this._redrawBounds;
				if (this._ctx.save(), i) {
					var e = i.getSize();
					this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
				}
				this._drawing = !0;
				for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
				this._drawing = !1, this._ctx.restore()
			},
			_updatePoly: function(t, i) {
				if (this._drawing) {
					var e, n, o, s, r = t._parts,
						a = r.length,
						h = this._ctx;
					if (a) {
						for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
							for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
							i && h.closePath()
						}
						this._fillStroke(h, t)
					}
				}
			},
			_updateCircle: function(t) {
				if (this._drawing && !t._empty()) {
					var i = t._point,
						e = this._ctx,
						n = Math.max(Math.round(t._radius), 1),
						o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
					this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
				}
			},
			_fillStroke: function(t, i) {
				var e = i.options;
				e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
			},
			_onClick: function(t) {
				for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
				e && (zt(t), this._fireEvent([e], t))
			},
			_onMouseMove: function(t) {
				if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
					var i = this._map.mouseEventToLayerPoint(t);
					this._handleMouseHover(t, i)
				}
			},
			_handleMouseOut: function(t) {
				var i = this._hoveredLayer;
				i && (tt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
			},
			_handleMouseHover: function(t, i) {
				for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
				n !== this._hoveredLayer && (this._handleMouseOut(t), n && (Q(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
			},
			_fireEvent: function(t, i, e) {
				this._map._fireDOMEvent(i, e || i.type, t)
			},
			_bringToFront: function(t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
			},
			_bringToBack: function(t) {
				var i = t._order,
					e = i.next,
					n = i.prev;
				n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
			}
		}),
		yn = function() {
			try {
				return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
					function(t) {
						return document.createElement("<lvml:" + t + ' class="lvml">')
					}
			} catch (t) {
				return function(t) {
					return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
				}
			}
		}(),
		xn = {
			_initContainer: function() {
				this._container = G("div", "leaflet-vml-container")
			},
			_update: function() {
				this._map._animatingZoom || (gn.prototype._update.call(this), this.fire("update"))
			},
			_initPath: function(t) {
				var i = t._container = yn("shape");
				Q(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = yn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
			},
			_addPath: function(t) {
				var i = t._container;
				this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
			},
			_removePath: function(t) {
				var i = t._container;
				K(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
			},
			_updateStyle: function(t) {
				var i = t._stroke,
					e = t._fill,
					n = t.options,
					o = t._container;
				o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = yn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = oi(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = yn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
			},
			_updateCircle: function(t) {
				var i = t._point.round(),
					e = Math.round(t._radius),
					n = Math.round(t._radiusY || e);
				this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
			},
			_setPath: function(t, i) {
				t._path.v = i
			},
			_bringToFront: function(t) {
				X(t._container)
			},
			_bringToBack: function(t) {
				J(t._container)
			}
		},
		wn = $i ? yn : E,
		Pn = gn.extend({
			getEvents: function() {
				var t = gn.prototype.getEvents.call(this);
				return t.zoomstart = this._onZoomStart, t
			},
			_initContainer: function() {
				this._container = wn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = wn("g"), this._container.appendChild(this._rootGroup)
			},
			_destroyContainer: function() {
				K(this._container), ft(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
			},
			_onZoomStart: function() {
				this._update()
			},
			_update: function() {
				if (!this._map._animatingZoom || !this._bounds) {
					gn.prototype._update.call(this);
					var t = this._bounds,
						i = t.getSize(),
						e = this._container;
					this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), at(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
				}
			},
			_initPath: function(t) {
				var i = t._path = wn("path");
				t.options.className && Q(i, t.options.className), t.options.interactive && Q(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
			},
			_addPath: function(t) {
				this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
			},
			_removePath: function(t) {
				K(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
			},
			_updatePath: function(t) {
				t._project(), t._update()
			},
			_updateStyle: function(t) {
				var i = t._path,
					e = t.options;
				i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
			},
			_updatePoly: function(t, i) {
				this._setPath(t, k(t._parts, i))
			},
			_updateCircle: function(t) {
				var i = t._point,
					e = Math.max(Math.round(t._radius), 1),
					n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
					o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
				this._setPath(t, o)
			},
			_setPath: function(t, i) {
				t._path.setAttribute("d", i)
			},
			_bringToFront: function(t) {
				X(t._path)
			},
			_bringToBack: function(t) {
				J(t._path)
			}
		});
	$i && Pn.include(xn), be.include({
		getRenderer: function(t) {
			var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
			return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
		},
		_getPaneRenderer: function(t) {
			if ("overlayPane" === t || void 0 === t) return !1;
			var i = this._paneRenderers[t];
			return void 0 === i && (i = this._createRenderer({
				pane: t
			}), this._paneRenderers[t] = i), i
		},
		_createRenderer: function(t) {
			return this.options.preferCanvas && $t(t) || Qt(t)
		}
	});
	var Ln = on.extend({
		initialize: function(t, i) {
			on.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
		},
		setBounds: function(t) {
			return this.setLatLngs(this._boundsToLatLngs(t))
		},
		_boundsToLatLngs: function(t) {
			return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
		}
	});
	Pn.create = wn, Pn.pointsToPath = k, sn.geometryToLayer = Ft, sn.coordsToLatLng = Ut, sn.coordsToLatLngs = Vt, sn.latLngToCoords = qt, sn.latLngsToCoords = Gt, sn.getFeature = Kt, sn.asFeature = Yt, be.mergeOptions({
		boxZoom: !0
	});
	var bn = Ee.extend({
		initialize: function(t) {
			this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
		},
		addHooks: function() {
			mt(this._container, "mousedown", this._onMouseDown, this)
		},
		removeHooks: function() {
			ft(this._container, "mousedown", this._onMouseDown, this)
		},
		moved: function() {
			return this._moved
		},
		_destroy: function() {
			K(this._pane), delete this._pane
		},
		_resetState: function() {
			this._resetStateTimeout = 0, this._moved = !1
		},
		_clearDeferredResetState: function() {
			0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
		},
		_onMouseDown: function(t) {
			if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
			this._clearDeferredResetState(), this._resetState(), fi(), ut(), this._startPoint = this._map.mouseEventToContainerPoint(t), mt(document, {
				contextmenu: Lt,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this)
		},
		_onMouseMove: function(t) {
			this._moved || (this._moved = !0, this._box = G("div", "leaflet-zoom-box", this._container), Q(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
			var i = new P(this._point, this._startPoint),
				e = i.getSize();
			at(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
		},
		_finish: function() {
			this._moved && (K(this._box), tt(this._container, "leaflet-crosshair")), gi(), lt(), ft(document, {
				contextmenu: Lt,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this)
		},
		_onMouseUp: function(t) {
			if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
				this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
				var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
				this._map.fitBounds(i).fire("boxzoomend", {
					boxZoomBounds: i
				})
			}
		},
		_onKeyDown: function(t) {
			27 === t.keyCode && this._finish()
		}
	});
	be.addInitHook("addHandler", "boxZoom", bn), be.mergeOptions({
		doubleClickZoom: !0
	});
	var Tn = Ee.extend({
		addHooks: function() {
			this._map.on("dblclick", this._onDoubleClick, this)
		},
		removeHooks: function() {
			this._map.off("dblclick", this._onDoubleClick, this)
		},
		_onDoubleClick: function(t) {
			var i = this._map,
				e = i.getZoom(),
				n = i.options.zoomDelta,
				o = t.originalEvent.shiftKey ? e - n : e + n;
			"center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
		}
	});
	be.addInitHook("addHandler", "doubleClickZoom", Tn), be.mergeOptions({
		dragging: !0,
		inertia: !Mi,
		inertiaDeceleration: 3400,
		inertiaMaxSpeed: 1 / 0,
		easeLinearity: .2,
		worldCopyJump: !1,
		maxBoundsViscosity: 0
	});
	var zn = Ee.extend({
		addHooks: function() {
			if (!this._draggable) {
				var t = this._map;
				this._draggable = new Re(t._mapPane, t._container), this._draggable.on({
					dragstart: this._onDragStart,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
			}
			Q(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
		},
		removeHooks: function() {
			tt(this._map._container, "leaflet-grab"), tt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
		},
		moved: function() {
			return this._draggable && this._draggable._moved
		},
		moving: function() {
			return this._draggable && this._draggable._moving
		},
		_onDragStart: function() {
			var t = this._map;
			if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
				var i = z(this._map.options.maxBounds);
				this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
			} else this._offsetLimit = null;
			t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
		},
		_onDrag: function(t) {
			if (this._map.options.inertia) {
				var i = this._lastTime = +new Date,
					e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
				this._positions.push(e), this._times.push(i), this._prunePositions(i)
			}
			this._map.fire("move", t).fire("drag", t)
		},
		_prunePositions: function(t) {
			for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
		},
		_onZoomEnd: function() {
			var t = this._map.getSize().divideBy(2),
				i = this._map.latLngToLayerPoint([0, 0]);
			this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
		},
		_viscousLimit: function(t, i) {
			return t - (t - i) * this._viscosity
		},
		_onPreDragLimit: function() {
			if (this._viscosity && this._offsetLimit) {
				var t = this._draggable._newPos.subtract(this._draggable._startPos),
					i = this._offsetLimit;
				t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
			}
		},
		_onPreDragWrap: function() {
			var t = this._worldWidth,
				i = Math.round(t / 2),
				e = this._initialWorldOffset,
				n = this._draggable._newPos.x,
				o = (n - i + e) % t + i - e,
				s = (n + i + e) % t - i - e,
				r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
			this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
		},
		_onDragEnd: function(t) {
			var i = this._map,
				e = i.options,
				n = !e.inertia || this._times.length < 2;
			if (i.fire("dragend", t), n) i.fire("moveend");
			else {
				this._prunePositions(+new Date);
				var o = this._lastPos.subtract(this._positions[0]),
					s = (this._lastTime - this._times[0]) / 1e3,
					r = e.easeLinearity,
					a = o.multiplyBy(r / s),
					h = a.distanceTo([0, 0]),
					u = Math.min(e.inertiaMaxSpeed, h),
					l = a.multiplyBy(u / h),
					c = u / (e.inertiaDeceleration * r),
					_ = l.multiplyBy(-c / 2).round();
				_.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function() {
					i.panBy(_, {
						duration: c,
						easeLinearity: r,
						noMoveStart: !0,
						animate: !0
					})
				})) : i.fire("moveend")
			}
		}
	});
	be.addInitHook("addHandler", "dragging", zn), be.mergeOptions({
		keyboard: !0,
		keyboardPanDelta: 80
	});
	var Mn = Ee.extend({
		keyCodes: {
			left: [37],
			right: [39],
			down: [40],
			up: [38],
			zoomIn: [187, 107, 61, 171],
			zoomOut: [189, 109, 54, 173]
		},
		initialize: function(t) {
			this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
		},
		addHooks: function() {
			var t = this._map._container;
			t.tabIndex <= 0 && (t.tabIndex = "0"), mt(t, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this), this._map.on({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this)
		},
		removeHooks: function() {
			this._removeHooks(), ft(this._map._container, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this), this._map.off({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this)
		},
		_onMouseDown: function() {
			if (!this._focused) {
				var t = document.body,
					i = document.documentElement,
					e = t.scrollTop || i.scrollTop,
					n = t.scrollLeft || i.scrollLeft;
				this._map._container.focus(), window.scrollTo(n, e)
			}
		},
		_onFocus: function() {
			this._focused = !0, this._map.fire("focus")
		},
		_onBlur: function() {
			this._focused = !1, this._map.fire("blur")
		},
		_setPanDelta: function(t) {
			var i, e, n = this._panKeys = {},
				o = this.keyCodes;
			for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
			for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
			for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
			for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
		},
		_setZoomDelta: function(t) {
			var i, e, n = this._zoomKeys = {},
				o = this.keyCodes;
			for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
			for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
		},
		_addHooks: function() {
			mt(document, "keydown", this._onKeyDown, this)
		},
		_removeHooks: function() {
			ft(document, "keydown", this._onKeyDown, this)
		},
		_onKeyDown: function(t) {
			if (!(t.altKey || t.ctrlKey || t.metaKey)) {
				var i, e = t.keyCode,
					n = this._map;
				if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
				else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
				else {
					if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
					n.closePopup()
				}
				Lt(t)
			}
		}
	});
	be.addInitHook("addHandler", "keyboard", Mn), be.mergeOptions({
		scrollWheelZoom: !0,
		wheelDebounceTime: 40,
		wheelPxPerZoomLevel: 60
	});
	var Cn = Ee.extend({
		addHooks: function() {
			mt(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
		},
		removeHooks: function() {
			ft(this._map._container, "mousewheel", this._onWheelScroll, this)
		},
		_onWheelScroll: function(t) {
			var i = Tt(t),
				n = this._map.options.wheelDebounceTime;
			this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
			var o = Math.max(n - (+new Date - this._startTime), 0);
			clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Lt(t)
		},
		_performZoom: function() {
			var t = this._map,
				i = t.getZoom(),
				e = this._map.options.zoomSnap || 0;
			t._stop();
			var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
				o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
				s = e ? Math.ceil(o / e) * e : o,
				r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
			this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
		}
	});
	be.addInitHook("addHandler", "scrollWheelZoom", Cn), be.mergeOptions({
		tap: !0,
		tapTolerance: 15
	});
	var Sn = Ee.extend({
		addHooks: function() {
			mt(this._map._container, "touchstart", this._onDown, this)
		},
		removeHooks: function() {
			ft(this._map._container, "touchstart", this._onDown, this)
		},
		_onDown: function(t) {
			if (t.touches) {
				if (Pt(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
				var i = t.touches[0],
					n = i.target;
				this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && Q(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function() {
					this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
				}, this), 1e3), this._simulateEvent("mousedown", i), mt(document, {
					touchmove: this._onMove,
					touchend: this._onUp
				}, this)
			}
		},
		_onUp: function(t) {
			if (clearTimeout(this._holdTimeout), ft(document, {
					touchmove: this._onMove,
					touchend: this._onUp
				}, this), this._fireClick && t && t.changedTouches) {
				var i = t.changedTouches[0],
					e = i.target;
				e && e.tagName && "a" === e.tagName.toLowerCase() && tt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
			}
		},
		_isTapValid: function() {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
		},
		_onMove: function(t) {
			var i = t.touches[0];
			this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
		},
		_simulateEvent: function(t, i) {
			var e = document.createEvent("MouseEvents");
			e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
		}
	});
	qi && !Vi && be.addInitHook("addHandler", "tap", Sn), be.mergeOptions({
		touchZoom: qi && !Mi,
		bounceAtZoomLimits: !0
	});
	var Zn = Ee.extend({
		addHooks: function() {
			Q(this._map._container, "leaflet-touch-zoom"), mt(this._map._container, "touchstart", this._onTouchStart, this)
		},
		removeHooks: function() {
			tt(this._map._container, "leaflet-touch-zoom"), ft(this._map._container, "touchstart", this._onTouchStart, this)
		},
		_onTouchStart: function(t) {
			var i = this._map;
			if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
				var e = i.mouseEventToContainerPoint(t.touches[0]),
					n = i.mouseEventToContainerPoint(t.touches[1]);
				this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), mt(document, "touchmove", this._onTouchMove, this), mt(document, "touchend", this._onTouchEnd, this), Pt(t)
			}
		},
		_onTouchMove: function(t) {
			if (t.touches && 2 === t.touches.length && this._zooming) {
				var i = this._map,
					n = i.mouseEventToContainerPoint(t.touches[0]),
					o = i.mouseEventToContainerPoint(t.touches[1]),
					s = n.distanceTo(o) / this._startDist;
				if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
					if (this._center = this._startLatLng, 1 === s) return
				} else {
					var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
					if (1 === s && 0 === r.x && 0 === r.y) return;
					this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
				}
				this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
				var a = e(i._move, i, this._center, this._zoom, {
					pinch: !0,
					round: !1
				});
				this._animRequest = f(a, this, !0), Pt(t)
			}
		},
		_onTouchEnd: function() {
			this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), ft(document, "touchmove", this._onTouchMove), ft(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
		}
	});
	be.addInitHook("addHandler", "touchZoom", Zn), be.BoxZoom = bn, be.DoubleClickZoom = Tn, be.Drag = zn, be.Keyboard = Mn, be.ScrollWheelZoom = Cn, be.Tap = Sn, be.TouchZoom = Zn, Object.freeze = ti, t.version = "1.3.4", t.Control = Te, t.control = ze, t.Browser = Qi, t.Evented = ci, t.Mixin = Ae, t.Util = ui, t.Class = v, t.Handler = Ee, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = Pe, t.DomUtil = ve, t.PosAnimation = Le, t.Draggable = Re, t.LineUtil = Ne, t.PolyUtil = De, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = S, t.transformation = Z, t.Projection = He, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = di, t.GeoJSON = sn, t.geoJSON = Xt, t.geoJson = an, t.Layer = qe, t.LayerGroup = Ge, t.layerGroup = function(t, i) {
		return new Ge(t, i)
	}, t.FeatureGroup = Ke, t.featureGroup = function(t) {
		return new Ke(t)
	}, t.ImageOverlay = hn, t.imageOverlay = function(t, i, e) {
		return new hn(t, i, e)
	}, t.VideoOverlay = un, t.videoOverlay = function(t, i, e) {
		return new un(t, i, e)
	}, t.DivOverlay = ln, t.Popup = cn, t.popup = function(t, i) {
		return new cn(t, i)
	}, t.Tooltip = _n, t.tooltip = function(t, i) {
		return new _n(t, i)
	}, t.Icon = Ye, t.icon = function(t) {
		return new Ye(t)
	}, t.DivIcon = dn, t.divIcon = function(t) {
		return new dn(t)
	}, t.Marker = $e, t.marker = function(t, i) {
		return new $e(t, i)
	}, t.TileLayer = mn, t.tileLayer = Jt, t.GridLayer = pn, t.gridLayer = function(t) {
		return new pn(t)
	}, t.SVG = Pn, t.svg = Qt, t.Renderer = gn, t.Canvas = vn, t.canvas = $t, t.Path = Qe, t.CircleMarker = tn, t.circleMarker = function(t, i) {
		return new tn(t, i)
	}, t.Circle = en, t.circle = function(t, i, e) {
		return new en(t, i, e)
	}, t.Polyline = nn, t.polyline = function(t, i) {
		return new nn(t, i)
	}, t.Polygon = on, t.polygon = function(t, i) {
		return new on(t, i)
	}, t.Rectangle = Ln, t.rectangle = function(t, i) {
		return new Ln(t, i)
	}, t.Map = be, t.map = function(t, i) {
		return new be(t, i)
	};
	var En = window.L;
	t.noConflict = function() {
		return window.L = En, this
	}, window.L = t
});;
///<jscompress sourcefile="proj4.js" />
!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):t.proj4=s()}(this,function(){"use strict";function t(t,s){if(t[s])return t[s];for(var i,a=Object.keys(t),h=s.toLowerCase().replace(dt,""),e=-1;++e<a.length;)if(i=a[e],i.toLowerCase().replace(dt,"")===h)return t[i]}function s(t){if("string"!=typeof t)throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=_t}function i(t){return new s(t).output()}function a(t,s,i){Array.isArray(s)&&(i.unshift(s),s=null);var a=s?{}:t,e=i.reduce(function(t,s){return h(s,t),t},a);s&&(t[s]=e)}function h(t,s){if(Array.isArray(t)){var i=t.shift();if("PARAMETER"===i&&(i=t.shift()),1===t.length)return Array.isArray(t[0])?(s[i]={},void h(t[0],s[i])):void(s[i]=t[0]);if(t.length)if("TOWGS84"!==i){Array.isArray(i)||(s[i]={});var e;switch(i){case"UNIT":case"PRIMEM":case"VERT_DATUM":return s[i]={name:t[0].toLowerCase(),convert:t[1]},void(3===t.length&&h(t[2],s[i]));case"SPHEROID":case"ELLIPSOID":return s[i]={name:t[0],a:t[1],rf:t[2]},void(4===t.length&&h(t[3],s[i]));case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":return t[0]=["name",t[0]],void a(s,i,t);default:for(e=-1;++e<t.length;)if(!Array.isArray(t[e]))return h(t,s[i]);return a(s,i,t)}}else s[i]=t;else s[i]=!0}else s[t]=!0}function e(t,s){var i=s[0],a=s[1];!(i in t)&&a in t&&(t[i]=t[a],3===s.length&&(t[i]=s[2](t[i])))}function n(t){return t*At}function r(t){function s(s){return s*(t.to_meter||1)}"GEOGCS"===t.type?t.projName="longlat":"LOCAL_CS"===t.type?(t.projName="identity",t.local=!0):"object"==typeof t.PROJECTION?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),"metre"===t.units&&(t.units="meter"),t.UNIT.convert&&("GEOGCS"===t.type?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var i=t.GEOGCS;"GEOGCS"===t.type&&(i=t),i&&(i.DATUM?t.datumCode=i.DATUM.name.toLowerCase():t.datumCode=i.name.toLowerCase(),"d_"===t.datumCode.slice(0,2)&&(t.datumCode=t.datumCode.slice(2)),"new_zealand_geodetic_datum_1949"!==t.datumCode&&"new_zealand_1949"!==t.datumCode||(t.datumCode="nzgd49"),"wgs_1984"===t.datumCode&&("Mercator_Auxiliary_Sphere"===t.PROJECTION&&(t.sphere=!0),t.datumCode="wgs84"),"_ferro"===t.datumCode.slice(-6)&&(t.datumCode=t.datumCode.slice(0,-6)),"_jakarta"===t.datumCode.slice(-8)&&(t.datumCode=t.datumCode.slice(0,-8)),~t.datumCode.indexOf("belge")&&(t.datumCode="rnb72"),i.DATUM&&i.DATUM.SPHEROID&&(t.ellps=i.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),"international"===t.ellps.toLowerCase().slice(0,13)&&(t.ellps="intl"),t.a=i.DATUM.SPHEROID.a,t.rf=parseFloat(i.DATUM.SPHEROID.rf,10)),i.DATUM&&i.DATUM.TOWGS84&&(t.datum_params=i.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),"ch1903+"===t.datumCode&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a);[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_2","Standard_Parallel_2"],["false_easting","False_Easting"],["false_northing","False_Northing"],["central_meridian","Central_Meridian"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",n],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",n],["x0","false_easting",s],["y0","false_northing",s],["long0","central_meridian",n],["lat0","latitude_of_origin",n],["lat0","standard_parallel_1",n],["lat1","standard_parallel_1",n],["lat2","standard_parallel_2",n],["azimuth","Azimuth"],["alpha","azimuth",n],["srsCode","name"]].forEach(function(s){return e(t,s)}),t.long0||!t.longc||"Albers_Conic_Equal_Area"!==t.projName&&"Lambert_Azimuthal_Equal_Area"!==t.projName||(t.long0=t.longc),t.lat_ts||!t.lat1||"Stereographic_South_Pole"!==t.projName&&"Polar Stereographic (variant B)"!==t.projName||(t.lat0=n(t.lat1>0?90:-90),t.lat_ts=t.lat1)}function o(t){var s=this;if(2===arguments.length){var i=arguments[1];"string"==typeof i?"+"===i.charAt(0)?o[t]=yt(arguments[1]):o[t]=Ct(arguments[1]):o[t]=i}else if(1===arguments.length){if(Array.isArray(t))return t.map(function(t){Array.isArray(t)?o.apply(s,t):o(t)});if("string"==typeof t){if(t in o)return o[t]}else"EPSG"in t?o["EPSG:"+t.EPSG]=t:"ESRI"in t?o["ESRI:"+t.ESRI]=t:"IAU2000"in t?o["IAU2000:"+t.IAU2000]=t:console.log(t);return}}function l(t){return"string"==typeof t}function M(t){return t in o}function c(t){return Et.some(function(s){return t.indexOf(s)>-1})}function u(s){var i=t(s,"authority");if(i){var a=t(i,"epsg");return a&&Pt.indexOf(a)>-1}}function f(s){var i=t(s,"extension");if(i)return t(i,"proj4")}function m(t){return"+"===t[0]}function p(t){if(!l(t))return t;if(M(t))return o[t];if(c(t)){var s=Ct(t);if(u(s))return o["EPSG:3857"];var i=f(s);return i?yt(i):s}return m(t)?yt(t):void 0}function d(t){return t}function y(t,s){var i=Tt.length;return t.names?(Tt[i]=t,t.names.forEach(function(t){Gt[t.toLowerCase()]=i}),this):(console.log(s),!0)}function _(t,s,i,a){var h=t*t,e=s*s,n=(h-e)/h,r=0;return a?(h=(t*=1-n*(et+n*(nt+n*rt)))*t,n=0):r=Math.sqrt(n),{es:n,e:r,ep2:(h-e)/e}}function x(s,i,a,h,e){if(!s){var n=t(Lt,h);n||(n=zt),s=n.a,i=n.b,a=n.rf}return a&&!i&&(i=(1-1/a)*s),(0===a||Math.abs(s-i)<ot)&&(e=!0,i=s),{a:s,b:i,rf:a,sphere:e}}function v(t,s,i,a,h,e){var n={};return n.datum_type=void 0===t||"none"===t?it:st,s&&(n.datum_params=s.map(parseFloat),0===n.datum_params[0]&&0===n.datum_params[1]&&0===n.datum_params[2]||(n.datum_type=$),n.datum_params.length>3&&(0===n.datum_params[3]&&0===n.datum_params[4]&&0===n.datum_params[5]&&0===n.datum_params[6]||(n.datum_type=tt,n.datum_params[3]*=at,n.datum_params[4]*=at,n.datum_params[5]*=at,n.datum_params[6]=n.datum_params[6]/1e6+1))),n.a=i,n.b=a,n.es=h,n.ep2=e,n}function Projection(s,i){if(!(this instanceof Projection))return new Projection(s);i=i||function(t){if(t)throw t};var a=p(s);if("object"==typeof a){var h=Projection.projections.get(a.projName);if(h){if(a.datumCode&&"none"!==a.datumCode){var e=t(Dt,a.datumCode);e&&(a.datum_params=e.towgs84?e.towgs84.split(","):null,a.ellps=e.ellipse,a.datumName=e.datumName?e.datumName:a.datumCode)}a.k0=a.k0||1,a.axis=a.axis||"enu",a.ellps=a.ellps||"wgs84";var n=x(a.a,a.b,a.rf,a.ellps,a.sphere),r=_(n.a,n.b,n.rf,a.R_A),o=a.datum||v(a.datumCode,a.datum_params,n.a,n.b,r.es,r.ep2);Nt(this,a),Nt(this,h),this.a=n.a,this.b=n.b,this.rf=n.rf,this.sphere=n.sphere,this.es=r.es,this.e=r.e,this.ep2=r.ep2,this.datum=o,this.init(),i(null,this)}else i(s)}else i(s)}function g(t,s){return t.datum_type===s.datum_type&&(!(t.a!==s.a||Math.abs(t.es-s.es)>5e-11)&&(t.datum_type===$?t.datum_params[0]===s.datum_params[0]&&t.datum_params[1]===s.datum_params[1]&&t.datum_params[2]===s.datum_params[2]:t.datum_type!==tt||t.datum_params[0]===s.datum_params[0]&&t.datum_params[1]===s.datum_params[1]&&t.datum_params[2]===s.datum_params[2]&&t.datum_params[3]===s.datum_params[3]&&t.datum_params[4]===s.datum_params[4]&&t.datum_params[5]===s.datum_params[5]&&t.datum_params[6]===s.datum_params[6]))}function b(t,s,i){var a,h,e,n,r=t.x,o=t.y,l=t.z?t.z:0;if(o<-ht&&o>-1.001*ht)o=-ht;else if(o>ht&&o<1.001*ht)o=ht;else{if(o<-ht)return{x:-1/0,y:-1/0,z:t.z};if(o>ht)return{x:1/0,y:1/0,z:t.z}}return r>Math.PI&&(r-=2*Math.PI),h=Math.sin(o),n=Math.cos(o),e=h*h,a=i/Math.sqrt(1-s*e),{x:(a+l)*n*Math.cos(r),y:(a+l)*n*Math.sin(r),z:(a*(1-s)+l)*h}}function w(t,s,i,a){var h,e,n,r,o,l,M,c,u,f,m,p,d,y,_,x,v=t.x,g=t.y,b=t.z?t.z:0;if(h=Math.sqrt(v*v+g*g),e=Math.sqrt(v*v+g*g+b*b),h/i<1e-12){if(y=0,e/i<1e-12)return _=ht,x=-a,{x:t.x,y:t.y,z:t.z}}else y=Math.atan2(g,v);n=b/e,c=(r=h/e)*(1-s)*(o=1/Math.sqrt(1-s*(2-s)*r*r)),u=n*o,d=0;do{d++,l=s*(M=i/Math.sqrt(1-s*u*u))/(M+(x=h*c+b*u-M*(1-s*u*u))),p=(m=n*(o=1/Math.sqrt(1-l*(2-l)*r*r)))*c-(f=r*(1-l)*o)*u,c=f,u=m}while(p*p>1e-24&&d<30);return _=Math.atan(m/Math.abs(f)),{x:y,y:_,z:x}}function A(t,s,i){if(s===$)return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2]};if(s===tt){var a=i[0],h=i[1],e=i[2],n=i[3],r=i[4],o=i[5],l=i[6];return{x:l*(t.x-o*t.y+r*t.z)+a,y:l*(o*t.x+t.y-n*t.z)+h,z:l*(-r*t.x+n*t.y+t.z)+e}}}function C(t,s,i){if(s===$)return{x:t.x-i[0],y:t.y-i[1],z:t.z-i[2]};if(s===tt){var a=i[0],h=i[1],e=i[2],n=i[3],r=i[4],o=i[5],l=i[6],M=(t.x-a)/l,c=(t.y-h)/l,u=(t.z-e)/l;return{x:M+o*c-r*u,y:-o*M+c+n*u,z:r*M-n*c+u}}}function E(t){return t===$||t===tt}function P(t){if("function"==typeof Number.isFinite){if(Number.isFinite(t))return;throw new TypeError("coordinates must be finite numbers")}if("number"!=typeof t||t!==t||!isFinite(t))throw new TypeError("coordinates must be finite numbers")}function N(t,s){return(t.datum.datum_type===$||t.datum.datum_type===tt)&&"WGS84"!==s.datumCode||(s.datum.datum_type===$||s.datum.datum_type===tt)&&"WGS84"!==t.datumCode}function S(t,s,i){var a;return Array.isArray(i)&&(i=Ft(i)),Qt(i),t.datum&&s.datum&&N(t,s)&&(i=S(t,a=new Projection("WGS84"),i),t=a),"enu"!==t.axis&&(i=Ut(t,!1,i)),"longlat"===t.projName?i={x:i.x*lt,y:i.y*lt}:(t.to_meter&&(i={x:i.x*t.to_meter,y:i.y*t.to_meter}),i=t.inverse(i)),t.from_greenwich&&(i.x+=t.from_greenwich),i=Bt(t.datum,s.datum,i),s.from_greenwich&&(i={x:i.x-s.from_greenwich,y:i.y}),"longlat"===s.projName?i={x:i.x*Mt,y:i.y*Mt}:(i=s.forward(i),s.to_meter&&(i={x:i.x/s.to_meter,y:i.y/s.to_meter})),"enu"!==s.axis?Ut(s,!0,i):i}function k(t,s,i){var a,h,e;return Array.isArray(i)?(a=S(t,s,i),3===i.length?[a.x,a.y,a.z]:[a.x,a.y]):(h=S(t,s,i),2===(e=Object.keys(i)).length?h:(e.forEach(function(t){"x"!==t&&"y"!==t&&(h[t]=i[t])}),h))}function q(t){return t instanceof Projection?t:t.oProj?t.oProj:Projection(t)}function I(t,s,i){t=q(t);var a,h=!1;return void 0===s?(s=t,t=Wt,h=!0):(void 0!==s.x||Array.isArray(s))&&(i=s,s=t,t=Wt,h=!0),s=q(s),i?k(t,s,i):(a={forward:function(i){return k(t,s,i)},inverse:function(i){return k(s,t,i)}},h&&(a.oProj=s),a)}function O(t,s){return s=s||5,D(j({lat:t[1],lon:t[0]}),s)}function R(t){var s=L(Q(t.toUpperCase()));return s.lat&&s.lon?[s.lon,s.lat]:[(s.left+s.right)/2,(s.top+s.bottom)/2]}function G(t){return t*(Math.PI/180)}function T(t){return t/Math.PI*180}function j(t){var s,i,a,h,e,n,r,o=t.lat,l=t.lon,M=6378137,c=G(o),u=G(l);r=Math.floor((l+180)/6)+1,180===l&&(r=60),o>=56&&o<64&&l>=3&&l<12&&(r=32),o>=72&&o<84&&(l>=0&&l<9?r=31:l>=9&&l<21?r=33:l>=21&&l<33?r=35:l>=33&&l<42&&(r=37)),n=G(6*(r-1)-180+3),s=M/Math.sqrt(1-.00669438*Math.sin(c)*Math.sin(c)),i=Math.tan(c)*Math.tan(c),a=.006739496752268451*Math.cos(c)*Math.cos(c);var f=.9996*s*((h=Math.cos(c)*(u-n))+(1-i+a)*h*h*h/6+(5-18*i+i*i+72*a-.39089081163157013)*h*h*h*h*h/120)+5e5,m=.9996*((e=M*(.9983242984503243*c-.002514607064228144*Math.sin(2*c)+2639046602129982e-21*Math.sin(4*c)-3.418046101696858e-9*Math.sin(6*c)))+s*Math.tan(c)*(h*h/2+(5-i+9*a+4*a*a)*h*h*h*h/24+(61-58*i+i*i+600*a-2.2240339282485886)*h*h*h*h*h*h/720));return o<0&&(m+=1e7),{northing:Math.round(m),easting:Math.round(f),zoneNumber:r,zoneLetter:z(o)}}function L(t){var s=t.northing,i=t.easting,a=t.zoneLetter,h=t.zoneNumber;if(h<0||h>60)return null;var e,n,r,o,l,M,c,u,f=6378137,m=(1-Math.sqrt(.99330562))/(1+Math.sqrt(.99330562)),p=i-5e5,d=s;a<"N"&&(d-=1e7),M=6*(h-1)-180+3,u=(c=d/.9996/6367449.145945056)+(3*m/2-27*m*m*m/32)*Math.sin(2*c)+(21*m*m/16-55*m*m*m*m/32)*Math.sin(4*c)+151*m*m*m/96*Math.sin(6*c),e=f/Math.sqrt(1-.00669438*Math.sin(u)*Math.sin(u)),n=Math.tan(u)*Math.tan(u),r=.006739496752268451*Math.cos(u)*Math.cos(u),o=.99330562*f/Math.pow(1-.00669438*Math.sin(u)*Math.sin(u),1.5),l=p/(.9996*e);var y=u-e*Math.tan(u)/o*(l*l/2-(5+3*n+10*r-4*r*r-.06065547077041606)*l*l*l*l/24+(61+90*n+298*r+45*n*n-1.6983531815716497-3*r*r)*l*l*l*l*l*l/720);y=T(y);var _=(l-(1+2*n+r)*l*l*l/6+(5-2*r+28*n-3*r*r+.05391597401814761+24*n*n)*l*l*l*l*l/120)/Math.cos(u);_=M+T(_);var x;if(t.accuracy){var v=L({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});x={top:v.lat,right:v.lon,bottom:y,left:_}}else x={lat:y,lon:_};return x}function z(t){var s="Z";return 84>=t&&t>=72?s="X":72>t&&t>=64?s="W":64>t&&t>=56?s="V":56>t&&t>=48?s="U":48>t&&t>=40?s="T":40>t&&t>=32?s="S":32>t&&t>=24?s="R":24>t&&t>=16?s="Q":16>t&&t>=8?s="P":8>t&&t>=0?s="N":0>t&&t>=-8?s="M":-8>t&&t>=-16?s="L":-16>t&&t>=-24?s="K":-24>t&&t>=-32?s="J":-32>t&&t>=-40?s="H":-40>t&&t>=-48?s="G":-48>t&&t>=-56?s="F":-56>t&&t>=-64?s="E":-64>t&&t>=-72?s="D":-72>t&&t>=-80&&(s="C"),s}function D(t,s){var i="00000"+t.easting,a="00000"+t.northing;return t.zoneNumber+t.zoneLetter+B(t.easting,t.northing,t.zoneNumber)+i.substr(i.length-5,s)+a.substr(a.length-5,s)}function B(t,s,i){var a=U(i);return F(Math.floor(t/1e5),Math.floor(s/1e5)%20,a)}function U(t){var s=t%Ht;return 0===s&&(s=Ht),s}function F(t,s,i){var a=i-1,h=Kt.charCodeAt(a),e=Xt.charCodeAt(a),n=h+t-1,r=e+s,o=!1;return n>$t&&(n=n-$t+Jt-1,o=!0),(n===Vt||h<Vt&&n>Vt||(n>Vt||h<Vt)&&o)&&n++,(n===Zt||h<Zt&&n>Zt||(n>Zt||h<Zt)&&o)&&++n===Vt&&n++,n>$t&&(n=n-$t+Jt-1),r>Yt?(r=r-Yt+Jt-1,o=!0):o=!1,(r===Vt||e<Vt&&r>Vt||(r>Vt||e<Vt)&&o)&&r++,(r===Zt||e<Zt&&r>Zt||(r>Zt||e<Zt)&&o)&&++r===Vt&&r++,r>Yt&&(r=r-Yt+Jt-1),String.fromCharCode(n)+String.fromCharCode(r)}function Q(t){if(t&&0===t.length)throw"MGRSPoint coverting from nothing";for(var s,i=t.length,a=null,h="",e=0;!/[A-Z]/.test(s=t.charAt(e));){if(e>=2)throw"MGRSPoint bad conversion from: "+t;h+=s,e++}var n=parseInt(h,10);if(0===e||e+3>i)throw"MGRSPoint bad conversion from: "+t;var r=t.charAt(e++);if(r<="A"||"B"===r||"Y"===r||r>="Z"||"I"===r||"O"===r)throw"MGRSPoint zone letter "+r+" not handled: "+t;a=t.substring(e,e+=2);for(var o=U(n),l=W(a.charAt(0),o),M=H(a.charAt(1),o);M<K(r);)M+=2e6;var c=i-e;if(c%2!=0)throw"MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+t;var u,f,m,p,d,y=c/2,_=0,x=0;return y>0&&(u=1e5/Math.pow(10,y),f=t.substring(e,e+y),_=parseFloat(f)*u,m=t.substring(e+y),x=parseFloat(m)*u),p=_+l,d=x+M,{easting:p,northing:d,zoneLetter:r,zoneNumber:n,accuracy:u}}function W(t,s){for(var i=Kt.charCodeAt(s-1),a=1e5,h=!1;i!==t.charCodeAt(0);){if(++i===Vt&&i++,i===Zt&&i++,i>$t){if(h)throw"Bad character: "+t;i=Jt,h=!0}a+=1e5}return a}function H(t,s){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var i=Xt.charCodeAt(s-1),a=0,h=!1;i!==t.charCodeAt(0);){if(++i===Vt&&i++,i===Zt&&i++,i>Yt){if(h)throw"Bad character: "+t;i=Jt,h=!0}a+=1e5}return a}function K(t){var s;switch(t){case"C":s=11e5;break;case"D":s=2e6;break;case"E":s=28e5;break;case"F":s=37e5;break;case"G":s=46e5;break;case"H":s=55e5;break;case"J":s=64e5;break;case"K":s=73e5;break;case"L":s=82e5;break;case"M":s=91e5;break;case"N":s=0;break;case"P":s=8e5;break;case"Q":s=17e5;break;case"R":s=26e5;break;case"S":s=35e5;break;case"T":s=44e5;break;case"U":s=53e5;break;case"V":s=62e5;break;case"W":s=7e6;break;case"X":s=79e5;break;default:s=-1}if(s>=0)return s;throw"Invalid zone letter: "+t}function Point(t,s,i){if(!(this instanceof Point))return new Point(t,s,i);if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2]||0;else if("object"==typeof t)this.x=t.x,this.y=t.y,this.z=t.z||0;else if("string"==typeof t&&void 0===s){var a=t.split(",");this.x=parseFloat(a[0],10),this.y=parseFloat(a[1],10),this.z=parseFloat(a[2],10)||0}else this.x=t,this.y=s,this.z=i||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}function X(t){var s,i=[];return i[0]=t*Ts,s=t*t,i[0]+=s*js,i[1]=s*zs,s*=t,i[0]+=s*Ls,i[1]+=s*Ds,i[2]=s*Bs,i}function J(t,s){var i=t+t;return t+s[0]*Math.sin(i)+s[1]*Math.sin(i+i)+s[2]*Math.sin(i+i+i)}function V(t,s,i,a){var h;return t<ot?(a.value=ri.AREA_0,h=0):(h=Math.atan2(s,i),Math.abs(h)<=ct?a.value=ri.AREA_0:h>ct&&h<=ht+ct?(a.value=ri.AREA_1,h-=ht):h>ht+ct||h<=-(ht+ct)?(a.value=ri.AREA_2,h=h>=0?h-ft:h+ft):(a.value=ri.AREA_3,h+=ht)),h}function Z(t,s){var i=t+s;return i<-ft?i+=ut:i>+ft&&(i-=ut),i}function Y(t,s,i,a){for(var h=s;a;--a){var e=t(h);if(h-=e,Math.abs(e)<i)break}return h}var $=1,tt=2,st=4,it=5,at=484813681109536e-20,ht=Math.PI/2,et=.16666666666666666,nt=.04722222222222222,rt=.022156084656084655,ot=1e-10,lt=.017453292519943295,Mt=57.29577951308232,ct=Math.PI/4,ut=2*Math.PI,ft=3.14159265359,mt={};mt.greenwich=0,mt.lisbon=-9.131906111111,mt.paris=2.337229166667,mt.bogota=-74.080916666667,mt.madrid=-3.687938888889,mt.rome=12.452333333333,mt.bern=7.439583333333,mt.jakarta=106.807719444444,mt.ferro=-17.666666666667,mt.brussels=4.367975,mt.stockholm=18.058277777778,mt.athens=23.7163375,mt.oslo=10.722916666667;var pt={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}},dt=/[\s_\-\/\(\)]/g,yt=function(s){var i,a,h,e={},n=s.split("+").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,s){var i=s.split("=");return i.push(!0),t[i[0].toLowerCase()]=i[1],t},{}),r={proj:"projName",datum:"datumCode",rf:function(t){e.rf=parseFloat(t)},lat_0:function(t){e.lat0=t*lt},lat_1:function(t){e.lat1=t*lt},lat_2:function(t){e.lat2=t*lt},lat_ts:function(t){e.lat_ts=t*lt},lon_0:function(t){e.long0=t*lt},lon_1:function(t){e.long1=t*lt},lon_2:function(t){e.long2=t*lt},alpha:function(t){e.alpha=parseFloat(t)*lt},lonc:function(t){e.longc=t*lt},x_0:function(t){e.x0=parseFloat(t)},y_0:function(t){e.y0=parseFloat(t)},k_0:function(t){e.k0=parseFloat(t)},k:function(t){e.k0=parseFloat(t)},a:function(t){e.a=parseFloat(t)},b:function(t){e.b=parseFloat(t)},r_a:function(){e.R_A=!0},zone:function(t){e.zone=parseInt(t,10)},south:function(){e.utmSouth=!0},towgs84:function(t){e.datum_params=t.split(",").map(function(t){return parseFloat(t)})},to_meter:function(t){e.to_meter=parseFloat(t)},units:function(s){e.units=s;var i=t(pt,s);i&&(e.to_meter=i.to_meter)},from_greenwich:function(t){e.from_greenwich=t*lt},pm:function(s){var i=t(mt,s);e.from_greenwich=(i||parseFloat(s))*lt},nadgrids:function(t){"@null"===t?e.datumCode="none":e.nadgrids=t},axis:function(t){3===t.length&&-1!=="ewnsud".indexOf(t.substr(0,1))&&-1!=="ewnsud".indexOf(t.substr(1,1))&&-1!=="ewnsud".indexOf(t.substr(2,1))&&(e.axis=t)}};for(i in n)a=n[i],i in r?"function"==typeof(h=r[i])?h(a):e[h]=a:e[i]=a;return"string"==typeof e.datumCode&&"WGS84"!==e.datumCode&&(e.datumCode=e.datumCode.toLowerCase()),e},_t=1,xt=/\s/,vt=/[A-Za-z]/,gt=/[A-Za-z84]/,bt=/[,\]]/,wt=/[\d\.E\-\+]/;s.prototype.readCharicter=function(){var t=this.text[this.place++];if(4!==this.state)for(;xt.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case _t:return this.neutral(t);case 2:return this.keyword(t);case 4:return this.quoted(t);case 5:return this.afterquote(t);case 3:return this.number(t);case-1:return}},s.prototype.afterquote=function(t){if('"'===t)return this.word+='"',void(this.state=4);if(bt.test(t))return this.word=this.word.trim(),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in afterquote yet, index '+this.place)},s.prototype.afterItem=function(t){return","===t?(null!==this.word&&this.currentObject.push(this.word),this.word=null,void(this.state=_t)):"]"===t?(this.level--,null!==this.word&&(this.currentObject.push(this.word),this.word=null),this.state=_t,this.currentObject=this.stack.pop(),void(this.currentObject||(this.state=-1))):void 0},s.prototype.number=function(t){if(!wt.test(t)){if(bt.test(t))return this.word=parseFloat(this.word),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in number yet, index '+this.place)}this.word+=t},s.prototype.quoted=function(t){'"'!==t?this.word+=t:this.state=5},s.prototype.keyword=function(t){if(gt.test(t))this.word+=t;else{if("["===t){var s=[];return s.push(this.word),this.level++,null===this.root?this.root=s:this.currentObject.push(s),this.stack.push(this.currentObject),this.currentObject=s,void(this.state=_t)}if(!bt.test(t))throw new Error("havn't handled \""+t+'" in keyword yet, index '+this.place);this.afterItem(t)}},s.prototype.neutral=function(t){if(vt.test(t))return this.word=t,void(this.state=2);if('"'===t)return this.word="",void(this.state=4);if(wt.test(t))return this.word=t,void(this.state=3);{if(!bt.test(t))throw new Error("havn't handled \""+t+'" in neutral yet, index '+this.place);this.afterItem(t)}},s.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(-1===this.state)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};var At=.017453292519943295,Ct=function(t){var s=i(t),a=s.shift(),e=s.shift();s.unshift(["name",e]),s.unshift(["type",a]);var n={};return h(s,n),r(n),n};!function(t){t("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),t("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),t("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),t.WGS84=t["EPSG:4326"],t["EPSG:3785"]=t["EPSG:3857"],t.GOOGLE=t["EPSG:3857"],t["EPSG:900913"]=t["EPSG:3857"],t["EPSG:102113"]=t["EPSG:3857"]}(o);var Et=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"],Pt=["3857","900913","3785","102113"],Nt=function(t,s){t=t||{};var i,a;if(!s)return t;for(a in s)void 0!==(i=s[a])&&(t[a]=i);return t},St=function(t,s,i){var a=t*s;return i/Math.sqrt(1-a*a)},kt=function(t){return t<0?-1:1},qt=function(t){return Math.abs(t)<=ft?t:t-kt(t)*ut},It=function(t,s,i){var a=t*i,h=.5*t;return a=Math.pow((1-a)/(1+a),h),Math.tan(.5*(ht-s))/a},Ot=function(t,s){for(var i,a,h=.5*t,e=ht-2*Math.atan(s),n=0;n<=15;n++)if(i=t*Math.sin(e),a=ht-2*Math.atan(s*Math.pow((1-i)/(1+i),h))-e,e+=a,Math.abs(a)<=1e-10)return e;return-9999},Rt=[{init:function(){var t=this.b/this.a;this.es=1-t*t,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=St(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)},forward:function(t){var s=t.x,i=t.y;if(i*Mt>90&&i*Mt<-90&&s*Mt>180&&s*Mt<-180)return null;var a,h;if(Math.abs(Math.abs(i)-ht)<=ot)return null;if(this.sphere)a=this.x0+this.a*this.k0*qt(s-this.long0),h=this.y0+this.a*this.k0*Math.log(Math.tan(ct+.5*i));else{var e=Math.sin(i),n=It(this.e,i,e);a=this.x0+this.a*this.k0*qt(s-this.long0),h=this.y0-this.a*this.k0*Math.log(n)}return t.x=a,t.y=h,t},inverse:function(t){var s,i,a=t.x-this.x0,h=t.y-this.y0;if(this.sphere)i=ht-2*Math.atan(Math.exp(-h/(this.a*this.k0)));else{var e=Math.exp(-h/(this.a*this.k0));if(-9999===(i=Ot(this.e,e)))return null}return s=qt(this.long0+a/(this.a*this.k0)),t.x=s,t.y=i,t},names:["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"]},{init:function(){},forward:d,inverse:d,names:["longlat","identity"]}],Gt={},Tt=[],jt={start:function(){Rt.forEach(y)},add:y,get:function(t){if(!t)return!1;var s=t.toLowerCase();return void 0!==Gt[s]&&Tt[Gt[s]]?Tt[Gt[s]]:void 0}},Lt={};Lt.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"},Lt.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},Lt.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},Lt.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"},Lt.airy={a:6377563.396,b:6356256.91,ellipseName:"Airy 1830"},Lt.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},Lt.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},Lt.mod_airy={a:6377340.189,b:6356034.446,ellipseName:"Modified Airy"},Lt.andrae={a:6377104.43,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},Lt.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},Lt.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},Lt.bessel={a:6377397.155,rf:299.1528128,ellipseName:"Bessel 1841"},Lt.bess_nam={a:6377483.865,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},Lt.clrk66={a:6378206.4,b:6356583.8,ellipseName:"Clarke 1866"},Lt.clrk80={a:6378249.145,rf:293.4663,ellipseName:"Clarke 1880 mod."},Lt.clrk58={a:6378293.645208759,rf:294.2606763692654,ellipseName:"Clarke 1858"},Lt.CPM={a:6375738.7,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},Lt.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},Lt.engelis={a:6378136.05,rf:298.2566,ellipseName:"Engelis 1985"},Lt.evrst30={a:6377276.345,rf:300.8017,ellipseName:"Everest 1830"},Lt.evrst48={a:6377304.063,rf:300.8017,ellipseName:"Everest 1948"},Lt.evrst56={a:6377301.243,rf:300.8017,ellipseName:"Everest 1956"},Lt.evrst69={a:6377295.664,rf:300.8017,ellipseName:"Everest 1969"},Lt.evrstSS={a:6377298.556,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},Lt.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},Lt.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"},Lt.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"},Lt.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"},Lt.hough={a:6378270,rf:297,ellipseName:"Hough"},Lt.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},Lt.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"},Lt.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"},Lt.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"},Lt.new_intl={a:6378157.5,b:6356772.2,ellipseName:"New International 1967"},Lt.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},Lt.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},Lt.SEasia={a:6378155,b:6356773.3205,ellipseName:"Southeast Asia"},Lt.walbeck={a:6376896,b:6355834.8467,ellipseName:"Walbeck"},Lt.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"},Lt.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"},Lt.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var zt=Lt.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};Lt.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};var Dt={};Dt.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},Dt.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},Dt.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},Dt.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},Dt.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},Dt.potsdam={towgs84:"606.0,23.0,413.0",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},Dt.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},Dt.hermannskogel={towgs84:"653.0,-212.0,449.0",ellipse:"bessel",datumName:"Hermannskogel"},Dt.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},Dt.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},Dt.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},Dt.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},Dt.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"},Dt.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},Dt.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},Dt.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},Dt.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},Projection.projections=jt,Projection.projections.start();var Bt=function(t,s,i){return g(t,s)?i:t.datum_type===it||s.datum_type===it?i:t.es!==s.es||t.a!==s.a||E(t.datum_type)||E(s.datum_type)?(i=b(i,t.es,t.a),E(t.datum_type)&&(i=A(i,t.datum_type,t.datum_params)),E(s.datum_type)&&(i=C(i,s.datum_type,s.datum_params)),w(i,s.es,s.a,s.b)):i},Ut=function(t,s,i){var a,h,e,n=i.x,r=i.y,o=i.z||0,l={};for(e=0;e<3;e++)if(!s||2!==e||void 0!==i.z)switch(0===e?(a=n,h="x"):1===e?(a=r,h="y"):(a=o,h="z"),t.axis[e]){case"e":l[h]=a;break;case"w":l[h]=-a;break;case"n":l[h]=a;break;case"s":l[h]=-a;break;case"u":void 0!==i[h]&&(l.z=a);break;case"d":void 0!==i[h]&&(l.z=-a);break;default:return null}return l},Ft=function(t){var s={x:t[0],y:t[1]};return t.length>2&&(s.z=t[2]),t.length>3&&(s.m=t[3]),s},Qt=function(t){P(t.x),P(t.y)},Wt=Projection("WGS84"),Ht=6,Kt="AJSAJS",Xt="AFAFAF",Jt=65,Vt=73,Zt=79,Yt=86,$t=90,ts={forward:O,inverse:function(t){var s=L(Q(t.toUpperCase()));return s.lat&&s.lon?[s.lon,s.lat,s.lon,s.lat]:[s.left,s.bottom,s.right,s.top]},toPoint:R};Point.fromMGRS=function(t){return new Point(R(t))},Point.prototype.toMGRS=function(t){return O([this.x,this.y],t)};var ss=.01068115234375,is=function(t){var s=[];s[0]=1-t*(.25+t*(.046875+t*(.01953125+t*ss))),s[1]=t*(.75-t*(.046875+t*(.01953125+t*ss)));var i=t*t;return s[2]=i*(.46875-t*(.013020833333333334+.007120768229166667*t)),i*=t,s[3]=i*(.3645833333333333-.005696614583333333*t),s[4]=i*t*.3076171875,s},as=function(t,s,i,a){return i*=s,s*=s,a[0]*t-i*(a[1]+s*(a[2]+s*(a[3]+s*a[4])))},hs=function(t,s,i){for(var a=1/(1-s),h=t,e=20;e;--e){var n=Math.sin(h),r=1-s*n*n;if(r=(as(h,n,Math.cos(h),i)-t)*(r*Math.sqrt(r))*a,h-=r,Math.abs(r)<ot)return h}return h},es={init:function(){this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.es&&(this.en=is(this.es),this.ml0=as(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))},forward:function(t){var s,i,a,h=t.x,e=t.y,n=qt(h-this.long0),r=Math.sin(e),o=Math.cos(e);if(this.es){var l=o*n,M=Math.pow(l,2),c=this.ep2*Math.pow(o,2),u=Math.pow(c,2),f=Math.abs(o)>ot?Math.tan(e):0,m=Math.pow(f,2),p=Math.pow(m,2);s=1-this.es*Math.pow(r,2),l/=Math.sqrt(s);var d=as(e,r,o,this.en);i=this.a*(this.k0*l*(1+M/6*(1-m+c+M/20*(5-18*m+p+14*c-58*m*c+M/42*(61+179*p-p*m-479*m)))))+this.x0,a=this.a*(this.k0*(d-this.ml0+r*n*l/2*(1+M/12*(5-m+9*c+4*u+M/30*(61+p-58*m+270*c-330*m*c+M/56*(1385+543*p-p*m-3111*m))))))+this.y0}else{var y=o*Math.sin(n);if(Math.abs(Math.abs(y)-1)<ot)return 93;if(i=.5*this.a*this.k0*Math.log((1+y)/(1-y))+this.x0,a=o*Math.cos(n)/Math.sqrt(1-Math.pow(y,2)),(y=Math.abs(a))>=1){if(y-1>ot)return 93;a=0}else a=Math.acos(a);e<0&&(a=-a),a=this.a*this.k0*(a-this.lat0)+this.y0}return t.x=i,t.y=a,t},inverse:function(t){var s,i,a,h,e=(t.x-this.x0)*(1/this.a),n=(t.y-this.y0)*(1/this.a);if(this.es)if(s=this.ml0+n/this.k0,i=hs(s,this.es,this.en),Math.abs(i)<ht){var r=Math.sin(i),o=Math.cos(i),l=Math.abs(o)>ot?Math.tan(i):0,M=this.ep2*Math.pow(o,2),c=Math.pow(M,2),u=Math.pow(l,2),f=Math.pow(u,2);s=1-this.es*Math.pow(r,2);var m=e*Math.sqrt(s)/this.k0,p=Math.pow(m,2);a=i-(s*=l)*p/(1-this.es)*.5*(1-p/12*(5+3*u-9*M*u+M-4*c-p/30*(61+90*u-252*M*u+45*f+46*M-p/56*(1385+3633*u+4095*f+1574*f*u)))),h=qt(this.long0+m*(1-p/6*(1+2*u+M-p/20*(5+28*u+24*f+8*M*u+6*M-p/42*(61+662*u+1320*f+720*f*u))))/o)}else a=ht*kt(n),h=0;else{var d=Math.exp(e/this.k0),y=.5*(d-1/d),_=this.lat0+n/this.k0,x=Math.cos(_);s=Math.sqrt((1-Math.pow(x,2))/(1+Math.pow(y,2))),a=Math.asin(s),n<0&&(a=-a),h=0===y&&0===x?0:qt(Math.atan2(y,x)+this.long0)}return t.x=h,t.y=a,t},names:["Transverse_Mercator","Transverse Mercator","tmerc"]},ns=function(t){var s=Math.exp(t);return s=(s-1/s)/2},rs=function(t,s){t=Math.abs(t),s=Math.abs(s);var i=Math.max(t,s),a=Math.min(t,s)/(i||1);return i*Math.sqrt(1+Math.pow(a,2))},os=function(t){var s=1+t,i=s-1;return 0===i?t:t*Math.log(s)/i},ls=function(t){var s=Math.abs(t);return s=os(s*(1+s/(rs(1,s)+1))),t<0?-s:s},Ms=function(t,s){for(var i,a=2*Math.cos(2*s),h=t.length-1,e=t[h],n=0;--h>=0;)i=a*e-n+t[h],n=e,e=i;return s+i*Math.sin(2*s)},cs=function(t,s){for(var i,a=2*Math.cos(s),h=t.length-1,e=t[h],n=0;--h>=0;)i=a*e-n+t[h],n=e,e=i;return Math.sin(s)*i},us=function(t){var s=Math.exp(t);return s=(s+1/s)/2},fs=function(t,s,i){for(var a,h,e=Math.sin(s),n=Math.cos(s),r=ns(i),o=us(i),l=2*n*o,M=-2*e*r,c=t.length-1,u=t[c],f=0,m=0,p=0;--c>=0;)a=m,h=f,u=l*(m=u)-a-M*(f=p)+t[c],p=M*m-h+l*f;return l=e*o,M=n*r,[l*u-M*p,l*p+M*u]},ms={init:function(){if(void 0===this.es||this.es<=0)throw new Error("incorrect elliptical usage");this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),s=t/(2-t),i=s;this.cgb[0]=s*(2+s*(-2/3+s*(s*(116/45+s*(26/45+s*(-2854/675)))-2))),this.cbg[0]=s*(s*(2/3+s*(4/3+s*(-82/45+s*(32/45+s*(4642/4725)))))-2),i*=s,this.cgb[1]=i*(7/3+s*(s*(-227/45+s*(2704/315+s*(2323/945)))-1.6)),this.cbg[1]=i*(5/3+s*(-16/15+s*(-13/9+s*(904/315+s*(-1522/945))))),i*=s,this.cgb[2]=i*(56/15+s*(-136/35+s*(-1262/105+s*(73814/2835)))),this.cbg[2]=i*(-26/15+s*(34/21+s*(1.6+s*(-12686/2835)))),i*=s,this.cgb[3]=i*(4279/630+s*(-332/35+s*(-399572/14175))),this.cbg[3]=i*(1237/630+s*(s*(-24832/14175)-2.4)),i*=s,this.cgb[4]=i*(4174/315+s*(-144838/6237)),this.cbg[4]=i*(-734/315+s*(109598/31185)),i*=s,this.cgb[5]=i*(601676/22275),this.cbg[5]=i*(444337/155925),i=Math.pow(s,2),this.Qn=this.k0/(1+s)*(1+i*(.25+i*(1/64+i/256))),this.utg[0]=s*(s*(2/3+s*(-37/96+s*(1/360+s*(81/512+s*(-96199/604800)))))-.5),this.gtu[0]=s*(.5+s*(-2/3+s*(5/16+s*(41/180+s*(-127/288+s*(7891/37800)))))),this.utg[1]=i*(-1/48+s*(-1/15+s*(437/1440+s*(-46/105+s*(1118711/3870720))))),this.gtu[1]=i*(13/48+s*(s*(557/1440+s*(281/630+s*(-1983433/1935360)))-.6)),i*=s,this.utg[2]=i*(-17/480+s*(37/840+s*(209/4480+s*(-5569/90720)))),this.gtu[2]=i*(61/240+s*(-103/140+s*(15061/26880+s*(167603/181440)))),i*=s,this.utg[3]=i*(-4397/161280+s*(11/504+s*(830251/7257600))),this.gtu[3]=i*(49561/161280+s*(-179/168+s*(6601661/7257600))),i*=s,this.utg[4]=i*(-4583/161280+s*(108847/3991680)),this.gtu[4]=i*(34729/80640+s*(-3418889/1995840)),i*=s,this.utg[5]=-.03233083094085698*i,this.gtu[5]=.6650675310896665*i;var a=Ms(this.cbg,this.lat0);this.Zb=-this.Qn*(a+cs(this.gtu,2*a))},forward:function(t){var s=qt(t.x-this.long0),i=t.y;i=Ms(this.cbg,i);var a=Math.sin(i),h=Math.cos(i),e=Math.sin(s),n=Math.cos(s);i=Math.atan2(a,n*h),s=Math.atan2(e*h,rs(a,h*n)),s=ls(Math.tan(s));var r=fs(this.gtu,2*i,2*s);i+=r[0],s+=r[1];var o,l;return Math.abs(s)<=2.623395162778?(o=this.a*(this.Qn*s)+this.x0,l=this.a*(this.Qn*i+this.Zb)+this.y0):(o=1/0,l=1/0),t.x=o,t.y=l,t},inverse:function(t){var s=(t.x-this.x0)*(1/this.a),i=(t.y-this.y0)*(1/this.a);i=(i-this.Zb)/this.Qn,s/=this.Qn;var a,h;if(Math.abs(s)<=2.623395162778){var e=fs(this.utg,2*i,2*s);i+=e[0],s+=e[1],s=Math.atan(ns(s));var n=Math.sin(i),r=Math.cos(i),o=Math.sin(s),l=Math.cos(s);i=Math.atan2(n*l,rs(o,l*r)),s=Math.atan2(o,l*r),a=qt(s+this.long0),h=Ms(this.cgb,i)}else a=1/0,h=1/0;return t.x=a,t.y=h,t},names:["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc"]},ps=function(t,s){if(void 0===t){if((t=Math.floor(30*(qt(s)+Math.PI)/Math.PI)+1)<0)return 0;if(t>60)return 60}return t},ds={init:function(){var t=ps(this.zone,this.long0);if(void 0===t)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(t)-183)*lt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,ms.init.apply(this),this.forward=ms.forward,this.inverse=ms.inverse},names:["Universal Transverse Mercator System","utm"],dependsOn:"etmerc"},ys=function(t,s){return Math.pow((1-t)/(1+t),s)},_s=20,xs={init:function(){var t=Math.sin(this.lat0),s=Math.cos(this.lat0);s*=s,this.rc=Math.sqrt(1-this.es)/(1-this.es*t*t),this.C=Math.sqrt(1+this.es*s*s/(1-this.es)),this.phic0=Math.asin(t/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+ct)/(Math.pow(Math.tan(.5*this.lat0+ct),this.C)*ys(this.e*t,this.ratexp))},forward:function(t){var s=t.x,i=t.y;return t.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*i+ct),this.C)*ys(this.e*Math.sin(i),this.ratexp))-ht,t.x=this.C*s,t},inverse:function(t){for(var s=t.x/this.C,i=t.y,a=Math.pow(Math.tan(.5*i+ct)/this.K,1/this.C),h=_s;h>0&&(i=2*Math.atan(a*ys(this.e*Math.sin(t.y),-.5*this.e))-ht,!(Math.abs(i-t.y)<1e-14));--h)t.y=i;return h?(t.x=s,t.y=i,t):null},names:["gauss"]},vs={init:function(){xs.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))},forward:function(t){var s,i,a,h;return t.x=qt(t.x-this.long0),xs.forward.apply(this,[t]),s=Math.sin(t.y),i=Math.cos(t.y),a=Math.cos(t.x),h=this.k0*this.R2/(1+this.sinc0*s+this.cosc0*i*a),t.x=h*i*Math.sin(t.x),t.y=h*(this.cosc0*s-this.sinc0*i*a),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t},inverse:function(t){var s,i,a,h,e;if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,e=Math.sqrt(t.x*t.x+t.y*t.y)){var n=2*Math.atan2(e,this.R2);s=Math.sin(n),i=Math.cos(n),h=Math.asin(i*this.sinc0+t.y*s*this.cosc0/e),a=Math.atan2(t.x*s,e*this.cosc0*i-t.y*this.sinc0*s)}else h=this.phic0,a=0;return t.x=a,t.y=h,xs.inverse.apply(this,[t]),t.x=qt(t.x+this.long0),t},names:["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"]},gs={init:function(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ot&&(this.k0=.5*(1+kt(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=ot&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ot&&(this.k0=.5*this.cons*St(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/It(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=St(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-ht,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))},forward:function(t){var s,i,a,h,e,n,r=t.x,o=t.y,l=Math.sin(o),M=Math.cos(o),c=qt(r-this.long0);return Math.abs(Math.abs(r-this.long0)-Math.PI)<=ot&&Math.abs(o+this.lat0)<=ot?(t.x=NaN,t.y=NaN,t):this.sphere?(s=2*this.k0/(1+this.sinlat0*l+this.coslat0*M*Math.cos(c)),t.x=this.a*s*M*Math.sin(c)+this.x0,t.y=this.a*s*(this.coslat0*l-this.sinlat0*M*Math.cos(c))+this.y0,t):(i=2*Math.atan(this.ssfn_(o,l,this.e))-ht,h=Math.cos(i),a=Math.sin(i),Math.abs(this.coslat0)<=ot?(e=It(this.e,o*this.con,this.con*l),n=2*this.a*this.k0*e/this.cons,t.x=this.x0+n*Math.sin(r-this.long0),t.y=this.y0-this.con*n*Math.cos(r-this.long0),t):(Math.abs(this.sinlat0)<ot?(s=2*this.a*this.k0/(1+h*Math.cos(c)),t.y=s*a):(s=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*h*Math.cos(c))),t.y=s*(this.cosX0*a-this.sinX0*h*Math.cos(c))+this.y0),t.x=s*h*Math.sin(c)+this.x0,t))},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a,h,e,n=Math.sqrt(t.x*t.x+t.y*t.y);if(this.sphere){var r=2*Math.atan(n/(2*this.a*this.k0));return s=this.long0,i=this.lat0,n<=ot?(t.x=s,t.y=i,t):(i=Math.asin(Math.cos(r)*this.sinlat0+t.y*Math.sin(r)*this.coslat0/n),s=qt(Math.abs(this.coslat0)<ot?this.lat0>0?this.long0+Math.atan2(t.x,-1*t.y):this.long0+Math.atan2(t.x,t.y):this.long0+Math.atan2(t.x*Math.sin(r),n*this.coslat0*Math.cos(r)-t.y*this.sinlat0*Math.sin(r))),t.x=s,t.y=i,t)}if(Math.abs(this.coslat0)<=ot){if(n<=ot)return i=this.lat0,s=this.long0,t.x=s,t.y=i,t;t.x*=this.con,t.y*=this.con,a=n*this.cons/(2*this.a*this.k0),i=this.con*Ot(this.e,a),s=this.con*qt(this.con*this.long0+Math.atan2(t.x,-1*t.y))}else h=2*Math.atan(n*this.cosX0/(2*this.a*this.k0*this.ms1)),s=this.long0,n<=ot?e=this.X0:(e=Math.asin(Math.cos(h)*this.sinX0+t.y*Math.sin(h)*this.cosX0/n),s=qt(this.long0+Math.atan2(t.x*Math.sin(h),n*this.cosX0*Math.cos(h)-t.y*this.sinX0*Math.sin(h)))),i=-1*Ot(this.e,Math.tan(.5*(ht+e)));return t.x=s,t.y=i,t},names:["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"],ssfn_:function(t,s,i){return s*=i,Math.tan(.5*(ht+t))*Math.pow((1-s)/(1+s),.5*i)}},bs={init:function(){var t=this.lat0;this.lambda0=this.long0;var s=Math.sin(t),i=this.a,a=1/this.rf,h=2*a-Math.pow(a,2),e=this.e=Math.sqrt(h);this.R=this.k0*i*Math.sqrt(1-h)/(1-h*Math.pow(s,2)),this.alpha=Math.sqrt(1+h/(1-h)*Math.pow(Math.cos(t),4)),this.b0=Math.asin(s/this.alpha);var n=Math.log(Math.tan(Math.PI/4+this.b0/2)),r=Math.log(Math.tan(Math.PI/4+t/2)),o=Math.log((1+e*s)/(1-e*s));this.K=n-this.alpha*r+this.alpha*e/2*o},forward:function(t){var s=Math.log(Math.tan(Math.PI/4-t.y/2)),i=this.e/2*Math.log((1+this.e*Math.sin(t.y))/(1-this.e*Math.sin(t.y))),a=-this.alpha*(s+i)+this.K,h=2*(Math.atan(Math.exp(a))-Math.PI/4),e=this.alpha*(t.x-this.lambda0),n=Math.atan(Math.sin(e)/(Math.sin(this.b0)*Math.tan(h)+Math.cos(this.b0)*Math.cos(e))),r=Math.asin(Math.cos(this.b0)*Math.sin(h)-Math.sin(this.b0)*Math.cos(h)*Math.cos(e));return t.y=this.R/2*Math.log((1+Math.sin(r))/(1-Math.sin(r)))+this.y0,t.x=this.R*n+this.x0,t},inverse:function(t){for(var s=t.x-this.x0,i=t.y-this.y0,a=s/this.R,h=2*(Math.atan(Math.exp(i/this.R))-Math.PI/4),e=Math.asin(Math.cos(this.b0)*Math.sin(h)+Math.sin(this.b0)*Math.cos(h)*Math.cos(a)),n=Math.atan(Math.sin(a)/(Math.cos(this.b0)*Math.cos(a)-Math.sin(this.b0)*Math.tan(h))),r=this.lambda0+n/this.alpha,o=0,l=e,M=-1e3,c=0;Math.abs(l-M)>1e-7;){if(++c>20)return;o=1/this.alpha*(Math.log(Math.tan(Math.PI/4+e/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),M=l,l=2*Math.atan(Math.exp(o))-Math.PI/2}return t.x=r,t.y=l,t},names:["somerc"]},ws={init:function(){this.no_off=this.no_off||!1,this.no_rot=this.no_rot||!1,isNaN(this.k0)&&(this.k0=1);var t=Math.sin(this.lat0),s=Math.cos(this.lat0),i=this.e*t;this.bl=Math.sqrt(1+this.es/(1-this.es)*Math.pow(s,4)),this.al=this.a*this.bl*this.k0*Math.sqrt(1-this.es)/(1-i*i);var a=It(this.e,this.lat0,t),h=this.bl/s*Math.sqrt((1-this.es)/(1-i*i));h*h<1&&(h=1);var e,n;if(isNaN(this.longc)){var r=It(this.e,this.lat1,Math.sin(this.lat1)),o=It(this.e,this.lat2,Math.sin(this.lat2));this.lat0>=0?this.el=(h+Math.sqrt(h*h-1))*Math.pow(a,this.bl):this.el=(h-Math.sqrt(h*h-1))*Math.pow(a,this.bl);var l=Math.pow(r,this.bl),M=Math.pow(o,this.bl);n=.5*((e=this.el/l)-1/e);var c=(this.el*this.el-M*l)/(this.el*this.el+M*l),u=(M-l)/(M+l),f=qt(this.long1-this.long2);this.long0=.5*(this.long1+this.long2)-Math.atan(c*Math.tan(.5*this.bl*f)/u)/this.bl,this.long0=qt(this.long0);var m=qt(this.long1-this.long0);this.gamma0=Math.atan(Math.sin(this.bl*m)/n),this.alpha=Math.asin(h*Math.sin(this.gamma0))}else e=this.lat0>=0?h+Math.sqrt(h*h-1):h-Math.sqrt(h*h-1),this.el=e*Math.pow(a,this.bl),n=.5*(e-1/e),this.gamma0=Math.asin(Math.sin(this.alpha)/h),this.long0=this.longc-Math.asin(n*Math.tan(this.gamma0))/this.bl;this.no_off?this.uc=0:this.lat0>=0?this.uc=this.al/this.bl*Math.atan2(Math.sqrt(h*h-1),Math.cos(this.alpha)):this.uc=-1*this.al/this.bl*Math.atan2(Math.sqrt(h*h-1),Math.cos(this.alpha))},forward:function(t){var s,i,a,h=t.x,e=t.y,n=qt(h-this.long0);if(Math.abs(Math.abs(e)-ht)<=ot)a=e>0?-1:1,i=this.al/this.bl*Math.log(Math.tan(ct+a*this.gamma0*.5)),s=-1*a*ht*this.al/this.bl;else{var r=It(this.e,e,Math.sin(e)),o=this.el/Math.pow(r,this.bl),l=.5*(o-1/o),M=.5*(o+1/o),c=Math.sin(this.bl*n),u=(l*Math.sin(this.gamma0)-c*Math.cos(this.gamma0))/M;i=Math.abs(Math.abs(u)-1)<=ot?Number.POSITIVE_INFINITY:.5*this.al*Math.log((1-u)/(1+u))/this.bl,s=Math.abs(Math.cos(this.bl*n))<=ot?this.al*this.bl*n:this.al*Math.atan2(l*Math.cos(this.gamma0)+c*Math.sin(this.gamma0),Math.cos(this.bl*n))/this.bl}return this.no_rot?(t.x=this.x0+s,t.y=this.y0+i):(s-=this.uc,t.x=this.x0+i*Math.cos(this.alpha)+s*Math.sin(this.alpha),t.y=this.y0+s*Math.cos(this.alpha)-i*Math.sin(this.alpha)),t},inverse:function(t){var s,i;this.no_rot?(i=t.y-this.y0,s=t.x-this.x0):(i=(t.x-this.x0)*Math.cos(this.alpha)-(t.y-this.y0)*Math.sin(this.alpha),s=(t.y-this.y0)*Math.cos(this.alpha)+(t.x-this.x0)*Math.sin(this.alpha),s+=this.uc);var a=Math.exp(-1*this.bl*i/this.al),h=.5*(a-1/a),e=.5*(a+1/a),n=Math.sin(this.bl*s/this.al),r=(n*Math.cos(this.gamma0)+h*Math.sin(this.gamma0))/e,o=Math.pow(this.el/Math.sqrt((1+r)/(1-r)),1/this.bl);return Math.abs(r-1)<ot?(t.x=this.long0,t.y=ht):Math.abs(r+1)<ot?(t.x=this.long0,t.y=-1*ht):(t.y=Ot(this.e,o),t.x=qt(this.long0-Math.atan2(h*Math.cos(this.gamma0)-n*Math.sin(this.gamma0),Math.cos(this.bl*s/this.al))/this.bl)),t},names:["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","omerc"]},As={init:function(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<ot)){var t=this.b/this.a;this.e=Math.sqrt(1-t*t);var s=Math.sin(this.lat1),i=Math.cos(this.lat1),a=St(this.e,s,i),h=It(this.e,this.lat1,s),e=Math.sin(this.lat2),n=Math.cos(this.lat2),r=St(this.e,e,n),o=It(this.e,this.lat2,e),l=It(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>ot?this.ns=Math.log(a/r)/Math.log(h/o):this.ns=s,isNaN(this.ns)&&(this.ns=s),this.f0=a/(this.ns*Math.pow(h,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}},forward:function(t){var s=t.x,i=t.y;Math.abs(2*Math.abs(i)-Math.PI)<=ot&&(i=kt(i)*(ht-2*ot));var a,h,e=Math.abs(Math.abs(i)-ht);if(e>ot)a=It(this.e,i,Math.sin(i)),h=this.a*this.f0*Math.pow(a,this.ns);else{if((e=i*this.ns)<=0)return null;h=0}var n=this.ns*qt(s-this.long0);return t.x=this.k0*(h*Math.sin(n))+this.x0,t.y=this.k0*(this.rh-h*Math.cos(n))+this.y0,t},inverse:function(t){var s,i,a,h,e,n=(t.x-this.x0)/this.k0,r=this.rh-(t.y-this.y0)/this.k0;this.ns>0?(s=Math.sqrt(n*n+r*r),i=1):(s=-Math.sqrt(n*n+r*r),i=-1);var o=0;if(0!==s&&(o=Math.atan2(i*n,i*r)),0!==s||this.ns>0){if(i=1/this.ns,a=Math.pow(s/(this.a*this.f0),i),-9999===(h=Ot(this.e,a)))return null}else h=-ht;return e=qt(o/this.ns+this.long0),t.x=e,t.y=h,t},names:["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_2SP","lcc"]},Cs={init:function(){this.a=6377397.155,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq},forward:function(t){var s,i,a,h,e,n,r,o=t.x,l=t.y,M=qt(o-this.long0);return s=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),i=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/s)-this.s45),a=-M*this.alfa,h=Math.asin(Math.cos(this.ad)*Math.sin(i)+Math.sin(this.ad)*Math.cos(i)*Math.cos(a)),e=Math.asin(Math.cos(i)*Math.sin(a)/Math.cos(h)),n=this.n*e,r=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(h/2+this.s45),this.n),t.y=r*Math.cos(n)/1,t.x=r*Math.sin(n)/1,this.czech||(t.y*=-1,t.x*=-1),t},inverse:function(t){var s,i,a,h,e,n,r,o=t.x;t.x=t.y,t.y=o,this.czech||(t.y*=-1,t.x*=-1),e=Math.sqrt(t.x*t.x+t.y*t.y),h=Math.atan2(t.y,t.x)/Math.sin(this.s0),a=2*(Math.atan(Math.pow(this.ro0/e,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),s=Math.asin(Math.cos(this.ad)*Math.sin(a)-Math.sin(this.ad)*Math.cos(a)*Math.cos(h)),i=Math.asin(Math.cos(a)*Math.sin(h)/Math.cos(s)),t.x=this.long0-i/this.alfa,n=s,r=0;var l=0;do{t.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(s/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(n))/(1-this.e*Math.sin(n)),this.e/2))-this.s45),Math.abs(n-t.y)<1e-10&&(r=1),n=t.y,l+=1}while(0===r&&l<15);return l>=15?null:t},names:["Krovak","krovak"]},Es=function(t,s,i,a,h){return t*h-s*Math.sin(2*h)+i*Math.sin(4*h)-a*Math.sin(6*h)},Ps=function(t){return 1-.25*t*(1+t/16*(3+1.25*t))},Ns=function(t){return.375*t*(1+.25*t*(1+.46875*t))},Ss=function(t){return.05859375*t*t*(1+.75*t)},ks=function(t){return t*t*t*(35/3072)},qs=function(t,s,i){var a=s*i;return t/Math.sqrt(1-a*a)},Is=function(t){return Math.abs(t)<ht?t:t-kt(t)*Math.PI},Os=function(t,s,i,a,h){var e,n;e=t/s;for(var r=0;r<15;r++)if(n=(t-(s*e-i*Math.sin(2*e)+a*Math.sin(4*e)-h*Math.sin(6*e)))/(s-2*i*Math.cos(2*e)+4*a*Math.cos(4*e)-6*h*Math.cos(6*e)),e+=n,Math.abs(n)<=1e-10)return e;return NaN},Rs={init:function(){this.sphere||(this.e0=Ps(this.es),this.e1=Ns(this.es),this.e2=Ss(this.es),this.e3=ks(this.es),this.ml0=this.a*Es(this.e0,this.e1,this.e2,this.e3,this.lat0))},forward:function(t){var s,i,a=t.x,h=t.y;if(a=qt(a-this.long0),this.sphere)s=this.a*Math.asin(Math.cos(h)*Math.sin(a)),i=this.a*(Math.atan2(Math.tan(h),Math.cos(a))-this.lat0);else{var e=Math.sin(h),n=Math.cos(h),r=qs(this.a,this.e,e),o=Math.tan(h)*Math.tan(h),l=a*Math.cos(h),M=l*l,c=this.es*n*n/(1-this.es);s=r*l*(1-M*o*(1/6-(8-o+8*c)*M/120)),i=this.a*Es(this.e0,this.e1,this.e2,this.e3,h)-this.ml0+r*e/n*M*(.5+(5-o+6*c)*M/24)}return t.x=s+this.x0,t.y=i+this.y0,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a=t.x/this.a,h=t.y/this.a;if(this.sphere){var e=h+this.lat0;s=Math.asin(Math.sin(e)*Math.cos(a)),i=Math.atan2(Math.tan(a),Math.cos(e))}else{var n=this.ml0/this.a+h,r=Os(n,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(r)-ht)<=ot)return t.x=this.long0,t.y=ht,h<0&&(t.y*=-1),t;var o=qs(this.a,this.e,Math.sin(r)),l=o*o*o/this.a/this.a*(1-this.es),M=Math.pow(Math.tan(r),2),c=a*this.a/o,u=c*c;s=r-o*Math.tan(r)/l*c*c*(.5-(1+3*M)*c*c/24),i=c*(1-u*(M/3+(1+3*M)*M*u/15))/Math.cos(r)}return t.x=qt(i+this.long0),t.y=Is(s),t},names:["Cassini","Cassini_Soldner","cass"]},Gs=function(t,s){var i;return t>1e-7?(i=t*s,(1-t*t)*(s/(1-i*i)-.5/t*Math.log((1-i)/(1+i)))):2*s},Ts=.3333333333333333,js=.17222222222222222,Ls=.10257936507936508,zs=.06388888888888888,Ds=.0664021164021164,Bs=.016415012942191543,Us={init:function(){var t=Math.abs(this.lat0);if(Math.abs(t-ht)<ot?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(t)<ot?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var s;switch(this.qp=Gs(this.e,1),this.mmf=.5/(1-this.es),this.apa=X(this.es),this.mode){case this.N_POLE:case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),s=Math.sin(this.lat0),this.sinb1=Gs(this.e,s)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*s*s)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))},forward:function(t){var s,i,a,h,e,n,r,o,l,M,c=t.x,u=t.y;if(c=qt(c-this.long0),this.sphere){if(e=Math.sin(u),M=Math.cos(u),a=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if((i=this.mode===this.EQUIT?1+M*a:1+this.sinph0*e+this.cosph0*M*a)<=ot)return null;s=(i=Math.sqrt(2/i))*M*Math.sin(c),i*=this.mode===this.EQUIT?e:this.cosph0*e-this.sinph0*M*a}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(a=-a),Math.abs(u+this.phi0)<ot)return null;i=ct-.5*u,s=(i=2*(this.mode===this.S_POLE?Math.cos(i):Math.sin(i)))*Math.sin(c),i*=a}}else{switch(r=0,o=0,l=0,a=Math.cos(c),h=Math.sin(c),e=Math.sin(u),n=Gs(this.e,e),this.mode!==this.OBLIQ&&this.mode!==this.EQUIT||(r=n/this.qp,o=Math.sqrt(1-r*r)),this.mode){case this.OBLIQ:l=1+this.sinb1*r+this.cosb1*o*a;break;case this.EQUIT:l=1+o*a;break;case this.N_POLE:l=ht+u,n=this.qp-n;break;case this.S_POLE:l=u-ht,n=this.qp+n}if(Math.abs(l)<ot)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),i=this.mode===this.OBLIQ?this.ymf*l*(this.cosb1*r-this.sinb1*o*a):(l=Math.sqrt(2/(1+o*a)))*r*this.ymf,s=this.xmf*l*o*h;break;case this.N_POLE:case this.S_POLE:n>=0?(s=(l=Math.sqrt(n))*h,i=a*(this.mode===this.S_POLE?l:-l)):s=i=0}}return t.x=this.a*s+this.x0,t.y=this.a*i+this.y0,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a,h,e,n,r,o=t.x/this.a,l=t.y/this.a;if(this.sphere){var M,c=0,u=0;if(M=Math.sqrt(o*o+l*l),(i=.5*M)>1)return null;switch(i=2*Math.asin(i),this.mode!==this.OBLIQ&&this.mode!==this.EQUIT||(u=Math.sin(i),c=Math.cos(i)),this.mode){case this.EQUIT:i=Math.abs(M)<=ot?0:Math.asin(l*u/M),o*=u,l=c*M;break;case this.OBLIQ:i=Math.abs(M)<=ot?this.phi0:Math.asin(c*this.sinph0+l*u*this.cosph0/M),o*=u*this.cosph0,l=(c-Math.sin(i)*this.sinph0)*M;break;case this.N_POLE:l=-l,i=ht-i;break;case this.S_POLE:i-=ht}s=0!==l||this.mode!==this.EQUIT&&this.mode!==this.OBLIQ?Math.atan2(o,l):0}else{if(r=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(o/=this.dd,l*=this.dd,(n=Math.sqrt(o*o+l*l))<ot)return t.x=0,t.y=this.phi0,t;h=2*Math.asin(.5*n/this.rq),a=Math.cos(h),o*=h=Math.sin(h),this.mode===this.OBLIQ?(r=a*this.sinb1+l*h*this.cosb1/n,e=this.qp*r,l=n*this.cosb1*a-l*this.sinb1*h):(r=l*h/n,e=this.qp*r,l=n*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(l=-l),!(e=o*o+l*l))return t.x=0,t.y=this.phi0,t;r=1-e/this.qp,this.mode===this.S_POLE&&(r=-r)}s=Math.atan2(o,l),i=J(Math.asin(r),this.apa)}return t.x=qt(this.long0+s),t.y=i,t},names:["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"],S_POLE:1,N_POLE:2,EQUIT:3,OBLIQ:4},Fs=function(t){return Math.abs(t)>1&&(t=t>1?1:-1),Math.asin(t)},Qs={init:function(){Math.abs(this.lat1+this.lat2)<ot||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=St(this.e3,this.sin_po,this.cos_po),this.qs1=Gs(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=St(this.e3,this.sin_po,this.cos_po),this.qs2=Gs(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Gs(this.e3,this.sin_po,this.cos_po),Math.abs(this.lat1-this.lat2)>ot?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)},forward:function(t){var s=t.x,i=t.y;this.sin_phi=Math.sin(i),this.cos_phi=Math.cos(i);var a=Gs(this.e3,this.sin_phi,this.cos_phi),h=this.a*Math.sqrt(this.c-this.ns0*a)/this.ns0,e=this.ns0*qt(s-this.long0),n=h*Math.sin(e)+this.x0,r=this.rh-h*Math.cos(e)+this.y0;return t.x=n,t.y=r,t},inverse:function(t){var s,i,a,h,e,n;return t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns0>=0?(s=Math.sqrt(t.x*t.x+t.y*t.y),a=1):(s=-Math.sqrt(t.x*t.x+t.y*t.y),a=-1),h=0,0!==s&&(h=Math.atan2(a*t.x,a*t.y)),a=s*this.ns0/this.a,this.sphere?n=Math.asin((this.c-a*a)/(2*this.ns0)):(i=(this.c-a*a)/this.ns0,n=this.phi1z(this.e3,i)),e=qt(h/this.ns0+this.long0),t.x=e,t.y=n,t},names:["Albers_Conic_Equal_Area","Albers","aea"],phi1z:function(t,s){var i,a,h,e,n,r=Fs(.5*s);if(t<ot)return r;for(var o=t*t,l=1;l<=25;l++)if(i=Math.sin(r),a=Math.cos(r),h=t*i,e=1-h*h,n=.5*e*e/a*(s/(1-o)-i/e+.5/t*Math.log((1-h)/(1+h))),r+=n,Math.abs(n)<=1e-7)return r;return null}},Ws={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1},forward:function(t){var s,i,a,h,e,n,r,o=t.x,l=t.y;return a=qt(o-this.long0),s=Math.sin(l),i=Math.cos(l),h=Math.cos(a),(e=this.sin_p14*s+this.cos_p14*i*h)>0||Math.abs(e)<=ot?(n=this.x0+1*this.a*i*Math.sin(a)/e,r=this.y0+1*this.a*(this.cos_p14*s-this.sin_p14*i*h)/e):(n=this.x0+this.infinity_dist*i*Math.sin(a),r=this.y0+this.infinity_dist*(this.cos_p14*s-this.sin_p14*i*h)),t.x=n,t.y=r,t},inverse:function(t){var s,i,a,h,e,n;return t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,(s=Math.sqrt(t.x*t.x+t.y*t.y))?(h=Math.atan2(s,this.rc),i=Math.sin(h),a=Math.cos(h),n=Fs(a*this.sin_p14+t.y*i*this.cos_p14/s),e=Math.atan2(t.x*i,s*this.cos_p14*a-t.y*this.sin_p14*i),e=qt(this.long0+e)):(n=this.phic0,e=0),t.x=e,t.y=n,t},names:["gnom"]},Hs=function(t,s){var i=1-(1-t*t)/(2*t)*Math.log((1-t)/(1+t));if(Math.abs(Math.abs(s)-i)<1e-6)return s<0?-1*ht:ht;for(var a,h,e,n,r=Math.asin(.5*s),o=0;o<30;o++)if(h=Math.sin(r),e=Math.cos(r),n=t*h,a=Math.pow(1-n*n,2)/(2*e)*(s/(1-t*t)-h/(1-n*n)+.5/t*Math.log((1-n)/(1+n))),r+=a,Math.abs(a)<=1e-10)return r;return NaN},Ks={init:function(){this.sphere||(this.k0=St(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))},forward:function(t){var s,i,a=t.x,h=t.y,e=qt(a-this.long0);if(this.sphere)s=this.x0+this.a*e*Math.cos(this.lat_ts),i=this.y0+this.a*Math.sin(h)/Math.cos(this.lat_ts);else{var n=Gs(this.e,Math.sin(h));s=this.x0+this.a*this.k0*e,i=this.y0+this.a*n*.5/this.k0}return t.x=s,t.y=i,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i;return this.sphere?(s=qt(this.long0+t.x/this.a/Math.cos(this.lat_ts)),i=Math.asin(t.y/this.a*Math.cos(this.lat_ts))):(i=Hs(this.e,2*t.y*this.k0/this.a),s=qt(this.long0+t.x/(this.a*this.k0))),t.x=s,t.y=i,t},names:["cea"]},Xs={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)},forward:function(t){var s=t.x,i=t.y,a=qt(s-this.long0),h=Is(i-this.lat0);return t.x=this.x0+this.a*a*this.rc,t.y=this.y0+this.a*h,t},inverse:function(t){var s=t.x,i=t.y;return t.x=qt(this.long0+(s-this.x0)/(this.a*this.rc)),t.y=Is(this.lat0+(i-this.y0)/this.a),t},names:["Equirectangular","Equidistant_Cylindrical","eqc"]},Js=20,Vs={init:function(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ps(this.es),this.e1=Ns(this.es),this.e2=Ss(this.es),this.e3=ks(this.es),this.ml0=this.a*Es(this.e0,this.e1,this.e2,this.e3,this.lat0)},forward:function(t){var s,i,a,h=t.x,e=t.y,n=qt(h-this.long0);if(a=n*Math.sin(e),this.sphere)Math.abs(e)<=ot?(s=this.a*n,i=-1*this.a*this.lat0):(s=this.a*Math.sin(a)/Math.tan(e),i=this.a*(Is(e-this.lat0)+(1-Math.cos(a))/Math.tan(e)));else if(Math.abs(e)<=ot)s=this.a*n,i=-1*this.ml0;else{var r=qs(this.a,this.e,Math.sin(e))/Math.tan(e);s=r*Math.sin(a),i=this.a*Es(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+r*(1-Math.cos(a))}return t.x=s+this.x0,t.y=i+this.y0,t},inverse:function(t){var s,i,a,h,e,n,r,o,l;if(a=t.x-this.x0,h=t.y-this.y0,this.sphere)if(Math.abs(h+this.a*this.lat0)<=ot)s=qt(a/this.a+this.long0),i=0;else{n=this.lat0+h/this.a,r=a*a/this.a/this.a+n*n,o=n;var M;for(e=Js;e;--e)if(M=Math.tan(o),l=-1*(n*(o*M+1)-o-.5*(o*o+r)*M)/((o-n)/M-1),o+=l,Math.abs(l)<=ot){i=o;break}s=qt(this.long0+Math.asin(a*Math.tan(o)/this.a)/Math.sin(i))}else if(Math.abs(h+this.ml0)<=ot)i=0,s=qt(this.long0+a/this.a);else{n=(this.ml0+h)/this.a,r=a*a/this.a/this.a+n*n,o=n;var c,u,f,m,p;for(e=Js;e;--e)if(p=this.e*Math.sin(o),c=Math.sqrt(1-p*p)*Math.tan(o),u=this.a*Es(this.e0,this.e1,this.e2,this.e3,o),f=this.e0-2*this.e1*Math.cos(2*o)+4*this.e2*Math.cos(4*o)-6*this.e3*Math.cos(6*o),m=u/this.a,l=(n*(c*m+1)-m-.5*c*(m*m+r))/(this.es*Math.sin(2*o)*(m*m+r-2*n*m)/(4*c)+(n-m)*(c*f-2/Math.sin(2*o))-f),o-=l,Math.abs(l)<=ot){i=o;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(i),2))*Math.tan(i),s=qt(this.long0+Math.asin(a*c/this.a)/Math.sin(i))}return t.x=s,t.y=i,t},names:["Polyconic","poly"]},Zs={init:function(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013},forward:function(t){var s,i=t.x,a=t.y-this.lat0,h=i-this.long0,e=a/at*1e-5,n=h,r=1,o=0;for(s=1;s<=10;s++)r*=e,o+=this.A[s]*r;var l,M=o,c=n,u=1,f=0,m=0,p=0;for(s=1;s<=6;s++)l=f*M+u*c,u=u*M-f*c,f=l,m=m+this.B_re[s]*u-this.B_im[s]*f,p=p+this.B_im[s]*u+this.B_re[s]*f;return t.x=p*this.a+this.x0,t.y=m*this.a+this.y0,t},inverse:function(t){var s,i,a=t.x,h=t.y,e=a-this.x0,n=(h-this.y0)/this.a,r=e/this.a,o=1,l=0,M=0,c=0;for(s=1;s<=6;s++)i=l*n+o*r,o=o*n-l*r,l=i,M=M+this.C_re[s]*o-this.C_im[s]*l,c=c+this.C_im[s]*o+this.C_re[s]*l;for(var u=0;u<this.iterations;u++){var f,m=M,p=c,d=n,y=r;for(s=2;s<=6;s++)f=p*M+m*c,m=m*M-p*c,p=f,d+=(s-1)*(this.B_re[s]*m-this.B_im[s]*p),y+=(s-1)*(this.B_im[s]*m+this.B_re[s]*p);m=1,p=0;var _=this.B_re[1],x=this.B_im[1];for(s=2;s<=6;s++)f=p*M+m*c,m=m*M-p*c,p=f,_+=s*(this.B_re[s]*m-this.B_im[s]*p),x+=s*(this.B_im[s]*m+this.B_re[s]*p);var v=_*_+x*x;M=(d*_+y*x)/v,c=(y*_-d*x)/v}var g=M,b=c,w=1,A=0;for(s=1;s<=9;s++)w*=g,A+=this.D[s]*w;var C=this.lat0+A*at*1e5,E=this.long0+b;return t.x=E,t.y=C,t},names:["New_Zealand_Map_Grid","nzmg"]},Ys={init:function(){},forward:function(t){var s=t.x,i=t.y,a=qt(s-this.long0),h=this.x0+this.a*a,e=this.y0+this.a*Math.log(Math.tan(Math.PI/4+i/2.5))*1.25;return t.x=h,t.y=e,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s=qt(this.long0+t.x/this.a),i=2.5*(Math.atan(Math.exp(.8*t.y/this.a))-Math.PI/4);return t.x=s,t.y=i,t},names:["Miller_Cylindrical","mill"]},$s=20,ti={init:function(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=is(this.es)},forward:function(t){var s,i,a=t.x,h=t.y;if(a=qt(a-this.long0),this.sphere){if(this.m)for(var e=this.n*Math.sin(h),n=$s;n;--n){var r=(this.m*h+Math.sin(h)-e)/(this.m+Math.cos(h));if(h-=r,Math.abs(r)<ot)break}else h=1!==this.n?Math.asin(this.n*Math.sin(h)):h;s=this.a*this.C_x*a*(this.m+Math.cos(h)),i=this.a*this.C_y*h}else{var o=Math.sin(h),l=Math.cos(h);i=this.a*as(h,o,l,this.en),s=this.a*a*l/Math.sqrt(1-this.es*o*o)}return t.x=s,t.y=i,t},inverse:function(t){var s,i,a,h;return t.x-=this.x0,a=t.x/this.a,t.y-=this.y0,s=t.y/this.a,this.sphere?(s/=this.C_y,a/=this.C_x*(this.m+Math.cos(s)),this.m?s=Fs((this.m*s+Math.sin(s))/this.n):1!==this.n&&(s=Fs(Math.sin(s)/this.n)),a=qt(a+this.long0),s=Is(s)):(s=hs(t.y/this.a,this.es,this.en),(h=Math.abs(s))<ht?(h=Math.sin(s),i=this.long0+t.x*Math.sqrt(1-this.es*h*h)/(this.a*Math.cos(s)),a=qt(i)):h-ot<ht&&(a=this.long0)),t.x=a,t.y=s,t},names:["Sinusoidal","sinu"]},si={init:function(){},forward:function(t){for(var s=t.x,i=t.y,a=qt(s-this.long0),h=i,e=Math.PI*Math.sin(i);;){var n=-(h+Math.sin(h)-e)/(1+Math.cos(h));if(h+=n,Math.abs(n)<ot)break}h/=2,Math.PI/2-Math.abs(i)<ot&&(a=0);var r=.900316316158*this.a*a*Math.cos(h)+this.x0,o=1.4142135623731*this.a*Math.sin(h)+this.y0;return t.x=r,t.y=o,t},inverse:function(t){var s,i;t.x-=this.x0,t.y-=this.y0,i=t.y/(1.4142135623731*this.a),Math.abs(i)>.999999999999&&(i=.999999999999),s=Math.asin(i);var a=qt(this.long0+t.x/(.900316316158*this.a*Math.cos(s)));a<-Math.PI&&(a=-Math.PI),a>Math.PI&&(a=Math.PI),i=(2*s+Math.sin(2*s))/Math.PI,Math.abs(i)>1&&(i=1);var h=Math.asin(i);return t.x=a,t.y=h,t},names:["Mollweide","moll"]},ii={init:function(){Math.abs(this.lat1+this.lat2)<ot||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ps(this.es),this.e1=Ns(this.es),this.e2=Ss(this.es),this.e3=ks(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=St(this.e,this.sinphi,this.cosphi),this.ml1=Es(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<ot?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=St(this.e,this.sinphi,this.cosphi),this.ml2=Es(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Es(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))},forward:function(t){var s,i=t.x,a=t.y;if(this.sphere)s=this.a*(this.g-a);else{var h=Es(this.e0,this.e1,this.e2,this.e3,a);s=this.a*(this.g-h)}var e=this.ns*qt(i-this.long0),n=this.x0+s*Math.sin(e),r=this.y0+this.rh-s*Math.cos(e);return t.x=n,t.y=r,t},inverse:function(t){t.x-=this.x0,t.y=this.rh-t.y+this.y0;var s,i,a,h;this.ns>=0?(i=Math.sqrt(t.x*t.x+t.y*t.y),s=1):(i=-Math.sqrt(t.x*t.x+t.y*t.y),s=-1);var e=0;if(0!==i&&(e=Math.atan2(s*t.x,s*t.y)),this.sphere)return h=qt(this.long0+e/this.ns),a=Is(this.g-i/this.a),t.x=h,t.y=a,t;var n=this.g-i/this.a;return a=Os(n,this.e0,this.e1,this.e2,this.e3),h=qt(this.long0+e/this.ns),t.x=h,t.y=a,t},names:["Equidistant_Conic","eqdc"]},ai={init:function(){this.R=this.a},forward:function(t){var s,i,a=t.x,h=t.y,e=qt(a-this.long0);Math.abs(h)<=ot&&(s=this.x0+this.R*e,i=this.y0);var n=Fs(2*Math.abs(h/Math.PI));(Math.abs(e)<=ot||Math.abs(Math.abs(h)-ht)<=ot)&&(s=this.x0,i=h>=0?this.y0+Math.PI*this.R*Math.tan(.5*n):this.y0+Math.PI*this.R*-Math.tan(.5*n));var r=.5*Math.abs(Math.PI/e-e/Math.PI),o=r*r,l=Math.sin(n),M=Math.cos(n),c=M/(l+M-1),u=c*c,f=c*(2/l-1),m=f*f,p=Math.PI*this.R*(r*(c-m)+Math.sqrt(o*(c-m)*(c-m)-(m+o)*(u-m)))/(m+o);e<0&&(p=-p),s=this.x0+p;var d=o+c;return p=Math.PI*this.R*(f*d-r*Math.sqrt((m+o)*(o+1)-d*d))/(m+o),i=h>=0?this.y0+p:this.y0-p,t.x=s,t.y=i,t},inverse:function(t){var s,i,a,h,e,n,r,o,l,M,c,u,f;return t.x-=this.x0,t.y-=this.y0,c=Math.PI*this.R,a=t.x/c,h=t.y/c,e=a*a+h*h,n=-Math.abs(h)*(1+e),r=n-2*h*h+a*a,o=-2*n+1+2*h*h+e*e,f=h*h/o+(2*r*r*r/o/o/o-9*n*r/o/o)/27,l=(n-r*r/3/o)/o,M=2*Math.sqrt(-l/3),c=3*f/l/M,Math.abs(c)>1&&(c=c>=0?1:-1),u=Math.acos(c)/3,i=t.y>=0?(-M*Math.cos(u+Math.PI/3)-r/3/o)*Math.PI:-(-M*Math.cos(u+Math.PI/3)-r/3/o)*Math.PI,s=Math.abs(a)<ot?this.long0:qt(this.long0+Math.PI*(e-1+Math.sqrt(1+2*(a*a-h*h)+e*e))/2/a),t.x=s,t.y=i,t},names:["Van_der_Grinten_I","VanDerGrinten","vandg"]},hi={init:function(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)},forward:function(t){var s,i,a,h,e,n,r,o,l,M,c,u,f,m,p,d,y,_,x,v,g,b,w,A=t.x,C=t.y,E=Math.sin(t.y),P=Math.cos(t.y),N=qt(A-this.long0);return this.sphere?Math.abs(this.sin_p12-1)<=ot?(t.x=this.x0+this.a*(ht-C)*Math.sin(N),t.y=this.y0-this.a*(ht-C)*Math.cos(N),t):Math.abs(this.sin_p12+1)<=ot?(t.x=this.x0+this.a*(ht+C)*Math.sin(N),t.y=this.y0+this.a*(ht+C)*Math.cos(N),t):(_=this.sin_p12*E+this.cos_p12*P*Math.cos(N),d=Math.acos(_),y=d/Math.sin(d),t.x=this.x0+this.a*y*P*Math.sin(N),t.y=this.y0+this.a*y*(this.cos_p12*E-this.sin_p12*P*Math.cos(N)),t):(s=Ps(this.es),i=Ns(this.es),a=Ss(this.es),h=ks(this.es),Math.abs(this.sin_p12-1)<=ot?(e=this.a*Es(s,i,a,h,ht),n=this.a*Es(s,i,a,h,C),t.x=this.x0+(e-n)*Math.sin(N),t.y=this.y0-(e-n)*Math.cos(N),t):Math.abs(this.sin_p12+1)<=ot?(e=this.a*Es(s,i,a,h,ht),n=this.a*Es(s,i,a,h,C),t.x=this.x0+(e+n)*Math.sin(N),t.y=this.y0+(e+n)*Math.cos(N),t):(r=E/P,o=qs(this.a,this.e,this.sin_p12),l=qs(this.a,this.e,E),M=Math.atan((1-this.es)*r+this.es*o*this.sin_p12/(l*P)),c=Math.atan2(Math.sin(N),this.cos_p12*Math.tan(M)-this.sin_p12*Math.cos(N)),x=0===c?Math.asin(this.cos_p12*Math.sin(M)-this.sin_p12*Math.cos(M)):Math.abs(Math.abs(c)-Math.PI)<=ot?-Math.asin(this.cos_p12*Math.sin(M)-this.sin_p12*Math.cos(M)):Math.asin(Math.sin(N)*Math.cos(M)/Math.sin(c)),u=this.e*this.sin_p12/Math.sqrt(1-this.es),f=this.e*this.cos_p12*Math.cos(c)/Math.sqrt(1-this.es),m=u*f,p=f*f,v=x*x,g=v*x,b=g*x,w=b*x,d=o*x*(1-v*p*(1-p)/6+g/8*m*(1-2*p)+b/120*(p*(4-7*p)-3*u*u*(1-7*p))-w/48*m),t.x=this.x0+d*Math.sin(c),t.y=this.y0+d*Math.cos(c),t))},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a,h,e,n,r,o,l,M,c,u,f,m,p,d,y,_,x,v,g,b,w;if(this.sphere){if((s=Math.sqrt(t.x*t.x+t.y*t.y))>2*ht*this.a)return;return i=s/this.a,a=Math.sin(i),h=Math.cos(i),e=this.long0,Math.abs(s)<=ot?n=this.lat0:(n=Fs(h*this.sin_p12+t.y*a*this.cos_p12/s),r=Math.abs(this.lat0)-ht,e=qt(Math.abs(r)<=ot?this.lat0>=0?this.long0+Math.atan2(t.x,-t.y):this.long0-Math.atan2(-t.x,t.y):this.long0+Math.atan2(t.x*a,s*this.cos_p12*h-t.y*this.sin_p12*a))),t.x=e,t.y=n,t}return o=Ps(this.es),l=Ns(this.es),M=Ss(this.es),c=ks(this.es),Math.abs(this.sin_p12-1)<=ot?(u=this.a*Es(o,l,M,c,ht),s=Math.sqrt(t.x*t.x+t.y*t.y),f=u-s,n=Os(f/this.a,o,l,M,c),e=qt(this.long0+Math.atan2(t.x,-1*t.y)),t.x=e,t.y=n,t):Math.abs(this.sin_p12+1)<=ot?(u=this.a*Es(o,l,M,c,ht),s=Math.sqrt(t.x*t.x+t.y*t.y),f=s-u,n=Os(f/this.a,o,l,M,c),e=qt(this.long0+Math.atan2(t.x,t.y)),t.x=e,t.y=n,t):(s=Math.sqrt(t.x*t.x+t.y*t.y),d=Math.atan2(t.x,t.y),m=qs(this.a,this.e,this.sin_p12),y=Math.cos(d),_=this.e*this.cos_p12*y,x=-_*_/(1-this.es),v=3*this.es*(1-x)*this.sin_p12*this.cos_p12*y/(1-this.es),g=s/m,b=g-x*(1+x)*Math.pow(g,3)/6-v*(1+3*x)*Math.pow(g,4)/24,w=1-x*b*b/2-g*b*b*b/6,p=Math.asin(this.sin_p12*Math.cos(b)+this.cos_p12*Math.sin(b)*y),e=qt(this.long0+Math.asin(Math.sin(d)*Math.sin(b)/Math.cos(p))),n=Math.atan((1-this.es*w*this.sin_p12/Math.sin(p))*Math.tan(p)/(1-this.es)),t.x=e,t.y=n,t)},names:["Azimuthal_Equidistant","aeqd"]},ei={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)},forward:function(t){var s,i,a,h,e,n,r,o=t.x,l=t.y;return a=qt(o-this.long0),s=Math.sin(l),i=Math.cos(l),h=Math.cos(a),((e=this.sin_p14*s+this.cos_p14*i*h)>0||Math.abs(e)<=ot)&&(n=1*this.a*i*Math.sin(a),r=this.y0+1*this.a*(this.cos_p14*s-this.sin_p14*i*h)),t.x=n,t.y=r,t},inverse:function(t){var s,i,a,h,e,n,r;return t.x-=this.x0,t.y-=this.y0,s=Math.sqrt(t.x*t.x+t.y*t.y),i=Fs(s/this.a),a=Math.sin(i),h=Math.cos(i),n=this.long0,Math.abs(s)<=ot?(r=this.lat0,t.x=n,t.y=r,t):(r=Fs(h*this.sin_p14+t.y*a*this.cos_p14/s),e=Math.abs(this.lat0)-ht,Math.abs(e)<=ot?(n=qt(this.lat0>=0?this.long0+Math.atan2(t.x,-t.y):this.long0-Math.atan2(-t.x,t.y)),t.x=n,t.y=r,t):(n=qt(this.long0+Math.atan2(t.x*a,s*this.cos_p14*h-t.y*this.sin_p14*a)),t.x=n,t.y=r,t))},names:["ortho"]},ni={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},ri={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4},oi={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=ht-ct/2?this.face=ni.TOP:this.lat0<=-(ht-ct/2)?this.face=ni.BOTTOM:Math.abs(this.long0)<=ct?this.face=ni.FRONT:Math.abs(this.long0)<=ht+ct?this.face=this.long0>0?ni.RIGHT:ni.LEFT:this.face=ni.BACK,0!==this.es&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)},forward:function(t){var s,i,a,h,e,n,r={x:0,y:0},o={value:0};if(t.x-=this.long0,s=0!==this.es?Math.atan(this.one_minus_f_squared*Math.tan(t.y)):t.y,i=t.x,this.face===ni.TOP)h=ht-s,i>=ct&&i<=ht+ct?(o.value=ri.AREA_0,a=i-ht):i>ht+ct||i<=-(ht+ct)?(o.value=ri.AREA_1,a=i>0?i-ft:i+ft):i>-(ht+ct)&&i<=-ct?(o.value=ri.AREA_2,a=i+ht):(o.value=ri.AREA_3,a=i);else if(this.face===ni.BOTTOM)h=ht+s,i>=ct&&i<=ht+ct?(o.value=ri.AREA_0,a=-i+ht):i<ct&&i>=-ct?(o.value=ri.AREA_1,a=-i):i<-ct&&i>=-(ht+ct)?(o.value=ri.AREA_2,a=-i-ht):(o.value=ri.AREA_3,a=i>0?-i+ft:-i-ft);else{var l,M,c,u,f,m;this.face===ni.RIGHT?i=Z(i,+ht):this.face===ni.BACK?i=Z(i,+ft):this.face===ni.LEFT&&(i=Z(i,-ht)),u=Math.sin(s),f=Math.cos(s),m=Math.sin(i),l=f*Math.cos(i),M=f*m,c=u,this.face===ni.FRONT?a=V(h=Math.acos(l),c,M,o):this.face===ni.RIGHT?a=V(h=Math.acos(M),c,-l,o):this.face===ni.BACK?a=V(h=Math.acos(-l),c,-M,o):this.face===ni.LEFT?a=V(h=Math.acos(-M),c,l,o):(h=a=0,o.value=ri.AREA_0)}return n=Math.atan(12/ft*(a+Math.acos(Math.sin(a)*Math.cos(ct))-ht)),e=Math.sqrt((1-Math.cos(h))/(Math.cos(n)*Math.cos(n))/(1-Math.cos(Math.atan(1/Math.cos(a))))),o.value===ri.AREA_1?n+=ht:o.value===ri.AREA_2?n+=ft:o.value===ri.AREA_3&&(n+=1.5*ft),r.x=e*Math.cos(n),r.y=e*Math.sin(n),r.x=r.x*this.a+this.x0,r.y=r.y*this.a+this.y0,t.x=r.x,t.y=r.y,t},inverse:function(t){var s,i,a,h,e,n,r,o,l,M={lam:0,phi:0},c={value:0};if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,i=Math.atan(Math.sqrt(t.x*t.x+t.y*t.y)),s=Math.atan2(t.y,t.x),t.x>=0&&t.x>=Math.abs(t.y)?c.value=ri.AREA_0:t.y>=0&&t.y>=Math.abs(t.x)?(c.value=ri.AREA_1,s-=ht):t.x<0&&-t.x>=Math.abs(t.y)?(c.value=ri.AREA_2,s=s<0?s+ft:s-ft):(c.value=ri.AREA_3,s+=ht),l=ft/12*Math.tan(s),e=Math.sin(l)/(Math.cos(l)-1/Math.sqrt(2)),n=Math.atan(e),a=Math.cos(s),h=Math.tan(i),(r=1-a*a*h*h*(1-Math.cos(Math.atan(1/Math.cos(n)))))<-1?r=-1:r>1&&(r=1),this.face===ni.TOP)o=Math.acos(r),M.phi=ht-o,c.value===ri.AREA_0?M.lam=n+ht:c.value===ri.AREA_1?M.lam=n<0?n+ft:n-ft:c.value===ri.AREA_2?M.lam=n-ht:M.lam=n;else if(this.face===ni.BOTTOM)o=Math.acos(r),M.phi=o-ht,c.value===ri.AREA_0?M.lam=-n+ht:c.value===ri.AREA_1?M.lam=-n:c.value===ri.AREA_2?M.lam=-n-ht:M.lam=n<0?-n-ft:-n+ft;else{var u,f,m;l=(u=r)*u,f=(l+=(m=l>=1?0:Math.sqrt(1-l)*Math.sin(n))*m)>=1?0:Math.sqrt(1-l),c.value===ri.AREA_1?(l=f,f=-m,m=l):c.value===ri.AREA_2?(f=-f,m=-m):c.value===ri.AREA_3&&(l=f,f=m,m=-l),this.face===ni.RIGHT?(l=u,u=-f,f=l):this.face===ni.BACK?(u=-u,f=-f):this.face===ni.LEFT&&(l=u,u=f,f=-l),M.phi=Math.acos(-m)-ht,M.lam=Math.atan2(f,u),this.face===ni.RIGHT?M.lam=Z(M.lam,-ht):this.face===ni.BACK?M.lam=Z(M.lam,-ft):this.face===ni.LEFT&&(M.lam=Z(M.lam,+ht))}if(0!==this.es){var p,d,y;p=M.phi<0?1:0,d=Math.tan(M.phi),y=this.b/Math.sqrt(d*d+this.one_minus_f_squared),M.phi=Math.atan(Math.sqrt(this.a*this.a-y*y)/(this.one_minus_f*y)),p&&(M.phi=-M.phi)}return M.lam+=this.long0,t.x=M.lam,t.y=M.phi,t},names:["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"]},li=[[1,2.2199e-17,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-9.86701e-7],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,1.8736e-8],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,9.34959e-7],[.7986,-.00755338,-500009e-10,9.35324e-7],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Mi=[[-5.20417e-18,.0124,1.21431e-18,-8.45284e-11],[.062,.0124,-1.26793e-9,4.22642e-10],[.124,.0124,5.07171e-9,-1.60604e-9],[.186,.0123999,-1.90189e-8,6.00152e-9],[.248,.0124002,7.10039e-8,-2.24e-8],[.31,.0123992,-2.64997e-7,8.35986e-8],[.372,.0124029,9.88983e-7,-3.11994e-7],[.434,.0123893,-369093e-11,-4.35621e-7],[.4958,.0123198,-102252e-10,-3.45523e-7],[.5571,.0121916,-154081e-10,-5.82288e-7],[.6176,.0119938,-241424e-10,-5.25327e-7],[.6769,.011713,-320223e-10,-5.16405e-7],[.7346,.0113541,-397684e-10,-6.09052e-7],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-1.40374e-9],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],ci=.8487,ui=1.3523,fi=Mt/5,mi=1/fi,pi=18,di=function(t,s){return t[0]+s*(t[1]+s*(t[2]+s*t[3]))},yi=function(t,s){return t[1]+s*(2*t[2]+3*s*t[3])},_i={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"},forward:function(t){var s=qt(t.x-this.long0),i=Math.abs(t.y),a=Math.floor(i*fi);a<0?a=0:a>=pi&&(a=pi-1),i=Mt*(i-mi*a);var h={x:di(li[a],i)*s,y:di(Mi[a],i)};return t.y<0&&(h.y=-h.y),h.x=h.x*this.a*ci+this.x0,h.y=h.y*this.a*ui+this.y0,h},inverse:function(t){var s={x:(t.x-this.x0)/(this.a*ci),y:Math.abs(t.y-this.y0)/(this.a*ui)};if(s.y>=1)s.x/=li[pi][0],s.y=t.y<0?-ht:ht;else{var i=Math.floor(s.y*pi);for(i<0?i=0:i>=pi&&(i=pi-1);;)if(Mi[i][0]>s.y)--i;else{if(!(Mi[i+1][0]<=s.y))break;++i}var a=Mi[i],h=5*(s.y-a[0])/(Mi[i+1][0]-a[0]);h=Y(function(t){return(di(a,t)-s.y)/yi(a,t)},h,ot,100),s.x/=di(li[i],h),s.y=(5*i+h)*lt,t.y<0&&(s.y=-s.y)}return s.x=qt(s.x+this.long0),s},names:["Robinson","robin"]};return I.defaultDatum="WGS84",I.Proj=Projection,I.WGS84=new I.Proj("WGS84"),I.Point=Point,I.toPoint=Ft,I.defs=o,I.transform=S,I.mgrs=ts,I.version="2.5.0",function(proj4){proj4.Proj.projections.add(es),proj4.Proj.projections.add(ms),proj4.Proj.projections.add(ds),proj4.Proj.projections.add(vs),proj4.Proj.projections.add(gs),proj4.Proj.projections.add(bs),proj4.Proj.projections.add(ws),proj4.Proj.projections.add(As),proj4.Proj.projections.add(Cs),proj4.Proj.projections.add(Rs),proj4.Proj.projections.add(Us),proj4.Proj.projections.add(Qs),proj4.Proj.projections.add(Ws),proj4.Proj.projections.add(Ks),proj4.Proj.projections.add(Xs),proj4.Proj.projections.add(Vs),proj4.Proj.projections.add(Zs),proj4.Proj.projections.add(Ys),proj4.Proj.projections.add(ti),proj4.Proj.projections.add(si),proj4.Proj.projections.add(ii),proj4.Proj.projections.add(ai),proj4.Proj.projections.add(hi),proj4.Proj.projections.add(ei),proj4.Proj.projections.add(oi),proj4.Proj.projections.add(_i)}(I),I});;
///<jscompress sourcefile="proj4leaflet.js" />
(function (factory) {
	var L, proj4;
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['leaflet', 'proj4'], factory);
	} else if (typeof module === 'object' && typeof module.exports === "object") {
		// Node/CommonJS
		L = require('leaflet');
		proj4 = require('proj4');
		module.exports = factory(L, proj4);
	} else {
		// Browser globals
		if (typeof window.L === 'undefined' || typeof window.proj4 === 'undefined')
			throw 'Leaflet and proj4 must be loaded first';
		factory(window.L, window.proj4);
	}
}(function (L, proj4) {
	if (proj4.__esModule && proj4.default) {
		// If proj4 was bundled as an ES6 module, unwrap it to get
		// to the actual main proj4 object.
		// See discussion in https://github.com/kartena/Proj4Leaflet/pull/147
		proj4 = proj4.default;
	}
 
	L.Proj = {};

	L.Proj._isProj4Obj = function(a) {
		return (typeof a.inverse !== 'undefined' &&
			typeof a.forward !== 'undefined');
	};

	L.Proj.Projection = L.Class.extend({
		initialize: function(code, def, bounds) {
			var isP4 = L.Proj._isProj4Obj(code);
			this._proj = isP4 ? code : this._projFromCodeDef(code, def);
			this.bounds = isP4 ? def : bounds;
		},

		project: function (latlng) {
			var point = this._proj.forward([latlng.lng, latlng.lat]);
			return new L.Point(point[0], point[1]);
		},

		unproject: function (point, unbounded) {
			var point2 = this._proj.inverse([point.x, point.y]);
			return new L.LatLng(point2[1], point2[0], unbounded);
		},

		_projFromCodeDef: function(code, def) {
			if (def) {
				proj4.defs(code, def);
			} else if (proj4.defs[code] === undefined) {
				var urn = code.split(':');
				if (urn.length > 3) {
					code = urn[urn.length - 3] + ':' + urn[urn.length - 1];
				}
				if (proj4.defs[code] === undefined) {
					throw 'No projection definition for code ' + code;
				}
			}

			return proj4(code);
		}
	});

	L.Proj.CRS = L.Class.extend({
		includes: L.CRS,

		options: {
			transformation: new L.Transformation(1, 0, -1, 0)
		},

		initialize: function(a, b, c) {
			var code,
			    proj,
			    def,
			    options;

			if (L.Proj._isProj4Obj(a)) {
				proj = a;
				code = proj.srsCode;
				options = b || {};

				this.projection = new L.Proj.Projection(proj, options.bounds);
			} else {
				code = a;
				def = b;
				options = c || {};
				this.projection = new L.Proj.Projection(code, def, options.bounds);
			}

			L.Util.setOptions(this, options);
			this.code = code;
			this.transformation = this.options.transformation;

			if (this.options.origin) {
				this.transformation =
					new L.Transformation(1, -this.options.origin[0],
						-1, this.options.origin[1]);
			}

			if (this.options.scales) {
				this._scales = this.options.scales;
			} else if (this.options.resolutions) {
				this._scales = [];
				for (var i = this.options.resolutions.length - 1; i >= 0; i--) {
					if (this.options.resolutions[i]) {
						this._scales[i] = 1 / this.options.resolutions[i];
					}
				}
			}

			this.infinite = !this.options.bounds;

		},

		scale: function(zoom) {
			var iZoom = Math.floor(zoom),
				baseScale,
				nextScale,
				scaleDiff,
				zDiff;
			if (zoom === iZoom) {
				return this._scales[zoom];
			} else {
				// Non-integer zoom, interpolate
				baseScale = this._scales[iZoom];
				nextScale = this._scales[iZoom + 1];
				scaleDiff = nextScale - baseScale;
				zDiff = (zoom - iZoom);
				return baseScale + scaleDiff * zDiff;
			}
		},

		zoom: function(scale) {
			// Find closest number in this._scales, down
			var downScale = this._closestElement(this._scales, scale),
				downZoom = this._scales.indexOf(downScale),
				nextScale,
				nextZoom,
				scaleDiff;
			// Check if scale is downScale => return array index
			if (scale === downScale) {
				return downZoom;
			}
			if (downScale === undefined) {
				return -Infinity;
			}
			// Interpolate
			nextZoom = downZoom + 1;
			nextScale = this._scales[nextZoom];
			if (nextScale === undefined) {
				return Infinity;
			}
			scaleDiff = nextScale - downScale;
			return (scale - downScale) / scaleDiff + downZoom;
		},

		distance: L.CRS.Earth.distance,

		R: L.CRS.Earth.R,

		/* Get the closest lowest element in an array */
		_closestElement: function(array, element) {
			var low;
			for (var i = array.length; i--;) {
				if (array[i] <= element && (low === undefined || low < array[i])) {
					low = array[i];
				}
			}
			return low;
		}
	});

	L.Proj.GeoJSON = L.GeoJSON.extend({
		initialize: function(geojson, options) {
			this._callLevel = 0;
			L.GeoJSON.prototype.initialize.call(this, geojson, options);
		},

		addData: function(geojson) {
			var crs;

			if (geojson) {
				if (geojson.crs && geojson.crs.type === 'name') {
					crs = new L.Proj.CRS(geojson.crs.properties.name);
				} else if (geojson.crs && geojson.crs.type) {
					crs = new L.Proj.CRS(geojson.crs.type + ':' + geojson.crs.properties.code);
				}

				if (crs !== undefined) {
					this.options.coordsToLatLng = function(coords) {
						var point = L.point(coords[0], coords[1]);
						return crs.projection.unproject(point);
					};
				}
			}

			// Base class' addData might call us recursively, but
			// CRS shouldn't be cleared in that case, since CRS applies
			// to the whole GeoJSON, inluding sub-features.
			this._callLevel++;
			try {
				L.GeoJSON.prototype.addData.call(this, geojson);
			} finally {
				this._callLevel--;
				if (this._callLevel === 0) {
					delete this.options.coordsToLatLng;
				}
			}
		}
	});

	L.Proj.geoJson = function(geojson, options) {
		return new L.Proj.GeoJSON(geojson, options);
	};

	L.Proj.ImageOverlay = L.ImageOverlay.extend({
		initialize: function (url, bounds, options) {
			L.ImageOverlay.prototype.initialize.call(this, url, null, options);
			this._projectedBounds = bounds;
		},

		// Danger ahead: Overriding internal methods in Leaflet.
		// Decided to do this rather than making a copy of L.ImageOverlay
		// and doing very tiny modifications to it.
		// Future will tell if this was wise or not.
		_animateZoom: function (event) {
			var scale = this._map.getZoomScale(event.zoom);
			var northWest = L.point(this._projectedBounds.min.x, this._projectedBounds.max.y);
			var offset = this._projectedToNewLayerPoint(northWest, event.zoom, event.center);

			L.DomUtil.setTransform(this._image, offset, scale);
		},

		_reset: function () {
			var zoom = this._map.getZoom();
			var pixelOrigin = this._map.getPixelOrigin();
			var bounds = L.bounds(
				this._transform(this._projectedBounds.min, zoom)._subtract(pixelOrigin),
				this._transform(this._projectedBounds.max, zoom)._subtract(pixelOrigin)
			);
			var size = bounds.getSize();

			L.DomUtil.setPosition(this._image, bounds.min);
			this._image.style.width = size.x + 'px';
			this._image.style.height = size.y + 'px';
		},

		_projectedToNewLayerPoint: function (point, zoom, center) {
			var viewHalf = this._map.getSize()._divideBy(2);
			var newTopLeft = this._map.project(center, zoom)._subtract(viewHalf)._round();
			var topLeft = newTopLeft.add(this._map._getMapPanePos());

			return this._transform(point, zoom)._subtract(topLeft);
		},

		_transform: function (point, zoom) {
			var crs = this._map.options.crs;
			var transformation = crs.transformation;
			var scale = crs.scale(zoom);

			return transformation.transform(point, scale);
		}
	});

	L.Proj.imageOverlay = function (url, bounds, options) {
		return new L.Proj.ImageOverlay(url, bounds, options);
	};

	return L.Proj;
}));
;
///<jscompress sourcefile="esri-leaflet.js" />
/* esri-leaflet - v2.2.3 - Thu Aug 16 2018 13:01:56 GMT-0700 (PDT)
 * Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("leaflet")):"function"==typeof define&&define.amd?define(["exports","leaflet"],e):e((t.L=t.L||{},t.L.esri={}),t.L)}(this,function(t,e){"use strict";var i=window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest,s=""===document.documentElement.style.pointerEvents,r={cors:i,pointerEvents:s},n={attributionWidthOffset:55},o=0;function a(t){var e="";for(var i in t.f=t.f||"json",t)if(t.hasOwnProperty(i)){var s,r=t[i],n=Object.prototype.toString.call(r);e.length&&(e+="&"),s="[object Array]"===n?"[object Object]"===Object.prototype.toString.call(r[0])?JSON.stringify(r):r.join(","):"[object Object]"===n?JSON.stringify(r):"[object Date]"===n?r.valueOf():r,e+=encodeURIComponent(i)+"="+encodeURIComponent(s)}return e}function u(t,i){var s=new window.XMLHttpRequest;return s.onerror=function(r){s.onreadystatechange=e.Util.falseFn,t.call(i,{error:{code:500,message:"XMLHttpRequest error"}},null)},s.onreadystatechange=function(){var r,n;if(4===s.readyState){try{r=JSON.parse(s.responseText)}catch(t){r=null,n={code:500,message:"Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error."}}!n&&r.error&&(n=r.error,r=null),s.onerror=e.Util.falseFn,t.call(i,n,r)}},s.ontimeout=function(){this.onerror()},s}function l(t,e,i,s){var r=u(i,s);return r.open("POST",t),void 0!==s&&null!==s&&void 0!==s.options&&(r.timeout=s.options.timeout),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.send(a(e)),r}function h(t,e,i,s){var r=u(i,s);return r.open("GET",t+"?"+a(e),!0),void 0!==s&&null!==s&&void 0!==s.options&&(r.timeout=s.options.timeout),r.send(null),r}function c(t,e,i,s){var n=a(e),o=u(i,s),l=(t+"?"+n).length;if(l<=2e3&&r.cors?o.open("GET",t+"?"+n):l>2e3&&r.cors&&(o.open("POST",t),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")),void 0!==s&&null!==s&&void 0!==s.options&&(o.timeout=s.options.timeout),l<=2e3&&r.cors)o.send(null);else{if(!(l>2e3&&r.cors))return l<=2e3&&!r.cors?p(t,e,i,s):void M("a request to "+t+" was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html");o.send(n)}return o}function p(t,i,s,r){window._EsriLeafletCallbacks=window._EsriLeafletCallbacks||{};var n="c"+o;i.callback="window._EsriLeafletCallbacks."+n,window._EsriLeafletCallbacks[n]=function(t){if(!0!==window._EsriLeafletCallbacks[n]){var e,i=Object.prototype.toString.call(t);"[object Object]"!==i&&"[object Array]"!==i&&(e={error:{code:500,message:"Expected array or object as JSONP response"}},t=null),!e&&t.error&&(e=t,t=null),s.call(r,e,t),window._EsriLeafletCallbacks[n]=!0}};var u=e.DomUtil.create("script",null,document.body);return u.type="text/javascript",u.src=t+"?"+a(i),u.id=n,u.onerror=function(t){if(t&&!0!==window._EsriLeafletCallbacks[n]){s.call(r,{error:{code:500,message:"An unknown error occurred"}}),window._EsriLeafletCallbacks[n]=!0}},e.DomUtil.addClass(u,"esri-leaflet-jsonp"),o++,{id:n,url:u.src,abort:function(){window._EsriLeafletCallbacks._callback[n]({code:0,message:"Request aborted."})}}}var d=r.cors?h:p;d.CORS=h,d.JSONP=p;var m={request:c,get:d,post:l};function f(t){return function(t,e){for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}(t[0],t[t.length-1])||t.push(t[0]),t}function y(t){for(var e,i=0,s=0,r=t.length,n=t[s];s<r-1;s++)i+=((e=t[s+1])[0]-n[0])*(e[1]+n[1]),n=e;return i>=0}function g(t,e,i,s){var r=(s[0]-i[0])*(t[1]-i[1])-(s[1]-i[1])*(t[0]-i[0]),n=(e[0]-t[0])*(t[1]-i[1])-(e[1]-t[1])*(t[0]-i[0]),o=(s[1]-i[1])*(e[0]-t[0])-(s[0]-i[0])*(e[1]-t[1]);if(0!==o){var a=r/o,u=n/o;if(a>=0&&a<=1&&u>=0&&u<=1)return!0}return!1}function v(t,e){for(var i=0;i<t.length-1;i++)for(var s=0;s<e.length-1;s++)if(g(t[i],t[i+1],e[s],e[s+1]))return!0;return!1}function _(t,e){var i=v(t,e),s=function(t,e){for(var i=!1,s=-1,r=t.length,n=r-1;++s<r;n=s)(t[s][1]<=e[1]&&e[1]<t[n][1]||t[n][1]<=e[1]&&e[1]<t[s][1])&&e[0]<(t[n][0]-t[s][0])*(e[1]-t[s][1])/(t[n][1]-t[s][1])+t[s][0]&&(i=!i);return i}(t,e[0]);return!(i||!s)}function b(t){var e=[],i=t.slice(0),s=f(i.shift().slice(0));if(s.length>=4){y(s)||s.reverse(),e.push(s);for(var r=0;r<i.length;r++){var n=f(i[r].slice(0));n.length>=4&&(y(n)&&n.reverse(),e.push(n))}}return e}function x(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function S(t,e){var i={};if(t.features){i.type="FeatureCollection",i.features=[];for(var s=0;s<t.features.length;s++)i.features.push(S(t.features[s],e))}if("number"==typeof t.x&&"number"==typeof t.y&&(i.type="Point",i.coordinates=[t.x,t.y],"number"==typeof t.z&&i.coordinates.push(t.z)),t.points&&(i.type="MultiPoint",i.coordinates=t.points.slice(0)),t.paths&&(1===t.paths.length?(i.type="LineString",i.coordinates=t.paths[0].slice(0)):(i.type="MultiLineString",i.coordinates=t.paths.slice(0))),t.rings&&(i=function(t){for(var e,i,s=[],r=[],n=0;n<t.length;n++){var o=f(t[n].slice(0));if(!(o.length<4))if(y(o)){var a=[o.slice().reverse()];s.push(a)}else r.push(o.slice().reverse())}for(var u=[];r.length;){i=r.pop();var l=!1;for(e=s.length-1;e>=0;e--)if(_(s[e][0],i)){s[e].push(i),l=!0;break}l||u.push(i)}for(;u.length;){i=u.pop();var h=!1;for(e=s.length-1;e>=0;e--)if(v(s[e][0],i)){s[e].push(i),h=!0;break}h||s.push([i.reverse()])}return 1===s.length?{type:"Polygon",coordinates:s[0]}:{type:"MultiPolygon",coordinates:s}}(t.rings.slice(0))),(t.geometry||t.attributes)&&(i.type="Feature",i.geometry=t.geometry?S(t.geometry):null,i.properties=t.attributes?x(t.attributes):null,t.attributes))try{i.id=function(t,e){for(var i=e?[e,"OBJECTID","FID"]:["OBJECTID","FID"],s=0;s<i.length;s++){var r=i[s];if(r in t&&("string"==typeof t[r]||"number"==typeof t[r]))return t[r]}throw Error("No valid id attribute found")}(t.attributes,e)}catch(t){}return JSON.stringify(i.geometry)===JSON.stringify({})&&(i.geometry=null),t.spatialReference&&t.spatialReference.wkid&&4326!==t.spatialReference.wkid&&console.warn("Object converted in non-standard crs - "+JSON.stringify(t.spatialReference)),i}function L(t,e){e=e||"OBJECTID";var i,s={wkid:4326},r={};switch(t.type){case"Point":r.x=t.coordinates[0],r.y=t.coordinates[1],r.spatialReference=s;break;case"MultiPoint":r.points=t.coordinates.slice(0),r.spatialReference=s;break;case"LineString":r.paths=[t.coordinates.slice(0)],r.spatialReference=s;break;case"MultiLineString":r.paths=t.coordinates.slice(0),r.spatialReference=s;break;case"Polygon":r.rings=b(t.coordinates.slice(0)),r.spatialReference=s;break;case"MultiPolygon":r.rings=function(t){for(var e=[],i=0;i<t.length;i++)for(var s=b(t[i]),r=s.length-1;r>=0;r--){var n=s[r].slice(0);e.push(n)}return e}(t.coordinates.slice(0)),r.spatialReference=s;break;case"Feature":t.geometry&&(r.geometry=L(t.geometry,e)),r.attributes=t.properties?x(t.properties):{},t.id&&(r.attributes[e]=t.id);break;case"FeatureCollection":for(r=[],i=0;i<t.features.length;i++)r.push(L(t.features[i],e));break;case"GeometryCollection":for(r=[],i=0;i<t.geometries.length;i++)r.push(L(t.geometries[i],e))}return r}function I(t,e){return L(t,e)}function A(t,e){return S(t,e)}function T(t){if("NaN"!==t.xmin&&"NaN"!==t.ymin&&"NaN"!==t.xmax&&"NaN"!==t.ymax){var i=e.latLng(t.ymin,t.xmin),s=e.latLng(t.ymax,t.xmax);return e.latLngBounds(i,s)}return null}function w(t){return{xmin:(t=e.latLngBounds(t)).getSouthWest().lng,ymin:t.getSouthWest().lat,xmax:t.getNorthEast().lng,ymax:t.getNorthEast().lat,spatialReference:{wkid:4326}}}var R=/^(OBJECTID|FID|OID|ID)$/i;function C(t){var e;if(t.objectIdFieldName)e=t.objectIdFieldName;else if(t.fields){for(var i=0;i<=t.fields.length-1;i++)if("esriFieldTypeOID"===t.fields[i].type){e=t.fields[i].name;break}if(!e)for(i=0;i<=t.fields.length-1;i++)if(t.fields[i].name.match(R)){e=t.fields[i].name;break}}return e}function O(t){for(var e in t.attributes)if(e.match(R))return e}function P(t,e){var i,s=t.features||t.results,r=s.length;i=e||C(t);var n={type:"FeatureCollection",features:[]};if(r)for(var o=s.length-1;o>=0;o--){var a=A(s[o],i||O(s[o]));n.features.push(a)}return n}function F(t){return"/"!==(t=e.Util.trim(t))[t.length-1]&&(t+="/"),t}function k(t){if(-1!==t.url.indexOf("?")){t.requestParams=t.requestParams||{};var e=t.url.substring(t.url.indexOf("?")+1);t.url=t.url.split("?")[0],t.requestParams=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}return t.url=F(t.url.split("?")[0]),t}function U(t){return/^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i.test(t)}function G(t){var e;switch(t){case"Point":e="esriGeometryPoint";break;case"MultiPoint":e="esriGeometryMultipoint";break;case"LineString":case"MultiLineString":e="esriGeometryPolyline";break;case"Polygon":case"MultiPolygon":e="esriGeometryPolygon"}return e}function M(){console&&console.warn&&console.warn.apply(console,arguments)}function q(t){return t.getSize().x-n.attributionWidthOffset+"px"}function D(t){if(t.attributionControl&&!t.attributionControl._esriAttributionAdded){t.attributionControl.setPrefix('<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | Powered by <a href="https://www.esri.com">Esri</a>');var i=document.createElement("style");i.type="text/css",i.innerHTML=".esri-truncated-attribution:hover {white-space: normal;}",document.getElementsByTagName("head")[0].appendChild(i),e.DomUtil.addClass(t.attributionControl._container,"esri-truncated-attribution:hover");var s=document.createElement("style");s.type="text/css",s.innerHTML=".esri-truncated-attribution {vertical-align: -3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;display: inline-block;transition: 0s white-space;transition-delay: 1s;max-width: "+q(t)+";}",document.getElementsByTagName("head")[0].appendChild(s),e.DomUtil.addClass(t.attributionControl._container,"esri-truncated-attribution"),t.on("resize",function(e){t.attributionControl._container.style.maxWidth=q(e.target)}),t.on("unload",function(){i.parentNode.removeChild(i),s.parentNode.removeChild(s);for(var t=document.querySelectorAll(".esri-leaflet-jsonp"),e=0;e<t.length;e++)t.item(e).parentNode.removeChild(t.item(e))}),t.attributionControl._esriAttributionAdded=!0}}function E(t){var i={geometry:null,geometryType:null};return t instanceof e.LatLngBounds?(i.geometry=w(t),i.geometryType="esriGeometryEnvelope",i):(t.getLatLng&&(t=t.getLatLng()),t instanceof e.LatLng&&(t={type:"Point",coordinates:[t.lng,t.lat]}),t instanceof e.GeoJSON&&(t=t.getLayers()[0].feature.geometry,i.geometry=I(t),i.geometryType=G(t.type)),t.toGeoJSON&&(t=t.toGeoJSON()),"Feature"===t.type&&(t=t.geometry),"Point"===t.type||"LineString"===t.type||"Polygon"===t.type||"MultiPolygon"===t.type?(i.geometry=I(t),i.geometryType=G(t.type),i):void M("invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object"))}function B(t,i){p(t,{},e.Util.bind(function(t,s){if(!t){i._esriAttributions=[];for(var r=0;r<s.contributors.length;r++)for(var n=s.contributors[r],o=0;o<n.coverageAreas.length;o++){var a=n.coverageAreas[o],u=e.latLng(a.bbox[0],a.bbox[1]),l=e.latLng(a.bbox[2],a.bbox[3]);i._esriAttributions.push({attribution:n.attribution,score:a.score,bounds:e.latLngBounds(u,l),minZoom:a.zoomMin,maxZoom:a.zoomMax})}i._esriAttributions.sort(function(t,e){return e.score-t.score}),z({target:i})}},this))}function z(t){var i=t.target,s=i._esriAttributions;if(i&&i.attributionControl){var r=i.attributionControl._container.querySelector(".esri-dynamic-attribution");if(r&&s){for(var n="",o=i.getBounds(),a=e.latLngBounds(o.getSouthWest().wrap(),o.getNorthEast().wrap()),u=i.getZoom(),l=0;l<s.length;l++){var h=s[l],c=h.attribution;!n.match(c)&&h.bounds.intersects(a)&&u>=h.minZoom&&u<=h.maxZoom&&(n+=", "+c)}n=n.substr(2),r.innerHTML=n,r.style.maxWidth=q(i),i.fire("attributionupdated",{attribution:n})}}}var N={warn:M,cleanUrl:F,getUrlParams:k,isArcgisOnline:U,geojsonTypeToArcGIS:G,responseToFeatureCollection:P,geojsonToArcGIS:I,arcgisToGeoJSON:A,boundsToExtent:w,extentToBounds:T,calcAttributionWidth:q,setEsriAttribution:D,_setGeometry:E,_getAttributionData:B,_updateMapAttribution:z,_findIdAttributeFromFeature:O,_findIdAttributeFromResponse:C},Z=e.Class.extend({options:{proxy:!1,useCors:i},generateSetter:function(t,i){return e.Util.bind(function(e){return this.params[t]=e,this},i)},initialize:function(t){if(t.request&&t.options?(this._service=t,e.Util.setOptions(this,t.options)):(e.Util.setOptions(this,t),this.options.url=F(t.url)),this.params=e.Util.extend({},this.params||{}),this.setters)for(var i in this.setters){var s=this.setters[i];this[i]=this.generateSetter(s,this)}},token:function(t){return this._service?this._service.authenticate(t):this.params.token=t,this},format:function(t){return this.params.returnUnformattedValues=!t,this},request:function(t,i){return this.options.requestParams&&e.Util.extend(this.params,this.options.requestParams),this._service?this._service.request(this.path,this.params,t,i):this._request("request",this.path,this.params,t,i)},_request:function(t,e,i,s,r){var n=this.options.proxy?this.options.proxy+"?"+this.options.url+e:this.options.url+e;return"get"!==t&&"request"!==t||this.options.useCors?m[t](n,i,s,r):m.get.JSONP(n,i,s,r)}});var j=Z.extend({setters:{offset:"resultOffset",limit:"resultRecordCount",fields:"outFields",precision:"geometryPrecision",featureIds:"objectIds",returnGeometry:"returnGeometry",returnM:"returnM",transform:"datumTransformation",token:"token"},path:"query",params:{returnGeometry:!0,where:"1=1",outSr:4326,outFields:"*"},within:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelContains",this},intersects:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelIntersects",this},contains:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelWithin",this},crosses:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelCrosses",this},touches:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelTouches",this},overlaps:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelOverlaps",this},bboxIntersects:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelEnvelopeIntersects",this},indexIntersects:function(t){return this._setGeometryParams(t),this.params.spatialRel="esriSpatialRelIndexIntersects",this},nearby:function(t,i){return t=e.latLng(t),this.params.geometry=[t.lng,t.lat],this.params.geometryType="esriGeometryPoint",this.params.spatialRel="esriSpatialRelIntersects",this.params.units="esriSRUnit_Meter",this.params.distance=i,this.params.inSr=4326,this},where:function(t){return this.params.where=t,this},between:function(t,e){return this.params.time=[t.valueOf(),e.valueOf()],this},simplify:function(t,e){var i=Math.abs(t.getBounds().getWest()-t.getBounds().getEast());return this.params.maxAllowableOffset=i/t.getSize().y*e,this},orderBy:function(t,e){return e=e||"ASC",this.params.orderByFields=this.params.orderByFields?this.params.orderByFields+",":"",this.params.orderByFields+=[t,e].join(" "),this},run:function(t,e){return this._cleanParams(),this.options.isModern||U(this.options.url)?(this.params.f="geojson",this.request(function(i,s){this._trapSQLerrors(i),t.call(e,i,s,s)},this)):this.request(function(i,s){this._trapSQLerrors(i),t.call(e,i,s&&P(s),s)},this)},count:function(t,e){return this._cleanParams(),this.params.returnCountOnly=!0,this.request(function(e,i){t.call(this,e,i&&i.count,i)},e)},ids:function(t,e){return this._cleanParams(),this.params.returnIdsOnly=!0,this.request(function(e,i){t.call(this,e,i&&i.objectIds,i)},e)},bounds:function(t,e){return this._cleanParams(),this.params.returnExtentOnly=!0,this.request(function(i,s){s&&s.extent&&T(s.extent)?t.call(e,i,T(s.extent),s):(i={message:"Invalid Bounds"},t.call(e,i,null,s))},e)},distinct:function(){return this.params.returnGeometry=!1,this.params.returnDistinctValues=!0,this},pixelSize:function(t){var i=e.point(t);return this.params.pixelSize=[i.x,i.y],this},layer:function(t){return this.path=t+"/query",this},_trapSQLerrors:function(t){t&&"400"===t.code&&M("one common syntax error in query requests is encasing string values in double quotes instead of single quotes")},_cleanParams:function(){delete this.params.returnIdsOnly,delete this.params.returnExtentOnly,delete this.params.returnCountOnly},_setGeometryParams:function(t){this.params.inSr=4326;var e=E(t);this.params.geometry=e.geometry,this.params.geometryType=e.geometryType}});function W(t){return new j(t)}var J=Z.extend({setters:{contains:"contains",text:"searchText",fields:"searchFields",spatialReference:"sr",sr:"sr",layers:"layers",returnGeometry:"returnGeometry",maxAllowableOffset:"maxAllowableOffset",precision:"geometryPrecision",dynamicLayers:"dynamicLayers",returnZ:"returnZ",returnM:"returnM",gdbVersion:"gdbVersion",token:"token"},path:"find",params:{sr:4326,contains:!0,returnGeometry:!0,returnZ:!0,returnM:!1},layerDefs:function(t,e){return this.params.layerDefs=this.params.layerDefs?this.params.layerDefs+";":"",this.params.layerDefs+=[t,e].join(":"),this},simplify:function(t,e){var i=Math.abs(t.getBounds().getWest()-t.getBounds().getEast());return this.params.maxAllowableOffset=i/t.getSize().y*e,this},run:function(t,e){return this.request(function(i,s){t.call(e,i,s&&P(s),s)},e)}});function Q(t){return new J(t)}var V=Z.extend({path:"identify",between:function(t,e){return this.params.time=[t.valueOf(),e.valueOf()],this}});var H=V.extend({setters:{layers:"layers",precision:"geometryPrecision",tolerance:"tolerance",returnGeometry:"returnGeometry"},params:{sr:4326,layers:"all",tolerance:3,returnGeometry:!0},on:function(t){var e=w(t.getBounds()),i=t.getSize();return this.params.imageDisplay=[i.x,i.y,96],this.params.mapExtent=[e.xmin,e.ymin,e.xmax,e.ymax],this},at:function(t){return 2===t.length&&(t=e.latLng(t)),this._setGeometryParams(t),this},layerDef:function(t,e){return this.params.layerDefs=this.params.layerDefs?this.params.layerDefs+";":"",this.params.layerDefs+=[t,e].join(":"),this},simplify:function(t,e){var i=Math.abs(t.getBounds().getWest()-t.getBounds().getEast());return this.params.maxAllowableOffset=i/t.getSize().y*e,this},run:function(t,e){return this.request(function(i,s){if(i)t.call(e,i,void 0,s);else{var r=P(s);s.results=s.results.reverse();for(var n=0;n<r.features.length;n++){r.features[n].layerId=s.results[n].layerId}t.call(e,void 0,r,s)}})},_setGeometryParams:function(t){var e=E(t);this.params.geometry=e.geometry,this.params.geometryType=e.geometryType}});function K(t){return new H(t)}var X=V.extend({setters:{setMosaicRule:"mosaicRule",setRenderingRule:"renderingRule",setPixelSize:"pixelSize",returnCatalogItems:"returnCatalogItems",returnGeometry:"returnGeometry"},params:{returnGeometry:!1},at:function(t){return t=e.latLng(t),this.params.geometry=JSON.stringify({x:t.lng,y:t.lat,spatialReference:{wkid:4326}}),this.params.geometryType="esriGeometryPoint",this},getMosaicRule:function(){return this.params.mosaicRule},getRenderingRule:function(){return this.params.renderingRule},getPixelSize:function(){return this.params.pixelSize},run:function(t,e){return this.request(function(i,s){t.call(e,i,s&&this._responseToGeoJSON(s),s)},this)},_responseToGeoJSON:function(t){var e=t.location,i=t.catalogItems,s=t.catalogItemVisibilities,r={pixel:{type:"Feature",geometry:{type:"Point",coordinates:[e.x,e.y]},crs:{type:"EPSG",properties:{code:e.spatialReference.wkid}},properties:{OBJECTID:t.objectId,name:t.name,value:t.value},id:t.objectId}};if(t.properties&&t.properties.Values&&(r.pixel.properties.values=t.properties.Values),i&&i.features&&(r.catalogItems=P(i),s&&s.length===r.catalogItems.features.length))for(var n=s.length-1;n>=0;n--)r.catalogItems.features[n].properties.catalogItemVisibility=s[n];return r}});function $(t){return new X(t)}var Y=e.Evented.extend({options:{proxy:!1,useCors:i,timeout:0},initialize:function(t){t=t||{},this._requestQueue=[],this._authenticating=!1,e.Util.setOptions(this,t),this.options.url=F(this.options.url)},get:function(t,e,i,s){return this._request("get",t,e,i,s)},post:function(t,e,i,s){return this._request("post",t,e,i,s)},request:function(t,e,i,s){return this._request("request",t,e,i,s)},metadata:function(t,e){return this._request("get","",{},t,e)},authenticate:function(t){return this._authenticating=!1,this.options.token=t,this._runQueue(),this},getTimeout:function(){return this.options.timeout},setTimeout:function(t){this.options.timeout=t},_request:function(t,i,s,r,n){this.fire("requeststart",{url:this.options.url+i,params:s,method:t},!0);var o=this._createServiceCallback(t,i,s,r,n);if(this.options.token&&(s.token=this.options.token),this.options.requestParams&&e.Util.extend(s,this.options.requestParams),!this._authenticating){var a=this.options.proxy?this.options.proxy+"?"+this.options.url+i:this.options.url+i;return"get"!==t&&"request"!==t||this.options.useCors?m[t](a,s,o,n):m.get.JSONP(a,s,o,n)}this._requestQueue.push([t,i,s,r,n])},_createServiceCallback:function(t,i,s,r,n){return e.Util.bind(function(o,a){!o||499!==o.code&&498!==o.code||(this._authenticating=!0,this._requestQueue.push([t,i,s,r,n]),this.fire("authenticationrequired",{authenticate:e.Util.bind(this.authenticate,this)},!0),o.authenticate=e.Util.bind(this.authenticate,this)),r.call(n,o,a),o?this.fire("requesterror",{url:this.options.url+i,params:s,message:o.message,code:o.code,method:t},!0):this.fire("requestsuccess",{url:this.options.url+i,params:s,response:a,method:t},!0),this.fire("requestend",{url:this.options.url+i,params:s,method:t},!0)},this)},_runQueue:function(){for(var t=this._requestQueue.length-1;t>=0;t--){var e=this._requestQueue[t];this[e.shift()].apply(this,e)}this._requestQueue=[]}});var tt=Y.extend({identify:function(){return K(this)},find:function(){return Q(this)},query:function(){return W(this)}});function et(t){return new tt(t)}var it=Y.extend({query:function(){return W(this)},identify:function(){return $(this)}});function st(t){return new it(t)}var rt=Y.extend({options:{idAttribute:"OBJECTID"},query:function(){return W(this)},addFeature:function(t,e,i){this.addFeatures(t,e,i)},addFeatures:function(t,e,i){for(var s=t.features?t.features:[t],r=s.length-1;r>=0;r--)delete s[r].id;return t=I(t),t=s.length>1?t:[t],this.post("addFeatures",{features:t},function(t,s){var r=s&&s.addResults?s.addResults.length>1?s.addResults:s.addResults[0]:void 0;e&&e.call(i,t||s.addResults[0].error,r)},i)},updateFeature:function(t,e,i){this.updateFeatures(t,e,i)},updateFeatures:function(t,e,i){var s=t.features?t.features:[t];return t=I(t,this.options.idAttribute),t=s.length>1?t:[t],this.post("updateFeatures",{features:t},function(t,s){var r=s&&s.updateResults?s.updateResults.length>1?s.updateResults:s.updateResults[0]:void 0;e&&e.call(i,t||s.updateResults[0].error,r)},i)},deleteFeature:function(t,e,i){this.deleteFeatures(t,e,i)},deleteFeatures:function(t,e,i){return this.post("deleteFeatures",{objectIds:t},function(t,s){var r=s&&s.deleteResults?s.deleteResults.length>1?s.deleteResults:s.deleteResults[0]:void 0;e&&e.call(i,t||s.deleteResults[0].error,r)},i)}});function nt(t){return new rt(t)}var ot="https:"!==window.location.protocol?"http:":"https:",at=e.TileLayer.extend({statics:{TILES:{Streets:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"USGS, NOAA",attributionUrl:"https://static.arcgis.com/attribution/World_Street_Map"}},Topographic:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"USGS, NOAA",attributionUrl:"https://static.arcgis.com/attribution/World_Topo_Map"}},Oceans:{urlTemplate:ot+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"USGS, NOAA",attributionUrl:"https://static.arcgis.com/attribution/Ocean_Basemap"}},OceansLabels:{urlTemplate:ot+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},NationalGeographic:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"National Geographic, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp."}},DarkGray:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"}},DarkGrayLabels:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},Gray:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"}},GrayLabels:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:16,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},Imagery:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",attributionUrl:"https://static.arcgis.com/attribution/World_Imagery"}},ImageryLabels:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},ImageryTransportation:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},ShadedRelief:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"USGS"}},ShadedReliefLabels:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:12,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},Terrain:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"USGS, NOAA"}},TerrainLabels:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:13,subdomains:["server","services"],pane:s?"esri-labels":"tilePane",attribution:""}},USATopo:{urlTemplate:ot+"//{s}.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:15,subdomains:["server","services"],attribution:"USGS, National Geographic Society, i-cubed"}},ImageryClarity:{urlTemplate:ot+"//clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,attribution:"Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"}},Physical:{urlTemplate:ot+"//{s}.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:8,subdomains:["server","services"],attribution:"U.S. National Park Service"}},ImageryFirefly:{urlTemplate:ot+"//fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,attribution:"Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",attributionUrl:"https://static.arcgis.com/attribution/World_Imagery"}}}},initialize:function(t,i){var s;if("object"==typeof t&&t.urlTemplate&&t.options)s=t;else{if("string"!=typeof t||!at.TILES[t])throw new Error('L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Physical", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ImageryClarity", "ImageryFirefly", ShadedRelief", "ShadedReliefLabels", "Terrain", "TerrainLabels" or "USATopo"');s=at.TILES[t]}var r=e.Util.extend(s.options,i);e.Util.setOptions(this,r),this.options.token&&-1===s.urlTemplate.indexOf("token=")&&(s.urlTemplate+="?token="+this.options.token),e.TileLayer.prototype.initialize.call(this,s.urlTemplate,r)},onAdd:function(t){D(t),"esri-labels"===this.options.pane&&this._initPane(),this.options.attributionUrl&&B(this.options.attributionUrl,t),t.on("moveend",z),e.TileLayer.prototype.onAdd.call(this,t)},onRemove:function(t){t.off("moveend",z),e.TileLayer.prototype.onRemove.call(this,t)},_initPane:function(){if(!this._map.getPane(this.options.pane)){var t=this._map.createPane(this.options.pane);t.style.pointerEvents="none",t.style.zIndex=500}},getAttribution:function(){if(this.options.attribution)var t='<span class="esri-dynamic-attribution">'+this.options.attribution+"</span>";return t}});var ut=e.TileLayer.extend({options:{zoomOffsetAllowance:.1,errorTileUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAA1BMVEUzNDVszlHHAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAAAAAAAAAB6mUWpAAAADZJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7waBAAABw08RwAAAAABJRU5ErkJggg=="},statics:{MercatorZoomLevels:{0:156543.033928,1:78271.5169639999,2:39135.7584820001,3:19567.8792409999,4:9783.93962049996,5:4891.96981024998,6:2445.98490512499,7:1222.99245256249,8:611.49622628138,9:305.748113140558,10:152.874056570411,11:76.4370282850732,12:38.2185141425366,13:19.1092570712683,14:9.55462853563415,15:4.77731426794937,16:2.38865713397468,17:1.19432856685505,18:.597164283559817,19:.298582141647617,20:.14929107082381,21:.07464553541191,22:.0373227677059525,23:.0186613838529763}},initialize:function(t){t=k(t=e.Util.setOptions(this,t)),this.tileUrl=(t.proxy?t.proxy+"?":"")+t.url+"tile/{z}/{y}/{x}"+(t.requestParams&&Object.keys(t.requestParams).length>0?e.Util.getParamString(t.requestParams):""),-1!==t.url.indexOf("{s}")&&t.subdomains&&(t.url=t.url.replace("{s}",t.subdomains[0])),this.service=et(t),this.service.addEventParent(this),new RegExp(/tiles.arcgis(online)?\.com/g).test(t.url)&&(this.tileUrl=this.tileUrl.replace("://tiles","://tiles{s}"),t.subdomains=["1","2","3","4"]),this.options.token&&(this.tileUrl+="?token="+this.options.token),e.TileLayer.prototype.initialize.call(this,this.tileUrl,t)},getTileUrl:function(t){var i=this._getZoomForUrl();return e.Util.template(this.tileUrl,e.Util.extend({s:this._getSubdomain(t),x:t.x,y:t.y,z:this._lodMap&&this._lodMap[i]?this._lodMap[i]:i},this.options))},createTile:function(t,i){var s=document.createElement("img");return e.DomEvent.on(s,"load",e.Util.bind(this._tileOnLoad,this,i,s)),e.DomEvent.on(s,"error",e.Util.bind(this._tileOnError,this,i,s)),this.options.crossOrigin&&(s.crossOrigin=""),s.alt="",!this._lodMap||this._lodMap&&this._lodMap[this._getZoomForUrl()]?s.src=this.getTileUrl(t):this.once("lodmap",function(){s.src=this.getTileUrl(t)},this),s},onAdd:function(t){D(t),this._lodMap||this.metadata(function(i,s){if(!i&&s.spatialReference){var r=s.spatialReference.latestWkid||s.spatialReference.wkid;if(!this.options.attribution&&t.attributionControl&&s.copyrightText&&(this.options.attribution=s.copyrightText,t.attributionControl.addAttribution(this.getAttribution())),t.options.crs!==e.CRS.EPSG3857||102100!==r&&3857!==r)t.options.crs&&t.options.crs.code&&t.options.crs.code.indexOf(r)>-1||M("L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html");else{this._lodMap={};for(var n=s.tileInfo.lods,o=ut.MercatorZoomLevels,a=0;a<n.length;a++){var u=n[a];for(var l in o){var h=o[l];if(this._withinPercentage(u.resolution,h,this.options.zoomOffsetAllowance)){this._lodMap[l]=u.level;break}}}this.fire("lodmap")}}},this),e.TileLayer.prototype.onAdd.call(this,t)},metadata:function(t,e){return this.service.metadata(t,e),this},identify:function(){return this.service.identify()},find:function(){return this.service.find()},query:function(){return this.service.query()},authenticate:function(t){var e="?token="+t;return this.tileUrl=this.options.token?this.tileUrl.replace(/\?token=(.+)/g,e):this.tileUrl+e,this.options.token=t,this.service.authenticate(t),this},_withinPercentage:function(t,e,i){return Math.abs(t/e-1)<i}});var lt=e.ImageOverlay.extend({onAdd:function(t){this._topLeft=t.getPixelBounds().min,e.ImageOverlay.prototype.onAdd.call(this,t)},_reset:function(){this._map.options.crs===e.CRS.EPSG3857?e.ImageOverlay.prototype._reset.call(this):e.DomUtil.setPosition(this._image,this._topLeft.subtract(this._map.getPixelOrigin()))}}),ht=e.Layer.extend({options:{opacity:1,position:"front",f:"image",useCors:i,attribution:null,interactive:!1,alt:""},onAdd:function(t){D(t),this.options.zIndex&&(this.options.position=null),this._update=e.Util.throttle(this._update,this.options.updateInterval,this),t.on("moveend",this._update,this),this._currentImage&&this._currentImage._bounds.equals(this._map.getBounds())?t.addLayer(this._currentImage):this._currentImage&&(this._map.removeLayer(this._currentImage),this._currentImage=null),this._update(),this._popup&&(this._map.on("click",this._getPopupData,this),this._map.on("dblclick",this._resetPopupState,this)),this.metadata(function(e,i){!e&&!this.options.attribution&&t.attributionControl&&i.copyrightText&&(this.options.attribution=i.copyrightText,t.attributionControl.addAttribution(this.getAttribution()))},this)},onRemove:function(t){this._currentImage&&this._map.removeLayer(this._currentImage),this._popup&&(this._map.off("click",this._getPopupData,this),this._map.off("dblclick",this._resetPopupState,this)),this._map.off("moveend",this._update,this)},bindPopup:function(t,i){return this._shouldRenderPopup=!1,this._lastClick=!1,this._popup=e.popup(i),this._popupFunction=t,this._map&&(this._map.on("click",this._getPopupData,this),this._map.on("dblclick",this._resetPopupState,this)),this},unbindPopup:function(){return this._map&&(this._map.closePopup(this._popup),this._map.off("click",this._getPopupData,this),this._map.off("dblclick",this._resetPopupState,this)),this._popup=!1,this},bringToFront:function(){return this.options.position="front",this._currentImage&&(this._currentImage.bringToFront(),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this.options.position="back",this._currentImage&&(this._currentImage.bringToBack(),this._setAutoZIndex(Math.min)),this},setZIndex:function(t){return this.options.zIndex=t,this._currentImage&&this._currentImage.setZIndex(t),this},_setAutoZIndex:function(t){if(this._currentImage){for(var e,i=this._currentImage.getPane().children,s=-t(-1/0,1/0),r=0,n=i.length;r<n;r++)e=i[r].style.zIndex,i[r]!==this._currentImage._image&&e&&(s=t(s,+e));isFinite(s)&&(this.options.zIndex=s+t(-1,1),this.setZIndex(this.options.zIndex))}},getAttribution:function(){return this.options.attribution},getOpacity:function(){return this.options.opacity},setOpacity:function(t){return this.options.opacity=t,this._currentImage&&this._currentImage.setOpacity(t),this},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(t,e){return this.options.from=t,this.options.to=e,this._update(),this},metadata:function(t,e){return this.service.metadata(t,e),this},authenticate:function(t){return this.service.authenticate(t),this},redraw:function(){this._update()},_renderImage:function(t,e,i){if(this._map){if(i&&(t="data:"+i+";base64,"+t),!t)return;var s=new lt(t,e,{opacity:0,crossOrigin:this.options.useCors,alt:this.options.alt,pane:this.options.pane||this.getPane(),interactive:this.options.interactive}).addTo(this._map),r=function(t){if(s.off("error",r,this),this._map){var i=t.target,n=this._currentImage;i._bounds.equals(e)&&i._bounds.equals(this._map.getBounds())?(this._currentImage=i,"front"===this.options.position?this.bringToFront():"back"===this.options.position&&this.bringToBack(),this.options.zIndex&&this.setZIndex(this.options.zIndex),this._map&&this._currentImage._map?this._currentImage.setOpacity(this.options.opacity):this._currentImage._map.removeLayer(this._currentImage),n&&this._map&&this._map.removeLayer(n),n&&n._map&&n._map.removeLayer(n)):this._map.removeLayer(i)}this.fire("load",{bounds:e})};s.once("error",function(){this._map.removeLayer(s),this.fire("error"),s.off("load",r,this)},this),s.once("load",r,this),this.fire("loading",{bounds:e})}},_update:function(){if(this._map){var t=this._map.getZoom(),i=this._map.getBounds();if(!(this._animatingZoom||this._map._panTransition&&this._map._panTransition._inProgress))if(t>this.options.maxZoom||t<this.options.minZoom)this._currentImage&&(this._currentImage._map.removeLayer(this._currentImage),this._currentImage=null);else{var s=this._buildExportParams();e.Util.extend(s,this.options.requestParams),s?this._requestExport(s,i):this._currentImage&&(this._currentImage._map.removeLayer(this._currentImage),this._currentImage=null)}}},_renderPopup:function(t,i,s,r){if(t=e.latLng(t),this._shouldRenderPopup&&this._lastClick.equals(t)){var n=this._popupFunction(i,s,r);n&&this._popup.setLatLng(t).setContent(n).openOn(this._map)}},_resetPopupState:function(t){this._shouldRenderPopup=!1,this._lastClick=t.latlng},_calculateBbox:function(){var t=this._map.getPixelBounds(),i=this._map.unproject(t.getBottomLeft()),s=this._map.unproject(t.getTopRight()),r=this._map.options.crs.project(s),n=this._map.options.crs.project(i),o=e.bounds(r,n);return[o.getBottomLeft().x,o.getBottomLeft().y,o.getTopRight().x,o.getTopRight().y].join(",")},_calculateImageSize:function(){var t=this._map.getPixelBounds(),e=this._map.getSize(),i=this._map.unproject(t.getBottomLeft()),s=this._map.unproject(t.getTopRight()),r=this._map.latLngToLayerPoint(s).y,n=this._map.latLngToLayerPoint(i).y;return(r>0||n<e.y)&&(e.y=n-r),e.x+","+e.y}}),ct=ht.extend({options:{updateInterval:150,format:"jpgpng",transparent:!0,f:"image"},query:function(){return this.service.query()},identify:function(){return this.service.identify()},initialize:function(t){t=k(t),this.service=st(t),this.service.addEventParent(this),e.Util.setOptions(this,t)},setPixelType:function(t){return this.options.pixelType=t,this._update(),this},getPixelType:function(){return this.options.pixelType},setBandIds:function(t){return e.Util.isArray(t)?this.options.bandIds=t.join(","):this.options.bandIds=t.toString(),this._update(),this},getBandIds:function(){return this.options.bandIds},setNoData:function(t,i){return e.Util.isArray(t)?this.options.noData=t.join(","):this.options.noData=t.toString(),i&&(this.options.noDataInterpretation=i),this._update(),this},getNoData:function(){return this.options.noData},getNoDataInterpretation:function(){return this.options.noDataInterpretation},setRenderingRule:function(t){this.options.renderingRule=t,this._update()},getRenderingRule:function(){return this.options.renderingRule},setMosaicRule:function(t){this.options.mosaicRule=t,this._update()},getMosaicRule:function(){return this.options.mosaicRule},_getPopupData:function(t){var i=e.Util.bind(function(i,s,r){i||setTimeout(e.Util.bind(function(){this._renderPopup(t.latlng,i,s,r)},this),300)},this),s=this.identify().at(t.latlng);this.options.mosaicRule&&s.setMosaicRule(this.options.mosaicRule),s.run(i),this._shouldRenderPopup=!0,this._lastClick=t.latlng},_buildExportParams:function(){var t=parseInt(this._map.options.crs.code.split(":")[1],10),e={bbox:this._calculateBbox(),size:this._calculateImageSize(),format:this.options.format,transparent:this.options.transparent,bboxSR:t,imageSR:t};return this.options.from&&this.options.to&&(e.time=this.options.from.valueOf()+","+this.options.to.valueOf()),this.options.pixelType&&(e.pixelType=this.options.pixelType),this.options.interpolation&&(e.interpolation=this.options.interpolation),this.options.compressionQuality&&(e.compressionQuality=this.options.compressionQuality),this.options.bandIds&&(e.bandIds=this.options.bandIds),(0===this.options.noData||this.options.noData)&&(e.noData=this.options.noData),this.options.noDataInterpretation&&(e.noDataInterpretation=this.options.noDataInterpretation),this.service.options.token&&(e.token=this.service.options.token),this.options.renderingRule&&(e.renderingRule=JSON.stringify(this.options.renderingRule)),this.options.mosaicRule&&(e.mosaicRule=JSON.stringify(this.options.mosaicRule)),e},_requestExport:function(t,i){"json"===this.options.f?this.service.request("exportImage",t,function(t,e){t||(this.options.token&&(e.href+="?token="+this.options.token),this.options.proxy&&(e.href=this.options.proxy+"?"+e.href),this._renderImage(e.href,i))},this):(t.f="image",this._renderImage(this.options.url+"exportImage"+e.Util.getParamString(t),i))}});var pt=ht.extend({options:{updateInterval:150,layers:!1,layerDefs:!1,timeOptions:!1,format:"png24",transparent:!0,f:"json"},initialize:function(t){t=k(t),this.service=et(t),this.service.addEventParent(this),(t.proxy||t.token)&&"json"!==t.f&&(t.f="json"),e.Util.setOptions(this,t)},getDynamicLayers:function(){return this.options.dynamicLayers},setDynamicLayers:function(t){return this.options.dynamicLayers=t,this._update(),this},getLayers:function(){return this.options.layers},setLayers:function(t){return this.options.layers=t,this._update(),this},getLayerDefs:function(){return this.options.layerDefs},setLayerDefs:function(t){return this.options.layerDefs=t,this._update(),this},getTimeOptions:function(){return this.options.timeOptions},setTimeOptions:function(t){return this.options.timeOptions=t,this._update(),this},query:function(){return this.service.query()},identify:function(){return this.service.identify()},find:function(){return this.service.find()},_getPopupData:function(t){var i,s=e.Util.bind(function(i,s,r){i||setTimeout(e.Util.bind(function(){this._renderPopup(t.latlng,i,s,r)},this),300)},this);if((i=this.options.popup?this.options.popup.on(this._map).at(t.latlng):this.identify().on(this._map).at(t.latlng)).params.maxAllowableOffset||i.simplify(this._map,.5),this.options.popup&&this.options.popup.params&&this.options.popup.params.layers||(this.options.layers?i.layers("visible:"+this.options.layers.join(",")):i.layers("visible")),this.options.layerDefs&&"string"!=typeof this.options.layerDefs&&!i.params.layerDefs)for(var r in this.options.layerDefs)this.options.layerDefs.hasOwnProperty(r)&&i.layerDef(r,this.options.layerDefs[r]);i.run(s),this._shouldRenderPopup=!0,this._lastClick=t.latlng},_buildExportParams:function(){var t=parseInt(this._map.options.crs.code.split(":")[1],10),e={bbox:this._calculateBbox(),size:this._calculateImageSize(),dpi:96,format:this.options.format,transparent:this.options.transparent,bboxSR:t,imageSR:t};if(this.options.dynamicLayers&&(e.dynamicLayers=this.options.dynamicLayers),this.options.layers){if(0===this.options.layers.length)return;e.layers="show:"+this.options.layers.join(",")}return this.options.layerDefs&&(e.layerDefs="string"==typeof this.options.layerDefs?this.options.layerDefs:JSON.stringify(this.options.layerDefs)),this.options.timeOptions&&(e.timeOptions=JSON.stringify(this.options.timeOptions)),this.options.from&&this.options.to&&(e.time=this.options.from.valueOf()+","+this.options.to.valueOf()),this.service.options.token&&(e.token=this.service.options.token),this.options.proxy&&(e.proxy=this.options.proxy),this.options.disableCache&&(e._ts=Date.now()),e},_requestExport:function(t,i){"json"===this.options.f?this.service.request("export",t,function(t,e){t||(this.options.token&&(e.href+="?token="+this.options.token),this.options.proxy&&(e.href=this.options.proxy+"?"+e.href),e.href?this._renderImage(e.href,i):this._renderImage(e.imageData,i,e.contentType))},this):(t.f="image",this._renderImage(this.options.url+"export"+e.Util.getParamString(t),i))}});var dt=e.Layer.extend({options:{cellSize:512,updateInterval:150},initialize:function(t){t=e.setOptions(this,t),this._zooming=!1},onAdd:function(t){this._map=t,this._update=e.Util.throttle(this._update,this.options.updateInterval,this),this._reset(),this._update()},onRemove:function(){this._map.removeEventListener(this.getEvents(),this),this._removeCells()},getEvents:function(){return{moveend:this._update,zoomstart:this._zoomstart,zoomend:this._reset}},addTo:function(t){return t.addLayer(this),this},removeFrom:function(t){return t.removeLayer(this),this},_zoomstart:function(){this._zooming=!0},_reset:function(){this._removeCells(),this._cells={},this._activeCells={},this._cellsToLoad=0,this._cellsTotal=0,this._cellNumBounds=this._getCellNumBounds(),this._resetWrap(),this._zooming=!1},_resetWrap:function(){var t=this._map,e=t.options.crs;if(!e.infinite){var i=this._getCellSize();e.wrapLng&&(this._wrapLng=[Math.floor(t.project([0,e.wrapLng[0]]).x/i),Math.ceil(t.project([0,e.wrapLng[1]]).x/i)]),e.wrapLat&&(this._wrapLat=[Math.floor(t.project([e.wrapLat[0],0]).y/i),Math.ceil(t.project([e.wrapLat[1],0]).y/i)])}},_getCellSize:function(){return this.options.cellSize},_update:function(){if(this._map){var t=this._map.getPixelBounds(),i=this._getCellSize(),s=e.bounds(t.min.divideBy(i).floor(),t.max.divideBy(i).floor());this._removeOtherCells(s),this._addCells(s),this.fire("cellsupdated")}},_addCells:function(t){var i,s,r,n=[],o=t.getCenter(),a=this._map.getZoom();for(i=t.min.y;i<=t.max.y;i++)for(s=t.min.x;s<=t.max.x;s++)(r=e.point(s,i)).z=a,this._isValidCell(r)&&n.push(r);var u=n.length;if(0!==u)for(this._cellsToLoad+=u,this._cellsTotal+=u,n.sort(function(t,e){return t.distanceTo(o)-e.distanceTo(o)}),s=0;s<u;s++)this._addCell(n[s])},_isValidCell:function(t){var i=this._map.options.crs;if(!i.infinite){var s=this._cellNumBounds;if(!i.wrapLng&&(t.x<s.min.x||t.x>s.max.x)||!i.wrapLat&&(t.y<s.min.y||t.y>s.max.y))return!1}if(!this.options.bounds)return!0;var r=this._cellCoordsToBounds(t);return e.latLngBounds(this.options.bounds).intersects(r)},_cellCoordsToBounds:function(t){var i=this._map,s=this.options.cellSize,r=t.multiplyBy(s),n=r.add([s,s]),o=i.wrapLatLng(i.unproject(r,t.z)),a=i.wrapLatLng(i.unproject(n,t.z));return e.latLngBounds(o,a)},_cellCoordsToKey:function(t){return t.x+":"+t.y},_keyToCellCoords:function(t){var i=t.split(":"),s=parseInt(i[0],10),r=parseInt(i[1],10);return e.point(s,r)},_removeOtherCells:function(t){for(var e in this._cells)t.contains(this._keyToCellCoords(e))||this._removeCell(e)},_removeCell:function(t){var e=this._activeCells[t];e&&(delete this._activeCells[t],this.cellLeave&&this.cellLeave(e.bounds,e.coords),this.fire("cellleave",{bounds:e.bounds,coords:e.coords}))},_removeCells:function(){for(var t in this._cells){var e=this._cells[t].bounds,i=this._cells[t].coords;this.cellLeave&&this.cellLeave(e,i),this.fire("cellleave",{bounds:e,coords:i})}},_addCell:function(t){this._wrapCoords(t);var e=this._cellCoordsToKey(t),i=this._cells[e];i&&!this._activeCells[e]&&(this.cellEnter&&this.cellEnter(i.bounds,t),this.fire("cellenter",{bounds:i.bounds,coords:t}),this._activeCells[e]=i),i||(i={coords:t,bounds:this._cellCoordsToBounds(t)},this._cells[e]=i,this._activeCells[e]=i,this.createCell&&this.createCell(i.bounds,t),this.fire("cellcreate",{bounds:i.bounds,coords:t}))},_wrapCoords:function(t){t.x=this._wrapLng?e.Util.wrapNum(t.x,this._wrapLng):t.x,t.y=this._wrapLat?e.Util.wrapNum(t.y,this._wrapLat):t.y},_getCellNumBounds:function(){var t=this._map.getPixelWorldBounds(),i=this._getCellSize();return t?e.bounds(t.min.divideBy(i).floor(),t.max.divideBy(i).ceil().subtract([1,1])):null}});function mt(t){this.values=[].concat(t||[])}mt.prototype.query=function(t){var e=this.getIndex(t);return this.values[e]},mt.prototype.getIndex=function(t){this.dirty&&this.sort();for(var e,i,s=0,r=this.values.length-1;s<=r;)if(e=(s+r)/2|0,+(i=this.values[Math.round(e)]).value<+t)s=e+1;else{if(!(+i.value>+t))return e;r=e-1}return Math.abs(~r)},mt.prototype.between=function(t,e){var i=this.getIndex(t),s=this.getIndex(e);if(0===i&&0===s)return[];for(;this.values[i-1]&&this.values[i-1].value===t;)i--;for(;this.values[s+1]&&this.values[s+1].value===e;)s++;return this.values[s]&&this.values[s].value===e&&this.values[s+1]&&s++,this.values.slice(i,s)},mt.prototype.insert=function(t){return this.values.splice(this.getIndex(t.value),0,t),this},mt.prototype.bulkAdd=function(t,e){return this.values=this.values.concat([].concat(t||[])),e?this.sort():this.dirty=!0,this},mt.prototype.sort=function(){return this.values.sort(function(t,e){return+e.value-+t.value}).reverse(),this.dirty=!1,this};var ft=dt.extend({options:{attribution:null,where:"1=1",fields:["*"],from:!1,to:!1,timeField:!1,timeFilterMode:"server",simplifyFactor:0,precision:6},initialize:function(t){if(dt.prototype.initialize.call(this,t),t=k(t),t=e.Util.setOptions(this,t),this.service=nt(t),this.service.addEventParent(this),"*"!==this.options.fields[0]){for(var i=!1,s=0;s<this.options.fields.length;s++)this.options.fields[s].match(/^(OBJECTID|FID|OID|ID)$/i)&&(i=!0);!1===i&&M("no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly.")}this.options.timeField.start&&this.options.timeField.end?(this._startTimeIndex=new mt,this._endTimeIndex=new mt):this.options.timeField&&(this._timeIndex=new mt),this._cache={},this._currentSnapshot=[],this._activeRequests=0},onAdd:function(t){return D(t),this.service.metadata(function(e,i){if(!e){var s=i.supportedQueryFormats,r=!1;!1===this.service.options.isModern&&(r=!0),!r&&s&&-1!==s.indexOf("geoJSON")&&(this.service.options.isModern=!0),i.objectIdField&&(this.service.options.idAttribute=i.objectIdField),!this.options.attribution&&t.attributionControl&&i.copyrightText&&(this.options.attribution=i.copyrightText,t.attributionControl.addAttribution(this.getAttribution()))}},this),t.on("zoomend",this._handleZoomChange,this),dt.prototype.onAdd.call(this,t)},onRemove:function(t){return t.off("zoomend",this._handleZoomChange,this),dt.prototype.onRemove.call(this,t)},getAttribution:function(){return this.options.attribution},createCell:function(t,e){this._visibleZoom()&&this._requestFeatures(t,e)},_requestFeatures:function(t,i,s){return this._activeRequests++,1===this._activeRequests&&this.fire("loading",{bounds:t},!0),this._buildQuery(t).run(function(r,n,o){o&&o.exceededTransferLimit&&this.fire("drawlimitexceeded"),!r&&n&&n.features.length&&e.Util.requestAnimFrame(e.Util.bind(function(){this._addFeatures(n.features,i),this._postProcessFeatures(t)},this)),r||!n||n.features.length||this._postProcessFeatures(t),r&&this._postProcessFeatures(t),s&&s.call(this,r,n)},this)},_postProcessFeatures:function(t){this._activeRequests--,this._activeRequests<=0&&this.fire("load",{bounds:t})},_cacheKey:function(t){return t.z+":"+t.x+":"+t.y},_addFeatures:function(t,e){var i=this._cacheKey(e);this._cache[i]=this._cache[i]||[];for(var s=t.length-1;s>=0;s--){var r=t[s].id;-1===this._currentSnapshot.indexOf(r)&&this._currentSnapshot.push(r),-1===this._cache[i].indexOf(r)&&this._cache[i].push(r)}this.options.timeField&&this._buildTimeIndexes(t),this.createLayers(t)},_buildQuery:function(t){var i=this.service.query().intersects(t).where(this.options.where).fields(this.options.fields).precision(this.options.precision);return this.options.requestParams&&e.Util.extend(i.params,this.options.requestParams),this.options.simplifyFactor&&i.simplify(this._map,this.options.simplifyFactor),"server"===this.options.timeFilterMode&&this.options.from&&this.options.to&&i.between(this.options.from,this.options.to),i},setWhere:function(t,i,s){this.options.where=t&&t.length?t:"1=1";for(var r=[],n=[],o=0,a=null,u=e.Util.bind(function(t,u){if(t&&(a=t),u)for(var l=u.features.length-1;l>=0;l--)n.push(u.features[l].id);--o<=0&&this._visibleZoom()&&(this._currentSnapshot=n,e.Util.requestAnimFrame(e.Util.bind(function(){this.removeLayers(r),this.addLayers(n),i&&i.call(s,a)},this)))},this),l=this._currentSnapshot.length-1;l>=0;l--)r.push(this._currentSnapshot[l]);for(var h in this._activeCells){o++;var c=this._keyToCellCoords(h),p=this._cellCoordsToBounds(c);this._requestFeatures(p,h,u)}return this},getWhere:function(){return this.options.where},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(t,i,s,r){var n=this.options.from,o=this.options.to,a=0,u=null,l=e.Util.bind(function(e){e&&(u=e),this._filterExistingFeatures(n,o,t,i),a--,s&&a<=0&&s.call(r,u)},this);if(this.options.from=t,this.options.to=i,this._filterExistingFeatures(n,o,t,i),"server"===this.options.timeFilterMode)for(var h in this._activeCells){a++;var c=this._keyToCellCoords(h),p=this._cellCoordsToBounds(c);this._requestFeatures(p,h,l)}return this},refresh:function(){for(var t in this._activeCells){var e=this._keyToCellCoords(t),i=this._cellCoordsToBounds(e);this._requestFeatures(i,t)}this.redraw&&this.once("load",function(){this.eachFeature(function(t){this._redraw(t.feature.id)},this)},this)},_filterExistingFeatures:function(t,i,s,r){var n=t&&i?this._getFeaturesInTimeRange(t,i):this._currentSnapshot,o=this._getFeaturesInTimeRange(s,r);if(o.indexOf)for(var a=0;a<o.length;a++){var u=n.indexOf(o[a]);u>=0&&n.splice(u,1)}e.Util.requestAnimFrame(e.Util.bind(function(){this.removeLayers(n),this.addLayers(o)},this))},_getFeaturesInTimeRange:function(t,e){var i,s=[];if(this.options.timeField.start&&this.options.timeField.end){var r=this._startTimeIndex.between(t,e),n=this._endTimeIndex.between(t,e);i=r.concat(n)}else i=this._timeIndex.between(t,e);for(var o=i.length-1;o>=0;o--)s.push(i[o].id);return s},_buildTimeIndexes:function(t){var e,i;if(this.options.timeField.start&&this.options.timeField.end){var s=[],r=[];for(e=t.length-1;e>=0;e--)i=t[e],s.push({id:i.id,value:new Date(i.properties[this.options.timeField.start])}),r.push({id:i.id,value:new Date(i.properties[this.options.timeField.end])});this._startTimeIndex.bulkAdd(s),this._endTimeIndex.bulkAdd(r)}else{var n=[];for(e=t.length-1;e>=0;e--)i=t[e],n.push({id:i.id,value:new Date(i.properties[this.options.timeField])});this._timeIndex.bulkAdd(n)}},_featureWithinTimeRange:function(t){if(!this.options.from||!this.options.to)return!0;var e=+this.options.from.valueOf(),i=+this.options.to.valueOf();if("string"==typeof this.options.timeField){var s=+t.properties[this.options.timeField];return s>=e&&s<=i}if(this.options.timeField.start&&this.options.timeField.end){var r=+t.properties[this.options.timeField.start],n=+t.properties[this.options.timeField.end];return r>=e&&r<=i||n>=e&&n<=i}},_visibleZoom:function(){if(!this._map)return!1;var t=this._map.getZoom();return!(t>this.options.maxZoom||t<this.options.minZoom)},_handleZoomChange:function(){if(this._visibleZoom())for(var t in this._activeCells){var e=this._activeCells[t].coords,i=this._cacheKey(e);this._cache[i]&&this.addLayers(this._cache[i])}else this.removeLayers(this._currentSnapshot),this._currentSnapshot=[]},authenticate:function(t){return this.service.authenticate(t),this},metadata:function(t,e){return this.service.metadata(t,e),this},query:function(){return this.service.query()},_getMetadata:function(t){this._metadata?t(void 0,this._metadata):this.metadata(e.Util.bind(function(e,i){this._metadata=i,t(e,this._metadata)},this))},addFeature:function(t,e,i){this.addFeatures(t,e,i)},addFeatures:function(t,i,s){this._getMetadata(e.Util.bind(function(r,n){if(r)i&&i.call(this,r,null);else{var o=t.features?t.features:[t];this.service.addFeatures(t,e.Util.bind(function(t,e){if(!t){for(var r=o.length-1;r>=0;r--)o[r].properties[n.objectIdField]=o.length>1?e[r].objectId:e.objectId,o[r].id=o.length>1?e[r].objectId:e.objectId;this.createLayers(o)}i&&i.call(s,t,e)},this))}},this))},updateFeature:function(t,e,i){this.updateFeatures(t,e,i)},updateFeatures:function(t,e,i){var s=t.features?t.features:[t];this.service.updateFeatures(t,function(t,r){if(!t){for(var n=s.length-1;n>=0;n--)this.removeLayers([s[n].id],!0);this.createLayers(s)}e&&e.call(i,t,r)},this)},deleteFeature:function(t,e,i){this.deleteFeatures(t,e,i)},deleteFeatures:function(t,e,i){return this.service.deleteFeatures(t,function(t,s){var r=s.length?s:[s];if(!t&&r.length>0)for(var n=r.length-1;n>=0;n--)this.removeLayers([r[n].objectId],!0);e&&e.call(i,t,s)},this)}}),yt=ft.extend({options:{cacheLayers:!0},initialize:function(t){ft.prototype.initialize.call(this,t),this._originalStyle=this.options.style,this._layers={}},onRemove:function(t){for(var e in this._layers)t.removeLayer(this._layers[e]),this.fire("removefeature",{feature:this._layers[e].feature,permanent:!1},!0);return ft.prototype.onRemove.call(this,t)},createNewLayer:function(t){var i=e.GeoJSON.geometryToLayer(t,this.options);return i&&(i.defaultOptions=i.options),i},_updateLayer:function(t,i){var s=[],r=this.options.coordsToLatLng||e.GeoJSON.coordsToLatLng;switch(i.properties&&(t.feature.properties=i.properties),i.geometry.type){case"Point":s=e.GeoJSON.coordsToLatLng(i.geometry.coordinates),t.setLatLng(s);break;case"LineString":s=e.GeoJSON.coordsToLatLngs(i.geometry.coordinates,0,r),t.setLatLngs(s);break;case"MultiLineString":case"Polygon":s=e.GeoJSON.coordsToLatLngs(i.geometry.coordinates,1,r),t.setLatLngs(s);break;case"MultiPolygon":s=e.GeoJSON.coordsToLatLngs(i.geometry.coordinates,2,r),t.setLatLngs(s)}},createLayers:function(t){for(var e=t.length-1;e>=0;e--){var i,s=t[e],r=this._layers[s.id];this._visibleZoom()&&r&&!this._map.hasLayer(r)&&(this._map.addLayer(r),this.fire("addfeature",{feature:r.feature},!0)),r&&this.options.simplifyFactor>0&&(r.setLatLngs||r.setLatLng)&&this._updateLayer(r,s),r||((i=this.createNewLayer(s))?(i.feature=s,i.addEventParent(this),this.options.onEachFeature&&this.options.onEachFeature(i.feature,i),this._layers[i.feature.id]=i,this.setFeatureStyle(i.feature.id,this.options.style),this.fire("createfeature",{feature:i.feature},!0),this._visibleZoom()&&(!this.options.timeField||this.options.timeField&&this._featureWithinTimeRange(s))&&this._map.addLayer(i)):M("invalid GeoJSON encountered"))}},addLayers:function(t){for(var e=t.length-1;e>=0;e--){var i=this._layers[t[e]];i&&this._map.addLayer(i)}},removeLayers:function(t,e){for(var i=t.length-1;i>=0;i--){var s=t[i],r=this._layers[s];r&&(this.fire("removefeature",{feature:r.feature,permanent:e},!0),this._map.removeLayer(r)),r&&e&&delete this._layers[s]}},cellEnter:function(t,i){this._visibleZoom()&&!this._zooming&&this._map&&e.Util.requestAnimFrame(e.Util.bind(function(){var t=this._cacheKey(i),e=this._cellCoordsToKey(i),s=this._cache[t];this._activeCells[e]&&s&&this.addLayers(s)},this))},cellLeave:function(t,i){this._zooming||e.Util.requestAnimFrame(e.Util.bind(function(){if(this._map){var t=this._cacheKey(i),e=this._cellCoordsToKey(i),s=this._cache[t],r=this._map.getBounds();if(!this._activeCells[e]&&s){for(var n=!0,o=0;o<s.length;o++){var a=this._layers[s[o]];a&&a.getBounds&&r.intersects(a.getBounds())&&(n=!1)}n&&this.removeLayers(s,!this.options.cacheLayers),!this.options.cacheLayers&&n&&(delete this._cache[t],delete this._cells[e],delete this._activeCells[e])}}},this))},resetStyle:function(){return this.options.style=this._originalStyle,this.eachFeature(function(t){this.resetFeatureStyle(t.feature.id)},this),this},setStyle:function(t){return this.options.style=t,this.eachFeature(function(e){this.setFeatureStyle(e.feature.id,t)},this),this},resetFeatureStyle:function(t){var i=this._layers[t],s=this._originalStyle||e.Path.prototype.options;return i&&(e.Util.extend(i.options,i.defaultOptions),this.setFeatureStyle(t,s)),this},setFeatureStyle:function(t,e){var i=this._layers[t];return"function"==typeof e&&(e=e(i.feature)),i.setStyle&&i.setStyle(e),this},eachActiveFeature:function(t,e){if(this._map){var i=this._map.getBounds();for(var s in this._layers)-1!==this._currentSnapshot.indexOf(this._layers[s].feature.id)&&("function"==typeof this._layers[s].getLatLng&&i.contains(this._layers[s].getLatLng())?t.call(e,this._layers[s]):"function"==typeof this._layers[s].getBounds&&i.intersects(this._layers[s].getBounds())&&t.call(e,this._layers[s]))}return this},eachFeature:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getFeature:function(t){return this._layers[t]},bringToBack:function(){this.eachFeature(function(t){t.bringToBack&&t.bringToBack()})},bringToFront:function(){this.eachFeature(function(t){t.bringToFront&&t.bringToFront()})},redraw:function(t){return t&&this._redraw(t),this},_redraw:function(t){var i=this._layers[t],s=i.feature;if(i&&i.setIcon&&this.options.pointToLayer&&this.options.pointToLayer){var r=this.options.pointToLayer(s,e.latLng(s.geometry.coordinates[1],s.geometry.coordinates[0])).options.icon;i.setIcon(r)}if(i&&i.setStyle&&this.options.pointToLayer){var n=this.options.pointToLayer(s,e.latLng(s.geometry.coordinates[1],s.geometry.coordinates[0])).options;this.setFeatureStyle(s.id,n)}i&&i.setStyle&&this.options.style&&this.resetStyle(s.id)}});t.VERSION="2.2.3",t.Support=r,t.options=n,t.Util=N,t.get=d,t.post=l,t.request=c,t.Task=Z,t.task=function(t){return t=k(t),new Z(t)},t.Query=j,t.query=W,t.Find=J,t.find=Q,t.Identify=V,t.identify=function(t){return new V(t)},t.IdentifyFeatures=H,t.identifyFeatures=K,t.IdentifyImage=X,t.identifyImage=$,t.Service=Y,t.service=function(t){return t=k(t),new Y(t)},t.MapService=tt,t.mapService=et,t.ImageService=it,t.imageService=st,t.FeatureLayerService=rt,t.featureLayerService=nt,t.BasemapLayer=at,t.basemapLayer=function(t,e){return new at(t,e)},t.TiledMapLayer=ut,t.tiledMapLayer=function(t,e){return new ut(t,e)},t.RasterLayer=ht,t.ImageMapLayer=ct,t.imageMapLayer=function(t,e){return new ct(t,e)},t.DynamicMapLayer=pt,t.dynamicMapLayer=function(t,e){return new pt(t,e)},t.FeatureManager=ft,t.FeatureLayer=yt,t.featureLayer=function(t){return new yt(t)},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=esri-leaflet.js.map
;
///<jscompress sourcefile="leaflet.markercluster.js" />
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e.Leaflet=e.Leaflet||{},e.Leaflet.markercluster=e.Leaflet.markercluster||{}))}(this,function(e){"use strict";var t=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(e){L.Util.setOptions(this,e),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var t=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,t?this._withAnimation:this._noAnimation),this._markerCluster=t?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(e){if(e instanceof L.LayerGroup)return this.addLayers([e]);if(!e.getLatLng)return this._nonPointGroup.addLayer(e),this.fire("layeradd",{layer:e}),this;if(!this._map)return this._needsClustering.push(e),this.fire("layeradd",{layer:e}),this;if(this.hasLayer(e))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(e,this._maxZoom),this.fire("layeradd",{layer:e}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var t=e,i=this._zoom;if(e.__parent)for(;t.__parent._zoom>=i;)t=t.__parent;return this._currentShownBounds.contains(t.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(e,t):this._animationAddLayerNonAnimated(e,t)),this},removeLayer:function(e){return e instanceof L.LayerGroup?this.removeLayers([e]):e.getLatLng?this._map?e.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(e)),this._removeLayer(e,!0),this.fire("layerremove",{layer:e}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),e.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(e)&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,e)&&this.hasLayer(e)&&this._needsRemoving.push({layer:e,latlng:e._latlng}),this.fire("layerremove",{layer:e}),this):(this._nonPointGroup.removeLayer(e),this.fire("layerremove",{layer:e}),this)},addLayers:function(e,t){if(!L.Util.isArray(e))return this.addLayer(e);var i,n=this._featureGroup,r=this._nonPointGroup,s=this.options.chunkedLoading,o=this.options.chunkInterval,a=this.options.chunkProgress,h=e.length,l=0,u=!0;if(this._map){var _=(new Date).getTime(),d=L.bind(function(){for(var c=(new Date).getTime();h>l;l++){if(s&&0===l%200){var p=(new Date).getTime()-c;if(p>o)break}if(i=e[l],i instanceof L.LayerGroup)u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(i,e),h=e.length;else if(i.getLatLng){if(!this.hasLayer(i)&&(this._addLayer(i,this._maxZoom),t||this.fire("layeradd",{layer:i}),i.__parent&&2===i.__parent.getChildCount())){var f=i.__parent.getAllChildMarkers(),m=f[0]===i?f[1]:f[0];n.removeLayer(m)}}else r.addLayer(i),t||this.fire("layeradd",{layer:i})}a&&a(l,h,(new Date).getTime()-_),l===h?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(d,this.options.chunkDelay)},this);d()}else for(var c=this._needsClustering;h>l;l++)i=e[l],i instanceof L.LayerGroup?(u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(i,e),h=e.length):i.getLatLng?this.hasLayer(i)||c.push(i):r.addLayer(i);return this},removeLayers:function(e){var t,i,n=e.length,r=this._featureGroup,s=this._nonPointGroup,o=!0;if(!this._map){for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):(this._arraySplice(this._needsClustering,i),s.removeLayer(i),this.hasLayer(i)&&this._needsRemoving.push({layer:i,latlng:i._latlng}),this.fire("layerremove",{layer:i}));return this}if(this._unspiderfy){this._unspiderfy();var a=e.slice(),h=n;for(t=0;h>t;t++)i=a[t],i instanceof L.LayerGroup?(this._extractNonGroupLayers(i,a),h=a.length):this._unspiderfyLayer(i)}for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):i.__parent?(this._removeLayer(i,!0,!0),this.fire("layerremove",{layer:i}),r.hasLayer(i)&&(r.removeLayer(i),i.clusterShow&&i.clusterShow())):(s.removeLayer(i),this.fire("layerremove",{layer:i}));return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(e){e.off(this._childMarkerEventHandlers,this),delete e.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var e=new L.LatLngBounds;this._topClusterLevel&&e.extend(this._topClusterLevel._bounds);for(var t=this._needsClustering.length-1;t>=0;t--)e.extend(this._needsClustering[t].getLatLng());return e.extend(this._nonPointGroup.getBounds()),e},eachLayer:function(e,t){var i,n,r,s=this._needsClustering.slice(),o=this._needsRemoving;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(s),n=s.length-1;n>=0;n--){for(i=!0,r=o.length-1;r>=0;r--)if(o[r].layer===s[n]){i=!1;break}i&&e.call(t,s[n])}this._nonPointGroup.eachLayer(e,t)},getLayers:function(){var e=[];return this.eachLayer(function(t){e.push(t)}),e},getLayer:function(e){var t=null;return e=parseInt(e,10),this.eachLayer(function(i){L.stamp(i)===e&&(t=i)}),t},hasLayer:function(e){if(!e)return!1;var t,i=this._needsClustering;for(t=i.length-1;t>=0;t--)if(i[t]===e)return!0;for(i=this._needsRemoving,t=i.length-1;t>=0;t--)if(i[t].layer===e)return!1;return!(!e.__parent||e.__parent._group!==this)||this._nonPointGroup.hasLayer(e)},zoomToShowLayer:function(e,t){"function"!=typeof t&&(t=function(){});var i=function(){!e._icon&&!e.__parent._icon||this._inZoomAnimation||(this._map.off("moveend",i,this),this.off("animationend",i,this),e._icon?t():e.__parent._icon&&(this.once("spiderfied",t,this),e.__parent.spiderfy()))};e._icon&&this._map.getBounds().contains(e.getLatLng())?t():e.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",i,this),this._map.panTo(e.getLatLng())):(this._map.on("moveend",i,this),this.on("animationend",i,this),e.__parent.zoomToBounds())},onAdd:function(e){this._map=e;var t,i,n;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(e),this._nonPointGroup.addTo(e),this._gridClusters||this._generateInitialClusters(),this._maxLat=e.options.crs.projection.MAX_LATITUDE,t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],n.newlatlng=n.layer._latlng,n.layer._latlng=n.latlng;for(t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],this._removeLayer(n.layer,!0),n.layer._latlng=n.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i,!0)},onRemove:function(e){e.off("zoomend",this._zoomEnd,this),e.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(e){for(var t=e;t&&!t._icon;)t=t.__parent;return t||null},_arraySplice:function(e,t){for(var i=e.length-1;i>=0;i--)if(e[i]===t)return e.splice(i,1),!0},_removeFromGridUnclustered:function(e,t){for(var i=this._map,n=this._gridUnclustered,r=Math.floor(this._map.getMinZoom());t>=r&&n[t].removeObject(e,i.project(e.getLatLng(),t));t--);},_childMarkerDragStart:function(e){e.target.__dragStart=e.target._latlng},_childMarkerMoved:function(e){if(!this._ignoreMove&&!e.target.__dragStart){var t=e.target._popup&&e.target._popup.isOpen();this._moveChild(e.target,e.oldLatLng,e.latlng),t&&e.target.openPopup()}},_moveChild:function(e,t,i){e._latlng=t,this.removeLayer(e),e._latlng=i,this.addLayer(e)},_childMarkerDragEnd:function(e){var t=e.target.__dragStart;delete e.target.__dragStart,t&&this._moveChild(e.target,t,e.target._latlng)},_removeLayer:function(e,t,i){var n=this._gridClusters,r=this._gridUnclustered,s=this._featureGroup,o=this._map,a=Math.floor(this._map.getMinZoom());t&&this._removeFromGridUnclustered(e,this._maxZoom);var h,l=e.__parent,u=l._markers;for(this._arraySplice(u,e);l&&(l._childCount--,l._boundsNeedUpdate=!0,!(l._zoom<a));)t&&l._childCount<=1?(h=l._markers[0]===e?l._markers[1]:l._markers[0],n[l._zoom].removeObject(l,o.project(l._cLatLng,l._zoom)),r[l._zoom].addObject(h,o.project(h.getLatLng(),l._zoom)),this._arraySplice(l.__parent._childClusters,l),l.__parent._markers.push(h),h.__parent=l.__parent,l._icon&&(s.removeLayer(l),i||s.addLayer(h))):l._iconNeedsUpdate=!0,l=l.__parent;delete e.__parent},_isOrIsParent:function(e,t){for(;t;){if(e===t)return!0;t=t.parentNode}return!1},fire:function(e,t,i){if(t&&t.layer instanceof L.MarkerCluster){if(t.originalEvent&&this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget))return;e="cluster"+e}L.FeatureGroup.prototype.fire.call(this,e,t,i)},listens:function(e,t){return L.FeatureGroup.prototype.listens.call(this,e,t)||L.FeatureGroup.prototype.listens.call(this,"cluster"+e,t)},_defaultIconCreateFunction:function(e){var t=e.getChildCount(),i=" marker-cluster-";return i+=10>t?"small":100>t?"medium":"large",new L.DivIcon({html:"<div><span>"+t+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var e=this._map,t=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(t||n)&&this.on("clusterclick",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),e.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(e){for(var t=e.layer,i=t;1===i._childClusters.length;)i=i._childClusters[0];i._zoom===this._maxZoom&&i._childCount===t._childCount&&this.options.spiderfyOnMaxZoom?t.spiderfy():this.options.zoomToBoundsOnClick&&t.zoomToBounds(),e.originalEvent&&13===e.originalEvent.keyCode&&this._map._container.focus()},_showCoverage:function(e){var t=this._map;this._inZoomAnimation||(this._shownPolygon&&t.removeLayer(this._shownPolygon),e.layer.getChildCount()>2&&e.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(e.layer.getConvexHull(),this.options.polygonOptions),t.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var e=this.options.spiderfyOnMaxZoom,t=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(e||i)&&this.off("clusterclick",this._zoomOrSpiderfy,this),t&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var e=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),e),this._currentShownBounds=e}},_generateInitialClusters:function(){var e=Math.ceil(this._map.getMaxZoom()),t=Math.floor(this._map.getMinZoom()),i=this.options.maxClusterRadius,n=i;"function"!=typeof i&&(n=function(){return i}),null!==this.options.disableClusteringAtZoom&&(e=this.options.disableClusteringAtZoom-1),this._maxZoom=e,this._gridClusters={},this._gridUnclustered={};for(var r=e;r>=t;r--)this._gridClusters[r]=new L.DistanceGrid(n(r)),this._gridUnclustered[r]=new L.DistanceGrid(n(r));this._topClusterLevel=new this._markerCluster(this,t-1)},_addLayer:function(e,t){var i,n,r=this._gridClusters,s=this._gridUnclustered,o=Math.floor(this._map.getMinZoom());for(this.options.singleMarkerMode&&this._overrideMarkerIcon(e),e.on(this._childMarkerEventHandlers,this);t>=o;t--){i=this._map.project(e.getLatLng(),t);var a=r[t].getNearObject(i);if(a)return a._addChild(e),e.__parent=a,void 0;if(a=s[t].getNearObject(i)){var h=a.__parent;h&&this._removeLayer(a,!1);var l=new this._markerCluster(this,t,a,e);r[t].addObject(l,this._map.project(l._cLatLng,t)),a.__parent=l,e.__parent=l;var u=l;for(n=t-1;n>h._zoom;n--)u=new this._markerCluster(this,n,u),r[n].addObject(u,this._map.project(a.getLatLng(),n));return h._addChild(u),this._removeFromGridUnclustered(a,t),void 0}s[t].addObject(e,i)}this._topClusterLevel._addChild(e),e.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(e){e instanceof L.MarkerCluster&&e._iconNeedsUpdate&&e._updateIcon()})},_enqueue:function(e){this._queue.push(e),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var e=0;e<this._queue.length;e++)this._queue[e].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var e=Math.round(this._map._zoom);this._processQueue(),this._zoom<e&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,e)):this._zoom>e?(this._animationStart(),this._animationZoomOut(this._zoom,e)):this._moveEnd()},_getExpandedVisibleBounds:function(){return this.options.removeOutsideVisibleBounds?L.Browser.mobile?this._checkBoundsMaxLat(this._map.getBounds()):this._checkBoundsMaxLat(this._map.getBounds().pad(1)):this._mapBoundsInfinite},_checkBoundsMaxLat:function(e){var t=this._maxLat;return void 0!==t&&(e.getNorth()>=t&&(e._northEast.lat=1/0),e.getSouth()<=-t&&(e._southWest.lat=-1/0)),e},_animationAddLayerNonAnimated:function(e,t){if(t===e)this._featureGroup.addLayer(e);else if(2===t._childCount){t._addToMap();var i=t.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else t._updateIcon()},_extractNonGroupLayers:function(e,t){var i,n=e.getLayers(),r=0;for(t=t||[];r<n.length;r++)i=n[r],i instanceof L.LayerGroup?this._extractNonGroupLayers(i,t):t.push(i);return t},_overrideMarkerIcon:function(e){var t=e.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[e]}});return t}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(e,t){this._animationAddLayerNonAnimated(e,t)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(e,t){var i,n=this._getExpandedVisibleBounds(),r=this._featureGroup,s=Math.floor(this._map.getMinZoom());this._ignoreMove=!0,this._topClusterLevel._recursively(n,e,s,function(s){var o,a=s._latlng,h=s._markers;for(n.contains(a)||(a=null),s._isSingleParent()&&e+1===t?(r.removeLayer(s),s._recursivelyAddChildrenToMap(null,t,n)):(s.clusterHide(),s._recursivelyAddChildrenToMap(a,t,n)),i=h.length-1;i>=0;i--)o=h[i],n.contains(o._latlng)||r.removeLayer(o)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,t),r.eachLayer(function(e){e instanceof L.MarkerCluster||!e._icon||e.clusterShow()}),this._topClusterLevel._recursively(n,e,t,function(e){e._recursivelyRestoreChildPositions(t)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(n,e,s,function(e){r.removeLayer(e),e.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(e,t){this._animationZoomOutSingle(this._topClusterLevel,e-1,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e,this._getExpandedVisibleBounds())},_animationAddLayer:function(e,t){var i=this,n=this._featureGroup;n.addLayer(e),t!==e&&(t._childCount>2?(t._updateIcon(),this._forceLayout(),this._animationStart(),e._setPos(this._map.latLngToLayerPoint(t.getLatLng())),e.clusterHide(),this._enqueue(function(){n.removeLayer(e),e.clusterShow(),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(t,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(e,t,i){var n=this._getExpandedVisibleBounds(),r=Math.floor(this._map.getMinZoom());e._recursivelyAnimateChildrenInAndAddSelfToMap(n,r,t+1,i);var s=this;this._forceLayout(),e._recursivelyBecomeVisible(n,i),this._enqueue(function(){if(1===e._childCount){var o=e._markers[0];this._ignoreMove=!0,o.setLatLng(o.getLatLng()),this._ignoreMove=!1,o.clusterShow&&o.clusterShow()}else e._recursively(n,i,r,function(e){e._recursivelyRemoveChildrenFromMap(n,r,t+1)});s._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(e){return new L.MarkerClusterGroup(e)};var i=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(e,t,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this,pane:e.options.clusterPane}),this._group=e,this._zoom=t,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),n&&this._addChild(n)},getAllChildMarkers:function(e,t){e=e||[];for(var i=this._childClusters.length-1;i>=0;i--)this._childClusters[i].getAllChildMarkers(e);for(var n=this._markers.length-1;n>=0;n--)t&&this._markers[n].__dragStart||e.push(this._markers[n]);return e},getChildCount:function(){return this._childCount},zoomToBounds:function(e){for(var t,i=this._childClusters.slice(),n=this._group._map,r=n.getBoundsZoom(this._bounds),s=this._zoom+1,o=n.getZoom();i.length>0&&r>s;){s++;var a=[];for(t=0;t<i.length;t++)a=a.concat(i[t]._childClusters);i=a}r>s?this._group._map.setView(this._latlng,s):o>=r?this._group._map.setView(this._latlng,o+1):this._group._map.fitBounds(this._bounds,e)},getBounds:function(){var e=new L.LatLngBounds;return e.extend(this._bounds),e},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(e,t){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(e),e instanceof L.MarkerCluster?(t||(this._childClusters.push(e),e.__parent=this),this._childCount+=e._childCount):(t||this._markers.push(e),this._childCount++),this.__parent&&this.__parent._addChild(e,!0)},_setClusterCenter:function(e){this._cLatLng||(this._cLatLng=e._cLatLng||e._latlng)},_resetBounds:function(){var e=this._bounds;e._southWest&&(e._southWest.lat=1/0,e._southWest.lng=1/0),e._northEast&&(e._northEast.lat=-1/0,e._northEast.lng=-1/0)},_recalculateBounds:function(){var e,t,i,n,r=this._markers,s=this._childClusters,o=0,a=0,h=this._childCount;if(0!==h){for(this._resetBounds(),e=0;e<r.length;e++)i=r[e]._latlng,this._bounds.extend(i),o+=i.lat,a+=i.lng;for(e=0;e<s.length;e++)t=s[e],t._boundsNeedUpdate&&t._recalculateBounds(),this._bounds.extend(t._bounds),i=t._wLatLng,n=t._childCount,o+=i.lat*n,a+=i.lng*n;this._latlng=this._wLatLng=new L.LatLng(o/h,a/h),this._boundsNeedUpdate=!1}},_addToMap:function(e){e&&(this._backupLatlng=this._latlng,this.setLatLng(e)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(e,t,i){this._recursively(e,this._group._map.getMinZoom(),i-1,function(e){var i,n,r=e._markers;for(i=r.length-1;i>=0;i--)n=r[i],n._icon&&(n._setPos(t),n.clusterHide())},function(e){var i,n,r=e._childClusters;for(i=r.length-1;i>=0;i--)n=r[i],n._icon&&(n._setPos(t),n.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(e,t,i,n){this._recursively(e,n,t,function(r){r._recursivelyAnimateChildrenIn(e,r._group._map.latLngToLayerPoint(r.getLatLng()).round(),i),r._isSingleParent()&&i-1===n?(r.clusterShow(),r._recursivelyRemoveChildrenFromMap(e,t,i)):r.clusterHide(),r._addToMap()})},_recursivelyBecomeVisible:function(e,t){this._recursively(e,this._group._map.getMinZoom(),t,null,function(e){e.clusterShow()})},_recursivelyAddChildrenToMap:function(e,t,i){this._recursively(i,this._group._map.getMinZoom()-1,t,function(n){if(t!==n._zoom)for(var r=n._markers.length-1;r>=0;r--){var s=n._markers[r];i.contains(s._latlng)&&(e&&(s._backupLatlng=s.getLatLng(),s.setLatLng(e),s.clusterHide&&s.clusterHide()),n._group._featureGroup.addLayer(s))}},function(t){t._addToMap(e)})},_recursivelyRestoreChildPositions:function(e){for(var t=this._markers.length-1;t>=0;t--){var i=this._markers[t];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(e-1===this._zoom)for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._restorePosition();else for(var r=this._childClusters.length-1;r>=0;r--)this._childClusters[r]._recursivelyRestoreChildPositions(e)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(e,t,i,n){var r,s;this._recursively(e,t-1,i-1,function(e){for(s=e._markers.length-1;s>=0;s--)r=e._markers[s],n&&n.contains(r._latlng)||(e._group._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow())},function(e){for(s=e._childClusters.length-1;s>=0;s--)r=e._childClusters[s],n&&n.contains(r._latlng)||(e._group._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow())})},_recursively:function(e,t,i,n,r){var s,o,a=this._childClusters,h=this._zoom;if(h>=t&&(n&&n(this),r&&h===i&&r(this)),t>h||i>h)for(s=a.length-1;s>=0;s--)o=a[s],o._boundsNeedUpdate&&o._recalculateBounds(),e.intersects(o._bounds)&&o._recursively(e,t,i,n,r)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var e=this.options.opacity;return this.setOpacity(0),this.options.opacity=e,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(e){this._cellSize=e,this._sqCellSize=e*e,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(e,t){var i=this._getCoord(t.x),n=this._getCoord(t.y),r=this._grid,s=r[n]=r[n]||{},o=s[i]=s[i]||[],a=L.Util.stamp(e);this._objectPoint[a]=t,o.push(e)},updateObject:function(e,t){this.removeObject(e),this.addObject(e,t)},removeObject:function(e,t){var i,n,r=this._getCoord(t.x),s=this._getCoord(t.y),o=this._grid,a=o[s]=o[s]||{},h=a[r]=a[r]||[];for(delete this._objectPoint[L.Util.stamp(e)],i=0,n=h.length;n>i;i++)if(h[i]===e)return h.splice(i,1),1===n&&delete a[r],!0},eachObject:function(e,t){var i,n,r,s,o,a,h,l=this._grid;for(i in l){o=l[i];for(n in o)for(a=o[n],r=0,s=a.length;s>r;r++)h=e.call(t,a[r]),h&&(r--,s--)}},getNearObject:function(e){var t,i,n,r,s,o,a,h,l=this._getCoord(e.x),u=this._getCoord(e.y),_=this._objectPoint,d=this._sqCellSize,c=null;for(t=u-1;u+1>=t;t++)if(r=this._grid[t])for(i=l-1;l+1>=i;i++)if(s=r[i])for(n=0,o=s.length;o>n;n++)a=s[n],h=this._sqDist(_[L.Util.stamp(a)],e),(d>h||d>=h&&null===c)&&(d=h,c=a);return c},_getCoord:function(e){var t=Math.floor(e/this._cellSize);return isFinite(t)?t:e},_sqDist:function(e,t){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n}},function(){L.QuickHull={getDistant:function(e,t){var i=t[1].lat-t[0].lat,n=t[0].lng-t[1].lng;return n*(e.lat-t[0].lat)+i*(e.lng-t[0].lng)},findMostDistantPointFromBaseLine:function(e,t){var i,n,r,s=0,o=null,a=[];for(i=t.length-1;i>=0;i--)n=t[i],r=this.getDistant(n,e),r>0&&(a.push(n),r>s&&(s=r,o=n));return{maxPoint:o,newPoints:a}},buildConvexHull:function(e,t){var i=[],n=this.findMostDistantPointFromBaseLine(e,t);return n.maxPoint?(i=i.concat(this.buildConvexHull([e[0],n.maxPoint],n.newPoints)),i=i.concat(this.buildConvexHull([n.maxPoint,e[1]],n.newPoints))):[e[0]]},getConvexHull:function(e){var t,i=!1,n=!1,r=!1,s=!1,o=null,a=null,h=null,l=null,u=null,_=null;for(t=e.length-1;t>=0;t--){var d=e[t];(i===!1||d.lat>i)&&(o=d,i=d.lat),(n===!1||d.lat<n)&&(a=d,n=d.lat),(r===!1||d.lng>r)&&(h=d,r=d.lng),(s===!1||d.lng<s)&&(l=d,s=d.lng)}n!==i?(_=a,u=o):(_=l,u=h);var c=[].concat(this.buildConvexHull([_,u],e),this.buildConvexHull([u,_],e));return c}}}(),L.MarkerCluster.include({getConvexHull:function(){var e,t,i=this.getAllChildMarkers(),n=[];for(t=i.length-1;t>=0;t--)e=i[t].getLatLng(),n.push(e);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var e,t=this.getAllChildMarkers(null,!0),i=this._group,n=i._map,r=n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,t.length>=this._circleSpiralSwitchover?e=this._generatePointsSpiral(t.length,r):(r.y+=10,e=this._generatePointsCircle(t.length,r)),this._animationSpiderfy(t,e)}},unspiderfy:function(e){this._group._inZoomAnimation||(this._animationUnspiderfy(e),this._group._spiderfied=null)},_generatePointsCircle:function(e,t){var i,n,r=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+e),s=r/this._2PI,o=this._2PI/e,a=[];for(s=Math.max(s,35),a.length=e,i=0;e>i;i++)n=this._circleStartAngle+i*o,a[i]=new L.Point(t.x+s*Math.cos(n),t.y+s*Math.sin(n))._round();return a},_generatePointsSpiral:function(e,t){var i,n=this._group.options.spiderfyDistanceMultiplier,r=n*this._spiralLengthStart,s=n*this._spiralFootSeparation,o=n*this._spiralLengthFactor*this._2PI,a=0,h=[];for(h.length=e,i=e;i>=0;i--)e>i&&(h[i]=new L.Point(t.x+r*Math.cos(a),t.y+r*Math.sin(a))._round()),a+=s/r+5e-4*i,r+=o/a;return h},_noanimationUnspiderfy:function(){var e,t,i=this._group,n=i._map,r=i._featureGroup,s=this.getAllChildMarkers(null,!0);for(i._ignoreMove=!0,this.setOpacity(1),t=s.length-1;t>=0;t--)e=s[t],r.removeLayer(e),e._preSpiderfyLatlng&&(e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng),e.setZIndexOffset&&e.setZIndexOffset(0),e._spiderLeg&&(n.removeLayer(e._spiderLeg),delete e._spiderLeg);i.fire("unspiderfied",{cluster:this,markers:s}),i._ignoreMove=!1,i._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(e,t){var i,n,r,s,o=this._group,a=o._map,h=o._featureGroup,l=this._group.options.spiderLegPolylineOptions;for(o._ignoreMove=!0,i=0;i<e.length;i++)s=a.layerPointToLatLng(t[i]),n=e[i],r=new L.Polyline([this._latlng,s],l),a.addLayer(r),n._spiderLeg=r,n._preSpiderfyLatlng=n._latlng,n.setLatLng(s),n.setZIndexOffset&&n.setZIndexOffset(1e6),h.addLayer(n);this.setOpacity(.3),o._ignoreMove=!1,o.fire("spiderfied",{cluster:this,markers:e})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(e,t){var i,n,r,s,o,a,h=this,l=this._group,u=l._map,_=l._featureGroup,d=this._latlng,c=u.latLngToLayerPoint(d),p=L.Path.SVG,f=L.extend({},this._group.options.spiderLegPolylineOptions),m=f.opacity;for(void 0===m&&(m=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),p?(f.opacity=0,f.className=(f.className||"")+" leaflet-cluster-spider-leg"):f.opacity=m,l._ignoreMove=!0,i=0;i<e.length;i++)n=e[i],a=u.layerPointToLatLng(t[i]),r=new L.Polyline([d,a],f),u.addLayer(r),n._spiderLeg=r,p&&(s=r._path,o=s.getTotalLength()+.1,s.style.strokeDasharray=o,s.style.strokeDashoffset=o),n.setZIndexOffset&&n.setZIndexOffset(1e6),n.clusterHide&&n.clusterHide(),_.addLayer(n),n._setPos&&n._setPos(c);for(l._forceLayout(),l._animationStart(),i=e.length-1;i>=0;i--)a=u.layerPointToLatLng(t[i]),n=e[i],n._preSpiderfyLatlng=n._latlng,n.setLatLng(a),n.clusterShow&&n.clusterShow(),p&&(r=n._spiderLeg,s=r._path,s.style.strokeDashoffset=0,r.setStyle({opacity:m}));this.setOpacity(.3),l._ignoreMove=!1,setTimeout(function(){l._animationEnd(),l.fire("spiderfied",{cluster:h,markers:e})},200)},_animationUnspiderfy:function(e){var t,i,n,r,s,o,a=this,h=this._group,l=h._map,u=h._featureGroup,_=e?l._latLngToNewLayerPoint(this._latlng,e.zoom,e.center):l.latLngToLayerPoint(this._latlng),d=this.getAllChildMarkers(null,!0),c=L.Path.SVG;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),i=d.length-1;i>=0;i--)t=d[i],t._preSpiderfyLatlng&&(t.closePopup(),t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng,o=!0,t._setPos&&(t._setPos(_),o=!1),t.clusterHide&&(t.clusterHide(),o=!1),o&&u.removeLayer(t),c&&(n=t._spiderLeg,r=n._path,s=r.getTotalLength()+.1,r.style.strokeDashoffset=s,n.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var e=0;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&e++;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&(t.clusterShow&&t.clusterShow(),t.setZIndexOffset&&t.setZIndexOffset(0),e>1&&u.removeLayer(t),l.removeLayer(t._spiderLeg),delete t._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:a,markers:d})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()
},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(e){if(this._map==null)return;L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(e))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(e){this._spiderfied&&this._spiderfied.unspiderfy(e)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(e){e._spiderLeg&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow(),e.setZIndexOffset&&e.setZIndexOffset(0),this._map.removeLayer(e._spiderLeg),delete e._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(e){return e?e instanceof L.MarkerClusterGroup?e=e._topClusterLevel.getAllChildMarkers():e instanceof L.LayerGroup?e=e._layers:e instanceof L.MarkerCluster?e=e.getAllChildMarkers():e instanceof L.Marker&&(e=[e]):e=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(e),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(e),this},_flagParentsIconsNeedUpdate:function(e){var t,i;for(t in e)for(i=e[t].__parent;i;)i._iconNeedsUpdate=!0,i=i.__parent},_refreshSingleMarkerModeMarkers:function(e){var t,i;for(t in e)i=e[t],this.hasLayer(i)&&i.setIcon(this._overrideMarkerIcon(i))}}),L.Marker.include({refreshIconOptions:function(e,t){var i=this.options.icon;return L.setOptions(i,e),this.setIcon(i),t&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),e.MarkerClusterGroup=t,e.MarkerCluster=i});
//# sourceMappingURL=leaflet.markercluster.js.map;
///<jscompress sourcefile="Leaflet.VectorGrid.js" />
'use strict';

function __$strToBlobUri(str, mime, isBinary) {try {return window.URL.createObjectURL(new Blob([Uint8Array.from(str.split('').map(function(c) {return c.charCodeAt(0)}))], {type: mime}));} catch (e) {return "data:" + mime + (isBinary ? ";base64," : ",") + str;}}
L.SVG.Tile = L.SVG.extend({

	initialize: function (tileCoord, tileSize, options) {
		L.SVG.prototype.initialize.call(this, options);
		this._tileCoord = tileCoord;
		this._size = tileSize;

		this._initContainer();
		this._container.setAttribute('width', this._size.x);
		this._container.setAttribute('height', this._size.y);
		this._container.setAttribute('viewBox', [0, 0, this._size.x, this._size.y].join(' '));

		this._layers = {};
	},

	getCoord: function() {
		return this._tileCoord;
	},

	getContainer: function() {
		return this._container;
	},

	onAdd: L.Util.falseFn,

	addTo: function(map) {
		this._map = map;
		if (this.options.interactive) {
			for (var i in this._layers) {
				var layer = this._layers[i];
				// By default, Leaflet tiles do not have pointer events.
				layer._path.style.pointerEvents = 'auto';
				this._map._targets[L.stamp(layer._path)] = layer;
			}
		}
	},

	removeFrom: function (map) {
		if (this.options.interactive) {
			for (var i in this._layers) {
				var layer = this._layers[i];
				delete this._map._targets[L.stamp(layer._path)];
			}
		}
		delete this._map;
	},

	_initContainer: function() {
		L.SVG.prototype._initContainer.call(this);
		var rect =  L.SVG.create('rect');
	},

	/// TODO: Modify _initPath to include an extra parameter, a group name
	/// to order symbolizers by z-index

	_addPath: function (layer) {
		this._rootGroup.appendChild(layer._path);
		this._layers[L.stamp(layer)] = layer;
	},

	_updateIcon: function (layer) {
		var path = layer._path = L.SVG.create('image'),
		    icon = layer.options.icon,
		    options = icon.options,
		    size = L.point(options.iconSize),
		    anchor = options.iconAnchor ||
		        	 size && size.divideBy(2, true),
		    p = layer._point.subtract(anchor);
		path.setAttribute('x', p.x);
		path.setAttribute('y', p.y);
		path.setAttribute('width', size.x + 'px');
		path.setAttribute('height', size.y + 'px');
		path.setAttribute('href', options.iconUrl);
	}
});


L.svg.tile = function(tileCoord, tileSize, opts){
	return new L.SVG.Tile(tileCoord, tileSize, opts);
};

// 🍂class Symbolizer
// 🍂inherits Class
// The abstract Symbolizer class is mostly equivalent in concept to a `L.Path` - it's an interface for
// polylines, polygons and circles. But instead of representing leaflet Layers,
// it represents things that have to be drawn inside a vector tile.

// A vector tile *data layer* might have zero, one, or more *symbolizer definitions*
// A vector tile *feature* might have zero, one, or more *symbolizers*.
// The actual symbolizers applied will depend on filters and the symbolizer functions.

var Symbolizer = L.Class.extend({
	// 🍂method initialize(feature: GeoJSON, pxPerExtent: Number)
	// Initializes a new Line Symbolizer given a GeoJSON feature and the
	// pixel-to-coordinate-units ratio. Internal use only.

	// 🍂method render(renderer, style)
	// Renders this symbolizer in the given tiled renderer, with the given
	// `L.Path` options.  Internal use only.
	render: function(renderer, style) {
		this._renderer = renderer;
		this.options = style;
		renderer._initPath(this);
		renderer._updateStyle(this);
	},

	// 🍂method render(renderer, style)
	// Updates the `L.Path` options used to style this symbolizer, and re-renders it.
	// Internal use only.
	updateStyle: function(renderer, style) {
		this.options = style;
		renderer._updateStyle(this);
	},

	_getPixelBounds: function() {
		var parts = this._parts;
		var bounds = L.bounds([]);
		for (var i = 0; i < parts.length; i++) {
			var part = parts[i];
			for (var j = 0; j < part.length; j++) {
				bounds.extend(part[j]);
			}
		}

		var w = this._clickTolerance(),
		    p = new L.Point(w, w);

		bounds.min._subtract(p);
		bounds.max._add(p);

		return bounds;
	},
	_clickTolerance: L.Path.prototype._clickTolerance,
});

// Contains mixins which are common to the Line Symbolizer and the Fill Symbolizer.

var PolyBase = {
	_makeFeatureParts: function(feat, pxPerExtent) {
		var rings = feat.geometry;
		var coord;

		this._parts = [];
		for (var i = 0; i < rings.length; i++) {
			var ring = rings[i];
			var part = [];
			for (var j = 0; j < ring.length; j++) {
				coord = ring[j];
				// Protobuf vector tiles return {x: , y:}
				// Geojson-vt returns [,]
				part.push(L.point(coord).scaleBy(pxPerExtent));
			}
			this._parts.push(part);
		}
	},

	makeInteractive: function() {
		this._pxBounds = this._getPixelBounds();
	}
};

// 🍂class PointSymbolizer
// 🍂inherits CircleMarker
// A symbolizer for points.

var PointSymbolizer = L.CircleMarker.extend({
	includes: Symbolizer.prototype,

	statics: {
		iconCache: {}
	},

	initialize: function(feature, pxPerExtent) {
		this.properties = feature.properties;
		this._makeFeatureParts(feature, pxPerExtent);
	},

	render: function(renderer, style) {
		Symbolizer.prototype.render.call(this, renderer, style);
		this._radius = style.radius || L.CircleMarker.prototype.options.radius;
		this._updatePath();
	},

	_makeFeatureParts: function(feat, pxPerExtent) {
		var coord = feat.geometry[0];
		if (typeof coord[0] === 'object' && 'x' in coord[0]) {
			// Protobuf vector tiles return [{x: , y:}]
			this._point = L.point(coord[0]).scaleBy(pxPerExtent);
			this._empty = L.Util.falseFn;
		} else {
			// Geojson-vt returns [,]
			this._point = L.point(coord).scaleBy(pxPerExtent);
			this._empty = L.Util.falseFn;
		}
	},

	makeInteractive: function() {
		this._updateBounds();
	},

	updateStyle: function(renderer, style) {
		this._radius = style.radius || this._radius;
		this._updateBounds();
		return Symbolizer.prototype.updateStyle.call(this, renderer, style);
	},

	_updateBounds: function() {
		var icon = this.options.icon;
		if (icon) {
			var size = L.point(icon.options.iconSize),
			    anchor = icon.options.iconAnchor ||
			             size && size.divideBy(2, true),
			    p = this._point.subtract(anchor);
			this._pxBounds = new L.Bounds(p, p.add(icon.options.iconSize));
		} else {
			L.CircleMarker.prototype._updateBounds.call(this);
		}
	},

	_updatePath: function() {
		if (this.options.icon) {
			this._renderer._updateIcon(this);
		} else {
			L.CircleMarker.prototype._updatePath.call(this);
		}
	},

	_getImage: function () {
		if (this.options.icon) {
			var url = this.options.icon.options.iconUrl,
			    img = PointSymbolizer.iconCache[url];
			if (!img) {
				var icon = this.options.icon;
				img = PointSymbolizer.iconCache[url] = icon.createIcon();
			}
			return img;
		} else {
			return null;
		}

	},

	_containsPoint: function(p) {
		var icon = this.options.icon;
		if (icon) {
			return this._pxBounds.contains(p);
		} else {
			return L.CircleMarker.prototype._containsPoint.call(this, p);
		}
	}
});

// 🍂class LineSymbolizer
// 🍂inherits Polyline
// A symbolizer for lines. Can be applied to line and polygon features.

var LineSymbolizer = L.Polyline.extend({
	includes: [Symbolizer.prototype, PolyBase],

	initialize: function(feature, pxPerExtent) {
		this.properties = feature.properties;
		this._makeFeatureParts(feature, pxPerExtent);
	},

	render: function(renderer, style) {
		style.fill = false;
		Symbolizer.prototype.render.call(this, renderer, style);
		this._updatePath();
	},

	updateStyle: function(renderer, style) {
		style.fill = false;
		Symbolizer.prototype.updateStyle.call(this, renderer, style);
	},
});

// 🍂class FillSymbolizer
// 🍂inherits Polyline
// A symbolizer for filled areas. Applies only to polygon features.

var FillSymbolizer = L.Polygon.extend({
	includes: [Symbolizer.prototype, PolyBase],

	initialize: function(feature, pxPerExtent) {
		this.properties = feature.properties;
		this._makeFeatureParts(feature, pxPerExtent);
	},

	render: function(renderer, style) {
		Symbolizer.prototype.render.call(this, renderer, style);
		this._updatePath();
	}
});

/* 🍂class VectorGrid
 * 🍂inherits GridLayer
 *
 * A `VectorGrid` is a generic, abstract class for displaying tiled vector data.
 * it provides facilities for symbolizing and rendering the data in the vector
 * tiles, but lacks the functionality to fetch the vector tiles from wherever
 * they are.
 *
 * Extends Leaflet's `L.GridLayer`.
 */

L.VectorGrid = L.GridLayer.extend({

	options: {
		// 🍂option rendererFactory = L.svg.tile
		// A factory method which will be used to instantiate the per-tile renderers.
		rendererFactory: L.svg.tile,

		// 🍂option vectorTileLayerStyles: Object = {}
		// A data structure holding initial symbolizer definitions for the vector features.
		vectorTileLayerStyles: {},

		// 🍂option interactive: Boolean = false
		// Whether this `VectorGrid` fires `Interactive Layer` events.
		interactive: false,

		// 🍂option getFeatureId: Function = undefined
		// A function that, given a vector feature, returns an unique identifier for it, e.g.
		// `function(feat) { return feat.properties.uniqueIdField; }`.
		// Must be defined for `setFeatureStyle` to work.
	},

	initialize: function(options) {
		L.setOptions(this, options);
		L.GridLayer.prototype.initialize.apply(this, arguments);
		if (this.options.getFeatureId) {
			this._vectorTiles = {};
			this._overriddenStyles = {};
			this.on('tileunload', function(e) {
				var key = this._tileCoordsToKey(e.coords),
				    tile = this._vectorTiles[key];

				if (tile && this._map) {
					tile.removeFrom(this._map);
				}
				delete this._vectorTiles[key];
			}, this);
		}
		this._dataLayerNames = {};
	},

	createTile: function(coords, done) {
		var storeFeatures = this.options.getFeatureId;

		var tileSize = this.getTileSize();
		var renderer = this.options.rendererFactory(coords, tileSize, this.options);

		var vectorTilePromise = this._getVectorTilePromise(coords);

		if (storeFeatures) {
			this._vectorTiles[this._tileCoordsToKey(coords)] = renderer;
			renderer._features = {};
		}

		vectorTilePromise.then( function renderTile(vectorTile) {
			for (var layerName in vectorTile.layers) {
				this._dataLayerNames[layerName] = true;
				var layer = vectorTile.layers[layerName];

				var pxPerExtent = this.getTileSize().divideBy(layer.extent);

				var layerStyle = this.options.vectorTileLayerStyles[ layerName ] ||
				L.Path.prototype.options;

				for (var i = 0; i < layer.features.length; i++) {
					var feat = layer.features[i];
					var id;

					var styleOptions = layerStyle;
					if (storeFeatures) {
						id = this.options.getFeatureId(feat);
						var styleOverride = this._overriddenStyles[id];
						if (styleOverride) {
							if (styleOverride[layerName]) {
								styleOptions = styleOverride[layerName];
							} else {
								styleOptions = styleOverride;
							}
						}
					}

					if (styleOptions instanceof Function) {
						styleOptions = styleOptions(feat.properties, coords.z);
					}

					if (!(styleOptions instanceof Array)) {
						styleOptions = [styleOptions];
					}

					if (!styleOptions.length) {
						continue;
					}

					var featureLayer = this._createLayer(feat, pxPerExtent);

					for (var j = 0; j < styleOptions.length; j++) {
						var style = L.extend({}, L.Path.prototype.options, styleOptions[j]);
						featureLayer.render(renderer, style);
						renderer._addPath(featureLayer);
					}

					if (this.options.interactive) {
						featureLayer.makeInteractive();
					}

					if (storeFeatures) {
						renderer._features[id] = {
							layerName: layerName,
							feature: featureLayer
						};
					}
				}

			}
			if (this._map != null) {
				renderer.addTo(this._map);
			}
			L.Util.requestAnimFrame(done.bind(coords, null, null));
		}.bind(this));

		return renderer.getContainer();
	},

	// 🍂method setFeatureStyle(id: Number, layerStyle: L.Path Options): this
	// Given the unique ID for a vector features (as per the `getFeatureId` option),
	// re-symbolizes that feature across all tiles it appears in.
	setFeatureStyle: function(id, layerStyle) {
		this._overriddenStyles[id] = layerStyle;

		for (var tileKey in this._vectorTiles) {
			var tile = this._vectorTiles[tileKey];
			var features = tile._features;
			var data = features[id];
			if (data) {
				var feat = data.feature;

				var styleOptions = layerStyle;
				if (layerStyle[data.layerName]) {
					styleOptions = layerStyle[data.layerName];
				}

				this._updateStyles(feat, tile, styleOptions);
			}
		}
		return this;
	},

	// 🍂method setFeatureStyle(id: Number): this
	// Reverts the effects of a previous `setFeatureStyle` call.
	resetFeatureStyle: function(id) {
		delete this._overriddenStyles[id];

		for (var tileKey in this._vectorTiles) {
			var tile = this._vectorTiles[tileKey];
			var features = tile._features;
			var data = features[id];
			if (data) {
				var feat = data.feature;
				var styleOptions = this.options.vectorTileLayerStyles[ data.layerName ] ||
				L.Path.prototype.options;
				this._updateStyles(feat, tile, styleOptions);
			}
		}
		return this;
	},

	// 🍂method getDataLayerNames(): Array
	// Returns an array of strings, with all the known names of data layers in
	// the vector tiles displayed. Useful for introspection.
	getDataLayerNames: function() {
		return Object.keys(this._dataLayerNames);
	},

	_updateStyles: function(feat, renderer, styleOptions) {
		styleOptions = (styleOptions instanceof Function) ?
			styleOptions(feat.properties, renderer.getCoord().z) :
			styleOptions;

		if (!(styleOptions instanceof Array)) {
			styleOptions = [styleOptions];
		}

		for (var j = 0; j < styleOptions.length; j++) {
			var style = L.extend({}, L.Path.prototype.options, styleOptions[j]);
			feat.updateStyle(renderer, style);
		}
	},

	_createLayer: function(feat, pxPerExtent, layerStyle) {
		var layer;
		switch (feat.type) {
		case 1:
			layer = new PointSymbolizer(feat, pxPerExtent);
			break;
		case 2:
			layer = new LineSymbolizer(feat, pxPerExtent);
			break;
		case 3:
			layer = new FillSymbolizer(feat, pxPerExtent);
			break;
		}

		if (this.options.interactive) {
			layer.addEventParent(this);
		}

		return layer;
	},
});

/*
 * 🍂section Extension methods
 *
 * Classes inheriting from `VectorGrid` **must** define the `_getVectorTilePromise` private method.
 *
 * 🍂method getVectorTilePromise(coords: Object): Promise
 * Given a `coords` object in the form of `{x: Number, y: Number, z: Number}`,
 * this function must return a `Promise` for a vector tile.
 *
 */
L.vectorGrid = function (options) {
	return new L.VectorGrid(options);
};

var read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
};

var write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

var index$1 = {
	read: read,
	write: write
};

var index = Pbf;

var ieee754 = index$1;

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16);
var SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        var this$1 = this;

        end = end || this.length;

        while (this.pos < end) {
            var val = this$1.readVarint(),
                tag = val >> 3,
                startPos = this$1.pos;

            this$1.type = val & 0x7;
            readField(tag, result, this$1);

            if (this$1.pos === startPos) { this$1.skip(val); }
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) { return val; }
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) { return val; }
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) { return val; }
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) { return val; }
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = readUtf8(this.buf, this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readVarint(isSigned)); }
        return arr;
    },
    readPackedSVarint: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readSVarint()); }
        return arr;
    },
    readPackedBoolean: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readBoolean()); }
        return arr;
    },
    readPackedFloat: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readFloat()); }
        return arr;
    },
    readPackedDouble: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readDouble()); }
        return arr;
    },
    readPackedFixed32: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readFixed32()); }
        return arr;
    },
    readPackedSFixed32: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readSFixed32()); }
        return arr;
    },
    readPackedFixed64: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readFixed64()); }
        return arr;
    },
    readPackedSFixed64: function(arr) {
        var this$1 = this;

        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) { arr.push(this$1.readSFixed64()); }
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) { while (this.buf[this.pos++] > 0x7f) {} }
        else if (type === Pbf.Bytes) { this.pos = this.readVarint() + this.pos; }
        else if (type === Pbf.Fixed32) { this.pos += 4; }
        else if (type === Pbf.Fixed64) { this.pos += 8; }
        else { throw new Error('Unimplemented type: ' + type); }
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) { length *= 2; }

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) { return; }
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) { return; }
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) { return; }
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) { makeRoomForExtraLength(startPos, len, this); }

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var this$1 = this;

        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) { this$1.buf[this$1.pos++] = buffer[i]; }
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) { makeRoomForExtraLength(startPos, len, this); }

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) { return toNum(l, h, s); }
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) { return toNum(l, h, s); }

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) { return; }
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) { pbf.buf[i + extraLen] = pbf.buf[i]; }
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) { pbf.writeVarint(arr[i]); }   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeSVarint(arr[i]); }  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) { pbf.writeFloat(arr[i]); }    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) { pbf.writeDouble(arr[i]); }   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeBoolean(arr[i]); }  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeFixed32(arr[i]); }  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) { pbf.writeSFixed32(arr[i]); } }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) { pbf.writeFixed64(arr[i]); }  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) { pbf.writeSFixed64(arr[i]); } }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) { break; }

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}

var index$5 = Point$1;

function Point$1(x, y) {
    this.x = x;
    this.y = y;
}

Point$1.prototype = {
    clone: function() { return new Point$1(this.x, this.y); },

    add:     function(p) { return this.clone()._add(p);     },
    sub:     function(p) { return this.clone()._sub(p);     },
    mult:    function(k) { return this.clone()._mult(k);    },
    div:     function(k) { return this.clone()._div(k);     },
    rotate:  function(a) { return this.clone()._rotate(a);  },
    matMult: function(m) { return this.clone()._matMult(m); },
    unit:    function() { return this.clone()._unit(); },
    perp:    function() { return this.clone()._perp(); },
    round:   function() { return this.clone()._round(); },

    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    equals: function(p) {
        return this.x === p.x &&
               this.y === p.y;
    },

    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

// constructs Point from an array if necessary
Point$1.convert = function (a) {
    if (a instanceof Point$1) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point$1(a[0], a[1]);
    }
    return a;
};

var Point = index$5;

var vectortilefeature = VectorTileFeature$2;

function VectorTileFeature$2(pbf, end, extent, keys, values) {
    // Public
    this.properties = {};
    this.extent = extent;
    this.type = 0;

    // Private
    this._pbf = pbf;
    this._geometry = -1;
    this._keys = keys;
    this._values = values;

    pbf.readFields(readFeature, this, end);
}

function readFeature(tag, feature, pbf) {
    if (tag == 1) { feature.id = pbf.readVarint(); }
    else if (tag == 2) { readTag(pbf, feature); }
    else if (tag == 3) { feature.type = pbf.readVarint(); }
    else if (tag == 4) { feature._geometry = pbf.pos; }
}

function readTag(pbf, feature) {
    var end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var key = feature._keys[pbf.readVarint()],
            value = feature._values[pbf.readVarint()];
        feature.properties[key] = value;
    }
}

VectorTileFeature$2.types = ['Unknown', 'Point', 'LineString', 'Polygon'];

VectorTileFeature$2.prototype.loadGeometry = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        lines = [],
        line;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();

            if (cmd === 1) { // moveTo
                if (line) { lines.push(line); }
                line = [];
            }

            line.push(new Point(x, y));

        } else if (cmd === 7) {

            // Workaround for https://github.com/mapbox/mapnik-vector-tile/issues/90
            if (line) {
                line.push(line[0].clone()); // closePolygon
            }

        } else {
            throw new Error('unknown command ' + cmd);
        }
    }

    if (line) { lines.push(line); }

    return lines;
};

VectorTileFeature$2.prototype.bbox = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        x1 = Infinity,
        x2 = -Infinity,
        y1 = Infinity,
        y2 = -Infinity;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();
            if (x < x1) { x1 = x; }
            if (x > x2) { x2 = x; }
            if (y < y1) { y1 = y; }
            if (y > y2) { y2 = y; }

        } else if (cmd !== 7) {
            throw new Error('unknown command ' + cmd);
        }
    }

    return [x1, y1, x2, y2];
};

VectorTileFeature$2.prototype.toGeoJSON = function(x, y, z) {
    var size = this.extent * Math.pow(2, z),
        x0 = this.extent * x,
        y0 = this.extent * y,
        coords = this.loadGeometry(),
        type = VectorTileFeature$2.types[this.type],
        i, j;

    function project(line) {
        for (var j = 0; j < line.length; j++) {
            var p = line[j], y2 = 180 - (p.y + y0) * 360 / size;
            line[j] = [
                (p.x + x0) * 360 / size - 180,
                360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90
            ];
        }
    }

    switch (this.type) {
    case 1:
        var points = [];
        for (i = 0; i < coords.length; i++) {
            points[i] = coords[i][0];
        }
        coords = points;
        project(coords);
        break;

    case 2:
        for (i = 0; i < coords.length; i++) {
            project(coords[i]);
        }
        break;

    case 3:
        coords = classifyRings(coords);
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                project(coords[i][j]);
            }
        }
        break;
    }

    if (coords.length === 1) {
        coords = coords[0];
    } else {
        type = 'Multi' + type;
    }

    var result = {
        type: "Feature",
        geometry: {
            type: type,
            coordinates: coords
        },
        properties: this.properties
    };

    if ('id' in this) {
        result.id = this.id;
    }

    return result;
};

// classifies an array of rings into polygons with outer rings and holes

function classifyRings(rings) {
    var len = rings.length;

    if (len <= 1) { return [rings]; }

    var polygons = [],
        polygon,
        ccw;

    for (var i = 0; i < len; i++) {
        var area = signedArea(rings[i]);
        if (area === 0) { continue; }

        if (ccw === undefined) { ccw = area < 0; }

        if (ccw === area < 0) {
            if (polygon) { polygons.push(polygon); }
            polygon = [rings[i]];

        } else {
            polygon.push(rings[i]);
        }
    }
    if (polygon) { polygons.push(polygon); }

    return polygons;
}

function signedArea(ring) {
    var sum = 0;
    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
        p1 = ring[i];
        p2 = ring[j];
        sum += (p2.x - p1.x) * (p1.y + p2.y);
    }
    return sum;
}

var VectorTileFeature$1 = vectortilefeature;

var vectortilelayer = VectorTileLayer$2;

function VectorTileLayer$2(pbf, end) {
    // Public
    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    // Private
    this._pbf = pbf;
    this._keys = [];
    this._values = [];
    this._features = [];

    pbf.readFields(readLayer, this, end);

    this.length = this._features.length;
}

function readLayer(tag, layer, pbf) {
    if (tag === 15) { layer.version = pbf.readVarint(); }
    else if (tag === 1) { layer.name = pbf.readString(); }
    else if (tag === 5) { layer.extent = pbf.readVarint(); }
    else if (tag === 2) { layer._features.push(pbf.pos); }
    else if (tag === 3) { layer._keys.push(pbf.readString()); }
    else if (tag === 4) { layer._values.push(readValueMessage(pbf)); }
}

function readValueMessage(pbf) {
    var value = null,
        end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var tag = pbf.readVarint() >> 3;

        value = tag === 1 ? pbf.readString() :
            tag === 2 ? pbf.readFloat() :
            tag === 3 ? pbf.readDouble() :
            tag === 4 ? pbf.readVarint64() :
            tag === 5 ? pbf.readVarint() :
            tag === 6 ? pbf.readSVarint() :
            tag === 7 ? pbf.readBoolean() : null;
    }

    return value;
}

// return feature `i` from this layer as a `VectorTileFeature`
VectorTileLayer$2.prototype.feature = function(i) {
    if (i < 0 || i >= this._features.length) { throw new Error('feature index out of bounds'); }

    this._pbf.pos = this._features[i];

    var end = this._pbf.readVarint() + this._pbf.pos;
    return new VectorTileFeature$1(this._pbf, end, this.extent, this._keys, this._values);
};

var VectorTileLayer$1 = vectortilelayer;

var vectortile = VectorTile$1;

function VectorTile$1(pbf, end) {
    this.layers = pbf.readFields(readTile, {}, end);
}

function readTile(tag, layers, pbf) {
    if (tag === 3) {
        var layer = new VectorTileLayer$1(pbf, pbf.readVarint() + pbf.pos);
        if (layer.length) { layers[layer.name] = layer; }
    }
}

var VectorTile = vectortile;

/*
 * 🍂class VectorGrid.Protobuf
 * 🍂extends VectorGrid
 *
 * A `VectorGrid` for vector tiles fetched from the internet.
 * Tiles are supposed to be protobufs (AKA "protobuffer" or "Protocol Buffers"),
 * containing data which complies with the
 * [MapBox Vector Tile Specification](https://github.com/mapbox/vector-tile-spec/tree/master/2.1).
 *
 * This is the format used by:
 * - Mapbox Vector Tiles
 * - Mapzen Vector Tiles
 * - ESRI Vector Tiles
 * - [OpenMapTiles hosted Vector Tiles](https://openmaptiles.com/hosting/)
 *
 * 🍂example
 *
 * You must initialize a `VectorGrid.Protobuf` with a URL template, just like in
 * `L.TileLayer`s. The difference is that the template must point to vector tiles
 * (usually `.pbf` or `.mvt`) instead of raster (`.png` or `.jpg`) tiles, and that
 * you should define the styling for all the features.
 *
 * <br><br>
 *
 * For OpenMapTiles, with a key from [https://openmaptiles.org/docs/host/use-cdn/](https://openmaptiles.org/docs/host/use-cdn/),
 * initialization looks like this:
 *
 * ```
 * L.vectorGrid.protobuf("https://free-{s}.tilehosting.com/data/v3/{z}/{x}/{y}.pbf.pict?key={key}", {
 * 	vectorTileLayerStyles: { ... },
 * 	subdomains: "0123",
 * 	key: 'abcdefghi01234567890',
 * 	maxNativeZoom: 14
 * }).addTo(map);
 * ```
 *
 * And for Mapbox vector tiles, it looks like this:
 *
 * ```
 * L.vectorGrid.protobuf("https://{s}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token={token}", {
 * 	vectorTileLayerStyles: { ... },
 * 	subdomains: "abcd",
 * 	token: "pk.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTS.TUVWXTZ0123456789abcde"
 * }).addTo(map);
 * ```
 */
L.VectorGrid.Protobuf = L.VectorGrid.extend({

	options: {
		// 🍂section
		// As with `L.TileLayer`, the URL template might contain a reference to
		// any option (see the example above and note the `{key}` or `token` in the URL
		// template, and the corresponding option).
		//
		// 🍂option subdomains: String = 'abc'
		// Akin to the `subdomains` option for `L.TileLayer`.
		subdomains: 'abc',	// Like L.TileLayer
		//
		// 🍂option fetchOptions: Object = {}
		// options passed to `fetch`, e.g. {credentials: 'same-origin'} to send cookie for the current domain
		fetchOptions: {}
	},

	initialize: function(url, options) {
		// Inherits options from geojson-vt!
// 		this._slicer = geojsonvt(geojson, options);
		this._url = url;
		L.VectorGrid.prototype.initialize.call(this, options);
	},

	// 🍂method setUrl(url: String, noRedraw?: Boolean): this
	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
	setUrl: function(url, noRedraw) {
		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	},

	_getSubdomain: L.TileLayer.prototype._getSubdomain,

	_getVectorTilePromise: function(coords) {
		var data = {
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: coords.z
// 			z: this._getZoomForUrl()	/// TODO: Maybe replicate TileLayer's maxNativeZoom
		};
		if (this._map && !this._map.options.crs.infinite) {
			var invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) { // Should this option be available in Leaflet.VectorGrid?
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

		var tileUrl = L.Util.template(this._url, L.extend(data, this.options));

		return fetch(tileUrl, this.options.fetchOptions).then(function(response){

			if (!response.ok) {
				return {layers:[]};
			}

			return response.blob().then( function (blob) {
// 				console.log(blob);

				var reader = new FileReader();
				return new Promise(function(resolve){
					reader.addEventListener("loadend", function() {
						// reader.result contains the contents of blob as a typed array

						// blob.type === 'application/x-protobuf'
						var pbf = new index( reader.result );
// 						console.log(pbf);
						return resolve(new VectorTile( pbf ));

					});
					reader.readAsArrayBuffer(blob);
				});
			});
		}).then(function(json){

// 			console.log('Vector tile:', json.layers);
// 			console.log('Vector tile water:', json.layers.water);	// Instance of VectorTileLayer

			// Normalize feature getters into actual instanced features
			for (var layerName in json.layers) {
				var feats = [];

				for (var i=0; i<json.layers[layerName].length; i++) {
					var feat = json.layers[layerName].feature(i);
					feat.geometry = feat.loadGeometry();
					feats.push(feat);
				}

				json.layers[layerName].features = feats;
			}

			return json;
		});
	}
});


// 🍂factory L.vectorGrid.protobuf(url: String, options)
// Instantiates a new protobuf VectorGrid with the given URL template and options
L.vectorGrid.protobuf = function (url, options) {
	return new L.VectorGrid.Protobuf(url, options);
};

var workerCode = __$strToBlobUri("'use strict';\n\nvar simplify_1 = simplify$1;\n\n// calculate simplification data using optimized Douglas-Peucker algorithm\n\nfunction simplify$1(points, tolerance) {\n\n    var sqTolerance = tolerance * tolerance,\n        len = points.length,\n        first = 0,\n        last = len - 1,\n        stack = [],\n        i, maxSqDist, sqDist, index;\n\n    // always retain the endpoints (1 is the max value)\n    points[first][2] = 1;\n    points[last][2] = 1;\n\n    // avoid recursion by using a stack\n    while (last) {\n\n        maxSqDist = 0;\n\n        for (i = first + 1; i < last; i++) {\n            sqDist = getSqSegDist(points[i], points[first], points[last]);\n\n            if (sqDist > maxSqDist) {\n                index = i;\n                maxSqDist = sqDist;\n            }\n        }\n\n        if (maxSqDist > sqTolerance) {\n            points[index][2] = maxSqDist; // save the point importance in squared pixels as a z coordinate\n            stack.push(first);\n            stack.push(index);\n            first = index;\n\n        } else {\n            last = stack.pop();\n            first = stack.pop();\n        }\n    }\n}\n\n// square distance from a point to a segment\nfunction getSqSegDist(p, a, b) {\n\n    var x = a[0], y = a[1],\n        bx = b[0], by = b[1],\n        px = p[0], py = p[1],\n        dx = bx - x,\n        dy = by - y;\n\n    if (dx !== 0 || dy !== 0) {\n\n        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);\n\n        if (t > 1) {\n            x = bx;\n            y = by;\n\n        } else if (t > 0) {\n            x += dx * t;\n            y += dy * t;\n        }\n    }\n\n    dx = px - x;\n    dy = py - y;\n\n    return dx * dx + dy * dy;\n}\n\nvar convert_1 = convert$1;\n\nvar simplify = simplify_1;\n\n// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data\n\nfunction convert$1(data, tolerance) {\n    var features = [];\n\n    if (data.type === 'FeatureCollection') {\n        for (var i = 0; i < data.features.length; i++) {\n            convertFeature(features, data.features[i], tolerance);\n        }\n    } else if (data.type === 'Feature') {\n        convertFeature(features, data, tolerance);\n\n    } else {\n        // single geometry or a geometry collection\n        convertFeature(features, {geometry: data}, tolerance);\n    }\n    return features;\n}\n\nfunction convertFeature(features, feature, tolerance) {\n    if (feature.geometry === null) {\n        // ignore features with null geometry\n        return;\n    }\n\n    var geom = feature.geometry,\n        type = geom.type,\n        coords = geom.coordinates,\n        tags = feature.properties,\n        i, j, rings, projectedRing;\n\n    if (type === 'Point') {\n        features.push(create(tags, 1, [projectPoint(coords)]));\n\n    } else if (type === 'MultiPoint') {\n        features.push(create(tags, 1, project(coords)));\n\n    } else if (type === 'LineString') {\n        features.push(create(tags, 2, [project(coords, tolerance)]));\n\n    } else if (type === 'MultiLineString' || type === 'Polygon') {\n        rings = [];\n        for (i = 0; i < coords.length; i++) {\n            projectedRing = project(coords[i], tolerance);\n            if (type === 'Polygon') { projectedRing.outer = (i === 0); }\n            rings.push(projectedRing);\n        }\n        features.push(create(tags, type === 'Polygon' ? 3 : 2, rings));\n\n    } else if (type === 'MultiPolygon') {\n        rings = [];\n        for (i = 0; i < coords.length; i++) {\n            for (j = 0; j < coords[i].length; j++) {\n                projectedRing = project(coords[i][j], tolerance);\n                projectedRing.outer = (j === 0);\n                rings.push(projectedRing);\n            }\n        }\n        features.push(create(tags, 3, rings));\n\n    } else if (type === 'GeometryCollection') {\n        for (i = 0; i < geom.geometries.length; i++) {\n            convertFeature(features, {\n                geometry: geom.geometries[i],\n                properties: tags\n            }, tolerance);\n        }\n\n    } else {\n        throw new Error('Input data is not a valid GeoJSON object.');\n    }\n}\n\nfunction create(tags, type, geometry) {\n    var feature = {\n        geometry: geometry,\n        type: type,\n        tags: tags || null,\n        min: [2, 1], // initial bbox values;\n        max: [-1, 0]  // note that coords are usually in [0..1] range\n    };\n    calcBBox(feature);\n    return feature;\n}\n\nfunction project(lonlats, tolerance) {\n    var projected = [];\n    for (var i = 0; i < lonlats.length; i++) {\n        projected.push(projectPoint(lonlats[i]));\n    }\n    if (tolerance) {\n        simplify(projected, tolerance);\n        calcSize(projected);\n    }\n    return projected;\n}\n\nfunction projectPoint(p) {\n    var sin = Math.sin(p[1] * Math.PI / 180),\n        x = (p[0] / 360 + 0.5),\n        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);\n\n    y = y < 0 ? 0 :\n        y > 1 ? 1 : y;\n\n    return [x, y, 0];\n}\n\n// calculate area and length of the poly\nfunction calcSize(points) {\n    var area = 0,\n        dist = 0;\n\n    for (var i = 0, a, b; i < points.length - 1; i++) {\n        a = b || points[i];\n        b = points[i + 1];\n\n        area += a[0] * b[1] - b[0] * a[1];\n\n        // use Manhattan distance instead of Euclidian one to avoid expensive square root computation\n        dist += Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);\n    }\n    points.area = Math.abs(area / 2);\n    points.dist = dist;\n}\n\n// calculate the feature bounding box for faster clipping later\nfunction calcBBox(feature) {\n    var geometry = feature.geometry,\n        min = feature.min,\n        max = feature.max;\n\n    if (feature.type === 1) { calcRingBBox(min, max, geometry); }\n    else { for (var i = 0; i < geometry.length; i++) { calcRingBBox(min, max, geometry[i]); } }\n\n    return feature;\n}\n\nfunction calcRingBBox(min, max, points) {\n    for (var i = 0, p; i < points.length; i++) {\n        p = points[i];\n        min[0] = Math.min(p[0], min[0]);\n        max[0] = Math.max(p[0], max[0]);\n        min[1] = Math.min(p[1], min[1]);\n        max[1] = Math.max(p[1], max[1]);\n    }\n}\n\nvar tile = transformTile;\nvar point = transformPoint;\n\n// Transforms the coordinates of each feature in the given tile from\n// mercator-projected space into (extent x extent) tile space.\nfunction transformTile(tile, extent) {\n    if (tile.transformed) { return tile; }\n\n    var z2 = tile.z2,\n        tx = tile.x,\n        ty = tile.y,\n        i, j, k;\n\n    for (i = 0; i < tile.features.length; i++) {\n        var feature = tile.features[i],\n            geom = feature.geometry,\n            type = feature.type;\n\n        if (type === 1) {\n            for (j = 0; j < geom.length; j++) { geom[j] = transformPoint(geom[j], extent, z2, tx, ty); }\n\n        } else {\n            for (j = 0; j < geom.length; j++) {\n                var ring = geom[j];\n                for (k = 0; k < ring.length; k++) { ring[k] = transformPoint(ring[k], extent, z2, tx, ty); }\n            }\n        }\n    }\n\n    tile.transformed = true;\n\n    return tile;\n}\n\nfunction transformPoint(p, extent, z2, tx, ty) {\n    var x = Math.round(extent * (p[0] * z2 - tx)),\n        y = Math.round(extent * (p[1] * z2 - ty));\n    return [x, y];\n}\n\nvar transform$1 = {\n	tile: tile,\n	point: point\n};\n\nvar clip_1 = clip$1;\n\n/* clip features between two axis-parallel lines:\n *     |        |\n *  ___|___     |     /\n * /   |   \____|____/\n *     |        |\n */\n\nfunction clip$1(features, scale, k1, k2, axis, intersect, minAll, maxAll) {\n\n    k1 /= scale;\n    k2 /= scale;\n\n    if (minAll >= k1 && maxAll <= k2) { return features; } // trivial accept\n    else if (minAll > k2 || maxAll < k1) { return null; } // trivial reject\n\n    var clipped = [];\n\n    for (var i = 0; i < features.length; i++) {\n\n        var feature = features[i],\n            geometry = feature.geometry,\n            type = feature.type,\n            min, max;\n\n        min = feature.min[axis];\n        max = feature.max[axis];\n\n        if (min >= k1 && max <= k2) { // trivial accept\n            clipped.push(feature);\n            continue;\n        } else if (min > k2 || max < k1) { continue; } // trivial reject\n\n        var slices = type === 1 ?\n                clipPoints(geometry, k1, k2, axis) :\n                clipGeometry(geometry, k1, k2, axis, intersect, type === 3);\n\n        if (slices.length) {\n            // if a feature got clipped, it will likely get clipped on the next zoom level as well,\n            // so there's no need to recalculate bboxes\n            clipped.push({\n                geometry: slices,\n                type: type,\n                tags: features[i].tags || null,\n                min: feature.min,\n                max: feature.max\n            });\n        }\n    }\n\n    return clipped.length ? clipped : null;\n}\n\nfunction clipPoints(geometry, k1, k2, axis) {\n    var slice = [];\n\n    for (var i = 0; i < geometry.length; i++) {\n        var a = geometry[i],\n            ak = a[axis];\n\n        if (ak >= k1 && ak <= k2) { slice.push(a); }\n    }\n    return slice;\n}\n\nfunction clipGeometry(geometry, k1, k2, axis, intersect, closed) {\n\n    var slices = [];\n\n    for (var i = 0; i < geometry.length; i++) {\n\n        var ak = 0,\n            bk = 0,\n            b = null,\n            points = geometry[i],\n            area = points.area,\n            dist = points.dist,\n            outer = points.outer,\n            len = points.length,\n            a, j, last;\n\n        var slice = [];\n\n        for (j = 0; j < len - 1; j++) {\n            a = b || points[j];\n            b = points[j + 1];\n            ak = bk || a[axis];\n            bk = b[axis];\n\n            if (ak < k1) {\n\n                if ((bk > k2)) { // ---|-----|-->\n                    slice.push(intersect(a, b, k1), intersect(a, b, k2));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk >= k1) { slice.push(intersect(a, b, k1)); } // ---|-->  |\n\n            } else if (ak > k2) {\n\n                if ((bk < k1)) { // <--|-----|---\n                    slice.push(intersect(a, b, k2), intersect(a, b, k1));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk <= k2) { slice.push(intersect(a, b, k2)); } // |  <--|---\n\n            } else {\n\n                slice.push(a);\n\n                if (bk < k1) { // <--|---  |\n                    slice.push(intersect(a, b, k1));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk > k2) { // |  ---|-->\n                    slice.push(intersect(a, b, k2));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n                }\n                // | --> |\n            }\n        }\n\n        // add the last point\n        a = points[len - 1];\n        ak = a[axis];\n        if (ak >= k1 && ak <= k2) { slice.push(a); }\n\n        // close the polygon if its endpoints are not the same after clipping\n\n        last = slice[slice.length - 1];\n        if (closed && last && (slice[0][0] !== last[0] || slice[0][1] !== last[1])) { slice.push(slice[0]); }\n\n        // add the final slice\n        newSlice(slices, slice, area, dist, outer);\n    }\n\n    return slices;\n}\n\nfunction newSlice(slices, slice, area, dist, outer) {\n    if (slice.length) {\n        // we don't recalculate the area/length of the unclipped geometry because the case where it goes\n        // below the visibility threshold as a result of clipping is rare, so we avoid doing unnecessary work\n        slice.area = area;\n        slice.dist = dist;\n        if (outer !== undefined) { slice.outer = outer; }\n\n        slices.push(slice);\n    }\n    return [];\n}\n\nvar clip$2 = clip_1;\n\nvar wrap_1 = wrap$1;\n\nfunction wrap$1(features, buffer, intersectX) {\n    var merged = features,\n        left  = clip$2(features, 1, -1 - buffer, buffer,     0, intersectX, -1, 2), // left world copy\n        right = clip$2(features, 1,  1 - buffer, 2 + buffer, 0, intersectX, -1, 2); // right world copy\n\n    if (left || right) {\n        merged = clip$2(features, 1, -buffer, 1 + buffer, 0, intersectX, -1, 2); // center world copy\n\n        if (left) { merged = shiftFeatureCoords(left, 1).concat(merged); } // merge left into center\n        if (right) { merged = merged.concat(shiftFeatureCoords(right, -1)); } // merge right into center\n    }\n\n    return merged;\n}\n\nfunction shiftFeatureCoords(features, offset) {\n    var newFeatures = [];\n\n    for (var i = 0; i < features.length; i++) {\n        var feature = features[i],\n            type = feature.type;\n\n        var newGeometry;\n\n        if (type === 1) {\n            newGeometry = shiftCoords(feature.geometry, offset);\n        } else {\n            newGeometry = [];\n            for (var j = 0; j < feature.geometry.length; j++) {\n                newGeometry.push(shiftCoords(feature.geometry[j], offset));\n            }\n        }\n\n        newFeatures.push({\n            geometry: newGeometry,\n            type: type,\n            tags: feature.tags,\n            min: [feature.min[0] + offset, feature.min[1]],\n            max: [feature.max[0] + offset, feature.max[1]]\n        });\n    }\n\n    return newFeatures;\n}\n\nfunction shiftCoords(points, offset) {\n    var newPoints = [];\n    newPoints.area = points.area;\n    newPoints.dist = points.dist;\n\n    for (var i = 0; i < points.length; i++) {\n        newPoints.push([points[i][0] + offset, points[i][1], points[i][2]]);\n    }\n    return newPoints;\n}\n\nvar tile$1 = createTile$1;\n\nfunction createTile$1(features, z2, tx, ty, tolerance, noSimplify) {\n    var tile = {\n        features: [],\n        numPoints: 0,\n        numSimplified: 0,\n        numFeatures: 0,\n        source: null,\n        x: tx,\n        y: ty,\n        z2: z2,\n        transformed: false,\n        min: [2, 1],\n        max: [-1, 0]\n    };\n    for (var i = 0; i < features.length; i++) {\n        tile.numFeatures++;\n        addFeature(tile, features[i], tolerance, noSimplify);\n\n        var min = features[i].min,\n            max = features[i].max;\n\n        if (min[0] < tile.min[0]) { tile.min[0] = min[0]; }\n        if (min[1] < tile.min[1]) { tile.min[1] = min[1]; }\n        if (max[0] > tile.max[0]) { tile.max[0] = max[0]; }\n        if (max[1] > tile.max[1]) { tile.max[1] = max[1]; }\n    }\n    return tile;\n}\n\nfunction addFeature(tile, feature, tolerance, noSimplify) {\n\n    var geom = feature.geometry,\n        type = feature.type,\n        simplified = [],\n        sqTolerance = tolerance * tolerance,\n        i, j, ring, p;\n\n    if (type === 1) {\n        for (i = 0; i < geom.length; i++) {\n            simplified.push(geom[i]);\n            tile.numPoints++;\n            tile.numSimplified++;\n        }\n\n    } else {\n\n        // simplify and transform projected coordinates for tile geometry\n        for (i = 0; i < geom.length; i++) {\n            ring = geom[i];\n\n            // filter out tiny polylines & polygons\n            if (!noSimplify && ((type === 2 && ring.dist < tolerance) ||\n                                (type === 3 && ring.area < sqTolerance))) {\n                tile.numPoints += ring.length;\n                continue;\n            }\n\n            var simplifiedRing = [];\n\n            for (j = 0; j < ring.length; j++) {\n                p = ring[j];\n                // keep points with importance > tolerance\n                if (noSimplify || p[2] > sqTolerance) {\n                    simplifiedRing.push(p);\n                    tile.numSimplified++;\n                }\n                tile.numPoints++;\n            }\n\n            if (type === 3) { rewind(simplifiedRing, ring.outer); }\n\n            simplified.push(simplifiedRing);\n        }\n    }\n\n    if (simplified.length) {\n        tile.features.push({\n            geometry: simplified,\n            type: type,\n            tags: feature.tags || null\n        });\n    }\n}\n\nfunction rewind(ring, clockwise) {\n    var area = signedArea(ring);\n    if (area < 0 === clockwise) { ring.reverse(); }\n}\n\nfunction signedArea(ring) {\n    var sum = 0;\n    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {\n        p1 = ring[i];\n        p2 = ring[j];\n        sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);\n    }\n    return sum;\n}\n\nvar index = geojsonvt;\n\nvar convert = convert_1;\nvar transform = transform$1;\nvar clip = clip_1;\nvar wrap = wrap_1;\nvar createTile = tile$1;     // final simplified tile generation\n\n\nfunction geojsonvt(data, options) {\n    return new GeoJSONVT(data, options);\n}\n\nfunction GeoJSONVT(data, options) {\n    options = this.options = extend(Object.create(this.options), options);\n\n    var debug = options.debug;\n\n    if (debug) { console.time('preprocess data'); }\n\n    var z2 = 1 << options.maxZoom, // 2^z\n        features = convert(data, options.tolerance / (z2 * options.extent));\n\n    this.tiles = {};\n    this.tileCoords = [];\n\n    if (debug) {\n        console.timeEnd('preprocess data');\n        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);\n        console.time('generate tiles');\n        this.stats = {};\n        this.total = 0;\n    }\n\n    features = wrap(features, options.buffer / options.extent, intersectX);\n\n    // start slicing from the top tile down\n    if (features.length) { this.splitTile(features, 0, 0, 0); }\n\n    if (debug) {\n        if (features.length) { console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints); }\n        console.timeEnd('generate tiles');\n        console.log('tiles generated:', this.total, JSON.stringify(this.stats));\n    }\n}\n\nGeoJSONVT.prototype.options = {\n    maxZoom: 14,            // max zoom to preserve detail on\n    indexMaxZoom: 5,        // max zoom in the tile index\n    indexMaxPoints: 100000, // max number of points per tile in the tile index\n    solidChildren: false,   // whether to tile solid square tiles further\n    tolerance: 3,           // simplification tolerance (higher means simpler)\n    extent: 4096,           // tile extent\n    buffer: 64,             // tile buffer on each side\n    debug: 0                // logging level (0, 1 or 2)\n};\n\nGeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {\n    var this$1 = this;\n\n\n    var stack = [features, z, x, y],\n        options = this.options,\n        debug = options.debug,\n        solid = null;\n\n    // avoid recursion by using a processing queue\n    while (stack.length) {\n        y = stack.pop();\n        x = stack.pop();\n        z = stack.pop();\n        features = stack.pop();\n\n        var z2 = 1 << z,\n            id = toID(z, x, y),\n            tile = this$1.tiles[id],\n            tileTolerance = z === options.maxZoom ? 0 : options.tolerance / (z2 * options.extent);\n\n        if (!tile) {\n            if (debug > 1) { console.time('creation'); }\n\n            tile = this$1.tiles[id] = createTile(features, z2, x, y, tileTolerance, z === options.maxZoom);\n            this$1.tileCoords.push({z: z, x: x, y: y});\n\n            if (debug) {\n                if (debug > 1) {\n                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',\n                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);\n                    console.timeEnd('creation');\n                }\n                var key = 'z' + z;\n                this$1.stats[key] = (this$1.stats[key] || 0) + 1;\n                this$1.total++;\n            }\n        }\n\n        // save reference to original geometry in tile so that we can drill down later if we stop now\n        tile.source = features;\n\n        // if it's the first-pass tiling\n        if (!cz) {\n            // stop tiling if we reached max zoom, or if the tile is too simple\n            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) { continue; }\n\n        // if a drilldown to a specific tile\n        } else {\n            // stop tiling if we reached base zoom or our target tile zoom\n            if (z === options.maxZoom || z === cz) { continue; }\n\n            // stop tiling if it's not an ancestor of the target tile\n            var m = 1 << (cz - z);\n            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) { continue; }\n        }\n\n        // stop tiling if the tile is solid clipped square\n        if (!options.solidChildren && isClippedSquare(tile, options.extent, options.buffer)) {\n            if (cz) { solid = z; } // and remember the zoom if we're drilling down\n            continue;\n        }\n\n        // if we slice further down, no need to keep source geometry\n        tile.source = null;\n\n        if (debug > 1) { console.time('clipping'); }\n\n        // values we'll use for clipping\n        var k1 = 0.5 * options.buffer / options.extent,\n            k2 = 0.5 - k1,\n            k3 = 0.5 + k1,\n            k4 = 1 + k1,\n            tl, bl, tr, br, left, right;\n\n        tl = bl = tr = br = null;\n\n        left  = clip(features, z2, x - k1, x + k3, 0, intersectX, tile.min[0], tile.max[0]);\n        right = clip(features, z2, x + k2, x + k4, 0, intersectX, tile.min[0], tile.max[0]);\n\n        if (left) {\n            tl = clip(left, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);\n            bl = clip(left, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);\n        }\n\n        if (right) {\n            tr = clip(right, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);\n            br = clip(right, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);\n        }\n\n        if (debug > 1) { console.timeEnd('clipping'); }\n\n        if (tl) { stack.push(tl, z + 1, x * 2,     y * 2); }\n        if (bl) { stack.push(bl, z + 1, x * 2,     y * 2 + 1); }\n        if (tr) { stack.push(tr, z + 1, x * 2 + 1, y * 2); }\n        if (br) { stack.push(br, z + 1, x * 2 + 1, y * 2 + 1); }\n    }\n\n    return solid;\n};\n\nGeoJSONVT.prototype.getTile = function (z, x, y) {\n    var this$1 = this;\n\n    var options = this.options,\n        extent = options.extent,\n        debug = options.debug;\n\n    var z2 = 1 << z;\n    x = ((x % z2) + z2) % z2; // wrap tile x coordinate\n\n    var id = toID(z, x, y);\n    if (this.tiles[id]) { return transform.tile(this.tiles[id], extent); }\n\n    if (debug > 1) { console.log('drilling down to z%d-%d-%d', z, x, y); }\n\n    var z0 = z,\n        x0 = x,\n        y0 = y,\n        parent;\n\n    while (!parent && z0 > 0) {\n        z0--;\n        x0 = Math.floor(x0 / 2);\n        y0 = Math.floor(y0 / 2);\n        parent = this$1.tiles[toID(z0, x0, y0)];\n    }\n\n    if (!parent || !parent.source) { return null; }\n\n    // if we found a parent tile containing the original geometry, we can drill down from it\n    if (debug > 1) { console.log('found parent tile z%d-%d-%d', z0, x0, y0); }\n\n    // it parent tile is a solid clipped square, return it instead since it's identical\n    if (isClippedSquare(parent, extent, options.buffer)) { return transform.tile(parent, extent); }\n\n    if (debug > 1) { console.time('drilling down'); }\n    var solid = this.splitTile(parent.source, z0, x0, y0, z, x, y);\n    if (debug > 1) { console.timeEnd('drilling down'); }\n\n    // one of the parent tiles was a solid clipped square\n    if (solid !== null) {\n        var m = 1 << (z - solid);\n        id = toID(solid, Math.floor(x / m), Math.floor(y / m));\n    }\n\n    return this.tiles[id] ? transform.tile(this.tiles[id], extent) : null;\n};\n\nfunction toID(z, x, y) {\n    return (((1 << z) * y + x) * 32) + z;\n}\n\nfunction intersectX(a, b, x) {\n    return [x, (x - a[0]) * (b[1] - a[1]) / (b[0] - a[0]) + a[1], 1];\n}\nfunction intersectY(a, b, y) {\n    return [(y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]) + a[0], y, 1];\n}\n\nfunction extend(dest, src) {\n    for (var i in src) { dest[i] = src[i]; }\n    return dest;\n}\n\n// checks whether a tile is a whole-area fill after clipping; if it is, there's no sense slicing it further\nfunction isClippedSquare(tile, extent, buffer) {\n\n    var features = tile.source;\n    if (features.length !== 1) { return false; }\n\n    var feature = features[0];\n    if (feature.type !== 3 || feature.geometry.length > 1) { return false; }\n\n    var len = feature.geometry[0].length;\n    if (len !== 5) { return false; }\n\n    for (var i = 0; i < len; i++) {\n        var p = transform.point(feature.geometry[0][i], extent, tile.z2, tile.x, tile.y);\n        if ((p[0] !== -buffer && p[0] !== extent + buffer) ||\n            (p[1] !== -buffer && p[1] !== extent + buffer)) { return false; }\n    }\n\n    return true;\n}\n\nvar identity = function(x) {\n  return x;\n};\n\nvar transform$3 = function(topology) {\n  if ((transform = topology.transform) == null) { return identity; }\n  var transform,\n      x0,\n      y0,\n      kx = transform.scale[0],\n      ky = transform.scale[1],\n      dx = transform.translate[0],\n      dy = transform.translate[1];\n  return function(point, i) {\n    if (!i) { x0 = y0 = 0; }\n    point[0] = (x0 += point[0]) * kx + dx;\n    point[1] = (y0 += point[1]) * ky + dy;\n    return point;\n  };\n};\n\nvar bbox = function(topology) {\n  var bbox = topology.bbox;\n\n  function bboxPoint(p0) {\n    p1[0] = p0[0], p1[1] = p0[1], t(p1);\n    if (p1[0] < x0) { x0 = p1[0]; }\n    if (p1[0] > x1) { x1 = p1[0]; }\n    if (p1[1] < y0) { y0 = p1[1]; }\n    if (p1[1] > y1) { y1 = p1[1]; }\n  }\n\n  function bboxGeometry(o) {\n    switch (o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(bboxGeometry); break;\n      case \"Point\": bboxPoint(o.coordinates); break;\n      case \"MultiPoint\": o.coordinates.forEach(bboxPoint); break;\n    }\n  }\n\n  if (!bbox) {\n    var t = transform$3(topology), p0, p1 = new Array(2), name,\n        x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;\n\n    topology.arcs.forEach(function(arc) {\n      var i = -1, n = arc.length;\n      while (++i < n) {\n        p0 = arc[i], p1[0] = p0[0], p1[1] = p0[1], t(p1, i);\n        if (p1[0] < x0) { x0 = p1[0]; }\n        if (p1[0] > x1) { x1 = p1[0]; }\n        if (p1[1] < y0) { y0 = p1[1]; }\n        if (p1[1] > y1) { y1 = p1[1]; }\n      }\n    });\n\n    for (name in topology.objects) {\n      bboxGeometry(topology.objects[name]);\n    }\n\n    bbox = topology.bbox = [x0, y0, x1, y1];\n  }\n\n  return bbox;\n};\n\nvar reverse = function(array, n) {\n  var t, j = array.length, i = j - n;\n  while (i < --j) { t = array[i], array[i++] = array[j], array[j] = t; }\n};\n\nvar feature = function(topology, o) {\n  return o.type === \"GeometryCollection\"\n      ? {type: \"FeatureCollection\", features: o.geometries.map(function(o) { return feature$1(topology, o); })}\n      : feature$1(topology, o);\n};\n\nfunction feature$1(topology, o) {\n  var id = o.id,\n      bbox = o.bbox,\n      properties = o.properties == null ? {} : o.properties,\n      geometry = object(topology, o);\n  return id == null && bbox == null ? {type: \"Feature\", properties: properties, geometry: geometry}\n      : bbox == null ? {type: \"Feature\", id: id, properties: properties, geometry: geometry}\n      : {type: \"Feature\", id: id, bbox: bbox, properties: properties, geometry: geometry};\n}\n\nfunction object(topology, o) {\n  var transformPoint = transform$3(topology),\n      arcs = topology.arcs;\n\n  function arc(i, points) {\n    if (points.length) { points.pop(); }\n    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {\n      points.push(transformPoint(a[k].slice(), k));\n    }\n    if (i < 0) { reverse(points, n); }\n  }\n\n  function point(p) {\n    return transformPoint(p.slice());\n  }\n\n  function line(arcs) {\n    var points = [];\n    for (var i = 0, n = arcs.length; i < n; ++i) { arc(arcs[i], points); }\n    if (points.length < 2) { points.push(points[0].slice()); }\n    return points;\n  }\n\n  function ring(arcs) {\n    var points = line(arcs);\n    while (points.length < 4) { points.push(points[0].slice()); }\n    return points;\n  }\n\n  function polygon(arcs) {\n    return arcs.map(ring);\n  }\n\n  function geometry(o) {\n    var type = o.type, coordinates;\n    switch (type) {\n      case \"GeometryCollection\": return {type: type, geometries: o.geometries.map(geometry)};\n      case \"Point\": coordinates = point(o.coordinates); break;\n      case \"MultiPoint\": coordinates = o.coordinates.map(point); break;\n      case \"LineString\": coordinates = line(o.arcs); break;\n      case \"MultiLineString\": coordinates = o.arcs.map(line); break;\n      case \"Polygon\": coordinates = polygon(o.arcs); break;\n      case \"MultiPolygon\": coordinates = o.arcs.map(polygon); break;\n      default: return null;\n    }\n    return {type: type, coordinates: coordinates};\n  }\n\n  return geometry(o);\n}\n\nvar stitch = function(topology, arcs) {\n  var stitchedArcs = {},\n      fragmentByStart = {},\n      fragmentByEnd = {},\n      fragments = [],\n      emptyIndex = -1;\n\n  // Stitch empty arcs first, since they may be subsumed by other arcs.\n  arcs.forEach(function(i, j) {\n    var arc = topology.arcs[i < 0 ? ~i : i], t;\n    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {\n      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;\n    }\n  });\n\n  arcs.forEach(function(i) {\n    var e = ends(i),\n        start = e[0],\n        end = e[1],\n        f, g;\n\n    if (f = fragmentByEnd[start]) {\n      delete fragmentByEnd[f.end];\n      f.push(i);\n      f.end = end;\n      if (g = fragmentByStart[end]) {\n        delete fragmentByStart[g.start];\n        var fg = g === f ? f : f.concat(g);\n        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else if (f = fragmentByStart[end]) {\n      delete fragmentByStart[f.start];\n      f.unshift(i);\n      f.start = start;\n      if (g = fragmentByEnd[start]) {\n        delete fragmentByEnd[g.end];\n        var gf = g === f ? f : g.concat(f);\n        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else {\n      f = [i];\n      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;\n    }\n  });\n\n  function ends(i) {\n    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;\n    if (topology.transform) { p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; }); }\n    else { p1 = arc[arc.length - 1]; }\n    return i < 0 ? [p1, p0] : [p0, p1];\n  }\n\n  function flush(fragmentByEnd, fragmentByStart) {\n    for (var k in fragmentByEnd) {\n      var f = fragmentByEnd[k];\n      delete fragmentByStart[f.start];\n      delete f.start;\n      delete f.end;\n      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });\n      fragments.push(f);\n    }\n  }\n\n  flush(fragmentByEnd, fragmentByStart);\n  flush(fragmentByStart, fragmentByEnd);\n  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) { fragments.push([i]); } });\n\n  return fragments;\n};\n\nfunction extractArcs(topology, object$$1, filter) {\n  var arcs = [],\n      geomsByArc = [],\n      geom;\n\n  function extract0(i) {\n    var j = i < 0 ? ~i : i;\n    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});\n  }\n\n  function extract1(arcs) {\n    arcs.forEach(extract0);\n  }\n\n  function extract2(arcs) {\n    arcs.forEach(extract1);\n  }\n\n  function extract3(arcs) {\n    arcs.forEach(extract2);\n  }\n\n  function geometry(o) {\n    switch (geom = o, o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(geometry); break;\n      case \"LineString\": extract1(o.arcs); break;\n      case \"MultiLineString\": case \"Polygon\": extract2(o.arcs); break;\n      case \"MultiPolygon\": extract3(o.arcs); break;\n    }\n  }\n\n  geometry(object$$1);\n\n  geomsByArc.forEach(filter == null\n      ? function(geoms) { arcs.push(geoms[0].i); }\n      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) { arcs.push(geoms[0].i); } });\n\n  return arcs;\n}\n\nfunction planarRingArea(ring) {\n  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;\n  while (++i < n) { a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0]; }\n  return Math.abs(area); // Note: doubled area!\n}\n\nvar bisect = function(a, x) {\n  var lo = 0, hi = a.length;\n  while (lo < hi) {\n    var mid = lo + hi >>> 1;\n    if (a[mid] < x) { lo = mid + 1; }\n    else { hi = mid; }\n  }\n  return lo;\n};\n\nvar slicers = {};\nvar options;\n\nonmessage = function (e) {\n	if (e.data[0] === 'slice') {\n		// Given a blob of GeoJSON and some topojson/geojson-vt options, do the slicing.\n		var geojson = e.data[1];\n		options     = e.data[2];\n\n		if (geojson.type && geojson.type === 'Topology') {\n			for (var layerName in geojson.objects) {\n				slicers[layerName] = index(\n					feature(geojson, geojson.objects[layerName])\n				, options);\n			}\n		} else {\n			slicers[options.vectorTileLayerName] = index(geojson, options);\n		}\n\n	} else if (e.data[0] === 'get') {\n		// Gets the vector tile for the given coordinates, sends it back as a message\n		var coords = e.data[1];\n\n		var tileLayers = {};\n		for (var layerName in slicers) {\n			var slicedTileLayer = slicers[layerName].getTile(coords.z, coords.x, coords.y);\n\n			if (slicedTileLayer) {\n				var vectorTileLayer = {\n					features: [],\n					extent: options.extent,\n					name: options.vectorTileLayerName,\n					length: slicedTileLayer.features.length\n				};\n\n				for (var i in slicedTileLayer.features) {\n					var feat = {\n						geometry: slicedTileLayer.features[i].geometry,\n						properties: slicedTileLayer.features[i].tags,\n						type: slicedTileLayer.features[i].type	// 1 = point, 2 = line, 3 = polygon\n					};\n					vectorTileLayer.features.push(feat);\n				}\n				tileLayers[layerName] = vectorTileLayer;\n			}\n		}\n		postMessage({ layers: tileLayers, coords: coords });\n	}\n};\n//# sourceMap" + "pingURL=slicerWebWorker.js.worker.map\n", "text/plain; charset=us-ascii", false);

// The geojson/topojson is sliced into tiles via a web worker.
// This import statement depends on rollup-file-as-blob, so that the
// variable 'workerCode' is a blob URL.

/*
 * 🍂class VectorGrid.Slicer
 * 🍂extends VectorGrid
 *
 * A `VectorGrid` for slicing up big GeoJSON or TopoJSON documents in vector
 * tiles, leveraging [`geojson-vt`](https://github.com/mapbox/geojson-vt).
 *
 * 🍂example
 *
 * ```
 * var geoJsonDocument = {
 * 	type: 'FeatureCollection',
 * 	features: [ ... ]
 * };
 *
 * L.vectorGrid.slicer(geoJsonDocument, {
 * 	vectorTileLayerStyles: {
 * 		sliced: { ... }
 * 	}
 * }).addTo(map);
 *
 * ```
 *
 * `VectorGrid.Slicer` can also handle [TopoJSON](https://github.com/mbostock/topojson) transparently:
 * ```js
 * var layer = L.vectorGrid.slicer(topojson, options);
 * ```
 *
 * The TopoJSON format [implicitly groups features into "objects"](https://github.com/mbostock/topojson-specification/blob/master/README.md#215-objects).
 * These will be transformed into vector tile layer names when styling (the
 * `vectorTileLayerName` option is ignored when using TopoJSON).
 *
 */

L.VectorGrid.Slicer = L.VectorGrid.extend({

	options: {
		// 🍂section
		// Additionally to these options, `VectorGrid.Slicer` can take in any
		// of the [`geojson-vt` options](https://github.com/mapbox/geojson-vt#options).

		// 🍂option vectorTileLayerName: String = 'sliced'
		// Vector tiles contain a set of *data layers*, and those data layers
		// contain features. Thus, the slicer creates one data layer, with
		// the name given in this option. This is important for symbolizing the data.
		vectorTileLayerName: 'sliced',

		extent: 4096,	// Default for geojson-vt
		maxZoom: 14  	// Default for geojson-vt
	},

	initialize: function(geojson, options) {
		L.VectorGrid.prototype.initialize.call(this, options);

		// Create a shallow copy of this.options, excluding things that might
		// be functions - we only care about topojson/geojsonvt options
		var options = {};
		for (var i in this.options) {
			if (i !== 'rendererFactory' &&
				i !== 'vectorTileLayerStyles' &&
				typeof (this.options[i]) !== 'function'
			) {
				options[i] = this.options[i];
			}
		}

// 		this._worker = new Worker(window.URL.createObjectURL(new Blob([workerCode])));
		this._worker = new Worker(workerCode);

		// Send initial data to worker.
		this._worker.postMessage(['slice', geojson, options]);

	},


	_getVectorTilePromise: function(coords) {

		var _this = this;

		var p = new Promise( function waitForWorker(res) {
			_this._worker.addEventListener('message', function recv(m) {
				if (m.data.coords &&
				    m.data.coords.x === coords.x &&
				    m.data.coords.y === coords.y &&
				    m.data.coords.z === coords.z ) {

					res(m.data);
					_this._worker.removeEventListener('message', recv);
				}
			});
		});

		this._worker.postMessage(['get', coords]);

		return p;
	},

});


L.vectorGrid.slicer = function (geojson, options) {
	return new L.VectorGrid.Slicer(geojson, options);
};

L.Canvas.Tile = L.Canvas.extend({

	initialize: function (tileCoord, tileSize, options) {
		L.Canvas.prototype.initialize.call(this, options);
		this._tileCoord = tileCoord;
		this._size = tileSize;

		this._initContainer();
		this._container.setAttribute('width', this._size.x);
		this._container.setAttribute('height', this._size.y);
		this._layers = {};
		this._drawnLayers = {};
		this._drawing = true;

		if (options.interactive) {
			// By default, Leaflet tiles do not have pointer events
			this._container.style.pointerEvents = 'auto';
		}
	},

	getCoord: function() {
		return this._tileCoord;
	},

	getContainer: function() {
		return this._container;
	},

	getOffset: function() {
		return this._tileCoord.scaleBy(this._size).subtract(this._map.getPixelOrigin());
	},

	onAdd: L.Util.falseFn,

	addTo: function(map) {
		this._map = map;
	},

	removeFrom: function (map) {
		delete this._map;
	},

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e).subtract(this.getOffset()), layer, clickedLayer;

		for (var id in this._layers) {
			layer = this._layers[id];
			if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
				clickedLayer = layer;
			}
		}
		if (clickedLayer)  {
			L.DomEvent.fakeStop(e);
			this._fireEvent([clickedLayer], e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e).subtract(this.getOffset());
		this._handleMouseHover(e, point);
	},

	/// TODO: Modify _initPath to include an extra parameter, a group name
	/// to order symbolizers by z-index

	_updateIcon: function (layer) {
		if (!this._drawing) { return; }

		var icon = layer.options.icon,
		    options = icon.options,
		    size = L.point(options.iconSize),
		    anchor = options.iconAnchor ||
		        	 size && size.divideBy(2, true),
		    p = layer._point.subtract(anchor),
		    ctx = this._ctx,
		    img = layer._getImage();

		if (img.complete) {
			ctx.drawImage(img, p.x, p.y, size.x, size.y);
		} else {
			L.DomEvent.on(img, 'load', function() {
				ctx.drawImage(img, p.x, p.y, size.x, size.y);
			});
		}

		this._drawnLayers[layer._leaflet_id] = layer;
	}
});


L.canvas.tile = function(tileCoord, tileSize, opts){
	return new L.Canvas.Tile(tileCoord, tileSize, opts);
};

// Aux file to bundle everything together
//# sourceMappingURL=Leaflet.VectorGrid.js.map
;
///<jscompress sourcefile="leaflet-heat.js" />
/*
 (c) 2014, Vladimir Agafonkin
 simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
 https://github.com/mourner/simpleheat
*/
! function() {
	"use strict";

	function t(i) {
		return this instanceof t ? (this._canvas = i = "string" == typeof i ? document.getElementById(i) : i, this._ctx = i.getContext("2d"), this._width = i.width, this._height = i.height, this._max = 1, void this.clear()) : new t(i)
	}
	t.prototype = {
		defaultRadius: 25,
		defaultGradient: {
			.4: "blue",
			.6: "cyan",
			.7: "lime",
			.8: "yellow",
			1: "red"
		},
		data: function(t, i) {
			return this._data = t, this
		},
		max: function(t) {
			return this._max = t, this
		},
		add: function(t) {
			return this._data.push(t), this
		},
		clear: function() {
			return this._data = [], this
		},
		radius: function(t, i) {
			i = i || 15;
			var a = this._circle = document.createElement("canvas"),
				s = a.getContext("2d"),
				e = this._r = t + i;
			return a.width = a.height = 2 * e, s.shadowOffsetX = s.shadowOffsetY = 200, s.shadowBlur = i, s.shadowColor = "black", s.beginPath(), s.arc(e - 200, e - 200, t, 0, 2 * Math.PI, !0), s.closePath(), s.fill(), this
		},
		gradient: function(t) {
			var i = document.createElement("canvas"),
				a = i.getContext("2d"),
				s = a.createLinearGradient(0, 0, 0, 256);
			i.width = 1, i.height = 256;
			for (var e in t) s.addColorStop(e, t[e]);
			return a.fillStyle = s, a.fillRect(0, 0, 1, 256), this._grad = a.getImageData(0, 0, 1, 256).data, this
		},
		draw: function(t) {
			this._circle || this.radius(this.defaultRadius), this._grad || this.gradient(this.defaultGradient);
			var i = this._ctx;
			i.clearRect(0, 0, this._width, this._height);
			for (var a, s = 0, e = this._data.length; e > s; s++) a = this._data[s], i.globalAlpha = Math.max(a[2] / this._max, t || .05), i.drawImage(this._circle, a[0] - this._r, a[1] - this._r);
			var n = i.getImageData(0, 0, this._width, this._height);
			return this._colorize(n.data, this._grad), i.putImageData(n, 0, 0), this
		},
		_colorize: function(t, i) {
			for (var a, s = 3, e = t.length; e > s; s += 4) a = 4 * t[s], a && (t[s - 3] = i[a], t[s - 2] = i[a + 1], t[s - 1] = i[a + 2])
		}
	}, window.simpleheat = t
}(),
/*
 (c) 2014, Vladimir Agafonkin
 Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
 https://github.com/Leaflet/Leaflet.heat
*/
L.HeatLayer = (L.Layer ? L.Layer : L.Class).extend({
	initialize: function(t, i) {
		this._latlngs = t, L.setOptions(this, i);
		let opt=i||{};
        this._minZoom=opt.minZoom!=undefined?opt.minZoom:0;
        this._maxZoom=opt.maxZoom!=undefined?opt.maxZoom:22;
        this._isShow=true;
	},
	setLatLngs: function(t) {
		return this._latlngs = t, this.redraw()
	},
	addLatLng: function(t) {
		return this._latlngs.push(t), this.redraw()
	},
	setOptions: function(t) {
		return L.setOptions(this, t), this._heat && this._updateOptions(), this.redraw()
	},
	redraw: function() {
		return !this._heat || this._frame || this._map._animating || (this._frame = L.Util.requestAnimFrame(this._redraw, this)), this
	},
	onAdd: function(t) {
        this._map = t, this._canvas || this._initCanvas();
        if(this._isShow){t._panes.overlayPane.appendChild(this._canvas)}
         t.on("moveend", this._reset, this), t.options.zoomAnimation && L.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
	},
	onRemove: function(t) {
        if(this._isShow){t.getPanes().overlayPane.removeChild(this._canvas)}
		t.off("moveend", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
    },
    removeCanvas:function(t){
        t.getPanes().overlayPane.removeChild(this._canvas);
        this._isShow=false;
    },
    removeEvent:function(){
        t.on("moveend", this._reset, this), t.options.zoomAnimation && L.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
    },
    addEvent:function(){
        t.off("moveend", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
    },
    addCanvas:function(t){
		this._map = t, this._canvas || this._initCanvas(), t._panes.overlayPane.appendChild(this._canvas), this._reset()
        this._isShow=true;
    },
    getShowState:function(){
        return this._isShow;
    },
	addTo: function(t) {
		return t.addLayer(this), this
	},
	_initCanvas: function() {
		var t = this._canvas = L.DomUtil.create("canvas", "leaflet-heatmap-layer leaflet-layer"),
			i = L.DomUtil.testProp(["transformOrigin", "WebkitTransformOrigin", "msTransformOrigin"]);
		t.style[i] = "50% 50%";
		var a = this._map.getSize();
		t.width = a.x, t.height = a.y;
		var s = this._map.options.zoomAnimation && L.Browser.any3d;
		L.DomUtil.addClass(t, "leaflet-zoom-" + (s ? "animated" : "hide")), this._heat = simpleheat(t), this._updateOptions()
	},
	_updateOptions: function() {
		this._heat.radius(this.options.radius || this._heat.defaultRadius, this.options.blur), this.options.gradient && this._heat.gradient(this.options.gradient), this.options.max && this._heat.max(this.options.max)
	},
	_reset: function() {
        var zoom=this._map.getZoom();
        if(zoom>=this._minZoom&&zoom<=this._maxZoom){
            var t = this._map.containerPointToLayerPoint([0, 0]);
            L.DomUtil.setPosition(this._canvas, t);
            var i = this._map.getSize();
            this._heat._width !== i.x && (this._canvas.width = this._heat._width = i.x), this._heat._height !== i.y && (this._canvas.height = this._heat._height = i.y), this._redraw()
        }
	},
	_redraw: function() {
		var t, i, a, s, e, n, h, o, r, d = [],
			_ = this._heat._r,
			l = this._map.getSize(),
			m = new L.Bounds(L.point([-_, -_]), l.add([_, _])),
			c = void 0 === this.options.max ? 1 : this.options.max,
			u = void 0 === this.options.maxZoom ? this._map.getMaxZoom() : this.options.maxZoom,
			f = 1 / Math.pow(2, Math.max(0, Math.min(u - this._map.getZoom(), 12))),
			g = _ / 2,
			p = [],
			v = this._map._getMapPanePos(),
			w = v.x % g,
			y = v.y % g;
		for (t = 0, i = this._latlngs.length; i > t; t++)
			if (a = this._map.latLngToContainerPoint(this._latlngs[t]), m.contains(a)) {
				e = Math.floor((a.x - w) / g) + 2, n = Math.floor((a.y - y) / g) + 2;
				var x = void 0 !== this._latlngs[t].alt ? this._latlngs[t].alt : void 0 !== this._latlngs[t][2] ? +this._latlngs[t][2] : 1;
				r = x * f, p[n] = p[n] || [], s = p[n][e], s ? (s[0] = (s[0] * s[2] + a.x * r) / (s[2] + r), s[1] = (s[1] * s[2] + a.y * r) / (s[2] + r), s[2] += r) : p[n][e] = [a.x, a.y, r]
			}
		for (t = 0, i = p.length; i > t; t++)
			if (p[t])
				for (h = 0, o = p[t].length; o > h; h++) s = p[t][h], s && d.push([Math.round(s[0]), Math.round(s[1]), Math.min(s[2], c)]);
		this._heat.data(d).draw(this.options.minOpacity), this._frame = null
	},
	_animateZoom: function(t) {
		var i = this._map.getZoomScale(t.zoom),
			a = this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());
		L.DomUtil.setTransform ? L.DomUtil.setTransform(this._canvas, a, i) : this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(a) + " scale(" + i + ")"
	}
}), L.heatLayer = function(t, i) {
	return new L.HeatLayer(t, i)
};;
///<jscompress sourcefile="leaflet-tilelayer-wmts.js" />
/**
 * Created by dingzhuang on 2018/7/30.
 */
L.TileLayer.WMTS = L.TileLayer.extend({
    defaultWmtsParams: {
        service: 'WMTS',
        request: 'GetTile',
        version: '1.0.0',
        layers: '',
        styles: '',
        tilematrixSet: '',
        format: 'image/jpeg'
    }, initialize: function (url, options) {
        this._url = url;
        var wmtsParams = L.extend({}, this.defaultWmtsParams);
        var tileSize = options.tileSize || this.options.tileSize;
        if (options.detectRetina && L.Browser.retina) {
            wmtsParams.width = wmtsParams.height = tileSize * 2;
        } else {
            wmtsParams.width = wmtsParams.height = tileSize;
        }
        for (var i in options) {
            if (!this.options.hasOwnProperty(i) && i != "matrixIds") {
                wmtsParams[i] = options[i];
            }
        }
        this.wmtsParams = wmtsParams;
        this.matrixIds = options.matrixIds || this.getDefaultMatrix();
        L.setOptions(this, options);
    }, onAdd: function (map) {
        this._crs = this.options.crs || map.options.crs;
        L.TileLayer.prototype.onAdd.call(this, map);
    }, getTileUrl: function (coords) {
        var tileSize = this.options.tileSize;
        var nwPoint = coords.multiplyBy(tileSize);
        nwPoint.x += 1;
        nwPoint.y -= 1;
        var sePoint = nwPoint.add(new L.Point(tileSize, tileSize));
        var zoom = this._tileZoom;
        var nw = this._crs.project(this._map.unproject(nwPoint, zoom));
        var se = this._crs.project(this._map.unproject(sePoint, zoom));
        var tilewidth = se.x - nw.x;
        var ident = this.matrixIds[zoom].identifier;
        // var tilematrix = this.wmtsParams.tilematrixSet + ":" + ident;
        var tilematrix =ident;//geoserver 2.13.2
        var X0 = this.matrixIds[zoom].topLeftCorner.lng;
        var Y0 = this.matrixIds[zoom].topLeftCorner.lat;
        var tilecol = Math.floor((nw.x - X0) / tilewidth);
        var tilerow = -Math.floor((nw.y - Y0) / tilewidth);
        var url = L.Util.template(this._url, {s: this._getSubdomain(coords)});
        return url + L.Util.getParamString(this.wmtsParams, url) + "&tilematrix=" + tilematrix + "&tilerow=" + tilerow + "&tilecol=" + tilecol;
    }, setParams: function (params, noRedraw) {
        L.extend(this.wmtsParams, params);
        if (!noRedraw) {
            this.redraw();
        }
        return this;
    }, getDefaultMatrix: function () {
        var matrixIds3857 = new Array(22);
        for (var i = 0; i < 22; i++) {
            matrixIds3857[i] = {identifier: "" + i, topLeftCorner: new L.LatLng(20037508.3428, -20037508.3428)};
        }
        return matrixIds3857;
    }
});
L.tileLayer.wmts = function (url, options) {
    return new L.TileLayer.WMTS(url, options);
};;
///<jscompress sourcefile="ZMap2.0.js" />



// (function(win){

    /**
     * @class ZMap2.0接口总入口,不能直接初始化，leaflet 原有接口：{@link https://leafletjs.com/reference-1.3.4.html}
	 * @author  LiBingya on 2018/11/08.  Email：li.bingya@iwhalecloud.com; 欢迎反馈！
     * @type {{}}
     */
	let Z={};
	
	// window.Z=Z;



 /**
     * 获取当前时间
     * @returns {string}
     */
    function getCurrentTime() {
        let date = new Date();
        let sign1 = '-';
        let sign2 = ':';
        let year = date.getFullYear(); // 年
        let month = date.getMonth() + 1; // 月
        let day = date.getDate(); // 日
        let hour = date.getHours(); // 时
        let minutes = date.getMinutes(); // 分
        let seconds = date.getSeconds() //秒
        // let weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
        // let week = weekArr[date.getDay()];
        // 给一位数数据前面加 '0”
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (day >= 0 && day <= 9) {
            day = '0' + day;
        }
        if (hour >= 0 && hour <= 9) {
            hour = '0' + hour;
        }
        if (minutes >= 0 && minutes <= 9) {
            minutes = '0' + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = '0' + seconds;
        }
        let currentdate = year + sign1 + month + sign1 + day + ' ' + hour + sign2 + minutes + sign2 + seconds;
        return currentdate;
    }

    //点击地图或悬停1秒埋点信息
    function createStoreInfo4Type1(type, evtObj) {
        const userJson = sessionStorage.getItem('currentUser');
        if (!userJson) {
            return null;
        }

        let info = {};
        const currentTime = getCurrentTime();
        const user = JSON.parse(userJson);
        //用户id
        info.userId = user.userId;
        //用户手机
        info.phoneNumber = user.phoneNumber;
        //时间戳
        info.gisTimestamp = currentTime;
        //单击地图
        if ('clickFeatureLayer' == type) {
            info.clickOrSuspend = '0';
        }
        //地图悬浮一秒
        else {
            info.clickOrSuspend = '1';
        }
        info.addressId = evtObj.featureAttr.addressid;
        if (evtObj.latlng) {
            info.clickOrSuspendGisId = evtObj.latlng.lat + ',' + evtObj.latlng.lng;
        } else {
            info.clickOrSuspendGisId = '';
        }

        //返回地图像素分辨率
        if (evtObj.resolution) {
            info.scale = JSON.stringify(evtObj.resolution);
        } else {
            info.scale = evtObj.zoom;
        }
        return info;
    }

    //点击地图或悬停1秒埋点信息
    function createStoreInfo4Type2(type, evtObj) {
        const userJson = sessionStorage.getItem('currentUser');
        if (!userJson) {
            return null;
        }

        let info = {};
        const currentTime = getCurrentTime();
        const user = JSON.parse(userJson);
        //用户id
        info.userId = user.userId;
        //用户手机
        info.phoneNumber = user.phoneNumber;
        //时间戳
        info.gisTimestamp = currentTime;
        info.operationName = type;
        if (evtObj.latlng) {
            info.coordinate = evtObj.latlng.lat + ',' + evtObj.latlng.lng;
        } else {
            info.coordinate = '';
        }

        //返回地图像素分辨率
        if (evtObj.resolution) {
            info.scale = JSON.stringify(evtObj.resolution);
        } else {
            info.scale = evtObj.zoom;
        }
        //返回中心矩形的坐标范围，默认大小：300*200 px
        if (evtObj.centerRectBounds) {
            info.currentCenter = evtObj.centerRectBounds.northEast.lat + ',' + evtObj.centerRectBounds.northEast.lng + ' ' +
                evtObj.centerRectBounds.southWest.lat + evtObj.centerRectBounds.southWest.lng;
        } else {
            evtObj.centerRectBounds = '';
        }

        return info;
    }

    /**
     * 埋点调用方法
     * @param type
     * @param evt
     */
    function storeOperateInfo(type, event) {
        if (!type || !event) {
            return;
        }
        const sendTypeObj = {
            'clickFeatureLayer': '1', //点击地图要素
            // 'mousemove map': '1',//鼠标悬停1秒
            'zoomInMap': '2', //放大
            'zoomOutMap': '2', //缩小
            'moveendMap': '2' //拖拽
        }
        const sendType = sendTypeObj[type];
        let info = null;
        if ('1' === sendType) {
            info = createStoreInfo4Type1(type, event);
        } else if ('2' === sendType) {
            info = createStoreInfo4Type2(type, event);
        }
        if (!info) {
            return;
        }
        const productCode = sessionStorage.getItem('currentOpenProductCode');
        const params = {
            'appId': productCode ? productCode : '',
            'type': sendType,
            'createTime': getCurrentTime(),
            'datas': [info]
        };
        console.log(params);
        $.ajax({
            type: 'post',
            contentType: 'application/json',
            async: true,
            url: reqPrefix + '/api/product/etl/dataCollect',
            data: JSON.stringify(params),
            dataType: 'json',
            success: function () {}
        });
    }

    //map类
    (function(z){
        
        z.Zmap=L.Map.extend({
            initialize:function(mapId, options){
                this._eventFunction={};
                // let CRS_3857 = new L.Proj.CRS('EPSG:3857',
                // '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378137 +b=6378137 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ',  // EPSG:4490的PROJ.4描述
                // {
                //     origin:[-20037508.34,20037508.34],
                //     resolutions: [
                //         156543.03392800014,
                //         78271.51696400007,
                //         39135.758482000034,
                //         19567.879241000017,
                //         9783.939620500008,
                //         4891.969810250004,
                //         2445.984905125002,
                //         1222.992452562501,
                //         611.4962262812505,
                //         305.74811314062526,
                //         152.87405657031263,
                //         76.43702828515632, 
                //         38.21851414257816, 
                //         19.10925707128908, 
                //         9.55462853564454, 
                //         4.77731426782227, 
                //         2.388657133911135, 
                //         1.1943285669555674, 
                //         0.5971642834777837, 
                //         0.29858214173889186, 
                //         0.14929107086944593, 
                //         0.07464553543472296, 
                //         0.03732276771736148
                //     ]
                // });
                // options.crs=CRS_3857;
                options.zoomControl= false;
                options.attributionControl= false;
                L.Map.prototype.initialize.call(this,mapId, options);
            },
            /**
             * zmap 关闭事件方法
             * @example zmap.off('click',fn);
             */
            off:function(type,fn){
                if(!fn){
                    return;
                }
                L.Map.prototype.off.call(this,type,fn);
            },
            /**
             * zmap 类的获取地图当前像素分辨率函数，即每像素对应多少米
             * @returns {number}  单位：米/像素
             * @example let resolution=zmap.getResolution();
             */
            getResolution:function(){
                let bound = this.getBounds();
                let dlat = bound._northEast.lat - bound._southWest.lat; //纬度差值
                let dy = this.getSize().y; //地图高度，像素
                let long = 40008.6 * 1000 * dlat / 360; //经线弧长对应的实际长度，米
                return long / dy; //每个像素的长度
            },
            /**
             * zmap 类的获取地图范围函数函数
             * @returns {object} 例：{{northEast:{}, southEast:{}}}
             * @example let resolution=zmap.getBounds();
             */
            getBounds : function () {
                let bounds = L.Map.prototype.getBounds.call(this);
                bounds.northEast= bounds._northEast;
                bounds.southWest=bounds._southWest;
                return bounds;
            },
            /**
             * zmap 类的获取以地图中心为中心函数，宽为width，高height的矩形边界
             * @param {number} width 像素宽，px
             * @param {number} height 像素高，px
             * @returns {object}  矩形的地图范围坐标
             * @example let resolution=zmap.getRectangleBouds();
             */
            getRectangleBouds : function (width, height) {
                let center = this.getCenter();
                let centerPiexl = this.latLngToLayerPoint(center);

                let leftDown = [centerPiexl.x - width / 2, centerPiexl.y + height / 2];
                let rightTop = [centerPiexl.x + width / 2, centerPiexl.y - height / 2];

                let southWest = this.layerPointToLatLng(leftDown);
                let northEast = this.layerPointToLatLng(rightTop);
                return {
                    southWest: southWest,
                    northEast: northEast
                };
            },
            /**
             * zmap 类的打开鼠标跟随提示框
             * @param {string} text 提示文本
             * @param options 选项
             * @param options.direction direction 方向：'auto'|'left'|'right'|'top'|'bottom'|'center'
             * @example zmap.opentip('a,hahaha!');
             */
            opentip : function (text, options) {
                let opt = options || {};
                let toolTip = new L.tooltip({
                    direction: opt.direction || 'right'
                });
                this.mapTipLayer = new L.circleMarker([0, 0], {
                    opacity: 0,
                    fillOpacity: 0
                }).bindTooltip(toolTip).addTo(this);
                this.mapTipLayer.openTooltip();
                this.mapTipLayer.setTooltipContent(text);
                let self = this;
                this.on('mousemove', function (evt) {
                    if (self.mapTipLayer != null) {
                        let latlng = evt.latlng;
                        self.mapTipLayer.setLatLng(latlng);
                    }
                })
            },
            /**
             * zmap 类的关闭鼠标跟随提示框
             * @example zmap.closetip();
             */
            closetip : function () {
                this.mapTipLayer.closeTooltip();
                if (this.mapTipLayer) {
                    this.mapTipLayer.remove();
                    this.mapTipLayer = null;
                }
            },
            /**
             * zmap 类的判断是否包含feature，feature可为marker,polyline,polygon,circleMarker等
             * @param {object} feature zmap中矢量对象
             * @returns {boolean} 是否包含
             * @example let isHasFeature=zmap.hasFeature(feature);
             */
            hasFeature :function (feature) {
                return this.hasLayer(feature);
            },
            /**
             * zmap 类的添加feature函数
             * @param {object} feature  zmap矢量类型
             * @example zmap.addFeature(feature);
             */
            addFeature : function (feature) {
                feature.addTo(this);
            },
            /**
             * zmap 类的删除feature函数
             * @param {object} feature zmap中的矢量类型
             * @example zmap.removeFeature(feature);
             */
            removeFeature:function (feature) {
                feature.remove();
            },
            /**
             * zmap 类的添加监听事件函数
             * @param {string}type 事件类型，'load','zoom','resize','zoomend','move','moveend','click','dblclick','mouseup','mousedown','mousemove','moveover','mouseout'
             * @param {Function}fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=zmap.addEvent('click',function(e){
             *  console.log(e);
             * });
             */
            addEvent : function (type, fn) {
                let keys = Object.keys(this._eventFunction);
                let objLen = keys.length;
                let eventKey = 'map_event_' + type + objLen;
                // let self=this;
                this.on(type, this._eventFunction[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * zmap 类的移除事件监听函数
             * @param {string} type 事件类型
             * @param {string} eventKey 事件key值
             * @example zmap.removeEvent('click',eventKey)
             */
            removeEvent: function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventFunction) {
                        if (a.indexOf(type) != -1) {
                            this.off(type, this._eventFunction[a]);
                        }
                    }
                } else {
                    if (this._eventFunction[eventKey]) {
                        this.off(type, this._eventFunction[eventKey]);
                    }
                }
            },
            /**
             * zmap 类设置监听状态
             * @example zmap.setListen(true)
             */
            setListen:function(state){
                this._keepListen=state;
            },
            /**
             * zmap 类设置中心矩形大小，size:[width, height]
             * @param {array} size size:[width, height]
             * @example zmap.setCenterRectangleSize([300,400])
             */
            setCenterRectangleSize:function(size){
                this._centerRectangleSize=size;
            },
            /**
             * zmap 类的获取以地图中心为中心函数，宽为width，高height的矩形边界
             * @param {number} width 像素宽，px
             * @param {number} height 像素高，px
             * @returns {object}  矩形的地图范围坐标
             * @example zmap.getRectangleBouds(300,400)
             */
            getRectangleBouds : function (width, height) {
                let center = this.getCenter();
                let centerPiexl = this.latLngToLayerPoint(center);

                let leftDown = [centerPiexl.x - width / 2, centerPiexl.y + height / 2];
                let rightTop = [centerPiexl.x + width / 2, centerPiexl.y - height / 2];

                let southWest = this.layerPointToLatLng(leftDown);
                let northEast = this.layerPointToLatLng(rightTop);
                return {
                    southWest: southWest,
                    northEast: northEast
                };
            },
            /**
             * zmap 类的添加底图方法
             * @param {string} type ,图层类型 value:TILELAYER|WMSLAYER|WMTSLAYER|ESRIMAPLAYER|ESRITILEMAPLAYER|ESRITILELAYER|GAODETILELAYER
             * @param {object} options 图层参数，options.url必填，坐标系要与map保持一致，地图默认为：'EPSG:3857”
             * @returns {object} 返回图层对象
             * @example leaflet切片服务 zmap.addBaseLayerByUrl("TILELAYER",{url:''})
             * @example wms服务 zmap.addBaseLayerByUrl("WMSLAYER",{url:'',layerName:'',format:'image/png'})
             * @example wmts服务 
             * zmap.addBaseLayerByUrl("WMTSLAYER",{
             *      leftTopLatLng:[20037508.3427892,-20037508.3427892],
             *      layerName:'ningbo:daolu',
             *      url:'http://10.45.34.185:8082/geoserver/gwc/service/wmts',
             *      tilematrixSet:'3857',//(或'EPSG:4326')
             *      format:'image/png',
             *      minZoom:2,
             *      maxZoom:20
             * })
             * @example arcgis dynamicMapLayer服务 zmap.addBaseLayerByUrl("ESRIMAPLAYER",{url:''})
             * @example arcgis tileMapLayer切片服务 zmap.addBaseLayerByUrl("ESRITILEMAPLAYER",{url:''})
             * @example arcgis 缓存本地切片服务 
             * zmap.addBaseLayerByUrl("ESRITILELAYER",{
             *      url:'',
             *      minZoom:2,
             *      maxZoom:20
             * })
             * @example 高德底图切片服务 
             * zmap.addBaseLayerByUrl("GAODETILELAYER",{
             *      url:'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
             *      subdomains:['1', '2', '3', '4'],
             *      minZoom:2,
             *      maxZoom:20
             * })
             */
            addBaseLayerByUrl : function (type, options) {
                let layerOptions = options || {};
                let layer = null;
                let layerType = type.toUpperCase();
                switch (layerType) {
                    case 'TILELAYER':
                        layer = L.tileLayer(layerOptions.url, {
                            noWrap: layerOptions.noWrap == undefined ? false : layerOptions.noWrap
                        });
                        break;
                    case 'WMSLAYER':
                        layer = L.tileLayer.wms(layerOptions.url, {
                            layers: layerOptions.layerName,
                            format: layerOptions.format || 'image/png'
                        });
                        break;
                    case 'WMTSLAYER':
                        let leftTopLatLng = layerOptions.leftTopLatLng ? layerOptions.leftTopLatLng : [90, -180];
                        let matrixIds = [];
                        for (let i = 0; i < 22; ++i) {
                            matrixIds[i] = {
                                identifier: '' + i,
                                topLeftCorner: new L.LatLng(leftTopLatLng[0], leftTopLatLng[1])
                            };
                        }
                        let epsgNum = layerOptions.tilematrixSet ? layerOptions.tilematrixSet.replace(/[^0-9]/ig, '') : '';

                        let crs = L.CRS['EPSG' + epsgNum] || null;
                        if (crs == null || this.options.crs != crs) {
                            console.log('图层未设置坐标系或与Map坐标系不同，可能导致图层无法正常加载,请正确配置Map及图层坐标系！');
                        }

                        let layerOpt = {
                            layer: layerOptions.layerName || '', //图层名称
                            tilematrixSet: layerOptions.tilematrixSet || 'EPSG:4326',
                            format: layerOptions.format || 'image/png',
                            matrixIds: matrixIds,
                            minZoom:layerOptions.minZoom == undefined ? 0 : layerOptions.minZoom,
                            maxZoom:layerOptions.maxZoom == undefined ? 22 : layerOptions.maxZoom
                        };
                        if (crs) {
                            layerOpt.crs = crs;
                        }
                        layer = new L.TileLayer.WMTS(layerOptions.url, layerOpt);
                        break;
                    case 'ESRIMAPLAYER':
                        layer = L.esri.dynamicMapLayer({
                            url: layerOptions.url
                        });
                        break;
                    case 'ESRITILEMAPLAYER': //arcgis tiledMapLayer 服务
                        layer = L.esri.tiledMapLayer({
                            url: layerOptions.url,
                            continuousWorld: false
                        });
                        break;
                    case 'ESRITILELAYER': //arcgis 本地缓存切片
                        layer = new z.esriTileLayer(layerOptions.url, {
                            minZoom: layerOptions.minZoom == undefined ? 0 : layerOptions.minZoom,
                            maxZoom: layerOptions.maxZoom == undefined ? 22 : layerOptions.maxZoom,
                        });
                        break;
                    case 'GAODETILELAYER': //高德服务
                        layer = new L.tileLayer(layerOptions.url, {
                            maxZoom: layerOptions.maxZoom == undefined ? 20 : layerOptions.maxZoom,
                            minZoom: layerOptions.minZoom == undefined ? 1 : layerOptions.minZoom,
                            subdomains: layerOptions.subdomains || ['1', '2', '3', '4']
                        });
                        break;
                    default:
                        console.log('不支持该图层类型！');
                        break;
                }

                if (layer != null) {
                    this.addLayer(layer);
                }

                return layer;
            }
        })

        /**
         * @extends {L.map}
		 * @class zmap 类，地图类，包含常用方法和事件，更多接口：{@link https://leafletjs.com/reference-1.3.4.html#map}
         * @example let zmap=new Z.map('mapId',{center:[28,115],zoom:8})
         * @param {string} mapId map容器id
         * @param {object} options 地图参数
         * @param {array} options.center 地图中心坐标 [30,120]
         * @param {number} options.zoom 地图等级 默认4
         * @param {boolean} options.zoomControl 层级控制工具 默认false
         * @param {boolean} options.attributionControl 属性控制工具 默认false
         * @param {onject} options.crs 坐标系，'EPSG4326'，'EPSG3857'等,或使用proj4等定义的crs对象
         * @param {onject} options.minZoom 地图最小缩放层级
         * @param {onject} options.maxZoom 地图最大缩放层级
         */
        z.zmap=function(mapId, options){
            let map=new z.Zmap(mapId, options);
            if(!options||!options.center){
                map.setView([41, 120], 2)
            }
            //启用埋点
            map.setListen(true);
            //中心矩形框大小默认值
            map.setCenterRectangleSize([300, 200]); 
            let _lastZoom = map.getZoom();
            let _lastZoom1 = map.getZoom(); //用于判断moveend事件
            let _queryDelayTime=1000//1000毫秒
            
            let _eventSetTimeOut={};
            //监听地图鼠标拖动(停止1秒响应)、缩放(停止1秒响应)
            map.on('zoomend moveend', function (evt) {
                //判断是否执行返回监听
                if (map._keepListen == true) {
                    let evtObj = {};
                    if (evt.type == 'mousemove') {//鼠标移动事件,暂不使用
                        if (_eventSetTimeOut['mousemove']) {
                            clearTimeout(_eventSetTimeOut['mousemove']);
                        }
                        //延迟事件，实现mousemove等事件触发后，停止超过（1秒）则执行一次
                        _eventSetTimeOut['mousemove'] = setTimeout(function () {
                            let bound = map.getBounds();
                            evtObj.bounds = {//返回边界
                                northEast: bound._northEast,
                                southWest: bound._southWest
                            };
                            if (evt.latlng) {
                                evtObj.latlng = evt.latlng;
                            }
                            let zoom = map.getZoom();
                            evtObj.zoom = zoom;//返回等级
                            evtObj.center = map.getCenter();//返回中心坐标
                            evtObj.resolution = map.getResolution();//返回分辨率
                            //返回中心矩形范围
                            evtObj.centerRectBounds = map.getRectangleBouds(map._centerRectangleSize[0], map._centerRectangleSize[1]);

                            storeOperateInfo(evt.type + 'Map', evtObj);
                        }, _queryDelayTime);
                    } else if (evt.type == 'moveend') {//鼠标拖动、缩放事件
                        if (_eventSetTimeOut['moveend']) {
                            clearTimeout(_eventSetTimeOut['moveend']);
                        }
                        //延迟事件，实现moveend等事件触发后，停止超过（1秒）则执行一次
                        _eventSetTimeOut['moveend'] = setTimeout(function () {

                            let bound = map.getBounds();
                            evtObj.bounds = {
                                northEast: bound._northEast,
                                southWest: bound._southWest
                            };
                            evtObj.center = map.getCenter();
                            evtObj.resolution = map.getResolution();
                            evtObj.centerRectBounds = map.getRectangleBouds(map._centerRectangleSize[0], map._centerRectangleSize[1]);

                            if (evt.latlng) {
                                evtObj.latlng = evt.latlng;
                            }
                            let zoom = map.getZoom();
                            evtObj.zoom = zoom;

                            if (_lastZoom1 == zoom) {//如果zoom不变，说明是鼠标移动事件
                                storeOperateInfo(evt.type + 'Map', evtObj);
                            } else {//如果zoom变，是缩放事件，单独显示
                                _lastZoom1 = zoom;
                            }

                        }, _queryDelayTime);
                    } else if (evt.type == 'zoomend') {//地图缩放事件

                        if (_eventSetTimeOut['zoomend']) {
                            clearTimeout(_eventSetTimeOut['zoomend']);
                        }
                        //延迟事件，实现zoomend等事件触发后，停止超过（1秒）则执行一次
                        _eventSetTimeOut['zoomend'] = setTimeout(function () {

                            let bound = map.getBounds();
                            evtObj.bounds = {
                                northEast: bound._northEast,
                                southWest: bound._southWest
                            };
                            evtObj.center = map.getCenter();
                            evtObj.resolution = map.getResolution();
                            evtObj.centerRectBounds = map.getRectangleBouds(map._centerRectangleSize[0], map._centerRectangleSize[1]);
                            if (evt.latlng) {
                                evtObj.latlng = evt.latlng;
                            }
                            let zoom = map.getZoom();
                            evtObj.zoom = zoom;
                            let type = evt.type;
                            if (evt.type == 'zoomend' || evt.type == 'moveend') {
                                if (zoom > _lastZoom) {
                                    type = 'zoomIn';//放大
                                    // type = 'zoomIn' + (zoom - _lastZoom);
                                } else if (zoom < _lastZoom) {
                                    // type = 'zoomOut' + (_lastZoom - zoom);
                                    type = 'zoomOut';//缩小
                                }
                                _lastZoom = zoom;
                            }
                            storeOperateInfo(type + 'Map', evtObj);
                        }, _queryDelayTime);
                    }
                }
            });

            //返回map
            return map;
        }
        
        L.map=z.zmap;


        /**
        * esriTileLayer初始化方法,用于arcgis本地缓存切片加载，目前发现大于19级会出现切片偏移问题
        */
       z.esriTileLayer = L.TileLayer.extend({
           getTileUrl: function (tilePoint) {
               var oo = '00000000';
               var xx = tilePoint.x.toString(16);
               xx = 'C' + oo.substring(0, 8 - xx.length) + xx;
               var yy = tilePoint.y.toString(16);
               yy = 'R' + oo.substring(0, 8 - yy.length) + yy;
   
               return L.Util.template(this._url, L.extend({
                   s: this._getSubdomain(tilePoint),
                   z: tilePoint.z.toString().length > 1 ? 'L' + tilePoint.z : 'L0' + tilePoint.z,
                   x: xx, // 注意切片命名的大小写
                   y: yy
               }, this.options));
           }
       });

    })(Z);

    //vectorGridLayer
    (function (z) {
        
        z.VectorGridLayer = function (url, options) {
            let layerOptions = options || {};
            let vectorTileLayerStyles = {};
            layerOptions.renderFactory = layerOptions.renderFactory ? layerOptions.renderFactory : L.svg.tile;
            vectorTileLayerStyles[layerOptions.layerName] = options.vectorTileLayerStyles;
            layerOptions.vectorTileLayerStyles = vectorTileLayerStyles;
            let layer = L.vectorGrid.protobuf(url, layerOptions);
            return {
                layer: layer
            };
        };
        z.VectorGridLayer.prototype = {};
    
        /**
         * 矢量切片加载接口，pbf格式（通过geoserver首页-TMS找到地址）,Zmap特有方法
		 * @class 
         * @param {string} url 切片服务地址 
         * @param {object} options
         * @param {object} options.renderFactory 可选：L.svg.tile或L.canvas.tile，默认L.svg.tile
         * @param {object} options.vectorTileLayerStyles 切片样式
         * @param {object} options.vectorTileLayerStyles.layername 图层名不含geoserver工作区名
         * @param {object} options.vectorTileLayerStyles.renderFactory L.svg.tile或L.canvas.tile
         * @param {object} options.vectorTileLayerStyles.vectorTileLayerStyles function
         * @returns {object} 返回矢量切片图层
         */
        z.vectorGridLayer = function (url, options) {
            let vectorGridLayer=new z.VectorGridLayer(url, options)
            return vectorGridLayer.layer;
        }

    })(Z);

    //featureLayer类
    (function(z){
        z.FeatureLayer=L.FeatureGroup.extend({
            initialize:function(featureAry){
                this._eventFunction={};
                L.FeatureGroup.prototype.initialize.call(this,featureAry);
            },
            /**
             * featureLayer 类,添加features函数
             * @param {array} feature  marker,circlemarker,point,polyline,polygon..
             * @example featureLayer.addFeature(feature)
             */
            addFeature:function(feature){
                this.addLayer(feature);
            },
            /**
             * featureLayer 类,添加features函数
             * @param {array} feature  例：[feature1,feature2,...]
             * @example featureLayer.addFeatures(feature)
             */
            addFeatures:function(feature){
                let type = Object.prototype.toString.call(feature);
                if (type == '[object Array]') {
                    for (let i = 0, len = feature.length; i < len; i++) {
                        this.addLayer(feature[i]);
                    }
                } else {
                    this.addLayer(feature);
                }
            },
            /**
             * featureLayer 类,删除features函数
             * @param {object} feature 
             * @example featureLayer.removeFeature(feature)
             */
            removeFeature:function (feature) {
                this.layer.removeLayer(feature);
            },
            /**
             * featureLayer 类,删除所有features函数
             * @example featureLayer.clearFeature()
             */
            clearFeature:function(){
                this.clearLayers();
            },
            /**
             * featureLayer 类,添加事件函数
             * @param {string}type 事件类型 'click','dblclick','moveover'
             * @param {Function} fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=featureLayer.addEvent('click',fn)
             */
            addEvent:function (type, fn) {

                let keys = Object.keys(this._eventFunction);
                let objLen = keys.length;
                let eventKey = 'layer_event_' + type + objLen;
                this.on(type, this._eventFunction[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * featureLayer 类,移除事件函数
             * @param {string} type 事件类型
             * @param {string} eventKey 添加事件时返回的事件key值，eventKey为空则不执行
             * @example featureLayer.removeEvent('click',eventKey)
             */
            removeEvent : function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventFunction) {
                        if (a.indexOf(type) != -1) {
                            this.off(type, this._eventFunction[a]);
                        }
                    }
                } else {
                    if (this._eventFunction[eventKey]) {
                        this.off(type, this._eventFunction[eventKey]);
                    }
                }
            },
            onAdd:function(map){
                this.clickLayerListen=this._sendListen.bind(this);
                this.on('click',this.clickLayerListen);
                this.on('mouseover',this.clickLayerListen);
                L.FeatureGroup.prototype.onAdd.call(this,map);
            },
            onRemove:function(map){
                if(this.clickLayerListen){
                    this.off('click',this.clickLayerListen);
                    this.off('mouseover',this.clickLayerListen);
                }
                L.FeatureGroup.prototype.onRemove.call(this,map);
            },
            _sendListen:function(evt){
                let str = evt.type + 'FeatureLayer';
                storeOperateInfo(str, {
                    latlng: evt.latlng,
                    layerName: evt.layer.layerName,
                    featureAttr: evt.layer.attributes || {}
                });
            }
        })

        /**
         * @extends {L.featuregroup}
         * @class featureLayer 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#featuregroup}
         * @param {array} layerAry 图层数组,例：[layer1，layer2,...]
         * @param {object} options 图层属性
         * @example 
         * let featureLayer=L.featureLayer();
         * zmap.addLayer(featureLayer)
         */
        
        z.featureLayer=function(featureAry, options){
            let layer=new z.FeatureLayer(featureAry);
            layer.layerType = 'featureLayer';
            layer.layerName = '';
            if (options) {
                layer.attributes = options.attributes;
                layerName = options.layerName || '';
            }
            return layer;
        }
        
        //
        L.featureLayer=Z.featureLayer;

        function sendListen(evt){

        }

    })(Z);
    


    //wfs查询
    (function (z) {
        /**
         * wfs查询,空间查询,Zmap特有方法
		 * @class 
         * @param {string} serviceUrl 服务地址
         * @param {object} options 参数
		 * @param {string} options.layerName 图层名，
		 * @param {string} options.field 查询字段，
		 * @param {object} options.geometry 'polygon'或'circle' 
		 * @param {string} options.coordString 坐标，
		 * @param {number} options.radius 半径
         * @param {function}fn 查询结果回调
         * @param {function}error 返回错误信息
         * @example
         * let serviceUrl = 'http://10.45.26.17:8082/geoserver/mysql/ows?';//路况WFS服务
         * let latlng=[20.5,120]
         * let options = {
         *       layerName: 'mysql:adm_devcoper_bas_rdnet_path_info',
         *       field: 'SHAPE',
         *       coordString: latlng[0] + ',' + latlng[1],
         *       geometry: 'circle',
         *       radius: radius//单位:米
         *   };
         * z.wfsQuery (serviceUrl, options, function(feature){
         *      console.log(feature);
         * }, function(error){}) 
         */
        z.wfsQuery = function (serviceUrl, options, fn, error) {
            let wfsOptions = options || {};

            let url = serviceUrl + 'service=WFS&request=GetFeature&version=1.0.0&maxFeatures=200&typeName=' + wfsOptions.layerName + '&outputFormat=json&Filter=';

            let param = '<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">';
            param = param + '<Intersects>';
            param = param + '<PropertyName>' + wfsOptions.field + '</PropertyName>';
            param = param + '<gml:polygon><gml:outerBoundaryIs><gml:LinearRing>';
            if (wfsOptions.geometry == 'polygon') {
                param = param + '<gml:coordinates>' + wfsOptions.coordString + '</gml:coordinates>';
            } else if (wfsOptions.geometry == 'circle') {
                let coordString = getCircleRing(wfsOptions.coordString, wfsOptions.radius);
                param = param + '<gml:coordinates>' + coordString + '</gml:coordinates>';
            }
            param = param + '</gml:LinearRing></gml:outerBoundaryIs></gml:polygon>';
            param = param + '</Intersects>';
            param = param + '</Filter>';

            $.ajax({
                type: 'POST',
                contentType: 'text/plain;charset=UTF-8',
                async: true,
                url: url+param,
                // data:param,
                // dataType:'String',
                success: function (data) {
                    fn(data);
                },
                error: function (e) {
                    error(e);
                }
            });

            
        }
		/**
         * Z.vectorTileClick 矢量切片单击,Zmap特有方法
		 * @class 
         * @param {string}serviceUrl 服务地址
         * @param {object}options 参数
		 * @param {string} options.layerName 图层名，
		 * @param {string} options.field 查询字段，
		 * @param {object} options.geometry 'polygon'或'circle' 
		 * @param {string} options.coordString 坐标，
		 * @param {number} options.radius 半径
         * @param {function}fn 查询结果回调
         * @param {function}error 返回错误信息
         */
        z.vectorTileClick=function(serviceUrl, options, fn, error){
            let dataBaseTableConfig=null;
            
            z.wfsQuery(serviceUrl, options, function(data){
                if (data.features && data.features.length > 0) {//features为查询的路段

                    $.ajax({
                        type: 'get',
                        dataType:'json',
                        async: false,
                        url:'./assets/utils/dataBaseTableConfig.json',
                        success: function (data) {
                            dataBaseTableConfig=data;
                        },
                        // error: function (e) {
                        //     error('未获取到路况图层配置文件！');
                        // }
                    });
                    let feature = data.features[0];
                    let properties = feature.properties;
                    let str = 'clickFeatureLayer';
                    let pointary = options.coordString.split(',');
                    storeOperateInfo(str, {
                        latlng: {lat:pointary[0],lng:pointary[1]},
                        layerName: options.layerName,
                        featureAttr: properties || {}
                    });
                    let curFeature;
                    if(dataBaseTableConfig){
                        //转换查询结果为统一的字段名返回
                        curFeature=changeFieldName(feature,dataBaseTableConfig['geo_gd_segment_pl']);
                    }else{
                        curFeature=feature;
                    }
                   fn(curFeature);
                }else{
                    fn(null);
                }
            }, function(e){error(e)})
        }

        //z.wfsQuery = wfsQuery;
        //z.vectorTileClick = vectorTileClick;
        //for oracle to mysql ai...
        function changeFieldName(features,config){
            let type=Object.prototype.toString.call(features);
            if(type=='[object Array]'){
                for(let i=0,len=features.length;i<len;i++){
                    let propertiesN={};
                    let propertiesO=features[i].properties;
                    for(let a in propertiesO){
                        // propertiesN[a.toLowerCase()]=propertiesO[a];
                        if(config[a]){
                            propertiesO[config[a]]=propertiesO[a];
                            delete propertiesO[a];
                        }
                    }
                    // if(propertiesO['NAME']!=undefined){
                    //     propertiesN['path_name']=propertiesO['NAME'];
                    // }
                    features[i].properties=propertiesN;
                }
            }else if(type=='[object Object]'){
                let propertiesN={};
                let propertiesO=features.properties;
                for(let a in propertiesO){
                    // propertiesN[a.toLowerCase()]=propertiesO[a];
                    if(config[a]){
                        propertiesO[config[a]]=propertiesO[a];
                        delete propertiesO[a];
                    }
                }
                // if(propertiesO['name']!=undefined){
                //     propertiesN['path_name']=propertiesO['NAME'];
                // }
                features.properties=propertiesO;
            }
            return features;
        }

        /**
         * 根据圆心，半径，点数，生成圆圈坐标
         * @param coordString 圆心，'33,120'
         * @param radius 半径 ，米
         * @returns {string} 圆坐标串  '120,21 120,22 121,22 ...'
         */
        function getCircleRing(coordString, radius, ringLen) {
            let pointstr = coordString.split(',').reverse();
            let point = [parseFloat(pointstr[0]), parseFloat(pointstr[1])];
            let pointWeb = lonLatToWebMercator(point[0], point[1]);
            let circleRing = [];
            let circleRingl = '';
            let startPoint;
            let len = ringLen == undefined ? 30 : ringLen;
            for (let i = 0; i < len; i++) {
                let angle = i * 12;
                let x = pointWeb[0] + radius * Math.cos(angle * 3.14 / 180)
                let y = pointWeb[1] + radius * Math.sin(angle * 3.14 / 180);
                let pointl = webMercator2lonlat(x, y);
                circleRing.push(pointl);
                let pointlStr = pointl[0] + ',' + pointl[1];
                circleRingl = circleRingl + pointlStr + ' ';
                if (i == 0) {
                    startPoint = pointl;
                }
            }
            return circleRingl + startPoint[0] + ',' + startPoint[1];
        }
        /**
         * wgs84转墨卡托投影
         * @param lng 经度
         * @param lat 纬度
         * @returns {[*,*]}
         */
        function lonLatToWebMercator(lng, lat) {
            var x = lng * 20037508.34 / 180;
            var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
            y = y * 20037508.34 / 180;
            return [x, y];
        }

        /**
         * 墨卡托转wgs84
         * @param x
         * @param y
         * @returns {[*,*]}
         */
        function webMercator2lonlat(x, y) {
            let lon = x / 20037508.34 * 180;
            let lat = y / 20037508.34 * 180;
            lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180)) - Math.PI / 2);
            return [lon, lat];
        }
    })(Z);


    //矢量图层
    (function(z){

        /**
         * 产生随机十六进制颜色代码
         */
        function getColor(){
            var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";                       
            var colorArray = colorValue.split(",");                
            var color="#";           
            for(var i=0;i<6;i++){                 
                color+=colorArray[Math.floor(Math.random()*16)];               
            }
            return color;           
        }
       
        z.addFeatureLayer=function(map,data,featureType,options,attributes){
            let layer=new Z.AddFeatureLayer(map,data,featureType,options,attributes);
            return layer
        }
         /**
         * 
         * @class addFeatureLayer 类，可以控制图层显隐，设置图层显示的等级，以及图片和矢量点的切换,Zmap特有方法
         * @extends {Z.featureLayer}
         * @param {object} map map对象
         * @param {array} data 图层数据，服务地址或数据数组 [{lat:20,lng:120,,},{}..]
         * @param {string} featureType 要素类型，marker、circlemarker,polyline,polygon
         * @param {object} options 样式、显隐等
         * @param {object} options.minZoom 开始显示等级
         * @param {object} options.maxZoom 结束显示等级
         * @example 
         * let data=[];
         * data.push({lat:29,lng:121,name:'001'});
         * data.push({lat:29,lng:121,name:'001'});
         * let featureLay=Z.addFeatureLayer(map,data,'circlemarker',{radius:8,minZoom:8,maxZoom:16})
         */
        z.AddFeatureLayer=function(map,data,featureType,options,attributes){
            this._data=data;

            this._zmap=map;
            this._style=options||{};
            // this._featureType0=featureType.toLocaleLowerCase();
            this._featureType=featureType.toLocaleLowerCase();
            this._eventKeys={};
            this._addFeatureLayerEvent={};
            this._tempColor=null;
            this._layerName=this._style.layerName||''

            if(this._style.visible==false){
                this._visible=false;
            }else{
                this._visible=true;
            }
            if(this._style.minZoom!=undefined){
                this._minZoom=this._style.minZoom;
            }else{
                this._minZoom=0;
            }
            if(this._style.maxZoom!=undefined){
                this._maxZoom=this._style.maxZoom;
            }else{
                this._maxZoom=22;
            }
            //this._layer=new Z.featureLayer();
            //this.layer=this._layer.layer;
            this.layer=new Z.featureLayer();
            this.layer.attributes=attributes||{};
            if(this._visible){
                this._zmap.addLayer(this.layer)
            }

            this.setData(data);
            // this._lastzoom = this._zmap.getZoom();
            // if(this._lastzoom>=this._minZoom&&this._lastzoom<=this._maxZoom){
            //     this._addCurExtentFeatureToLayer();
            // }
            //添加事件,动态显示
            this._addMoveEvent();
            
            //继承featureLayer的方法
            for(var p in this.layer){
                z.addFeatureLayer.prototype[p]=this.layer[p]
            }
        }
        z.AddFeatureLayer.prototype={
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {boolean} visible true 或 false，默认true
             * @example addFeatureLayer.setVisible(false)
             */
            setVisible:function(visible){
                this._visible=visible;
                let isAddLayer=this._zmap.hasLayer(this.layer);
                let zoom= this._zmap.getZoom();
                if(visible){
                    if(isAddLayer){
                        return;
                    }
                    this._clearLayer();
                    this._zmap.addLayer(this.layer);
                    this._addMoveEvent();
                    if(zoom>=this._minZoom&&zoom<=this._maxZoom){
                        this._addCurExtentFeatureToLayer();
                    }
                }else{
                    if(isAddLayer){
                        this._clearLayer();
                        this._zmap.removeLayer(this.layer);
                        this._removeMoveEvent();
                    }
                } 
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {boolean} visible true 或 false，默认true
             * @example let visible=addFeatureLayer.getVisible();
             */
            getVisible:function(){
                return this._visible;
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example addFeatureLayer.setMinZoom(2);
             */
            setMinZoom:function(zoom){
                this._minZoom=zoom;
                if(!this._visible){
                    return;
                }
                let curZoom=this._zmap.getZoom();
                //更新显示
                this._updateFeature(this,curZoom);
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example let zoom=addFeatureLayer.getMinZoom(2);
             */
            getMinZoom:function(){
                return this._minZoom;
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example addFeatureLayer.setMaxZoom(20);
             */
            setMaxZoom:function(zoom){
                this._maxZoom=zoom;
                if(!this._visible){
                    return;
                }
                let curZoom=this._zmap.getZoom();
                //更新显示
                this._updateFeature(this,curZoom);
            },
            /**
             * addFeatureLayer 类，设置图层可见性
             * @param {number} zoom 层级
             * @example let zoom=addFeatureLayer.getMinZoom(2);
             */
            getMaxZoom:function(){
                return this._maxZoom;
            },
            /**
             * addFeatureLayer 类，设置数据源
             * @param {string|array} data 数据地址或数据数组
             * @example addFeatureLayer.setData(data);
             */
            setData:function(data){
                this._data=data;
                this._dataType = Object.prototype.toString.call(data);
                if (this._dataType == '[object Array]') {
                    this._alldata=data;
                }else if(this._dataType == '[object String]'){
                    this._alldata=this._getData(data)||[];
                }
                if(this.layer instanceof L.FeatureGroup)
                this.refresh();
            },
            /**
             * addFeatureLayer 类，更新显示图层
             * @example addFeatureLayer.refresh();
             */
            refresh:function(){
                if(this._dataType == '[object String]'){
                    this._alldata=this._getData(this._data)||[];
                }
                //更新显示
                this._updateFeature(this,this._zmap.getZoom());
            },
            /**
             * addFeatureLayer 类，从地图移除图层
             * @example addFeatureLayer.removeFromMap();
             */
            removeFromMap:function(){
                if(this._zmap.hasLayer(this.layer)){
                    this._clearLayer();
                    this._zmap.removeLayer(this.layer);
                    this._removeMoveEvent();
                } 
            },
            /**
             * addFeatureLayer 类，从地图移除图层
             * @example addFeatureLayer.addToMap();
             */
            addToMap:function(){
                if(!this._zmap.hasLayer(this.layer)){
                    this._zmap.addLayer(this.layer);
                    this._updateFeature();
                    //添加事件,动态显示
                    this._addMoveEvent();
                } 
            },
            onAdd:function(t){
                this._map=t;
                console.log(t);
            },
            /**
             * addfeatureLayer 类的添加事件函数
             * @param {string}type 事件类型 'click','dblclick','moveover'
             * @param {Function} fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=addFeatureLayer.addEvent('click',fn);
             */
            addEvent:function (type, fn) {

                let keys = Object.keys(this._eventKeys);
                let objLen = keys.length;
                let eventKey = 'layer_event_' + type + objLen;
                this.layer.on(type, this._eventKeys[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * addfeatureLayer 类的移除事件函数
             * @param {string} type 事件类型
             * @param {string} eventKey 添加事件时返回的事件key值，eventKey为空则不执行
             * @example addFeatureLayer.removeEvent('click',eventKey);
             */
            removeEvent : function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventKeys) {
                        if (a.indexOf(type) != -1) {
                            this.layer.off(type, this._eventKeys[a]);
                        }
                    }
                } else {
                    if (this._eventKeys[eventKey]) {
                        this.layer.off(type, this._eventKeys[eventKey]);
                    }
                }
            },
            _getBounds:function(){
                let bounds = this._zmap.getBounds();
                let maxLat = bounds._northEast.lat;
                let minLat = bounds._southWest.lat;
                let maxLng = bounds._northEast.lng;
                let minLng = bounds._southWest.lng;
                return{maxLat:maxLat,minLat:minLat,maxLng:maxLng,minLng}
            },
            _addCurExtentFeatureToLayer:function(){
                let dataList=this._alldata;
                if(null==this._tempColor)
                this._tempColor=getColor();
                let extent=this._getBounds();
                for(let i=0,len=dataList.length;i<len;i++){
                    let isInCurExtent=this._isInCurExtent(dataList[i],extent);
                    isInCurExtent.layerName=this._layerName;
                    if(isInCurExtent){
                        if(this._featureType.toLowerCase()=='marker'){
                            let latlng = [isInCurExtent.lat, isInCurExtent.lng];
                            let marker = new Z.marker(latlng, this._style/*{
                                iconUrl: this._style.iconUrl,
                                type: 'icon'
                            }*/, isInCurExtent);
                            this.layer.addFeature(marker);
                        }else if(this._featureType.toLowerCase()=='circlemarker'){
                            let latlng = [isInCurExtent.lat, isInCurExtent.lng];
                            let circleMarker = new Z.circleMarker(latlng, this._style/*{
                                color: this._style.color||this._tempColor,
                                radius:this._style.radius||5,//像素
                            }*/, isInCurExtent);
                            this.layer.addFeature(circleMarker);
                        }else if(this._featureType.toLowerCase()=='polyline'){
                            let paths = isInCurExtent.linePaths;
                            let polyline = new Z.polyline(paths, this._style, isInCurExtent);
                            this.layer.addFeature(polyline);
                        }else if(this._featureType.toLowerCase()=='polygon'){
                            let paths = isInCurExtent.linePaths;
                            let polygon = new Z.polygon([paths], this._style, isInCurExtent);
                            this.layer.addFeature(polygon);
                        }
                    }
                }
            },
            _isInCurExtent:function(dataListi,extent){
                if(this._featureType.toLowerCase()=='marker'||this._featureType.toLowerCase()=='circlemarker'){
                    let lat = dataListi.centerLat || dataListi.lat;
                    let lng = dataListi.centerLng || dataListi.lng;
                    if (lat && lng) {
                        if (lat > extent.minLat && lat < extent.maxLat && lng < extent.maxLng && lng > extent.minLng) {
                            dataListi.lat=lat;
                            dataListi.lng=lng;
                            return dataListi;
                        }else{return false}
                    }else{return false}
                }else if (this._featureType.toLowerCase()=='polyline'||this._featureType.toLowerCase()=='polygon'){
                    let pathsString = dataListi.SHAPE || dataListi.POINTS;
                    let linePaths=this._stringLatlngToArray(pathsString);
                    if(linePaths.length>0){
                        if (linePaths[0][0] > extent.minLat && linePaths[0][0] < extent.maxLat && linePaths[0][1] < extent.maxLng && linePaths[0][1] > extent.minLng&&linePaths[linePaths.length-1][0] > extent.minLat && linePaths[linePaths.length-1][0] < extent.maxLat && linePaths[linePaths.length-1][1] < extent.maxLng && linePaths[linePaths.length-1][1] > extent.minLng) {
                            dataListi.linePaths=linePaths;
                            return dataListi;
                        }else{return false}
                    }else{return false}
                }
            },
            _clearLayer:function(){
                this.layer.clearFeature();
            },
            _addMoveEvent:function(){
                //放大，缩小地图隐藏/显示地图图层
                this._addFeatureLayerEvent=this._updateFeature.bind(this);
                this._eventKey=this._zmap.on('moveend', this._addFeatureLayerEvent);
            },
            _removeMoveEvent:function(){
                this._zmap.off('moveend',this._addFeatureLayerEvent);
            },
            _updateFeature:function(){
                let self=this;
                let zoom=self._zmap.getZoom();
                if(!self._visible){
                    return;
                }
                let isAddLayer=self._zmap.hasLayer(self.layer);
                if(zoom>=self._minZoom&&zoom<=self._maxZoom){
                    //刷新
                    self._clearLayer();
                    self._addCurExtentFeatureToLayer();
                    if(!isAddLayer){
                        //显示
                        self._zmap.addLayer(self.layer);
                    }
                }else{
                    if(isAddLayer){
                        //移除显示
                        self._zmap.removeLayer(self.layer);
                    }
                }
            },
            _getData:function(serviceUrl){
                let result;
                $.ajax({
                    type: 'get',
                    async: false,
                    url: serviceUrl, //后台查询服务地址
                    dataType: 'json',
                    success: function (data) {
                        result = data;
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });

                return result;
            },
            _stringLatlngToArray:function(str){
                let pointsStr=str;
                //let pointsStr='LINESTRING  ( 121.58346132 29.83323510, 121.58346168 29.83323510, 121.58382204 29.83301973, 121.58383284 29.83301325, 121.58384796 29.83300371, 121.58413668 29.83283145, 121.58437212 29.83269177, 121.58446428 29.83263723)'
                pointsStr=pointsStr.replace('LINESTRING','');
                pointsStr=pointsStr.replace('POLYGON','');
                pointsStr=pointsStr.replace(/\(/g,'').replace(/\)/g,'');//去除所有"("、")"
                let pAry=pointsStr.split(',');
                let linePaths=[];
                for(let j=0;j<pAry.length;j++){
                    pAry[j]=pAry[j].replace(/(^\s*)|(\s*$)/g, '');//去除前后空格
                    pAry[j]=pAry[j].split(' ');
                    let pointAry=[parseFloat(pAry[j][1]),parseFloat(pAry[j][0])];
                    linePaths.push(pointAry);
                }
                return linePaths;
            }
        }
    })(Z);


    //HeatLayer
    (function(z){
        z.HeatLayer=L.HeatLayer.extend({
            initialize:function(data,options){
                if(data!=null&&data!=undefined){
                    if(typeof data=='object'){
                        this._alldata=data;
                        this._serviceUrl='';
                    }else if(typeof data=='string'){
                        this._serviceUrl=data;
                        this._alldata=this._getDataFromService()
                    }else{
                        this._alldata=[];
                        this._serviceUrl='';
                    }
                }else{
                    this._alldata=[];
                    this._serviceUrl='';
                }

                this._options=options||{};
                
                let opt={
                    minOpacity:this._options.maxOpacity||1,//热量开始时的最小不透明度,默认1
                    maxZoom:this._options.maxZoom||22,//点到达最大强度的缩放级别（随着缩放的强度比例），默认等于地图的maxZoom
                    minZoom:this._options.minZoom||0,
                    max:this._options.max||1,//最大点强度，默认为1.0 
                    radius:this._options.radius||25,//热图的每个“点”的半径，默认为25 
                    blur:this._options.blur||15,//模糊量，默认为15 
                    gradient:this._options.gradient||{//颜色渐变配置，例如{0.4：'蓝色'，0.65：'石灰'，1：'红色'}
                        "1": "rgba(255,0,0,1)",
                        "0.9": "rgba(255,255,0,1)",
                        "0.8": "rgba(0,255,0,1)",
                        "0.5": "rgba(0,255,255,1)",
                        "0": "rgba(0,0,255,1)"
                    }
                }
                
                this._heatData=this._getHeatmapData();
                L.HeatLayer.prototype.initialize.call(this,this._heatData,opt);
            },
            _getHeatmapData:function(){
                let len=this._alldata.length;
                if(len==0)
                return [[0,0,0]];
                let reaultAry=[];
                for(let i=0;i<len;i++){
                    let lat = this._alldata[i].centerLat || this._alldata[i].lat;
                    let lng = this._alldata[i].centerLng || this._alldata[i].lng;
                    if (lat && lng) {
                        reaultAry.push([lat,lng,0.5]);
                    }
                }
                return reaultAry;  
            },
            _getDataFromService:function(serviceUrl){
                let result;
                if(serviceUrl!=undefined){
                    this._serviceUrl=serviceUrl;
                }
                if(this._serviceUrl==''){
                    return []
                }
                $.ajax({
                    type: 'get',
                    async: false,
                    url: this._serviceUrl, //后台查询服务地址
                    dataType: 'json',
                    success: function (data) {
                        result = data;
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });
                return result;
            },
            onAdd:function(map){
                this._map=map;
                this._eventFunction=this._updateFeature.bind(this);
                this._map.on('moveend',this._eventFunction);
                this._zminZoom=this._options.minZoom!=undefined?this._options.minZoom:0;
                this._zmaxZoom=this._options.maxZoom!=undefined?this._options.maxZoom:this._map.getMaxZoom();

                //
                this._resetEventFunction=this._reset.bind(this);
                this._animateZoomEventFunction=this._animateZoom.bind(this);

                t = map, this._canvas || this._initCanvas();
                if(this._isShow){t._panes.overlayPane.appendChild(this._canvas)}
                t.on("moveend", this._resetEventFunction), t.options.zoomAnimation && L.Browser.any3d && t.on("zoomanim", this._animateZoomEventFunction), this._reset()

                //L.HeatLayer.prototype.onAdd.call(this,map);
            },
            onRemove:function(){
                this._map.off('moveend',this._eventFunction);
                //L.HeatLayer.prototype.onRemove.call(this,this._map);

                if(this._isShow){t.getPanes().overlayPane.removeChild(this._canvas)}
		        t.off("moveend", this._resetEventFunction), t.options.zoomAnimation && t.off("zoomanim", this._animateZoomEventFunction)
                this._map=null;

            },
            _updateFeature:function(){
                let zoom=this._map.getZoom();
                let isShow=this.getShowState();
                if(zoom>=this._zminZoom&&zoom<=this._zmaxZoom){
                    if(!isShow){
                        //显示
                        this.addCanvas(this._map);
                    }
                }else{
                    if(isShow){
                        //移除显示
                        this.removeCanvas(this._map);
                    }
                }
            },
            /**
             * heatLayer 类，添加一个点
             * @param {object} options 参数
             * @param {number} options.minOpacity 热量开始时的最小不透明度，默认1
             * @param {number} options.maxZoom 点到达最大强度的缩放级别（随着缩放的强度比例），默认等于地图的22
             * @param {number} options.minZoom 最小显示层级，默认0
             * @param {number} options.max 最大点强度，默认为1.0
             * @param {number} options.radius 热图的每个“点”的半径，默认为25
             * @param {number} options.blur 模糊量，默认为15
             * @param {object} options.gradient 颜色渐变配置，例如{0.4：'颜色1'，0.65：'颜色2'，1：'颜色3'}
             * @example 
             * heatLayer.setOptions({max:0.8,blur:10,minOpacity:0.5,radius:10,maxZoom:17,minZoom:13});
             */
            setOptions:function(options){
                L.HeatLayer.prototype.setOptions.call(this,options);
            },
            /**
             * heatLayer 类，添加一个点
             * @param {object} data Z.marker对象
             * @example 
             * let data={lat:20,lng:120,name:'eee'};
             * heatLayer.setData(data);
             */
            addData:function(data){
                let lat = data.lat;
                let lng = data.lng;
                let latLng;
                if (lat && lng) {
                    latLng=[lat,lng,0.5];
                    this._heatData.push(latLng);
                    L.HeatLayer.prototype.addLatLng.call(this,latLng);
                }
            },
            /**
             * heatLayer 类，通过数据更新图层
             * @param {array} data :[{lat:20,lng:120,..},{},...] 
             * @example 
             * var data=[];
             * data.push({lat:29,lng:121,name:'001'});
             * data.push({lat:29,lng:121,name:'001'}); 
             * heatLayer.setData(data);
             */
            setData:function(data){
                this._alldata=data;
                this._heatData=this._getHeatmapData();
                L.HeatLayer.prototype.setLatLngs.call(this,this._heatData);
            },
            /**
             * heatLayer 更新来自服务的数据及显示
             * @example heatLayer.refresh();
             */
            refresh:function(serviceUrl){
                this._alldata=this._getDataFromService(serviceUrl);
                this._heatData=this._getHeatmapData();
                L.HeatLayer.prototype.setLatLngs.call(this,this._heatData);
            },
            /**
             * heatLayer 类，刷新显示
             * @example heatLayer.redraw();
             */
            redraw:function(){
                L.HeatLayer.prototype.redraw.call(this);
            }
        });

        /**
         * 热力图层类,Zmap特有方法
         * @class 
         * @param {array} data [{lat:20,lng:120,..},{},...]
         * @param {object} options 参数
         * @param {number} options.minOpacity 热量开始时的最小不透明度 
         * @param {number} options.maxZoom 点到达最大强度的缩放级别（随着缩放的强度比例），默认等于地图的22
         * @param {number} options.minZoom 最小显示层级，默认0
         * @param {number} options.max 最大点强度，默认为1.0
         * @param {number} options.radius 热图的每个“点”的半径，默认为25
         * @param {number} options.blur 模糊量，默认为15
         * @param {object} options.gradient 颜色渐变配置，例如{0.4：'颜色1'，0.65：'颜色2'，1：'颜色3'}
         * @example 
         * let data=[];
         * data.push({lat:29,lng:121,name:'001'});
         * data.push({lat:29,lng:121,name:'001'});
         * let heatmapLayer =Z.heatLayer(data,{max:0.8,blur:10,minOpacity:0.5,radius:10,maxZoom:17,minZoom:13});
         */
        z.heatLayer=function(data,options){
            let layer=new z.HeatLayer(data,options);
            return layer;
        }
    })(Z);


    //markerClusterLayer
    (function(z){
        z.MarkerClusterLayer=L.MarkerClusterGroup.extend({
            initialize:function(data,options,iconStyle){
                if(data!=null&&data!=undefined){
                    if(typeof data=='object'){
                        this._alldata=data;
                        this._serviceUrl='';
                    }else if(typeof data=='string'){
                        this._serviceUrl=data;
                        this._alldata=this._getDataFromService()
                    }else{
                        this._alldata=[];
                        this._serviceUrl='';
                    }
                }else{
                    this._alldata=[];
                    this._serviceUrl='';
                }

                this._allMarkers=[];
                this._options=options||{};
                this._iconStyle=iconStyle||{};
                this._eventKeys={};
                
                this._isAddFeatures=true;

                let opt={
                    showCoverageOnHover:this._options.showCoverageOnHover||false,
                    zoomToBoundsOnClick:this._options.zoomToBoundsOnClick||false,
                    spiderfyOnMaxZoom:this._options.spiderfyOnMaxZoom||false,
                    disableClusteringAtZoom:this._options.disableClusteringAtZoom||18,
                    maxClusterRadius:this._options.maxClusterRadius||80,
                    animate:this._options.animate||true,
                    iconCreateFunction:this._options.IconCreateFunction||null
                }
                
                L.MarkerClusterGroup.prototype.initialize.call(this,opt);
                if(this._alldata!=[]&&this._alldata!=undefined){
                    this._addDataToLayer();
                }
            },
            onAdd:function(map){
                
                this._zmap=map;
                this._eventFunction=this._updateEvent.bind(this);
                this._zmap.on('moveend',this._eventFunction);
                this._zminZoom=this._options.minZoom!=undefined?this._options.minZoom:0;
                this._zmaxZoom=this._options.maxZoom!=undefined?this._options.maxZoom:this._map.getMaxZoom();
                // this._zmap.off('moveend',this._updateEvent,this);
                // L.MarkerClusterGroup.prototype.onAdd.call(this,this._zmap);

                // this._map = map;
                var i, l, layer;

                if (!isFinite(this._map.getMaxZoom())) {
                    throw "Map has no maxZoom specified";
                }

                this._featureGroup.addTo(map);
                this._nonPointGroup.addTo(map);

                if (!this._gridClusters) {
                    this._generateInitialClusters();
                }
                this._maxLat = map.options.crs.projection.MAX_LATITUDE;
                //Restore all the positions as they are in the MCG before removing them
                for (i = 0, l = this._needsRemoving.length; i < l; i++) {
                    layer = this._needsRemoving[i];
                    layer.newlatlng = layer.layer._latlng;
                    layer.layer._latlng = layer.latlng;
                }
                //Remove them, then restore their new positions
                for (i = 0, l = this._needsRemoving.length; i < l; i++) {
                    layer = this._needsRemoving[i];
                    this._removeLayer(layer.layer, true);
                    layer.layer._latlng = layer.newlatlng;
                }
                this._needsRemoving = [];
                //Remember the current zoom level and bounds
                this._zoom = Math.round(this._map._zoom);
                this._currentShownBounds = this._getExpandedVisibleBounds();

                this._zoomEndEventFunction=this._zoomEnd.bind(this);
                this._moveEndEventFunction=this._moveEnd.bind(this);
                this._map.on('zoomend', this._zoomEndEventFunction);
                this._map.on('moveend', this._moveEndEventFunction);

                if (this._spiderfierOnAdd) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
                    this._spiderfierOnAdd();
                }

                this._bindEvents();
                //Actually add our markers to the map:
                l = this._needsClustering;
                this._needsClustering = [];
                this.addLayers(l, true);

                //判断是否在显示层级内
                let curZoom=this._zmap.getZoom();
                if(curZoom>this._zmaxZoom||curZoom<this._zminZoom){
                    this.clearLayers();
                }
            },
            onRemove:function(map){

                this._zmap.off('moveend',this._eventFunction);
                // L.MarkerClusterGroup.prototype.onRemove.call(this,this._zmap);

                map.off('zoomend', this._zoomEndEventFunction);
                map.off('moveend', this._moveEndEventFunction);

                this._unbindEvents();
                //In case we are in a cluster animation
                this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');
                if (this._spiderfierOnRemove) { //TODO FIXME: Not sure how to have spiderfier add something on here nicely
                    this._spiderfierOnRemove();
                }
                delete this._maxLat;
                //Clean up all the layers we added to the map
                this._hideCoverage();
                this._featureGroup.remove();
                this._nonPointGroup.remove();
                this._featureGroup.clearLayers();
                this._zmap=null;
            },
            //将_alldata转成marker，并添加到layer
            _addDataToLayer:function(){
                let len=this._alldata.length;
                if(len==0)
                return;
                for(let i=0;i<len;i++){
                    let lat = this._alldata[i].centerLat || this._alldata[i].lat;
                    let lng = this._alldata[i].centerLng || this._alldata[i].lng;
                    let myIcon = null;
                    if (this._iconStyle.type&&this._iconStyle.type == 'divIcon') {
                        myIcon = L.divIcon(this._iconStyle);
                    } else {
                        myIcon = L.icon(this._iconStyle);
                    }
                    if (lat && lng) {
                        this._alldata[i].lat=lat;
                        this._alldata[i].lng=lng;
                        var marker = L.marker(new L.LatLng(lat, lng),{icon:myIcon});
                        marker.attributes=this._alldata[i];
                        this.addFeature(marker);
                    }
                }
            }, 
            _updateEvent:function(){
                if(!this._zmap)
                return;
                let zoom=this._zmap.getZoom();
                if(zoom>=this._zminZoom&&zoom<=this._zmaxZoom){
                    if(!this._isAddFeatures){
                        //显示
                        this._addFeatures();
                        this._isAddFeatures=true;
                    }
                }else{
                    if(this._isAddFeatures){
                        //移除显示
                        this.clearLayers();
                        this._isAddFeatures=false;
                    }
                }
            },
            _addFeatures:function(){
                if(this._allMarkers){
                    for(let i=0,len=this._allMarkers.length;i<len;i++){
                        this.addLayer(this._allMarkers[i]);
                    }  
                }
            },
            _getDataFromService:function(serviceUrl){
                let result=[];
                if(serviceUrl!=undefined){
                    this._serviceUrl=serviceUrl;
                }
                if(this._serviceUrl==''){
                    return result
                }
                $.ajax({
                    type: 'get',
                    async: false,
                    url: this._serviceUrl, //后台查询服务地址
                    dataType: 'json',
                    success: function (data) {
                        result = data;
                    },
                    error: function (e) {
                        console.log('数据获取失败！'+e);
                    }
                });
                return result;
            },
            
            /**
             * markerClusterLayer 类,添加事件函数
             * @param {string}type 事件类型 'click','dblclick','moveover'||'clusterclick','clusterdblclick','clustermoveover'
             * @param {Function} fn 回调函数
             * @returns {string} 事件key值
             * @example let eventKey=markerClusterLayer.addEvent('click',fn);
             */
            addEvent:function (type, fn) {

                let keys = Object.keys(this._eventKeys);
                let objLen = keys.length;
                let eventKey = 'layer_event_' + type + objLen;
                this.on(type, this._eventKeys[eventKey] = function (evt) {
                    fn(evt);
                });
                return eventKey;
            },
            /**
             * markerClusterLayer 类,的移除事件函数
             * @param {string} type 事件类型
             * @param {string} eventKey 添加事件时返回的事件key值，eventKey为空则不执行
             * @example markerClusterLayer.removeEvent('click',eventKey);
             */
            removeEvent : function (type, eventKey) {
                if (!eventKey) {
                    for (let a in this._eventKeys) {
                        if (a.indexOf(type) != -1) {
                            this.off(type, this._eventKeys[a]);
                        }
                    }
                } else {
                    if (this._eventKeys[eventKey]) {
                        this.off(type, this._eventKeys[eventKey]);
                    }
                }
            },
            /**
             * markerClusterLayer 类,添加feature
             * @param {Z.Marker} feature Z.marker对象
             * @example markerClusterLayer.addFeature(Z.marker([20,120]));
             */
            addFeature:function(feature){
                this._allMarkers.push(feature);
                L.MarkerClusterGroup.prototype.addLayer.call(this,feature);
            },
            /**
             * markerClusterLayer 类,清除显示的数据
             * @example markerClusterLayer.clearFeatures();
             */
            clearFeatures:function(){
                this._allMarkers=[];
                L.MarkerClusterGroup.prototype.clearLayers.call(this);
            },
            /**
             * markerClusterLayer 类,通过features更新图层
             * @param {array} features Z.marker数组
             * @example markerClusterLayer.setFeatures([marker1,marker2...]);
             */
            setFeatures:function(features){
                this._allMarkers=features;
                this.clearLayers();
                this._addFeatures();
            },
            /**
             * markerClusterLayer 类,通过数据更新图层
             * @param {array} data :[{lat:20,lng:120,..},{},...] 
             * @example 
             * let data=[];
             * data.push({lat:29,lng:121,name:'001'});
             * data.push({lat:29,lng:121,name:'001'});
             * markerClusterLayer.setData(data);
             */
            setData:function(data){
                this._alldata=data;
                this.clearFeatures();
                this._addDataToLayer();
            },
            /**
             * markerClusterLayer 类,更新来自服务的数据及显示
             * @param {string} 数据服务地址
             * @example markerClusterLayer.refresh('http://10.45.70.121:8874/gisService/InterInfo/selectByParams');
             */
            refresh:function(serviceUrl){
                this._alldata=this._getDataFromService(serviceUrl);
                this.clearFeatures();
                this._addDataToLayer();
            }
        });

        /**
         * markerClusterLayer 类,Zmap特有方法
         * @class 
         * @param {object} map zamp对象
         * @param {object|string} data  
         * @param {boolean} options 聚合效果相关设置
         * @param {boolean} options.showCoverageOnHover 将鼠标悬停在群集上时，它会显示其标记的边界。默认false
         * @param {boolean} options.zoomToBoundsOnClick 单击群集时，我们会缩放到其边界。默认true
         * @param {boolean} options.spiderfyOnMaxZoom 当您点击底部缩放级别的群集时，我们会将其抓取，以便您可以看到其所有标记。 默认false
         * @param {number} options.disableClusteringAtZoom 停止聚合层级。默认18
         * @param {number} options.maxClusterRadius 最大聚合半径,默认80像素
         * @param {boolean} options.animate 是否显示动画,默认true
         * @param {Function} options.IconCreateFunction 自定义聚合图标方法
         * @example 
         * IconCreateFunction: function (cluster) {
         *  var childCount = cluster.getChildCount();
         *  var c = ' marker-cluster-';
         *      if (childCount < 10) {
         *          c += 'small';
         *      } else if (childCount < 100) {
         *          c += 'medium';
         *      } else {
         *          c += 'large';
         *  }
         * return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
	     * },
         * @param {object} iconStyle 单个点显示样式，同marker
         * @example
         * let data =_getData(deviceUrl);
         * let markerClusterLayer=Z.markerClusterLayer(data,{maxClusterRadius:50,maxZoom:19,minZoom:13},{iconUrl:icon});
         * let map.addLayer(markerClusterLayer);
         */
        z.markerClusterLayer=function(data,options,iconStyle){
            let layer=new z.MarkerClusterLayer(data,options,iconStyle);
            return layer;
        }

    })(Z);


    //draw绘制方法
    (function (z) {
        /**
         * 绘制几何图形方法,Zmap特有方法
		 * @class 
         * @param {object} map map对象
         * @example let draw=new Z.draw();
         */
        z.draw = function (map) {
            this._map = map;
            this._type = null;
            this._pointAry = [];
            this._container = this._map._container;
            this._tempLayer = null;
            this._currentLayer = null;
            this._layerAry = [];

            this._center = null;
            this._radius = null;

            this.eventElement = {};
        }
        z.draw.prototype = {
            /**
             * 开始绘制，传入绘制类型参数
             * @param {String} type  'circlemarker','polyline','polygon','circle','rectangle'
             * @param {function} fn 回调
             * @example 
             * let draw=new Z.draw();
             * draw.startDraw('polyline',function(e){
             *      console.log(e);
             * });
             */
            startDraw: function (type, fn) {
                this.stop();
                this._type = type.toLowerCase();

                this._map.doubleClickZoom.disable();

                this.eventElement.mousemove = this._onMove.bind(this);
                this.eventElement.click = this._onClick.bind(this);
                this.eventElement.dblclick = this._onFinish.bind(this, fn);
                this.eventElement.mousedown = this._onmouseDown.bind(this);
                this.eventElement.mouseup = this._onmouseUp.bind(this, fn);

                this._map.on('mousemove', this.eventElement.mousemove);
                this._map.on('click', this.eventElement.click);
                this._container.style.cursor = 'crosshair';

                if (this._type == 'circle' || this._type == 'rectangle') {
                    this._map.on('mousedown', this.eventElement.mousedown);
                    this._map.on('mouseup', this.eventElement.mouseup);
                }
                this._map.on('dblclick', this.eventElement.dblclick);
            },
            //鼠标单击事件
            _onClick: function (evt) {
                let latlng = evt.latlng;
                if (this._type == 'polyline') {
                    this._pointAry.push(latlng);
                    if (this._pointAry.length > 1) {
                        if (!this._currentLayer) {
                            this._currentLayer = new L.polyline([this._pointAry[0], this._pointAry[1]]);
                            this._currentLayer.addTo(this._map);
                        } else {
                            this._currentLayer.addLatLng(latlng);
                        }
                    }
                } else if (this._type == 'polygon') {
                    this._pointAry.push(latlng);
                    if (this._pointAry.length > 1) {
                        if (!this._currentLayer) {
                            this._currentLayer = new L.polyline([this._pointAry[0], this._pointAry[1]]);
                            this._currentLayer.addTo(this._map);
                        } else {
                            this._currentLayer.addLatLng(latlng);
                        }
                    }
                } else if (this._type == 'point') {
                    this._pointAry.push(latlng);
                    this._currentLayer = new L.circleMarker(latlng);
                    this._currentLayer.addTo(this._map);
                    this._layerAry.push(this._currentLayer);
                    this._currentLayer = null;
                }
            },
            //鼠标按下事件
            _onmouseDown: function (evt) {
                this._map.dragging.disable();
                this._center = evt.latlng;
                if (this._type == 'circle') {
                    this._currentLayer = L.circle(this._center, {
                        radius: 0
                    });
                    this._currentLayer.addTo(this._map);
                }
                if (this._type == 'rectangle') {
                    this._currentLayer = L.rectangle([this._center, this._center]);
                    this._currentLayer.addTo(this._map);
                }
            },
            //鼠标弹起事件
            _onmouseUp: function (fn) {
                let result;
                if (this._type == 'circle') {
                    result = {
                        type: this._type,
                        center: this._center,
                        radius: this._radius,
                    };
                } else {
                    let rectBounds=this._currentLayer.getLatLngs();
                    rectBounds[0].push(rectBounds[0][0]);
                    result = {
                        type: this._type,
                        rectBounds: rectBounds
                    };
                }
                this._layerAry.push(this._currentLayer);
                this._center = null;
                this._currentLayer = null;
                this._map.dragging.enable();
                if (fn) {
                    fn(result);
                }
            },
            //鼠标移动事件
            _onMove: function (evt) {
                let latlng = evt.latlng;
                if (this._type == 'polyline') {
                    if (this._pointAry.length > 0) {
                        if (this._tempLayer) {
                            this._tempLayer.setLatLngs([this._pointAry[this._pointAry.length - 1], latlng]);
                        } else {
                            this._tempLayer = new L.polyline([this._pointAry[this._pointAry.length - 1], latlng]);
                            this._tempLayer.addTo(this._map);
                        }
                    }
                } else if (this._type == 'polygon') {
                    if (this._pointAry.length > 0) {
                        //与起点
                        if (this._tempLayer) {
                            this._tempLayer.setLatLngs([this._pointAry[0], latlng]);
                        } else {
                            this._tempLayer = new L.polyline([this._pointAry[this._pointAry.length - 1], latlng]);
                            this._tempLayer.addTo(this._map);
                        }
                        //与终点
                        if (this._tempLayer1) {
                            this._tempLayer1.setLatLngs([this._pointAry[this._pointAry.length - 1], latlng]);
                        } else {
                            this._tempLayer1 = new L.polyline([this._pointAry[this._pointAry.length - 1], latlng]);
                            this._tempLayer1.addTo(this._map);
                        }
                    }
                } else if (this._type == 'circle') {
                    if (this._center) {
                        this._radius = L.latLng(latlng).distanceTo(this._center);
                        this._currentLayer.setRadius(this._radius);
                    }
                } else if (this._type == 'rectangle') {
                    if (this._center) {
                        this._rectBounds = [this._center, latlng];
                        this._currentLayer.setBounds(this._rectBounds);
                    }
                }
            },
            //单次绘制完成
            _onFinish: function (fn) {
                //删除动态线
                if (this._tempLayer) {
                    this._tempLayer.remove();
                    this._tempLayer = null;
                }
                if (this._tempLayer1) {
                    this._tempLayer1.remove();
                    this._tempLayer1 = null;
                }
                
                if (this._type == 'point'||this._type == 'polyline') {
                    //删除最后一个点
                    if(this._type == 'point'){
                        this._layerAry[this._layerAry.length - 1].remove();
                        this._layerAry.pop();
                    }
                    this._pointAry.pop();
                }
                if (this._type == 'polygon') {
                    //删除最后一个点
                    this._pointAry.pop();
                    //删除当前多边形
                    if (this._currentLayer) {
                        this._currentLayer.remove();
                        this._currentLayer = null;
                    }
                    //首位相接
                    this._pointAry.push(this._pointAry[0]);
                    //重绘多边形
                    this._currentLayer = new L.polygon(this._pointAry).addTo(this._map);
                }
                if (this._type == 'circle' || this._type == 'rectangle') {
                    this._layerAry[this._layerAry.length - 1].remove();
                    this._pointAry.pop();
                    this._layerAry[this._layerAry.length - 2].remove();
                    this._pointAry.pop();
                }
                //返回绘制结果
                let result = {
                    type: this._type,
                    latLngAry: this._pointAry||[],
                };
                
                //当前次数绘制点
                this._pointAry = [];
                if (this._currentLayer) {
                    this._layerAry.push(this._currentLayer);
                    this._currentLayer = null;
                }

                
                if (fn) {
                    //if(result.latLngAry.length>0)
                    fn(result);
                }
            },
            /**
             * draw 类，清除绘制结果
             * @example 
             * let draw=new Z.draw();
             * draw.clearResult();
             */
            clearResult: function () {
                if (this._layerAry.length > 0) {
                    for (let i = 0; i < this._layerAry.length; i++) {
                        this._layerAry[i].remove();
                    }
                }
            },
            /**
             * draw 类，结束本次绘制
             * @example 
             * let draw=new Z.draw();
             * draw.cancel();
             */
            cancel: function () {
                this._pointAry = [];
                this._center = null;
                this._radius = null;
                if (this._currentLayer) {
                    this._currentLayer.remove();
                    this._currentLayer = null;
                }
                if (this._tempLayer) {
                    this._tempLayer.remove();
                    this._tempLayer = null;
                }
                if (this._tempLayer1) {
                    this._tempLayer1.remove();
                    this._tempLayer1 = null;
                }
            },
            /**
             * draw 类，终止绘制功能
             * @example 
             * let draw=new Z.draw();
             * draw.stop();
             * 例：一次绘制后停止绘制功能
             * draw.startDraw('polyline',function(e){
             *      draw.stop();
             * });
             */
            stop: function () {
                this.cancel();
                this._map.off('mousedown', this.eventElement.mousedown);
                this._map.off('mouseup', this.eventElement.mouseup);
                this._map.off('mousemove', this.eventElement.mousemove);
                this._map.off('click', this.eventElement.click);
                this._map.off('dblclick', this.eventElement.dblclick);
                this._container.style.cursor = '';
            }
        };
        //z.draw = draw;
    })(Z);

    //CircleMarker类
    (function(z){
        z.CircleMarker=L.CircleMarker.extend({});

        /**
         * 
         * @extends {L.circlemarker}
		 * @class circleMarker 类，更多接口：{@link https://leafletjs.com/reference-1.3.4.html#circlemarker}
         * @param {array} coords  坐标点位，例：[32,120]
         * @param {object} options  参数
         *  @param {number} options.radius  像素大小
         *  @param {number}options.opacity 透明度
         *  @param {string}options.color 外边线颜色
         *  @param {number}options.weight 外边线粗细
         *  @param {boolean}options.stroke 是否显示外边框
         *  @param {string}options.fillColor 填充色 rgb或16进制
         *  @param {number}options.fillOpacity 填充透明度
         * @param {number}attributes 属性信息
         * @example
         *  let circlemarker=L.circleMarker([20,120],{radius:10});
         */
        z.circleMarker=function(coords, options, attributes) {
            let circleMarker=new z.CircleMarker(coords, options);
            if(attributes){
                circleMarker.attributes=attributes;
            }
            return circleMarker;
        }
        L.circleMarker=z.circleMarker;
    })(Z);

    //marker类
    (function(z){
        z.Marker=L.Marker.extend({
            initialize: function(latlng, options) {
                this.iconOpt = options || {};
                let opt = {};
                let myIcon = null;
                if(this.iconOpt.icon!=undefined&&this.iconOpt.icon instanceof L.Icon){
                    myIcon=this.iconOpt.icon;
                }else if((this.iconOpt.icon!=undefined&&typeof this.iconOpt.icon=='string')||(this.iconOpt.iconUrl!=undefined&&typeof this.iconOpt.iconUrl=='string')){
                    this.iconOpt.iconUrl=this.iconOpt.icon||this.iconOpt.iconUrl;
                    myIcon = L.icon(this.iconOpt);
                }else if(this.iconOpt.html&&typeof this.iconOpt.html=='string'){
                    myIcon = L.divIcon(this.iconOpt);
                }
                if(myIcon)
                opt.icon = myIcon;
                L.Marker.prototype.initialize.call(this,latlng,opt);
            },
            flashMarker:function(time,map){
                let t=0;
                let self=this;
                this.intervalKey=setInterval(function(){
                    t++;
                    if(t>5){
                        clearInterval(self.intervalKey);
                        return;
                    }
                    if(t%2==0){
                        self.remove();
                    }else{
                        self.addTo(map);
                    }
                },time);
            },
            setLatLng:function(latlng,map){
                L.Marker.prototype.setLatLng.call(this,latlng);
                if(map && map instanceof Z.Zmap)
                this.flashMarker(500,map);
            },
            /**
             * 更换图标
             * @param {string|object} icon 图标地址
             */
            setIcon: function (icon) {
                let type=Object.prototype.toString.call(icon);
                let myIcon;
                if(type=='[object String]'){
                    this.iconOpt.iconUrl = icon;
                    myIcon = L.icon(this.iconOpt);
                }else if (type=='[object Object]'){
                    myIcon = L.icon(this.iconOpt);
                }
                L.Marker.prototype.setIcon.call(this,myIcon);
            },
            /**
             * 更换div图标
             * @param {string|object} html 图标html内容
             */
            setDivIcon: function (html) {
                let type=Object.prototype.toString.call(html);
                let myIcon;
                if(type=='[object String]'){
                    this.iconOpt.html = html;
                    myIcon = L.divIcon(this.iconOpt);
                }else if (type=='[object Object]'){
                    myIcon = L.divIcon(html);
                }
                L.Marker.prototype.setIcon.call(this,myIcon);
            },
            //解决addFeature,缩放事件报错问题
            // _animateZoom:function(e){
            //     if(this._map)
            //     L.Marker.prototype._animateZoom.call(this,e);
            // }
            alertSelf:function(){
                alert('i am z.marker!')
            }
        })


        /**
         * 
         * @extends {L.marker}
		 * @class marker 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#marker}
         * @param {array} coords  坐标点位，例：[32,120]
         * @param {object} options  参数
         * @param {String}options.icon 图标路径
         * @param {number}options.iconSize 图标大小，px
         * @param {array}options.popupAnchor 信息窗位置偏移
         * @param {array}options.iconAnchor 图标偏移
         * @param {string}options.className css类名
         * @param {html}options.html html内容
         * @param attributes {object} 属性信息
         */
        z.marker=function(latlng, options,attributes){
            let marker=new z.Marker(latlng, options);
            if(attributes){
                marker.attributes=attributes;
            }
            return marker;
        }

        L.marker=z.marker;

    })(Z);

    //polyline类
    (function(z){
        z.Polyline=L.Polyline.extend({})
        /**
         * @extends {L.polyline}
		 * @class polyline 类，根据一系列坐标生成折线,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#polyline}
         * @param coordsAry {array} 坐标点位二位数组，例：[[32,120],[32,121],[32,122],...]
         * @param options {object} 参数
         * @param options.color 折线颜色
         * @param options.weight 折线粗细
         * @param attributes 属性信息
         */
        z.polyline=function(coordsAry, options, attributes){
            let polyline=new z.Polyline(coordsAry, options, attributes);
            polyline.attributes=attributes||'';
            return polyline;
        }
        L.polyline=z.polyline;
    })(Z);

    //polygon类
    (function(z){
        z.Polygon=L.Polygon.extend({});

        /**
         * @extends {L.polygon}
		 * @class polygon 类，根据一系列首位相接的坐标生成多边形,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#polygon}
         * @param {array} coordsAry  坐标点位二位数组，首尾坐标相同例：[[32,120],[32,121],[32,122],...[32,120]}
         * @param {object} options  参数
         *  @param {boolean} options.stroke 是否显示外边线
         *  @param {string} options.color 外边线颜色，rgb或16进制
         *  @param {number} options.weight 外边线粗细，默认3
         *  @param {string} options.fillColor 填充色，rgb或16进制
         *  @param {number} options.fillOpacity 填充透明度
         * @param {onject} attributes 属性信息
         */
        z.polygon=function(coordsAry, options, attributes){
            let polygon=new z.Polygon(coordsAry, options);
            polygon.attributes=attributes||''
            return polygon;
        }

        L.polygon=z.polygon;
    })(Z);


    //popup
    (function(z){
        z.Popup=L.Popup.extend({});
        /**
         * @extends {L.popup}
		 * @class popup 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#popup}
         * @param {L.feature} feature
         * @param {object} options 参数
         * @param {number} options.maxWidth 最大宽度，默认300px;
         * @param {number} options.minWidth 最小宽度，默认50px，
         * @param {boolean} options.autoPan 是否跟随地图拖动,默认true
         * @param {boolean} options.closeButton 是否显示关闭按钮,默认true
         * @param {boolean} options.autoClose 是否自动关闭，默认false
		 * @param {string} options.className 名称
         * @param attributes {object} 属性信息
         */
        z.popup=function(options){
            let popup=new z.Popup(options);
            return popup;
        }
    })(Z);

    //tooltip
    (function(z){
        z.Tooltip=L.Tooltip.extend({});
        /**
         * @extends {L.tooltip}
		 * @class tooltip 类,更多接口：{@link https://leafletjs.com/reference-1.3.4.html#tooltip}
         * @param options
		 * @param options.sticky {boolean} 默认false toolTip位置固定或跟随鼠标移动，默认false 固定
		 * @param options.permanent {boolean} 永久显示或鼠标触碰显示，默认false 鼠标触碰显示
		 * @param options.offset {array} 默认[0, 0]
		 * @param options.interactive {boolean} 是否监听feature 事件，默认false
		 * @param options.direction {string} 打开tooltip的方向，可选值right, left, top, bottom, center, auto。默认auto
         */
        z.tooltip=function(options){
            let tooltip=new z.Tooltip(options);
            return tooltip;
        }
    })(Z);

    (function(z){
        z.Proj={};

        z.Proj.crs=L.Proj.CRS.extend({
            initialize:function(crsCode,proj4Str,options){
                L.Proj.CRS.prototype.initialize.call(this,crsCode,proj4Str,options);
            }
        })
        /**
         * @extends {L.Proj.CRS}
         * @class Z.Proj.CRS 自定义坐标系类，Zmap特有方法,相关参数，{@link https://epsg.io}
         * @param {string} crsCode epsg代码
         * @param {string} proj4Str proj4参数
         * @param {object} options
         * @param {array} options.origin 原点坐标
         * @param {array} options.resolutions 分辨率
         * @example 
         * let CRS_4326 = new Z.Proj.CRS('EPSG:4326',
         *'+proj=longlat +datum=WGS84 +no_defs',
         *      {
         *          origin:[-400,400],
         *          resolutions: [
         *               4.7589220116605604E-4,
         *               2.3794610058302802E-4,
         *               1.1897305029151401E-4,
         *               5.9486525145757005E-5,
         *               2.3794610058302804E-5,
         *               1.1897305029151402E-5,
         *               4.75892201166056E-6,
         *               2.37946100583028E-6,
         *               5.9486525145757E-7
         *           ]
         *       });
         * let map=Z.zmap('mapDiv',{center:[29.8687, 121.54291],zoom:5,crs:CRS_4326});
         */
        z.Proj.CRS=function(crsCode,proj4Str,options){
            let crs=new Z.Proj.crs(crsCode,proj4Str,options);
            return crs; 
        }
        
    })(Z);


// })(window);

export default {Z};
