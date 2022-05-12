"use strict";

document.addEventListener('DOMContentLoaded', function () {});
"use strict";

gsap.registerPlugin(ScrollTrigger);
var locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
}); // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)

locoScroll.on("scroll", ScrollTrigger.update); // tell ScrollTrigger to use these proxy methods for the ".page" element since Locomotive Scroll is hijacking things

ScrollTrigger.scrollerProxy(".page", {
  scrollTop: function scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect: function getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".page").style.transform ? "transform" : "fixed"
});
ScrollTrigger.defaults({
  scroller: ".page"
});

function aboutSecAnim() {
  var tl1 = gsap.timeline();
  tl1.from(".about__title", {
    opacity: 0,
    duration: 0.6,
    yPercent: 100,
    rotateX: 90,
    ease: "none"
  });
  ScrollTrigger.create({
    animation: tl1,
    trigger: ".about",
    start: "top 80%" // scrub: true,

  });
  var tl2 = gsap.timeline();
  var childSplit = new SplitText(".about__text", {
    type: "lines"
  });
  tl2.from(childSplit.lines, {
    opacity: 0,
    duration: 0.6,
    yPercent: 100,
    rotateX: 90,
    ease: "none",
    stagger: 0.1
  });
  ScrollTrigger.create({
    animation: tl2,
    trigger: ".about",
    start: "top 80%" // scrub: true,

  });
}

aboutSecAnim();

function historySecAnim() {
  var tl1 = gsap.timeline().fromTo(".history", {
    opacity: 0
  }, {
    opacity: 1
  });
  ScrollTrigger.create({
    animation: tl1,
    trigger: ".history",
    start: "top bottom",
    end: "center bottom",
    scrub: true
  });
  var tl2 = gsap.timeline();
  tl2.from(".history__title", {
    // delay: 0.4,
    opacity: 0,
    duration: 0.6,
    yPercent: 100,
    rotateX: 90,
    ease: "none"
  });
  ScrollTrigger.create({
    animation: tl2,
    trigger: ".history__title",
    start: "top bottom"
  });
  var boxes = gsap.utils.toArray('.history__item');
  boxes.forEach(function (box) {
    gsap.from(box, {
      // delay: 0.4,
      opacity: 0,
      duration: 0.6,
      yPercent: 100,
      rotateX: 90,
      ease: "none",
      scrollTrigger: {
        trigger: box,
        start: "top bottom" // scrub: true

      }
    });
  });
  var tl3 = gsap.timeline();
  tl3.from(".history__bottom", {
    // delay: 0.4,
    opacity: 0,
    duration: 0.6,
    yPercent: 100,
    rotateX: 90,
    ease: "none"
  });
  ScrollTrigger.create({
    animation: tl3,
    trigger: ".history__bottom",
    start: "top bottom"
  });
}

historySecAnim();

function bannerAnim() {
  var tl1 = gsap.timeline();
  tl1.fromTo(".banner-bottom__img", {
    y: "15%",
    opacity: 0,
    scale: 1.4
  }, {
    y: "-10%",
    opacity: 1,
    scale: 1
  });
  ScrollTrigger.create({
    animation: tl1,
    trigger: ".banner-bottom",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true
  });
  var tl2 = gsap.timeline();
  tl2.from(".banner__text--center", {
    opacity: 0,
    duration: 0.6,
    yPercent: 100,
    rotateX: 90,
    ease: "none"
  });
  ScrollTrigger.create({
    animation: tl2,
    trigger: ".banner__text--center",
    start: "top bottom"
  });
  var tl3 = gsap.timeline();
  tl3.from(".banner__btn-bottom", {
    delay: 0.4,
    duration: 0.6,
    opacity: 0,
    scale: 0,
    ease: "none"
  });
  ScrollTrigger.create({
    animation: tl3,
    trigger: ".banner__btn-bottom",
    start: "top bottom"
  });
}

bannerAnim();

