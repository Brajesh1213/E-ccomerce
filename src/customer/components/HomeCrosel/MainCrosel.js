import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCroselData } from './MainCarasolData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

    // {console.log(MainCroselData);}
    
   


const MainCrosel = () => {
    
    const items = MainCroselData.map((item) => <img className="cursor-pointer -z-10" role="presentation" src={item.image} alt=""/>)
console.log(items);

   return (
    <div>
   <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        // responsive={responsive}
        // controlsStrategy="alternate"
    />
    </div>
    )
   };
export default MainCrosel;
