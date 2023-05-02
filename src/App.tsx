import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import UnauthenticatedApp from "screens/unauthenticated-app";
import AuthenticatedApp from "screens/authenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {/* <TsReactTest/> */}
    </div>
  );
}

export default App;
