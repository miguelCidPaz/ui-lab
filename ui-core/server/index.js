import http from 'http';
//import { handleUploadJson } from './routes/uploadJson.js';
import { syncComponents } from './scripts/syncComponents.js';
import { updateComponentRegistry } from './scripts/updateContent.js';

const PORT = 3000;


// Ejecutamos sincronización al levantar el backend
syncComponents();
updateComponentRegistry();

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload-json') {
    //handleUploadJson(req, res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🧠 UI-LAB Internal Server is running!\n');
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
