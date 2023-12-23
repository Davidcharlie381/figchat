import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {

  redirect("/auth/register")

  return (
    <Link
      className="block p-20 text-5xl font-bold text-center cursor-pointer"
      href="/m/feed"
    >
      Comfortaa
    </Link>
  );
}
