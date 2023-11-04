import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../customer/pages/Homepage/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/footer/footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Product from '../customer/components/Product/Product'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        {/* <Cart/> */}
  {/* <Checkout/> */}
  {/* <Order/> */}
  {/* <OrderDetails/> */}
      {/* <Homepage/> */}
    {/* <ProductDetails/>       */}
      {/* <Product/> */}

            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/cart' element={<Cart/>}/>
                {/* <Route path='/pp' element={/> */}

                <Route path='/product/:productId' element={<ProductDetails/>}/>
                <Route path='/' element={<Homepage/>}/>
            </Routes>
            <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters