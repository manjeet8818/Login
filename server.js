// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Simulated user data store
const userDataStore = {};

// Endpoint to register a new user
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (userDataStore[username]) {
    return res.status(400).send('User already exists');
  }

  userDataStore[username] = { email, password };
  res.status(201).send('User registered successfully');
});

// Endpoint to login
app.post('/api/register_login', (req, res) => {
  const { username, password } = req.body;

  if (!userDataStore[username] || userDataStore[username].password !== password) {
    return res.status(401).send('Invalid username or password');
  }

  res.status(200).send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
