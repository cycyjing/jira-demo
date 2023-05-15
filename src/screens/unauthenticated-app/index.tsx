import React, { useState } from "react";
import { Card, Button } from "antd";
import Login from "./login";
import Register from "./register";

const UnauthorizedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Card>
      {isRegister ? <Register /> : <Login />}
      <Button onClick={() => setIsRegister(!isRegister)}>
        Jump to {isRegister ? "Login" : "Register"}
      </Button>
    </Card>
  );
};

export default UnauthorizedApp;
