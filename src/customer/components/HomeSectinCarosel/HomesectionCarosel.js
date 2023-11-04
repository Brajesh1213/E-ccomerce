import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";

const HomesectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 3 },
    720: { items: 4 },
    1024: { items: 5},
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0,10).map((item) => (
    <HomeSectionCard product={item} key={item} /> // Added a unique key prop
  ));

  return (
    <div>
    <h2 className="text-2xl font-extrabold text-gray-800">{sectionName} </h2>
    <div className="px-4 lg:px-8 border border-black"> {/* Corrected the class name */}
      <div className="relative border p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          infinite
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

          <Button
          variant="contained" // Corrected the typo in variant
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            background: "#D2E0FB",
            borderRadius: "20px",
          }}
          onClick={slideNext} // Renamed the function to slideNext
          aria-label="next"
        >
          <ChevronRightIcon sx={{ color: "black", background: "white", borderRadius: "20px" }} />
        </Button>

        <Button
          variant="contained" // Corrected the typo in variant
          onClick={slidePrev}
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            background: "#D2E0FB",
            borderRadius: "20px",
          }}
          aria-label="previous" // Corrected the aria-label
        >
          <KeyboardArrowLeftIcon sx={{ color: "black", background: "white", borderRadius: "20px" }} />
        </Button>
       
      </div>
       
    </div>
    </div>
  );
};

export default HomesectionCarosel;
