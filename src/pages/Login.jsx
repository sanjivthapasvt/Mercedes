import React, { useState } from 'react';
import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <title>Login</title>
      <link rel="stylesheet" href="Login.css" />
      <div className="container">
        <form name="login" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}

export default Login;
