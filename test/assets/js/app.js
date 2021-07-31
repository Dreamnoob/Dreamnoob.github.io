"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const ratings = document.querySelectorAll('.rating');
    
    function initRatings() {
        let ratingActive, ratingValue;
    
        ratings.forEach(item => {
            initRating(item);
        });
    
        function initRating(rating) {
            initRatingVars(rating);
    
            setRatingActiveWidth();
        }
    
        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        }
    
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }
    }
    
    try {
        initRatings();
    } catch (e) {
    
    }
    function initCardTabs() {
        const cards = document.querySelectorAll('.card__item');
        for (let i = 0; i < cards.length; i++) {
            initTab(i);
        }
    
        function initTab(i) {
            const cardTabs = cards[i].querySelectorAll('.card__tab');
    
            cardTabs.forEach((item, j) => {
                item.addEventListener('click', (e) => {
                    const target = e.target;
                    if (target && target.classList.contains('card__tab')) {
                        hideTabContent(i);
                        showTabContent(i, j);
                    }
                });
            });
        }
    
        function hideTabContent(i) {
            const contents = cards[i].querySelectorAll('.card__tab-content');
            const tabs = cards[i].querySelectorAll('.card__tab');
            contents.forEach((item, i) => {
                item.classList.remove('show');
                tabs[i].classList.remove('active');
            });
        }
    
        function showTabContent(i, j) {
            const contents = cards[i].querySelectorAll('.card__tab-content');
            const tabs = cards[i].querySelectorAll('.card__tab');
            contents[j].classList.add('show');
            tabs[j].classList.add('active');
        }
    }
    
    
    try {
        initCardTabs();
    } catch (e) {
    
    }
    
    
    
    function toggleWishItem() {
        const cards = document.querySelectorAll('.card__item');
    
        cards.forEach(item => {
            item.addEventListener('click', (e) => {
                const target = e.target;
    
                if (target && target.classList.contains('card__wish-btn')) {
                    item.querySelector('.card__wish-btn').classList.toggle('active');
                }
            });
        });
    }
    
    try {
        toggleWishItem();
    } catch (e) {
    
    }
    
    function toggleBtnPostpone() {
        const BtnPostpone = document.querySelector(".product__btn-postpone");
    
        BtnPostpone.addEventListener('click', () => {
            BtnPostpone.classList.toggle('active');
        });
    }
    
    try {
        toggleBtnPostpone();
    } catch (e) {
    
    }
    
    
    function initProductBuyTabs() {
        const productBuy = document.querySelector('.product__tabs');
        const productTabs = document.querySelectorAll('.product__tab');
        const productTabsContent = document.querySelectorAll('.product__tab-content');
    
        productBuy.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target && target.classList.contains('product__tab')) {
                productTabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabs();
                        showTabs(i);
                    }
                });
            }
        });
    
        function hideTabs() {
            productTabs.forEach((item, i) => {
                item.classList.remove('active');
                productTabsContent[i].classList.remove('show');
            });
        }
    
        function showTabs(i) {
            productTabs[i].classList.add('active');
            productTabsContent[i].classList.add('show');
        }
    }
    
    
    try {
        initProductBuyTabs();
    } catch (e) {
    
    }
    
    /* 
    const btn = document.querySelector('.reviews__btn');
    const form = document.querySelector('.reviews__form');
    
    btn.addEventListener('click', () => {
        form.classList.toggle('hide');
    }); */
    const swiper = new Swiper(".partners__slider", {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
    
        navigation: {
          nextEl: ".partners__btn--next",
          prevEl: ".partners__btn--prev",
        },
      });
    
    const swiper2 = new Swiper(".product__slider", {
        slidesPerView: 1,
        slidesPerGroup: 1,
    
        navigation: {
          nextEl: ".product__btn--next",
          prevEl: ".product__btn--prev",
        },
      });
    
    function initSelect() {
        const select = document.querySelector('.select');
        const selectLabels = document.querySelectorAll('.select__label');
        const selectTitle = document.querySelector('.select__title');
    
        select.addEventListener('click', () => {
            select.classList.toggle("active");
        });
    
        selectLabels.forEach((item) => {
            item.addEventListener('click', (e) => {
                const target = e.target;
                if (target && target.classList.contains("select__value")){
                    selectTitle.textContent = target.textContent;
                    select.classList.remove('active');
                }
            });
        });
    
    }
    
    try {
        initSelect();
    }
    catch (e) {
    
    }
    function initTabs() {
        const tabsParent = document.querySelector('.tabs');
        const tabs = document.querySelectorAll('.tab__item');
        const tabsContent = document.querySelectorAll('.tabs__content-item');
    
        tabsParent.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target && target.classList.contains('tab__item')) {
                tabs.forEach((item, i) => {
                    if (item == target) {
                        hideTabs();
                        showTabs(i);
                    }
                });
            }
        });
    
    
        function hideTabs() {
            tabs.forEach((item, i) => {
                item.classList.remove("active");
                tabsContent[i].classList.add('hide');
                tabsContent[i].classList.remove('tabs__anim');
            });
        }
    
        function showTabs(i = 0) {
            tabs[i].classList.add("active");
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('tabs__anim');
        }
    
        hideTabs();
        showTabs();
    }
    /* 
    try {
        initTabs();
    } catch (e) {
    
    }
     */
    
    function initBtnsSort() {
        const sortBtnParent = document.querySelector('.catalog__btns-sort');
        const sortBtns = document.querySelectorAll('.catalog__btn-sort');
    
        sortBtnParent.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target && target.classList.contains('catalog__btn-sort')) {
                deactivate();
                console.log(target);
                target.classList.add('active');
            }
        });
    
        function deactivate() {
            sortBtns.forEach(item => {
                item.classList.remove('active');
            });
        }
    }
    
    
    try {
        initBtnsSort();
    } catch (e) {
    
    }
    
    function initBtnShowMore() {
    
        const showMoreBox = document.querySelectorAll('.show-more__content');
        const showMoreBtns = document.querySelectorAll('.show-more__content_btn');
        const cardLists = document.querySelectorAll('.card__list');
        const articlesItems = document.querySelectorAll('.article__item');
    
    
        showMoreBtns.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                const target = e.target;
                if (target && target.classList.contains('show-more__content_btn--cards')) {
                    showCards(i);
                    console.log(i);
                }
                if (target && target.classList.contains('show-more__content_btn--articles')) {
                    showArticles(i);
                }
            });
        });
    
        function showCards(i) {
            const cardItems = cardLists[i].querySelectorAll('.card__item');
    
            cardItems.forEach(item => {
                item.classList.remove('hide');
            });
    
            showMoreBox[i].classList.add('hide');
        }
    
        function hideCards() {
            for (let i = 0; i < cardLists.length; i++) {
                const cardItems = cardLists[i].querySelectorAll('.card__item');
    
                for (let i = 0; i < cardItems.length; i++) {
                    if (i >= 8) {
                        cardItems[i].classList.add('hide');
                    }
                }
            }
        }
    
        function showArticles(i) {
            for (let i = 0; i < articlesItems.length; i++) {
                articlesItems[i].classList.remove('hide');
            }
            showMoreBox[i].classList.add('hide');
        }
    
        function hideArticles() {
            for (let i = 0; i < articlesItems.length; i++) {
                if (i >= 3) {
                    articlesItems[i].classList.add('hide');
                }
            }
        }
    
        hideCards();
        hideArticles();
    }
    
    try {
        initBtnShowMore();
    } catch (e) {
    
    }
    
    function initAccordion() {
        
    }

});