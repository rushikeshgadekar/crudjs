const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/testDB";
const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("connected....");
});

app.use(express.json());

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(9000, function () {
  console.log("server started...");
});
