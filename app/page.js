"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import { useUserContext } from "@/contexts/UserContext/UserContext";
import { useAlertContext } from "@/contexts/AlertContext/AlertContext";

export default function Home() {
  const { dispatchAlert } = useAlertContext();

  const {
    userState: { user },
    dispatchUser,
  } = useUserContext();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
      dispatchAlert({
        type: "SHOW_ALERT",
        payload: { type: "warning", message: "You must be logged in" },
      });
    }
  }, [user]);

  return (
    <>
      <Link
        className="block p-20 text-5xl font-bold text-center cursor-pointer"
        href="/m/feed"
      >
        feed
      </Link>
      <div className="mx-auto text-center flex justify-center gap-10 mb-5">
        <Link href="/auth/register">Register</Link>
        <Link href="/auth/login">Log in</Link>
      </div>
      <div className="flex justify-center">
        {user && (
          <Button
            onClick={() => dispatchUser({ type: "LOG_OUT" })}
            text="LOG OUT"
            className="w-4/5 mx-auto p-[18px] rounded-md"
          >
            LOG OUT
          </Button>
        )}
      </div>
    </>
  );
}
