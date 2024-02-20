"use client";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Input from "@/app/components/Input";
import Back from "@/app/ui/Back";
import Button from "@/app/components/Button";
import { LoginForm } from "@/app/components/Form";
import { useAlertContext } from "@/contexts/AlertContext/AlertContext";
import { useUserContext } from "@/contexts/UserContext/UserContext";

export default function Login() {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    userState: { user, isLoggedIn, isLoading, isError },
    dispatchUser,
  } = useUserContext();
  const { dispatchAlert } = useAlertContext();

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
      const res = await fetch(`${process.env.API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      console.log(res)

      const result = await res.json();

      if (res.ok) {
        dispatchUser({ type: "SET_USER", payload: result.data });
        // localStorage.setItem("user", JSON.stringify(result.data));
        dispatchAlert({
          type: "SHOW_ALERT",
          payload: { type: "success", message: result.message },
        });
        router.push("/");
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
      <h1 className="text-4xl font-normal py-8 font-comfortaa">Log in</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email address or Username"
          className="mb-4"
          value={FormData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-5"
          onChange={handleChange}
          value={FormData.password}
        />
        <Button
          type="submit"
          text="LOG IN"
          className="w-full p-[18px] rounded-md"
        >
          LOG IN
        </Button>
      </form>
      <p className="pt-8">
        Or{" "}
        <Link href="/auth/register" className="text-blue-700 hover:underline">
          create account
        </Link>
      </p>
    </main>
  );
}
