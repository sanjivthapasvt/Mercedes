import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Car from "./pages/Cars";
import CarSlider from "./pages/Slider.jsx";
import image1 from "./assets/slider1.webp";
import image2 from "./assets/slider2.webp";
import image3 from "./assets/slider3.webp";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);


  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => setShowLogin(!showLogin);
  const handleSignupClick = () => setShowSignup(!showSignup);


  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

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
  ];

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
