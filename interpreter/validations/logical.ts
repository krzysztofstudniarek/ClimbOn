export const validateLogicalOperation = (a: number, b: number, action: string) => {
    if (isNaN(a) || isNaN(b) || ![0,1].includes(a) || ![0,1].includes(b)) throw new Error(`${action} requires only 0 or 1 numbers: ${a}, ${b}`);
}
