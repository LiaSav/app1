const swiper = new Swiper('.third-section__slider', {
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    // 1024: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   autoHeight: false,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
      autoHeight: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 20,
      autoHeight: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});