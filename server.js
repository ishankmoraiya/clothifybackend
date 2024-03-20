const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const { connectdb } = require("./config/database");
const userRoutes = require("./routes/userRoutes");
app.use(cors());

app.use("/api", userRoutes);

//to connecte sercer to db
connectdb();

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);

  console.log("Server is connected successfully on port", process.env.PORT);
});

app.get("/", (req, res) => {
  res.send("Api is running");
});
