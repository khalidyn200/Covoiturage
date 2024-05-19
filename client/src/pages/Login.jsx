import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="form login">
      <span className="title">Login</span>
      <form>
        <div className="input-field">
          <input type="text" placeholder="Enter your email" required />
          <i className="uil uil-envelope icon"></i>
        </div>
        <div className="input-field">
          <input type={showPassword ? "text" : "password"} className="password" placeholder="Enter your password" required />
          <i className="uil uil-lock icon"></i>
          <i className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"} showHidePw`} onClick={toggleShowPassword}></i>
        </div>
        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="logCheck" />
            <label htmlFor="logCheck" className="text">Remember me</label>
          </div>
          <a href="#" className="text">Forgot password?</a>
        </div>
        <div className="input-field button">
          <input type="button" value="Login" />
        </div>
      </form>
      <div className="login-signup">
        <span className="text">Not a member?
          <a href="" className="text signup-link" onClick={() => navigate('/signup')}>Signup Now</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
