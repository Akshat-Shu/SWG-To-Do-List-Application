import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/users/', { email, password });
      localStorage.setItem('token', data.token);  
      alert('Login successful!');
      navigate('/home');  
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed!');
    }
  };

  return (
    <div className="login-container">
    <h2 className=''>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="form-group">
                {/* <label for="password">Password</label> */}
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
            <button type="submit" className="login-button">Login</button>
      </form>
      <div className="create-new">
            <a href="/signup"> Create new account</a>
        </div>
    </div>
  );
};

export default Login;
