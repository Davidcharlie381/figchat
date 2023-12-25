import Image from "next/image";

import user from "@/public/images/avatar.png";
import Link from "next/link";

export function Profile({className}) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <Link href="/profile/me" className="cursor-pointer">
        <Image
          src={user}
          width={38}
          height={38}
          alt="user"
          // placeholder="blur"
        />
      </Link>
      <div className="flex flex-col">
        <Link href="/profile/me" className="cursor-pointer text-[13px] font-roboto font-bold tracking-wider">Ridhwan Nordin</Link>
        <Link href="/profile/me" className="cursor-pointer">@ridzjcob</Link>
      </div>
    </div>
  );
}
