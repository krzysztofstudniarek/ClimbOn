import { Interpreter } from "../interpreter";
import { EQ, PUSH, STOP } from "./opCodes";

test(`Test EQ`, () => {
    expect(new Interpreter().runCode([PUSH, 6, PUSH, 3, EQ, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 3, EQ, STOP])).toBe(1);
});