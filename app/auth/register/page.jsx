import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Input from "@/app/components/Input";
import Back from "@/app/ui/Back";
import Button from "@/app/components/Button";
import { RegisterForm } from "@/app/components/Form";

const Register = async () => {
  const userCookie = cookies().get("user");


  if (userCookie && userCookie.value) {
    const user = userCookie ? JSON.parse(userCookie?.value) : null;

    if (user?.username) {
      redirect("/");
    }
    redirect("/auth/onboarding");
  }

  return (
    <main className="mx-auto max-w-xl px-4">
      <Back />
      <h1 className="text-4xl font-normal py-8 font-comfortaa">Register</h1>
      <RegisterForm page="register">
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          className="mb-4"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-5"
        />
        <Button text="NEXT" className="w-full p-[18px] rounded-md" />
      </RegisterForm>
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
