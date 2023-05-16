// all custom providers
import React, { ReactNode } from "react";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./auth-context";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#0052CC" } }}>
      <AuthProvider>{children}</AuthProvider>
    </ConfigProvider>
  );
};

export default AppProviders;
