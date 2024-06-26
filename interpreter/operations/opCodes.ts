export const STOP = 'STOP';
export const ADD = 'ADD';
export const PUSH = 'PUSH';
export const SUB = 'SUB';
export const MUL = 'MUL';
export const DIV = 'DIV';
export const LT = 'LT';
export const GT = 'GT';
export const EQ = 'EQ';
export const AND = 'AND';
export const OR = 'OR';
export const JUMP = 'JUMP';
export const JUMPI = 'JUMPI';

export const getValues = (state: any) => {
    return {
        a: +(state.stack.pop() || 0),
        b: +(state.stack.pop() || 0)
    };
}