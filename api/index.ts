import express, { Request, Response, Express, NextFunction } from "express";
import { Blockchain } from '../blockchain/blockchain';
import { Block } from '../blockchain/block';
import { PubSub } from './pubsub';
import request from 'request';

require('dotenv').config()

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({blockchain});

app.get('/blockchain', (_req: Request, res: { json: (arg0: { chain: any; }) => void; }, _next: NextFunction) => {
    const { chain } = blockchain;

    res.json({ chain });
});

app.post(`/blockchain/mine`, (req: Request, res: Response, next: NextFunction) => {
    const lastBlock = blockchain.chain[blockchain.chain.length - 1];
    const block = Block.mineBlock({ lastBlock, beneficiary: '' });

    blockchain.addBlock({ block })
        .then(() => {
            pubsub.broadcastBlock(block);
            res.json({ chain: blockchain.chain });
        }).catch(next);
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Internal Server Error:', err);

    res.status(500).json({ message: err.message });
});

const isPeer = process.argv.includes('--peer');

const PORT = isPeer ? Math.floor(2000 + Math.random()*1000) : 3000

if (isPeer) {
    request('http://localhost:3000/blockchain', (error, response, body) => {
        const { chain } = JSON.parse(body);

        blockchain.replaceChain({chain})
            .then(() => console.log('Synchronized blockchain with the root chain'))
            .catch(error => console.error('Error synchronizing', error));

        console.log('chain', chain);
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});