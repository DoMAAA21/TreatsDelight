// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

// const navConfig = [
//   {
//     title: 'home',
//     path: '/stores',
//     icon: icon('ic_home'),
//   },
//   {
//     title: 'dashboard',
//     path: '/dashboard/app',
//     icon: icon('ic_analytics'),
//   },
//   {
//     title: 'inventory',
//     path: '/dashboard/inventory',
//     icon: icon('ic_inventory'),
//   },
//   {
//     title: 'analytics',
//     path: '/dashboard/analytics',
//     icon: icon('ic_charts'),
//   },
//   {
//     title: 'about',
//     path: '/dashboard/about',
//     icon: icon('ic_question'),
//   },
 
  
// ];

const navConfig = [
  {
    title: 'home',
    path: '/dashboard/user-dashboard',
    icon: icon('ic_home'),
  },
  {
    title: 'analytics',
    path: '/dashboard/analytics',
    icon: icon('ic_charts'),
  },
  {
    title: 'about',
    path: '/dashboard/about',
    icon: icon('ic_question'),
  },
 
  
];



export default navConfig;
