import { Interpreter } from "./interpreter";
import { PUSH, ADD, SUB, MUL, STOP} from "./operations/opCodes";

test(`Test Interpreter`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, MUL, PUSH, 5, ADD, PUSH, 11, SUB, STOP])).toBe(0);
});