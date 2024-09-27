const express = require('express');
const app = express();
const port = 3000;

// Serve static files like HTML, CSS, and images from 'public' folder
app.use(express.static('public'));

// Respond to requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, welcome to my Node.js website!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
