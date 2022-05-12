"use strict";

document.addEventListener('DOMContentLoaded', function () {});
"use strict";

function initAccordion() {
  $('.construction__btn').on('click', function () {
    $(this).toggleClass('active');
    var text = document.querySelector('.construction__text');
    text.classList.toggle('active');

    if (!text.classList.contains('active')) {
      text.style.maxHeight = '';
    } else {
      text.style.maxHeight = text.scrollHeight + 'px';
    }
  });
  $('.questions__top').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings(".questions__descr").slideToggle(300);
  });
}

initAccordion();
"use strict";

function initTextarea() {
  var textarea = document.querySelector("#resizable");

  if (textarea) {
    textarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  }
}

initTextarea();
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

function togglPhoto() {
  $('.case__examples-img').on('click', function () {
    if (window.innerWidth < 1024) {
      var scr = $(this).find("img").attr('src');
      $('.full-photo').addClass('active');
      $('.full-photo__img').attr('src', scr);
      hideScroll();
    }
  });
  $('.full-photo__close').on('click', function () {
    $('.full-photo').removeClass('active');
    showScroll();
  });
}

togglPhoto();
"use strict";

$(".input-tel").inputmask({
  "mask": "+99 (999) 999-9999"
});
$('.input-email').inputmask({
  mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
  greedy: false,
  onBeforePaste: function onBeforePaste(pastedValue, opts) {
    pastedValue = pastedValue.toLowerCase();
    return pastedValue.replace("mailto:", "");
  },
  definitions: {
    '*': {
      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
      casing: "lower"
    }
  }
});
"use strict";

setTimeout(function () {
  $('.cases__list').masonry({
    itemSelector: '.cases__item',
    gutter: 20
  });
}, 200);

function showMoreCases() {
  $(".cases__btn").click(function () {
    $(this).closest(".cases__list").find('.cases__item').css("display", "block");
    $(this).closest(".cases__item--btn").css("display", "none");
    $('.cases__list').masonry({
      itemSelector: '.cases__item',
      gutter: 20
    });
  });
}

showMoreCases();
"use strict";

function toggleMenu() {
  var navItem = document.querySelector('.nav__item--subnav'); // let activeMenu;

  navItem.addEventListener('click', function (e) {
    var target = e.target;

    if (window.innerWidth >= 1024 && target.classList.contains("nav__item--subnav")) {
      if (navItem.classList.contains('active')) {
        navItem.classList.remove('active');
        $('.subnav').slideUp(220);
        showScroll();
      } else {
        navItem.classList.add('active');
        $('.subnav').slideDown(220);
        hideScroll();
      }
    }
  });
}

function headerScroll() {
  window.addEventListener('scroll', function () {
    if (pageYOffset >= 1) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  }, {
    passive: true
  });
}

function toggleSubnav() {
  $('.nav__item--subnav').on('click', function () {
    if (window.innerWidth <= 1023) {
      $(this).toggleClass('active');
      $('.subnav').slideToggle(300);
    }
  });
}

function toggleMobMenu() {
  $('.burger').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.nav').slideToggle(300);
      $('.nav').removeClass('active');
      showScroll();
    } else {
      $(this).addClass('active');
      $('.nav').slideToggle(300);
      $('.nav').addClass('active');
      $('.header__inner').toggleClass('active');
      hideScroll();
    }
  });
}

toggleMenu();
headerScroll();
toggleSubnav();
toggleMobMenu();
"use strict";

function mobileHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}

mobileHeight();
window.addEventListener('resize', mobileHeight);
"use strict";

function togglePopupRegion() {
  $('.select__region').on('click', function () {
    $('.popup--region').addClass("active");
    $('.overlay').addClass("active");
    $('.page').addClass("popup-open");
    hideScroll();

    if (window.innerWidth >= 1024 && $('.nav__item--subnav').hasClass('active')) {
      $('.nav__item--subnav').removeClass('active');
      $('.subnav').slideUp(220);
    }
  });
  $('.popup__close--region').on('click', function () {
    $('.popup--region').removeClass("active");
    $('.overlay').removeClass("active");
    $('.page').removeClass("popup-open");

    if (!$(".burger").hasClass('active')) {
      showScroll();
    }
  });

  function selectRegion() {
    var regions = document.querySelectorAll('.region__item');
    $('.region__item').on('click', function () {
      regions.forEach(function (item) {
        item.classList.remove('active');
      });
      $(this).addClass('active');
      $('.select__region-text').text($(this).text());
      $('.popup--region').removeClass("active");
      $('.overlay').removeClass("active");
      $('.page').removeClass("popup-open");

      if (!$(".burger").hasClass('active')) {
        showScroll();
      }
    });
  }

  selectRegion();
}

