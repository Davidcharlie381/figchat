"use client";

import { useFormState } from "react-dom";
import { create } from "@/app/lib/actions";
import Alert from "./Alert";
import { useState, useEffect } from "react";

export default function Form({ children }) {
  const [showMessage, setShowMessage] = useState(false);
  const [state, formAction] = useFormState(create, null);

  useEffect(() => {
    if (state?.message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [state]);

  return (
    <form action={formAction}>
      {children}
      {showMessage && <Alert type={state?.type} message={state?.message} />}
    </form>
  );
}
