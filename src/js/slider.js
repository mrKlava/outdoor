"use strict"

/* slider */
const swiper = new Swiper('.swiper', {
    // general
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // breakpoints
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        }
    },
    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});