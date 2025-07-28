const express = require("express");
require("dotenv").config();
const cors = require("cors");

const server = express();
const PORT = process.env.PORT;

// middleware
server.use(cors());
server.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("API is runnning");
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
