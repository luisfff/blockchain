const EC = require('elliptic').ec;

const uuid = require('uuid');
//const uuidV1 = require('uuid/v1');
//const uuidV1 = require('uuid/v1');
//import { v1 as uuidv1 } from 'uuid';
//const uuidV1 = require('uuid/dist/v1');



const ec = new EC('secp256k1');

class ChainUtil {

    static genKeyPair(){
        return ec.genKeyPair();
    }

    static id() {
        return uuid.v1();
    }
}

module.exports = ChainUtil;