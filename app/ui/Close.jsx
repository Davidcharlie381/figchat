"use client";
import { useRouter } from "next/navigation";

export default function Close({ className }) {
  const router = useRouter();

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.back()}
      className="cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 15.293L20.6465 10.6466L21.3536 11.3537L16.7071 16.0001L21.3536 20.6466L20.6465 21.3537L16 16.7073L11.3536 21.3537L10.6465 20.6466L15.2929 16.0001L10.6465 11.3538L11.3536 10.6467L16 15.293Z"
        fill="white"
      />
    </svg>
  );
}
