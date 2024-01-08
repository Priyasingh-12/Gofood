import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./signup.css";

const Signup = () => {

  const [credentials,setCredentials] = useState({
   name: "", email: "", password: "",geolocation: ""
  })

  const [users,setUsers] = useState({
     email: "", password: ""
   })

  const [formPositions, setFormPositions] = useState({
    loginLeft: "50px",
    registerLeft: "450px",
    buttonLeft: "0px",
  });

  const [activeForm, setActiveForm] = useState("login");

  const toggleForm = (formType) => {
    const newFormPositions =
      formType === "login"
        ? { loginLeft: "50px", registerLeft: "450px", buttonLeft: "0px" }
        : { loginLeft: "-400px", registerLeft: "50px", buttonLeft: "110px" };

    setFormPositions(newFormPositions);
    setActiveForm(formType);
  };
// ===============================signup============================
const handleSubmit = async(e) => {
      e.preventDefault();
      
      const res = await fetch("http://localhost:8000/api/createuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation
    }),

  });
  const data = await res.json();
  console.log(data); // it returns the user success message
  
  if(!data.success){
    setCredentials("Enter valid Credentials");
  }
  
}    
// ========================================login=======================
    const eventSubmit = async(e) => {
      e.preventDefault();
      
      const res = await fetch("http://localhost:8000/api/createuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
email:users.email, password:users.password
    }),

  });
  const data = await res.json();
  console.log(data); // it returns the user success message
  
  if(!data.success){
    setUsers("Enter valid Creds");
  }
    }
// ==============================
const changeInput = (event) => {
console.log(event);
const { name, value } = event.target;
setCredentials((preval) => (
    { ...preval, [name]: value, }
));
}

const changeData = (event) => {
  console.log(event);
  const { name, value } = event.target;
  setUsers((preval) => (
      { ...preval, [name]: value, }
  ));
  }

  return (
    <>
      <div className="contained-box">
        <div className="form-box">
          <div className="button-box" >
          <div id="btn" style={{ left: formPositions.buttonLeft }}></div>

          <button
          type="button"
          className={`toggle-btn ${activeForm === "login" ? "active" : ""}`}
          onClick={() => toggleForm("login")}>
          Log In
        </button>

        <button
        type="button" id="up"
        className={`toggle-btn ${
          activeForm === "register" ? "active" : ""
        }`}
        onClick={() => toggleForm("register")}>
        Signup
      </button>
          </div>
    
           <form id="login" className={`input-groups ${activeForm === "login" ? "active" : ""}`}
            style={{ left: formPositions.loginLeft }} onSubmit={eventSubmit}>

            <h3>Login Form</h3>
            <input
              type="email"
              className="input-field"
              placeholder="Email" required
              name="email" value={users.email}
              onChange={changeData} />
              
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>

            <input
              type="Password"
              className="input-field"
              placeholder="Password" required
              name="password" value={users.password}
              onChange={changeData}  />

            <input type="checkbox" className="check-box" />
            <span>
            Remember Password
            </span>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>

          <form id="register" className={`input-groups ${
            activeForm === "register" ? "active" : ""
          }`} style={{ left: formPositions.registerLeft }} onSubmit={handleSubmit}>

          <h3>Signup Form</h3>

              <input
                type="text"  className="input-field"
                placeholder="Name" required
                name="name" value={credentials.name}
                onChange={changeInput}
              />
    
              <input
                type="email"
                className="input-field"
                placeholder="Email" required
                name="email" value={credentials.email}
                onChange={changeInput}
              />
          
              <input
                type="password"
                className="input-field"
                placeholder="Password" required
                name="password" value={credentials.password}
                onChange={changeInput}
              />
              <input
              type="text"
              className="input-field"
              placeholder="Address" required
              name="geolocation" value={credentials.geolocation}
              onChange={changeInput}
            />
        
              <input type="checkbox" className="check-box" />
              <span>
                I agree to the <a href="#" className="terms">Terms and Services</a>
              </span>
              <button type="submit" className="submit-btn">
                Signup
              </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
