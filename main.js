
const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit-data', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'Data received successfully', data: receivedData });

    //const decodedData = Buffer.from(receivedData, 'base64').toString('utf-8');

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

