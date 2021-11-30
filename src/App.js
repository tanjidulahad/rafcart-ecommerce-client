import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Shop from './Pages/Shop/Shop';
import Footer from './components/Footer/Footer';
import SingleProductDetails from './Pages/SingleProductDetails/SingleProductDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Account from './components/Account/Account';
import Checkout from './components/Checkout/Checkout';
import ProfileInformation from './components/ProfileInformation/ProfileInformation';
import ManageAccount from './components/ManageAccount/ManageAccount';
import WishList from './components/WishList/WishList';
import AuthProvider from './context/AuthProvider/AuthProvider';
import RequireAuth from './context/RequireAuth/RequireAuth';
import Cart from './Pages/Cart/Cart';
import OrderComplete from './Pages/OrderComplete/OrderComplete';

function App() {
  return (
    <div>
      
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myaccount" element={<RequireAuth><Account /></RequireAuth>} >
            <Route path="profileinfo" element={<ProfileInformation />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/:price" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/singleproductdetails/:id" element={<SingleProductDetails />} />
          <Route path="/ordercomplete" element={<OrderComplete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </Router>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
