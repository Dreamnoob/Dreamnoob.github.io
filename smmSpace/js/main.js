"use strict";

document.addEventListener('DOMContentLoaded', function () {});
"use strict";

function initQuestionAccordion() {
  $('.question__content').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle(300);
  });
}

initQuestionAccordion();

function initServicesAccordion() {
  $('.rates__show-more').on('click', function () {
    $(this).toggleClass('active');
    $(this).closest('.rates__item').children('.rates__bottom').slideToggle(300);
  });
  $('.rates__top').on('click', function (e) {
    if (!$(".rates__btn-order").is(e.target) && window.innerWidth < 1024) {
      // $(this).toggleClass('active');
      $(this).closest('.rates__item--services').children('.rates__bottom').slideToggle(300);
    }
  });
}

initServicesAccordion();

function initPurchaseHistoryAccordion() {
  $('.rates__top').on('click', function (e) {
    if (!$(".order-again__btn").is(e.target)) {
      $(this).closest('.rates__item--purchase-history').children('.rates__bottom').slideToggle(300);
    }
  });
}

initPurchaseHistoryAccordion();
"use strict";

function clickPast() {
  $(document).mouseup(function (e) {
    if (!$(".user__menu").is(e.target) && $(".user__menu").has(e.target).length === 0 && !$(".user__btn").is(e.target) && !$(".user-mob__btn").is(e.target)) {
      $(".user__menu").fadeOut(300);
    }

    if (!$(".order-input--social").is(e.target) && window.innerWidth < 768) {
      $('.order__box').removeClass('active');
      $('.order__list').removeClass('active');
    }

    if (!$(".order-input--services").is(e.target) && window.innerWidth < 768) {
      $(".order-input--services").closest('.order__services').removeClass('active');
      $(".order-input--services").next().removeClass('active');
    }

    if (!$(".order-input--services2").is(e.target) && window.innerWidth < 768) {
      $(".order-input--services2").closest('.services__wrapper').removeClass('active');
      $(".order-input--services2").next().removeClass('active');
    }
    /* if (!$(".order-input--services2").is(e.target) && window.innerWidth < 768) {
        $('.order__services').removeClass('active');
        $('.order__services-list').removeClass('active');
    } */

  });
}

clickPast();
"use strict";

function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  var _this2 = this;

  var _this = this; // массив объектов


  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

  this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    var data = node.dataset.da.trim();
    var dataArray = data.split(",");
    var оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects); // массив уникальных медиа-запросов

  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  }); // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске

  var _loop = function _loop(_i) {
    var media = _this2.mediaQueries[_i];
    var mediaSplit = String.prototype.split.call(media, ',');
    var matchMedia = window.matchMedia(mediaSplit[0]);
    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });

    _this2.mediaHandler(matchMedia, оbjectsFilter);
  };

  for (var _i = 0; _i < this.mediaQueries.length; _i++) {
    _loop(_i);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (var i = 0; i < оbjects.length; i++) {
      var оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
      var _оbject = оbjects[_i2];

      if (_оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
      }
    }
  }
}; // Функция перемещения


DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);

  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }

  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }

  destination.children[place].insertAdjacentElement('beforebegin', element);
}; // Функция возврата


DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);

  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}; // Функция получения индекса внутри родителя


DynamicAdapt.prototype.indexInParent = function (parent, element) {
  var array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
}; // Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max


DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

var da = new DynamicAdapt("max");
da.init();
"use strict";

function headerFixed() {
  window.addEventListener('scroll', function () {
    if (pageYOffset >= 1) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }

    if ($('.user__menu').hasClass('active')) {
      $('.user__menu').fadeOut(300);
      $('.user__menu').removeClass('active');
    }

    if ($('.nav').hasClass('active')) {
      $('.nav').removeClass('active');
      $('.substrate').removeClass('active');
    }
  }, {
    passive: true
  });
}

headerFixed();
"use strict";

function animIntro() {
  var items = document.querySelectorAll('.intro__illustration-item');

  function initAnim() {
    setTimeout(function () {
      items.forEach(function (item) {
        item.classList.add("step1");
      });
    }, 2000);
    setTimeout(function () {
      items[0].classList.add("step2");
    }, 4000);
    setTimeout(function () {
      items[1].classList.add("step2");
    }, 4500);
    setTimeout(function () {
      items.forEach(function (item) {
        item.classList.remove("step1", "step2");
      });
    }, 5000);
  }

  if (items.length != 0) {
    initAnim();
    setInterval(function () {
      initAnim();
    }, 30000);
  }
}

