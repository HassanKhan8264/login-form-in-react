// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img from "./bg.jpg";
import faceboook from "./faceboook.png"
import twitter from "./twitter.png"

const Login = () => {
  return (
    <div className="body">
      <div className="left">
        <img src={img} alt="bg"></img>
      </div>
      <div className="right">
        <div className="login">
          <div className="heading">
            <h1>Login To Continue</h1>
          </div>
          <div>
            <input type="text" name="email" placeholder="Email"></input>
          </div>
          <div>
            <input  type="password" name="pass" placeholder="password"></input>
          </div>
          <div className="remember">
            <div className="check-box">
              <div className="check"></div>
              <label >
                Remember me
              </label>
            </div>
            <div>

              <label>
                Forgot Password?
              </label>
            </div>
          </div>
            <div className="button-login">
             Login
            </div>
            <div className="sign">
                or sign or using
            </div>

            <div className="icon">
                <img src={faceboook} alt="facebook"></img>
                <img src={twitter} alt="twitter"></img>
            </div>
          
          </div>
        </div>
      </div>
  );
};
ReactDOM.render(<Login />, document.querySelector("#root"));
