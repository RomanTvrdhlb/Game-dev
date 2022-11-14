import { addCustomClass,removeCustomClass } from "../functions/customFunctions";
import vars from '../_vars';

 const lift = document.querySelector('[data-lift]');
console.log(document.documentElement.scrollTop)
 if (lift) {
  let timeOut;

  let bodyHeight = document.documentElement.scrollTop;
  
  window.onscroll = function () {
    
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

  
    if (scrolled > bodyHeight - 300) {
      addCustomClass(lift, "show");
    } else {
      removeCustomClass(lift, "show");
    }
  }

  lift.addEventListener('click', function(){
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
      window.scrollBy(0,document.documentElement.scrollTop * -1);
    };
  })

 }


