# Blockchain Application
A blockchain application that implements peer-to-peer communication between nodes to maintain the integrity of the blockchain data.
Cryptocurrency example

## Getting Started
1. Clone this repository
2. Install the project dependencies by running `npm install`
3. Start the application by running `npm start`
4. The application should now be running at `localhost:3001`

### Default configurations
To starting the application in the configuration `HTTP_PORT=3001 P2P_PORT=5002` use the command  `npm run dev-server`
To starting the application in the configuration `HTTP_PORT=3002 P2P_PORT=5010 PEERS=ws://localhost:5002` use the command  `npm run dev-p2p-client`
## API Documentation
The application's API is documented using Swagger and can be accessed at `localhost:3001/doc`.

## Features
Implements a blockchain data structure
Maintains the integrity of the blockchain data through peer-to-peer communication
Supports multiple nodes running on different ports
Can add transactions to the transaction pool
Can mine new blocks and add them to the blockchain