"use client";
import { createContext, useReducer, useState, useContext } from "react";
import { alertReducer } from "./alertReducer";

export const AlertContext = createContext(null);

const { Provider } = AlertContext;

const AlertProvider = ({ children }) => {
  const [alertState, dispatchAlert] = useReducer(alertReducer, {
    alert: null
  });

  return <Provider value={{ alertState, dispatchAlert }}>{children}</Provider>;
};

export function useAlertContext() {
  const alertContext = useContext(AlertContext);

  if (!alertContext) {
    throw new Error("Alert context must only be used within its provider");
  }

  return alertContext;
}

export default AlertProvider;
