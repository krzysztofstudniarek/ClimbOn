import { Block } from "./blockchain/block";

const block = Block.mineBlock({
    lastBlock: Block.genesis(),
    beneficiary: 'foo'
});


console.log(`block = ${JSON.stringify(block)}`);