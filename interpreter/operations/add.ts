import { validateNumericAction } from "../validations/numeric";
import { ADD, getValues } from "./opCodes";

export const handleAdd = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericAction(a, b, ADD);

    console.log(`${ADD} ${a} + ${b} = ${a + b}`);
    state.stack.push(a + b);
}