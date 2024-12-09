import React, { useState } from 'react';
import './Signup.css'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            minLength={8}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Signup;
