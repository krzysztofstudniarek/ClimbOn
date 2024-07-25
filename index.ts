import { Blockchain } from './blockchain/blockchain';
import { Block } from './blockchain/block';

const blockchain = new Blockchain();



for (let i = 0; i<1000000; i++) {
    const lastBlock = blockchain.chain[blockchain.chain.length - 1];
    const block = Block.mineBlock({lastBlock, beneficiary: 'foo'});
    blockchain.addBlock({block});
    console.log(block);
}

