import { PUSH, ADD, SUB, MUL, DIV, STOP, LT, GT } from "./opCodes";

export class Interpreter {

    state: { programCounter: number; stack: (string | number)[]; code: (string | number)[]; };

    operations = new Map([
        [PUSH, this.handlePush],
        [ADD, this.handleAdd],
        [SUB, this.handleSub],
        [MUL, this.handleMul],
        [DIV, this.handleDiv],
        [STOP, this.handleStop],
        [LT, this.handleLt],
        [GT, this.handleGt],
        ['EQ', this.handleEq],
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
            this.operations.get(opCode as string)?.call(this);

            this.state.programCounter++;
        }

        return this.state.stack[this.state.stack.length - 1];
    }

    private handlePush() {
        this.state.programCounter++;
        console.log(`PUSH ${this.state.code[this.state.programCounter]}`);
        this.state.stack.push(this.state.code[this.state.programCounter]);
    }

    private getValues(){
        return {
            a: +(this.state.stack.pop() || 0),
            b: +(this.state.stack.pop() || 0)
        };
    }

    private handleAdd() {
        const {a, b} = this.getValues();
        console.log(`ADD ${a} + ${b} = ${a + b}`);
        this.state.stack.push(a + b);
    }

    private handleSub() {
        const {a, b} = this.getValues();
        console.log(`SUB ${a} - ${b} = ${a - b}`);
        this.state.stack.push(a - b);
    }

    private handleMul() {
        const {a, b} = this.getValues();
        console.log(`MUL ${a} * ${b} = ${a * b}`);
        this.state.stack.push(a * b);
    }

    private handleDiv() {
        const {a, b} = this.getValues();
        console.log(`DIC ${a} / ${b} = ${a / b}`);
        this.state.stack.push(a / b);
    }

    private handleStop() {
        console.log(`STOP`);
        this.state.programCounter = this.state.code.length;
    }

    private handleLt() {
        const {a, b} = this.getValues();
        console.log(`LT ${a} < ${b} = ${a < b}`);
        this.state.stack.push(a < b ? 1 : 0);
    }

    private handleGt() {
        const {a, b} = this.getValues();
        console.log(`LT ${a} > ${b} = ${a > b}`);
        this.state.stack.push(a > b ? 1 : 0);
    }

    private handleEq() {
        const {a, b} = this.getValues();
        console.log(`LT ${a} === ${b} = ${a === b}`);
        this.state.stack.push(a === b ? 1 : 0);
    }
}