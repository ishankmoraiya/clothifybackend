const mongo = require("mongoose");

exports.connectdb = async () => {
  mongo.set("strictQuery",false)
  const { connection } = await mongo.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
};
