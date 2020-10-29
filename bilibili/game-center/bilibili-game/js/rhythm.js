$(document).ready(function() {

	// 幻灯片

	if ($(".slideshow li").length > 0) {
		var amount = $(".slideshow li").length;
		var slideshowlist = new animate({
			length: amount,
			space: 5000
		});
		var slideshow = $('.slideshow').slides({
			transition: 'crossfade',
			skip: true,
			pagination: true,
			loop: true,
			speed: 500,
			hoverPause: false,
			auto: 5000,
			autostop: false,
			onupdate: function(num) {
				slideshowlist.stop().deployAnimate(num);
			}
		});
		$('.slides-pagination').on('click', '.selected', function() {
			var index = $(this).index('.slides-pagination li');
			slideshowlist.stop().deployAnimate(index);
		});
	}

	if ($(".banner-slideshow").length > 0) {
		$('.banner-slideshow').slides({
			carousel: '.banner-carousel',
			items: '.banner-slide',
			transition: 'scroll',
			skip: false,
			pagination: true,
			loop: true,
			speed: 200,
			hoverPause: false,
			auto: 4000,
			autostop: false,
			onupdate: function(num) {
				$(".banner-text .banner-p").fadeOut().eq(num).fadeIn();
			}
		});
	}

	if ($(".gamelist-slideshow").length > 0) {
		$('.gamelist-slideshow').slides({
			carousel: '.gamelist-carousel',
			items: '.gamelist-slide',
			transition: 'scroll',
			skip: false,
			pagination: true,
			loop: true,
			speed: 200,
			hoverPause: false,
			auto: 4000,
			autostop: false
		});
	}

	// 游戏列表高度

	if ($('.game-box').length > 0) {
		var h1 = $('.game-box').height();
		$('.game-more').css({
			'height': h1
		});
	}

	// 类似 hyperscript
	function h(tagName, attr) {
		var t = document.createElement(tagName);
		for (var k in attr) {
			t.setAttribute(k, attr[k]);
		}
		for (var i = 2; i < arguments.length; i++) {
			var child = arguments[i];
			var node;
			if (typeof child == "string") {
				node = document.createTextNode(child);
			} else {
				node = child;
			}
			t.appendChild(node);
		}
		return t;
	}

	/**
	 * 检测 IE 版本。比 userAgent 更准，因为 userAgent 可以用插件修改。
	 * 可以检测 IE 5 - 9 ，不能检测 IE 10+ 。
	 * http://javascriptisawesome.blogspot.hk/2012/01/add-class-for-each-internet-explorer.html
	 */
	var ieVersion = function() {
		var div = document.createElement('div');
		var all = div.getElementsByTagName('i');
		var v = 3;
		do {
			v++;
			div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->';
		} while (all[0]);
		/*cc_on;if(v<5)v=10;*/
		return v > 4 ? v : null;
	}

	// IE9提示即将不支持访问
	if (ieVersion()) {
		$('#page').before(
			"<p class='ie-version-prompt-message'>为了保障你的账号安全和最佳浏览体验，该页面即将不再支持IE9及以下IE版本浏览器访问，建议您升级到IE浏览器最新版本，或使用Chrome等浏览器最新版本。</p>"
		);
	}


	var staticPath = "//static.biligame.net/game-center";

	// 弹出层
	// 以下内容低于IE9可能不支持addEventListener
	var wechatA = (function() {
		// 当前是否已经弹出
		var isShow = false;
		var wechatBody = h("div", {
				"class": "bd"
			},
			"欢迎关注",
			h("img", {
				src: "//static.biligame.net/common/images/biligame-weixin.3.jpg"
			})
		);
		var elem = h("a", {
				href: "javascript:;"
			},
			h("img", {
				src: staticPath + "/img/sns/wechat.png"
			}),
			h("br"),
			"微信",
			wechatBody
		);
		// 关闭弹出层
		function close() {
			$(wechatBody).removeClass("active");
			isShow = false;
		}
		// 展开弹出层
		function show() {
			isShow = true;
			$(wechatBody).addClass("active");
		}
		elem.addEventListener("click", function() {
			if (!isShow) {
				show();
			} else {
				close();
			}
		});
		/**
		 * child 是否是 elem 本身或子孙
		 */
		function containElem(elem, child) {
			if (child == elem) return true;
			if (!child.parentNode) return false;
			return containElem(elem, child.parentNode);
		}
		// 点击页面上除了 elem 以外的部分均为关闭
		document.body.addEventListener("click", function(e) {
			if (!containElem(elem, e.target)) {
				close();
			}
		});
		return elem;
	})();

	// SNS 信息
	document.body.appendChild(h("div", {
			"class": "bui-sns-info report-wrap-module report-scroll-module",
			id: "track_suspension_window"
		},
		wechatA,
		h("a", {
				target: "_blank",
				href: "https://weibo.com/p/1006063746119300/"
			},
			h("img", {
				src: staticPath + "/img/sns/weibo.png"
			}),
			h("br"),
			"微博"
		),
		h("a", {
				target: "_blank",
				href: "//space.bilibili.com/1328260/"
			},
			h("img", {
				src: staticPath + "/img/sns/bili.png"
			}),
			h("br"),
			"B站动态"
		)
	));


	// 回到顶部

	// if($(document.body).outerHeight() > $(window).height()){
	// 	var gnum = Math.floor(Math.random()*2) ? '0px 0px' : '-150px 0px';
	// 	if(!$('.gototop').length > 0) {
	// 		$('body').append('<a class="gototop" style="background-position: '+ gnum +';"></a>');
	// 	}
	// 	/*
	// 	if($(document).scrollTop() > 0){
	// 		$('.gototop').show();
	// 	}
	// 	$(window).scroll(function(){
	// 		var h = $(document).scrollTop();
	// 		if(h >= 1){
	// 			$('.gototop').show();
	// 		}else{
	// 			$('.gototop').hide();
	// 		}
	// 	});
	// 	*/
	// 	$('.gototop').click(function () {
	// 		// $("html,body").animate({scrollTop: 0}, 200);
	// 		// 原来是回到顶部，改为打开客服 #4523
	// 		window.open("http://kf.biligame.com/", "_blank");
	// 	});
	// }

	$('.pagination .next').click(function() {
		if (!$(this).hasClass('disabled')) {
			$('.pagination select').val(Number($('.pagination select').val()) + 1);
			$('.pagination select').change();
		}
	});

	$('.pagination .prev').click(function() {
		if (!$(this).hasClass('disabled')) {
			$('.pagination select').val(Number($('.pagination select').val()) - 1);
			$('.pagination select').change();
		}
	});
});

