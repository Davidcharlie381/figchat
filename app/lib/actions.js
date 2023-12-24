"use server";

import { cookies } from "next/headers";

import User from "@/server/models/userModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (prevState, formdata) => {
  const email = formdata.get("email");
  const password = formdata.get("password");

  try {
    const userExists = await User.findOne({ email }).select("-password");
    if (userExists) {
      return { type: "error", message: "User already exists" };
    }

    const user = User({
      email,
      password,
    });

    await user.save();

    cookies().set("user", JSON.stringify(user));
    return { type: "success", message: "User created successfully" };
  } catch (err) {
    console.error("error:", err);
  }
};

export const login = async (prevState, formdata) => {
  const email = formdata.get("email");
  const password = formdata.get("password");

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      const pwdCorrect = userExists.password === password;
      if (pwdCorrect) {
        cookies().set("user", JSON.stringify(userExists));
        return { type: "success", message: "Log in successful!" };
      }
      return { type: "error", message: "Incorrect password" };
    }
    return { type: "error", message: "No user found" };
  } catch (err) {
    console.log("Error:", err);
  }

  revalidatePath("/auth/login");
};

export const createUsername = async (prevState, formdata) => {
  const userEmail = cookies().get("user").email;
  const username = formdata.get("username");

  try {
    const user = await User.findOne({ userEmail });

    if (!user?.username) {
      user.username = username;
      await user.save();

      cookies().set("user", JSON.stringify(user));
      return { type: "success", message: "Username created successfully" };
    }
    return { type: "error", message: "Couldn't update username" };
  } catch (err) {
    console.log("Error:", err);
  }
  revalidatePath("/auth/onboarding");
};
