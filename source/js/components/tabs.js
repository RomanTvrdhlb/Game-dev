import { removeClassInArray, addCustomClass, addClassInArray } from "../functions/customFunctions";

const tabParents = [...document.querySelectorAll('[data-tabs-parrent]')];
tabParents.map((tabParent) => {
  if(tabParent) {
    const tabNav = [...tabParent.querySelectorAll("[data-tab]")];
    const tabContent = [...tabParent.querySelectorAll("[data-tab-content]")];

    tabNav.map((nav) => {
      nav.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTabAttr = e.target.getAttribute("data-tab");
       
        if (activeTabAttr === 'All'){
          addClassInArray([...tabParent.querySelectorAll('[data-tab-content]')], 'active');
          removeClassInArray(tabNav, 'active');
          addCustomClass(tabParent.querySelector("[data-tab='All']"), 'active')
          
        } else{    
          removeClassInArray(tabNav, 'active');
          removeClassInArray(tabContent, 'active');
          addCustomClass(tabParent.querySelector(`[data-tab="${activeTabAttr}"]`),'active');
          addClassInArray([...tabParent.querySelectorAll(`[data-tab-content="${activeTabAttr}"]`)], 'active');
          console.log('123')
        } 
           removeClassInArray(tabNav, 'active');
           addCustomClass(tabParent.querySelector(`[data-tab="${activeTabAttr}"]`), 'active');
      });
    });
  }
});