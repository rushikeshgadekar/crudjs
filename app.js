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

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://mongodb:<password>@cluster0.9vz9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   console.log("connected to atlas");
//   // perform actions on the collection object
//   client.close();
// });
