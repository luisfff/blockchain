const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    })

    it('start with the genesis block', ()=> {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', ()=> {
        const data = 'block';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });

    it('validates a valid chain', ()=> {
        bc2.addBlock('block');
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('invalidates chain with corrupt genesis block', ()=> {
        bc2.chain[0].data = 'Bad Data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('invalidates a corrupt chain', ()=> {
        bc2.addBlock('block');
        bc2.chain[1].data = "Not block";
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('ir replaces the chain with a valid chain', ()=> {
        bc2.addBlock('nice block');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    });

    
    it('ir does not replace the chain with one of less than or equal to length', ()=> {
        bc.addBlock('nice block');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    });
});