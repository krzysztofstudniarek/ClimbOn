import { validateNumericAction } from "../validations/numeric";
import { DIV, getValues } from "./opCodes";

export const handleDiv = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericAction(a, b, DIV);

    console.log(`${DIV} ${a} / ${b} = ${a / b}`);
    state.stack.push(a / b);
}
