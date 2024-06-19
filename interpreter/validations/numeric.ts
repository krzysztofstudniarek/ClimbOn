export const validateNumericAction = (a: number, b: number, action: string) => {
    if (isNaN(a) || isNaN(b)) throw new Error(`${action} requires two numbers: ${a}, ${b}`);
}