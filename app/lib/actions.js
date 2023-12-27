"use server";

import { cookies } from "next/headers";

import User from "@/server/models/userModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : process.env.API_URI;

export const create = async (prevState, formdata) => {
  const email = formdata.get("email");
  const password = formdata.get("password");

  try {
    const res = await fetch(`${api}/auth/register`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.user) {
      cookies().set("user", JSON.stringify(data.user));
      return { type: "success", message: "User created successfully" };
    } else if (data.message) {
      return { type: "error", message: data.message };
    }
  } catch (err) {
    console.error("error:", err);
    return { type: "error", message: "Couldn't create user." };
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
    return { type: "error", message: "Something went wrong..." };
  }
};

export const createUsername = async (prevState, formdata) => {
  const userCookie = cookies().get("user");
  const { email } = JSON.parse(userCookie?.value);

  const username = formdata.get("username");

  try {
    const res = await fetch(`${api}/api/onboard`, {
      method: "POST",
      body: JSON.stringify({ username, email }),
    });

    const data = await res.json();

    if (data.user) {
      cookies().set("user", JSON.stringify(data.user));
      return { type: "success", message: "Username created successfully" };
    } else if (data.message) {
      console.error("Error:", err);
      return { type: "error", message: data.message };
    }
  } catch (err) {
    console.log("Error:", err);
    return { type: "error", message: "Something went wrong..." };
  }
  // revalidatePath("/auth/onboarding");
};
