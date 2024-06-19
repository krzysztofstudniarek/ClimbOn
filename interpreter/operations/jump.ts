import { validateJump } from "../validations/jump";

export const handleJump = (state: any) => {
    const destination = state.stack.pop();

    validateJump(state, destination);

    state.programCounter = (destination - 1);
}

export const handleJumpI = (state: any) => {
    const condition = state.stack.pop();
    if (condition === 1) {
        handleJump(state);
    }
}