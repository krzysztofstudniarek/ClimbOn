import { Interpreter } from "../interpreter";
import { AND, EQ, OR, PUSH, STOP } from "./opCodes";

test(`Test EQ`, () => {
    expect(new Interpreter().runCode([PUSH, 6, PUSH, 3, EQ, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 3, PUSH, 3, EQ, STOP])).toBe(1);
});

test(`Test AND`, () => {
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 1, AND, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 0, AND, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 1, AND, STOP])).toBe(0);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 0, AND, STOP])).toBe(0);
});

test(`Test OR`, () => {
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 1, OR, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 1, PUSH, 0, OR, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 1, OR, STOP])).toBe(1);
    expect(new Interpreter().runCode([PUSH, 0, PUSH, 0, OR, STOP])).toBe(0); 
});