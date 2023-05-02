import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

const UnauthorizedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <Register /> : <Login />}
      <button onClick={() => setIsRegister(!isRegister)}>
        Jump to {isRegister ? "Login" : "Register"}
      </button>
    </div>
  );
};

export default UnauthorizedApp;
