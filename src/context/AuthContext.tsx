import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";
import * as auth from "auth-provider";
import { User } from "prototype";

const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

interface AuthForm {
  username: string;
  password: string;
}

export const AuthProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // point free
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  // const register = (form:AuthForm) => auth.asyncRegister(form).then(user=>setUser(user))
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return <AuthContext.Provider value={{ user, register, login, logout }} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used in AuthProvider");
  }
  return context;
};
