//Importing required files
import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Car from "./pages/Cars";
import CarSlider from "./pages/Slider.jsx";
import image1 from "./assets/slider1.webp";
import image2 from "./assets/slider2.webp";
import image3 from "./assets/slider3.webp";
import image4 from "./assets/slider4.webp";
import image5 from "./assets/slider5.webp";
import image6 from "./assets/slider6.webp";

function App() {
//For enabling dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

//For login and signup
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const handleLoginClick = () => setShowLogin(!showLogin);
  const handleSignupClick = () => setShowSignup(!showSignup);

//for image in slider
  const images = [
    {
      imgSrc: image1,
      imgAlt: "img-1",
    },
    {
      imgSrc: image2,
      imgAlt: "img-2",
    },
    {
      imgSrc: image3,
      imgAlt: "img-3",
    },
    {
      imgSrc: image4,
      imgAlt: "img-4",
    },
    {
      imgSrc: image5,
      imgAlt: "img-5",
    },
    {
      imgSrc: image6,
      imgAlt: "img-6",
    },
  ];

  //Display main page
  return (
    <>
  <div className="top">
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignupClick}>SignUp</button>
      </div>

      <div className="forms-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {showLogin && <Login />}
        {showSignup && <Signup />}
      </div>
      <div className="Mode">
        <button onClick={handleToggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="App">
        <CarSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgSrc} alt={image.imgAlt} />;
          })}
        </CarSlider>
      </div>
      <Car />

    </>
  );
}

export default App;
