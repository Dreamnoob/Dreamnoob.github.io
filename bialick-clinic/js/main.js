window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);

    homePageAnim();
    mediaPageAnim();
    servicePageAnim();
    servicesPageAnim();
    teamPageAnim();
    contactPageAnim();
    faqPageAnim();
})

function homePageAnim() {
    const page = document.querySelector(".page-home");

    if (page) {
        subheaderAnim();
        heroAnim();
        doctorsAnim();
        contactAnim();
        callbackAnim();
        reviewsAnim();
        footerAnim();
    }
}

function mediaPageAnim() {
    const page = document.querySelector(".page-media");

    if (page) {
        subheaderAnim();
        breadcrumbsAnim();
        mediaAnim();
        footerAnim();
    }
}

function servicePageAnim() {
    const page = document.querySelector(".page-service");

    if (page) {
        subheaderAnim();
        breadcrumbsAnim();
        serviceAnim();
        callbackAnim();
        footerAnim();
    }
}

function servicesPageAnim() {
    const page = document.querySelector(".page-services");

    if (page) {
        subheaderAnim();
        breadcrumbsAnim();
        servicesAnim();
        callbackAnim();
        footerAnim();
    }
}

function teamPageAnim() {
    const page = document.querySelector(".page-team");

    if (page) {
        subheaderAnim();
        breadcrumbsAnim();
        teamAnim();
        contactAnim();
        callbackAnim();
        footerAnim();
    }
}

function contactPageAnim() {
    const page = document.querySelector(".page-contact");

    if (page) {
        subheaderAnim();
        breadcrumbsAnim();

        gsap.from(".contact-section__title", {
            yPercent: 100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: ".contact-section__title",
                start: "top bottom",
            }
        });

        contactAnim();
        callbackAnim();
        footerAnim();
    }
}

function faqPageAnim() {
    const page = document.querySelector(".page-faq");

    if (page) {
        subheaderAnim();
        breadcrumbsAnim();
        faqAnim();
        footerAnim();
    }
}


function subheaderAnim() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".subheader__inner",
            start: "top bottom",
        }
    });

    tl.from(".subheader__text", {
        duration: 0.2,
        opacity: 0,
        ease: "power1.easeOut",
    });

    let subheaderInput = gsap.utils.toArray(".subheader__input");

    subheaderInput.forEach(item => {
        tl.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power1.easeOut",
        });
    })

    tl.from(".subheader__select", {
        duration: 0.2,
        opacity: 0,
        ease: "power1.easeOut",
    });

    tl.from(".subheader__btn", {
        duration: 0.2,
        opacity: 0,
        ease: "power1.easeOut",
    });
}

function heroAnim() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero__wrapper",
            start: "top bottom",
        }
    });

    tl.from(".hero__wrapper h1", {
        yPercent: 100,
        duration: 0.3,
        opacity: 0,
        ease: "power1.easeOut",
    });

    tl.from(".hero__wrapper p", {
        yPercent: 100,
        duration: 0.3,
        opacity: 0,
        ease: "power1.easeOut",
    });

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero__text",
            start: "top bottom",
        }
    });

    tl2.from(".hero__text", {
        yPercent: 100,
        duration: 0.3,
        opacity: 0,
        ease: "power1.easeOut",
    });

    let heroItem = gsap.utils.toArray(".hero__item");

    heroItem.forEach(item => {
        tl2.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power1.easeOut",
        });
    })
}

function doctorsAnim() {
    gsap.from(".doctors__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".doctors__title",
            start: "top bottom",
        }
    });

    let doctorsItem = gsap.utils.toArray(".doctors__item");

    doctorsItem.forEach(item => {
        gsap.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    })

    gsap.from(".doctors__btn", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".doctors__btn",
            start: "top bottom",
        }
    });
}

