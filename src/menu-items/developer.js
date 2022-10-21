// assets
import { ReactComponent as vectorSvg } from './icons/vector.svg';

// icons
const icons = {
  vectorSvg
};

// ==============================|| MENU ITEMS - Vector ||============================== //

const developer = {
  id: 'group-developer',
  type: 'group',
  children: [
    {
      id: 'developer',
      type: 'item',
      icon: icons.vectorSvg,
      url: '/projects'
    }
  ]
};

export default developer;
