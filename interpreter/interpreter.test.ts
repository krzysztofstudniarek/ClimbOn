import { Interpreter } from "./interpreter";
import { PUSH, ADD, SUB, MUL, DIV, STOP, LT, GT, EQ } from "./opCodes";

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
    expect(new Interpreter().runCode([PUSH, 6, PUSH, 3, LT, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 6, LT, STOP])).toBe(0);
});

test(`Test GT`, () => {
    expect(new Interpreter().runCode([PUSH, 6, PUSH, 3, GT, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 6, GT, STOP])).toBe(1);
});

test(`Test EQ`, () => {
    expect(new Interpreter().runCode([PUSH, 6, PUSH, 3, EQ, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 3, EQ, STOP])).toBe(1);
});