import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Car from './pages/Cars';
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
