import React from 'react'
import AdressCard from '../components/AdressCard/AdressCard'
import { Button, Divider } from '@mui/material'
import CartItem from '../components/Cart/CartItem'

const OrderSummery = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-md border'>
        <AdressCard/>

        </div>



        <div >
    <div className='lg:grid grid-cols-3  relative'>
    <div className=' col-span-2'>
    {[1,2,3.4].map((item)=><CartItem/>)}
    </div>
    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
      <div className='border'>


      <p className=' uppercase font-bold opacity-60 pb-4'>price details</p>
      <Divider></Divider>
      <hr/>
      <div  className=' mb-3space-y-3 font-semibold '>
      <div className='flex justify-between pt-3 text-black'>
        <span>
        price
        </span>
        <span className=' text-green-600'>₹12354</span>
        
      </div>
      <div className='flex justify-between pt-3 text-black'>
        <span>
        Discount
        </span>
        <span className=' text-green-600'>-₹1000</span>
        
      </div>
      <div className='flex justify-between pt-3 text-black'>
        <span>
          delivery Charge 
        </span>
        <span className=' text-green-600'>free</span>

      </div>
      <div className='flex justify-between pt-3 text-black'>
        <span>
          Total Amount
        </span>
        <span className=' text-green-600'>₹11354</span>

      </div>

      </div>
      <Button  className='w-full mr-3 ml-3 ' variant="contained" sx={{px:"2.5rem",py:"0.7rem",my:"1rem",bgcolor:"#9155fd" }}>
                checkout
               </Button>
      </div>
   
    </div>
   


    </div>

    



   
    

    </div>




    </div>
  )
}

export default OrderSummery