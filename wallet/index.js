const {INITIAL_BALANCE} = require ('../config');
const ChainUtil = require('../chain-util');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.PublicKey = this.keyPair.getPublic().encode('hex');
    }

    toString() {
        return `Wallet -
            publicKey: ${this.PublicKey.toString()}
            balance: ${this.balance}`
    }
}

module.exports = Wallet;