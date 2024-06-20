    
  var swiper = new Swiper('.slide-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
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
              slidesPerView: 5,
          },
      },
  });

  var swiper = new Swiper('.movies__carousel', {
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
      768: {
          slidesPerView: 4,
      },
      992: {
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

  var swiper = new Swiper('.carousel__movies__animation', {
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
      768: {
          slidesPerView: 4,
      },
      992: {
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

  var swiper = new Swiper('.carousel__movies__aventure', {
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
      768: {
          slidesPerView: 4,
      },
      992: {
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
  
  var swiper = new Swiper('.carousel__movies__comedia', {
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
      768: {
          slidesPerView: 4,
      },
      992: {
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

  var swiper = new Swiper('.carousel__movies__series', {
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
      768: {
          slidesPerView: 4,
      },
      992: {
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

  const video__thumbs = document.querySelectorAll(".thumbvideo");

  video__thumbs.forEach(thumbvideo => {
    thumbvideo.addEventListener("mouseover", function () {
        this.play();
        this.style.opacity = '1';
        setTimeout(() => {
            this.style.opacity = '0'
        }, 4000)
    });
  });

  video__thumbs.forEach(thumbvideo => {
    thumbvideo.addEventListener("mouseleave", function () {
        this.pause();
        this.style.opacity = '0';
        this.load();
    });
  });


  video__thumbs.forEach(thumbvideo => {
    thumbvideo.addEventListener("touchstart", function () {
        this.play();
        this.style.opacity = '1';
        setTimeout(() => {
            this.style.opacity = '0'
        }, 4000)
    });
  });

  video__thumbs.forEach(thumbvideo => {
    thumbvideo.addEventListener("touchend", function () {
        this.pause();
        this.style.opacity = '0';
        this.load();
    });
  });