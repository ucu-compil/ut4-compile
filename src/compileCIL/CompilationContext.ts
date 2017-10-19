class VarIL {
  id: string;
  type: string;

  constructor(id: string, type: string) {
    this.id = id;
    this.type = type;
  }
}

export class CompilationContext {

  private count: number;
  private vars: VarIL[];
  private cil: string[];

  constructor() {
    this.count = 0;
    this.vars = [];
    this.cil = [];
  }

  getTag(): string {
    return `IL_${this.count++}`;
  }

  addVar(id: string, type: string): number {
    const v = new VarIL(id, type);
    return this.vars.push(v) - 1;
  }

  getVar(id: string): number {
    return this.vars.findIndex((v) => (v.id === id));
  }

  appendInstruction(cil: string) {
    this.cil.push(cil);
  }

  freeVariables(): string {
    return this.vars.map((v) => (`${v.type} ${v.id}`)).join(',\n');
  }

  getCIL(maxStack: number): string {//Fabulizar
    var fs = require('fs');
    var str= `
    .assembly Main {}
    .assembly extern mscorlib {}
    .method static void Main()
    {
      .entrypoint
      .maxstack ${maxStack}
      .locals(${this.freeVariables()})
      ${this.cil.join('\n')}
      ldstr "resultado = "
      ldloc.0
      box [mscorib]System.Int32
      call string [mscorlib]System.String::Concat(object,object)
      call void [mscorlib]system.Console::WriteLine(string) 
      ret
    }
    `
    fs.writeFileSync("ut4-comp.il", str, function(err){
      if(err){
        return console.log(err);
      }
    });
    return str;
  }
}
