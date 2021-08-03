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
    
            if (rating.classList.contains('rating__set')) {
                setRating(rating);
            }
        }
    
        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        }
    
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }
    
        function setRating(rating) {
            const ratingItems = rating.querySelectorAll('.rating__item');
    
            ratingItems.forEach((item, i) => {
                item.addEventListener('mouseenter', () =>{
                    initRatingVars(rating);
    
                    setRatingActiveWidth(item.value);
                });
    
                item.addEventListener('mouseleave', () => {
                    setRatingActiveWidth();
                });
    
                item.addEventListener('click', () => {
                    initRatingVars(rating);
    
                    ratingValue.innerHTML = i + 1;
                    setRatingActiveWidth();
                });
            });
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
        const filterRadioBtnWidth = document.querySelectorAll('.filter__form-label--width');
        const filterRadioBtnHeight = document.querySelectorAll('.filter__form-label--height');
        const filterRadioBtnDiameter = document.querySelectorAll('.filter__form-label--diameter');
        const filterRadioBtnBrand = document.querySelectorAll('.filter__form-label--brand');
        const btnWidth = document.querySelector('.filter__btn-width');
        const btnHeight = document.querySelector('.filter__btn-height');
        const btnDiameter = document.querySelector('.filter__btn-diameter');
        const btnBrand = document.querySelector('.filter__btn-brand');
    
    
        const filterBox = document.querySelector('.filter__box');
        const filterBtn = document.querySelector('.filter__btn');
    
    
        const reviewsForm = document.querySelector('.reviews__form');
        const reviewsBtn = document.querySelector('.reviews__btn');
    
    
        document.addEventListener('click', (e) => {
            const target = e.target;
    
            if (target.classList.contains('filter__btn-width')) {
                e.preventDefault();
                btnWidth.classList.toggle('active');
                if (btnWidth.classList.contains('active')) {
                    showRadioBtn(filterRadioBtnWidth);
                } else {
                    hideRadioBtn(filterRadioBtnWidth);
                }
                resetHeight();
            }
            if (target.classList.contains('filter__btn-height')) {
                e.preventDefault();
                btnHeight.classList.toggle('active');
                if (btnHeight.classList.contains('active')) {
                    showRadioBtn(filterRadioBtnHeight);
                } else {
                    hideRadioBtn(filterRadioBtnHeight);
                }
                resetHeight();
            }
            if (target.classList.contains('filter__btn-diameter')) {
                e.preventDefault();
                btnDiameter.classList.toggle('active');
                if (btnDiameter.classList.contains('active')) {
                    showRadioBtn(filterRadioBtnDiameter);
                } else {
                    hideRadioBtn(filterRadioBtnDiameter);
                }
                resetHeight();
                
            }
            if (target.classList.contains('filter__btn-brand')) {
                e.preventDefault();
                btnBrand.classList.toggle('active');
                if (btnBrand.classList.contains('active')) {
                    showRadioBtnBrand();
                } else {
                    hideRadioBtnBrand();
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
    
    
    
        function hideRadioBtn(item) {
            for (let i = 0; i < item.length; i++) {
                if (i >= 6) {
                    item[i].classList.add('hide');
                    item[i].style.maxHeight = '0';
                }
            }
        }
    
        function showRadioBtn(item) {
            for (let i = 0; i < item.length; i++) {
                if (i >= 6) {
                    item[i].classList.remove('hide');
                    item[i].style.maxHeight = item[i].scrollHeight + "px";
                }
            }
        }
    
        function hideRadioBtnBrand() {
            for (let i = 0; i < filterRadioBtnBrand.length; i++) {
                if (i >= 4) {
                    filterRadioBtnBrand[i].classList.add('hide');
                    filterRadioBtnBrand[i].style.maxHeight = '0';
                }
            }
        }
    
        function showRadioBtnBrand() {
            for (let i = 0; i < filterRadioBtnBrand.length; i++) {
                if (i >= 4) {
                    filterRadioBtnBrand[i].classList.remove('hide');
                    filterRadioBtnBrand[i].style.maxHeight = filterRadioBtnBrand[i].scrollHeight + "px";
                }
            }
        }
    
        function hideItem(item) {
            item.style.maxHeight = '0';
            item.classList.add('hide');
        }
    
        
        function showItem(item) {
            item.style.maxHeight = item.scrollHeight + "px";
        } 
    
    
        function resetHeight() {
            filterBox.style.maxHeight = "";
    
            setTimeout(hideFilterBox, 500);
    
            function hideFilterBox() {
                filterBox.style.maxHeight = filterBox.scrollHeight + "px";
            }
        }
        
    
        try {
            hideRadioBtn(filterRadioBtnWidth);
            hideRadioBtn(filterRadioBtnHeight);
            hideRadioBtn(filterRadioBtnDiameter);
            hideRadioBtn(btnBrand);
            hideRadioBtnBrand();
            showItem(filterBox);
            window.addEventListener('resize', () => {
                showItem(filterBox);
            });
        } catch (e) {}
    
    
        try {
            hideItem(reviewsForm);
        } catch (e) {}
    
    
    
    
    }
    
    initAccordion();
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
    
    
    function initCart() {
        const basketWrapper = document.querySelector('.basket__shop-wrapper');
    
        function deleteProducts(productParent) {
            
        }
    
        basketWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart-basket__card-btn')) {
                deleteProducts(e.target.closest('.basket__card'));
            }
        });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* function initCart() {
    
        const cardsBtn = document.querySelectorAll('.card_btn');
        const basketShop = document.querySelector('.basket__shop');
        const basketQuantity = document.querySelectorAll('.basket__right-title_value');
        const fullPrice = document.querySelectorAll('.basket__total-value_sum');
    
        let price = 0;
    
    
    
        const randomId = () => {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };
    
    
        const priceWithoutSpaces = (str) => {
            return str.replace(/\s/g, '');
        };
    
        const normalPrice = (str) => {
            return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        };
    
        const plusFullPrice = (currentPrice) => {
            return price += currentPrice;
        };
    
        const minusFullPrice = (currentPrice) => {
            return price -= currentPrice;
        };
    
        const printFullPrice = () => {
            fullPrice.textContent = `${normalPrice(price)}`;
        };
    
        const printQuantity = () => {
            let length = basketShop.querySelector('.basket__shop-wrapper').children.length;
            basketQuantity.textContent = length;
        };
    
    
        const generateCardProduct = (img, title, price, id) => {
            return `
            
                                 <div class="basket__card" data-id='${id}'> 
                                    <button class="basket__card-btn"></button>
                                    <div class="basket__card-top">
                                        <img class="basket__card-img" src="${img}" alt="">
                                        <div class="basket__card-top_descr">
                                            <p class="basket__card-brand">${title}</p>
                                            <p class="basket__card-article">Eco 2 K435</p>
                                            <p class="basket__card-info">Летние 185/65 R15</p>
                                        </div>
                                    </div>
                                    <div class="basket__card-bottom">
                                        <div class="basket__card-descr">
                                            <div class="basket__card-box_value">
                                                <h4 class="basket__card-name">кол-во:</h4>
                                                <button class="basket__minus-btn">-</button>
                                                <div class="basket__card-value">4</div>
                                                <button class="basket__plus-btn">+</button>
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
        };
    
        cardsBtn.forEach(item => {
            item.closest('.card__item').setAttribute("data-id", randomId());
            item.addEventListener('click', (e) => {
                let self = e.currentTarget;
                let parent = self.closest('.card__item');
                let id = parent.dataset.id;
                let img = parent.querySelector('.card__img').getAttribute('src');
                let title = parent.querySelector('.card__brand').textContent;
                let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.card__price-value').textContent));
    
                console.log(priceNumber);
    
                plusFullPrice(priceNumber);
                printFullPrice();
                basketShop.querySelector('.basket__shop-wrapper').insertAdjacentHTML('afterbegin', generateCardProduct(img, title, priceNumber, id));
                printQuantity();
                self.disabled = true;
            });
        });
    
    }
    
    initCart();
     */

});