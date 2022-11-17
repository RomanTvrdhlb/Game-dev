import { removeClassInArray, addCustomClass, removeCustomClass, addClassInArray, toggleCustomClass} from "../functions/customFunctions";

const btn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.header-nav__form');
if (btn) {
    btn.addEventListener('click', function(e){
     toggleCustomClass(btn, 'active')
     toggleCustomClass(searchForm, 'active')

    });
}