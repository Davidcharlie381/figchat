"use client"

import Link from "next/link";
import Heading from "@/app/components/Heading";
import DiscoverPost from "../components/Discover/DiscoverPost";

export default function Feed() {
  return (
    <main className="mx-auto max-w-xl px-4 bg-transparent">
      <h1 className="text-4xl font-normal pt-10 font-comfortaa">Discover</h1>
      <Heading text="WHAT'S NEW TODAY" className="mt-8 mb-4" />
      <section style={style.horizontalSnap}>
        {Array.from([1, 2, 3, 4, , ,]).map((post) => (
          <div key={post} style={style.a}><DiscoverPost /></div>
        ))}
      </section>
    </main>
  );
}


const style = {
  horizontalSnap: {
    margin: "0 auto",
    display: "grid",
    gridAutoFlow: "column",
    gap: "1rem",
    // maxWidth: "480px",
    overflowY: "auto",
    overscrollBehavioX: "contain",
    scrollSnapType: "x mandatory",
  },
  a: {
    scrollSnapAlign: "center",
  }
}