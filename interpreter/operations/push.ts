import { validatePushOperation } from "../validations/push";

export const handlePush = (state: any) => {
    state.programCounter++;

    validatePushOperation(state);

    state.stack.push(state.code[state.programCounter]);
}