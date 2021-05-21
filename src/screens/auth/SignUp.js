import React, { useState } from "react";
import loginImg from "./images/login.svg";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/AuthActions";
import { useHistory } from "react-router-dom";
function SignUp({ switchMode }) {
  const inisialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(inisialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="base-container">
        <div className="header">Register</div>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="firstName">firstName</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="firsname"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">LastName</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">confirmPassword</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              SignUp
            </button>
            <button className="btn" onClick={switchMode}>
              switch mode
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
