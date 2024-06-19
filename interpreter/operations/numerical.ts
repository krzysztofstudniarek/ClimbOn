import { validateDivisionByZero, validateNumericOperation } from "../validations/numeric";
import { ADD, DIV, getValues, GT, LT, MUL, SUB } from "./opCodes";

export const handleAdd = (state: any) => {
    const {a, b} = getValues(state);
    validateNumericOperation(a, b, ADD);
    state.stack.push(a + b);
}

export const handleSub = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericOperation(a, b, SUB);
    state.stack.push(a - b);
}

export const handleMul = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericOperation(a, b, MUL);

    state.stack.push(a * b);
}

export const handleDiv = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericOperation(a, b, DIV);
    validateDivisionByZero(b);

    state.stack.push(a / b);
}

export const handleGt = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericOperation(a, b, GT);

    state.stack.push(a > b ? 1 : 0);
}

export const handleLt = (state: any) => {
    const {a, b} = getValues(state);

    validateNumericOperation(a, b, LT);

    state.stack.push(a < b ? 1 : 0);
}