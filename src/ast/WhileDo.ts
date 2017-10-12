import { Exp, Stmt } from './ASTNode';
import { CompilationContext } from '../compileCIL/CompilationContext';

/**
  Representación de las iteraciones while-do.
*/
export class WhileDo implements Stmt {
  cond: Exp;
  body: Stmt;

  constructor(cond: Exp, body: Stmt) {
    this.cond = cond;
    this.body = body;
  }

  toString(): string {
    return `WhileDo(${this.cond.toString()}, ${this.body.toString()})`;
  }

  unparse(): string {
    return `while ${this.cond.unparse()} do { ${this.body.unparse()} }`;
  }

  compileCIL(context: CompilationContext): CompilationContext {

    var brsTag = context.getTag();
    var brtrueTag = context.getTag();

    context.appendInstruction('br.s ' + brsTag);
    context.appendInstruction(brtrueTag);
    context = this.body.compileCIL(context);
    context.appendInstruction(brsTag);
    context = this.cond.compileCIL(context);
    context.appendInstruction('brtrue.s ' + brtrueTag);

    return context;
  }

  maxStackIL(value: number): number {
    const maxStackILBody = this.body.maxStackIL(value);
    return 1 + maxStackILBody; // cond + body
  }
}
