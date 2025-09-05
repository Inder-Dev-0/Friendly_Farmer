import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import CustomerSupport from './pages/CustomerSupport.jsx';
import Home from './pages/Home.jsx';
import ToolsRentalPage from './pages/ToolsRentalPage.jsx';
import SuppliesPage from './pages/SuppliesPage.jsx';
import PartsPage from './pages/PartsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CropListingPage from './pages/CropListingPage.jsx';
import FarmerProfile from './pages/FarmerProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/customer-support", element: <CustomerSupport /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/tools", element: <ToolsRentalPage /> },
      { path: "/supplies", element: <SuppliesPage /> },
      { path: "/parts", element: <PartsPage /> },
      { path: "/crops", element: <CropListingPage /> },
      { path: "/profile", element: <FarmerProfile /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
