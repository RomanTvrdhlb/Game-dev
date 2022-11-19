import { removeClassInArray, addCustomClass, removeCustomClass, addClassInArray, toggleCustomClass} from "../functions/customFunctions";
import vars from "../_vars";

  const {overlay,headerItems,buttons,sliders} = vars;

if (overlay) {

    headerItems.forEach(function (headerItem) {
        const button = headerItem.querySelector('.header-nav__btn');
        const slider = headerItem.querySelector('.header-slider');
            
          button.addEventListener('click', function(e) {
              if (this.classList.contains('active')) {
                  removeClassInArray(buttons, 'active');
                  removeClassInArray(sliders, 'active');
                  removeCustomClass(overlay, 'active');
              } else {
                  removeClassInArray(buttons, 'active');
                  removeClassInArray(sliders, 'active');
                  removeCustomClass(overlay, 'active');
                  addCustomClass(this, 'active');
                  addCustomClass(slider, 'active');
                  addCustomClass(overlay, 'active');
              }
          })
      });

    overlay.addEventListener('click', function(e){
      if (e.target.classList.contains('overlay')) {
        removeClassInArray(buttons, 'active');
        removeClassInArray(sliders, 'active');
        removeCustomClass(overlay, 'active');
      }
    });
}  