const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from App 3 🚀');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App 3 running on ${PORT}`);
});