animIntro();
"use strict";

function toggleUserMenu() {
  $('.user__btn').on('click', function () {
    $('.user__menu').fadeToggle(300);
    $('.user__menu').toggleClass('active');
  });
}

toggleUserMenu();

function ToggleMobMenu() {
  $('.burger').on('click', function () {
    $('.nav').addClass('active');
    $('.substrate').addClass('active');
    hideScroll();
  });
  $('.close-menu').on('click', function () {
    $('.nav').removeClass('active');
    $('.substrate').removeClass('active');
    showScroll();
  });
  $('.substrate').on('click', function (e) {
    if ($(".substrate").is(e.target)) {
      $('.nav').removeClass('active');
      $('.substrate').removeClass('active');
      showScroll();
    }
  });
}

ToggleMobMenu();
"use strict";

function mobileHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}

mobileHeight();
window.addEventListener('resize', mobileHeight);
"use strict";

function openSignUpPopup() {
  $('.sign-up__btn').on('click', function () {
    $('.popup--sign-up').fadeIn(300);
    $('.popup--sign-up').css("display", "flex");
    hideScroll();

    if ($('.nav').hasClass('active') || $('.substrate').hasClass('active')) {
      $('.nav').removeClass('active');
      $('.substrate').removeClass('active');
    }
  });
}

openSignUpPopup();

function openSignInPopup(item) {
  $(item).on('click', function () {
    $('.popup--sign-in').fadeIn(300);
    $('.popup--sign-in').css("display", "flex");
    hideScroll();

    if ($('.nav').hasClass('active') || $('.substrate').hasClass('active')) {
      $('.nav').removeClass('active');
      $('.substrate').removeClass('active');
    }
  });
}

openSignInPopup('.sign-in__btn');
openSignInPopup('.reviews__authorization-btn');

function switchToRestorePasswordPopup() {
  $('.forgot-password').on('click', function () {
    $('.popup--sign-in').fadeOut(300);
    $('.popup--restore-password').fadeIn(300);
    $('.popup--restore-password').css("display", "flex");
  });
}

switchToRestorePasswordPopup();

function switchToSignInPopup() {
  $('.call__sign-in-popup').on('click', function () {
    $('.call__sign-in-popup').closest('.popup').fadeOut(300);
    $('.popup--sign-in').fadeIn(300);
    $('.popup--sign-in').css("display", "flex");
  });
}

switchToSignInPopup();

function closePopup() {
  $('.popup__close').on('click', function () {
    $(this).closest('.popup').fadeOut(300);
    showScroll();
  });
  $('.payment-message__btn--close').on('click', function () {
    $(this).closest('.popup').fadeOut(300);
    showScroll();
  });
  $('.popup').on('click', function (e) {
    if ($(".popup").is(e.target)) {
      $(this).fadeOut(300);
      showScroll();
    }
  });
}

closePopup();

function switchToRegistration() {
  $('.call__sign-up-popup').on('click', function () {
    $('.popup--sign-in').fadeOut(300);
    $('.popup--sign-up').fadeIn(300);
    $('.popup--sign-up').css("display", "flex");
  });
}

switchToRegistration();

function openQuickOrderPopup() {
  $('.order-again__btn').on('click', function () {
    $('.popup--quick-order').fadeIn(300);
    $('.popup--quick-order').css("display", "flex");
    hideScroll();
  });
}

openQuickOrderPopup();

function toggleOrderBottomTabs() {
  function showServiceInformation() {
    $('.order__results-btn').on('click', function () {
      $('.order__menu').addClass("hide");
      $('.order__menu').removeClass("show");
      $('.information').addClass("show");
    });
  }

  showServiceInformation();

  function hideServiceInformation() {
    $('.information__btn').on('click', function () {
      $('.order__menu').removeClass("hide");
      $('.order__menu').addClass("show");
      $('.information').removeClass("show");
    });
  }

  hideServiceInformation();

  function showFastPayment() {
    $('#showPayment').on('click', function () {
      $('.order__menu').addClass("hide");
      $('.order__menu').removeClass("show");
      $('.fast-payment').addClass("show");
    });
  }

  showFastPayment();

  function hideFastPayment() {
    $('.fast-payment__btn-back').on('click', function () {
      $('.order__menu').removeClass("hide");
      $('.order__menu').addClass("show");
      $('.fast-payment').removeClass("show");
    });
  }

  hideFastPayment();
}

