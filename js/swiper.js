const swiper = new Swiper('.third-section__slider', {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        enabled: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        enabled: false,
      },
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        enabled: false,
      },
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        enabled: false,
      },
    },
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  autoHeight: false,
  loop: true,
  grabCursor: true,
});
