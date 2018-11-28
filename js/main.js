(function($) {
	"use strict";
	jQuery(document).ready(function($) {
		$(".carousel-inner .item:first-child").addClass("active");
		$(document).scroll(function(e) {
			var scrollTop = $(document).scrollTop();
			if (scrollTop > $('nav').height()) {
				$('nav').addClass('navbar-fixed-top');
			} else {
				$('nav').removeClass('navbar-fixed-top');
			}
		});
		$(".panel-heading").click(function(e) {
			//切换折叠指示图标
			$(this).find("span").toggleClass("glyphicon-chevron-down");
			$(this).find("span").toggleClass("glyphicon-chevron-up");
		});
		//树形菜单样式切换操作
		$(".public-tree .menu-item-left").click(function() {
			$(".public-tree .menu-item-left").each(function(index, item) {
				if (item.className.indexOf('active') > -1) {
					$(item).removeClass("active");
				};
			});
			$(this).addClass('active');
		});

		$('.magnific-popup').magnificPopup({
			type: 'image'
		});
	});
	jQuery(window).load(function() {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		$('.portfolioFilter a').on('click', function() {
			$('.portfolioFilter a').removeClass('current');
			$(this).addClass('current');
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	});

	function jQueryTabs2() {
		$(".tabs2").each(function() {
			$(".tabs-panel2").not(":first").hide(), $("li", this).removeClass("active"), $("li:first-child", this).addClass(
				"active"), $(".tabs-panel:first-child").show(), $("li", this).click(function(t) {
				var i = $("a", this).attr("href");
				$(this).siblings().removeClass("active"), $(this).addClass("active"), $(i).siblings().hide(), $(i).fadeIn(400),
					t.preventDefault()
			}), $(window).width() < 100 && $(".tabs-panel2").show()
		})
	}
	$(document).ready(function() {
		jQueryTabs2(), $(".tabs2 li a").each(function() {
			var t = $(this).attr("href"),
				i = $(this).html();
			$(t + " .tab-title2").prepend("<p><strong>" + i + "</strong></p>")
		})
	}), $(window).resize(function() {
		jQueryTabs2()
	});
	(function() {
		var $container = $('.acc-container'),
			$trigger = $('.acc-trigger');
		$container.hide();
		$trigger.first().addClass('active').next().show();

		var fullWidth = $container.outerWidth(true);
		$trigger.css('width', fullWidth);
		$container.css('width', fullWidth);

		$trigger.on('click', function(e) {
			if ($(this).next().is(':hidden')) {
				$trigger.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});
		$(window).on('resize', function() {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width());
			$container.css('width', $container.parent().width());
		});

	})();
	//滑动动画
	new WOW().init();

}(jQuery));

//多行文字省略号兼容
$(function() {
	var content_arr = []; //定义一个空数组
	$('.box').each(function() { //遍历box内容
		var content = $.trim($(this).text()); //去掉前后文空格
		content_arr.push(content); //内容放进数组
	})
	for (var i = 0; i < content_arr.length; i++) { //遍历循环数组
		if (content_arr[i].length >= 100) { //如果数组长度（也就是文本长度）大于等于50（数字可自己定义）
			content = content_arr[i].substr(0, 100) + '...'; //添加省略号并放进box文字内容后面
			$(".box").eq(i).text(content);
		} else {
			content = content_arr[i];
			$(".box").eq(i).text(content);
		}
	}
})


//首页业内多行文字省略号兼容
$(function() {
	var content_arr = []; //定义一个空数组
	$('#sectionZ1 .main').each(function() { //遍历box内容
		var content = $.trim($(this).text()); //去掉前后文空格
		content_arr.push(content); //内容放进数组
	})
	for (var i = 0; i < content_arr.length; i++) { //遍历循环数组
		if (content_arr[i].length >= 100) { //如果数组长度（也就是文本长度）大于等于50（数字可自己定义）
			content = content_arr[i].substr(0, 100) + '...'; //添加省略号并放进box文字内容后面
			$("#sectionZ1 .main").eq(i).text(content);
		} else {
			content = content_arr[i];
			$("#sectionZ1 .main").eq(i).text(content);
		}
	}
})
