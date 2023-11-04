import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import Homepage from './customer/pages/Homepage/Homepage'
import Footer from './customer/components/footer/footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/Checkout/Checkout'
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails'
import { Route, Routes } from 'react-router'
import CustomerRouters from './Routers/CustomerRouters'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<CustomerRouters/>}/>
    </Routes>
  <div>
  {/* <Cart/> */}
  {/* <Checkout/> */}
  {/* <Order/> */}
  {/* <OrderDetails/> */}
      {/* <Homepage/> */}
    {/* <ProductDetails/>       */}
      {/* <Product/> */}
      </div>
      <Footer/>

    </div>

  )
}

export default App