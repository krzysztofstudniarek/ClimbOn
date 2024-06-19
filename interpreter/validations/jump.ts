export const validateJump = (state: any, destination: number) => {
    if (isNaN(destination)) throw new Error(`Jump destination must be a number: ${destination}`);

    if (destination < 0 || destination >= state.code.length) {
        throw new Error(`Invalid jump destination: destination (${destination}), code length (${state.code.length})`);
    }
}