function togglePopupMessage() {
  $('.header__btn-call').on('click', function () {
    $('.popup--call').addClass("active");
    $('.overlay').addClass("active");
    $('.page').addClass("popup-open");
    hideScroll();
  });
  $('.form__btn-popup').on('click', function () {
    $('.form--popup').addClass("hide");
    $('.popup--call-message').addClass("show");
  });
  $('.popup__close--call').on('click', function () {
    $('.popup--call').removeClass("active");
    $('.form--popup').removeClass("hide");
    $('.popup--call-message').removeClass("show");
    $('.overlay').removeClass("active");
    $('.page').removeClass("popup-open");
    showScroll();
  });
}

function closeActivePopup() {
  $('.overlay').on('click', function () {
    $(".popup").each(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass("active");
        $('.overlay').removeClass("active");
        $('.page').removeClass("popup-open");

        if (!$(".burger").hasClass('active')) {
          showScroll();
        }

        if ($(this).hasClass('popup--calculate')) {
          closeQuiz();
        }
      }
    });
  });
}

closeActivePopup();

function togglePopupCalculate() {
  $('.calculate__btn').on('click', function () {
    $('.popup--calculate').addClass("active");
    $('.overlay').addClass("active");
    $('.page').addClass("popup-open");
    hideScroll();
  });
  $('.popup__close--calculate').on('click', function () {
    $('.overlay').removeClass("active");
    $('.page').removeClass("popup-open");
    closeQuiz();
    showScroll();
  });
}

function closeQuiz() {
  var quizItems = document.querySelectorAll('.quiz__item');
  $('.popup--calculate').removeClass("active");
  $('.popup--calculate').removeClass("quiz-start");
  $('.calculate__intro').removeClass("hide");
  $('.quiz').removeClass("show");
  $('.quiz').trigger("reset");
  quizItems.forEach(function (item) {
    item.classList.remove("show");
  });
  $('.quiz__finish').removeClass("show");
}

togglePopupRegion();
togglePopupMessage();
togglePopupCalculate();
"use strict";

function initQuiz() {
  var quizItems = document.querySelectorAll('.quiz__item');
  var counter;
  $('.calculate__intro-btn').on('click', function () {
    $('.calculate__intro').addClass("hide");
    $('.quiz').addClass("show");
    $('.popup--calculate').addClass("quiz-start");
    $('.quiz__btn').each(function () {
      $(this).addClass('no-active');
    });
    counter = 0;
    quizItems[counter].classList.add("show");
    checkInputSelected();
  });

  function checkInputSelected() {
    $(".quiz__item").each(function () {
      if ($(this).hasClass("show")) {
        var quizBtn = $(this).find('.quiz__btn');

        if ($(this).hasClass("quiz__item--three")) {
          $("#noSite").on("click", function () {
            quizBtn.removeClass("no-active");
            $('#myWebsite').addClass("no-active");
            $('#myWebsite').val("");
          });
          $("#myLink").on("click", function () {
            if ($('#myWebsite').val().length == 0) {
              quizBtn.addClass("no-active");
            }

            $('#myWebsite').removeClass("no-active");
            $('#myWebsite').bind('input', function () {
              if ($(this).val().length != 0) {
                quizBtn.removeClass("no-active");
              } else {
                quizBtn.addClass("no-active");
              }
            });
          });
        } else if ($(this).hasClass("quiz__item--four") || $(this).hasClass("quiz__item--five")) {
          var quizRadio = $(this).find('.quiz__radio-input');
          var quizInput = $(this).find('.quiz__input');
          $(quizRadio).on("click", function () {
            $(quizInput).val('');

            if ($(this).is(':checked')) {
              quizBtn.removeClass("no-active");
            } else {
              quizBtn.addClass("no-active");
            }
          });
          $(quizInput).bind('input', function () {
            if ($(this).val().length != 0) {
              quizBtn.removeClass("no-active");
              $(quizRadio).prop('checked', false);
            } else {
              quizBtn.addClass("no-active");
            }
          });
        } else {
          var _quizRadio = $(this).find('.quiz__radio-input');

          $(_quizRadio).on("click", function () {
            quizBtn.removeClass("no-active");
          });
        }

        return false;
      }
    });
  }

  $('.quiz__btn').on('click', function () {
    nextQuiz();
  });

  function nextQuiz() {
    quizItems[counter].classList.remove("show");
    counter++;
    $(".quiz").animate({
      scrollTop: 0
    }, {
      duration: 10,
      easing: "linear"
    });

    if (counter < quizItems.length) {
      quizItems[counter].classList.add("show");
      checkInputSelected();
    } else {
      $('.quiz__finish').addClass("show");
      $('.popup--calculate').removeClass("quiz-start");
    }
  }

  $('.quiz__finish-btn').on('click', function () {
    $('.quiz').removeClass("show");
    $('.calculate__intro').removeClass("hide");
    $('.quiz__finish').removeClass("show");
    $('.popup--calculate').removeClass("active");
    $('.popup--thanks').addClass("active");
    $('.quiz').trigger("reset");
  });

  function closePopupThanks() {
    $('.popup__close--thanks').on('click', function () {
      $('.popup--thanks').removeClass("active");
      $('.overlay').removeClass("active");
      $('.page').removeClass("popup-open");
      showScroll();
    });
  }

  closePopupThanks();
}

