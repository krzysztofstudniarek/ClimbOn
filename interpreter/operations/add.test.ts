import { Interpreter } from "../interpreter";
import { ADD, PUSH, STOP } from "./opCodes";

test(`Test ADD`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, ADD, STOP])).toBe(5);
});
