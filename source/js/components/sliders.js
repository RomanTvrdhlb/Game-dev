import Swiper from '../vendor/swiper';


// for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
//   if (mobileSlider) {
//     (function () {
//       "use strict";

//       const breakpoint = window.matchMedia("(min-width:1240px)");
//       let slider;

//       const enableSwiper = function () {
//         slider = new Swiper(mobileSlider, {
//           slidesPerView: 'auto',
//           slidesPerColumn: 3,
//           slidesPerColumnFill: "row",
//           spaceBetween: 20,
//           freeMode: true,
//           observer: true,
//           observeParents: true
//         });
//       };

//       const breakpointChecker = function () {
//         if (breakpoint.matches === true) {
//           if (slider !== undefined) slider.destroy(true, true);

//           return;
//         } else if (breakpoint.matches === false) {
//           return enableSwiper();
//         }
//       };

//       breakpoint.addListener(breakpointChecker);
//       breakpointChecker();
//     })();
//   }

// }

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

});

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

// let test = document.querySelector('.about-swiper');

// if (test) {
//   const aboutSwiper = new Swiper(test, {
//     spaceBetween: 10,
//     loopedSlides: 4,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//      loop: true,
//      pagination: {
//           el: ".swiper-pagination",
//           type: "fraction",
//         },
  
//   });
//   const subSwiper = new Swiper('.sub-swiper', {
//     spaceBetween: 40,
//     slidesPerView: "auto",
//     touchRatio: 0.2,
//     slideToClickedSlide: true,
//     loop: true,
//     loopedSlides: 4,
  
//   });
//   subSwiper.controller.control = aboutSwiper;
//   aboutSwiper.controller.control = subSwiper;
// }




