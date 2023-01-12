function toggleMenu() {
    const header__burger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__nav');

    header__burger.addEventListener('click', function () {
        this.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}

toggleMenu();

function toggleVideo() {
    const btn = document.querySelector(".promo__btn");
    let video = document.querySelector(".promo__bg");

    btn.addEventListener('click', function () {
        if (btn.classList.contains("play")) {
            btn.classList.remove("play");
            video.pause();
        } else {
            btn.classList.add("play");
            video.play();
        }
    });
}

toggleVideo();


window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".promo__title",
            start: "top bottom",
        }
    });

    tl.from('.promo__title', {
        opacity: 0,
        yPercent: 100,
        duration: 0.3,
        ease: "power1.easeOut",
    });

    tl.from('.promo__btn', {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power1.easeOut",
    });

    tl.from('.promo__down', {
        scale: 0,
        yPercent: 100,
        duration: 0.3,
        ease: "power1.easeOut",
    });


    gsap.to('.promo__down svg', {
        y: 15,
        opacity: 0,
        duration: 1.5,
        stagger: {
            each: 0.2,
            repeat: -1
        }
    });

    const page = document.querySelector('.page');

    gsap.timeline({
        scrollTrigger: {
            trigger: '.promo',
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=80%",
            onUpdate: ({ progress }) => {
                if (progress < 0.2) {
                    page.classList.remove('scroll');
                } else {
                    page.classList.add('scroll');
                }
            }
        }
    });

    const star = document.querySelector('.promo__star');

    const aboutAnim = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            scrub: 2,
            start: "top bottom",
            end: "20% center",
            onUpdate: ({ progress }) => {
                if (progress < 0.7) {
                    star.classList.remove('scroll');
                } else {
                    star.classList.add('scroll');
                }
            }
        }
    });



    let fromElement = document.querySelector(".about-star"),
        toElement = document.querySelector(".promo__hand-wrap"),
        point = { x: 0, y: 0 },
        convertedPoint = MotionPathPlugin.convertCoordinates(fromElement, toElement, point);


    aboutAnim.to(star, {
        duration: 5,
        x: convertedPoint.x,
        y: convertedPoint.y,
        width: '50px',
        height: '50px',
        rotate: 0,
    });



    let aboutCards = gsap.utils.toArray(".about-card");

    aboutCards.forEach(item => {
        gsap.from(item, {
            yPercent: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item.closest(".about-card-wrap"),
                start: "top bottom",
            }
        });
    })


    gsap.from('.promise__name', {
        opacity: 0,
        duration: 0.6,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".promise__name",
            start: "top bottom",
        }
    });

    let promiseItems = gsap.utils.toArray(".promise__item");

    promiseItems.forEach(item => {
        gsap.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power1.easeOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
            }
        });
    })


    gsap.from('.promise__subtitle', {
        opacity: 0,
        yPercent: 200,
        duration: 0.3,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".promise__subtitle",
            start: "top bottom",
        }
    });

    gsap.from('.promise__title', {
        opacity: 0,
        duration: 0.6,
        ease: "power1.easeOut",
        scrollTrigger: {
            trigger: ".promise__title",
            start: "top bottom",
        }
    });

    const aboutStar = document.querySelector('.about__star')

    const promiseAnim = gsap.timeline({
        scrollTrigger: {
            trigger: ".about__star-wrapper",
            scrub: 2,
            start: "top center",
            endTrigger: ".promise__star",
            end: "top center",
            onUpdate: ({ progress }) => {
                if (progress < 1) {
                    aboutStar.classList.remove('finish');
                } else {
                    aboutStar.classList.add('finish');
                }
            }
        }
    });



    let fromElement2 = document.querySelector(".promise__star"),
        toElement2 = document.querySelector(".about__star-wrapper"),
        point2 = { x: 0, y: 0 },
        convertedPoint2 = MotionPathPlugin.convertCoordinates(fromElement2, toElement2, point2);


    promiseAnim.to(aboutStar, {
        x: convertedPoint2.x,
        y: convertedPoint2.y,
        width: '35px',
        height: '35px',
        rotate: 0,
    });
})






