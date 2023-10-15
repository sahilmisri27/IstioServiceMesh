const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/m2', (req, res) => {
  // Your microservice-2 logic here
  res.json({ message: 'Hello from Microservice:2 VERSION:2' });
});

app.listen(PORT, () => {
  console.log(`Microservice-2 is running on port ${PORT}`);
});
