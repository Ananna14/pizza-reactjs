import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/About/About';
import Products from './Pages/Home/Products/Products';
import NotFound from './Pages/Home/NotFound/NotFound';
import Dashbord from './Pages/Home/Dashbord/Dashbord';
import Nav from './Pages/Home/Nav/Nav';
import Admin from './Pages/Admin/Admin';
import AddProduct from './Pages/AddProduct/AddProduct';
import SingleProducts from './Pages/SingleProducts/SingleProducts';
import Cart from './Pages/Cart/Cart';
import Footer from './Pages/Footer/Footer';
import { CartContext } from './Pages/Cart/CartContext/CartContext';
import { useEffect, useState } from 'react';
import Login from './Pages/Login/Login';


function App() {

  const [cart, setCart] = useState({});
  // Fetch from local storage
  useEffect(()=>{
    const cart =  window.localStorage.getItem('cart');
    setCart(JSON.parse(cart))
    // console.log(JSON.parse(cart));

  }, [])

  useEffect(()=>{
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <BrowserRouter>
     <Nav></Nav>

     <CartContext.Provider value={{ cart, setCart }}>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="products" exact element={<Products />} />
      <Route path="products/:_id" element={<SingleProducts />} />
      <Route path="dashbord" element={<Dashbord />} />
      {/* <Route path="admin" element={<Admin />} /> */}
      <Route path="add" element={<AddProduct />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
     </CartContext.Provider>
 
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
