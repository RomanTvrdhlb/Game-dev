export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  header: document.querySelector("header"),
  game: document.querySelector(".main-game__inner"),
  items: [...document.querySelectorAll("[data-tooltip-text]")],
  lift: document.querySelector('[data-lift]'),
  headerItems: [...document.querySelectorAll('.header-nav__item')],
  buttons: [...document.querySelectorAll('.header-nav__btn')],
  sliders: [...document.querySelectorAll('.header-slider')],
  btn: document.querySelector('.search-btn'),
  searchForm: document.querySelector('.header-nav__form'),
  burger: document.querySelector('.burger'),
  mobileMenu: document.querySelector('.mobile-menu'),

}




