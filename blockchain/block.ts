import { BlockHeaders, GENESIS_DATA } from '../config';

const HASH_LENGTH = 64;
const MAX_HASH = 'f'.repeat(HASH_LENGTH);
const MAX_HASH_VALUE = parseInt(MAX_HASH, 16);

export class Block {
    blockHeaders: BlockHeaders;

    constructor({ blockHeaders } : { blockHeaders: BlockHeaders}) {
        this.blockHeaders = blockHeaders;

    }

    static calculateBlockTargetHash({ lastBlock }: { lastBlock: Block }) {
        const value = (MAX_HASH_VALUE / lastBlock.blockHeaders.difficulty).toString(16); 

        return value.length > HASH_LENGTH ? MAX_HASH: '0'.repeat(HASH_LENGTH - value.length) + value;
    }

    static mineBlock({ lastBlock, beneficiary }: {lastBlock: Block, beneficiary: string}) {
        
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }
}