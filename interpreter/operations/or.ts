import { getValues } from "./opCodes";

export const handleOr = (state: any) => {
    const {a, b} = getValues(state);
    console.log(`OR ${a} || ${b} = ${a || b}`);
    state.stack.push(a || b);
}