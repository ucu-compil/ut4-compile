import { Exp } from './ASTNode';
import { CompilationContext } from '../compileCIL/CompilationContext';

/**
  Representación de las comparaciones por menor o igual.
*/
export class CompareGreatOrEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareGreatOrEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} >= ${this.rhs.unparse()})`;
  }

  compileCIL(context: CompilationContext): CompilationContext {
    context = this.lhs.compileCIL(context);
    context = this.lhs.compileCIL(context);
    context.appendInstruction('clt');
    context.appendInstruction('neg');
    return context;
  }

  maxStackIL(value: number): number {
    return Math.max(this.lhs.maxStackIL(value),this.rhs.maxStackIL(value) + 1);
  }
}
