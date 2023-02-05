const WebSocket = require('ws');

const peerAddress = process.env.PEERCLIENT;

const socket = new WebSocket(peerAddress);

socket.on('open', () => {
  console.log(`Connected to server at ${peerAddress}`);
});

socket.on('message', (message) => {
  console.log(`Received message: ${message}`);
});

socket.on('error', (error) => {
  console.error(`Error: ${error}`);
});

socket.on('close', () => {
  console.log(`Disconnected from server at ${peerAddress}`);
});

