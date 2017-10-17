import { Stmt } from './ASTNode';
import { CompilationContext } from '../compileCIL/CompilationContext';

/**
  Representación de las secuencias de sentencias.
*/
export class Sequence implements Stmt {

  statements: [Stmt];

  constructor(statements: [Stmt]) {
    this.statements = statements;
  }

  toString(): string {
    const statements = this.statements
      .filter((stmt) => (stmt !== undefined))
      .map((stmt) => (stmt.toString()))
      .join(", ");
    return `Sequence(${statements})`;
  }

  unparse(): string {
    const statements = this.statements
      .filter((stmt) => (stmt !== undefined))
      .map((stmt) => (stmt.toString()))
      .join(" ");
    return `{ ${statements} }`
  }

  compileCIL(context: CompilationContext): CompilationContext {
      var i:any;
      for (i in this.statements){
        context = i.compileCIL(context);
        return context;
      }
    }


  maxStackIL(value: number): number {
    var val = 0;
    for (let stmt of this.statements) {
      if(stmt.maxStackIL(value)>val){
          val = stmt.maxStackIL(value)
      }
    }
    return val;
  }
}
