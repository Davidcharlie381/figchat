import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Input from "@/app/components/Input";
import Back from "@/app/ui/Back";
import Button from "@/app/components/Button";
import { OnboardForm } from "@/app/components/Form";

const Onboard = async () => {
  const userCookie = cookies().get("user");

  if (!userCookie) {
    redirect("/auth/register");
  } else if (userCookie && userCookie.value) {
    const user = JSON.parse(userCookie.value);

    if (user.username) {
      redirect("/");
    }
  }



  return (
    <main className="mx-auto max-w-xl px-4">
      <Back />
      <h1 className="text-4xl font-normal py-8 font-comfortaa">
        Choose username
      </h1>
      <OnboardForm page="register">
        <Input
          type="text"
          name="username"
          placeholder="@username"
          className="mb-4"
        />

        <Button text="SIGN UP" className="w-full p-[18px] rounded-md" />
      </OnboardForm>
      <p className="pt-8">
        By signing up, you agree to Photo's Terms of Service and Privacy Policy.
      </p>
    </main>
  );
};

export default Onboard;
