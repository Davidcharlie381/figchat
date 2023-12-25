// "use client"

import Close from "@/app/ui/Close"
import { Profile } from "../Discover/Profile"

export default function PostBar() {
    return (
        <div className="mx-auto p-5 w-full z-[100] fixed left-0 flex justify-between items-center">
            <Profile className="text-white" />
            <Close />
        </div>
    )
}