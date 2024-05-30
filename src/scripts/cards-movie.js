    
  var swiper = new Swiper('.slide-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      centerSlide: "true",
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: false,
      },
  
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          600: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
          },
          1080: {
              slidesPerView: 4,
          },
      },
  });

  var swiper = new Swiper('.card-slide-container', {
    slidesPerView: 7,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centerSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      400: {
          slidesPerView: 2,
      },
      600: {
          slidesPerView: 3,
      },
      820: {
          slidesPerView: 4,
      },
      1164: {
          slidesPerView: 5,
      },
      1260: {
          slidesPerView: 6,
      },
      1300: {
          slidesPerView: 7,
      },
    },
  });

  var swiper = new Swiper('.card-slide-container-animation', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centerSlide: true,

    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      400: {
          slidesPerView: 2,
      },
      600: {
          slidesPerView: 3,
      },
      820: {
          slidesPerView: 4,
      },
      1164: {
          slidesPerView: 5,
      },
      1260: {
          slidesPerView: 6,
      },
      1300: {
          slidesPerView: 7,
      },
    },
  });

  var swiper = new Swiper('.card-slide-container-aventure', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centerSlide: true,

    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      400: {
          slidesPerView: 2,
      },
      600: {
          slidesPerView: 3,
      },
      820: {
          slidesPerView: 4,
      },
      1164: {
          slidesPerView: 5,
      },
      1260: {
          slidesPerView: 6,
      },
      1300: {
          slidesPerView: 7,
      },
    },
  });
  
  var swiper = new Swiper('.card-slide-container-comedia', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centerSlide: true,

    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      400: {
          slidesPerView: 2,
      },
      600: {
          slidesPerView: 3,
      },
      820: {
          slidesPerView: 4,
      },
      1164: {
          slidesPerView: 5,
      },
      1260: {
          slidesPerView: 6,
      },
      1300: {
          slidesPerView: 7,
      },
    },
  });

  var swiper = new Swiper('.card-slide-container-series', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centerSlide: true,

    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      400: {
          slidesPerView: 2,
      },
      600: {
          slidesPerView: 3,
      },
      820: {
          slidesPerView: 4,
      },
      1164: {
          slidesPerView: 5,
      },
      1260: {
          slidesPerView: 6,
      },
      1300: {
          slidesPerView: 7,
      },
    },
  });

  const video__thumbs = document.querySelectorAll(".thumb-video");

  video__thumbs.forEach((video__thumb) => {
    video__thumb.addEventListener("mouseover", function () {
      this.style.opacity = 1;
      this.play();

       setTimeout(() => {
         video__thumb.style.opacity = 0;
       }, 4000);
    });
  });

  video__thumbs.forEach((video__thumb) => {
    video__thumb.addEventListener("mouseleave", function () {
      this.style.opacity = 0;
      this.load();
    });
  });