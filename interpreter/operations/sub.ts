import { validateNumericAction } from "../validations/numeric";
import { getValues, SUB } from "./opCodes";

export const handleSub = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericAction(a, b, SUB);

    console.log(`${SUB} ${a} - ${b} = ${a - b}`);
    state.stack.push(a - b);
}