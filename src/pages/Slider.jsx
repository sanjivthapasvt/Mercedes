import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from'./../assets/slider1.webp'
import image2 from './../assets/slider2.webp'
import image3 from './../assets/slider3.webp'
import image4 from './../assets/slider4.webp'
import image5 from './../assets/slider5.webp'
import image6 from './../assets/slider6.webp'

const images = [
  image1,image2,image3,image4,image5,image6
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000, 
    arrows: true,
    nextArrow: <div style={{ fontSize: "2rem", color: "black", zIndex: 1 }}>➡</div>,
    prevArrow: <div style={{ fontSize: "2rem", color: "black", zIndex: 1 }}>⬅</div>,
  };


  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
