import { getValues } from "./opCodes";

export const handleEq = (state: any) => {
    const {a, b} = getValues(state);
    console.log(`LT ${a} === ${b} = ${a === b}`);
    state.stack.push(a === b ? 1 : 0);
}