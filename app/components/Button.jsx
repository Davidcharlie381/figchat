"use client";

import { useAlertContext } from "@/contexts/AlertContext/AlertContext";

export default function Button({ onClick, children, className, black, text }) {


  // const { alertState, dispatchAlert } = useAlertContext();

  const handleClick = () => {
    
  }

  return (
    <button
      className={`font-roboto disabled:opacity-80 font-extrabold text-sm hover:opacity-80 transition-smooth ${
        black
          ? "bg-white text-black border-2 border-black"
          : "bg-black text-white"
      } ${className}`}
      // disabled={pending}
      onClick={onClick}
    >
      {/* {pending ? "Loading..." : text} */}
      {children}
    </button>
  );
}
