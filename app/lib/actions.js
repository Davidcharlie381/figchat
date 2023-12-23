"use server";

import User from "@/server/models/userModel";
import { revalidatePath } from "next/cache";

export const create = async (prevState, formdata) => {
  const email = formdata.get("email");
  const password = formdata.get("password");

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return { type: "error", message: "User already exists" };
    }
    const user = User({
      email,
      password,
      // username: null,
    });
    await user.save();
    return { type: "success", message: "User created successfully" };
  } catch (err) {
    console.error("error:", err);
  }

  revalidatePath("/register");
};