initQuiz();

function checkValidFinishForm() {
  $('#name').bind('input', function () {
    checkInputs();
  });
  $('#phone').bind('input', function () {
    checkInputs();
  });
  $('#login').bind('input', function () {
    checkInputs();
  });
  $('#email').bind('input', function () {
    checkInputs();
  });
}

checkValidFinishForm();

function checkInputs() {
  if ($("#login").hasClass('active')) {
    if ($("#name").val().length != 0 && $("#phone").val().length != 0 && $("#login").val().length != 0) {
      $(".quiz__finish-btn").removeClass("no-active");
    } else {
      $(".quiz__finish-btn").addClass("no-active");
    }
  } else if ($("#email").hasClass('active')) {
    if ($("#name").val().length != 0 && $("#phone").val().length != 0 && $("#email").val().length != 0) {
      $(".quiz__finish-btn").removeClass("no-active");
    } else {
      $(".quiz__finish-btn").addClass("no-active");
    }
  } else {
    if ($("#name").val().length != 0 && $("#phone").val().length != 0) {
      $(".quiz__finish-btn").removeClass("no-active");
    } else {
      $(".quiz__finish-btn").addClass("no-active");
    }
  }
}
"use strict";

var header = document.querySelector('.header');
var headerInner = document.querySelector('.header__inner');
var page = document.querySelector('.page');
var scrollPosition;

var hideScroll = function hideScroll() {
  var scrollWidth = "".concat(getScrollbarWidth(), "px");
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  page.style.overflow = 'hidden';
  page.classList.add("scroll-hide");

  if (!document.body.classList.contains('main-page')) {
    page.style.paddingRight = scrollWidth;
    headerInner.style.paddingRight = scrollWidth;
  }

  if (scrollPosition != 0) {
    header.classList.add('hide-scroll');
  }

  page.scroll(0, scrollPosition);
};

var showScroll = function showScroll() {
  page.style.paddingRight = '';
  page.style.overflow = '';
  page.classList.remove("scroll-hide");
  headerInner.style.paddingRight = "";
  header.classList.remove('hide-scroll');
  window.scroll(0, scrollPosition);
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

function select() {
  var select = document.querySelector(".select");
  var selectTop = document.querySelectorAll(".select__top");
  var selectContent = document.querySelectorAll(".select__content");
  var selectInput = $(".select__input");

  if (select) {
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (target.classList.contains('select__top')) {
        selectTop.forEach(function (item, i) {
          if (target == item) {
            item.classList.toggle('active');
            $(selectContent[i]).slideToggle(300);
          }

          if (target != item) {
            item.classList.remove('active');
            $(selectContent[i]).slideUp(300);
          }
        });
      } else {
        selectTop.forEach(function (item, i) {
          item.classList.remove('active');
          $(selectContent[i]).slideUp(300);
        });
      }

      selectInput.on('click', function () {
        if (this.classList.contains('select__input--telegram')) {
          $('.quiz__input--login').slideDown(200);
          $('.quiz__input--login').addClass("active");
        } else {
          $('.quiz__input--login').slideUp(200);
          $('.quiz__input--login').removeClass("active");
        }

        if (this.classList.contains('select__input--email')) {
          $('.quiz__input--email').slideDown(200);
          $('.quiz__input--email').addClass("active");
        } else {
          $('.quiz__input--email').slideUp(200);
          $('.quiz__input--email').removeClass("active");
        }

        var thisText = $(this).find('span').text();
        var thisContent = $(this).parent();
        var thisParent = $(this).parent().prev();
        thisParent.find('.select__top-title').text(thisText);
        thisContent.slideUp(300);
        checkInputs();
      });
    });
  }
}

