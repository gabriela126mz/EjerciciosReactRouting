import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Products from "./views/Products";  
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
