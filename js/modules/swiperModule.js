export default function swiperModule() {
  const partnerSwiper = new Swiper(".partner-inner .swiper", {
    loop: true,
    speed: 1000,
    autoplay: { delay: 5000 },
    navigation: {
      nextEl: ".partner-inner .swiper-next",
      prevEl: ".partner-inner .swiper-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const dataSwiper = new Swiper(".data-box .swiper", {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    effect: "fade",
    autoplay: { delay: 5000 },
    fadeEffect: { crossFade: true },
    pagination: {
      el: ".data-pagination",
      clickable: true,
    },
  });

  const swiperParent = new Swiper(".banner .swiper-parent", {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1200,
    autoplay: { delay: 5000, disableOnInteraction: false },
    effect: "fade",
    noSwiping: true,
    allowTouchMove: false,
    navigation: {
      nextEl: ".banner .swiper-next",
      prevEl: ".banner .swiper-prev",
    },
  });

  const swiperChild = new Swiper(".banner .swiper-child", {
    direction: "vertical",
    effect: "slide",
    speed: 1200,
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 1,
    noSwiping: false,
    allowTouchMove: false,
    navigation: {
      nextEl: ".banner .swiper-next-child",
      prevEl: ".banner .swiper-prev-child",
    },
  });

  const activate = new Swiper(".activate-swiper .swiper", {
    speed: 2000,
    loop: true,
    noSwiping: false,
    allowTouchMove: false,
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperTab = new Swiper(".tablist-1 .swiper-thumbs", {
    spaceBetween: 15,
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".tablist-1 .swiper-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiperTab,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperNested = new Swiper(".tablist-1 .swiper-nested", {
    spaceBetween: 15,
    slidesPerView: "auto",
    nested: true,
    freeMode: true,
  });

  var swiperTab = new Swiper(".tablist-2 .swiper-thumbs", {
    slidesPerView: 2,
    spaceBetween: 15,
    freeMode: true,
  });

  var swiper = new Swiper(".tablist-2 .swiper-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiperTab,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperNested = new Swiper(".tablist-2 .swiper-nested", {
    spaceBetween: 15,
    slidesPerView: "auto",
    nested: true,
    freeMode: true,
  });

  var swiperTab = new Swiper(".tablist-3 .swiper-thumbs", {
    spaceBetween: 15,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".tablist-3 .swiper-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiperTab,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperNested = new Swiper(".tablist-3 .swiper-nested", {
    spaceBetween: 15,
    slidesPerView: "auto",
    nested: true,
    freeMode: true,
  });

  const unitSwiper = new Swiper(".unit-swiper .swiper", {
    loop: true,
    speed: 1000,
    autoHeight: true,
    spaceBetween: 30,
    direction: "vertical",
    slidesPerView: "auto",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        noSwiping: false,
        allowTouchMove: false,
      },
      768: {},
    },
  });

  const disclosureSwiper = document.querySelectorAll(".tabGallery");

  if (disclosureSwiper) {
    // var y = getParameterByName("y");
    // var initIndex = 0;
    // if (y != "") {
    //   var arrY = $(".st-box-number");
    //   for (var i = 0; i < arrY.length; i++) {
    //     if ($(arrY[i]).data("year") == y) {
    //       initIndex = i;
    //       break;
    //     }
    //   }
    // }
    disclosureSwiper.forEach((item, i) => {
      const swiperMain = item.querySelector(".st-main-tab .swiper");
      const swiperThumb = item.querySelector(".st-disclosure-box .swiper");

      const itemThumbs = new Swiper(swiperThumb, {
        autoHeight: true,
        noSwiping: false,
        allowTouchMove: false,
        slidesPerView: 6,
        spaceBetween: 15,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".tabGallery .swiper-button-next",
          prevEl: ".tabGallery .swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1201: {
            slidesPerView: 6,
          },
        },
      });

      const itemMain = new Swiper(swiperMain, {
        autoHeight: true,
        noSwiping: false,
        allowTouchMove: false,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        // initialSlide: initIndex,
        effect: "fade",
        fadeEffect: { crossFade: true },
        grabCursor: true,
        thumbs: { swiper: itemThumbs },
      });
    });
  }

  const blogSwiper = new Swiper(".blog-swiper .swiper", {
    speed: 1200,
    slidesPerView: 1,
    spaceBetween: 30,
    noSwiping: false,
    allowTouchMove: false,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: ".blog-swiper .swiper-button-next",
      prevEl: ".blog-swiper .swiper-button-prev",
    },
  });

  const sercuritySwiper = new Swiper(".ser-container .swiper", {
    loop: true,
    speed: 1200,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: { crossFade: true },
    navigation: {
      nextEl: ".ser-container .swiper-button-next",
      prevEl: ".ser-container .swiper-button-prev",
    },
  });

  const projectSwiper = new Swiper(".project-swiper .swiper", {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-swiper .swiper-button-next",
      prevEl: ".project-swiper .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const projectImgSwiper = new Swiper(".project-swiper-img .swiper", {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    navigation: {
      nextEl: ".project-swiper-img .swiper-button-next",
      prevEl: ".project-swiper-img .swiper-button-prev",
    },
  });
}
