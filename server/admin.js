const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8005;

// Connect to MongoDB
mongoose.connect('mongodb://43.204.231.33:27017/emails', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const emailSchema = new mongoose.Schema({
  email: String,
  name: String,
  mobile: String,
  subject: String,
});

const Email = mongoose.model('Email', emailSchema);

// Admin portal routes
app.get('/', async (req, res) => {
  try {
    // Load emails from MongoDB
    const emails = await Email.find();

    // Send a simple HTML response
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Admin Portal</title>
        </head>
        <body>
          <h1>Admin Portal</h1>
          <ul>
            ${emails.map(email => `<li>${email.name} - ${email.email}</li>`).join('')}
          </ul>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error loading emails:', error);

    // Send an internal server error response with details
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Admin portal started on port ${port}`);
});
