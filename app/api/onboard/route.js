import connect from "@/server/connectDb";
import User from "@/server/models/userModel";

export async function POST(req) {
  const body = await req.json();
  const { username, email } = body;

  console.clear()
  
  await connect();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found" });
      // return console.log("No user")
    }
    user.username = username;
    await user.save();
    return Response.json({ user });
  } catch (err) {
    console.log("Backend error:", err)
    return Response.json({ message: "Something went wrong" }, {status: 500})
  }
}
