import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Car from './pages/Cars';
import Car0 from './assets/0.webp';
function App() {
  const [count, setCount]= useState(0);
  function Click(){
      setCount(count+1);
  };
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const Signup = ()=>{
    alert('Not ready yet!!');
  };

  return (
    <>
      <button onClick={Click}>
        <p>You clicked {count} times</p>
      </button>
      {!showLogin ? (
        <>
          <div className='top'>
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={Signup}>Sign Up</button>
          </div>
        </>
      ) : (
        <Login />
      )}
      <Car/>
    </>
  );
}

export default App;
