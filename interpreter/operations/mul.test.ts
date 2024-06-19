import { Interpreter } from "../interpreter";
import { MUL, PUSH, STOP } from "./opCodes";

test(`Test MUL`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, MUL, STOP])).toBe(6);
});