toggleOrderBottomTabs();
"use strict";

var $range = $("#range");
var $input = $("#rangeInput");
var instance;
var min = Number($($range).attr("data-min"));
var max = Number($($range).attr("data-max"));
$range.ionRangeSlider({
  skin: "round",
  type: "single",
  onStart: function onStart(data) {
    $input.prop("value", data.from);
  },
  onChange: function onChange(data) {
    $input.prop("value", data.from);
  }
});
instance = $range.data("ionRangeSlider");
$input.on("change", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    from: val
  });
  $($input).prop("value", val);
});
$('.order__range-btn--minus').on('click', function () {
  var minus = Number($(this).attr("data-minus"));
  var val = Number($($input).prop("value")) - minus;

  if (val < min) {
    val = min;
  }

  $($input).prop("value", val);
  instance.update({
    from: val
  });
});
$('.order__range-btn--plus').on('click', function () {
  var plus = Number($(this).attr("data-plus"));
  var val = Number($($input).prop("value")) + plus;

  if (val > max) {
    val = max;
  }

  $($input).prop("value", val);
  instance.update({
    from: val
  });
});
"use strict";

function initRating() {
  var ratings = document.querySelectorAll('.rating');

  if (ratings.length != 0) {
    ratings.forEach(function (item) {
      var ratingValue = item.querySelector('.rating__wrapper').dataset.totalValue;
      var ratingField = item.querySelector('.rating__current');
      ratingField.innerText = "".concat(ratingValue);
    });
  }
}

initRating();
"use strict";

var header = document.querySelector('.header');

var hideScroll = function hideScroll() {
  var scrollWidth = "".concat(getScrollbarWidth(), "px");
  document.body.style.paddingRight = scrollWidth;
  document.body.classList.add('scroll-hide');
  header.style.paddingRight = scrollWidth;
};

var showScroll = function showScroll() {
  document.body.style.paddingRight = '';
  document.body.classList.remove('scroll-hide');
  header.style.paddingRight = "";
}; // Get scrollbar width


var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';
  document.body.appendChild(outer);
  var getScrollbarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);
  return getScrollbarWidth;
};
"use strict";

function toggleSelect() {
  var selectTop = document.querySelectorAll('.select__top');
  selectTop.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parent = this.closest('.select');
      var currentSelectContent = parent.querySelector('.select__content');
      var currentSelectTop = parent.querySelector('.select__top');
      var selectItem = parent.querySelectorAll('.select__content-item');
      var mainInput = parent.querySelector('.select__main-input');
      var mainImg = parent.querySelector('.select__main-img');
      var allSelectTop = document.querySelectorAll('.select__top');
      var allSelectContent = document.querySelectorAll('.select__content');
      allSelectTop.forEach(function (item, i) {
        if (item != currentSelectTop) {
          item.classList.remove('active');
          allSelectContent[i].classList.remove('active');
        } else {
          currentSelectTop.classList.toggle('active');
          currentSelectContent.classList.toggle('active');
        }
      });
      selectItem.forEach(function (item) {
        item.addEventListener('click', function () {
          var currentSelectName = this.querySelector('.select__content-name').innerText;

          if (this.querySelector('.select__content-img')) {
            var currentSelectImg = this.querySelector('.select__content-img').getAttribute('src');
            mainImg.setAttribute('src', currentSelectImg);
          }

          mainInput.value = currentSelectName;
          currentSelectTop.classList.remove('active');
          currentSelectContent.classList.remove('active');
        });
      });
    });
  });
}

toggleSelect();

function closeSelect() {
  var select = document.querySelectorAll('.select');

  if (select.length != 0) {
    document.addEventListener('click', function (e) {
      select.forEach(function (item) {
        var withinBoundaries = e.composedPath().includes(item);

        if (!withinBoundaries) {
          var currentSelectContent = item.querySelector('.select__content');
          var currentSelectTop = item.querySelector('.select__top');
          currentSelectTop.classList.remove('active');
          currentSelectContent.classList.remove('active');
        }
      });
    });
  }
}

closeSelect();

