require('module-alias/register');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('@routes/userRoutes');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
