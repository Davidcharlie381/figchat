"use client";

import { useAlertContext } from "@/contexts/AlertContext/AlertContext";
import clsx from "clsx";
import { useEffect } from "react";

export default function Alert() {
  const { alertState, dispatchAlert } = useAlertContext();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (alertState.alert) {
        dispatchAlert({ type: "HIDE_ALERT" });
      }
    }, 7000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alertState.alert]);

  const handleClose = () => {
    dispatchAlert({ type: "HIDE_ALERT" });
  };

  return (
    alertState.alert && (
      <div
        className={clsx(
          "fixed bottom-7 shadow-xl w-[343px] mx-auto left-1/2 translate-x-[-50%] p-5 rounded-xl text-white font-medium",
          {
            "bg-red-500": alertState.alert?.type === "error",
            "bg-green-500": alertState.alert?.type === "success",
            "bg-amber-500": alertState.alert?.type === "warning",
          }
        )}
      >
        <div className="flex justify-between items-center">
          <span>{alertState.alert?.message}</span>
          <span
            onClick={handleClose}
            className="text-lg hover:bg-gray-300/30 font-semibold rounded-lg grid place-content-center h-8 w-8"
          >
            &times;
          </span>
        </div>
      </div>
    )
  );
}
