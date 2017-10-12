    .assembly Main {}
    .assembly extern mscorlib {}
    .method static void Main()
    {
      .entrypoint
      .maxstack 2
      .locals(int32 a,
      int32 b,
      int32 c)
      ldc.i4 1
      stloc 0
      ldc.i4 2
      stloc 1
      ldloc 0
      ldloc 1
      mul
      stloc 2
      
      ldloc 0
      call void class [mscorlib]System.Console::WriteLine(int32)
      ldloc 1
      call void class [mscorlib]System.Console::WriteLine(int32)
      ldloc 2
      call void class [mscorlib]System.Console::WriteLine(int32)
      ret
    }