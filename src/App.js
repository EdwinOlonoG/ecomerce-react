import { createContext, useState } from 'react';
import './App.css';
import Home from './home/home.component';
import Login from './Login/Login.component';
import Products from './products/Products.component';
function App() {

  return (
    <>
        <Home />
        <Login />
        <Products />
    </>
  )
}

export default App;
