require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 8004; // Use the provided PORT in the environment or default to 8004

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);

mongoose.connect("mongodb://43.204.231.33/:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Set the 'views' directory for Pug templates
app.set('views', path.join(__dirname, 'views'));

// Set Pug as the view engine
app.set('view engine', 'pug');

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
