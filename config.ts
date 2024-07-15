export type BlockHeaders = {
    parentHash: string;
    beneficiary: string;
    difficulty: number;
    number: number;
    timestamp: number;
    nonce: number;
};

export const GENESIS_DATA = {
    blockHeaders: {
        parentHash: '--genesis-parent-hash--',
        beneficiary: '--genesis-beneficiary--',
        difficulty: 1,
        number: 0,  
        timestamp: 0,
        nonce: 0,
    }
};

export const MILLISECONDS = 1;
export const SECONDS = 1000 * MILLISECONDS;
export const MINE_RATE = 13 * SECONDS;
