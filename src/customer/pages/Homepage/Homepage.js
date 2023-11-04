import React from 'react'
import MainCrosel from '../../components/HomeCrosel/MainCrosel'
import HomesectionCarosel from '../../components/HomeSectinCarosel/HomesectionCarosel'
import kurtaPage1 from '../../components/data/men/kurta'
import { mensShoesPage1 } from '../../components/data/Shoes/shoes' 
import { gounsPage1 } from '../../components/data/Gouns/gouns'
const Homepage = () => {
    
  return (
    <div>
<MainCrosel/>
<div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
<HomesectionCarosel data={kurtaPage1} sectionName={"Men's Kurta"} />
<HomesectionCarosel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
<HomesectionCarosel data={gounsPage1} sectionName={"Men's Shirt"}/>
<HomesectionCarosel data={kurtaPage1} sectionName={"Women's Shree"}/>
<HomesectionCarosel data={kurtaPage1} sectionName={"Women's Dress"}/>
 
</div>

    </div>
  )
}

export default Homepage