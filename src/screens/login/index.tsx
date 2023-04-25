import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const LoginScreen = () => {
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={submitHandle} onClick={submitHandle}>
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

export default LoginScreen;
