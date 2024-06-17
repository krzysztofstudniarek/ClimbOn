export const handleStop = (state: any) => {
    console.log(`STOP`);
    state.programCounter = state.code.length;
}