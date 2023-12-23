import Heading from "@/app/components/Heading";
import Link from "next/link";

export default function Feed() {
  return (
    <>
      <Heading text="Feed" />
      <Link href="/m/search">Search</Link>
    </>
  );
}
