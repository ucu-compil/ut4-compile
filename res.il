    .assembly Main {}
    .assembly extern mscorlib {}
    .method static void Main()
    {
      .entrypoint
      .maxstack 2
      .locals(int32 a,
      int32 b)
      ldc.i4 0xa
      stloc 0
      ldloc 0
      ldloc 0
      add
      stloc 1
      
      ldloc 0
      call void class [mscorlib]System.Console::WriteLine(int32)
      ldloc 1
      call void class [mscorlib]System.Console::WriteLine(int32)
      ret
    }