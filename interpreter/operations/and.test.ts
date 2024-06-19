import { Interpreter } from "../interpreter";
import { AND, PUSH, STOP } from "./opCodes";

test(`Test AND`, () => {
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 1, AND, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 0, AND, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 1, AND, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 0, AND, STOP])).toBe(0);
});