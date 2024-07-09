import { BlockHeaders, GENESIS_DATA } from '../config';

export class Block {
    blockHeaders: BlockHeaders;

    constructor({ blockHeaders } : { blockHeaders: BlockHeaders}) {
        this.blockHeaders = blockHeaders;

    }

    static mineBlock({ lastBlock }: {lastBlock: Block}) {
        
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }
}