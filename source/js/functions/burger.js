import { getHeaderHeight } from '../functions/header-height';
import vars from '../_vars';

import {toggleCustomClass,removeCustomClass} from '../functions/customFunctions'

const {overlay,burger,mobileMenu,btn,searchForm} = vars;


const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.addEventListener('click', function(){
    toggleCustomClass(mobileMenu, 'active');
    toggleCustomClass(burger, 'active');
    toggleCustomClass(overlay, 'active');
    toggleCustomClass(overlay, 'overlay--mode');
    toggleCustomClass(vars.bodyEl, 'fixed');
    removeCustomClass(btn, 'active')
    removeCustomClass(searchForm, 'active')
    getHeaderHeight();
  })
}

export const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu, 'active');
    removeCustomClass(burger, 'active');
    removeCustomClass(overlay, 'active');
    removeCustomClass(overlay, 'overlay--mode');
    removeCustomClass(vars.bodyEl, 'fixed');
}


if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  overlay.addEventListener('click', function(e){
    if (e.target.classList.contains('overlay')) {
      hideMenuHandler(overlay,mobileMenu,burger)
    }
  });
  
}







