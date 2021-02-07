//const Block = require('../block');
// const Blockchain = require('./blockchain');
const Wallet = require('./wallet');
const wallet = new Wallet();

console.log(wallet.toString());



// const bc = new Blockchain();

// for (let i= 0; i < 10; i++){
//     console.log(bc.addBlock(`foo ${i}`).toString())
// }

// const fooBlock = Block.mineBlock(Block.genesis(),'foo');

// console.log(fooBlock.toString());

// const block = new Block('foo','bar','aa','baz');
// console.log(block.toString());

// console.log(Block.genesis().toString());




