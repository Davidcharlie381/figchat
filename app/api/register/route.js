import connect from "@/server/connectDb";
import User from "@/server/models/userModel";

export const getUsers = async () => {
  const users = await User.find({});
  return users;
};

export async function GET() {
  let users = await getUsers();

  await connect();

  return Response.json({ users });
}
