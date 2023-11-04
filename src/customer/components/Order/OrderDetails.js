import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracer from './OrderTracer'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
    <div>
      <h1 className=' font-bold text-xl py-7'>
        Delivery Adress
      </h1>
      <AdressCard/>

    </div>
    <div className='py-20'>
      <OrderTracer activeStep={3}/>
    </div>
    <Grid container className='space-y-5'>
    {[1,1,11,1,1,].map((item)=><Grid item container className=' shadow-xl rounded-md pd-5 borde'
    sx={{alignItems:"center",justifyContent:'space-between'}}
    >

      <Grid item sx={6}>
   <div className='flex items-center space-x-2 cursor-pointer'> 
            <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim2.flixcart.com/image/612/612/xif0q/dress/p/y/g/l-7354-tandul-original-imagufs5uhhscq8q.jpeg?q=70' alt='loading..'/>
            <div className='ml-5 space-y-2'>
                <p className=' font-semibold'>Men Slim fit Shirt</p>
                <p className=' space-x-5 opacity-50 text-xs font-semibold'>color : Black<span>Size : L</span></p>
                <p>Seller:Univers</p>
                <p>₹ 99999</p>
            </div>
        </div>
        </Grid>
        
        <Grid item>
        <Box sx={{
          color:deepPurple[500]
        }
        }>
          <StarBorderIcon sx={{fontSize:"2rem"}}  className='px-2 text-5xl'/>
          <span>Rate & Review Product</span>
        </Box>

        </Grid>
    </Grid>
    )}
    </Grid>
        
    </div>

  )
}

export default OrderDetails