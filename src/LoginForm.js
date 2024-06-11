// src/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://your-worker-url/api/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        alert('User registered successfully');
      } else {
        setErrorMessage('User already exists');
      }
    } catch (error) {
      setErrorMessage('User already exists');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-worker-url/api/register_login', {
        username,
        password,
      });

      if (response.status === 200) {
        alert(`Welcome ${username}`);
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="form-popup">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form id="login-form" onSubmit={handleLogin}>
        <h3>Login Here</h3>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default LoginForm;
