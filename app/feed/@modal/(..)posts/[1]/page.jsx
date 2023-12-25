import Modal from "@/app/components/Modal";
import Image from "next/image";
import image from "@/public/images/post.png";
import PostBar from "@/app/components/Post/PostBar";

export default function () {
  return (
    <Modal>
      <div className="bg-gradient-to-b from-gray-900 to-transparent h-[15%] w-screen z-[99] fixed top-0 left-0" />

      <PostBar />
      <Image
        src={image}
        alt="Dispay image"
        width="auto"
        height="auto"
        placeholder="blur"
      />
    </Modal>
  );
}
