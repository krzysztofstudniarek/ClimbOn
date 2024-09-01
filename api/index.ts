import express, { Request, Response, Express, NextFunction } from "express";
import { Blockchain } from '../blockchain/blockchain';
import { Block } from '../blockchain/block';

const app = express();
const blockchain = new Blockchain();
const PORT = 3000;

app.get('/blockchain', (_req: Request, res: { json: (arg0: { chain: any; }) => void; }, _next: NextFunction) => {
    const { chain } = blockchain;

    res.json({ chain });
});

app.post(`/blockchain/mine`, (req: Request, res: Response, next: NextFunction) => {
    const lastBlock = blockchain.chain[blockchain.chain.length - 1];
    const block = Block.mineBlock({ lastBlock, beneficiary: '' });

    block.blockHeaders.parentHash = "foo";

    blockchain.addBlock({ block })
        .then(() => {
            res.json({ chain: blockchain.chain });
        }).catch(next);
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Internal Server Error:', err);

    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});