import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router";
const ProductCard = ({ Product }) => {
  const navigate=useNavigate();
  return (
    <div  onClick={()=>navigate(`product/${5}`)}
    className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={Product.image}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{Product.brand}</p>
          <p>{Product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{Product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{Product.price}</p>
          <p className="text-green-600 font-semibold">{Product.discountPersent}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
