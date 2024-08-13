const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.text({ type: '*/*' }));

// POST route
app.post('/submit-data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  const decodedData = Buffer.from(receivedData, 'base64').toString('utf-8');

  console.log(decodedData);


  // Respond with a success message
  res.json({ message: 'Data received successfully', data: receivedData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
