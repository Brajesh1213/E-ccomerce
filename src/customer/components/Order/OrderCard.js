import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'

const OrderCard = () => {
  return (
    <div className=' p-5 shadow-md shadow-gray-700 hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item  xs={6}>

        <div className='flex cursor-pointer'> 
            <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim2.flixcart.com/image/612/612/xif0q/dress/p/y/g/l-7354-tandul-original-imagufs5uhhscq8q.jpeg?q=70' alt='loading..'/>
            <div className='ml-5 space-y-2'>
                <p >Men Slim fit Shirt</p>
                <p className=' opacity-50 text-xs font-semibold'>Size:M</p>
                <p className=' opacity-50 text-xs font-semibold'>color:Black</p>
            </div>
        </div>

        </Grid>


        <Grid item xs={2}>₹999</Grid>


        <Grid item xs={4}>
           {true &&<div> <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm '/>

                <span>Delivered on March 03</span>
                </p>
                <p className=' text-xs '>Your item has been Delivered</p>

                </div>
            }
           { false &&
                <p>
                    <span>Expected Delivery On Mar 03</span>
                </p>
           }
            
        </Grid>


        </Grid>
    </div>
  )
}

export default OrderCard