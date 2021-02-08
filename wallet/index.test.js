const TransactionPool = require('./transaction-pool');
const Wallet = require('./index');

describe('Wallet',() => {
    let tp, wallet;

    beforeEach(() =>{
        tp = new TransactionPool();
        wallet = new Wallet();
    });


    describe('creating a transaction', () => {
        let transaction, sendAmount, recipient;

        beforeEach(() =>{
            sendAmount = 50;
            recipient = 'random-address';
            transaction = wallet.createTransaction(recipient, sendAmount, tp);
        });

        describe('and doing the same transaction', () => {
            beforeEach(() =>{
                transaction = wallet.createTransaction(recipient, sendAmount, tp);
            });

            it('doubles the ´sendAmount´ subtracted from the wallet balance', () => { 
                expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
                .toEqual(wallet.balance - sendAmount * 2);
            });

            it('clones the ´sendAmount´ output for the recipient', () => { 
                expect(transaction.outputs.filter(output => output.address === recipient).map(output => output.amount))
                .toEqual([sendAmount, sendAmount]);
            });

        });

    });
});

