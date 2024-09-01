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
            }).catch(reject);
        });
    }

    replaceChain({chain}: {chain: Block[]}) {
        return new Promise<void>(async (resolve, reject) => {
            if(chain.length <= this.chain.length) {
                return reject('Chain is not longer than current chain');
            }
            for(let i = 1; i<chain.length; i++) {
                const block = chain[i];
                const lastBlockIndex = i - 1;
                const lastBlock = lastBlockIndex >= 0 ? chain[lastBlockIndex] : Block.genesis();
    
                try{
                    await Block.validateBlock({ lastBlock, block });
                } catch (error) {
                    reject(`Chain is invalid ${error}`);
                }

                console.log(`Block ${block.blockHeaders.number} is valid`);
            }
            this.chain = chain;

            return resolve();
        });
    }
}