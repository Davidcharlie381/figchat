import connect from "@/server/connectDb";
import User from "@/server/models/userModel";
import { cookies } from "next/headers";

export const getUsers = async () => {
  const users = await User.find({});
  return users;
};

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  try {
    const userExists = await User.findOne({ email }).select("-password");
    console.log(userExists);
    if (userExists) {
      return Response.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password });
    return Response.json({ user });
  } catch (err) {
    console.log("Backend Error:", err);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(request) {
  // await connect()

  console.log(connect);

  console.log({ url: request.url });

  return Response.json({ url: request.url });
}
