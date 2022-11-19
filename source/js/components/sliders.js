import Swiper from '../vendor/swiper';

const smallSlider = new Swiper('.small-slider__container', {
  slidesPerView: 'auto',
  spaceBetween: 19.5,
  observer: true,
  observeParents: true,
  freemode: true,
  navigation: {
    prevEl:'.small-slider__prev',
    nextEl: '.small-slider__next',
  },
  breakpoints: {
    // mobile - 320-576px
    300: {
      spaceBetween:6,
    },
    // tablet - 576-2560px
    576: {
      spaceBetween: 19.5,
    },
  }

});
const hiddenSliders = [...document.querySelectorAll('.header-slider__container')]; 
  hiddenSliders.map(function(slider){
    const headerSwiper = new Swiper (slider, {
      slidesPerView: 'auto',
      spaceBetween: 8,
      observer: true,
      observeParents: true,
      freemode: true,

      navigation: {
        prevEl:'.header-slider__prev',
        nextEl: '.header-slider__next',
      },
    });
  })

const mainSwiper = new Swiper('.main-slider__container', {
  slidesPerView: 'auto',
  spaceBetween: 8.5,
  observer: true,
  observeParents: true,
  freemode: true,

  navigation: {
    prevEl:'.main-slider__prev',
    nextEl: '.main-slider__next',
  },
});

const singleSwiper = new Swiper('.single-slider__container', {
  slidesPerView: 'auto',
  spaceBetween: 8.5,
  observer: true,
  observeParents: true,
  freemode: true,

  navigation: {
    prevEl:'.single-slider__prev',
    nextEl: '.single-slider__next',
  },
});


