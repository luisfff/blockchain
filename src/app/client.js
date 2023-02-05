const WebSocket = require('ws');

const {CLIENT_DEV } = require('../../dotenv')

const peerAddress = CLIENT_DEV;

const socket = new WebSocket(peerAddress);

socket.on('open', () => {
  console.log(`Connected to server at ${peerAddress}`);

  // socket.send('Hello, server!');
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

