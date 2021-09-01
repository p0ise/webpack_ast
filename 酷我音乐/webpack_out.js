!function (e) {
  var t = {},
      o = {
    31: 0
  },
      c = [];

  function d(n) {
    if (t[n]) return t[n].exports;
    var r = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, d), r.l = !0, r.exports;
  }

  d.e = function (e) {
    var n = [],
        r = o[e];
    if (0 !== r) if (r) n.push(r[2]);else {
      var t = new Promise(function (n, t) {
        r = o[e] = [n, t];
      });
      n.push(r[2] = t);
      var c,
          script = document.createElement("script");
      script.charset = "utf-8", script.timeout = 120, d.nc && script.setAttribute("nonce", d.nc), script.src = function (e) {
        return d.p + "" + ({
          0: "commons/5b7f9e1d",
          1: "vendors/f2d66b02",
          2: "vendors/0f68e262",
          5: "pages/album_detail/_index",
          6: "pages/callback",
          7: "pages/down/index",
          8: "pages/downtingshu/index",
          9: "pages/index",
          10: "pages/logout/index",
          11: "pages/musician/index",
          12: "pages/musician/page",
          13: "pages/mvplay/_index",
          14: "pages/mvs/index",
          15: "pages/play_detail/_index",
          16: "pages/playlist_detail/_index",
          17: "pages/playlists/index",
          18: "pages/rankList/index",
          19: "pages/search",
          20: "pages/search/album",
          21: "pages/search/list",
          22: "pages/search/mv",
          23: "pages/search/playlist",
          24: "pages/search/singers",
          25: "pages/singer_detail/_index",
          26: "pages/singer_detail/index/album",
          27: "pages/singer_detail/index/index",
          28: "pages/singer_detail/index/info",
          29: "pages/singer_detail/index/mv",
          30: "pages/singers/index"
        }[e] || e) + "." + {
          0: "d536e95",
          1: "0f4fa0b",
          2: "5b01abc",
          5: "c53c23e",
          6: "c6c6835",
          7: "ffdae64",
          8: "cedc462",
          9: "ab70afa",
          10: "e2220e2",
          11: "931220d",
          12: "fad1e94",
          13: "9bf3f8e",
          14: "d920d6a",
          15: "213c3d5",
          16: "cf19ebc",
          17: "30478e4",
          18: "7f48ab9",
          19: "cfd9038",
          20: "85c386a",
          21: "0bef0c1",
          22: "ed18fac",
          23: "da962f3",
          24: "537ff5d",
          25: "e297d8c",
          26: "ea1087e",
          27: "492aacd",
          28: "7b8bdff",
          29: "fbe5785",
          30: "ce749e7"
        }[e] + ".js";
      }(e);
      var l = new Error();

      c = function (n) {
        script.onerror = script.onload = null, clearTimeout(f);
        var r = o[e];

        if (0 !== r) {
          if (r) {
            var t = n && ("load" === n.type ? "missing" : n.type),
                c = n && n.target && n.target.src;
            l.message = "Loading chunk " + e + " failed.\n(" + t + ": " + c + ")", l.name = "ChunkLoadError", l.type = t, l.request = c, r[1](l);
          }

          o[e] = void 0;
        }
      };

      var f = setTimeout(function () {
        c({
          type: "timeout",
          target: script
        });
      }, 12e4);
      script.onerror = script.onload = c, document.head.appendChild(script);
    }
    return Promise.all(n);
  }, d.m = e, d.c = t, d.d = function (e, n, r) {
    d.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: r
    });
  }, d.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, d.t = function (e, n) {
    if (1 & n && (e = d(e)), 8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (d.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var t in e) d.d(r, t, function (n) {
      return e[n];
    }.bind(null, t));
    return r;
  }, d.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return d.d(n, "a", n), n;
  }, d.o = function (object, e) {
    return Object.prototype.hasOwnProperty.call(object, e);
  }, d.p = "https://h5static.kuwo.cn/www/kw-www/", d.oe = function (e) {
    throw console.error(e), e;
  };
}({});