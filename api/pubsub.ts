import Pubnub from "pubnub";
import { Block } from "../blockchain/block";
import { Blockchain } from "../blockchain/blockchain";

const PubNub = require('pubnub');
require('dotenv').config();

const creds = {
    publishKey: process.env.PUBLISH_KEY,
    subscribeKey: process.env.SUBSCRIBE_KEY,
    secretKey: process.env.SECRET_KEY,
    userId: process.env.USER_ID
};

const CHANNELS_MAP = {
    TEST: 'TEST',
    BLOCK: 'BLOCK'
};

export class PubSub {
    pubnub: Pubnub;
    blockchain: Blockchain;

    constructor({ blockchain }: { blockchain: Blockchain}) {
        this.pubnub = new PubNub(creds);
        this.blockchain = blockchain;
        this.subscribeToChannels();
        this.listen();
    }

    subscribeToChannels() {
        this.pubnub.subscribe({ channels: Object.values(CHANNELS_MAP) });
    }

    publish({ channel, message }: { channel: string, message: string }) {
        this.pubnub.publish({ channel, message });
    }

    listen() {
        this.pubnub.addListener({
            message: messageObject => {
                const { channel, message } = messageObject;
                const parsedMessage = JSON.parse(message);
                console.log(`message received on channel ${channel}`);

                switch (channel) {
                    case CHANNELS_MAP.BLOCK:
                        console.log(`block message: ${message}`);
                        this.blockchain.addBlock({ block: parsedMessage})
                            .then(() => console.log('New block added'))
                            .catch(() => console.error('Error adding block'));
                        break;
                    default:
                        break;
                }
            }
        });
    }

    broadcastBlock(block: Block) {
        this.publish({
            channel: CHANNELS_MAP.BLOCK,
            message: JSON.stringify(block)
        });
    }
}