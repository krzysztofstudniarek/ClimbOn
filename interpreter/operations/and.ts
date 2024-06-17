import { getValues } from "./opCodes";

export const handleAnd = (state: any) => {
    const {a, b} = getValues(state);
    console.log(`AND ${a} && ${b} = ${a && b}`);
    state.stack.push(a && b);
}