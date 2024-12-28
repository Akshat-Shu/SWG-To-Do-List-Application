import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import './login.css'


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/users/signup', { email, password });
      localStorage.setItem('token', data.token);  
      alert('Signup successful!');
      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed!');
    }
  };

  return (
    <div className="login-container">
        <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
         <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
        
       
        <button type="submit" className="login-button">Signup</button>
      </form>
      <div className="create-new">
            <a href="/"> Already have an account?</a>
        </div>
    </div>
  );
};

export default Signup;