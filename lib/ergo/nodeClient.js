const ergo = require('ergo-client');

const nodeClient = new ergo.ErgoNodeClient({
  baseUrl: 'http://localhost:9052',
  apiKey: 'my-api-key'
});

module.exports = {
  nodeClient
};