// 临时为 射击少女 加上 N 标识 http://172.16.7.65:10083/issues/4743
// $(".game-box-3 > dl > dd > a:contains(射击少女)").after('<span class="icon-new"></span>');
// $(".game-box-3 > dl > dd > a:contains(神仙道2)").after('<span class="icon-new"></span>');
// $(".game-box-3 > dl > dd > a:contains(刀剑乱舞)").after('<span class="icon-new"></span>');
// $(".game-box dl > dd > a:contains(古剑奇谭3)").after('<span class="icon-hot"></span>');
$(".game-box .game-box-others dl > dd > a:contains(暗影火炬城)").after('<span class="icon-new"></span>');
$(".game-box .game-box-others dl > dd > a:contains(重明鸟)").after('<span class="icon-hot"></span>');
$(".game-box .game-box-others dl > dd > a:contains(只只大冒险)").after('<span class="icon-hot"></span>');
$(".game-box .game-box-others dl > dd > a:contains(妄想破绽)").after('<span class="icon-hot"></span>');
$(".game-box .game-box-others dl > dd > a:contains(一起开火车！)").after('<span class="icon-new"></span>');
$(".game-box .game-box-others dl > dd > a:contains(Unheard-疑案追声)").after('<span class="icon-hot"></span>');
$(".game-box .game-box-others dl > dd > a:contains(Unheard-疑案追声)").html("Unheard-疑案<br/>追声");
$(".game-box .game-box-others dl > dd > a:contains(糖豆人：终极淘汰赛)").after('<span class="icon-hot"></span>');
// $(".game-box dl > dd > a:contains(妄想破绽)").parent().parent().prepend($(".game-box dl > dd > a:contains(妄想破绽)").parent());
// 临时为 机动战士敢达OL 加上 N 标识 http://172.16.7.65:10083/issues/6265
// $(".game-box-4 > dl > dd > a:contains(机动战士敢达OL)").after('<span class="icon-new"></span>');

