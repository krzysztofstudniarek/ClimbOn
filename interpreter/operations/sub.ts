import { getValues } from "./opCodes";

export const handleSub = (state: any) => {
    const {a, b} = getValues(state);
    console.log(`SUB ${a} - ${b} = ${a - b}`);
    state.stack.push(a - b);
}