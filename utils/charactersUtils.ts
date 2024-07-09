import { keccak256 } from 'js-sha3';

export const sortCharacters = (data: any) => {
    return JSON.stringify(data).split('').sort().join('');
}

export const keccakHash = (data: any) => {
    return keccak256.create().update(sortCharacters(data)).hex();
};