import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Button from "./components/Button";
import { revalidatePath } from "next/cache";

export default function Home() {
  const user = cookies().get("user");

  if (!user) {
    redirect("/auth/register");
  }

  const logout = async () => {
    "use server"
    cookies().delete("user")
    redirect("/auth/register")
    revalidatePath("/")
  }

  return (
    <>
      <Link
        className="block p-20 text-5xl font-bold text-center cursor-pointer"
        href="/m/feed"
      >
        feed
      </Link>
      <Link href="/auth/register">Register</Link>
      <Link href="/auth/login">Log in</Link>
      <form action={logout}>
        <Button text="LOG OUT" className="w-full p-[18px] rounded-md" />
      </form>
    </>
  );
}
