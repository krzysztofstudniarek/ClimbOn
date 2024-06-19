import { getValues, LT } from "./opCodes";

export const handleLt = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericAction(a, b, LT);

    console.log(`LT ${a} < ${b} = ${a < b}`);
    state.stack.push(a < b ? 1 : 0);
}