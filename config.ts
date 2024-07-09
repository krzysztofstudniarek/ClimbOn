export type BlockHeaders = {
    parentHash: string;
    beneficiary: string;
    difficulty: number;
    number: number;
    timestamp: string;
    nonce: number;
};

export const GENESIS_DATA = {
    blockHeaders: {
        parentHash: '--genesis-parent-hash--',
        beneficiary: '--genesis-beneficiary--',
        difficulty: 1,
        number: 0,  
        timestamp: '--genesis-timestamp--',
        nonce: 0,
    }
};