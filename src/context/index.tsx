// all custom providers
import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