function footerAnim() {
  var boxes = gsap.utils.toArray('.footer-anim');
  boxes.forEach(function (box) {
    gsap.from(box, {
      delay: 0.4,
      opacity: 0,
      duration: 0.6,
      yPercent: 100,
      rotateX: 90,
      ease: "none",
      scrollTrigger: {
        trigger: box,
        start: "top bottom" // scrub: true

      }
    });
  });
}

footerAnim();
"use strict";

var myAnimation = new hoverEffect({
  parent: document.querySelector('.banner__img'),
  intensity: 0.2,
  speedin: 1.6,
  speedout: 1.6,
  image1: 'img/banner-4.jpg',
  image2: 'img/banner-1.jpg',
  displacementImage: 'img/displacement/4.png'
});
"use strict";

var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav');

function showMenu() {
  burger.classList.toggle('active');
  nav.classList.toggle('active');

  if (nav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

burger.addEventListener('click', showMenu);
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
"use strict";

function mobileHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}

mobileHeight();
window.addEventListener('resize', mobileHeight);
"use strict";

function initNavHover() {
  var navLinks = document.querySelectorAll(".nav__link"); // cursorHoverLink(navLinks);

  if (navLinks.length != 0) {
    navLinks.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        var self = this;
        var windowWidth = window.innerWidth;
        navLinks.forEach(function (item) {
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            console.log("телефон");
          } else if (item != self && windowWidth >= 941) {
            item.classList.add('light');
          }
        });
      });
      item.addEventListener("mouseout", function () {
        navLinks.forEach(function (item) {
          item.classList.remove('light');
        });
      });
    });
  }
}

initNavHover();
"use strict";

gsap.registerPlugin(SplitText);

function initPreloader() {
  var preloader = document.querySelector(".preloader");
  preloader.style.display = "flex";
  var tl = gsap.timeline();
  var tl = new TimelineMax({
    repeat: 0
  }),
      text = $(".preloader__text-top"),
      split = new SplitText(text, {
    type: "chars",
    position: "absolute"
  }),
      rough = RoughEase.ease.config({
    strength: 2,
    clamp: true
  }),
      i;
  tl.set(text, {
    autoAlpha: 1
  });

  for (i = 0; i < split.chars.length; i++) {
    tl.fromTo(split.chars[i], 2.4, {
      transformOrigin: "center -160px",
      z: 0.1,
      rotation: Math.random() < 0.5 ? 90 : -90
    }, {
      rotation: 0,
      ease: Elastic.easeOut
    }, 0.3 + i * 0.56);
    tl.to(split.chars[i], 0.6, {
      y: 96,
      ease: Bounce.easeOut
    }, 3.4 + Math.random() * 2.6);
    tl.to(split.chars[i], 1.6, {
      autoAlpha: 0,
      ease: rough
    }, 9.5 + Math.random());
  }

  var tl2 = new TimelineMax({
    repeat: 0
  }),
      text = $(".preloader__text-bottom"),
      split = new SplitText(text, {
    type: "chars",
    position: "absolute"
  }),
      rough = RoughEase.ease.config({
    strength: 2,
    clamp: true
  }),
      i;
  tl2.set(text, {
    autoAlpha: 1
  });

  for (i = 0; i < split.chars.length; i++) {
    tl2.fromTo(split.chars[i], 2.4, {
      transformOrigin: "center -160px",
      z: 0.1,
      rotation: Math.random() < 0.5 ? 90 : -90
    }, {
      rotation: 0,
      ease: Elastic.easeOut
    }, 0.3 + i * 0.56);
    tl2.to(split.chars[i], 1.4, {
      y: 96,
      ease: Bounce.easeOut
    }, 3.4 + Math.random() * 2);
    tl2.to(split.chars[i], 1, {
      autoAlpha: 0,
      ease: rough
    }, 9.5 + Math.random());
  }

  function loaderAnim(time) {
    var step = 1;
    var progressProcent = document.querySelector(".progress-bar__procent");
    var progressLine = document.querySelector(".progress-bar__line");

    function progressBarAmin() {
      var n = 0;
      var t = Math.round(time / 100);

      if (progressProcent && progressLine) {
        var interval = setInterval(function () {
          n = n + step;

          if (n == 100) {
            clearInterval(interval);
          }

          progressProcent.innerHTML = "".concat(n, "%");
          progressLine.style.width = "".concat(n, "%");
        }, t);
      }
    }

    function yearsAnim() {
      var currentYear = new Date().getFullYear();
      var loaderYear = document.querySelector(".loader__year");

      if (loaderYear) {
        var originalYear = Number(loaderYear.textContent);
        var allYears = currentYear - originalYear;
        var n = 0;
        var t = Math.round(time / allYears);
        var interval = setInterval(function () {
          n = n + step;

          if (n == allYears) {
            clearInterval(interval);
          }

          loaderYear.innerHTML = "".concat(originalYear + n);
        }, t);
      }
    }

    progressBarAmin();
    yearsAnim();
  }

  loaderAnim(11000);
  setTimeout(function () {
    preloader.classList.add("hide");
    initIntroAnim();
  }, 11800);
}

