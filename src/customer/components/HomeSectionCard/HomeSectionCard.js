import React from 'react';

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[10rem] mx-4">
      <div className='h-[14rem] w-[8rem]'>
        <img className="overflow-hidden object-cover object-top w-full h-full" src={product.image} alt='' />
      </div>

      <div className='p-4'>
        <h2 className='text-lg font-medium text-black'>{product.brand}</h2>
        <p className='mt-3 text-sm text-gray-600'>{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
