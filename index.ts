import { PUSH, ADD, SUB, MUL, DIV, STOP } from "./interpreter/opCodes";
import { Interpreter} from "./interpreter/interpreter";

const code = [PUSH, 2, PUSH, 3, MUL, PUSH, 5, ADD, PUSH, 11, SUB, STOP]; //expected res 0
new Interpreter().runCode(code);


const code2 = [PUSH, 2, PUSH, 3, MUL, PUSH, 6, DIV, STOP]; //expected res 1
new Interpreter().runCode(code2);