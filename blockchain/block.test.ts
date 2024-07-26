import { keccakHash } from "../utils/charactersUtils";
import { Block } from "./block";

test(`Test Target Block Hash Calculation When Difficulty is 1`, () => {
    expect(Block.calculateBlockTargetHash({ lastBlock: Block.genesis() })).toBe('f'.repeat(64));
});

test(`Test Target Block Hash Calculation When Difficulty is 100`, () => {
    expect(Block.calculateBlockTargetHash({
        lastBlock: new Block({
            blockHeaders: {
                parentHash: '--test-parent-hash--',
                beneficiary: '--test-beneficiary--',
                difficulty: 100,
                number: 0,  
                timestamp: 0,
                nonce: 0,
            }
        })
    })).toBe('028f5c28f5c28f60000000000000000000000000000000000000000000000000');
});

test(`Test Target Block Hash Calculation When Difficulty is MAX_HASH_VALUE`, () => {
    expect(Block.calculateBlockTargetHash({
        lastBlock: new Block({
            blockHeaders: {
                parentHash: '--test-parent-hash--',
                beneficiary: '--test-beneficiary--',
                difficulty: parseInt('f'.repeat(64),16),
                number: 0,  
                timestamp: 0,
                nonce: 0,
            }
        })
    })).toBe('0000000000000000000000000000000000000000000000000000000000000001');
});

test(`Test mine block function`, () => {
    const target = Block.calculateBlockTargetHash({lastBlock: Block.genesis()});
    const newBlock = Block.mineBlock({
        lastBlock: Block.genesis(),
        beneficiary: 'foo'
    });
    const newTargetHash = keccakHash(newBlock.blockHeaders);

    expect(newBlock).toBeDefined();
    expect(newTargetHash < target).toBeTruthy();
});

test(`Test difficulty adjustments for longer than mine time`, () => {
    expect(Block.adjustDifficulty({lastBlock: Block.genesis(), timestamp: Date.now()})).toBe(1)
});

test(`Test difficulty adjustments for shorter than mine time`, () => {
    const lastBlock = Block.genesis();
    lastBlock.blockHeaders.timestamp = Date.now();
    expect(Block.adjustDifficulty({lastBlock, timestamp: Date.now()})).toBe(2)
});

test(`Test validate genesis block`, () => {
    expect(Block.validateBlock({lastBlock: Block.genesis(), block: Block.genesis()})).resolves;
});

test(`Test validate wrong hash block`, () => {
    const lastBlock = Block.genesis();
    const block = Block.mineBlock({lastBlock, beneficiary: 'foo'});
    block.blockHeaders.parentHash = '--wrong-hash--';
    expect(Block.validateBlock({lastBlock, block})).rejects.toThrow(new Error('The parent hash must be a match'));
});

test(`Test validate wrong block number`, () => {
    const lastBlock = Block.genesis();
    const block = Block.mineBlock({lastBlock, beneficiary: 'foo'});
    block.blockHeaders.number = -1;
    expect(Block.validateBlock({lastBlock, block})).rejects.toThrow(new Error('The block must increment the number by 1'));
});

test(`Test validate wrong difficulty`, () => {
    const lastBlock = Block.genesis();
    const block = Block.mineBlock({lastBlock, beneficiary: 'foo'});
    block.blockHeaders.difficulty = -1;
    expect(Block.validateBlock({lastBlock, block})).rejects.toThrow(new Error('The difficulty must only adjust by 1'));
});

test(`Test validate correct block`, () => {
    const lastBlock = Block.genesis();
    const block = Block.mineBlock({lastBlock, beneficiary: 'foo'});
    expect(Block.validateBlock({lastBlock, block})).resolves;
});