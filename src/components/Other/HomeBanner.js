import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import '../../assets/css/style.css'
export const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically moves to the next slide
    speed: 3000, // Duration of transition between slides (1 second)
    autoplaySpeed: 8000, 
    cssEase: "linear",
   
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="h-[450px]">
          <img src={slide} className="object-cover" alt={`Slide ${index + 1}`} /> {/* Added alt attribute for accessibility */}
        </div>
      ))}
    </Slider>
  );
};
