import { Interpreter } from "../interpreter";
import { JUMP, JUMPI, PUSH, STOP } from "./opCodes";

test(`Test JUMP`, () => {
    expect(new Interpreter().runCode([PUSH, 6, JUMP, PUSH, 0, JUMP, PUSH, 'jump successfull', STOP])).toBe('jump successfull');
});

test(`Test JUMPI`, () => {
    expect(new Interpreter().runCode([PUSH, 8, PUSH, 1, JUMPI, PUSH, 0, JUMP, PUSH, 'jump successfull', STOP])).toBe('jump successfull');
});

test(`Test JUMPI`, () => {
    expect(new Interpreter().runCode([PUSH, 8, PUSH, 0, JUMPI, PUSH, 'jump un-successfull', STOP])).toBe('jump un-successfull');
});