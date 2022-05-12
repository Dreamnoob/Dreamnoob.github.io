"use strict";

document.addEventListener('DOMContentLoaded', function () {});
"use strict";

function initAccordion() {
  var faqTop = document.querySelectorAll('.faq__top');
  var faqContent = document.querySelectorAll('.faq__content');

  if (faqTop.length != 0 && faqContent.length != 0) {
    faqTop[0].classList.add('active');
    $(faqContent[0]).slideDown(0);
    faqTop.forEach(function (item) {
      item.addEventListener("click", function () {
        var current = this;
        faqTop.forEach(function (item, i) {
          if (item == current) {
            faqTop[i].classList.add('active');
            $(faqContent[i]).slideDown(300);
          } else if (item != current && item.classList.contains('active')) {
            faqTop[i].classList.remove('active');
            $(faqContent[i]).slideUp(300);
          }
        });
      });
    });
  }
}

initAccordion();
"use strict";

function startScrollAnimation() {
  $(document).scroll(function () {
    var $winheight = $(window).height();
    var $winPos = $(document).scrollTop() + $winheight;
    $(".anim").each(function () {
      var $pos = $(this).offset().top + 50;

      if ($winPos > $pos && !$(this).hasClass('anim-active')) {
        $(this).addClass("anim-active");
      }
      /* else {
            $(this).removeClass("anim-active");
        } */

    });
    var $footer = $(".footer").offset().top;

    if ($winPos >= $footer && !$(".footer__inner").hasClass('anim-active')) {
      $(".footer__inner").addClass("anim-active");
    }
  });
  $(".intro__title").addClass("anim-active");
  $(".intro__descr").addClass("anim-active");
  $(".intro__btns").addClass("anim-active");
  var rect = document.querySelectorAll(".rect");
  var title = document.querySelectorAll(".vesting__road-title");
  var descr = document.querySelectorAll(".vesting__road-descr");

  if (title.length != 0) {
    var delay = 0.4;
    title.forEach(function (item, i) {
      item.style.transitionDelay = delay + "s";
      rect[i].style.transitionDelay = delay + "s";
      descr[i].style.transitionDelay = delay + "s";
      delay = delay + 0.4;
    });
  }
}

startScrollAnimation();
"use strict";

function headerFixed() {
  window.addEventListener('scroll', function () {
    if (pageYOffset >= 43 && window.innerWidth > 1919 && !$('.header').hasClass("fixed")) {
      $('.header').addClass('fixed');
    } else if (pageYOffset >= 1 && window.innerWidth <= 1919 && !$('.header').hasClass("fixed")) {
      $('.header').addClass('fixed');
    } else if ($('.header').hasClass("fixed") && pageYOffset == 0) {
      $('.header').removeClass('fixed');
    }
  }, {
    passive: true
  });
}

headerFixed();
"use strict";

function initParalax() {
  var intro = document.querySelector('.intro');
  var moon = document.querySelector('.moon');
  var ninja = document.querySelector('.ninja');
  var dots3 = document.querySelector('.dots3');
  var dots4 = document.querySelector('.dots4');
  var grass = document.querySelector('.grass');
  var cloud1 = document.querySelector('.cloud1');
  var cloud2 = document.querySelector('.cloud2');
  var index = 5;
  var speed = 0.01;
  var positionX = 0,
      positionY = 0;
  var coordXprocent = 0,
      coordYprocent = 0;

  function setMouseParallaxStyle() {
    var distX = coordXprocent - positionX;
    var distY = coordYprocent - positionY;
    positionX = positionX + distX * speed;
    positionY = positionY + distY * speed;
    moon.style.cssText = "transform: translate(".concat(positionX / index, "%, ").concat(positionY / 9, "%) rotate(-5.6deg)");
    ninja.style.cssText = "transform: translate(".concat(-(positionX / index), "%, ").concat(-(positionY / index), "%)");
    dots3.style.cssText = "transform: translate(".concat(positionX / index, "%, ").concat(positionY / index, "%) rotate(-15.01deg)");
    dots4.style.cssText = "transform: translate(".concat(-(positionX / 6), "%, ").concat(-(positionY / 6), "%)");
    cloud1.style.cssText = "transform: translate(".concat(positionX / 3, "%, ").concat(positionY / 3, "%)");
    cloud2.style.cssText = "transform: translate(".concat(positionX / 3, "%, ").concat(positionY / 3, "%)");
    grass.style.cssText = "transform: translate(".concat(-(positionX / 12), "%, ").concat(-(positionY / 10), "%)");
    requestAnimationFrame(setMouseParallaxStyle);
  }

  setMouseParallaxStyle();
  intro.addEventListener('mousemove', function (e) {
    var pageWidth = intro.offsetWidth;
    var pageHeight = intro.offsetHeight;
    var coordX = e.pageX - pageWidth / 2;
    var coordY = e.pageY - pageHeight / 2;
    coordXprocent = coordX / pageWidth * 100;
    coordYprocent = coordY / pageHeight * 300;
  });
}

if (window.innerWidth >= 1024) {
  initParalax();
}
"use strict";

function toggleMenu() {
  $('.burder').on("click", function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });
}

toggleMenu();
"use strict";

var mySwiper = undefined;
var screenWidth;

function initSwiper() {
  screenWidth = $(window).outerWidth();

  if (screenWidth < 1024 && mySwiper == undefined) {
    mySwiper = new Swiper(".team__slider", {
      sliderPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".team__slider-btn--next",
        prevEl: ".team__slider-btn--prev"
      }
    });
  } else if (screenWidth > 1023 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

initSwiper();
window.addEventListener('resize', initSwiper);
"use strict";

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();
  var scrollEl = $(this).data("scroll");
  var scrollElPos = $(scrollEl).offset().top;
  $("html, body").animate({
    scrollTop: scrollElPos
  }, 500);
});
"use strict";
//# sourceMappingURL=main.js.map
