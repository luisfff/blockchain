const Blockchain = require('../blockchain');
const P2pServer = require('./p2p-server');
const Wallet = require('../wallet');
const express = require('express');

const TransactionPool = require('../wallet/transaction-pool');
const Transaction = require('../wallet/transaction');
const Miner = require('./miner');

const bc = new Blockchain();
const wallet = new Wallet();
const tp = new TransactionPool();
const p2pServer = new P2pServer(bc, tp);
const miner = new Miner(bc, tp, wallet, p2pServer);

const app = express();

module.exports = function (app) {
    
    /* Endpoints */
    app.get('/blocks', (req, res) => {
        res.json(bc.chain);
    });

    app.get('/mine-transactions', (req, res) => {
        const block = miner.mine();
        console.log(`New block added: ${block.toString()}`);

        res.redirect('/blocks');
    });

    app.post('/mine', (req, res) => {
        const block = bc.addBlock(req.body.data);
        console.log(`New block added: ${block.toString()}`);

        p2pServer.syncChains();

        res.redirect('/blocks');
    });

    app.get('/transactions', (req, res) => {
        res.json(tp.transactions);
    });

    app.post('/transact', (req, res) => {
        const {recipient, amount} = req.body;
        const transaction = wallet.createTransaction(recipient, amount, bc, tp);

        p2pServer.broadcastTransaction(transaction);

        res.redirect('/transactions');
    });

    app.get('/public-key', (req, res) => {
        res.json({publicKey : wallet.publicKey});
    });
}