import { Interpreter } from "../interpreter";
import { LT, PUSH, STOP } from "./opCodes";

test(`Test LT`, () => {
    expect(new Interpreter().runCode([PUSH, 6, PUSH, 3, LT, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 6, LT, STOP])).toBe(0);
});