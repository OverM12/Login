import React from "react";
import Image from 'next/image'; 
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="camera-icon">
          <Image
            src="/login-1.png" 
            alt="Camera"
            width={60}
            height={60}
          />
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
            </label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
