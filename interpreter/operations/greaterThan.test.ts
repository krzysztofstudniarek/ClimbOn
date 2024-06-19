import { Interpreter } from "../interpreter";
import { GT, PUSH, STOP } from "./opCodes";

test(`Test GT`, () => {
    expect(new Interpreter().runCode([PUSH, 6, PUSH, 3, GT, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 6, GT, STOP])).toBe(1);
});
