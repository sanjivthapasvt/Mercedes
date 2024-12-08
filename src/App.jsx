import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Car1 from './assets/1.webp'
import Car2 from './assets/2.webp'
import Car3 from './assets/3.webp'
import Car4 from './assets/4.webp'
import Car5 from './assets/5.webp'
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
  
  const car1 = {
    name: 'Mercedes-Benz A-Class Limousine',
    image: Car1,
    open: () => {
      window.open(
      'https://www.carwale.com/mercedes-benz-cars/a-class-limousine/', 
      '_blank'
    );
    },
  };

  const car2 = {
    name:'Mercedes-Benz Maybach S-Class',
    image: Car2,
    open: ()=> {
      window.open(
        'https://www.carwale.com/mercedes-benz-cars/maybach-s-class/',
        '_blank'
      );
    },
  };
  const car3 = {
    name:'Mercedes-Benz C-Class',
    image:Car3,
    open: () => {
        window.open(
          'https://www.carwale.com/mercedes-benz-cars/c-class/',
          '_blank'
        );
    },
  };

  const car4={
    name:'Mercedes-Benz E-Class',
    image: Car4,
    open: ()=>{
        window.open(
          'https://www.carwale.com/mercedes-benz-cars/e-class/',
          '_blank'
        );
    },
  };

  const car5={
    name:'Mercedes-Benz G-Class',
    image: Car5,
    open: ()=>{
      window.open(
        'https://www.carwale.com/mercedes-benz-cars/g-class/',
        '_blank'
    );
    },
  };
  return (
    <>
      <button onClick={Click}>
        <p>You clicked {count} times</p>
      </button>
      {!showLogin ? (
        <>
          <div className='top'>
          <h1>Mercedes</h1>
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={Signup}>Sign Up</button>
          </div>
          <div className='carimage'>
            <center>
              <img
                src="https://mercedes-benz-mauritius.com/assets/img/new-home/GLA2.jpg"
                alt="Mercedes"
                height={300}
                />
            </center>
          </div>
        </>
      ) : (
        <Login />
      )}

      <div className='CarList'>
        <h2>1. {car1.name}</h2>
          <img
              className='Car'
              src={car1.image}
              alt={'Photo of ' + car1.name}
              height={350}
              onClick={car1.open}
              style={{cursor: 'pointer'}}
        />
  
        <h2> 2. {car2.name}</h2>
        <img
              className='Car'
              src={car2.image}
              alt={"Photo of " + car2.name}
              height={350}
              onClick={car2.open}
              style={{cursor: 'pointer'}}
        />
        
        <h2>3. {car3.name}</h2>
        <img 
          className='Car'
          src={car3.image}
          alt={'Photo of ' + car3.name}
          height={350}
          onClick={car3.open}
          style={{cursor: 'pointer'}}
        />

        <h2>4. {car4.name}</h2>
              <img 
                className='Car'
                src={car4.image}
                alt={'Photo of ' + car4.name}
                height={350}
                onClick={car4.open}
                style={{cursor: 'pointer'}}
              />

        <h2>5. {car5.name}</h2>
              <img 
                className='Car'
                src={car5.image}
                alt={'Photo of ' + car5.name}
                height={350}
                onClick={car5.open}
                style={{cursor: 'pointer'}}
              />
      </div>
    </>
  );
}

export default App;
