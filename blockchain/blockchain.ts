import { Block } from './block';

class Blockchain {
    chain: Block[];

    constructor()   {
        this.chain = [Block.genesis()];
    }
}