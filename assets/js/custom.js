!function(t){t(document).ready(function(){t("body").addClass("js");var e=t("#menu"),o=t(".menu-link");o.click(function(){return o.toggleClass("active"),e.toggleClass("active"),!1})}),videoPopup(),t(".owl-carousel").owlCarousel({loop:!0,margin:30,nav:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsive:{0:{items:1},550:{items:2},750:{items:3},1e3:{items:4},1200:{items:5}}}),t(".Modern-Slider").slick({autoplay:!0,autoplaySpeed:1e4,speed:600,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1,dots:!0,pauseOnDotsHover:!0,cssEase:"fade",draggable:!1,prevArrow:'<button class="PrevArrow"></button>',nextArrow:'<button class="NextArrow"></button>'}),t("div.features-post").hover(function(){t(this).find("div.content-hide").slideToggle("medium")},function(){t(this).find("div.content-hide").slideToggle("medium")}),t("#tabs").tabs()}(jQuery);