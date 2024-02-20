"use client";
import { createContext, useContext, useReducer } from "react";
import { userReducer } from "./userReducer";

export const UserContext = createContext(null);

const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userReducer, {
    user:
      // typeof window !== undefined
      //   ? JSON.parse(localStorage.getItem("user")) || null
      //   : null,
      null,
    isLoggedIn: false,
    isLoading: false,
    isError: false,
  });

  return <Provider value={{ userState, dispatchUser }}>{children}</Provider>;
};

export function useUserContext() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("User context must only be used within its provider");
  }

  return userContext;
}

export default UserProvider;
