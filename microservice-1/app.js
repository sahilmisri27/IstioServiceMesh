const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

const MICROSERVICE_2_URL = 'http://microservice-2:3001/m2';
app.get('/m1', (req, res) => {
  res.json({ message: 'Hello from Microservice:1' });
});

app.get('/m1/service2', async (req, res) => {
  try {
    // Make an HTTP GET request to microservice-2
    const response = await axios.get(`${MICROSERVICE_2_URL}`);
    // Process the response from microservice-2
    res.json({ message: 'Hello from Microservice 1!', dataFromMicroservice2: response.data });
  } catch (error) {
    console.error('Error calling microservice-2:', error.message);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Microservice-1 is running on port ${PORT}`);
});
