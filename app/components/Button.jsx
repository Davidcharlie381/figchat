"use client";

import { useFormStatus } from "react-dom";

export default function Button({ className, black, text }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`font-roboto disabled:opacity-80 font-extrabold text-sm hover:opacity-80 transition-smooth ${
        black
          ? "bg-white text-black border-2 border-black"
          : "bg-black text-white"
      } ${className}`}
      disabled={pending}
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
