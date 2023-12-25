import Image from "next/image";
import { Profile } from "./Profile";
import post from "@/public/images/post.png";
import Link from "next/link";

export default function DiscoverPost() {
  return (
    <div className="w-[350px]">
        <Link href="/posts/1" className="w-full h-[343px] overflow-hidden relative mb-3 grid place-content-center">
            <Image src={post} alt="Post" placeholder="blur" className="w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
        </Link>
      <Profile />
    </div>
  );
}
