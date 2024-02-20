"use client";

import { useRouter } from "next/navigation";

import Input from "@/app/components/Input";
import Back from "@/app/ui/Back";
import Button from "@/app/components/Button";
import { OnboardForm } from "@/app/components/Form";
import { useEffect, useState } from "react";
import { useUserContext } from "@/contexts/UserContext/UserContext";

const Onboard = () => {
  const router = useRouter();

  const [Username, setUsername] = useState("");

  const {
    userState: { user, isLoggedIn, isLoading, isError },
    dispatchUser,
  } = useUserContext();

  useEffect(() => {
    if (!user) {
      router.push("/auth/register");
    } else {
      if (user.username) {
        router.push("/");
      }
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="mx-auto max-w-xl px-4">
      <Back />
      <h1 className="text-4xl font-normal py-8 font-comfortaa">
        Choose username
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="@username"
          className="mb-4"
          onChange={(e) => setUsername(e.target.value)}
          value={Username}
        />

        <button
          className={`w-full p-[18px] rounded-md bg-black text-white font-roboto disabled:opacity-80 font-extrabold text-sm hover:opacity-80 transition-smooth`}
        >
          SET USERNAME
        </button>
      </form>
      <p className="pt-8">
        By signing up, you agree to Photo's Terms of Service and Privacy Policy.
      </p>
    </main>
  );
};

export default Onboard;
