import { Block } from './block';

export class Blockchain {
    chain: Block[];

    constructor()   {
        this.chain = [Block.genesis()];
    }

    addBlock({ block }: { block: Block }): Promise<void> {
        return new Promise((resolve, reject) => {
            Block.validateBlock({
                lastBlock: this.chain[this.chain.length - 1],
                block
            }).then(() => {
                this.chain.push(block);
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}