import { ec } from "../utils/cryptoUtils";
import { keccakHash } from "../utils/charactersUtils";
import { STARTING_BALANCE } from "../config";

export class Account {
    keyPair: any;
    address: string;
    balance: number;

    constructor() {
        this.keyPair = ec.genKeyPair();
        this.address = this.keyPair.getPublic().encode('hex');
        this.balance = STARTING_BALANCE;
    };

    sign(data: string) {
        return this.keyPair.sign(keccakHash(data));
    }

    static verifySignature({ publicKey, data, signature }: { publicKey: string, data: any, signature: any }) {
        const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
        return keyFromPublic.verify(keccakHash(data), signature);
    }
}
