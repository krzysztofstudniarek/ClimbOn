import { Interpreter } from "../interpreter";
import { PUSH, STOP } from "./opCodes";

test(`Test PUSH`, () => {
    expect(new Interpreter().runCode([PUSH, 2, STOP])).toBe(2);
});
