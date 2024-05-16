// server/app.js
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);

const connectionString = "mongodb+srv://amazona-hostinger:amazona-hostinger@cluster0.uzvbjet.mongodb.net/";
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
