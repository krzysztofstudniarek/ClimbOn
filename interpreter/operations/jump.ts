export const handleJump = (state: any) => {
    const destination = state.stack.pop();
    state.programCounter = (destination - 1);
}

export const handleJumpI = (state: any) => {
    const condition = state.stack.pop();
    if (condition === 1) {
        handleJump(state);
    }
}