import { validateNumericAction } from "../validations/numeric";
import { getValues, MUL } from "./opCodes";

export const handleMul = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericAction(a, b, MUL);

    console.log(`${MUL} ${a} * ${b} = ${a * b}`);
    state.stack.push(a * b);
}