function contactAnim() {
    gsap.from(".contact__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".contact__title",
            start: "top bottom",
        }
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact__wrapper",
            start: "top bottom",
        }
    });

    tl.from(".contact__address", {
        yPercent: 200,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
    });

    tl.from(".contact__city", {
        yPercent: 200,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
    });

    let contactList = gsap.utils.toArray(".contact__list li");

    contactList.forEach(item => {
        tl.from(item, {
            yPercent: 200,
            opacity: 0,
            duration: 0.3,
            ease: "power1.easeOut",
        });
    });

    tl.from(".contact__hours", {
        yPercent: 200,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
    });

    gsap.from(".contact__map", {
        opacity: 0,
        duration: 1,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".contact__map",
            start: "top bottom",
        }
    });
}

function callbackAnim() {
    gsap.from(".callback__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".callback__title",
            start: "top bottom",
        }
    });
    gsap.from(".callback__text", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".callback__text",
            start: "top bottom",
        }
    });

    let callbackInput = gsap.utils.toArray(".callback__input");

    callbackInput.forEach(item => {
        gsap.from(item, {
            yPercent: 100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    });

    gsap.from(".callback__btn", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".callback__btn",
            start: "top bottom",
        }
    });
}

function reviewsAnim() {
    gsap.from(".reviews__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".reviews__title",
            start: "top bottom",
        }
    });

    gsap.from(".reviews__slider", {
        opacity: 0,
        duration: 1,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".reviews__slider",
            start: "top bottom",
        }
    });
}

function footerAnim() {
    gsap.from(".footer__top", {
        yPercent: 100,
        opacity: 0,
        duration: 0.4,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".footer__inner",
            start: "top bottom",
        }
    });
    gsap.from(".footer__copyright", {
        opacity: 0,
        duration: 0.4,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".footer__copyright",
            start: "top bottom",
        }
    });
}

function breadcrumbsAnim() {
    gsap.from(".breadcrumbs", {
        opacity: 0,
        duration: 0.4,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".breadcrumbs",
            start: "top bottom",
        }
    });
}

function mediaAnim() {
    gsap.from(".media__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".media__title",
            start: "top bottom",
        }
    });

    gsap.from(".media__slider", {
        opacity: 0,
        duration: 1,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".media__slider",
            start: "top bottom",
        }
    });
}

function serviceAnim() {
    gsap.from(".service__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".service__title",
            start: "top bottom",
        }
    });

    gsap.from(".service__img", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".service__img",
            start: "top bottom",
        }
    });

    let contentP = gsap.utils.toArray(".service__content p");
    let contentH2 = gsap.utils.toArray(".service__content h2");
    let contentImg = gsap.utils.toArray(".service__content img");

    contentP.forEach(item => {
        gsap.from(item, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    });

    contentH2.forEach(item => {
        gsap.from(item, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    });

    contentImg.forEach(item => {
        gsap.from(item, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    });

}

function servicesAnim() {
    gsap.from(".services__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".services__title",
            start: "top bottom",
        }
    });

    let servicesArticle = gsap.utils.toArray(".services__article");

    servicesArticle.forEach(item => {
        gsap.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    });
}

function teamAnim() {
    gsap.from(".team__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".team__title",
            start: "top bottom",
        }
    });

    let doctorsItem = gsap.utils.toArray(".doctors__item");

    doctorsItem.forEach(item => {
        gsap.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    });
}

function faqAnim() {
    gsap.from(".faq__title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".faq__title",
            start: "top bottom",
        }
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".faq__nav",
            start: "top bottom",
        }
    });

    let faqNav = gsap.utils.toArray(".faq__nav li");

    faqNav.forEach(item => {
        tl.from(item, {
            yPercent: 100,
            opacity: 0,
            duration: 0.2,
            ease: "power1.easeOut",
        });
    });

    let faqList = gsap.utils.toArray(".faq__item");

    faqList.forEach(item => {
        gsap.from(item, {
            yPercent: 100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    });
}


"use strict";

function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

// Функция перемещения
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
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
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

const da = new DynamicAdapt("max");
da.init();
function initFaqScroll() {
    const items = document.querySelectorAll(".faq__nav li");

    items.forEach(item => {
        item.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            let currentPoint = document.getElementById(id)

            gsap.to(window, { duration: 1, scrollTo: { y: currentPoint, offsetY: 100 } });
        });
    });
}

initFaqScroll();
function toggleHeaderMenu() {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__nav");

    if (burger) {
        burger.addEventListener("click", function () {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
        })
    }
}

