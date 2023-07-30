// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'home',
    path: '/dashboard/stores',
    icon: icon('ic_home'),
  },
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'inventory',
    path: '/dashboard/inventory',
    icon: icon('ic_inventory'),
  },
  {
    title: 'about',
    path: '/dashboard/about',
    icon: icon('ic_question'),
  },
 
  
];

export default navConfig;
