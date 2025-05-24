function logInfo(message, data) {
  console.log(`✅ ${message}`);
  if (data) console.dir(data, { depth: null, colors: true });
}

function logError(message, error) {
  console.error(`❌ ${message}`);
  if (error) console.error(error);
}

module.exports = { logInfo, logError };
