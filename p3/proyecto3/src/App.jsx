import React from 'react';
import './App.css';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Products from "./views/Products";
import ProductDetails from "./views/ProductDetails";
import NotFound from "./views/NotFound";
import Layout from './views/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductComments from "./components/ProductComments";
import ProductRatings from "./components/ProductRatings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />}>
            <Route path="comments" element={<ProductComments />} />
            <Route path="ratings" element={<ProductRatings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
