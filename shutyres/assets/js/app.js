"use strict";

document.addEventListener('DOMContentLoaded', () => {



    function initAccordion() {
        const filterRadioBtnWidth = document.querySelectorAll('.filter__form-label--width');
        const filterRadioBtnHeight = document.querySelectorAll('.filter__form-label--height');
        const filterRadioBtnDiameter = document.querySelectorAll('.filter__form-label--diameter');
        const filterRadioBtnBrand = document.querySelectorAll('.filter__form-label--brand');
        const btnWidth = document.querySelector('.filter__btn-width');
        const btnHeight = document.querySelector('.filter__btn-height');
        const btnDiameter = document.querySelector('.filter__btn-diameter');
        const btnBrand = document.querySelector('.filter__btn-brand');
        const btnFilter = document.querySelector('.filter__btn');
    
    
        const filterBox = document.querySelector('.filter__box');
        const filterBtn = document.querySelector('.filter__btn');
    
    
        const reviewsForm = document.querySelector('.reviews__form');
        const reviewsBtn = document.querySelector('.reviews__btn');
    
    
        function showFilterLabel(items, amount) {
            for (let i = 0; i < items.length; i++) {
                if (i >= amount) {
                    items[i].classList.remove('switch');
                }
            }
        }
    
        function hideRadioBtn(item, amount) {
            for (let i = 0; i < item.length; i++) {
                if (i >= amount) {
                    item[i].classList.add('hide');
                    item[i].style.maxHeight = '0';
                }
            }
        }
    
        function showRadioBtn(item, amount) {
            for (let i = 0; i < item.length; i++) {
                if (i >= amount) {
                    item[i].classList.remove('hide');
                    item[i].style.maxHeight = item[i].scrollHeight + "px";
                }
            }
        }
    
    
        document.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target.classList.contains('filter__btn-width')) {
                e.preventDefault();
                btnWidth.classList.toggle('active');
                if (btnWidth.classList.contains('active')) {
                    showRadioBtn(filterRadioBtnWidth, 6);
                } else {
                    hideRadioBtn(filterRadioBtnWidth, 6);
                }
                resetHeight();
            }
            if (target.classList.contains('filter__btn-height')) {
                e.preventDefault();
                btnHeight.classList.toggle('active');
                if (btnHeight.classList.contains('active')) {
                    showRadioBtn(filterRadioBtnHeight, 6);
                } else {
                    hideRadioBtn(filterRadioBtnHeight, 6);
                }
                resetHeight();
            }
            if (target.classList.contains('filter__btn-diameter')) {
                e.preventDefault();
                btnDiameter.classList.toggle('active');
                if (btnDiameter.classList.contains('active')) {
                    showRadioBtn(filterRadioBtnDiameter, 6);
                } else {
                    hideRadioBtn(filterRadioBtnDiameter, 6);
                }
                resetHeight();
    
            }
            if (target.classList.contains('filter__btn-brand')) {
                e.preventDefault();
                btnBrand.classList.toggle('active');
                if (btnBrand.classList.contains('active')) {
                    showRadioBtn(filterRadioBtnBrand, 4);
                } else {
                    hideRadioBtn(filterRadioBtnBrand, 4);
                }
                resetHeight();
            }
            if (target.classList.contains('filter__btn')) {
                e.preventDefault();
                filterBtn.classList.toggle('active');
                if (filterBtn.classList.contains('active')) {
                    showItem(filterBox);
                } else {
                    hideItem(filterBox);
                }
            }
            if (target.classList.contains('reviews__btn')) {
                e.preventDefault();
                reviewsBtn.classList.toggle('active');
                if (reviewsBtn.classList.contains('active')) {
                    showItem(reviewsForm);
                } else {
                    hideItem(reviewsForm);
                }
            }
        });
    
        function resetHeight() {
            filterBox.style.maxHeight = "";
    
            setTimeout(hideFilterBox, 300);
    
            function hideFilterBox() {
                filterBox.style.maxHeight = filterBox.scrollHeight + "px";
            }
        }
    
        function hideItem(item) {
            item.style.maxHeight = '0';
        }
    
        
        function showItem(item) {
            item.style.maxHeight = item.scrollHeight + "px";
        } 
    
    
        try {
            setTimeout(() => {
                showFilterLabel(filterRadioBtnWidth, 6);
                showFilterLabel(filterRadioBtnHeight, 6);
                showFilterLabel(filterRadioBtnDiameter, 6);
                showFilterLabel(filterRadioBtnBrand, 4);
            }, 500);
    
            hideRadioBtn(filterRadioBtnWidth, 6);
            hideRadioBtn(filterRadioBtnHeight, 6);
            hideRadioBtn(filterRadioBtnDiameter, 6);
            hideRadioBtn(filterRadioBtnBrand, 4);
            filterBox.style.maxHeight = filterBox.scrollHeight + "px";
            window.addEventListener('resize', () => {
                if ((btnFilter.classList.contains('active'))) {
                    showItem(filterBox);
                }
            });
        } catch (e) {}
    
    }
    
    initAccordion();
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
                if (target && target.tagName == "use") {
                    item.querySelector('.card__wish-icon').classList.toggle('active');
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
    
    
    function initTouchRating() {
        const ratingItemsList = document.querySelectorAll('.rating-touch__item');
    
        ratingItemsList.forEach(item => {
            item.addEventListener('click', () => {
                item.parentNode.dataset.totalValue = item.dataset.ratingValue;
            });
        });
    }
    
    
    try {
        initTouchRating();
    } catch(e) {}
    
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
    
    try {
        initTabs();
    } catch (e) {
    
    }
    
    
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
    function initMenu() {
        const navMenu = document.querySelector('.header__nav');
        const btnMenuOpen = document.querySelector('.header__mobile-btn_open');
        const btnMenuClose = document.querySelector('.header__mobile-btn_close');
    
    
        btnMenuOpen.addEventListener('click', () => {
            navMenu.classList.add('active');
        });
    
        btnMenuClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
    
    try {
        initMenu();
    } catch(e) {
        
    }
    function initBasket() {
        const cardsBtn = document.querySelectorAll('.card_btn');
        const basketHeaderValue = document.querySelector('.header__basket-value');
    
    
        function priceWithoutSpaces(str) {
            return str.replace(/\s/g, '');
        }
    
        const normalPrice = (str) => {
            return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        };
    
        function setCartData(id, array) {
            localStorage.setItem(id, JSON.stringify(array));
            return false;
        }
    
        cardsBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                let target = e.target;
                let parent = target.closest('.card__item');
                let tab = parent.querySelector('.card__tab, .one');
                let amountItem;
    
                if (tab.classList.contains('active')) {
                    amountItem = '1';
                } else {
                    amountItem = '4';
                }
    
                let cartsData = [];
                let id = parent.dataset.id;
    
                if (localStorage.getItem(id) == null) {
                    let img = parent.querySelector('.card__img').getAttribute('src');
                    let brand = parent.querySelector('.card__brand').textContent;
                    let model = parent.querySelector('.card__model').textContent;
                    let article = parent.querySelector('.card__article').textContent;
                    let priceNumber = priceWithoutSpaces(parent.querySelector('.card__price-value').textContent);
    
                    cartsData = [img, brand, model, article, priceNumber, id, amountItem];
                    setCartData(id, cartsData);
                    let Items = localStorage.length;
                    if (Items == 0) {
                        basketHeaderValue.innerText = '';
                    } else {
                        basketHeaderValue.innerText = Items;
                    }
                } else {
                    let item = JSON.parse(localStorage.getItem(id));
    
                    item[6] = String(Number(item[6]) + 1);
    
                    setCartData(id, item);
                }
                
    
            });
        });
    
        function generateCardProduct(img, brand, model, article, price, id, amount) {
            return `
            <div class="basket__card" data-id="${id}">
                <button class="basket__card-btn"></button>
                <div class="basket__card-top">
                    <img class="basket__card-img" src="${img}" alt="">
                    <div class="basket__card-top_descr">
                        <p class="basket__card-brand">${brand}</p>
                        <p class="basket__card-article">${model}</p>
                        <p class="basket__card-info">${article}</p>
                    </div>
                </div>
                <div class="basket__card-bottom">
                    <div class="basket__card-descr">
                        <div class="basket__card-box_value">
                            <h4 class="basket__card-name">кол-во:</h4>
                            <div class="basket__btns-box">
                                <button class="basket__minus-btn">-</button>
                                <div class="basket__card-value">${amount}</div>
                                <button class="basket__plus-btn">+</button>
                            </div>
                        </div>
                        <div class="basket__card-box_price">
                            <h4 class="basket__card-name">цена:</h4>
                            <div class="basket__card-price">
                                <span class="basket__card-price_value">${price}</span>
                                тенге
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    
    
    
        function formBasket() {
            const basketWrapper = document.querySelector('.basket__shop-wrapper');
            const totalPriceArea = document.querySelector('.basket__total-value_sum');
            const basketTitle = document.querySelector('.basket__right-title');
            const amountCards = document.querySelector('.basket__right-title_value');
    
    
            const basket = document.querySelector('.basket__shop');
    
            let cartData = localStorage.length;
            let totalPrice = 0;
    
            if (cartData !== 0) {
                basketHeaderValue.innerText = cartData;
                amountCards.innerText = cartData;
                basket.classList.add('active');
                basketWrapper.innerHTML = "";
    
                for (let i = 0; i < cartData; i++) {
                    let key = localStorage.key(i);
                    let card = JSON.parse(localStorage.getItem(key));
                    let price = card[4] * card[6];
                    basketWrapper.insertAdjacentHTML('afterbegin', generateCardProduct(card[0], card[1], card[2], card[3], normalPrice(price), card[5], card[6]));
                    totalPrice += Number(price);
                }
                totalPriceArea.innerText = normalPrice(totalPrice);
            } else {
                basket.classList.remove('active');
                basketTitle.innerText = "Корзина пустая!";
                basketHeaderValue.innerText = "";
            }
        }
    
        function changeBasket() {
            const basketWrapper = document.querySelector('.basket__shop-wrapper');
    
    
    
            basketWrapper.addEventListener('click', (e) => {
                const target = e.target;
                if (target.classList.contains('basket__card-btn')) {
                    let parent = target.closest('.basket__card');
                    let id = parent.dataset.id;
    
                    localStorage.removeItem(id);
                    parent.remove();
                    formBasket();
                }
                if (target.classList.contains('basket__plus-btn')) {
                    let parent = target.closest('.basket__card');
                    let id = parent.dataset.id;
    
                    let card = JSON.parse(localStorage.getItem(id));
                    card[6] = String(Number(card[6]) + 1);
                    setCartData(id, card);
                    formBasket();
                }
                if (target.classList.contains('basket__minus-btn')) {
                    let parent = target.closest('.basket__card');
                    let id = parent.dataset.id;
    
                    let card = JSON.parse(localStorage.getItem(id));
                    card[6] = String(Number(card[6]) - 1);
                    if (card[6] == 0) {
                        localStorage.removeItem(id);
                        parent.remove();
                        formBasket();
                    } else {
                        setCartData(id, card);
                        formBasket();
                    }
                }
            });
        }
    
        try {
            formBasket();
            changeBasket();
        } catch (e) { }
    }
    
    initBasket();
    const modal = document.querySelector('.modal');
    const modalBtnClose = document.querySelector('.modal__btn');
    const form = document.querySelector('.footer__form');
    
    
    function showModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('show');
    
        document.body.style.overflow = '';
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        showModal();
    });
    
    modalBtnClose.addEventListener('click', closeModal);
    
    
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    function initMaskTel() {
        [].forEach.call( document.querySelectorAll('.footer__input'), function(input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                if (event.type == "blur" && this.value.length < 5)  this.value = ""
            }
        
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false)
        
          });
    }
    
    try {
        initMaskTel();
    } catch(e) {}
    /* let ok = false;
    window.addEventListener('scroll', function () {
        if (ok === false) {
            ok = true;
            setTimeout(() => {
                ymaps.ready(function () {
                    var myMap = new ymaps.Map('map', {
                            center: [43.228762, 76.894234],
                            zoom: 17,
                            scrollZoom: false,
                        }, {
                            searchControlProvider: 'yandex#search'
                        }),
    
                        // Создаём макет содержимого.
                        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                        ),
    
                        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            hintContent: 'Казахстан, Алматы, улица Радостовца, 152/6',
                            balloonContent: false
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: 'assets/img/map.webp',
                            // Размеры метки.
                            iconImageSize: [182, 101],
                            iconImageOffset: [-80, -90],
                        });
                    myMap.geoObjects
                        .add(myPlacemark);
                        myMap.behaviors.disable('scrollZoom');
                });
            }, 1000);
        }
    }); */
    
    // = ../../../node_modules/swiper/swiper-bundle.min.js
    const swiper = new Swiper(".partners__slider", {
        slidesPerView: 5,
        slidesPerGroup: 1,
        loop: true,
    
        navigation: {
          nextEl: ".partners__btn--next",
          prevEl: ".partners__btn--prev",
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          535: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          700: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }
      });
    
    const swiper2 = new Swiper(".product__slider", {
        slidesPerView: 1,
        slidesPerGroup: 1,
    
        navigation: {
          nextEl: ".product__btn--next",
          prevEl: ".product__btn--prev",
        },
      });
    
});