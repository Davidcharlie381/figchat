"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Input from "@/app/components/Input";
import Back from "@/app/ui/Back";
import Button from "@/app/components/Button";
import { useUserContext } from "@/contexts/UserContext/UserContext";
import { useAlertContext } from "@/contexts/AlertContext/AlertContext";

const Register = () => {
  const [FormData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const {
    userState: { user, isLoggedIn, isLoading, isError },
    dispatchUser,
  } = useUserContext();
  const { alertState, dispatchAlert } = useAlertContext();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.API_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      const result = await res.json();

      if (res.ok) {
        dispatchUser({ type: "SET_USER", payload: result.data });
        dispatchAlert({
          type: "SHOW_ALERT",
          payload: { type: "success", message: result.message },
        });
        router.push("/")
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.log(error);
      dispatchUser({ type: "SET_ERROR", payload: error.message });
      dispatchAlert({
        type: "SHOW_ALERT",
        payload: { type: "error", message: error.message },
      });
    }
  };

  return (
    <main className="mx-auto max-w-xl px-4">
      <Back />
      <h1 className="text-4xl font-normal py-8 font-comfortaa">Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          className="mb-4"
          value={FormData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="username"
          placeholder="Username"
          className="mb-4"
          value={FormData.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-5"
          value={FormData.password}
          onChange={handleChange}
        />

        <button
          className={`w-full p-[18px] rounded-md bg-black text-white font-roboto disabled:opacity-80 font-extrabold text-sm hover:opacity-80 transition-smooth`}
        >
          NEXT
        </button>
      </form>
      <p className="pt-8">
        Or{" "}
        <Link href="/auth/login" className="text-blue-700 hover:underline">
          log in
        </Link>
      </p>
    </main>
  );
};

export default Register;
