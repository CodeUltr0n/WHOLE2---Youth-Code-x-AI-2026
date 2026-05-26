import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext'; 
// import ProtectedRoute from './components/ProtectedRouteComponent'; 

import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

import Header from './components/header/index.jsx';
import Hero from './pages/Home/hero/hero.jsx';
import Traditions from './bottom/Traditions.jsx'; 
import Footer from './components/footer.jsx';

const CartPage = React.lazy(() => import('./features/customer-dashboard/components/CartPage'));
const ShopsPage = React.lazy(() => import('./pages/Shop'));
const AuthPage = React.lazy(() => import('./pages/Auth'));
const CategoriesPage = React.lazy(() => import('./pages/Categories'));
const SellerDashboard = React.lazy(() => import('./features/seller-dashboard'));
const CustomerDashboard = React.lazy(() => import('./features/customer-dashboard'));
const AddProductForm = React.lazy(() => import('./features/seller-dashboard/components/AddNewProduct'));
const ProductDetailPage = React.lazy(() => import('./components/ProductDetails'));
const CategoryDetails = React.lazy(() => import('./features/components/CategoriesDetails'));
const About = React.lazy(() => import('./pages/About'));
const EditCraft = React.lazy(() => import('./features/seller-dashboard/components/EditCraft'));
const CheckoutPage = React.lazy(() => import('./pages/Checkout'));
const OrderConfirmation = React.lazy(() => import('./components/orders/OrderConfirmation'));
const SupportPage = React.lazy(() => import('./pages/Support'));
const FAQPage = React.lazy(() => import('./pages/Support/FAQPage'));
const ShippingPage = React.lazy(() => import('./pages/Support/ShippingPage'));
const SellerSupportPage = React.lazy(() => import('./pages/Support/SellerSupportPage'));

// --- Placeholder components for other pages ---
// const About = () => <div className="container mx-auto p-8">About Page</div>;
// // const CustomerDashboard = () => <div className="container mx-auto p-8">Welcome, Customer!</div>;
// const SellerDashboard = () => <div className="container mx-auto p-8">Welcome, Seller!</div>;

// import { useAuth } from './context/AuthContext';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user } = useAuth();

//   if (!user?.token) return <Navigate to="/signin/customer" />;
//   if (!allowedRoles.includes(user.role)) return <Navigate to="/" />;
  
//   return children;
// };

const HomePage = () => (
  <>
    <Hero />
    {/* <FeaturedCrafts />  */}
    {/* <Traditions />  */}
  </>
);

const MobileOverlay = () => (
  <div className="fixed inset-0 z-[9999] bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center md:hidden">
    <div className="bg-[#FF4500] text-black font-extrabold px-3 py-1 rounded-[16px] text-xs tracking-widest mb-6 shadow-md">
      (WHOLE)²
    </div>
    <h2 className="text-2xl font-black mb-4">Desktop Experience Highly Recommended</h2>
    <p className="text-gray-300 mb-8 max-w-sm">
      Our AI-powered storefronts are optimized for desktop use. Switch to a larger screen to explore the full experience.
     </p>
    <button className="bg-white text-slate-900 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide text-sm shadow-xl w-full max-w-xs">
       Mobile Version Coming Soon
    </button>
  </div>
);

function App() {
  return (
    <>
      <MobileOverlay />
      <AuthProvider>
        <CartProvider>
          <Header />
          <main>
            <React.Suspense fallback={
              <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
              </div>
            }>
              <Routes>
                {/* --- Public Routes --- */}
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopsPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/shipping" element={<ShippingPage />} />
                <Route path="/seller-support" element={<SellerSupportPage />} />
                <Route path="/customer-dashboard/*" element={<CustomerDashboard/> } />
                <Route path='/seller-dashboard/*' element = {<SellerDashboard/>} /> 
                {/* <Route path="/signin" element={<AuthPage />} />
                <Route path="/signup" element={<AuthPage />} /> */}


                <Route path="/signin/customer" element={<AuthPage userType="customer" />} />
                <Route path="/signin/seller" element={<AuthPage userType="seller" />} />

                
                {/* --- Protected Routes (Temporarily Disabled) --- */}
                {/* To re-enable, just uncomment the <ProtectedRoute> wrapper. */}
                <Route 
                  path="/customer" 
                  element={
                    // <ProtectedRoute>
                      <CustomerDashboard />
                    //  </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/seller" 
                  element={
                    // <ProtectedRoute>
                      <SellerDashboard />
                    //  </ProtectedRoute>
                  } 
                />

                


                {/* 2. ADD THIS NEW PROTECTED ROUTE FOR THE FORM */}
                <Route
                  path="/seller-form"
                  element={
                    // <ProtectedRoute>
                      <AddProductForm />
                    /* </ProtectedRoute> */
                  }
                />

                <Route path="/edit-craft/:craftId" element={<EditCraft />} />

                {/* This route will match any URL like /product/prod_123, /product/abc, etc. */}
                <Route path="/shop/:productId" element={<ProductDetailPage />} />

                <Route path="/category/:categoryName" element={<CategoryDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
              </Routes>
            </React.Suspense>
          </main>
          <ToastContainer position="top-right" autoClose={2000} />
          <Footer />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;

