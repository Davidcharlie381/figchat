const mongoose = require("mongoose");

let client = null;

const MONGODB_URI =
  process.env.NODE_ENV !== "development"
    ? process.env.MONGODB_URI
    : "mongodb://127.0.0.1:27017/test";

const connect = async () => {
  if (client) {
    return client;
  }

  try {
    delete mongoose.connection.models["User"];
    delete require.cache[require.resolve("@/server/models/userModel")];
    client = await mongoose.connect(MONGODB_URI);
    console.log("connected");
    return client;
  } catch (error) {
    console.error("Couldn't connect:", error);
  }
};

export default connect;
