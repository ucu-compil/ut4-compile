
    .assembly Main {}
    .assembly extern mscorlib {}
    .method static void Main()
    {
      .entrypoint
      .maxstack 2
      .locals(int32 a)
      ldc.i4 1
ldc.i4 1
add
stloc.0
      ret
    }
    