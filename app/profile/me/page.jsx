"use client"

import Image from "next/image";
import userImage from "../../../public/images/display-pic.png";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";

export default function Me() {
  return (
    <main className="mx-auto max-w-xl px-4">
      <div className="mx-auto mt-10 h-32 w-32 bg-gray-400 rounded-full relative overflow-hidden">
        <Image src={userImage} alt="User image" className="" placeholder="blur" />
      </div>
      <h1 className="text-4xl font-normal pt-10 font-comfortaa text-center">
        Jane
      </h1>
      {/* <h2 className="text-[13px] mb-4 font-roboto font-extrabold tracking-[0.52px] text-center">
        SAN FRANCISCO, CA
      </h2> */}
      <Heading text="SAN FRANCISCO, CA" className="mt-4 mb-8 text-center" />
      <Button text="FOLLOW JANE" className="w-full p-[18px] rounded-md" />
      <Button
        text="MESSAGE"
        black
        className="w-full p-[18px] rounded-md mt-3"
      />
    </main>
  );
}
