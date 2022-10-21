// assets
import { ReactComponent as dollarSvg } from './icons/dollar.svg';
// icons
const icons = {
  dollarSvg
};

// ==============================|| MENU ITEMS - Price ||============================== //

const price = {
  id: 'group-price',
  type: 'group',
  children: [
    {
      id: 'price',
      type: 'item',
      icon: icons.dollarSvg,
      url: '/statistics'
    }
  ]
};

export default price;