// 游戏数据：列表页使用

function mingetjson(data) {

	var all = data,
		sy = [],
		ey = [],
		dy = [];

	$.each(all, function(i, item) {

		switch (item.type) {
			case 1:
				sy.push(item);
				break;
			case 2:
				ey.push(item);
				break;
			case 3:
				dy.push(item);
				break;
			default:
				break;
		}

	});

	splitPage(all);

	$('.listing-sort').on('click', 'a', function() {
		$(this).addClass('active').siblings('a').removeClass('active');
	});

	$('.listing-all').click(function() {
		splitPage(all);
	});

	$('.listing-sy').click(function() {
		splitPage(sy);
	});

	$('.listing-ey').click(function() {
		splitPage(ey);
	});

	$('.listing-dy').click(function() {
		splitPage(dy);
	});

	$('.report-click').click(function() {
		var msg = {};
		var $th = $(this);
		var id = $th.data('report-id');
		var gameId = $th.data('game-id');
		var gameUrl = $th.data('game-url');
		var gameName = $th.data('game-name');
		msg.id = id;
		msg.gameId = gameId;
		msg.gameUrl = gameUrl;
		msg.gameName = gameName;
		reportMsgObj.customEvent = msg;
		if (window.reportObserver) {
			reportObserver.forceCommit();
		}
	});

}

function splitPage(data) {

	var text = '',
		page = '';
	var idStart = 3120301;

	text = '<ul class="listing-ul clearfix" style="display:none;">';

	for (var i = 0, max = data.length; i < max; i++) {
		text += '<li class="report-click" data-game-name="' + data[i].title + '" data-report-id="' + (idStart + i % 12) +
			'"> <a class="listing-img" target="_blank" href="' + data[i].website + '"><img src="' + data[i].image +
			'"> </a><h4>' + data[i].title + '</h4><p>' + data[i].summary + '</p><a class="listing-btn" target="_blank" href="' +
			data[i].website + '">进入官网</a></li>';
		if ((i + 1) % 12 == 0 && (i + 1) != max) {
			text += '</ul><ul class="listing-ul clearfix" style="display:none;">';
		}
	}

	text += '</ul>';

	$('.listing-div').html(text);
	$('.listing-div .listing-ul').eq(0).fadeIn();

	var num = $('.listing-ul').length;

	for (var i = 1; i <= num; i++) {
		page += '<option value="' + i + '">第' + i + '页</option>';
	}

	$('.pagination select').html(page);

	var pnum = $('.pagination select option').length;

	showPage(pnum);

	$('.pagination').on('change', 'select', function() {
		var val = $(this).val();
		$('.listing-ul').hide().eq(val - 1).fadeIn();
		showPage(pnum);
	});

}

function showPage(total) {

	if ($('.pagination select').val() == 1) {
		$('.pagination .prev').addClass('disabled');
		//$('.pagination .prev').off('click');
	} else {
		$('.pagination .prev').removeClass('disabled');
	}
	if ($('.pagination select').val() == total) {
		$('.pagination .next').addClass('disabled');
		//$('.pagination .next').off('click');
	} else {
		$('.pagination .next').removeClass('disabled')
	}

}
