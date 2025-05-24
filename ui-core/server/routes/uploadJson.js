const { logInfo, logError } = require('../utils/logger');

function handleUploadJson(req, res) {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const jsonData = JSON.parse(body);
      logInfo('JSON recibido', jsonData);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'JSON recibido correctamente' }));
    } catch (err) {
      logError('Error al parsear JSON', err);

      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'JSON inválido' }));
    }
  });
}

module.exports = { handleUploadJson };
