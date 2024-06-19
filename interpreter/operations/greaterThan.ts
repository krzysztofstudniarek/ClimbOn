import { validateNumericAction } from "../validations/numeric";
import { getValues, GT } from "./opCodes";

export const handleGt = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericAction(a, b, GT);

    console.log(`${GT} ${a} > ${b} = ${a > b}`);
    state.stack.push(a > b ? 1 : 0);
}