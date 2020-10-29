! function(o) {
	var r = {};

	function n(t) {
		if (r[t]) return r[t].exports;
		var e = r[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return o[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
	}
	n.m = o, n.c = r, n.d = function(t, e, o) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: o
		})
	}, n.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var o = Object.create(null);
		if (n.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(o, r, function(t) {
				return e[t]
			}.bind(null, r));
		return o
	}, n.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "//static.biligame.net/common/js/", n(n.s = 0)
}([function(t, e, r) {
	"use strict";
	! function() {
		function u(t, e) {
			var o = document.createElement(t);
			for (var r in e) o.setAttribute(r, e[r]);
			for (var n = 2; n < arguments.length; n++) {
				var i, a = arguments[n];
				i = "string" == typeof a ? document.createTextNode(a) : a, o.appendChild(i)
			}
			return o
		}

		function t(t) {
			for (var e = {}, o = 0; o < t.length; o++) {
				var r = t[o];
				e[r[0]] = r
			}
			return e
		}
		r(1);
		var d = t(r(6)),
			b = t(r(7)),
			g = t(r(8)),
			m = t(r(9)),
			h = t(r(10)),
			R = t(r(11));

		function o(t) {
			this.elem = t
		}
		o.prototype.init = function() {
			var t = this.elem,
				e = "game.bilibili.com" == location.hostname,
				o = e ? function(t) {
					return "/" + t + "/"
				} : function(t) {
					return "//" + t + ".biligame.com"
				},
				r = location.pathname.split("/"),
				n = e ? r[1] : location.hostname.split(".")[0],
				i = "",
				a = "";
			if (!e || R[n]) {
				var c = function(t) {
						return t.map(function(t, e) {
							return t ? s[e] + t : ""
						}).filter(function(t) {
							return t
						})
					},
					s = ["著作权人：", "著作权登记号：", "文网游", "新广出审", "国新出审", "出版单位："];
				if (d[n]) {
					var l = c(d[n].slice(1));
					g[n] && l.splice(-1, 0, "ISBN " + g[n][1]), m[n] && l.push("运营单位：" + m[n][1]), i = l.join(" | "), b[n] && (a =
						c(b[n].slice(1)).join(" | "))
				}
			}
			var f = e ? "31011002002436" : "31011002002714",
				p = u("div", {
					class: "footer-box"
				}, u("div", {
					class: "footer-logo-list"
				}, u("div", {
					class: "footer-logo-other"
				}), u("a", {
					class: "footer-logo",
					href: "//www.bilibili.com"
				}), u("div", {
					class: "footer-culture-logo"
				}, u("a", {
					class: "c-logo-wrap",
					href: "http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/2041463803EF45AB94E86E58125CD2F4",
					target: "_blank"
				})), h[n] && !r[2] ? u("a", {
					class: "footer-nettag",
					href: "http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/gameNetTag/" + h[n][1],
					target: "_blank"
				}, u("img", {
					src: "//static.biligame.com/common/images/game-net-tag.png"
				})) : ""), u("div", {
					class: "footer-text"
				}, u("p", {}, u("a", {
					href: e ? "/" : "//www.biligame.com/"
				}, "游戏中心"), "　|　", u("a", {
					href: "https://account.bilibili.com/",
					target: "_blank"
				}, "账号安全"), "　|　", u("a", {
					href: "https://account.bilibili.com/resetpwd",
					target: "_blank"
				}, "找回密码"), "　|　", u("a", {
					href: o("jiazhang"),
					target: "_blank"
				}, "家长监护"), "　|　", u("a", {
					href: o("yhxy"),
					target: "_blank"
				}, "用户协议"), "　|　", u("a", {
					href: "https://www.bilibili.com/blackboard/privacy-pc.html",
					target: "_blank"
				}, "隐私政策")), u("p", {
					class: "p3",
					style: "text-align:center"
				}), u("p", {
					class: "p-18"
				}, "本网络游戏适合年满18岁（含）以上的玩家使用"), u("p", {}, "抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活"), u("p", {},
					(e ? "上海宽娱数码科技有限公司" : "芜湖享游网络技术有限公司") + " | COPYRIGHT © 2009-2020 BILIBILI ALL RIGHTS RESERVED."), u("p", {},
					e ? u("p", {}, "互联网ICP备案：", u("a", {
						class: "icp-link",
						href: "http://beian.miit.gov.cn",
						target: "_blank"
					}, "沪ICP备13002172号-3"), " 沪ICP证：沪B2-20100043 | 沪网文[2016]2296-134号") :
					"皖网文【2020】0715-038号 | 皖ICP备15002422号-2 | 皖ICP证：皖B2-20180007"), i ? u("p", {
					class: "p-18"
				}, i) : "", a ? u("p", {
					class: "p-18"
				}, a) : "", u("p", {}, u("a", {
					class: "record",
					href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=" + f,
					target: "_blank"
				}, u("img", {
					style: "vertical-align:top;width:20px;height:20px",
					src: "//static.biligame.net/common/images/record-logo.png"
				}), " 沪公网安备 " + f + " 号"), "　|　", "全国文化市场举报电话：12318")), u("div", {
					style: "clear:both"
				}));
			t.className += " footer-public", t.innerHTML = "", t.appendChild(p)
		}, document.querySelector(".-BiliFooter") || document.write('<div class="-BiliFooter"></div>'), setTimeout(
			function() {
				var t = document.querySelector(".footer-public");
				t && t.classList && Array.prototype.slice.call(t.classList).indexOf("-BiliFooter") < 0 && t.parentNode.removeChild(
					t);
				var e = document.querySelector(".-BiliFooter");
				e && (e.innerHTML = "", Array.prototype.slice.call(document.querySelectorAll(".-BiliFooter")).forEach(function(t) {
					new o(t).init()
				}))
			}, 10)
	}()
}, function(t, e, o) {
	var r = o(2);
	"string" == typeof r && (r = [
		[t.i, r, ""]
	]);
	var n = {
		sourceMap: !1,
		hmr: !0,
		transform: void 0,
		insertInto: void 0
	};
	o(4)(r, n);
	r.locals && (t.exports = r.locals)
}, function(t, e, o) {
	(t.exports = o(3)(!1)).push([t.i,
		'.footer-public .footer-box{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:120px;margin:0 auto;padding-top:25px;padding-bottom:25px;font:12px/20px "Microsoft Yahei",sans-serif;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:content-box;text-align:left}.footer-public .footer-box .footer-text a,.footer-public .footer-box .footer-text p,.footer-public .footer-box img{margin:0;padding:0;border:0}.footer-public .footer-box a{font:inherit;text-decoration:none;color:#0089bc;cursor:default}.footer-public .footer-box a.icp-link,.footer-public .footer-text .record,.footer-public .footer-text p{color:#7d7d7d}.footer-public .footer-box a[href]{cursor:pointer}.footer-public .footer-box .footer-text a:hover{color:#0091c1}.footer-public .footer-logo-list{margin-top:20px;width:465px}.footer-public .footer-logo-other{float:left}.footer-public .footer-logo{float:left;border-right:1px solid #0089bc;width:196px;height:50px;background:url(//static.biligame.net/common/images/bilibili-logo-game.png) left center/contain no-repeat;padding-right:20px;-webkit-box-sizing:content-box;box-sizing:content-box}.footer-public .footer-public.theme-white .footer-logo{background-image:url(//static.biligame.net/common/images/bilibili-logo-game-white.png);border-right:1px solid #fff}.footer-public .footer-public.theme-white .footer-box a,.footer-public .footer-public.theme-white .footer-text p,.footer-public .footer-public.theme-white footer-box a:hover{color:#fff}.footer-public .footer-culture-logo{float:left}.footer-public .c-logo-wrap{display:inline-block;margin-top:-3px;width:60px;height:60px;margin-left:20px;background:url(//static.biligame.net/common/images/culture-logo.png) no-repeat;background-repeat:no-repeat;background-size:contain}.footer-public .footer-nettag{display:inline-block;float:left;margin-left:15px}.footer-public .footer-nettag img{height:50px}.footer-public .footer-logo img{margin-right:20px;width:94px;height:42px}.footer-public .footer-culture-logo img{width:60px;height:60px;margin-left:20px;margin-top:-4px}.footer-public .footer-text{max-width:700px}.footer-public .footer-text .record:hover{color:#222}.footer-public .footer-text .record img{display:inline-block}',
		""
	])
}, function(t, e) {
	t.exports = function(o) {
		var a = [];
		return a.toString = function() {
			return this.map(function(t) {
				var e = function(t, e) {
					var o = t[1] || "",
						r = t[3];
					if (!r) return o;
					if (e && "function" == typeof btoa) {
						var n = function(t) {
								return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(
									encodeURIComponent(JSON.stringify(t)))) + " */"
							}(r),
							i = r.sources.map(function(t) {
								return "/*# sourceURL=" + r.sourceRoot + t + " */"
							});
						return [o].concat(i).concat([n]).join("\n")
					}
					return [o].join("\n")
				}(t, o);
				return t[2] ? "@media " + t[2] + "{" + e + "}" : e
			}).join("")
		}, a.i = function(t, e) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			for (var o = {}, r = 0; r < this.length; r++) {
				var n = this[r][0];
				"number" == typeof n && (o[n] = !0)
			}
			for (r = 0; r < t.length; r++) {
				var i = t[r];
				"number" == typeof i[0] && o[i[0]] || (e && !i[2] ? i[2] = e : e && (i[2] = "(" + i[2] + ") and (" + e + ")"),
					a.push(i))
			}
		}, a
	}
}, function(t, e, r) {
	var o, n, i, s = {},
		l = (o = function() {
			return window && document && document.all && !window.atob
		}, function() {
			return void 0 === n && (n = o.apply(this, arguments)), n
		}),
		a = (i = {}, function(t, e) {
			if ("function" == typeof t) return t();
			if (void 0 === i[t]) {
				var o = function(t, e) {
					return e ? e.querySelector(t) : document.querySelector(t)
				}.call(this, t, e);
				if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
					o = o.contentDocument.head
				} catch (t) {
					o = null
				}
				i[t] = o
			}
			return i[t]
		}),
		f = null,
		p = 0,
		c = [],
		u = r(5);

	function d(t, e) {
		for (var o = 0; o < t.length; o++) {
			var r = t[o],
				n = s[r.id];
			if (n) {
				n.refs++;
				for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
				for (; i < r.parts.length; i++) n.parts.push(x(r.parts[i], e))
			} else {
				var a = [];
				for (i = 0; i < r.parts.length; i++) a.push(x(r.parts[i], e));
				s[r.id] = {
					id: r.id,
					refs: 1,
					parts: a
				}
			}
		}
	}

	function b(t, e) {
		for (var o = [], r = {}, n = 0; n < t.length; n++) {
			var i = t[n],
				a = e.base ? i[0] + e.base : i[0],
				c = {
					css: i[1],
					media: i[2],
					sourceMap: i[3]
				};
			r[a] ? r[a].parts.push(c) : o.push(r[a] = {
				id: a,
				parts: [c]
			})
		}
		return o
	}

	function g(t, e) {
		var o = a(t.insertInto);
		if (!o) throw new Error(
			"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		var r = c[c.length - 1];
		if ("top" === t.insertAt) r ? r.nextSibling ? o.insertBefore(e, r.nextSibling) : o.appendChild(e) : o.insertBefore(
			e, o.firstChild), c.push(e);
		else if ("bottom" === t.insertAt) o.appendChild(e);
		else {
			if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error(
				"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
			);
			var n = a(t.insertAt.before, o);
			o.insertBefore(e, n)
		}
	}

	function m(t) {
		if (null !== t.parentNode) {
			t.parentNode.removeChild(t);
			var e = c.indexOf(t);
			0 <= e && c.splice(e, 1)
		}
	}

	function h(t) {
		var e = document.createElement("style");
		if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
			var o = function() {
				0;
				return r.nc
			}();
			o && (t.attrs.nonce = o)
		}
		return R(e, t.attrs), g(t, e), e
	}

	function R(e, o) {
		Object.keys(o).forEach(function(t) {
			e.setAttribute(t, o[t])
		})
	}

	function x(e, t) {
		var o, r, n, i, a, c;
		if (t.transform && e.css) {
			if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
			e.css = i
		}
		if (t.singleton) {
			var s = p++;
			o = f = f || h(t), r = v.bind(null, o, s, !1), n = v.bind(null, o, s, !0)
		} else n = e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" ==
			typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = t, c = document.createElement(
				"link"), void 0 === a.attrs.type && (a.attrs.type = "text/css"), a.attrs.rel = "stylesheet", R(c, a.attrs), g(a,
				c), r = function(t, e, o) {
				var r = o.css,
					n = o.sourceMap,
					i = void 0 === e.convertToAbsoluteUrls && n;
				(e.convertToAbsoluteUrls || i) && (r = u(r));
				n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(
					n)))) + " */");
				var a = new Blob([r], {
						type: "text/css"
					}),
					c = t.href;
				t.href = URL.createObjectURL(a), c && URL.revokeObjectURL(c)
			}.bind(null, o = c, t), function() {
				m(o), o.href && URL.revokeObjectURL(o.href)
			}) : (o = h(t), r = function(t, e) {
				var o = e.css,
					r = e.media;
				r && t.setAttribute("media", r);
				if (t.styleSheet) t.styleSheet.cssText = o;
				else {
					for (; t.firstChild;) t.removeChild(t.firstChild);
					t.appendChild(document.createTextNode(o))
				}
			}.bind(null, o), function() {
				m(o)
			});
		return r(e),
			function(t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					r(e = t)
				} else n()
			}
	}
	t.exports = function(t, a) {
		if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error(
			"The style-loader cannot be used in a non-browser environment");
		(a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || "boolean" == typeof a.singleton ||
			(a.singleton = l()), a.insertInto || (a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
		var c = b(t, a);
		return d(c, a),
			function(t) {
				for (var e = [], o = 0; o < c.length; o++) {
					var r = c[o];
					(n = s[r.id]).refs--, e.push(n)
				}
				t && d(b(t, a), a);
				for (o = 0; o < e.length; o++) {
					var n;
					if (0 === (n = e[o]).refs) {
						for (var i = 0; i < n.parts.length; i++) n.parts[i]();
						delete s[n.id]
					}
				}
			}
	};
	var y, S = (y = [], function(t, e) {
		return y[t] = e, y.filter(Boolean).join("\n")
	});

	function v(t, e, o, r) {
		var n = o ? "" : r.css;
		if (t.styleSheet) t.styleSheet.cssText = S(e, n);
		else {
			var i = document.createTextNode(n),
				a = t.childNodes;
			a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
		}
	}
}, function(t, e) {
	t.exports = function(t) {
		var e = "undefined" != typeof window && window.location;
		if (!e) throw new Error("fixUrls requires window.location");
		if (!t || "string" != typeof t) return t;
		var n = e.protocol + "//" + e.host,
			i = n + e.pathname.replace(/\/[^\/]*$/, "/");
		return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
			var o, r = e.trim().replace(/^"(.*)"$/, function(t, e) {
				return e
			}).replace(/^'(.*)'$/, function(t, e) {
				return e
			});
			return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 ===
				r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
		})
	}
}, function(t, e) {
	t.exports = [
		["100p", "GCREST", "", "进字〔2016〕0093 号", "[2017]10155号", "", "北京艺术与科学电子出版社"],
		["7day", "", "2016SR262261"],
		["99j", "", "", "备字〔2015〕Ｗ-RPG 0771 号", "[2015]1321号", "", ""],
		["a3", "Liber Entertainment Inc.", "", "进字〔2018〕0094 号", "", "[2019]2410号", "北京畅元国讯科技有限公司"],
		["aezj", "", "2015SR111276", "备字〔2015〕Ｍ-RPG 0652 号", "[2015]1116号", "", ""],
		["ag", "", "", "备字〔2016〕Ｍ-CSG 4396 号", "", ""],
		["animistic", "华清飞扬香港科技有限公司", "", "", "", "[2020]556号", "北京畅元国讯科技有限公司"],
		["arkorder", "广州明朝互动科技股份有限公司", "2018SR741213", "备字〔2016〕Ｍ-CSG 4396 号", "[2018]1673号", "", "华东师范大学电子音像出版社有限公司"],
		["bangdream", "株式会社武士道、株式会社Craft Egg", "", "进字〔2018〕00564号", "", "[2019]1297号", "北京畅元国讯科技有限公司"],
		["bfzj", "", "2016SR389008", "备字〔2016〕Ｍ-SLG 5707 号", "[2017]140号", "", ""],
		["bh3", "", "2016SR076025", "备字〔2016〕Ｍ-CSG 1244 号", "[2016]916号", "", ""],
		["bilibili", "", "2016SR188067", "备字〔2017〕Ｍ-RPG 0268号", "[2017]1389号", "", ""],
		["blhx", "上海蛮啾网络科技有限公司、厦门勇仕网络技术有限公司", "2016SR119646", "备字〔2016〕Ｍ-RPG 8051 号", "[2017]2447号", "", "上海科学技术文献出版社有限公司"],
		["boli", "", "2015SR254174", "备字〔2016〕Ｍ-CSG 1319 号", "[2016]485号", "", ""],
		["boxing", "", "", "备字〔2015〕Ｍ-RPG 1092 号", "", ""],
		["cjhwy", "", "2016SR087117", "备字〔2017〕Ｍ-SLG 0083 号", "[2017]5154号", "", ""],
		["cljj", "", "2016SR135845", "", "【2017】4587号", "", ""],
		["cq", "", "第C-2015-021414号", "进字〔2017〕0002 号", "", "", ""],
		["cys", "", "2016SR218543", "备字〔2017〕Ｍ-CSG 1217号", "[2017]2608号", "", ""],
		["cywlmhgj", "", "软著登字第1362295号", "【2016】 4593号", "", "", ""],
		["cyzr", "", "2014SR148274", "备字〔2016〕Ｍ-RPG 3023 号", "[2015]110号", "", ""],
		["czqst", "", "", "进字〔2016〕0128号", "[2016]4010号", "", ""],
		["dhh", "", "2016SR045539", "备字〔2016〕Ｍ-RPG 4659 号", "[2017]2626号", "", ""],
		["djsy", "", "2016SR080479", "进字〔2016〕Ｍ-RPG 4450 号", "[2017]1353号", ""],
		["djzj", "", "2016SR185873", "", "[2017]5358号", "", ""],
		["dwbgx", "北京畅游时代数码技术有限公司", "2018SR703515", "", "", "[2019]3046号", "北京畅游时代数码技术有限公司"],
		["eva", "", "2016SR213012", "备字〔2016〕Ｍ-RPG 7438 号", "[2016]2919号", "", ""],
		["fgo", "日本Aniplex Inc.公司", "", "进字〔2016〕0098 号", "[2017]8343号", "", "北京艺术与科学电子出版社"],
		["finalgear", "北京世界星辉科技有限责任公司", "2017SR135419", "", "[2017]8628号", "", "趣游科技集团有限公司"],
		["fskr", "", "", "进字[2017]0121号", "[2017]7199号", "", ""],
		["gf", "", "2016SR294098", "备字〔2016〕Ｍ-RPG 2772 号", "[2016]4101号", "", ""],
		["girl", "QualiArts，Inc.", "", "进字〔2018〕0056 号", "", "[2019]1657号", "三辰影库音像出版社有限公司"],
		["gmdl", "", "2016SR056323", "备字〔2017〕Ｍ-RPG 006 号", "[2016]4603号", "", ""],
		["gtsn", "", "", "备字〔2016〕Ｍ-SLG 1599 号", "", ""],
		["gwdz", "", "2016SR127478", "备字〔2016〕Ｍ-RPG 4343 号", "[2017]5370号", "", ""],
		["gydj", "", "2016SR055038", "", "[2017]3393号", "", ""],
		["Hermitage", "上海晨游信息科技有限公司", "2018SR379910", "", "", "[2020]403号", "方圆电子音像出版社有限责任公司"],
		["hlj", "", "2016SR154104", "进字〔2017〕0034 号", "[2017]1955号", "", ""],
		["hpjn", "", "", "备字〔2016〕Ｍ-RPG 5178 号", "", ""],
		["hylr", "", "2015SR264605", "备字〔2016〕Ｍ-RPG 3541 号", "[2016]1400号", "", ""],
		["hywz", "", "P第 10638号—1", "进字〔2016〕0132号", "[2016]4016号", "", ""],
		["ichu", "", "2016SR060742", "进字〔2016〕0090 号", "", "", ""],
		["jdzsgd", "", "P第 10360号—1", "进字〔2014〕0126 号", "[2014]1557号", "", ""],
		["jxsj", "", "2015SR187019", "备字〔2016〕Ｍ-RPG 6655 号", "[2016]1955号", "", ""],
		["kabaneri", "", "2016SR367890", "备字〔2017〕Ｍ-RPG 0052号", "", "", ""],
		["kfq", "", "2015SR288548", "备字〔2016〕Ｍ-RPG 4404 号 ", " [2016]1667 号", "", ""],
		["lxhzj", "", "2016SR311281", "备字〔2017〕Ｍ-RPG 0401 号", "[2017]4641号", "", ""],
		["lxjjx", "", "2015SR159922", "备字〔2016〕Ｍ-RPG 4444 号", "[2016]2091号", "", ""],
		["lyzzr", "", "2017SR468901", ""],
		["ma", "", "2015SR105841", "进字〔2015〕0066号", "", ""],
		["ma3", "", "2017SR049249", ""],
		["madoka", "", "2016SR011208", "进字〔2016〕0102 号", "", ""],
		["mfxy", "", "2015SR245317", "进字〔2016〕0094 号", "", ""],
		["minecraft", "", "2016SR347441", "进字〔2017〕0074 号", "", ""],
		["mjj", "", "2016SR049807", "备字〔2017〕Ｍ-RPG 0686 号", "[2016]1427号", ""],
		["mkly", "", "2016SR062541", "", "【2016】952号", ""],
		["mlk", "", "2014SR140134", "备字〔2014〕Ｍ-CSG123号", "[2015]357号", ""],
		["moe", "", "2016SR154049", "备字〔2017〕Ｍ-RPG 0428 号", "[2016]3458号", ""],
		["mxycjh", "曌赫（北京）网络技术有限公司", "2019SR0282408", "", "", "[2020]238号", "辽宁电子出版社有限责任公司"],
		["mzj", "", "", "进字〔2018〕0129 号", "", ""],
		["nono", "", "2015SR051960", "备字〔2016〕Ｍ-RPG 7627 号", "[2016]2804号", ""],
		["ntdgm", "", "2016SR136623", "备字〔2016〕Ｍ-SLG 6747 号", "[2017]1817号", ""],
		["oxmhj", "", "2015SR079221", "备字〔2015〕Ｍ-CSG 0572 号", "[2015]1221号", ""],
		["pcr", "Cygames，Inc.", "", "", "", "[2020]561号", "成都盈众九州网络科技有限公司"],
		["qhsj", "", "2017SR022222", "", "【2017】5356号", ""],
		["qjmj", "北京杰克麻雀科技有限公司", "2019SR0667024", "", "[2018]2015号", "", "北京伯通电子出版社"],
		["rgdsj", "", "2016SR000114", "备字〔2016〕Ｍ-RPG 5663 号", "[2016]1669号", ""],
		["sdmht", "上海宽娱数码科技有限公司", "2016SR193914", "备字〔2016〕Ｍ-RPG 6728 号", "[2016]4331号", "", "上海隐志网络科技有限公司"],
		["sglms", "", "2015SR280491", "备字〔2016〕Ｍ-RPG 6613 号", "[2016]2123号", ""],
		["sgpx", "", "2017SR041248", ""],
		["sh", "", "2015SR025332", "备字〔2016〕Ｍ-SLG 6693 号", "[2017]3355号", ""],
		["sj2", "", "2014SR098932", "备字〔2016〕Ｍ-RPG 1169 号 ", "[2015]819号", ""],
		["sjsn", "", "2016SR163339", "进字〔2016〕0099 号", "", ""],
		["sssj", "广州西山居世游网络科技有限公司", "2018SR672646", "", "", "[2019]2768号", "成都西山居世游科技有限公司"],
		["swqsl", "", "", "备字〔2015〕Ｍ-CSG 0605 号", "[2015]1208号", ""],
		["swy", "", "", "备字〔2017〕Ｍ-RPG 0515 号", "", "2017SR114446"],
		["sxd2", "", "", "备字〔2016〕Ｗ-RPG 4275 号", "[2016]1399号", ""],
		["syzh", "", "", "进字〔2017〕0139 号", "【2017】7172号", ""],
		["szg", "潜龙心诚（北京）网络科技有限公司", "2018SR170937", "备字〔2018〕Ｍ-SLG 0081 号", "[2018]807号", "", "北京畅元国讯科技有限公司"],
		["szqy", "", "2016SR287614", "〔2017〕Ｍ-RPG1141 号", "〔2017〕3601号", ""],
		["tank", "", "2016SR016103", "备字〔2016〕Ｍ-CSG 0339 号", "[2016]849号", ""],
		["teos2", "", "2014SR044483", "备字〔2015〕Ｍ-CSG 0396 号", "[2017]5466号", ""],
		["touken", "", "2016SR387827", "进字〔2016〕0137号", "[2016]4607号", ""],
		["tyx", "", "", "进字〔2018〕0099 号", "", ""],
		["xkc", "", "2016SR162412", "备字〔2017〕Ｍ-RPG 0185 号", "", ""],
		["xmds", "", "2016SR062429", "进字〔2016〕0071号", "[2016]4009号", ""],
		["xmqz", "", "2016SR116984", "", "[2017]8690号", ""],
		["xsqst", "备字〔2015〕Ｗ-RPG 0229 号", "[2015]228号", ""],
		["xzgj", "宇峻奥汀科技股份有限公司", "", "", "", "[2019]1548号", "三辰影库音像出版社有限公司"],
		["xzgjsy", "北京畅游天下网络技术有限公司、北京畅游时代数码技术有限公司", "", "进字〔2018〕0100号", "", "[2019]1310号", "北京畅游时代数码技术有限公司"],
		["ycytx", "", "", ""],
		["ydsnywl", "", "2016SR006471", "备字〔2016〕Ｍ-RPG 6525 号", "", ""],
		["yjdyc", "御宅（北京）科技有限公司", "2016SR073596", "备字〔2016〕Ｍ-RPG 3548 号", "[2016]1831号", "", "上海科学技术文献出版社有限公司"],
		["yqqs", "", "2017SR015470", "", "【2017】2998号", ""],
		["yszh", "", "2015SR256399", "备字〔2016〕Ｍ-CSG 0112 号", "[2016]298号", ""],
		["yxwj", "株式会社DMM.com", "", "进字〔2018〕0095 号", "", "[2019]3275号", "北京畅元国讯科技有限公司"],
		["yys", "", "2015SR223597", "备字〔2016〕Ｍ-RPG 4708 号", "[2017]6710号", ""],
		["yzr", "", "2014SR001747", "进字〔2016〕Ｍ-RPG 1453 号", "", ""],
		["yzr2", "", "2016SR158664", "备字〔2016〕Ｍ-RPG 0628 号", "[2016]1894号", ""],
		["zcsmw", "", "2015SR152010", "备字〔2016〕Ｍ-RPG 1083 号", "[2016]2009号", ""],
		["zdbmgj", "", "[2016]1964号", ""],
		["zdzhg", "", "2016SR071816", "备字〔2017〕Ｍ-SLG 0130 号", "[2017]1933号", ""],
		["zion", "", "2015SR220787", "备字〔2016〕Ｍ-CSG 3880 号", "[2016]1449号", ""],
		["zjz", "", "2016SR161048", "备字〔2016〕Ｍ-RPG 4739 号", "", ""],
		["zwfz", "", "2016SR071903", "备字〔2016〕Ｍ-RPG 6811 号", "[2016]4148号", ""],
		["zwhxq", "", "2015SR121124", "进字〔2016〕Ｍ-RPG 2960 号", "[2016]683号", ""],
		["zx", "喀普康有限公司", "", "进字〔2018〕0093 号", "", "[2019]1670号", "方圆电子音像出版社有限责任公司"],
		["zyzh2", "", "", "", "[2017]4535号", ""],
		["zzgc", "", "2016SR127478", "备字〔2016〕Ｍ-SLG 8013 号", "", ""]
	]
}, function(t, e) {
	t.exports = [
		["touken", "", "2016SR387819", "进字〔2016〕0138号", "[2016]4606号", ""]
	]
}, function(t, e) {
	t.exports = [
		["100p", "978-7-498-03035-1"],
		["a3", "978-7-498-06722-7"],
		["animistic", "978-7-498-07476-8"],
		["arkorder", "978-7-498-05010-6"],
		["bangdream", "978-7-498-06436-3"],
		["blhx", "978-7-7979-5910-0"],
		["dwbgx", "978-7-498-06944-3"],
		["fgo", "978-7-498-01451-1"],
		["finalgear", "978-7-498-01608-9"],
		["girl", "978-7-498-06531-5"],
		["Hermitage", "978-7-498-07377-8 "],
		["hylr", "978-7-7979-0219-9"],
		["mxycjh", "978-7-498-07315-0"],
		["pcr", "978-7-498-07481-2"],
		["qjmj", "978-7-498-05359-6"],
		["sdmht", "978-7-7979-2889-2"],
		["sssj", "978-7-498-06831-6"],
		["szg", "978-7-498-04226-2"],
		["xzgj", "978-7-498-06521-6"],
		["xzgjsy", "978-7-498-06449-3"],
		["yjdyc", "978-7-7979-0557-2"],
		["yxwj", "978-7-498-06994-8"],
		["zx", "978-7-498-06542-1"]
	]
}, function(t, e) {
	t.exports = [
		["zysy", "上海幻电信息科技有限公司"]
	]
}, function(t, e) {
	t.exports = [
		["100p", "4028c08b560ca7100156446ddcd75f5d"],
		["blhx", "4028c08b58bd467b0158bd8bd80d062a"],
		["fgo", "4028c08b55e888620155fc9f4d8e3d5d"],
		["sdmht", "4028c08c577024b80157a3072d990098"]
	]
}, function(t, e) {
	t.exports = [
		["100p"],
		["a3"],
		["animistic"],
		["arkorder"],
		["bangdream"],
		["blhx"],
		["dwbgx"],
		["fgo"],
		["finalgear"],
		["girl"],
		["Hermitage"],
		["hylr"],
		["magireco"],
		["mzj"],
		["mxycjh"],
		["pcr"],
		["qjmj"],
		["sdmht"],
		["sssj"],
		["szg"],
		["xzgj"],
		["xzgjsy"],
		["yjdyc"],
		["yxwj"],
		["zx"]
	]
}]);
