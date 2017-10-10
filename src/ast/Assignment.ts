import { Exp, Stmt } from './ASTNode';
import { CompilationContext } from '../compileCIL/CompilationContext';

/**
  Representación de las asignaciones de valores a variables.
*/
export class Assignment implements Stmt {

  id: string;
  exp: Exp;

  constructor(id: string, exp: Exp) {
    this.id = id;
    this.exp = exp;
  }

  toString(): string {
    return `Assignment(${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.id} = ${this.exp.unparse()}`;
  }

  compileCIL(context: CompilationContext): CompilationContext {
    context = this.exp.compileCIL(context);
    var str = `${context.getTag()}: stloc.${context.addVar(this.id,'int32')}`;
    context.appendInstruction(str);
    return context;
  }

  maxStackIL(value: number): number {
    return value - 1;
  }
}
