import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/fk-p-flap/460/280/image/f72d5530e0d6a737.jpeg?q=20"
          />
        </div>
        <div className="ml-5  space-y-1">
          <p className="font-semibolt">Men's full sleeve shirt</p>
          <p className="opacity-70 ">size:L white</p>
          <p className="opacity-70 mt-2 ">Seller: Univers</p>
          <div className="flex space-x-5 items-center text-lg pt-4 lg:text-xl  mt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold ">5%off</p>
          </div>
        </div>
        
      </div>



      <div className="lg:flex  flex-cols items-center lg:space-x-10 pt-4">
            <div className="flex items-center lg:space-x-2">
            <IconButton sx={{color:"red"}}>
            <RemoveCircleOutlineIcon/>
            </IconButton>
            <span className="py-1 px-7 rounded-sm">3</span>
            <IconButton sx={{color:"indigo"}} >
            <AddCircleOutlineIcon/>
            </IconButton>
            

            </div>
            <div>
                <Button  sx={{color:"indigo"}}>Remove</Button>
            </div>
        </div>


    </div>
  );
};

export default CartItem;
