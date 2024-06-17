import { getValues } from "./opCodes";

export const handleMul = (state: any) => {
    const {a, b} = getValues(state);
    console.log(`MUL ${a} * ${b} = ${a * b}`);
    state.stack.push(a * b);
}