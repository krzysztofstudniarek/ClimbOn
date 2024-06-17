import { Interpreter } from "./interpreter";
import { PUSH, ADD, SUB, MUL, DIV, STOP, LT } from "./opCodes";

test(`Test PUSH`, () => {
    expect(new Interpreter().runCode([PUSH, 2, STOP])).toBe(2);
});

test(`Test ADD`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, ADD, STOP])).toBe(5);
});

test(`Test SUB`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, SUB, STOP])).toBe(1);
});

test(`Test MUL`, () => {
    expect(new Interpreter().runCode([PUSH, 2, PUSH, 3, MUL, STOP])).toBe(6);
});

test(`Test DIV`, () => {
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 6, DIV, STOP])).toBe(2);
});

test(`Test LT`, () => {
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 6, LT, STOP])).toBe(1);
});