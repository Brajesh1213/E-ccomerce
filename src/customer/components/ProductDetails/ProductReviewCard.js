import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
        <Grid item  xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56, bgcolor:"#9155fd"}}>
                    R
                </Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Ram</p>
                    <p className='opacity-70'>April 4 , 2034</p>
                </div>
            </div>
            <Rating value={4} name="half-rating" readOnly></Rating>
            <p > Infibeam Avenues stock price went up today, 10 Oct 2023, by 6.56 %. The stock closed </p>
        </Grid>

        </Grid>
    </div>
  )
}

export default ProductReviewCard