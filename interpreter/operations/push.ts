export const handlePush = (state: any) => {
    state.programCounter++;
    console.log(`PUSH ${state.code[state.programCounter]}`);
    state.stack.push(state.code[state.programCounter]);
}