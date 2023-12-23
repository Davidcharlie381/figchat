import Heading from "@/app/components/Heading";
import Link from "next/link";

export default function Search() {

  return (
    <>
      <Heading text="Search" />
      <Link href="/m/feed">Feed</Link>
    </>
  );
}