function toggleOrderSocialSelect() {
  $('.order-input--social').on('click', function () {
    $(this).closest('.order__box').toggleClass('active');
    $(this).next('.order__list').toggleClass('active');
  });
  $('.order__item').on('click', function () {
    var src = $(this).find('img').attr("src");
    var name = $(this).find('.order__name').text();
    var parent = $(this).closest(".order__box");
    $(parent).find('.order__img').attr("src", src);
    $(parent).find('.order-input--social').attr("placeholder", name);

    if (window.innerWidth < 1024) {
      $(parent).removeClass('active');
      $(parent).find('.order__list').removeClass('active');
    }
  });
}

toggleOrderSocialSelect();

function toggleOrderServicesSelect() {
  $('.order-input--services').on('click', function () {
    $(this).closest('.order__services').toggleClass('active');
    $(this).next('.order__services-list').toggleClass('active');
  });
  $('.order__services-item').on('click', function () {
    var name = $(this).find('.order__services-name').text();
    var parent = $(this).closest(".order__services");
    $(parent).find('.order-input--services').attr("placeholder", name);

    if (window.innerWidth < 1024) {
      $(parent).removeClass('active');
      $(parent).find('.order__services-list').removeClass('active');
    }
  });
  $('.order-input--services2').on('click', function () {
    $(this).closest('.services__wrapper').toggleClass('active');
    $(this).next('.services__list').toggleClass('active');
  });
  $('.services__item').on('click', function () {
    var name = $(this).find('.services__name').text();
    var parent = $(this).closest(".services__wrapper");
    $(parent).find('.order-input--services2').attr("placeholder", name);

    if (window.innerWidth < 1024) {
      $(parent).removeClass('active');
      $(parent).find('.services__list').removeClass('active');
    }
  });
}

toggleOrderServicesSelect();
"use strict";

function showPassword() {
  $('.btn__view-password').click(function () {
    if ($(this).hasClass("show")) {
      $(this).removeClass("show");
      $(this).prev().attr('type', 'password');
    } else {
      $(this).addClass("show");
      $(this).prev().attr('type', 'text');
    }
  });
}

showPassword();
"use strict";

var mySwiper = undefined;

function initSwiper() {
  var orderBox = document.querySelector('.order__box');
  var screenWidth = window.innerWidth;

  if (screenWidth > 1023 && mySwiper == undefined && orderBox) {
    mySwiper = new Swiper(".order__box", {
      slidesPerView: "auto",
      slidesPerGroup: 3,
      loopedSlides: 15,
      loop: true,
      navigation: {
        nextEl: ".order__btn-right",
        prevEl: ".order__btn-left"
      }
    });
  } else if (screenWidth <= 1023 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

initSwiper();

var optimizedResize = function () {
  var callbacks = [],
      running = false; // fired on resize event

  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  } // run the actual callbacks


  function runCallbacks() {
    callbacks.forEach(function (callback) {
      callback();
    });
    running = false;
  } // adds callback to loop


  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add: function add(callback) {
      if (!callbacks.length) {
        window.addEventListener("resize", resize);
      }

      addCallback(callback);
    }
  };
}();

optimizedResize.add(function () {
  initSwiper();
});

function initOrderBoxPrompt() {
  var Items = document.querySelectorAll('.order__item');
  Items.forEach(function (element) {
    element.addEventListener('mouseenter', function (e) {
      if (window.innerWidth >= 1024) {
        var id = element.getAttribute('data-id');
        var prompt = document.getElementById(id);
        var box = element.getBoundingClientRect();
        var left = box.left + window.pageXOffset;
        var top = box.top + window.pageYOffset;
        prompt.classList.add('active');
        requestAnimationFrame(function () {
          prompt.style.transform = "translate3d(calc(".concat(left, "px), calc(").concat(top - 60, "px), 0) ");
        });
        element.addEventListener('mouseleave', function () {
          prompt.classList.remove('active');
        });
      }
    });
  });
}

initOrderBoxPrompt();
"use strict";

function initTabs(items) {
  var list = document.querySelectorAll(items);

  if (list.length != 0) {
    list.forEach(function (item) {
      item.addEventListener('click', function () {
        list.forEach(function (item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
}

initTabs('.order__item');
initTabs('.order__services-item');
initTabs('.services__item');
initTabs('.purchase-history__btn');
initTabs('.support__chat-item');
"use strict";
//# sourceMappingURL=main.js.map
