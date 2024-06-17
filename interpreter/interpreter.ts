import { handleAdd } from "./operations/add";
import { handleAnd } from "./operations/and";
import { handleDiv } from "./operations/div";
import { handleEq } from "./operations/equals";
import { handleGt } from "./operations/greaterThan";
import { handleLt } from "./operations/lessThan";
import { handleMul } from "./operations/mul";
import { PUSH, ADD, SUB, MUL, DIV, STOP, LT, GT, EQ, AND, OR } from "./operations/opCodes";
import { handleOr } from "./operations/or";
import { handlePush } from "./operations/push";
import { handleStop } from "./operations/stop";
import { handleSub } from "./operations/sub";

export class Interpreter {

    state: { programCounter: number; stack: (string | number)[]; code: (string | number)[]; };

    operations = new Map([
        [PUSH, handlePush],
        [ADD, handleAdd],
        [SUB, handleSub],
        [MUL, handleMul],
        [DIV, handleDiv],
        [STOP, handleStop],
        [LT, handleLt],
        [GT, handleGt],
        [EQ, handleEq],
        [AND, handleAnd],
        [OR, handleOr]
    ]);
    
    constructor() {
        this.state = {
            programCounter: 0,
            stack: [],
            code: []
        };
    }

    runCode(code: (string | number)[]) {
        console.log(`Running code: ${code}`);
        this.state.code = code;

        while(this.state.programCounter < this.state.code.length) {
            const opCode = this.state.code[this.state.programCounter];
            (this.operations.get(opCode as string)!)(this.state);

            this.state.programCounter++;
        }

        return this.state.stack[this.state.stack.length - 1];
    }
}