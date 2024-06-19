export const validateNumericOperation = (a: number, b: number, action: string) => {
    if (isNaN(a) || isNaN(b)) throw new Error(`${action} requires two numbers: ${a}, ${b}`);
}

export const validateDivisionByZero = (b: number) => {  
    if (b === 0) throw new Error(`Division by zero`);
}