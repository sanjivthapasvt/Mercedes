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

//Array of Images
const images = [
  image1,image2,image3,image4,image5,image6
];

//For Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

//For previous Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}

//Main function for image slider
function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const images = [
    image1,image2,image3,image4,image5,image6
  ];

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "90%", height: "auto" }} />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default ImageSlider;