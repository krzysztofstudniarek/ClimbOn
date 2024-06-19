
import { handleJump, handleJumpI } from "./operations/jump";
import { handleAnd, handleEq, handleOr } from "./operations/logical";
import { handleAdd, handleDiv, handleGt, handleLt, handleMul, handleSub } from "./operations/numerical";
import { PUSH, ADD, SUB, MUL, DIV, STOP, LT, GT, EQ, AND, OR, JUMP, JUMPI } from "./operations/opCodes";
import { handlePush } from "./operations/push";
import { handleStop } from "./operations/stop";
const EXECUTION_LIMIT = 10000;

export class Interpreter {

    state: { programCounter: number; stack: (string | number)[]; code: (string | number)[]; executionCounter: number};

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
        [OR, handleOr],
        [JUMP, handleJump],
        [JUMPI, handleJumpI],
    ]);
    
    constructor() {
        this.state = {
            programCounter: 0,
            stack: [],
            code: [],
            executionCounter: 0,
        };
    }

    runCode(code: (string | number)[]) {
        console.log(`Running code: ${code}`);
        this.state.code = code;

        while(this.state.programCounter < this.state.code.length) {
            this.state.executionCounter++;
            const opCode = this.state.code[this.state.programCounter];
            (this.operations.get(opCode as string)!)(this.state);


            if(this.state.executionCounter > EXECUTION_LIMIT) {
                throw new Error(`Execution limit of ${EXECUTION_LIMIT} exceeded`);
            }

            this.state.programCounter++;
        }

        return this.state.stack[this.state.stack.length - 1];
    }
}