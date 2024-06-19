export const validatePushOperation = (state: any) => {
    if (state.programCounter == state.code.length) throw new Error(`PUSH can't be last operation in the code`);
}