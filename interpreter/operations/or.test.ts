import { Interpreter } from "../interpreter";
import { OR, PUSH, STOP } from "./opCodes";

test(`Test OR`, () => {
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 1, OR, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 0, OR, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 1, OR, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 0, OR, STOP])).toBe(0); 
});