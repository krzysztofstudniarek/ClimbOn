import { Interpreter } from "./interpreter";
import { PUSH, ADD, SUB, MUL, STOP, JUMP, DIV, AND} from "./operations/opCodes";

test(`Test Interpreter`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, MUL, PUSH, 5, ADD, PUSH, 11, SUB, STOP])).toBe(0);
});

test(`Test Interpreter Errors`, () => {
    expect(() => new Interpreter().runCode([PUSH, 5, JUMP, STOP])).toThrow("Invalid jump destination: destination (5), code length (4)");
    expect(() => new Interpreter().runCode([PUSH, 5, PUSH, "ala ma kota", DIV, STOP])).toThrow("requires two numbers");
    expect(() => new Interpreter().runCode([PUSH])).toThrow("PUSH can't be last operation in the code");
    expect(() => new Interpreter().runCode([PUSH, 0, PUSH, 5, DIV, STOP])).toThrow("Division by zero");
    expect(() => new Interpreter().runCode([PUSH, 0, PUSH, 5, AND, STOP])).toThrow("");
});

test(`Test Interpreter execution limit`, () => {
    expect(() => new Interpreter().runCode([PUSH, 0, JUMP, STOP])).toThrow("Execution limit of 10000 exceeded");
});