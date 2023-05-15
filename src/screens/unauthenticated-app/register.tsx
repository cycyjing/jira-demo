import React, { FormEvent } from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "context/auth-context";

const Register = () => {
  const { register } = useAuth();
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
  //   const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
  //   register({ username, password });
  // };
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please enter username" }]}
      >
        <Input type="text" placeholder="Username" id="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter password" }]}
      >
        <Input type="password" placeholder="Password" id="password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
