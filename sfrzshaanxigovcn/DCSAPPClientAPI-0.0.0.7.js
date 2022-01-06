!(function(t, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof exports
    ? (exports.DCSAPPClientAPI = r())
    : (t.DCSAPPClientAPI = r());
})("undefined" != typeof self ? self : this, function() {
  return (function(t) {
    function r(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    var e = {};
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function(t, e, n) {
        r.o(t, e) ||
          Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: n
          });
      }),
      (r.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
      }),
      (r.p = ""),
      r((r.s = 4))
    );
  })([
    function(t, r, e) {
      "use strict";
      function n() {
        return E;
      }
      function i() {
        var t = new x(
            "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",
            16
          ),
          r = new x(
            "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",
            16
          ),
          e = new x(
            "28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",
            16
          ),
          n = new k(t, r, e);
        return {
          curve: n,
          G: n.decodePointHex(
            "0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"
          ),
          n: new x(
            "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",
            16
          )
        };
      }
      function o(t) {
        if (t > 32) throw Error("generateRandomHex Max length is 32");
        return f(
          new x(I.bitLength(), A)
            .mod(I.subtract(x.ONE))
            .add(x.ONE)
            .toString(16),
          64
        ).substr(0, 2 * t);
      }
      function s() {
        var t = new x(I.bitLength(), A).mod(I.subtract(x.ONE)).add(x.ONE),
          r = f(t.toString(16), 64),
          e = D.multiply(t);
        return {
          privateKey: r,
          publicKey:
            "04" +
            f(
              e
                .getX()
                .toBigInteger()
                .toString(16),
              64
            ) +
            f(
              e
                .getY()
                .toBigInteger()
                .toString(16),
              64
            )
        };
      }
      function a(t) {
        t = unescape(encodeURIComponent(t));
        for (var r = t.length, e = [], n = 0; n < r; n++)
          e[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4 << 3));
        for (var i = [], o = 0; o < r; o++) {
          var s = (e[o >>> 2] >>> (24 - (o % 4 << 3))) & 255;
          i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16));
        }
        return i.join("");
      }
      function h(t) {
        for (var r = "", e = 0; e < t.length; e++) {
          var n,
            i = t[e];
          (n = i < 0 ? (255 + i + 1).toString(16) : i.toString(16)),
            1 == n.length && (n = "0" + n),
            (r += n);
        }
        return r;
      }
      function u(t) {
        t = unescape(encodeURIComponent(t));
        for (var r = t.length, e = [], n = 0; n < r; n++)
          e[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
        for (var i = [], o = 0; o < r; o++) {
          var s = (e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255,
            a = (s >>> 4).toString(16),
            h = (15 & s).toString(16);
          i.push(parseInt(a + h, 16));
        }
        return i;
      }
      function f(t, r) {
        return t.length >= r ? t : new Array(r - t.length + 1).join("0") + t;
      }
      function c(t) {
        for (var r = [], e = 0, n = 0; n < 2 * t.length; n += 2)
          (r[n >>> 3] |= parseInt(t[e], 10) << (24 - (n % 8) * 4)), e++;
        for (var i = [], o = 0; o < t.length; o++) {
          var s = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
          i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16));
        }
        return i.join("");
      }
      function l(t) {
        for (var r = [], e = 0, n = 0; n < 2 * t.length; n += 2)
          (r[n >>> 3] |= parseInt(t[e], 10) << (24 - (n % 8) * 4)), e++;
        try {
          for (var i = [], o = 0; o < t.length; o++) {
            var s = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
            i.push(String.fromCharCode(s));
          }
          return decodeURIComponent(escape(i.join("")));
        } catch (t) {
          throw new Error("Malformed UTF-8 data");
        }
      }
      function p(t) {
        var r = [],
          e = t.length;
        e % 2 != 0 && (t = f(t, e + 1)), (e = t.length);
        for (var n = 0; n < e; n += 2) r.push(parseInt(t.substr(n, 2), 16));
        return r;
      }
      function y(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          e = t.length,
          n = 16 - (15 & e);
        if (r === O) {
          var i = new Array(n);
          i[0] = 128;
          for (var o = 1; o < n; o++) i[o] = 0;
          t = t.concat(i);
        } else if (r === C) {
          for (var s = new Array(n), a = 0; a < n; a++) s[a] = n;
          t = t.concat(s);
        }
        return t;
      }
      function g(t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          e = t.length,
          n = 0;
        if (r === O) {
          for (var i = 0; i <= 17; i++) {
            if (128 === t[e - i]) {
              n = i + 1;
              break;
            }
            if (0 !== t[e - i])
              throw Error(
                "delDataPadding error, input parameter padMode is " + r
              );
          }
          if (0 === n || n > 16)
            throw Error(
              "delDataPadding error, input parameter padMode is " + r
            );
        } else if (r === C) {
          n = t[e - 1];
          for (var o = 1; o < n; o++)
            if (t[e - o - 1] !== n)
              throw Error(
                "delDataPadding error, input parameter padMode is " + r
              );
        }
        return t.slice(0, e - n);
      }
      function d(t, r) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++)
          e[n] = t[n] ^ r[n];
        return e;
      }
      function v(t, r) {
        for (
          var e = new Array(t.length), n = r.length, i = 0;
          i < t.length;
          i++
        )
          e[i] = t[i] ^ r[i % n];
        return e;
      }
      function m(t, r) {
        if (t.length !== r.length) return !1;
        for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
        return !0;
      }
      function _(t) {
        return "string" == typeof t && t.constructor == String;
      }
      function b(t) {
        return (
          "object" == (void 0 === t ? "undefined" : T(t)) &&
          t.constructor == Array
        );
      }
      var T =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              },
        w = e(1),
        x = w.BigInteger,
        S = w.SecureRandom,
        F = e(5),
        k = F.ECCurveFp,
        A = new S(),
        B = i(),
        E = B.curve,
        D = B.G,
        I = B.n,
        O = 1,
        C = 4;
      t.exports = {
        getGlobalCurve: n,
        generateEcparam: i,
        generateRandomHex: o,
        generateKeyPairHex: s,
        parseUtf8StringToHex: a,
        parseArrayBufferToHex: h,
        parseUtf8StringToArray: function(t) {
          return u(t);
        },
        leftPad: f,
        arrayToHex: c,
        arrayToUtf8: l,
        hexToArray: p,
        addDataPadding: y,
        delDataPadding: g,
        strXorStr: d,
        addSaltData: v,
        PAD_PKCS5: C,
        PAD_PBOC30: O,
        arrayCompare: m,
        isString: _,
        isArray: b
      };
    },
    function(t, r, e) {
      (function() {
        function e(t, r, e) {
          null != t &&
            ("number" == typeof t
              ? this.fromNumber(t, r, e)
              : null == r && "string" != typeof t
              ? this.fromString(t, 256)
              : this.fromString(t, r));
        }
        function n() {
          return new e(null);
        }
        function i(t, r, e, n, i, o) {
          for (; --o >= 0; ) {
            var s = r * this[t++] + e[n] + i;
            (i = Math.floor(s / 67108864)), (e[n++] = 67108863 & s);
          }
          return i;
        }
        function o(t, r, e, n, i, o) {
          for (var s = 32767 & r, a = r >> 15; --o >= 0; ) {
            var h = 32767 & this[t],
              u = this[t++] >> 15,
              f = a * h + u * s;
            (h = s * h + ((32767 & f) << 15) + e[n] + (1073741823 & i)),
              (i = (h >>> 30) + (f >>> 15) + a * u + (i >>> 30)),
              (e[n++] = 1073741823 & h);
          }
          return i;
        }
        function s(t, r, e, n, i, o) {
          for (var s = 16383 & r, a = r >> 14; --o >= 0; ) {
            var h = 16383 & this[t],
              u = this[t++] >> 14,
              f = a * h + u * s;
            (h = s * h + ((16383 & f) << 14) + e[n] + i),
              (i = (h >> 28) + (f >> 14) + a * u),
              (e[n++] = 268435455 & h);
          }
          return i;
        }
        function a(t) {
          return pr.charAt(t);
        }
        function h(t, r) {
          var e = yr[t.charCodeAt(r)];
          return null == e ? -1 : e;
        }
        function u(t) {
          for (var r = this.t - 1; r >= 0; --r) t[r] = this[r];
          (t.t = this.t), (t.s = this.s);
        }
        function f(t) {
          (this.t = 1),
            (this.s = t < 0 ? -1 : 0),
            t > 0
              ? (this[0] = t)
              : t < -1
              ? (this[0] = t + this.DV)
              : (this.t = 0);
        }
        function c(t) {
          var r = n();
          return r.fromInt(t), r;
        }
        function l(t, r) {
          var n;
          if (16 == r) n = 4;
          else if (8 == r) n = 3;
          else if (256 == r) n = 8;
          else if (2 == r) n = 1;
          else if (32 == r) n = 5;
          else {
            if (4 != r) return void this.fromRadix(t, r);
            n = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var i = t.length, o = !1, s = 0; --i >= 0; ) {
            var a = 8 == n ? 255 & t[i] : h(t, i);
            a < 0
              ? "-" == t.charAt(i) && (o = !0)
              : ((o = !1),
                0 == s
                  ? (this[this.t++] = a)
                  : s + n > this.DB
                  ? ((this[this.t - 1] |=
                      (a & ((1 << (this.DB - s)) - 1)) << s),
                    (this[this.t++] = a >> (this.DB - s)))
                  : (this[this.t - 1] |= a << s),
                (s += n) >= this.DB && (s -= this.DB));
          }
          8 == n &&
            0 != (128 & t[0]) &&
            ((this.s = -1),
            s > 0 && (this[this.t - 1] |= ((1 << (this.DB - s)) - 1) << s)),
            this.clamp(),
            o && e.ZERO.subTo(this, this);
        }
        function p() {
          for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
            --this.t;
        }
        function y(t) {
          if (this.s < 0) return "-" + this.negate().toString(t);
          var r;
          if (16 == t) r = 4;
          else if (8 == t) r = 3;
          else if (2 == t) r = 1;
          else if (32 == t) r = 5;
          else {
            if (4 != t) return this.toRadix(t);
            r = 2;
          }
          var e,
            n = (1 << r) - 1,
            i = !1,
            o = "",
            s = this.t,
            h = this.DB - ((s * this.DB) % r);
          if (s-- > 0)
            for (
              h < this.DB && (e = this[s] >> h) > 0 && ((i = !0), (o = a(e)));
              s >= 0;

            )
              h < r
                ? ((e = (this[s] & ((1 << h) - 1)) << (r - h)),
                  (e |= this[--s] >> (h += this.DB - r)))
                : ((e = (this[s] >> (h -= r)) & n),
                  h <= 0 && ((h += this.DB), --s)),
                e > 0 && (i = !0),
                i && (o += a(e));
          return i ? o : "0";
        }
        function g() {
          var t = n();
          return e.ZERO.subTo(this, t), t;
        }
        function d() {
          return this.s < 0 ? this.negate() : this;
        }
        function v(t) {
          var r = this.s - t.s;
          if (0 != r) return r;
          var e = this.t;
          if (0 != (r = e - t.t)) return this.s < 0 ? -r : r;
          for (; --e >= 0; ) if (0 != (r = this[e] - t[e])) return r;
          return 0;
        }
        function m(t) {
          var r,
            e = 1;
          return (
            0 != (r = t >>> 16) && ((t = r), (e += 16)),
            0 != (r = t >> 8) && ((t = r), (e += 8)),
            0 != (r = t >> 4) && ((t = r), (e += 4)),
            0 != (r = t >> 2) && ((t = r), (e += 2)),
            0 != (r = t >> 1) && ((t = r), (e += 1)),
            e
          );
        }
        function _() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + m(this[this.t - 1] ^ (this.s & this.DM));
        }
        function b(t, r) {
          var e;
          for (e = this.t - 1; e >= 0; --e) r[e + t] = this[e];
          for (e = t - 1; e >= 0; --e) r[e] = 0;
          (r.t = this.t + t), (r.s = this.s);
        }
        function T(t, r) {
          for (var e = t; e < this.t; ++e) r[e - t] = this[e];
          (r.t = Math.max(this.t - t, 0)), (r.s = this.s);
        }
        function w(t, r) {
          var e,
            n = t % this.DB,
            i = this.DB - n,
            o = (1 << i) - 1,
            s = Math.floor(t / this.DB),
            a = (this.s << n) & this.DM;
          for (e = this.t - 1; e >= 0; --e)
            (r[e + s + 1] = (this[e] >> i) | a), (a = (this[e] & o) << n);
          for (e = s - 1; e >= 0; --e) r[e] = 0;
          (r[s] = a), (r.t = this.t + s + 1), (r.s = this.s), r.clamp();
        }
        function x(t, r) {
          r.s = this.s;
          var e = Math.floor(t / this.DB);
          if (e >= this.t) return void (r.t = 0);
          var n = t % this.DB,
            i = this.DB - n,
            o = (1 << n) - 1;
          r[0] = this[e] >> n;
          for (var s = e + 1; s < this.t; ++s)
            (r[s - e - 1] |= (this[s] & o) << i), (r[s - e] = this[s] >> n);
          n > 0 && (r[this.t - e - 1] |= (this.s & o) << i),
            (r.t = this.t - e),
            r.clamp();
        }
        function S(t, r) {
          for (var e = 0, n = 0, i = Math.min(t.t, this.t); e < i; )
            (n += this[e] - t[e]), (r[e++] = n & this.DM), (n >>= this.DB);
          if (t.t < this.t) {
            for (n -= t.s; e < this.t; )
              (n += this[e]), (r[e++] = n & this.DM), (n >>= this.DB);
            n += this.s;
          } else {
            for (n += this.s; e < t.t; )
              (n -= t[e]), (r[e++] = n & this.DM), (n >>= this.DB);
            n -= t.s;
          }
          (r.s = n < 0 ? -1 : 0),
            n < -1 ? (r[e++] = this.DV + n) : n > 0 && (r[e++] = n),
            (r.t = e),
            r.clamp();
        }
        function F(t, r) {
          var n = this.abs(),
            i = t.abs(),
            o = n.t;
          for (r.t = o + i.t; --o >= 0; ) r[o] = 0;
          for (o = 0; o < i.t; ++o) r[o + n.t] = n.am(0, i[o], r, o, 0, n.t);
          (r.s = 0), r.clamp(), this.s != t.s && e.ZERO.subTo(r, r);
        }
        function k(t) {
          for (var r = this.abs(), e = (t.t = 2 * r.t); --e >= 0; ) t[e] = 0;
          for (e = 0; e < r.t - 1; ++e) {
            var n = r.am(e, r[e], t, 2 * e, 0, 1);
            (t[e + r.t] += r.am(
              e + 1,
              2 * r[e],
              t,
              2 * e + 1,
              n,
              r.t - e - 1
            )) >= r.DV && ((t[e + r.t] -= r.DV), (t[e + r.t + 1] = 1));
          }
          t.t > 0 && (t[t.t - 1] += r.am(e, r[e], t, 2 * e, 0, 1)),
            (t.s = 0),
            t.clamp();
        }
        function A(t, r, i) {
          var o = t.abs();
          if (!(o.t <= 0)) {
            var s = this.abs();
            if (s.t < o.t)
              return (
                null != r && r.fromInt(0), void (null != i && this.copyTo(i))
              );
            null == i && (i = n());
            var a = n(),
              h = this.s,
              u = t.s,
              f = this.DB - m(o[o.t - 1]);
            f > 0
              ? (o.lShiftTo(f, a), s.lShiftTo(f, i))
              : (o.copyTo(a), s.copyTo(i));
            var c = a.t,
              l = a[c - 1];
            if (0 != l) {
              var p = l * (1 << this.F1) + (c > 1 ? a[c - 2] >> this.F2 : 0),
                y = this.FV / p,
                g = (1 << this.F1) / p,
                d = 1 << this.F2,
                v = i.t,
                _ = v - c,
                b = null == r ? n() : r;
              for (
                a.dlShiftTo(_, b),
                  i.compareTo(b) >= 0 && ((i[i.t++] = 1), i.subTo(b, i)),
                  e.ONE.dlShiftTo(c, b),
                  b.subTo(a, a);
                a.t < c;

              )
                a[a.t++] = 0;
              for (; --_ >= 0; ) {
                var T =
                  i[--v] == l
                    ? this.DM
                    : Math.floor(i[v] * y + (i[v - 1] + d) * g);
                if ((i[v] += a.am(0, T, i, _, 0, c)) < T)
                  for (a.dlShiftTo(_, b), i.subTo(b, i); i[v] < --T; )
                    i.subTo(b, i);
              }
              null != r && (i.drShiftTo(c, r), h != u && e.ZERO.subTo(r, r)),
                (i.t = c),
                i.clamp(),
                f > 0 && i.rShiftTo(f, i),
                h < 0 && e.ZERO.subTo(i, i);
            }
          }
        }
        function B(t) {
          var r = n();
          return (
            this.abs().divRemTo(t, null, r),
            this.s < 0 && r.compareTo(e.ZERO) > 0 && t.subTo(r, r),
            r
          );
        }
        function E(t) {
          this.m = t;
        }
        function D(t) {
          return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
        }
        function I(t) {
          return t;
        }
        function O(t) {
          t.divRemTo(this.m, null, t);
        }
        function C(t, r, e) {
          t.multiplyTo(r, e), this.reduce(e);
        }
        function q(t, r) {
          t.squareTo(r), this.reduce(r);
        }
        function P() {
          if (this.t < 1) return 0;
          var t = this[0];
          if (0 == (1 & t)) return 0;
          var r = 3 & t;
          return (
            (r = (r * (2 - (15 & t) * r)) & 15),
            (r = (r * (2 - (255 & t) * r)) & 255),
            (r = (r * (2 - (((65535 & t) * r) & 65535))) & 65535),
            (r = (r * (2 - ((t * r) % this.DV))) % this.DV),
            r > 0 ? this.DV - r : -r
          );
        }
        function V(t) {
          (this.m = t),
            (this.mp = t.invDigit()),
            (this.mpl = 32767 & this.mp),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (t.DB - 15)) - 1),
            (this.mt2 = 2 * t.t);
        }
        function N(t) {
          var r = n();
          return (
            t.abs().dlShiftTo(this.m.t, r),
            r.divRemTo(this.m, null, r),
            t.s < 0 && r.compareTo(e.ZERO) > 0 && this.m.subTo(r, r),
            r
          );
        }
        function M(t) {
          var r = n();
          return t.copyTo(r), this.reduce(r), r;
        }
        function R(t) {
          for (; t.t <= this.mt2; ) t[t.t++] = 0;
          for (var r = 0; r < this.m.t; ++r) {
            var e = 32767 & t[r],
              n =
                (e * this.mpl +
                  (((e * this.mph + (t[r] >> 15) * this.mpl) & this.um) <<
                    15)) &
                t.DM;
            for (
              e = r + this.m.t, t[e] += this.m.am(0, n, t, r, 0, this.m.t);
              t[e] >= t.DV;

            )
              (t[e] -= t.DV), t[++e]++;
          }
          t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
        }
        function H(t, r) {
          t.squareTo(r), this.reduce(r);
        }
        function U(t, r, e) {
          t.multiplyTo(r, e), this.reduce(e);
        }
        function K() {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }
        function L(t, r) {
          if (t > 4294967295 || t < 1) return e.ONE;
          var i = n(),
            o = n(),
            s = r.convert(this),
            a = m(t) - 1;
          for (s.copyTo(i); --a >= 0; )
            if ((r.sqrTo(i, o), (t & (1 << a)) > 0)) r.mulTo(o, s, i);
            else {
              var h = i;
              (i = o), (o = h);
            }
          return r.revert(i);
        }
        function z(t, r) {
          var e;
          return (
            (e = t < 256 || r.isEven() ? new E(r) : new V(r)), this.exp(t, e)
          );
        }
        function j() {
          var t = n();
          return this.copyTo(t), t;
        }
        function X() {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function Z() {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }
        function G() {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }
        function J(t) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(t));
        }
        function Y() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
        }
        function W(t) {
          if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
            return "0";
          var r = this.chunkSize(t),
            e = Math.pow(t, r),
            i = c(e),
            o = n(),
            s = n(),
            a = "";
          for (this.divRemTo(i, o, s); o.signum() > 0; )
            (a = (e + s.intValue()).toString(t).substr(1) + a),
              o.divRemTo(i, o, s);
          return s.intValue().toString(t) + a;
        }
        function Q(t, r) {
          this.fromInt(0), null == r && (r = 10);
          for (
            var n = this.chunkSize(r),
              i = Math.pow(r, n),
              o = !1,
              s = 0,
              a = 0,
              u = 0;
            u < t.length;
            ++u
          ) {
            var f = h(t, u);
            f < 0
              ? "-" == t.charAt(u) && 0 == this.signum() && (o = !0)
              : ((a = r * a + f),
                ++s >= n &&
                  (this.dMultiply(i), this.dAddOffset(a, 0), (s = 0), (a = 0)));
          }
          s > 0 && (this.dMultiply(Math.pow(r, s)), this.dAddOffset(a, 0)),
            o && e.ZERO.subTo(this, this);
        }
        function $(t, r, n) {
          if ("number" == typeof r)
            if (t < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(t, n),
                  this.testBit(t - 1) ||
                    this.bitwiseTo(e.ONE.shiftLeft(t - 1), at, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(r);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > t &&
                    this.subTo(e.ONE.shiftLeft(t - 1), this);
          else {
            var i = new Array(),
              o = 7 & t;
            (i.length = 1 + (t >> 3)),
              r.nextBytes(i),
              o > 0 ? (i[0] &= (1 << o) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }
        function tt() {
          var t = this.t,
            r = new Array();
          r[0] = this.s;
          var e,
            n = this.DB - ((t * this.DB) % 8),
            i = 0;
          if (t-- > 0)
            for (
              n < this.DB &&
              (e = this[t] >> n) != (this.s & this.DM) >> n &&
              (r[i++] = e | (this.s << (this.DB - n)));
              t >= 0;

            )
              n < 8
                ? ((e = (this[t] & ((1 << n) - 1)) << (8 - n)),
                  (e |= this[--t] >> (n += this.DB - 8)))
                : ((e = (this[t] >> (n -= 8)) & 255),
                  n <= 0 && ((n += this.DB), --t)),
                0 != (128 & e) && (e |= -256),
                0 == i && (128 & this.s) != (128 & e) && ++i,
                (i > 0 || e != this.s) && (r[i++] = e);
          return r;
        }
        function rt(t) {
          return 0 == this.compareTo(t);
        }
        function et(t) {
          return this.compareTo(t) < 0 ? this : t;
        }
        function nt(t) {
          return this.compareTo(t) > 0 ? this : t;
        }
        function it(t, r, e) {
          var n,
            i,
            o = Math.min(t.t, this.t);
          for (n = 0; n < o; ++n) e[n] = r(this[n], t[n]);
          if (t.t < this.t) {
            for (i = t.s & this.DM, n = o; n < this.t; ++n)
              e[n] = r(this[n], i);
            e.t = this.t;
          } else {
            for (i = this.s & this.DM, n = o; n < t.t; ++n) e[n] = r(i, t[n]);
            e.t = t.t;
          }
          (e.s = r(this.s, t.s)), e.clamp();
        }
        function ot(t, r) {
          return t & r;
        }
        function st(t) {
          var r = n();
          return this.bitwiseTo(t, ot, r), r;
        }
        function at(t, r) {
          return t | r;
        }
        function ht(t) {
          var r = n();
          return this.bitwiseTo(t, at, r), r;
        }
        function ut(t, r) {
          return t ^ r;
        }
        function ft(t) {
          var r = n();
          return this.bitwiseTo(t, ut, r), r;
        }
        function ct(t, r) {
          return t & ~r;
        }
        function lt(t) {
          var r = n();
          return this.bitwiseTo(t, ct, r), r;
        }
        function pt() {
          for (var t = n(), r = 0; r < this.t; ++r) t[r] = this.DM & ~this[r];
          return (t.t = this.t), (t.s = ~this.s), t;
        }
        function yt(t) {
          var r = n();
          return t < 0 ? this.rShiftTo(-t, r) : this.lShiftTo(t, r), r;
        }
        function gt(t) {
          var r = n();
          return t < 0 ? this.lShiftTo(-t, r) : this.rShiftTo(t, r), r;
        }
        function dt(t) {
          if (0 == t) return -1;
          var r = 0;
          return (
            0 == (65535 & t) && ((t >>= 16), (r += 16)),
            0 == (255 & t) && ((t >>= 8), (r += 8)),
            0 == (15 & t) && ((t >>= 4), (r += 4)),
            0 == (3 & t) && ((t >>= 2), (r += 2)),
            0 == (1 & t) && ++r,
            r
          );
        }
        function vt() {
          for (var t = 0; t < this.t; ++t)
            if (0 != this[t]) return t * this.DB + dt(this[t]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function mt(t) {
          for (var r = 0; 0 != t; ) (t &= t - 1), ++r;
          return r;
        }
        function _t() {
          for (var t = 0, r = this.s & this.DM, e = 0; e < this.t; ++e)
            t += mt(this[e] ^ r);
          return t;
        }
        function bt(t) {
          var r = Math.floor(t / this.DB);
          return r >= this.t
            ? 0 != this.s
            : 0 != (this[r] & (1 << t % this.DB));
        }
        function Tt(t, r) {
          var n = e.ONE.shiftLeft(t);
          return this.bitwiseTo(n, r, n), n;
        }
        function wt(t) {
          return this.changeBit(t, at);
        }
        function xt(t) {
          return this.changeBit(t, ct);
        }
        function St(t) {
          return this.changeBit(t, ut);
        }
        function Ft(t, r) {
          for (var e = 0, n = 0, i = Math.min(t.t, this.t); e < i; )
            (n += this[e] + t[e]), (r[e++] = n & this.DM), (n >>= this.DB);
          if (t.t < this.t) {
            for (n += t.s; e < this.t; )
              (n += this[e]), (r[e++] = n & this.DM), (n >>= this.DB);
            n += this.s;
          } else {
            for (n += this.s; e < t.t; )
              (n += t[e]), (r[e++] = n & this.DM), (n >>= this.DB);
            n += t.s;
          }
          (r.s = n < 0 ? -1 : 0),
            n > 0 ? (r[e++] = n) : n < -1 && (r[e++] = this.DV + n),
            (r.t = e),
            r.clamp();
        }
        function kt(t) {
          var r = n();
          return this.addTo(t, r), r;
        }
        function At(t) {
          var r = n();
          return this.subTo(t, r), r;
        }
        function Bt(t) {
          var r = n();
          return this.multiplyTo(t, r), r;
        }
        function Et() {
          var t = n();
          return this.squareTo(t), t;
        }
        function Dt(t) {
          var r = n();
          return this.divRemTo(t, r, null), r;
        }
        function It(t) {
          var r = n();
          return this.divRemTo(t, null, r), r;
        }
        function Ot(t) {
          var r = n(),
            e = n();
          return this.divRemTo(t, r, e), new Array(r, e);
        }
        function Ct(t) {
          (this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function qt(t, r) {
          if (0 != t) {
            for (; this.t <= r; ) this[this.t++] = 0;
            for (this[r] += t; this[r] >= this.DV; )
              (this[r] -= this.DV),
                ++r >= this.t && (this[this.t++] = 0),
                ++this[r];
          }
        }
        function Pt() {}
        function Vt(t) {
          return t;
        }
        function Nt(t, r, e) {
          t.multiplyTo(r, e);
        }
        function Mt(t, r) {
          t.squareTo(r);
        }
        function Rt(t) {
          return this.exp(t, new Pt());
        }
        function Ht(t, r, e) {
          var n = Math.min(this.t + t.t, r);
          for (e.s = 0, e.t = n; n > 0; ) e[--n] = 0;
          var i;
          for (i = e.t - this.t; n < i; ++n)
            e[n + this.t] = this.am(0, t[n], e, n, 0, this.t);
          for (i = Math.min(t.t, r); n < i; ++n)
            this.am(0, t[n], e, n, 0, r - n);
          e.clamp();
        }
        function Ut(t, r, e) {
          --r;
          var n = (e.t = this.t + t.t - r);
          for (e.s = 0; --n >= 0; ) e[n] = 0;
          for (n = Math.max(r - this.t, 0); n < t.t; ++n)
            e[this.t + n - r] = this.am(r - n, t[n], e, 0, 0, this.t + n - r);
          e.clamp(), e.drShiftTo(1, e);
        }
        function Kt(t) {
          (this.r2 = n()),
            (this.q3 = n()),
            e.ONE.dlShiftTo(2 * t.t, this.r2),
            (this.mu = this.r2.divide(t)),
            (this.m = t);
        }
        function Lt(t) {
          if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
          if (t.compareTo(this.m) < 0) return t;
          var r = n();
          return t.copyTo(r), this.reduce(r), r;
        }
        function zt(t) {
          return t;
        }
        function jt(t) {
          for (
            t.drShiftTo(this.m.t - 1, this.r2),
              t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            t.compareTo(this.r2) < 0;

          )
            t.dAddOffset(1, this.m.t + 1);
          for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
            t.subTo(this.m, t);
        }
        function Xt(t, r) {
          t.squareTo(r), this.reduce(r);
        }
        function Zt(t, r, e) {
          t.multiplyTo(r, e), this.reduce(e);
        }
        function Gt(t, r) {
          var e,
            i,
            o = t.bitLength(),
            s = c(1);
          if (o <= 0) return s;
          (e = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6),
            (i = o < 8 ? new E(r) : r.isEven() ? new Kt(r) : new V(r));
          var a = new Array(),
            h = 3,
            u = e - 1,
            f = (1 << e) - 1;
          if (((a[1] = i.convert(this)), e > 1)) {
            var l = n();
            for (i.sqrTo(a[1], l); h <= f; )
              (a[h] = n()), i.mulTo(l, a[h - 2], a[h]), (h += 2);
          }
          var p,
            y,
            g = t.t - 1,
            d = !0,
            v = n();
          for (o = m(t[g]) - 1; g >= 0; ) {
            for (
              o >= u
                ? (p = (t[g] >> (o - u)) & f)
                : ((p = (t[g] & ((1 << (o + 1)) - 1)) << (u - o)),
                  g > 0 && (p |= t[g - 1] >> (this.DB + o - u))),
                h = e;
              0 == (1 & p);

            )
              (p >>= 1), --h;
            if (((o -= h) < 0 && ((o += this.DB), --g), d))
              a[p].copyTo(s), (d = !1);
            else {
              for (; h > 1; ) i.sqrTo(s, v), i.sqrTo(v, s), (h -= 2);
              h > 0 ? i.sqrTo(s, v) : ((y = s), (s = v), (v = y)),
                i.mulTo(v, a[p], s);
            }
            for (; g >= 0 && 0 == (t[g] & (1 << o)); )
              i.sqrTo(s, v),
                (y = s),
                (s = v),
                (v = y),
                --o < 0 && ((o = this.DB - 1), --g);
          }
          return i.revert(s);
        }
        function Jt(t) {
          var r = this.s < 0 ? this.negate() : this.clone(),
            e = t.s < 0 ? t.negate() : t.clone();
          if (r.compareTo(e) < 0) {
            var n = r;
            (r = e), (e = n);
          }
          var i = r.getLowestSetBit(),
            o = e.getLowestSetBit();
          if (o < 0) return r;
          for (
            i < o && (o = i), o > 0 && (r.rShiftTo(o, r), e.rShiftTo(o, e));
            r.signum() > 0;

          )
            (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
              (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
              r.compareTo(e) >= 0
                ? (r.subTo(e, r), r.rShiftTo(1, r))
                : (e.subTo(r, e), e.rShiftTo(1, e));
          return o > 0 && e.lShiftTo(o, e), e;
        }
        function Yt(t) {
          if (t <= 0) return 0;
          var r = this.DV % t,
            e = this.s < 0 ? t - 1 : 0;
          if (this.t > 0)
            if (0 == r) e = this[0] % t;
            else
              for (var n = this.t - 1; n >= 0; --n) e = (r * e + this[n]) % t;
          return e;
        }
        function Wt(t) {
          var r = t.isEven();
          if ((this.isEven() && r) || 0 == t.signum()) return e.ZERO;
          for (
            var n = t.clone(),
              i = this.clone(),
              o = c(1),
              s = c(0),
              a = c(0),
              h = c(1);
            0 != n.signum();

          ) {
            for (; n.isEven(); )
              n.rShiftTo(1, n),
                r
                  ? ((o.isEven() && s.isEven()) ||
                      (o.addTo(this, o), s.subTo(t, s)),
                    o.rShiftTo(1, o))
                  : s.isEven() || s.subTo(t, s),
                s.rShiftTo(1, s);
            for (; i.isEven(); )
              i.rShiftTo(1, i),
                r
                  ? ((a.isEven() && h.isEven()) ||
                      (a.addTo(this, a), h.subTo(t, h)),
                    a.rShiftTo(1, a))
                  : h.isEven() || h.subTo(t, h),
                h.rShiftTo(1, h);
            n.compareTo(i) >= 0
              ? (n.subTo(i, n), r && o.subTo(a, o), s.subTo(h, s))
              : (i.subTo(n, i), r && a.subTo(o, a), h.subTo(s, h));
          }
          return 0 != i.compareTo(e.ONE)
            ? e.ZERO
            : h.compareTo(t) >= 0
            ? h.subtract(t)
            : h.signum() < 0
            ? (h.addTo(t, h), h.signum() < 0 ? h.add(t) : h)
            : h;
        }
        function Qt(t) {
          var r,
            e = this.abs();
          if (1 == e.t && e[0] <= gr[gr.length - 1]) {
            for (r = 0; r < gr.length; ++r) if (e[0] == gr[r]) return !0;
            return !1;
          }
          if (e.isEven()) return !1;
          for (r = 1; r < gr.length; ) {
            for (var n = gr[r], i = r + 1; i < gr.length && n < dr; )
              n *= gr[i++];
            for (n = e.modInt(n); r < i; ) if (n % gr[r++] == 0) return !1;
          }
          return e.millerRabin(t);
        }
        function $t(t) {
          var r = this.subtract(e.ONE),
            i = r.getLowestSetBit();
          if (i <= 0) return !1;
          var o = r.shiftRight(i);
          (t = (t + 1) >> 1) > gr.length && (t = gr.length);
          for (var s = n(), a = 0; a < t; ++a) {
            s.fromInt(gr[Math.floor(Math.random() * gr.length)]);
            var h = s.modPow(o, this);
            if (0 != h.compareTo(e.ONE) && 0 != h.compareTo(r)) {
              for (var u = 1; u++ < i && 0 != h.compareTo(r); )
                if (((h = h.modPowInt(2, this)), 0 == h.compareTo(e.ONE)))
                  return !1;
              if (0 != h.compareTo(r)) return !1;
            }
          }
          return !0;
        }
        function tr(t) {
          (mr[_r++] ^= 255 & t),
            (mr[_r++] ^= (t >> 8) & 255),
            (mr[_r++] ^= (t >> 16) & 255),
            (mr[_r++] ^= (t >> 24) & 255),
            _r >= xr && (_r -= xr);
        }
        function rr() {
          tr(new Date().getTime());
        }
        function er() {
          if (null == vr) {
            for (rr(), vr = hr(), vr.init(mr), _r = 0; _r < mr.length; ++_r)
              mr[_r] = 0;
            _r = 0;
          }
          return vr.next();
        }
        function nr(t) {
          var r;
          for (r = 0; r < t.length; ++r) t[r] = er();
        }
        function ir() {}
        function or() {
          (this.i = 0), (this.j = 0), (this.S = new Array());
        }
        function sr(t) {
          var r, e, n;
          for (r = 0; r < 256; ++r) this.S[r] = r;
          for (e = 0, r = 0; r < 256; ++r)
            (e = (e + this.S[r] + t[r % t.length]) & 255),
              (n = this.S[r]),
              (this.S[r] = this.S[e]),
              (this.S[e] = n);
          (this.i = 0), (this.j = 0);
        }
        function ar() {
          var t;
          return (
            (this.i = (this.i + 1) & 255),
            (this.j = (this.j + this.S[this.i]) & 255),
            (t = this.S[this.i]),
            (this.S[this.i] = this.S[this.j]),
            (this.S[this.j] = t),
            this.S[(t + this.S[this.i]) & 255]
          );
        }
        function hr() {
          return new or();
        }
        var ur,
          fr = "undefined" != typeof navigator;
        fr && "Microsoft Internet Explorer" == navigator.appName
          ? ((e.prototype.am = o), (ur = 30))
          : fr && "Netscape" != navigator.appName
          ? ((e.prototype.am = i), (ur = 26))
          : ((e.prototype.am = s), (ur = 28)),
          (e.prototype.DB = ur),
          (e.prototype.DM = (1 << ur) - 1),
          (e.prototype.DV = 1 << ur);
        (e.prototype.FV = Math.pow(2, 52)),
          (e.prototype.F1 = 52 - ur),
          (e.prototype.F2 = 2 * ur - 52);
        var cr,
          lr,
          pr = "0123456789abcdefghijklmnopqrstuvwxyz",
          yr = new Array();
        for (cr = "0".charCodeAt(0), lr = 0; lr <= 9; ++lr) yr[cr++] = lr;
        for (cr = "a".charCodeAt(0), lr = 10; lr < 36; ++lr) yr[cr++] = lr;
        for (cr = "A".charCodeAt(0), lr = 10; lr < 36; ++lr) yr[cr++] = lr;
        (E.prototype.convert = D),
          (E.prototype.revert = I),
          (E.prototype.reduce = O),
          (E.prototype.mulTo = C),
          (E.prototype.sqrTo = q),
          (V.prototype.convert = N),
          (V.prototype.revert = M),
          (V.prototype.reduce = R),
          (V.prototype.mulTo = U),
          (V.prototype.sqrTo = H),
          (e.prototype.copyTo = u),
          (e.prototype.fromInt = f),
          (e.prototype.fromString = l),
          (e.prototype.clamp = p),
          (e.prototype.dlShiftTo = b),
          (e.prototype.drShiftTo = T),
          (e.prototype.lShiftTo = w),
          (e.prototype.rShiftTo = x),
          (e.prototype.subTo = S),
          (e.prototype.multiplyTo = F),
          (e.prototype.squareTo = k),
          (e.prototype.divRemTo = A),
          (e.prototype.invDigit = P),
          (e.prototype.isEven = K),
          (e.prototype.exp = L),
          (e.prototype.toString = y),
          (e.prototype.negate = g),
          (e.prototype.abs = d),
          (e.prototype.compareTo = v),
          (e.prototype.bitLength = _),
          (e.prototype.mod = B),
          (e.prototype.modPowInt = z),
          (e.ZERO = c(0)),
          (e.ONE = c(1)),
          (Pt.prototype.convert = Vt),
          (Pt.prototype.revert = Vt),
          (Pt.prototype.mulTo = Nt),
          (Pt.prototype.sqrTo = Mt),
          (Kt.prototype.convert = Lt),
          (Kt.prototype.revert = zt),
          (Kt.prototype.reduce = jt),
          (Kt.prototype.mulTo = Zt),
          (Kt.prototype.sqrTo = Xt);
        var gr = [
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,
            73,
            79,
            83,
            89,
            97,
            101,
            103,
            107,
            109,
            113,
            127,
            131,
            137,
            139,
            149,
            151,
            157,
            163,
            167,
            173,
            179,
            181,
            191,
            193,
            197,
            199,
            211,
            223,
            227,
            229,
            233,
            239,
            241,
            251,
            257,
            263,
            269,
            271,
            277,
            281,
            283,
            293,
            307,
            311,
            313,
            317,
            331,
            337,
            347,
            349,
            353,
            359,
            367,
            373,
            379,
            383,
            389,
            397,
            401,
            409,
            419,
            421,
            431,
            433,
            439,
            443,
            449,
            457,
            461,
            463,
            467,
            479,
            487,
            491,
            499,
            503,
            509,
            521,
            523,
            541,
            547,
            557,
            563,
            569,
            571,
            577,
            587,
            593,
            599,
            601,
            607,
            613,
            617,
            619,
            631,
            641,
            643,
            647,
            653,
            659,
            661,
            673,
            677,
            683,
            691,
            701,
            709,
            719,
            727,
            733,
            739,
            743,
            751,
            757,
            761,
            769,
            773,
            787,
            797,
            809,
            811,
            821,
            823,
            827,
            829,
            839,
            853,
            857,
            859,
            863,
            877,
            881,
            883,
            887,
            907,
            911,
            919,
            929,
            937,
            941,
            947,
            953,
            967,
            971,
            977,
            983,
            991,
            997
          ],
          dr = (1 << 26) / gr[gr.length - 1];
        (e.prototype.chunkSize = J),
          (e.prototype.toRadix = W),
          (e.prototype.fromRadix = Q),
          (e.prototype.fromNumber = $),
          (e.prototype.bitwiseTo = it),
          (e.prototype.changeBit = Tt),
          (e.prototype.addTo = Ft),
          (e.prototype.dMultiply = Ct),
          (e.prototype.dAddOffset = qt),
          (e.prototype.multiplyLowerTo = Ht),
          (e.prototype.multiplyUpperTo = Ut),
          (e.prototype.modInt = Yt),
          (e.prototype.millerRabin = $t),
          (e.prototype.clone = j),
          (e.prototype.intValue = X),
          (e.prototype.byteValue = Z),
          (e.prototype.shortValue = G),
          (e.prototype.signum = Y),
          (e.prototype.toByteArray = tt),
          (e.prototype.equals = rt),
          (e.prototype.min = et),
          (e.prototype.max = nt),
          (e.prototype.and = st),
          (e.prototype.or = ht),
          (e.prototype.xor = ft),
          (e.prototype.andNot = lt),
          (e.prototype.not = pt),
          (e.prototype.shiftLeft = yt),
          (e.prototype.shiftRight = gt),
          (e.prototype.getLowestSetBit = vt),
          (e.prototype.bitCount = _t),
          (e.prototype.testBit = bt),
          (e.prototype.setBit = wt),
          (e.prototype.clearBit = xt),
          (e.prototype.flipBit = St),
          (e.prototype.add = kt),
          (e.prototype.subtract = At),
          (e.prototype.multiply = Bt),
          (e.prototype.divide = Dt),
          (e.prototype.remainder = It),
          (e.prototype.divideAndRemainder = Ot),
          (e.prototype.modPow = Gt),
          (e.prototype.modInverse = Wt),
          (e.prototype.pow = Rt),
          (e.prototype.gcd = Jt),
          (e.prototype.isProbablePrime = Qt),
          (e.prototype.square = Et),
          (e.prototype.Barrett = Kt);
        var vr, mr, _r;
        if (null == mr) {
          (mr = new Array()), (_r = 0);
          var br;
          if ("undefined" != typeof window && window.crypto)
            if (window.crypto.getRandomValues) {
              var Tr = new Uint8Array(32);
              for (window.crypto.getRandomValues(Tr), br = 0; br < 32; ++br)
                mr[_r++] = Tr[br];
            } else if (
              "Netscape" == navigator.appName &&
              navigator.appVersion < "5"
            ) {
              var wr = window.crypto.random(32);
              for (br = 0; br < wr.length; ++br)
                mr[_r++] = 255 & wr.charCodeAt(br);
            }
          for (; _r < xr; )
            (br = Math.floor(65536 * Math.random())),
              (mr[_r++] = br >>> 8),
              (mr[_r++] = 255 & br);
          (_r = 0), rr();
        }
        (ir.prototype.nextBytes = nr),
          (or.prototype.init = sr),
          (or.prototype.next = ar);
        var xr = 256;
        r = t.exports = { default: e, BigInteger: e, SecureRandom: ir };
      }.call(this));
    },
    function(t, r, e) {
      "use strict";
      function n(t, r) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          n = new b();
        (t = T.hexToArray(t)), r.length > 128 && (r = r.substr(r.length - 128));
        var i = r.substr(0, 64),
          o = r.substr(64);
        r = n.createPoint(i, o);
        var s = n.initEncipher(r);
        n.encryptBlock(t);
        var a = T.arrayToHex(t),
          h = new Array(32);
        return (
          n.doFinal(h), (h = T.arrayToHex(h)), e === k ? s + a + h : s + h + a
        );
      }
      function i(t, r) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          n = new b();
        r = new g(r, 16);
        var i = t.substr(0, 64),
          o = t.substr(0 + i.length, 64),
          s = i.length + o.length,
          a = t.substr(s, 64),
          h = t.substr(s + 64);
        e === k &&
          ((a = t.substr(t.length - 64)), (h = t.substr(s, t.length - s - 64)));
        var u = T.hexToArray(h),
          f = n.createPoint(i, o);
        n.initDecipher(r, f), n.decryptBlock(u);
        var c = new Array(32);
        if ((n.doFinal(c), T.arrayToHex(c) === a)) return T.arrayToUtf8(u);
        return "";
      }
      function o(t, r) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = e.pointPool,
          i = e.der,
          o = e.hash,
          s = e.publicKey,
          f =
            "string" == typeof t
              ? T.parseUtf8StringToHex(t)
              : T.parseArrayBufferToHex(t);
        o && ((s = s || h(r)), (f = a(f, s)));
        var c = new g(r, 16),
          l = new g(f, 16),
          p = null,
          y = null,
          d = null;
        do {
          do {
            var m = void 0;
            (m = n && n.length ? n.pop() : u()),
              (p = m.k),
              (y = l.add(m.x1).mod(F));
          } while (y.equals(g.ZERO) || y.add(p).equals(F));
          d = c
            .add(g.ONE)
            .modInverse(F)
            .multiply(p.subtract(y.multiply(c)))
            .mod(F);
        } while (d.equals(g.ZERO));
        return i
          ? v(y, d)
          : T.leftPad(y.toString(16), 64) + T.leftPad(d.toString(16), 64);
      }
      function s(t, r, e) {
        var n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = n.der,
          o = n.hash,
          s =
            "string" == typeof t
              ? T.parseUtf8StringToHex(t)
              : T.parseArrayBufferToHex(t);
        o && (s = a(s, e));
        var h = void 0,
          u = void 0;
        if (i) {
          var f = m(r);
          (h = f.r), (u = f.s);
        } else
          (h = new g(r.substring(0, 64), 16)), (u = new g(r.substring(64), 16));
        var c = S.decodePointHex(e),
          l = new g(s, 16),
          p = h.add(u).mod(F);
        if (p.equals(g.ZERO)) return !1;
        var y = x.multiply(u).add(c.multiply(p)),
          d = l.add(y.getX().toBigInteger()).mod(F);
        return h.equals(d);
      }
      function a(t, r) {
        var e = new _(),
          n = new _().getZ(x, r.substr(2, 128)),
          i = T.hexToArray(T.arrayToHex(n).toString()),
          o = t,
          s = T.hexToArray(o),
          a = new Array(e.getDigestSize());
        return (
          e.blockUpdate(i, 0, i.length),
          e.blockUpdate(s, 0, s.length),
          e.doFinal(a, 0),
          T.arrayToHex(a).toString()
        );
      }
      function h(t) {
        var r = x.multiply(new g(t, 16));
        return (
          "04" +
          T.leftPad(
            r
              .getX()
              .toBigInteger()
              .toString(16),
            64
          ) +
          T.leftPad(
            r
              .getY()
              .toBigInteger()
              .toString(16),
            64
          )
        );
      }
      function u() {
        var t = T.generateKeyPairHex(),
          r = S.decodePointHex(t.publicKey);
        return (
          (t.k = new g(t.privateKey, 16)), (t.x1 = r.getX().toBigInteger()), t
        );
      }
      function f(t) {
        var r = new _(),
          e = new Array(r.getDigestSize());
        return r.blockUpdate(t, 0, t.length), r.doFinal(e, 0), e;
      }
      function c(t, r) {
        for (
          var e = new _(),
            n = r.length,
            i = new Array(64),
            o = new Array(64),
            s = 0;
          s < 64;
          s++
        )
          (i[s] = 54), (o[s] = 92);
        var a = r.slice();
        n > 64 && (a = digest(a));
        for (var h = 0; h < n; h++) (i[h] ^= a[h]), (o[h] ^= a[h]);
        var u = new Array(e.getDigestSize());
        e.blockUpdate(i, 0, i.length),
          e.blockUpdate(t, 0, t.length),
          e.doFinal(u, 0);
        var f = new _(),
          c = new Array(f.getDigestSize());
        return (
          f.blockUpdate(o, 0, o.length),
          f.blockUpdate(u, 0, u.length),
          f.doFinal(c, 0),
          c
        );
      }
      function l(t, r, e, n) {
        var i = void 0;
        return (
          (i = 128 === r.length ? "04" + r : r),
          o(t, e, { hash: !0, der: n, pubKey: i })
        );
      }
      function p(t, r, e, n) {
        var i = !1,
          o = void 0;
        o = 128 === e.length ? "04" + e : e;
        try {
          i = s(t, r, o, { hash: !0, der: n, pubKey: o });
        } catch (t) {
          throw Error("doSm2SignVerify error,errorInfo:" + t.message);
        }
        return i;
      }
      var y = e(1),
        g = y.BigInteger,
        d = e(7),
        v = d.encodeDer,
        m = d.decodeDer,
        _ = e(3),
        b = e(8),
        T = e(0),
        w = T.generateEcparam(),
        x = w.G,
        S = w.curve,
        F = w.n,
        k = 0;
      t.exports = {
        generateKeyPairHex: T.generateKeyPairHex,
        doEncrypt: n,
        doDecrypt: i,
        doSm2SignGen: l,
        doSm2SignVerify: p,
        getPoint: u,
        sm3_hash: f,
        sm3_hmac: c
      };
    },
    function(t, r, e) {
      "use strict";
      function n(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      var i = (function() {
          function t(t, r) {
            for (var e = 0; e < r.length; e++) {
              var n = r[e];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function(r, e, n) {
            return e && t(r.prototype, e), n && t(r, n), r;
          };
        })(),
        o = e(1),
        s = o.BigInteger,
        a = e(0),
        h = function(t, r, e, n, i) {
          for (var o = 0; o < i; o++) e[n + o] = t[r + o];
        },
        u = {
          minValue: -2147483648,
          maxValue: 2147483647,
          parse: function(t) {
            if (t < this.minValue) {
              for (
                var r = Number(-t),
                  e = r.toString(2),
                  n = e.substr(e.length - 31, 31),
                  i = "",
                  o = 0;
                o < n.length;
                o++
              ) {
                i += "0" === n.substr(o, 1) ? "1" : "0";
              }
              return parseInt(i, 2) + 1;
            }
            if (t > this.maxValue) {
              for (
                var s = Number(t),
                  a = s.toString(2),
                  h = a.substr(a.length - 31, 31),
                  u = "",
                  f = 0;
                f < h.length;
                f++
              ) {
                u += "0" === h.substr(f, 1) ? "1" : "0";
              }
              return -(parseInt(u, 2) + 1);
            }
            return t;
          },
          parseByte: function(t) {
            if (t < 0) {
              for (
                var r = Number(-t),
                  e = r.toString(2),
                  n = e.substr(e.length - 8, 8),
                  i = "",
                  o = 0;
                o < n.length;
                o++
              ) {
                i += "0" === n.substr(o, 1) ? "1" : "0";
              }
              return (parseInt(i, 2) + 1) & 255;
            }
            if (t > 255) {
              var s = Number(t),
                a = s.toString(2);
              return parseInt(a.substr(a.length - 8, 8), 2);
            }
            return t;
          }
        },
        f = (function() {
          function t() {
            n(this, t),
              (this.xBuf = []),
              (this.xBufOff = 0),
              (this.byteCount = 0),
              (this.DIGEST_LENGTH = 32),
              (this.v0 = [
                1937774191,
                1226093241,
                388252375,
                3666478592,
                2842636476,
                372324522,
                3817729613,
                2969243214
              ]),
              (this.v0 = [
                1937774191,
                1226093241,
                388252375,
                -628488704,
                -1452330820,
                372324522,
                -477237683,
                -1325724082
              ]),
              (this.v = new Array(8)),
              (this.v_ = new Array(8)),
              (this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              (this.X = new Array(68)),
              (this.xOff = 0),
              (this.T_00_15 = 2043430169),
              (this.T_16_63 = 2055708042),
              arguments.length > 0
                ? this.initDigest(arguments.length <= 0 ? void 0 : arguments[0])
                : this.init();
          }
          return (
            i(t, [
              {
                key: "init",
                value: function() {
                  (this.xBuf = new Array(4)), this.reset();
                }
              },
              {
                key: "initDigest",
                value: function(t) {
                  (this.xBuf = [].concat(t.xBuf)),
                    (this.xBufOff = t.xBufOff),
                    (this.byteCount = t.byteCount),
                    h(t.X, 0, this.X, 0, t.X.length),
                    (this.xOff = t.xOff),
                    h(t.v, 0, this.v, 0, t.v.length);
                }
              },
              {
                key: "getDigestSize",
                value: function() {
                  return this.DIGEST_LENGTH;
                }
              },
              {
                key: "reset",
                value: function() {
                  (this.byteCount = 0), (this.xBufOff = 0);
                  for (
                    var t = Object.keys(this.xBuf), r = 0, e = t.length;
                    r < e;
                    r++
                  )
                    this.xBuf[t[r]] = null;
                  h(this.v0, 0, this.v, 0, this.v0.length),
                    (this.xOff = 0),
                    h(this.X0, 0, this.X, 0, this.X0.length);
                }
              },
              {
                key: "processBlock",
                value: function() {
                  var t = void 0,
                    r = this.X,
                    e = new Array(64);
                  for (t = 16; t < 68; t++)
                    r[t] =
                      this.p1(
                        r[t - 16] ^ r[t - 9] ^ this.rotate(r[t - 3], 15)
                      ) ^
                      this.rotate(r[t - 13], 7) ^
                      r[t - 6];
                  for (t = 0; t < 64; t++) e[t] = r[t] ^ r[t + 4];
                  var n = this.v,
                    i = this.v_;
                  h(n, 0, i, 0, this.v0.length);
                  var o = void 0,
                    s = void 0,
                    a = void 0,
                    f = void 0,
                    c = void 0;
                  for (t = 0; t < 16; t++)
                    (c = this.rotate(i[0], 12)),
                      (o = u.parse(
                        u.parse(c + i[4]) + this.rotate(this.T_00_15, t)
                      )),
                      (o = this.rotate(o, 7)),
                      (s = o ^ c),
                      (a =
                        u.parse(
                          u.parse(this.ff_00_15(i[0], i[1], i[2]) + i[3]) + s
                        ) + e[t]),
                      (f =
                        u.parse(
                          u.parse(this.gg_00_15(i[4], i[5], i[6]) + i[7]) + o
                        ) + r[t]),
                      (i[3] = i[2]),
                      (i[2] = this.rotate(i[1], 9)),
                      (i[1] = i[0]),
                      (i[0] = a),
                      (i[7] = i[6]),
                      (i[6] = this.rotate(i[5], 19)),
                      (i[5] = i[4]),
                      (i[4] = this.p0(f));
                  for (t = 16; t < 64; t++)
                    (c = this.rotate(i[0], 12)),
                      (o = u.parse(
                        u.parse(c + i[4]) + this.rotate(this.T_16_63, t)
                      )),
                      (o = this.rotate(o, 7)),
                      (s = o ^ c),
                      (a =
                        u.parse(
                          u.parse(this.ff_16_63(i[0], i[1], i[2]) + i[3]) + s
                        ) + e[t]),
                      (f =
                        u.parse(
                          u.parse(this.gg_16_63(i[4], i[5], i[6]) + i[7]) + o
                        ) + r[t]),
                      (i[3] = i[2]),
                      (i[2] = this.rotate(i[1], 9)),
                      (i[1] = i[0]),
                      (i[0] = a),
                      (i[7] = i[6]),
                      (i[6] = this.rotate(i[5], 19)),
                      (i[5] = i[4]),
                      (i[4] = this.p0(f));
                  for (t = 0; t < 8; t++) n[t] ^= u.parse(i[t]);
                  (this.xOff = 0), h(this.X0, 0, this.X, 0, this.X0.length);
                }
              },
              {
                key: "processWord",
                value: function(t, r) {
                  var e = t[r] << 24;
                  (e |= (255 & t[++r]) << 16),
                    (e |= (255 & t[++r]) << 8),
                    (e |= 255 & t[++r]),
                    (this.X[this.xOff] = e),
                    16 == ++this.xOff && this.processBlock();
                }
              },
              {
                key: "processLength",
                value: function(t) {
                  this.xOff > 14 && this.processBlock(),
                    (this.X[14] = this.urShiftLong(t, 32)),
                    (this.X[15] = 4294967295 & t);
                }
              },
              {
                key: "intToBigEndian",
                value: function(t, r, e) {
                  (r[e] = 255 & u.parseByte(this.urShift(t, 24))),
                    (r[++e] = 255 & u.parseByte(this.urShift(t, 16))),
                    (r[++e] = 255 & u.parseByte(this.urShift(t, 8))),
                    (r[++e] = 255 & u.parseByte(t));
                }
              },
              {
                key: "doFinal",
                value: function(t, r) {
                  this.finish();
                  for (var e = 0; e < 8; e++)
                    this.intToBigEndian(this.v[e], t, r + 4 * e);
                  return this.reset(), this.DIGEST_LENGTH;
                }
              },
              {
                key: "update",
                value: function(t) {
                  (this.xBuf[this.xBufOff++] = t),
                    this.xBufOff === this.xBuf.length &&
                      (this.processWord(this.xBuf, 0), (this.xBufOff = 0)),
                    this.byteCount++;
                }
              },
              {
                key: "blockUpdate",
                value: function(t, r, e) {
                  for (; 0 !== this.xBufOff && e > 0; )
                    this.update(t[r]), r++, e--;
                  for (; e > this.xBuf.length; )
                    this.processWord(t, r),
                      (r += this.xBuf.length),
                      (e -= this.xBuf.length),
                      (this.byteCount += this.xBuf.length);
                  for (; e > 0; ) this.update(t[r]), r++, e--;
                }
              },
              {
                key: "finish",
                value: function() {
                  var t = this.byteCount << 3;
                  for (this.update(128); 0 !== this.xBufOff; ) this.update(0);
                  this.processLength(t), this.processBlock();
                }
              },
              {
                key: "rotate",
                value: function(t, r) {
                  return (t << r) | this.urShift(t, 32 - r);
                }
              },
              {
                key: "p0",
                value: function(t) {
                  return t ^ this.rotate(t, 9) ^ this.rotate(t, 17);
                }
              },
              {
                key: "p1",
                value: function(t) {
                  return t ^ this.rotate(t, 15) ^ this.rotate(t, 23);
                }
              },
              {
                key: "ff_00_15",
                value: function(t, r, e) {
                  return t ^ r ^ e;
                }
              },
              {
                key: "ff_16_63",
                value: function(t, r, e) {
                  return (t & r) | (t & e) | (r & e);
                }
              },
              {
                key: "gg_00_15",
                value: function(t, r, e) {
                  return t ^ r ^ e;
                }
              },
              {
                key: "gg_16_63",
                value: function(t, r, e) {
                  return (t & r) | (~t & e);
                }
              },
              {
                key: "urShift",
                value: function(t, r) {
                  return (
                    (t > u.maxValue || t < u.minValue) && (t = u.parse(t)),
                    t >>> r
                  );
                }
              },
              {
                key: "urShiftLong",
                value: function(t, r) {
                  var e = void 0,
                    n = new s();
                  if ((n.fromInt(t), n.signum() >= 0))
                    e = n.shiftRight(r).intValue();
                  else {
                    var i = new s();
                    i.fromInt(2);
                    var o = ~r,
                      a = "";
                    if (o < 0) {
                      for (var h = 64 + o, u = 0; u < h; u++) a += "0";
                      var f = new s();
                      f.fromInt(t >> r);
                      var c = new s("10" + a, 2);
                      a = c.toRadix(10);
                      e = c.add(f).toRadix(10);
                    } else (a = i.shiftLeft(~r).intValue()), (e = (t >> r) + a);
                  }
                  return e;
                }
              },
              {
                key: "getZ",
                value: function(t, r) {
                  var e = a.parseUtf8StringToHex("1234567812345678"),
                    n = 4 * e.length;
                  this.update((n >> 8) & 255), this.update(255 & n);
                  var i = a.hexToArray(e);
                  this.blockUpdate(i, 0, i.length);
                  var o = a.hexToArray(t.curve.a.toBigInteger().toRadix(16)),
                    s = a.hexToArray(t.curve.b.toBigInteger().toRadix(16)),
                    h = a.hexToArray(
                      t
                        .getX()
                        .toBigInteger()
                        .toRadix(16)
                    ),
                    u = a.hexToArray(
                      t
                        .getY()
                        .toBigInteger()
                        .toRadix(16)
                    ),
                    f = a.hexToArray(r.substr(0, 64)),
                    c = a.hexToArray(r.substr(64, 64));
                  this.blockUpdate(o, 0, o.length),
                    this.blockUpdate(s, 0, s.length),
                    this.blockUpdate(h, 0, h.length),
                    this.blockUpdate(u, 0, u.length),
                    this.blockUpdate(f, 0, f.length),
                    this.blockUpdate(c, 0, c.length);
                  var l = new Array(this.getDigestSize());
                  return this.doFinal(l, 0), l;
                }
              }
            ]),
            t
          );
        })();
      t.exports = f;
    },
    function(t, r, e) {
      "use strict";
      var n = e(0),
        i = e(6),
        o = e(2),
        s = e(9),
        a = e(10),
        h = {};
      !(function(t) {
        function r(t) {
          var r = n.generateRandomHex(t);
          return n.hexToArray(r);
        }
        function e(t, r) {
          return o.sm3_hash(t).slice(0, r);
        }
        function h(t, r, e) {
          var n = o.sm3_hash(t);
          return (n = n.slice(0, r)), JSON.stringify(n) !== JSON.stringify(e);
        }
        function u(t, r) {
          var e = [0, 0, 0, 0, 0, 0, 0, 0];
          e = n.addDataPadding(e, n.PAD_PKCS5);
          var o = t.slice(16, t.length),
            s = i.sm4_cbc_mac(e, t, o);
          return s.slice(s.length - r, s.length);
        }
        function f(t, o, s) {
          var a = [
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10
          ];
          (a = a.concat(o)), (a = e(a, 32));
          var h = r(16),
            u = n.addSaltData(s, h),
            f = h;
          f = f.concat(u);
          var c = a.slice(16, a.length),
            l = h;
          u = n.addDataPadding(u, n.PAD_PKCS5);
          var p = i.sm4_cbc_enc(u, a, c);
          return (l = l.concat(p)), { workKey: f, keyCipher: l };
        }
        function c(t, r, o, a) {
          var f = s.base64_decode_hex(o, a);
          f = n.hexToArray(f);
          var c = 0,
            l = f.slice(c, g + c);
          if (h(r, g, l))
            throw Error("_workKey_decrypt check pbe not match error.");
          c += g;
          var p = f.slice(c, c + g);
          (c += g), (f = f.slice(c, f.length));
          var y = [
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            10
          ];
          (y = y.concat(r)), (y = e(y, 32));
          var d = f.slice(0, 16);
          f = f.slice(16, f.length);
          var v = y.slice(16, y.length);
          (f = i.sm4_cbc_dec(f, y, v)), (f = n.delDataPadding(f, n.PAD_PKCS5));
          var m = n.addSaltData(f, d);
          if (((y = u(m, g)), JSON.stringify(y) === JSON.stringify(p)))
            return { workKey: m, key_checkValue: p };
          throw Error(
            "_workKey_decrypt check workKey check Value not match error."
          );
        }
        function l(t, e) {
          var n = a.Short2Char(y);
          n = n.concat(e);
          var i = r(16);
          return (n = n.concat(i)), { saltData: i, msgHead: n };
        }
        function p(t, r, e) {
          var n = 2,
            i = e.slice(n, n + g);
          if (JSON.stringify(r) !== JSON.stringify(i))
            throw Error(
              "_check_cipher_msg_head check key mac not match error."
            );
          n += g;
          var o = e.slice(n, n + 16);
          return (n += 16), { saltData: o, cipher: e.slice(n, e.length) };
        }
        var y = 2,
          g = 8;
        (t.workKey_nego_cpa = function(t, i, h, c) {
          a.check_input_str("workKey_nego_cpa", "pbe", i, 4, 32),
            a.check_input_fixed_length_str(
              "workKey_nego_cpa",
              "publicKey",
              h,
              88
            );
          var l = n.parseUtf8StringToArray(i),
            p = s.base64_decode_hex(h, c),
            d = r(32),
            v = e(l, g),
            m = u(d, g),
            _ = a.Short2Char(y),
            b = v;
          (b = b.concat(m)), (_ = _.concat(m));
          var T = f(null, l, d);
          (b = b.concat(T.keyCipher)),
            (b = n.parseArrayBufferToHex(b)),
            (b = s.base64_encode_hex(b, c)),
            (d = n.parseArrayBufferToHex(T.workKey));
          var w = o.doEncrypt(d, p, 1);
          return (
            (w = n.hexToArray(w)),
            (_ = _.concat(w)),
            (_ = s.base64_encode_hex(_, c)),
            { keyCipher: b, keySM2Cipher: _ }
          );
        }),
          (t.workKey_nego_and_data_encrypt_cpa = function(t, h, c, l, p) {
            a.check_input_str(
              "workKey_nego_and_data_encrypt_cpa",
              "pbe",
              h,
              4,
              32
            ),
              a.check_input_fixed_length_str(
                "workKey_nego_and_data_encrypt_cpa",
                "publicKey",
                c,
                88
              ),
              a.check_input_min_length_array(
                "workKey_nego_and_data_encrypt_cpa",
                "plain",
                l,
                1
              );
            var d = n.parseUtf8StringToArray(h),
              v = s.base64_decode_hex(c, p),
              m = r(32),
              _ = e(d, g),
              b = u(m, g),
              T = a.Short2Char(y),
              w = _;
            (w = w.concat(b)), (T = T.concat(b));
            var x = f(null, d, m);
            (w = w.concat(x.keyCipher)),
              (w = n.parseArrayBufferToHex(w)),
              (w = s.base64_encode_hex(w, p));
            var S = n.parseArrayBufferToHex(x.workKey),
              F = o.doEncrypt(S, v, 1);
            F = n.hexToArray(F);
            var k = a.Short2Char(F.length);
            (T = T.concat(k)), (T = T.concat(F));
            var A = m.slice(16, m.length);
            return (
              (k = o.sm3_hmac(l, A)),
              (T = T.concat(k)),
              (k = a.IntToChar(l.length)),
              (k = k.concat(l)),
              (k = n.addDataPadding(k, n.PAD_PKCS5)),
              (k = i.sm4_ecb_enc(k, m)),
              (T = T.concat(k)),
              (T = s.base64_encode_hex(T, p)),
              { keyCipher: w, keySM2Cipher: T }
            );
          }),
          (t.data_encrypt_cpa = function(t, r, e, h, u) {
            a.check_input_str("data_encrypt_cpa", "pbe", r, 4, 32),
              a.check_input_fixed_length_str(
                "data_encrypt_cpa",
                "keyCipher",
                e,
                108
              ),
              a.check_input_min_length_array("data_encrypt_cpa", "plain", h, 1);
            var f = n.parseUtf8StringToArray(r),
              p = void 0;
            try {
              p = c(null, f, e, u);
            } catch (t) {
              throw Error(
                "data_encrypt_cpa call _workKey_decrypt error, errorInfo:" +
                  t.message
              );
            }
            var y = l(p.userId_checkValue, p.key_checkValue),
              g = n.addSaltData(p.workKey, y.saltData),
              d = g.slice(16, g.length);
            g = g.slice(0, 16);
            var v = o.sm3_hmac(h, d),
              m = a.IntToChar(h.length);
            (m = m.concat(h)), (m = n.addDataPadding(m, n.PAD_PKCS5));
            var _ = i.sm4_ecb_enc(m, g),
              b = y.msgHead;
            return (
              (b = b.concat(v)), (b = b.concat(_)), s.base64_encode_hex(b, u)
            );
          }),
          (t.data_decrypt_cpa = function(t, r, e, h, u) {
            a.check_input_str("data_decrypt_cpa", "pbe", r, 4, 32),
              a.check_input_fixed_length_str(
                "data_decrypt_cpa",
                "keyCipher",
                e,
                108
              ),
              a.check_input_base64_str("data_decrypt_cpa", "cipher", h);
            var f = n.parseUtf8StringToArray(r),
              l = void 0;
            try {
              l = c(null, f, e, u);
            } catch (t) {
              throw Error(
                "data_decrypt_cpa call _workKey_decrypt error, errorInfo:" +
                  t.message
              );
            }
            var y = s.base64_decode_hex(h, u);
            y = n.hexToArray(y);
            var g = void 0;
            try {
              g = p(l.userId_checkValue, l.key_checkValue, y);
            } catch (t) {
              throw Error(
                "data_decrypt_cpa call _check_cipher_msg_head error, errorInfo:" +
                  t.message
              );
            }
            var d = n.addSaltData(l.workKey, g.saltData),
              v = d.slice(16, d.length);
            d = d.slice(0, 16);
            var m = g.cipher.slice(0, 32);
            y = g.cipher.slice(32, g.cipher.length);
            var _ = i.sm4_ecb_dec(y, d);
            try {
              _ = n.delDataPadding(_, n.PAD_PKCS5);
            } catch (t) {
              throw Error(
                "data_decrypt_cpa call delDataPadding error, errorInfo:" +
                  t.message
              );
            }
            var b = a.Char2Int(_, 0);
            if (b + 4 !== _.length)
              throw Error(
                "data_decrypt_cpa decrypt out data length[" +
                  b +
                  "] != [" +
                  (_.length - 4) +
                  "] error."
              );
            _ = _.slice(4, _.length);
            var T = o.sm3_hmac(_, v);
            if (JSON.stringify(m) !== JSON.stringify(T))
              throw Error(
                "data_decrypt_cpa verify plain data mac not match error."
              );
            return _;
          }),
          (t.randData_gen_cpa = function(t) {
            if (t <= 0 || t > 32)
              throw Error(
                "randData_gen_cpa input parameter length[" +
                  t +
                  "] not at range[1-32] error."
              );
            return r(t);
          }),
          (t.base64_encode = function(t, r) {
            return (
              a.check_input_parameter_MINLEN("base64_encode", "inArray", t, 0),
              s.base64_encode_hex(t, r)
            );
          }),
          (t.base64_decode = function(t, r) {
            return (
              a.check_input_base64_str("base64_decode", "inString", t),
              s.base64_decode_hex(t, r)
            );
          }),
          (t.sm3_digest = function(t, r) {
            a.check_input_min_length_array("sm3_digest", "inArray", t, 1);
            var e = o.sm3_hash(t);
            return s.base64_encode_hex(e, r);
          }),
          (t.sm3_digestHex = function(t) {
            a.check_input_min_length_array("sm3_digestHex", "inArray", t, 1);
            var r = o.sm3_hash(t);
            return n.arrayToHex(r);
          }),
          (t.hexToArray = function(t) {
            if (null == t)
              throw Error("hexToArray input parameter  hexStr is null error.");
            if (!n.isString(t))
              throw Error(
                "hexToArray input parameter hexStr not a String error."
              );
            if (t.length <= 0 || t.length % 2 != 0)
              throw Error(
                "hexToArray input hexStr length = " +
                  t.length +
                  " Not a multiple of two error!"
              );
            return n.hexToArray(t);
          }),
          (t.ArrayToHex = function(t) {
            if (null == t)
              throw Error("ArrayToHex input parameter  inArray is null error.");
            if (!n.isArray(t))
              throw Error(
                "ArrayToHex input parameter inArray not a Array error."
              );
            if (t.length <= 0)
              throw Error(
                "ArrayToHex input inArray length = " + t.length + " <= 0 error!"
              );
            return n.arrayToHex(t);
          }),
          (t.parseUtf8StringToArray = function(t) {
            if (null == t)
              throw Error(
                "parseUtf8StringToArray input parameter  inString is null error."
              );
            if (!n.isString(t))
              throw Error(
                "parseUtf8StringToArray input parameter inString not a String error."
              );
            if (t.length <= 0)
              throw Error(
                "parseUtf8StringToArray input inString length = " +
                  t.length +
                  " <= 0 error!"
              );
            return n.parseUtf8StringToArray(t);
          }),
          (t.arrayToUtf8 = function(t) {
            if (null == t)
              throw Error(
                "arrayToUtf8 input parameter  inArray is null error."
              );
            if (!n.isArray(t))
              throw Error(
                "arrayToUtf8 input parameter inArray not a Array error."
              );
            if (t.length <= 0)
              throw Error(
                "arrayToUtf8 input inArray length = " +
                  t.length +
                  " <= 0 error!"
              );
            return n.arrayToUtf8(t);
          });
      })(h),
        (t.exports = h);
    },
    function(t, r, e) {
      "use strict";
      function n(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      var i = (function() {
          function t(t, r) {
            for (var e = 0; e < r.length; e++) {
              var n = r[e];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function(r, e, n) {
            return e && t(r.prototype, e), n && t(r, n), r;
          };
        })(),
        o = e(1),
        s = o.BigInteger,
        a = new s("3"),
        h = (function() {
          function t(r, e) {
            n(this, t), (this.x = e), (this.q = r);
          }
          return (
            i(t, [
              {
                key: "equals",
                value: function(t) {
                  return (
                    t === this || (this.q.equals(t.q) && this.x.equals(t.x))
                  );
                }
              },
              {
                key: "toBigInteger",
                value: function() {
                  return this.x;
                }
              },
              {
                key: "negate",
                value: function() {
                  return new t(this.q, this.x.negate().mod(this.q));
                }
              },
              {
                key: "add",
                value: function(r) {
                  return new t(
                    this.q,
                    this.x.add(r.toBigInteger()).mod(this.q)
                  );
                }
              },
              {
                key: "subtract",
                value: function(r) {
                  return new t(
                    this.q,
                    this.x.subtract(r.toBigInteger()).mod(this.q)
                  );
                }
              },
              {
                key: "multiply",
                value: function(r) {
                  return new t(
                    this.q,
                    this.x.multiply(r.toBigInteger()).mod(this.q)
                  );
                }
              },
              {
                key: "divide",
                value: function(r) {
                  return new t(
                    this.q,
                    this.x
                      .multiply(r.toBigInteger().modInverse(this.q))
                      .mod(this.q)
                  );
                }
              },
              {
                key: "square",
                value: function() {
                  return new t(this.q, this.x.square().mod(this.q));
                }
              }
            ]),
            t
          );
        })(),
        u = (function() {
          function t(r, e, i, o) {
            n(this, t),
              (this.curve = r),
              (this.x = e),
              (this.y = i),
              (this.z = null == o ? s.ONE : o),
              (this.zinv = null);
          }
          return (
            i(t, [
              {
                key: "getX",
                value: function() {
                  return (
                    null === this.zinv &&
                      (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(
                      this.x
                        .toBigInteger()
                        .multiply(this.zinv)
                        .mod(this.curve.q)
                    )
                  );
                }
              },
              {
                key: "getY",
                value: function() {
                  return (
                    null === this.zinv &&
                      (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(
                      this.y
                        .toBigInteger()
                        .multiply(this.zinv)
                        .mod(this.curve.q)
                    )
                  );
                }
              },
              {
                key: "equals",
                value: function(t) {
                  return (
                    t === this ||
                    (this.isInfinity()
                      ? t.isInfinity()
                      : t.isInfinity()
                      ? this.isInfinity()
                      : !!t.y
                          .toBigInteger()
                          .multiply(this.z)
                          .subtract(this.y.toBigInteger().multiply(t.z))
                          .mod(this.curve.q)
                          .equals(s.ZERO) &&
                        t.x
                          .toBigInteger()
                          .multiply(this.z)
                          .subtract(this.x.toBigInteger().multiply(t.z))
                          .mod(this.curve.q)
                          .equals(s.ZERO))
                  );
                }
              },
              {
                key: "isInfinity",
                value: function() {
                  return (
                    (null === this.x && null === this.y) ||
                    (this.z.equals(s.ZERO) &&
                      !this.y.toBigInteger().equals(s.ZERO))
                  );
                }
              },
              {
                key: "negate",
                value: function() {
                  return new t(this.curve, this.x, this.y.negate(), this.z);
                }
              },
              {
                key: "add",
                value: function(r) {
                  if (this.isInfinity()) return r;
                  if (r.isInfinity()) return this;
                  var e = this.x.toBigInteger(),
                    n = this.y.toBigInteger(),
                    i = this.z,
                    o = r.x.toBigInteger(),
                    a = r.y.toBigInteger(),
                    h = r.z,
                    u = this.curve.q,
                    f = e.multiply(h).mod(u),
                    c = o.multiply(i).mod(u),
                    l = f.subtract(c),
                    p = n.multiply(h).mod(u),
                    y = a.multiply(i).mod(u),
                    g = p.subtract(y);
                  if (s.ZERO.equals(l))
                    return s.ZERO.equals(g)
                      ? this.twice()
                      : this.curve.infinity;
                  var d = f.add(c),
                    v = i.multiply(h).mod(u),
                    m = l.square().mod(u),
                    _ = l.multiply(m).mod(u),
                    b = v
                      .multiply(g.square())
                      .subtract(d.multiply(m))
                      .mod(u),
                    T = l.multiply(b).mod(u),
                    w = g
                      .multiply(m.multiply(f).subtract(b))
                      .subtract(p.multiply(_))
                      .mod(u),
                    x = _.multiply(v).mod(u);
                  return new t(
                    this.curve,
                    this.curve.fromBigInteger(T),
                    this.curve.fromBigInteger(w),
                    x
                  );
                }
              },
              {
                key: "twice",
                value: function() {
                  if (this.isInfinity()) return this;
                  if (!this.y.toBigInteger().signum())
                    return this.curve.infinity;
                  var r = this.x.toBigInteger(),
                    e = this.y.toBigInteger(),
                    n = this.z,
                    i = this.curve.q,
                    o = this.curve.a.toBigInteger(),
                    s = r
                      .square()
                      .multiply(a)
                      .add(o.multiply(n.square()))
                      .mod(i),
                    h = e
                      .shiftLeft(1)
                      .multiply(n)
                      .mod(i),
                    u = e.square().mod(i),
                    f = u
                      .multiply(r)
                      .multiply(n)
                      .mod(i),
                    c = h.square().mod(i),
                    l = s
                      .square()
                      .subtract(f.shiftLeft(3))
                      .mod(i),
                    p = h.multiply(l).mod(i),
                    y = s
                      .multiply(f.shiftLeft(2).subtract(l))
                      .subtract(c.shiftLeft(1).multiply(u))
                      .mod(i),
                    g = h.multiply(c).mod(i);
                  return new t(
                    this.curve,
                    this.curve.fromBigInteger(p),
                    this.curve.fromBigInteger(y),
                    g
                  );
                }
              },
              {
                key: "multiply",
                value: function(t) {
                  if (this.isInfinity()) return this;
                  if (!t.signum()) return this.curve.infinity;
                  for (
                    var r = t.multiply(a),
                      e = this.negate(),
                      n = this,
                      i = r.bitLength() - 2;
                    i > 0;
                    i--
                  ) {
                    n = n.twice();
                    var o = r.testBit(i);
                    o !== t.testBit(i) && (n = n.add(o ? this : e));
                  }
                  return n;
                }
              }
            ]),
            t
          );
        })(),
        f = (function() {
          function t(r, e, i) {
            n(this, t),
              (this.q = r),
              (this.a = this.fromBigInteger(e)),
              (this.b = this.fromBigInteger(i)),
              (this.infinity = new u(this, null, null));
          }
          return (
            i(t, [
              {
                key: "equals",
                value: function(t) {
                  return (
                    t === this ||
                    (this.q.equals(t.q) &&
                      this.a.equals(t.a) &&
                      this.b.equals(t.b))
                  );
                }
              },
              {
                key: "fromBigInteger",
                value: function(t) {
                  return new h(this.q, t);
                }
              },
              {
                key: "decodePointHex",
                value: function(t) {
                  switch (parseInt(t.substr(0, 2), 16)) {
                    case 0:
                      return this.infinity;
                    case 2:
                    case 3:
                      return null;
                    case 4:
                    case 6:
                    case 7:
                      var r = (t.length - 2) >> 1,
                        e = t.substr(2, r),
                        n = t.substr(r + 2, r);
                      return new u(
                        this,
                        this.fromBigInteger(new s(e, 16)),
                        this.fromBigInteger(new s(n, 16))
                      );
                    default:
                      return null;
                  }
                }
              }
            ]),
            t
          );
        })();
      t.exports = { ECPointFp: u, ECCurveFp: f };
    },
    function(t, r, e) {
      "use strict";
      function n(t, r) {
        return (t << r) | (t >>> (32 - r));
      }
      function i(t) {
        return (
          ((255 & d[(t >>> 24) & 255]) << 24) |
          ((255 & d[(t >>> 16) & 255]) << 16) |
          ((255 & d[(t >>> 8) & 255]) << 8) |
          (255 & d[255 & t])
        );
      }
      function o(t) {
        return t ^ n(t, 2) ^ n(t, 10) ^ n(t, 18) ^ n(t, 24);
      }
      function s(t) {
        return t ^ n(t, 13) ^ n(t, 23);
      }
      function a(t, r, e) {
        for (
          var n = void 0, s = void 0, a = new Array(4), h = new Array(4), u = 0;
          u < 4;
          u++
        )
          (n = u << 2),
            (h[0] = 255 & t[0 + n]),
            (h[1] = 255 & t[1 + n]),
            (h[2] = 255 & t[2 + n]),
            (h[3] = 255 & t[3 + n]),
            (a[u] = (h[0] << 24) | (h[1] << 16) | (h[2] << 8) | h[3]);
        for (n = 0; n < 32; n += 4)
          (s = a[1] ^ a[2] ^ a[3] ^ e[n + 0]),
            (s = i(s)),
            (a[0] ^= o(s)),
            (s = a[2] ^ a[3] ^ a[0] ^ e[n + 1]),
            (s = i(s)),
            (a[1] ^= o(s)),
            (s = a[3] ^ a[0] ^ a[1] ^ e[n + 2]),
            (s = i(s)),
            (a[2] ^= o(s)),
            (s = a[0] ^ a[1] ^ a[2] ^ e[n + 3]),
            (s = i(s)),
            (a[3] ^= o(s));
        for (var f = 0; f < 16; f += 4)
          (n = 3 - (f >> 2)),
            (r[f] = (a[n] >>> 24) & 255),
            (r[f + 1] = (a[n] >>> 16) & 255),
            (r[f + 2] = (a[n] >>> 8) & 255),
            (r[f + 3] = 255 & a[n]);
      }
      function h(t, r, e) {
        for (
          var n = void 0, o = void 0, a = new Array(4), h = new Array(4), u = 0;
          u < 4;
          u++
        )
          (n = u << 2),
            (h[0] = 255 & t[0 + n]),
            (h[1] = 255 & t[1 + n]),
            (h[2] = 255 & t[2 + n]),
            (h[3] = 255 & t[3 + n]),
            (a[u] = (h[0] << 24) | (h[1] << 16) | (h[2] << 8) | h[3]);
        for (
          a[0] ^= 2746333894,
            a[1] ^= 1453994832,
            a[2] ^= 1736282519,
            a[3] ^= 2993693404,
            n = 0;
          n < 32;
          n += 4
        )
          (o = a[1] ^ a[2] ^ a[3] ^ v[n + 0]),
            (o = i(o)),
            (r[n + 0] = a[0] ^= s(o)),
            (o = a[2] ^ a[3] ^ a[0] ^ v[n + 1]),
            (o = i(o)),
            (r[n + 1] = a[1] ^= s(o)),
            (o = a[3] ^ a[0] ^ a[1] ^ v[n + 2]),
            (o = i(o)),
            (r[n + 2] = a[2] ^= s(o)),
            (o = a[0] ^ a[1] ^ a[2] ^ v[n + 3]),
            (o = i(o)),
            (r[n + 3] = a[3] ^= s(o));
        if (e === p)
          for (n = 0; n < 16; n++)
            (o = r[n]), (r[n] = r[31 - n]), (r[31 - n] = o);
      }
      function u(t, r, e) {
        var n = [],
          i = 0,
          o = new Array(y);
        h(r, o, e);
        for (var s = new Array(16), u = new Array(16), f = t.length; f >= g; ) {
          (s = t.slice(i, i + 16)), a(s, u, o);
          for (var c = 0; c < g; c++) n[i + c] = u[c];
          (f -= g), (i += g);
        }
        return n;
      }
      function f(t, r, e, n) {
        var i = [],
          o = 0,
          s = new Array(y);
        h(r, s, n);
        var u = new Array(16),
          f = new Array(16),
          c = t.length,
          d = e.slice(0, 16);
        if (n === p)
          for (; c >= g; ) {
            (u = t.slice(o, o + 16)),
              a(u, f, s),
              (f = l.strXorStr(f, d)),
              (d = u);
            for (var v = 0; v < g; v++) i[o + v] = f[v];
            (c -= g), (o += g);
          }
        else
          for (; c >= g; ) {
            (u = t.slice(o, o + 16)),
              (u = l.strXorStr(u, d)),
              a(u, f, s),
              (d = f);
            for (var m = 0; m < g; m++) i[o + m] = f[m];
            (c -= g), (o += g);
          }
        return i;
      }
      function c(t, r, e, n) {
        var i = 0,
          o = new Array(y);
        h(r, o, n);
        for (var s = new Array(16), u = e.slice(0, 16), f = t.length; f >= g; )
          (s = t.slice(i, i + 16)),
            (s = l.strXorStr(s, u)),
            a(s, u, o),
            (f -= g),
            (i += g);
        return u;
      }
      var l = e(0),
        p = 0,
        y = 32,
        g = 16,
        d = [
          214,
          144,
          233,
          254,
          204,
          225,
          61,
          183,
          22,
          182,
          20,
          194,
          40,
          251,
          44,
          5,
          43,
          103,
          154,
          118,
          42,
          190,
          4,
          195,
          170,
          68,
          19,
          38,
          73,
          134,
          6,
          153,
          156,
          66,
          80,
          244,
          145,
          239,
          152,
          122,
          51,
          84,
          11,
          67,
          237,
          207,
          172,
          98,
          228,
          179,
          28,
          169,
          201,
          8,
          232,
          149,
          128,
          223,
          148,
          250,
          117,
          143,
          63,
          166,
          71,
          7,
          167,
          252,
          243,
          115,
          23,
          186,
          131,
          89,
          60,
          25,
          230,
          133,
          79,
          168,
          104,
          107,
          129,
          178,
          113,
          100,
          218,
          139,
          248,
          235,
          15,
          75,
          112,
          86,
          157,
          53,
          30,
          36,
          14,
          94,
          99,
          88,
          209,
          162,
          37,
          34,
          124,
          59,
          1,
          33,
          120,
          135,
          212,
          0,
          70,
          87,
          159,
          211,
          39,
          82,
          76,
          54,
          2,
          231,
          160,
          196,
          200,
          158,
          234,
          191,
          138,
          210,
          64,
          199,
          56,
          181,
          163,
          247,
          242,
          206,
          249,
          97,
          21,
          161,
          224,
          174,
          93,
          164,
          155,
          52,
          26,
          85,
          173,
          147,
          50,
          48,
          245,
          140,
          177,
          227,
          29,
          246,
          226,
          46,
          130,
          102,
          202,
          96,
          192,
          41,
          35,
          171,
          13,
          83,
          78,
          111,
          213,
          219,
          55,
          69,
          222,
          253,
          142,
          47,
          3,
          255,
          106,
          114,
          109,
          108,
          91,
          81,
          141,
          27,
          175,
          146,
          187,
          221,
          188,
          127,
          17,
          217,
          92,
          65,
          31,
          16,
          90,
          216,
          10,
          193,
          49,
          136,
          165,
          205,
          123,
          189,
          45,
          116,
          208,
          18,
          184,
          229,
          180,
          176,
          137,
          105,
          151,
          74,
          12,
          150,
          119,
          126,
          101,
          185,
          241,
          9,
          197,
          110,
          198,
          132,
          24,
          240,
          125,
          236,
          58,
          220,
          77,
          32,
          121,
          238,
          95,
          62,
          215,
          203,
          57,
          72
        ],
        v = [
          462357,
          472066609,
          943670861,
          1415275113,
          1886879365,
          2358483617,
          2830087869,
          3301692121,
          3773296373,
          4228057617,
          404694573,
          876298825,
          1347903077,
          1819507329,
          2291111581,
          2762715833,
          3234320085,
          3705924337,
          4177462797,
          337322537,
          808926789,
          1280531041,
          1752135293,
          2223739545,
          2695343797,
          3166948049,
          3638552301,
          4110090761,
          269950501,
          741554753,
          1213159005,
          1684763257
        ];
      t.exports = {
        sm4_ecb_enc: function(t, r) {
          return u(t, r, 1);
        },
        sm4_ecb_dec: function(t, r) {
          return u(t, r, 0);
        },
        sm4_cbc_enc: function(t, r, e) {
          return f(t, r, e, 1);
        },
        sm4_cbc_dec: function(t, r, e) {
          return f(t, r, e, 0);
        },
        sm4_cbc_mac: function(t, r, e) {
          return c(t, r, e, 1);
        }
      };
    },
    function(t, r, e) {
      "use strict";
      function n(t, r) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !r || ("object" != typeof r && "function" != typeof r) ? t : r;
      }
      function i(t, r) {
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof r
          );
        (t.prototype = Object.create(r && r.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          r &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, r)
              : (t.__proto__ = r));
      }
      function o(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(t) {
        var r = t.toString(16);
        if ("-" !== r.substr(0, 1))
          r.length % 2 == 1
            ? (r = "0" + r)
            : r.match(/^[0-7]/) || (r = "00" + r);
        else {
          var e = r.substr(1),
            n = e.length;
          n % 2 == 1 ? (n += 1) : r.match(/^[0-7]/) || (n += 2);
          for (var i = "", o = 0; o < n; o++) i += "f";
          r = new d(i, 16)
            .xor(t)
            .add(d.ONE)
            .toString(16)
            .replace(/^-/, "");
        }
        return r;
      }
      function a(t, r) {
        if ("8" !== t.substring(r + 2, r + 3)) return 1;
        var e = parseInt(t.substring(r + 3, r + 4), 10);
        return 0 === e ? -1 : e > 0 && e < 10 ? e + 1 : -2;
      }
      function h(t, r) {
        var e = a(t, r);
        return e < 1 ? "" : t.substring(r + 2, r + 2 + 2 * e);
      }
      function u(t, r) {
        var e = h(t, r);
        if ("" === e) return -1;
        var n = void 0;
        return (
          (n =
            parseInt(e.substring(0, 1), 10) < 8
              ? new d(e, 16)
              : new d(e.substring(2), 16)),
          n.intValue()
        );
      }
      function f(t, r) {
        var e = a(t, r);
        return e < 0 ? e : r + 2 * (e + 1);
      }
      function c(t, r) {
        var e = f(t, r),
          n = u(t, r);
        return t.substring(e, e + 2 * n);
      }
      function l(t, r) {
        return f(t, r) + 2 * u(t, r);
      }
      function p(t, r) {
        var e = [],
          n = f(t, r);
        e.push(n);
        for (var i = u(t, r), o = n, s = 0; ; ) {
          var a = l(t, o);
          if (null == a || a - n >= 2 * i) break;
          if (s >= 200) break;
          e.push(a), (o = a), s++;
        }
        return e;
      }
      var y = (function() {
          function t(t, r) {
            for (var e = 0; e < r.length; e++) {
              var n = r[e];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function(r, e, n) {
            return e && t(r.prototype, e), n && t(r, n), r;
          };
        })(),
        g = e(1),
        d = g.BigInteger,
        v = (function() {
          function t() {
            o(this, t),
              (this.isModified = !0),
              (this.hTLV = null),
              (this.hT = "00"),
              (this.hL = "00"),
              (this.hV = "");
          }
          return (
            y(t, [
              {
                key: "getLengthHexFromValue",
                value: function() {
                  var t = this.hV.length >> 1,
                    r = t.toString(16);
                  return (
                    r.length % 2 == 1 && (r = "0" + r),
                    t < 128 ? r : (128 + (r.length >> 1)).toString(16) + r
                  );
                }
              },
              {
                key: "getEncodedHex",
                value: function() {
                  return (
                    (null == this.hTLV || this.isModified) &&
                      ((this.hV = this.getFreshValueHex()),
                      (this.hL = this.getLengthHexFromValue()),
                      (this.hTLV = this.hT + this.hL + this.hV),
                      (this.isModified = !1)),
                    this.hTLV
                  );
                }
              },
              {
                key: "getFreshValueHex",
                value: function() {
                  return "";
                }
              }
            ]),
            t
          );
        })(),
        m = (function(t) {
          function r(t) {
            o(this, r);
            var e = n(
              this,
              (r.__proto__ || Object.getPrototypeOf(r)).call(this)
            );
            return (
              (e.hT = "02"),
              t &&
                t.bigint &&
                ((e.hTLV = null), (e.isModified = !0), (e.hV = s(t.bigint))),
              e
            );
          }
          return (
            i(r, t),
            y(r, [
              {
                key: "getFreshValueHex",
                value: function() {
                  return this.hV;
                }
              }
            ]),
            r
          );
        })(v),
        _ = (function(t) {
          function r(t) {
            o(this, r);
            var e = n(
              this,
              (r.__proto__ || Object.getPrototypeOf(r)).call(this)
            );
            return (
              (e.hT = "30"),
              (e.asn1Array = []),
              t && t.array && (e.asn1Array = t.array),
              e
            );
          }
          return (
            i(r, t),
            y(r, [
              {
                key: "getFreshValueHex",
                value: function() {
                  for (var t = "", r = 0; r < this.asn1Array.length; r++) {
                    t += this.asn1Array[r].getEncodedHex();
                  }
                  return (this.hV = t), this.hV;
                }
              }
            ]),
            r
          );
        })(v);
      t.exports = {
        encodeDer: function(t, r) {
          var e = new m({ bigint: t }),
            n = new m({ bigint: r });
          return new _({ array: [e, n] }).getEncodedHex();
        },
        decodeDer: function(t) {
          var r = p(t, 0),
            e = r[0],
            n = r[1],
            i = c(t, e),
            o = c(t, n);
          return { r: new d(i, 16), s: new d(o, 16) };
        }
      };
    },
    function(t, r, e) {
      "use strict";
      function n(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      var i = (function() {
          function t(t, r) {
            for (var e = 0; e < r.length; e++) {
              var n = r[e];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function(r, e, n) {
            return e && t(r.prototype, e), n && t(r, n), r;
          };
        })(),
        o = e(1),
        s = o.BigInteger,
        a = e(3),
        h = e(0),
        u = (function() {
          function t() {
            n(this, t),
              (this.ct = 1),
              (this.p2 = null),
              (this.sm3keybase = null),
              (this.sm3c3 = null),
              (this.key = new Array(32)),
              (this.keyOff = 0);
          }
          return (
            i(t, [
              {
                key: "reset",
                value: function() {
                  (this.sm3keybase = new a()), (this.sm3c3 = new a());
                  var t = h.hexToArray(
                      this.p2
                        .getX()
                        .toBigInteger()
                        .toRadix(16)
                    ),
                    r = h.hexToArray(
                      this.p2
                        .getY()
                        .toBigInteger()
                        .toRadix(16)
                    );
                  this.sm3keybase.blockUpdate(t, 0, t.length),
                    this.sm3c3.blockUpdate(t, 0, t.length),
                    this.sm3keybase.blockUpdate(r, 0, r.length),
                    (this.ct = 1),
                    this.nextKey();
                }
              },
              {
                key: "nextKey",
                value: function() {
                  var t = new a(this.sm3keybase);
                  t.update((this.ct >> 24) & 255),
                    t.update((this.ct >> 16) & 255),
                    t.update((this.ct >> 8) & 255),
                    t.update(255 & this.ct),
                    t.doFinal(this.key, 0),
                    (this.keyOff = 0),
                    this.ct++;
                }
              },
              {
                key: "initEncipher",
                value: function(t) {
                  var r = h.generateKeyPairHex(),
                    e = new s(r.privateKey, 16),
                    n = r.publicKey;
                  return (
                    (this.p2 = t.multiply(e)),
                    this.reset(),
                    n.length > 128 && (n = n.substr(n.length - 128)),
                    n
                  );
                }
              },
              {
                key: "encryptBlock",
                value: function(t) {
                  this.sm3c3.blockUpdate(t, 0, t.length);
                  for (var r = 0; r < t.length; r++)
                    this.keyOff === this.key.length && this.nextKey(),
                      (t[r] ^= 255 & this.key[this.keyOff++]);
                }
              },
              {
                key: "initDecipher",
                value: function(t, r) {
                  (this.p2 = r.multiply(t)), this.reset();
                }
              },
              {
                key: "decryptBlock",
                value: function(t) {
                  for (var r = 0; r < t.length; r++)
                    this.keyOff === this.key.length && this.nextKey(),
                      (t[r] ^= 255 & this.key[this.keyOff++]);
                  this.sm3c3.blockUpdate(t, 0, t.length);
                }
              },
              {
                key: "doFinal",
                value: function(t) {
                  var r = h.hexToArray(
                    this.p2
                      .getY()
                      .toBigInteger()
                      .toRadix(16)
                  );
                  this.sm3c3.blockUpdate(r, 0, r.length),
                    this.sm3c3.doFinal(t, 0),
                    this.reset();
                }
              },
              {
                key: "createPoint",
                value: function(t, r) {
                  var e = "04" + t + r;
                  return h.getGlobalCurve().decodePointHex(e);
                }
              }
            ]),
            t
          );
        })();
      t.exports = u;
    },
    function(t, r, e) {
      "use strict";
      function n(t, r) {
        var e = r
            ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
            : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = void 0;
        if ("string" != typeof (n = Array.isArray(t) ? o.arrayToHex(t) : t))
          throw Error("参数必须为数组或hex字符串");
        var i = void 0,
          s = void 0,
          a = "";
        for (i = 0; i + 3 <= n.length; i += 3)
          (s = parseInt(n.substring(i, i + 3), 16)),
            (a += e.charAt(s >> 6) + e.charAt(63 & s));
        for (
          i + 1 == n.length
            ? ((s = parseInt(n.substring(i, i + 1), 16)),
              (a += e.charAt(s << 2)))
            : i + 2 == n.length &&
              ((s = parseInt(n.substring(i, i + 2), 16)),
              (a += e.charAt(s >> 2) + e.charAt((3 & s) << 4)));
          (3 & a.length) > 0;

        )
          a += "=";
        return a;
      }
      function i(t, r) {
        var e = r
            ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
            : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = "0123456789abcdefghijklmnopqrstuvwxyz",
          i = "",
          o = void 0,
          s = 0,
          a = void 0,
          h = void 0;
        for (o = 0; o < t.length && "=" != t.charAt(o); ++o)
          (h = e.indexOf(t.charAt(o))) < 0 ||
            (0 == s
              ? ((i += n.charAt(h >> 2)), (a = 3 & h), (s = 1))
              : 1 == s
              ? ((i += n.charAt((a << 2) | (h >> 4))), (a = 15 & h), (s = 2))
              : 2 == s
              ? ((i += n.charAt(a)),
                (i += n.charAt(h >> 2)),
                (a = 3 & h),
                (s = 3))
              : ((i += n.charAt((a << 2) | (h >> 4))),
                (i += n.charAt(15 & h)),
                (s = 0)));
        return 1 == s && (i += n.charAt(a << 2)), i;
      }
      /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
       */
      var o = e(0);
      t.exports = {
        base64_encode_hex: function(t, r) {
          return n(t, r);
        },
        base64_decode_hex: function(t, r) {
          return i(t, r);
        }
      };
    },
    function(t, r, e) {
      "use strict";
      function n(t, r, e, n) {
        if (null == e || "" == e)
          throw new Error(t + " input parameter " + r + " is null error.");
        if (e.length <= n)
          throw new Error(
            t +
              " input parameter " +
              r +
              ".length " +
              e.length +
              " <= [" +
              n +
              "] error."
          );
      }
      function i(t, r, e, n, i) {
        if (null == e || "" == e)
          throw new Error(t + " input parameter " + r + " is null error.");
        if (!x.isString(e))
          throw new Error(t + " input parameter " + r + " Not a string error.");
        if (e.length < n || e.length > i)
          throw new Error(
            t +
              " input parameter " +
              r +
              ".length " +
              e.length +
              " not in range[" +
              n +
              "-" +
              i +
              "] error."
          );
      }
      function o(t, r, e, n, i) {
        if (null == e || "" == e)
          throw new Error(t + "  input parameter " + r + " is null error.");
        if (!x.isArray(e))
          throw new Error(t + "  input parameter " + r + " Not a Array error.");
        if (e.length < n || e.length > i)
          throw new Error(
            t +
              "  input parameter " +
              r +
              ".length " +
              e.length +
              " not in range[" +
              n +
              "-" +
              i +
              "] error."
          );
      }
      function s(t, r, e, n) {
        if (null == e || "" == e)
          throw Error(t + " input parameter " + r + "is null error.");
        if (!x.isString(e))
          throw Error(t + " input parameter " + r + " Not a string error.");
        if (e.length != n)
          throw Error(
            t +
              " input parameter " +
              r +
              ".length " +
              e.length +
              " != [" +
              n +
              "] error."
          );
      }
      function a(t, r, e, n) {
        if (null == e || "" == e)
          throw Error(t + " input parameter " + r + "is null error.");
        if (!x.isArray(e))
          throw Error(t + " input parameter " + r + " Not a Array error.");
        if (e.length != n)
          throw Error(
            t +
              " input parameter " +
              r +
              ".length " +
              e.length +
              " != [" +
              n +
              "] error."
          );
      }
      function h(t, r, e, n) {
        if (null == e || "" == e)
          throw Error(t + " input parameter " + r + "is null error.");
        if (!x.isString(e))
          throw Error(t + " input parameter " + r + " Not a string error.");
        if (e.length < n)
          throw Error(
            t +
              " input parameter " +
              r +
              ".length " +
              e.length +
              " != [" +
              n +
              "] error."
          );
      }
      function u(t, r, e, n) {
        if (null == e || "" == e)
          throw Error(t + " input parameter " + r + "is null error.");
        if (!x.isArray(e))
          throw Error(t + " input parameter " + r + " Not a Array error.");
        if (e.length < n)
          throw Error(
            t +
              " input parameter " +
              r +
              ".length " +
              e.length +
              " != [" +
              n +
              "] error."
          );
      }
      function f(t, r, e) {
        if (null == e || "" == e)
          throw Error(t + " input parameter " + r + "is null error.");
        if (!x.isString(e))
          throw Error(t + " input parameter " + r + " Not a string error.");
        if (e.length <= 0 || 0 != (3 & e.length))
          throw Error(
            t +
              " input parameter " +
              r +
              ".length " +
              e.length +
              " Not a multiple of four error."
          );
      }
      function c(t) {
        var r = x.arrayToUtf8(t);
        return Number(r);
      }
      function l(t, r) {
        var e = 0;
        return (
          (e = (e | t[r + 0]) << 8),
          (e = (e | t[r + 1]) << 8),
          (e = (e | t[r + 2]) << 8),
          (e |= t[r + 3]),
          parseFloat(e)
        );
      }
      function p(t, r) {
        var e = 0;
        return (
          (e = (255 & t[0]) << 24),
          (e |= (255 & t[1]) << 16),
          (e |= (255 & t[2]) << 8),
          (e |= 255 & t[3])
        );
      }
      function y(t) {
        var r = new Array(4);
        return (
          (r[0] = (t >> 24) & 255),
          (r[1] = (t >> 16) & 255),
          (r[2] = (t >> 8) & 255),
          (r[3] = 255 & t),
          r
        );
      }
      function g(t, r) {
        var e = 0;
        return (e |= (255 & t[0]) << 8), (e |= 255 & t[1]);
      }
      function d(t) {
        var r = new Array(2);
        return (r[0] = (t >> 8) & 255), (r[1] = 255 & t), r;
      }
      function v(t, r) {
        return parseFloat(t) - parseFloat(r);
      }
      function m(t) {
        var r = void 0;
        try {
          r = S.sm3_hash(x.parseUtf8StringToArray(t));
        } catch (t) {
          throw Error("genClientID_mac call sm3_hash" + t.message);
        }
        return r.slice(0, 8);
      }
      function _(t, r, e, n) {
        var i = [];
        (i[0] = t), (i = i.concat(r)), (i = i.concat(e));
        var o = x.parseUtf8StringToArray(n);
        try {
          o = S.sm3_hash(o);
        } catch (t) {
          throw Error(
            "gen_keyValue call sm3_hash error, errorInfo: " + t.message
          );
        }
        return (i = i.concat(o)), x.parseArrayBufferToHex(i);
      }
      function b() {
        var t = new Date(),
          r = t.getFullYear(),
          e = t.getMonth() + 1,
          n = t.getDate();
        return (
          e >= 1 && e <= 9 && (e = "0" + e),
          n >= 0 && n <= 9 && (n = "0" + n),
          r + e + n
        );
      }
      function T() {
        return new Date().getTime();
      }
      function w(t, r) {
        var e = new Date().getTime(),
          n = 86400 * r;
        return (n += t), e <= n;
      }
      var x = e(0),
        S = e(2);
      t.exports = {
        check_input_parameter_MINLEN: function(t, r, e, i) {
          return n(t, r, e, i);
        },
        check_input_str: function(t, r, e, n, o) {
          i(t, r, e, n, o);
        },
        check_input_Array: function(t, r, e, n, i) {
          o(t, r, e, n, i);
        },
        check_input_fixed_length_str: function(t, r, e, n) {
          s(t, r, e, n);
        },
        check_input_fixed_length_array: function(t, r, e, n) {
          a(t, r, e, n);
        },
        check_input_min_length_str: function(t, r, e, n) {
          h(t, r, e, n);
        },
        check_input_min_length_array: function(t, r, e, n) {
          u(t, r, e, n);
        },
        check_input_base64_str: function(t, r, e) {
          f(t, r, e);
        },
        ArrayToNum: function(t) {
          return c(t);
        },
        ArrayToInt: function(t, r) {
          return l(t, r);
        },
        Short2Char: function(t) {
          return d(t);
        },
        Char2Short: function(t, r) {
          return g(t, r);
        },
        IntToChar: function(t) {
          return y(t);
        },
        Char2Int: function(t, r) {
          return p(t, r);
        },
        compareNum: function(t, r) {
          return v(t, r);
        },
        StringToArray: (function(t) {
          function r(r, e) {
            return t.apply(this, arguments);
          }
          return (
            (r.toString = function() {
              return t.toString();
            }),
            r
          );
        })(function(t, r) {
          return StringToArray(t, r);
        }),
        ArrayToString: (function(t) {
          function r(r) {
            return t.apply(this, arguments);
          }
          return (
            (r.toString = function() {
              return t.toString();
            }),
            r
          );
        })(function(t) {
          return ArrayToString(t);
        }),
        genClientID_mac: function(t) {
          return m(t);
        },
        gen_keyValue: function(t, r, e, n) {
          return _(t, r, e, n);
        },
        getNowFormatDate: function() {
          return b();
        },
        get_current_second: function() {
          return T();
        },
        check_for_key_expiration: function(t, r) {
          return w(t, r);
        }
      };
    }
  ]);
});
