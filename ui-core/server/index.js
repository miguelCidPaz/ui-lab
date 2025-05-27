import http from 'http';
//import { handleUploadJson } from './routes/uploadJson.js';
import { syncComponents } from './scripts/syncComponents.js';
import { updateComponentRegistry } from './scripts/updateContent.js';
import { analizeProps } from './routes/analizeProps.js';
import { updateProps } from './routes/updateProps.js';

const PORT = 3000;


// Ejecutamos sincronización al levantar el backend
syncComponents();
updateComponentRegistry();

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'POST' && req.url === '/upload-json') {
    //handleUploadJson(req, res);
  } else if (req.method === 'POST' && req.url === '/analyze-props') {
    analizeProps(req, res);
  } else if (req.method === 'POST' && req.url === '/update-props') {
    updateProps(req, res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🧠 UI-LAB Internal Server is running!\n');
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
