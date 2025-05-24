const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('🧠 UI-LAB Internal Server is running!\n');
});

server.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
