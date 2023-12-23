const mongoose = require("mongoose");

let client = null;

const connect = async () => {
  if (client) {
    return client;
  }

  try {
    delete mongoose.connection.models['User'];
    delete require.cache[require.resolve('@/server/models/userModel')];
    client = await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("connected");
    return client;
  } catch (error) {
    console.error("Couldn't connect:", error);
  }
};

export default connect;