select();
"use strict";

function servicesTabs() {
  var servicesItem = document.querySelectorAll('.services__item');
  var servicesInfo = document.querySelectorAll('.services__info-item');
  $('.services__item').on('click', function () {
    var _this = this;

    servicesItem.forEach(function (item, i) {
      item.classList.remove('active');

      if (_this == item) {
        hideServicesInfo(i);
        item.classList.add('active');
        servicesInfo[i].classList.add('active');
        toggleNumbers(i);
      }
    });
  });

  function hideServicesInfo(number) {
    servicesInfo.forEach(function (item, i) {
      if (i != number) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  }
}

function initNumbersList() {
  var servicesItem = document.querySelectorAll('.services__item');
  servicesItem.forEach(function (item, i) {
    var div = document.createElement('div');
    div.innerText = 1 + i;
    $('.services__numbers-list').append(div);
  });
}

function toggleNumbers(num) {
  var translateY = $('.services__numbers-wrapper').outerHeight();
  $('.services__numbers-list').css({
    transform: "translateY(-".concat(translateY * num, "px)")
  });
  $('.services__big-num').text("0" + (1 + num));
}

servicesTabs();
initNumbersList();
"use strict";

var mySwiper = undefined;
var screenWidth;
var verticleSlider = document.querySelector(".verticle-slider");

function initSwiper() {
  screenWidth = $(window).width();

  if (screenWidth > 1023 && mySwiper == undefined && verticleSlider) {
    var sliderCounter = function sliderCounter() {
      var sliderPagination = document.querySelector('.verticle-slider__pagination2');
      var sliderCount = document.querySelector('.verticle-slider__count');

      if (sliderPagination) {
        var sliderBullet = sliderPagination.childNodes;
        sliderBullet.forEach(function (item, i) {
          item.innerText = i + 1;
        });
        sliderCount.innerText = "/" + sliderBullet.length;
      }
    };

    var sliderWheelControl = function sliderWheelControl() {
      var slider = document.querySelector('.verticle-slider');
      slider.addEventListener('wheel', function (e) {
        var deltaY = e.deltaY;

        if (screenWidth > 1023) {
          var activeSlide = document.querySelector('.swiper-slide-active');

          if (Math.round(activeSlide.scrollHeight) - Math.round(activeSlide.scrollTop) == Math.round(activeSlide.clientHeight) && deltaY > 0) {
            mySwiper.slideNext();
          } else if (activeSlide.scrollTop == 0 && deltaY < 0) {
            mySwiper.slidePrev();
          }
        }
      });
    };

    mySwiper = new Swiper(verticleSlider, {
      allowTouchMove: false,
      speed: 700,
      preventInteractionOnTransition: true,
      direction: "vertical",
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: false,
          translate: [0, "-100%", 0]
        },
        next: {
          translate: [0, "100%", 0]
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    sliderCounter();
    mySwiper.on('slideChange', function () {
      if (mySwiper.activeIndex > 0) {
        $('.header').addClass('active');
      } else {
        $('.header').removeClass('active');
      }
    });
    sliderWheelControl();
  } else if (screenWidth < 1024 && mySwiper != undefined && verticleSlider) {
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
var swiper = new Swiper(".projects__slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".projects__slider-pagination ",
    clickable: true //   dynamicBullets: true,

  },
  navigation: {
    nextEl: ".projects-button-next",
    prevEl: ".projects-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
      allowTouchMove: true
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
      allowTouchMove: false
    }
  }
});
"use strict";
//# sourceMappingURL=main.js.map
