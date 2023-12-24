"use client";

import { useFormState } from "react-dom";
import { create, createUsername, login } from "@/app/lib/actions";
import Alert from "./Alert";
import { useState, useEffect } from "react";

export default function Form({ children, page }) {
  
  const [showMessage, setShowMessage] = useState(false);
  const [registerState, registerFormAction] = useFormState(create, null);
  const [loginState, loginFormAction] = useFormState(login, null);

  useEffect(() => {
    if (registerState?.message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [registerState]);

  useEffect(() => {
    if (loginState?.message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [loginState]);

  return (
    <form
      action={`${page === "register" ? registerFormAction : loginFormAction}`}
      // action={loginFormAction}
    >
      {children}
      {showMessage && (
        <Alert type={registerState?.type || loginState?.type} message={registerState?.message || loginState?.message} />
      )}
    </form>
  );
}

export function RegisterForm({ children }) {
  
  const [showMessage, setShowMessage] = useState(false);
  const [registerState, registerFormAction] = useFormState(create, null);

  useEffect(() => {
    if (registerState?.message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [registerState]);

  return (
    <form
      action={registerFormAction}
    >
      {children}
      {showMessage && (
        <Alert type={registerState?.type} message={registerState?.message} />
      )}
    </form>
  );
}

export function LoginForm({ children }) {
  
  const [showMessage, setShowMessage] = useState(false);
  const [loginState, loginFormAction] = useFormState(login, null);

  useEffect(() => {
    if (loginState?.message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [loginState]);

  return (
    <form
      action={loginFormAction}
    >
      {children}
      {showMessage && (
        <Alert type={loginState?.type} message={loginState?.message} />
      )}
    </form>
  );
}

export function OnboardForm({ children }) {
  
  const [showMessage, setShowMessage] = useState(false);
  const [loginState, loginFormAction] = useFormState(createUsername, null);

  useEffect(() => {
    if (loginState?.message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [loginState]);

  return (
    <form
      action={loginFormAction}
    >
      {children}
      {showMessage && (
        <Alert type={loginState?.type} message={loginState?.message} />
      )}
    </form>
  );
}
