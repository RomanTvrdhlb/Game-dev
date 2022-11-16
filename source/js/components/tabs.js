import { removeClassInArray, addCustomClass, addClassInArray, toggleCustomClass} from "../functions/customFunctions";

const tabParents = [...document.querySelectorAll('[data-tabs-parrent]')];
tabParents.map((tabParent) => {
  if(tabParent) {
    const tabNav = [...tabParent.querySelectorAll("[data-tab]")];
    const tabContent = [...tabParent.querySelectorAll("[data-tab-content]")];

    tabNav.map((nav) => {
      nav.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTabAttr = e.target.getAttribute("data-tab");
       
        if (activeTabAttr === 'default'){
          addClassInArray([...tabParent.querySelectorAll('[data-tab-content]')], 'active');
          removeClassInArray(tabNav, 'active');
          addCustomClass(tabParent.querySelector("[data-tab='default']"), 'active')
          
        } else{    
          removeClassInArray(tabNav, 'active');
          removeClassInArray(tabContent, 'active');
          addCustomClass(tabParent.querySelector(`[data-tab="${activeTabAttr}"]`),'active');
          addClassInArray([...tabParent.querySelectorAll(`[data-tab-content="${activeTabAttr}"]`)], 'active');
        } 
           removeClassInArray(tabNav, 'active');
           addCustomClass(tabParent.querySelector(`[data-tab="${activeTabAttr}"]`), 'active');
      });
    });
  }
});

const headerItems = [...document.querySelectorAll('.header-nav__item')];
  const buttons = [...document.querySelectorAll('.header-nav__btn')];
  const sliders = [...document.querySelectorAll('.header-slider')];

headerItems.forEach(function (headerItem) {
  const button = headerItem.querySelector('.header-nav__btn');
  const slider = headerItem.querySelector('.header-slider');
      
            button.addEventListener('click', function(e) {
              // console.log(e.target);
                if (this.classList.contains('active')) {
                  removeClassInArray(buttons, 'active');
                  removeClassInArray(sliders, 'active');
                } else {
                  removeClassInArray(buttons, 'active');
                  removeClassInArray(sliders, 'active');
                  addCustomClass(this, 'active');
                  addCustomClass(slider, 'active');
                }
            })
            document.addEventListener('click',function(e){
              console.log(e.target);
            })

});

// const btnParents = document.querySelectorAll('.header-nav__item');

// btnParents.forEach(function (btnParent) {
//     const btns = btnParent.querySelectorAll('.header-nav__btn');
//     btns.forEach(function(btn){
//         btn.addEventListener('click', function(active = 'active') {
//             if (this.classList.contains('active')) {
//                 btns.forEach(function(item){item.classList.remove('active')});
         
//             } else {
//                 btns.forEach(function(item){item.classList.remove('active')})
//                 this.classList.add('active')
//             }
//         })
//     });
// });

