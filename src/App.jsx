//Importing required files
import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Car from "./pages/Cars";
import ImageSlider from "./pages/Slider.jsx";


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
      <ImageSlider/>
      <br/>
      <br/>
      <br/>
      <Car/>

    </>
  );
}

export default App;
