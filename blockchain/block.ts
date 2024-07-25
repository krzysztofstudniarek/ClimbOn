import { BlockHeaders, GENESIS_DATA, MINE_RATE } from '../config';
import { keccakHash } from '../utils/charactersUtils';


const HASH_LENGTH = 64;
const MAX_HASH = 'f'.repeat(HASH_LENGTH);
const MAX_HASH_VALUE = parseInt(MAX_HASH, 16);
const MAX_NONCE_VALUE = 2**64;

export class Block {
    blockHeaders: BlockHeaders;

    constructor({ blockHeaders } : { blockHeaders: BlockHeaders}) {
        this.blockHeaders = blockHeaders;

    }

    static calculateBlockTargetHash({ lastBlock }: { lastBlock: Block }) {
        const value = (MAX_HASH_VALUE / lastBlock.blockHeaders.difficulty).toString(16); 

        return value.length > HASH_LENGTH ? MAX_HASH: '0'.repeat(HASH_LENGTH - value.length) + value;
    }

    static adjustDifficulty({lastBlock, timestamp}: {lastBlock: Block, timestamp: number}) {
        const { difficulty } = lastBlock.blockHeaders;
        if( timestamp - lastBlock.blockHeaders.timestamp > MINE_RATE) {
            return difficulty <= 1 ? 1 : difficulty - 1;
        }

        return difficulty < 1 ? 1 : difficulty + 1;
    }

    static mineBlock({ lastBlock, beneficiary }: {lastBlock: Block, beneficiary: string}) {
        const target = Block.calculateBlockTargetHash({ lastBlock });

        let timestamp, truncatedBlockHeaders, header, nonce, underTargetHash;

        do {
            timestamp = Date.now();
            truncatedBlockHeaders = {
                parentHash: keccakHash(lastBlock.blockHeaders),
                beneficiary,
                difficulty: Block.adjustDifficulty({lastBlock, timestamp}),
                number: lastBlock.blockHeaders.number + 1,
                timestamp,
            }

            header = keccakHash(truncatedBlockHeaders);
            nonce = Math.floor(Math.random() * MAX_NONCE_VALUE);

            underTargetHash = keccakHash(header+nonce);
        } while( underTargetHash > target )

        return new this({
            blockHeaders: {
                ...truncatedBlockHeaders, 
                nonce
            }
        });
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }
}