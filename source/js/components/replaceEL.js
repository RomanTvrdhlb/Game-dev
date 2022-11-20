let mobileParrent = document.querySelector('.mobile-nav');
let desktopParrent = document.querySelector('.header-nav');
let breakpoint = 1024;
const currentElements = [...document.querySelectorAll('.header-nav__item')];

const replaceElements = (elements, parentDesktop, parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function(element){
    if (containerWidth <= breakpoint) {
      parentMobile.insertAdjacentElement('beforeend', element);
    };
    if (containerWidth > breakpoint) {
      parentDesktop.insertAdjacentElement('afterbegin', element);
    }
  })
}

window.addEventListener('resize', () => {
  replaceElements(currentElements, desktopParrent, mobileParrent);
});
window.addEventListener('DOMContentLoaded', () => {
  replaceElements(currentElements, desktopParrent, mobileParrent);
});




