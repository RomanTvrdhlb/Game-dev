import { toggleCustomClass} from "../functions/customFunctions";
import { hideMenuHandler } from "../functions/burger";
import vars from '../_vars';


const {btn,searchForm,overlay,mobileMenu,burger} = vars;
const showSearchForm = function(button,hideBlock){
     toggleCustomClass(button, 'active');
     toggleCustomClass(hideBlock, 'active');
}

if (btn) {
    btn.addEventListener('click', function(e){
        showSearchForm(btn,searchForm);
        hideMenuHandler(overlay,mobileMenu,burger);
    });
}