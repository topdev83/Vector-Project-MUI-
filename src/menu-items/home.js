// assets
import { ReactComponent as homeSvg } from './icons/home.svg';

// icons
const icons = {
  homeSvg
};

// ==============================|| MENU ITEMS - Home ||============================== //

const home = {
  id: 'group-home',
  type: 'group',
  children: [
    {
      id: 'home',
      type: 'item',
      icon: icons.homeSvg,
      url: '/'
    }
  ]
};

export default home;
