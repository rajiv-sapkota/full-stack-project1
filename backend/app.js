const express = require("express");
const app = express();
const port = 3000;

//importing database connection
const db = require("./database/connection.js");

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
