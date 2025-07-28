const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("API is runnning");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
