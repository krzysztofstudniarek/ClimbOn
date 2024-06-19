import { validateLogicalOperation } from "../validations/logical";
import { AND, getValues, OR } from "./opCodes";

export const handleEq = (state: any) => {
    const {a, b} = getValues(state);
    state.stack.push(a === b ? 1 : 0);
}

export const handleAnd = (state: any) => {
    const {a, b} = getValues(state);
    validateLogicalOperation(a, b, AND);
    state.stack.push(a && b);
}

export const handleOr = (state: any) => {
    const {a, b} = getValues(state);
    validateLogicalOperation(a, b, OR);
    state.stack.push(a || b);
}