function initIntroAnim() {
  var childSplit = new SplitText("#quote", {
    type: "lines",
    linesClass: "split"
  });
  gsap.from(childSplit.lines, {
    delay: 0.4,
    opacity: 0,
    duration: 0.6,
    yPercent: 100,
    rotateX: 90,
    ease: "none",
    stagger: 0.1
  });
  var tl1 = gsap.timeline();
  tl1.from(".banner__btn-top", {
    delay: 0.4,
    duration: 0.6,
    opacity: 0,
    // yPercent: 100,
    scale: 0,
    ease: "none"
  });
}

if (sessionStorage.getItem("doNotShow") != "true") {
  initPreloader();
  sessionStorage.setItem("doNotShow", true);
} else {
  initIntroAnim();
}
"use strict";

var page = document.querySelector('.page');
var scrollPosition;

var hideScroll = function hideScroll() {
  var scrollWidth = "".concat(getScrollbarWidth(), "px");
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  page.classList.add("scroll-hide");
  page.style.paddingRight = scrollWidth;
  page.scroll(0, scrollPosition);
};

var showScroll = function showScroll() {
  page.style.paddingRight = '';
  page.classList.remove("scroll-hide");
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
/* const swiper = new Swiper('.mySwiper', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".slider__arrow--next",
        prevEl: ".slider__arrow--prev",
    },
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true
}); */
"use strict";
/* const tabs = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.content__item');
const tabParent = document.querySelector('.tabs__list');
const contentList = document.querySelectorAll('.content__list');

let windowWidth;

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.maxHeight = 0;
    });
    tabs.forEach(item => {
        item.classList.remove('active');
    });
}

function showTabContent(i = 0) {
    if (tabsContent.length != 0) {
        tabs[i].classList.add('active');
        tabsContent[i].style.maxHeight = tabsContent[i].scrollHeight + "px";
    }
}

function checkWindowWidth() {
    windowWidth = window.innerWidth;

    if (windowWidth >= 769) {
        $(tabsContent).appendTo(contentList);
    } else {
        for (let i = 0; i < tabsContent.length; i++) {
            $(tabsContent[i]).appendTo((tabs[i]));
        }
    }
}

function initTabs() {
    checkWindowWidth();

    hideTabContent();
    showTabContent();
}


initTabs();

if (tabParent != null) {
    tabParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabs__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

window.addEventListener('resize', () => {
    checkWindowWidth();

    tabs.forEach((item, i) => {
        if (item.classList.contains('active')) {
            tabsContent[i].style.maxHeight = tabsContent[i].scrollHeight + "px";
        }
    });
});


 */
"use strict";
"use strict";
//# sourceMappingURL=main.js.map
