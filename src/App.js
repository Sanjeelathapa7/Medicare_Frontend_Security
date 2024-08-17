


import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Timer from './pages/Timer';
import SendEmail from './pages/user/Email';
import ForgotPasswordCode from './pages/user/Forgotpassword';
import ResetPassword from './pages/user/Resetpassword';


//router bhitra multiple routes huncha
//routes bhitra single single routes create garne
//element ko lagi diff file garauna parcha ani yeta ayera connect garne

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import Navbar from './components/Navbar';
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import UserDashboard from './pages/user/UserDashboard';
import HomePage from './pages/user/Homepage';
import Contact from './pages/user/Contact';
import ProductDetails from './pages/user/ProductDetails';
import Profile from './pages/user/Profile';
import EditProfile from './pages/user/EditProfile';
import AddToCart from './pages/user/AddToCart';
import OrdersPage from './pages/user/Orders';
import AddToFavorites from './pages/user/Favorite';
import Home from './pages/user/Home';

// import AdminRoutes from './pages/protected_routes/AdminRoutes';

function App() {
  return (

    <Router>
    
      <ToastContainer />
      <Routes>


        <Route path='/sendemail' element={<SendEmail />} />
        <Route path='/resetcode' element={<ForgotPasswordCode />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/timer' element={<Timer />} />
        {/* Admin routes */}
        {/* <Route element={<AdminRoutes />}> */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/edit/:id' element={<AdminEditProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/user/homepage' element={<HomePage />} />
        <Route path='/user/contact' element={<Contact />} />
        <Route path="/user/productDetails/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/user/cart" element={<AddToCart />} />
        <Route path="/user/orders" element={<OrdersPage />} />
        <Route path="/user/favorites" element={<AddToFavorites />} />

        <Route path="/home" element={<Home />} />





      </Routes>






    </Router>

  );
}

export default App;
