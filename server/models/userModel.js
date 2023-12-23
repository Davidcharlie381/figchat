import mongoose from "mongoose";
import connect from "../connectDb";

connect();

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      // default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User
  ? mongoose.models.User
  : mongoose.model("User", UserSchema);
