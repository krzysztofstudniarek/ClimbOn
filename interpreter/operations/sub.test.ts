import { Interpreter } from "../interpreter";
import { PUSH, STOP, SUB } from "./opCodes";

test(`Test SUB`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, SUB, STOP])).toBe(1);
});
