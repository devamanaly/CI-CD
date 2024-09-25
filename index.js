const http = require('http');

const hostname = '0.0.0.0';  // Allows listening on all network interfaces
const port = 5000;           // Port where the app will run inside the container

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
