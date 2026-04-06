const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end(`App1 running on port ${PORT}`);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Running on port ${PORT}`);
});