toggleHeaderMenu();
function mobileHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

mobileHeight();

window.addEventListener('resize', mobileHeight);
new Swiper(".reviews__slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});


const mediaSlider = new Swiper(".media__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});


mediaSlider.on('slideChange', function () {
    stopVideo();
});


function toggleVideo() {
    const mediaVideo = document.querySelectorAll('.media__video')
    const mediaPlayersList = document.querySelectorAll('.media__video-player');

    mediaPlayersList.forEach((el, i) => {
        el.setAttribute('id', `player-${i + 1}`)
    });

    mediaVideo.forEach(item => {
        let mediaBg = item.querySelector('.media__bg');
        let player = item.querySelector('.media__video-player');
        let playerVideoId = item.getAttribute('data-video-id');
        let playerId = player.getAttribute('id');
        let type = item.getAttribute('data-player-type');
        let switchStatus = 0;
        let playerVideo;
        let video;

        if (type === "youtube") {
            mediaBg.addEventListener('click', function () {
                stopVideo();

                if (!mediaBg.classList.contains('init')) {
                    mediaBg.classList.add('init')

                    window.YT.ready(function () {
                        playerVideo = new YT.Player(playerId, {
                            videoId: playerVideoId,
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onStateChange,
                            },
                        });
                    });
                }

                function onPlayerReady() {
                    playerVideo.playVideo();
                    mediaBg.classList.add('hide');

                    mediaBg.addEventListener('click', () => {
                        playerVideo.playVideo();
                        mediaBg.classList.add('hide');
                    });
                }

                function onStateChange(e) {
                    if (e.data == 2) {
                        mediaBg.classList.remove('hide');
                        mediaBg.classList.remove('not-visible');
                        switchStatus++;
                    }

                    if (e.data > 2 && switchStatus > 0) {
                        mediaBg.classList.add('not-visible');
                        switchStatus = 0;
                    }

                    if (e.data == 0) {
                        mediaBg.classList.remove('hide');
                        mediaBg.classList.remove('not-visible');
                    }
                }
            });
        }

        if (type === "vimeo") {
            mediaBg.addEventListener('click', function () {
                stopVideo()
                function playVideo() {
                    mediaBg.classList.add('hide')
                    playerVideo.play();
                }

                if (!mediaBg.classList.contains('init')) {
                    mediaBg.classList.add('init')

                    playerVideo = new Vimeo.Player(playerId, {
                        id: playerVideoId,
                        responsive: true,
                    });

                    playVideo();
                }

                playVideo()

                playerVideo.on('pause', function () {
                    mediaBg.classList.remove('hide')
                });

                playerVideo.on('ended', function () {
                    mediaBg.classList.remove('hide')
                });
            });


        }

        if (type === "video") {
            mediaBg.addEventListener('click', function (e) {
                stopVideo();

                if (!mediaBg.classList.contains('init')) {
                    mediaBg.classList.add('init')

                    player.innerHTML =
                        `
                                <video controls playsinline>
                                    <source src="${playerVideoId}">
                                </video>   
                            `
                        ;

                    video = item.querySelector('video');
                    video.play();
                    mediaBg.classList.add('hide');

                    video.addEventListener('pause', (event) => {
                        mediaBg.classList.remove('hide');
                    });

                    video.addEventListener('seeked', (event) => {
                        mediaBg.classList.add('hide');
                    });

                    video.addEventListener('seeking', (event) => {
                        mediaBg.classList.add('hide');
                    });

                } else {
                    video.play();
                    mediaBg.classList.add('hide');
                }
            });
        }
    });
}

toggleVideo();

function stopVideo() {
    var videosH = document.querySelectorAll("video");
    videosH.forEach(function (video) {
        video.pause();
    });

    var videosY = document.querySelectorAll("iframe[src^='https://www.youtube.com']");
    for (var i = 0; i < videosY.length; i++) {
        videosY[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }

    var videosV = document.querySelectorAll("iframe[src^='https://player.vimeo.com']");
    for (var i = 0; i < videosV.length; i++) {
        videosV[i].contentWindow.postMessage('{"method":"pause"}', 'https://player.vimeo.com');
    }
}
