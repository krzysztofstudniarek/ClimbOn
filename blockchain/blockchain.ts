import { Block } from './block';

export class Blockchain {
    chain: Block[];

    constructor()   {
        this.chain = [Block.genesis()];
    }

    addBlock({ block }: { block: Block }) {
        this.chain.push(block);
    }
}