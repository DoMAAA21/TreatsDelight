import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import HeaderLayout from './layouts/headeronly';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------
import StorePicker from './views/stores';
import CanteenMenu from './views/stores/cart';
import CanteenApp from './views/inventory';
import Dashboard from './views/dashboard';
import MenuSelection from './views/canteen/menuSelection';
import InventoryHistory from './views/inventory/history';
import Kiosk from './views/stores/kioskreceipt';
import ManageMenu from './views/manage';
import MenuScheduler from './views/manage/scheduleMenu';
import Reservation from './views/reservation';
import AnalyticsPage from './views/analytics';
import UserDashboard from './views/dashboard/userDashboard';
import ReservationReceipt from './views/stores/reservationReceipt';
import DeliveryReceipt from './views/stores/deliveryReceipt';
import RecommendationApp from './views/recommendations';
import ExpenseManagementApp from './views/expensesmanager';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <Dashboard /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },    
        { path: 'menu', element: <CanteenMenu /> },
        { path: 'inventory', element: <CanteenApp /> },
        { path: 'manage', element: <MenuSelection /> },
        { path: 'history', element: <InventoryHistory /> },
        { path: 'manage-menu', element: <ManageMenu /> },
        { path: 'schedule-menu', element: <MenuScheduler /> },
        { path: 'reservations', element: <Reservation /> },
        { path: 'analytics', element: <AnalyticsPage /> },
        { path: 'user-dashboard', element: <UserDashboard /> },
        { path: 'reservation-receipt', element: <ReservationReceipt /> },
        { path: 'delivery-receipt', element: <DeliveryReceipt /> },
        { path: 'stores', element: <StorePicker /> },
        { path: 'recommendations', element: <RecommendationApp /> },
        { path: 'expenses-manager', element: <ExpenseManagementApp /> },



      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      element: <HeaderLayout />,
      children: [
        { path: 'menu', element: <CanteenMenu /> },
        { path: 'kiosk', element: <Kiosk /> },
        { path: 'stores', element: <StorePicker /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
