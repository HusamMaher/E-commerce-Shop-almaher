import React, { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import "./auth.css";
function Auth() {
  const [isLoginMode, setisLogInMode] = useState(false);

  const switchMode = () => {
    setisLogInMode((prvMode) => !prvMode);
  };
  return (
    <div>
      {isLoginMode ? (
        <Login switchMode={switchMode} />
      ) : (
        <SignUp switchMode={switchMode} />
      )}
    </div>
  );
}

export default Auth;
