import { getValues } from "./opCodes";

export const handleAdd = (state: any) => {
    const {a, b} = getValues(state);
    console.log(`ADD ${a} + ${b} = ${a + b}`);
    state.stack.push(a + b);
}