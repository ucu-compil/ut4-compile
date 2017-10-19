import { Exp } from './ASTNode';
import { CompilationContext } from '../compileCIL/CompilationContext';

/**
  Representación de constantes numéricas o numerales.
*/
export class Numeral implements Exp {

  value: number;

  constructor(value: number) {
    this.value = value;
  }

  toString(): string {
    return `Numeral(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  compileCIL(context: CompilationContext): CompilationContext {
    var str = `ldc.i4 0x${this.value.toString(16)}`;
    context.appendInstruction(str);
    return context;
  }

  maxStackIL(value: number): number {
    return value + 1;
  }
}
