import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@iconscout/unicons/css/line.css'; 
import '../styles/SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <div className="form signup">
      <span className="title">Registration</span>
      <form>
        <div className="input-field">
          <input type="text" placeholder="Enter your name" required />
          <i className="uil uil-user icon"></i>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter your email" required />
          <i className="uil uil-envelope icon"></i>
        </div>
        <div className="input-field">
          <input
            type={showPassword ? "text" : "password"}
            className="password"
            placeholder="Create a password"
            required
          />
          <i className="uil uil-lock icon"></i>
          <i
            className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"} showHidePw`}
            onClick={toggleShowPassword}
          ></i>
        </div>
        <div className="input-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="password"
            placeholder="Confirm a password"
            required
          />
          <i className="uil uil-lock icon"></i>
          <i
            className={`uil ${showConfirmPassword ? "uil-eye" : "uil-eye-slash"} showHidePw`}
            onClick={toggleShowConfirmPassword}
          ></i>
        </div>
        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="termCon" />
            <label htmlFor="termCon" className="text">I accepted all terms and conditions</label>
          </div>
        </div>
        <div className="input-field button">
          <input type="button" value="Signup" />
        </div>
      </form>
      <div className="login-signup">
        <span className="text">Already a member?
          <a href="" className="text login-link" onClick={() => navigate('/login')}>Login Now</a>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
