
    .assembly Main {}
    .assembly extern mscorlib {}
    .method static void Main()
    {
      .entrypoint
      .maxstack 3
      .locals(int32 x)
      ldc.i4 1
ldc.i4 1
ceq
ldc.i4 2
ldc.i4 2
ceq
and
stloc 0
      ldloc.0
      call       void [mscorlib]System.Console::Write(int32)
      nop
      ret
    }
    