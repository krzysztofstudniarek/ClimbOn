import { Block } from "./block";

test(`Test Target Block Hash Calculation When Difficulty is 1`, () => {
    expect(Block.calculateBlockTargetHash({ lastBlock: Block.genesis() })).toBe('f'.repeat(64));
});

test(`Test Target Block Hash Calculation When Difficulty is MAX_HASH_VALUE`, () => {
    expect(Block.calculateBlockTargetHash({
        lastBlock: new Block({
            blockHeaders: {
                parentHash: '--test-parent-hash--',
                beneficiary: '--test-beneficiary--',
                difficulty: parseInt('f'.repeat(64),16),
                number: 0,  
                timestamp: '--test-timestamp--',
                nonce: 0,
            }
        })
    })).toBe('0000000000000000000000000000000000000000000000000000000000000001');
});