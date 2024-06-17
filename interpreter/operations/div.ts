import { getValues } from "./opCodes";

export const handleDiv = (state: any) => {
    const {a, b} = getValues(state);
    console.log(`DIC ${a} / ${b} = ${a / b}`);
    state.stack.push(a / b);
}
