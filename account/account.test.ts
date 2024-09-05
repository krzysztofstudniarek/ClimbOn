import { Account } from "./account";

describe('Account', () => {
    let account: Account; 
    let data: any;
    let signature: any;
    
    beforeEach(() => {
        account = new Account();
        data = { foo: 'bar' };    
        signature = account.sign(data);
    });

    describe('signature validation', () => {
        it('correctly verifies a valid signature', () => {
            expect(Account.verifySignature({
                publicKey: account.address,
                data,
                signature
            })).toBe(true);
        });

        it('does not verify an invalid signature', () => {

            const wrongData = { foo: 'not-bar' };
            expect(Account.verifySignature({
                publicKey: account.address,
                data: wrongData,
                signature,
            })).toBe(false);
        });
    });
});