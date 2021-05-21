import React, { useState, useEffect } from "react";
import loginImg from "./images/login.svg";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../../redux/actions/AuthActions";
function Login({ switchMode }) {
  const inisialState = {
    email: "",
    password: "",
  };
  const history = useHistory();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(inisialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    console.log("success", res);
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googlefailure = (error) => {
    console.log(error);
    console.log("googler Sign in was unsuccessfull , try Again");
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="base-container">
        <div className="header">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  type="email"
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
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
            <GoogleLogin
              clientId="568365196967-i1ecnnq7n7962i09j2he7doa55s4koc3.apps.googleusercontent.com"
              render={(renderProps) => (
                <button className="btn" onClick={renderProps.onClick}>
                  Sign in with googles
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googlefailure}
              cookiePolicy="single_host_origin"
            />
          </div>
          <div className="btn-login">
            <button
              className="btn"
              style={{ width: "20rem", marginTop: "3px" }}
              onClick={switchMode}
            >
              Switch Mode
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
