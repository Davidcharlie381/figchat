import Heading from "@/app/components/Heading";
import Input from "@/app/components/Input";
import Link from "next/link";

export default function Search() {
  return (
    <>
      <main className="mx-auto max-w-xl px-4">
        <h1 className="text-4xl font-normal pt-10 font-comfortaa">Register</h1>
        <Input
          type="text"
          className="mt-8"
          name="search"
          placeholder="Search all photos"
        />
        <section className="mt-8">
          <Heading text="ALL RESULTS" className="mb-4" />
          <div>Images</div>
        </section>
      </main>
    </>
  );
}
