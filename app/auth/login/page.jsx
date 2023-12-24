import Link from "next/link";
import {cookies} from "next/headers"
import { redirect } from "next/navigation";

import Input from "@/app/components/Input";
import Back from "@/app/ui/Back";
import Button from "@/app/components/Button";
import { LoginForm } from "@/app/components/Form";

export default function Login() {

  const user = cookies().get("user");

  if (user) {
    redirect("/");
  }

  return (
    <main className="mx-auto max-w-xl px-4">
      <Back />
      <h1 className="text-4xl font-normal py-8 font-comfortaa">Log in</h1>
      <LoginForm>
        <Input
          type="email"
          name="email"
          placeholder="Email address or Username"
          className="mb-4"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-5"
        />
        <Button
          type="submit"
          text="LOG IN"
          className="w-full p-[18px] rounded-md"
        />
      </LoginForm>
      <p className="pt-8">
        Or{" "}
        <Link href="/auth/register" className="text-blue-700 hover:underline">
          create account
        </Link>
      </p>
    </main>
  );
}
