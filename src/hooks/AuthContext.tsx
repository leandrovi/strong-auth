import * as React from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextData {
  setAuthInfo: () => void;
  isAuthenticated: boolean;
}

const COOKIE_NAME = "strong-conference-access";
const DOMAIN = ".movimentoflores.com.br";

const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);

  function setAuthInfo() {
    setCookie(COOKIE_NAME, true, {
      path: "/",
      maxAge: 10800000,
      domain: DOMAIN,
    });
    setCookie(COOKIE_NAME, true, {
      path: "/",
      maxAge: 10800000,
      domain: "localhost",
    });
  }

  return (
    <AuthContext.Provider
      value={{
        setAuthInfo,
        isAuthenticated: !!cookie[COOKIE_NAME],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth needs a Context Provider implemented");
  }

  return context;
}
