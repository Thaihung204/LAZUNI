import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ForgetPassword } from './pages/ForgetPassword';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { HomePage } from './pages/HomePage';
import { Profile } from './pages/Profile';
import { EnterOtp } from './components/EnterOtp';
import { NewPassword } from './components/NewPassword';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail';
import { ShopVendors } from './components/ShopVendors';
import { Products } from './pages/Products';
import { LayoutDefault } from './components/layouts/LayoutDefault';
import { UploadProduct } from './components/UploadProduct';
import { ManageProducts } from './pages/ManageProducts';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path='/' element={<HomePage />} />
          <Route path='profile' element={<Profile />} />
         
          <Route path='newpassword' element={<NewPassword />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products'>
            <Route index element={<Products />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path='users'>
            <Route index element={<HomePage />} />
            <Route path=":userId" element={<ShopVendors />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="manageproducts" element={<ManageProducts />} />
        <Route path="UploadProduct" element={<UploadProduct/>} />
        <Route path="adminpage" element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
