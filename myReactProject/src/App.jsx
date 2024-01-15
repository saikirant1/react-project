import {createBrowserRouter, createRoutesFromElements, RouterProvider,Routes,BrowserRouter,Route} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import Products from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import Home from './components/Home.jsx';
import NavBarPannel from './components/NavBarPannel';

function App() {

  return (
    <Fragment>
<div className='App'>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NavBarPannel />} />
        </Route>
      </Routes>
    </BrowserRouter>



</div>

  </Fragment>
  )
}

export default App