import { createPopper, top, right, left} from '@popperjs/core';
import vars from '../_vars';

const {items} = vars;

function toolTipInit(items) {
 items.map(function(item){
    const itemsDataText = item.getAttribute('data-tooltip-text');
    const tooltip = document.createElement('span');
    tooltip.append(`${itemsDataText}`);
    item.append(tooltip);
    tooltip.setAttribute('data-tooltip', "");
    createPopper(item, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 2],
          },
        },
      ],
    });
  })
}

toolTipInit(items);