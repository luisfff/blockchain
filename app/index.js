const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const bodyParser = require('body-parser');

const Blockchain = require('../src/blockchain');
const P2pServer = require('../src/app/p2p-server');
const TransactionPool = require('../src/wallet/transaction-pool');
const endpoints = require('../src/app/endpoints');

const HTTP_PORT =  process.env.HTTP_PORT || 3001;

const app = express();
 const bc = new Blockchain();
 const tp = new TransactionPool();
 const p2pServer = new P2pServer(bc, tp);

/* Middlewares */
app.use(bodyParser.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

endpoints(app);

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
p2pServer.listen();