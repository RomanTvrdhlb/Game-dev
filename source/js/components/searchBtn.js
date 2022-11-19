import { removeClassInArray, addCustomClass, removeCustomClass, addClassInArray, toggleCustomClass} from "../functions/customFunctions";
import vars from '../_vars';

const {btn,searchForm} = vars;

if (btn) {
    btn.addEventListener('click', function(e){
     toggleCustomClass(btn, 'active')
     toggleCustomClass(searchForm, 'active')
    });
}