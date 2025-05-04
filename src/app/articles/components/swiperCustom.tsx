import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Import Pagination module
import "swiper/css";
import "swiper/css/pagination"; // Import Pagination styles
import "./custom_swiper.css";
import Card from "./card";
import React from "react";

const SwiperCustom: React.FC<CategoryIdentifier> = ({ id, name }) => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Your data

  return (
    <Swiper
      slidesPerView={"auto"} // Show 3 slides at onces
      spaceBetween={15}
      pagination={{
        clickable: true, // Allow clicking on dots to navigate
        dynamicBullets: true, // Dynamic pagination for many slides (optional)
      }}
      modules={[Pagination]} // Add Pagination module
      className="mySwiper w-full" // Optional: Add a custom class
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide} style={{ width: "auto" }}>
          <Card />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCustom;
