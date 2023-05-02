import React, { FormEvent } from "react";
import { useAuth } from "context/auth-context";

const Login = () => {
  const { login } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
