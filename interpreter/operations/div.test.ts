import { Interpreter } from "../interpreter";
import { DIV, PUSH, STOP } from "./opCodes";

test(`Test DIV`, () => {
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 6, DIV, STOP])).toBe(2);
});