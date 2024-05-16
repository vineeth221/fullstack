// server/app.js
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);

mongoose.connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
  console.log("mongodb is connected")
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
