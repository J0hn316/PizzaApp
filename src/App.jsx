import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import ErrorPage from './ui/ErrorPage';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';

import { action as createOrderAction } from './features/order/CreateOrder';
import { action as UpdateOrderAction } from './features/order/UpdateOrder';
import { loader as menuLoader } from './features/menu/Menu';
import { loader as orderLoader } from './features/order/Order';

// Making Routes this way since v6.4 and up of React-router-dom allows you to use new powerful APIs for data loaders actions and other features.
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <ErrorPage />,
        action: UpdateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
