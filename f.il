.assembly Main {}
.assembly extern mscorlib {}
.method static void Main()
{
  .entrypoint
  .maxstack 600
  .locals(int32 a)
  IL_0: ldc.i4.1
IL_1: ldc.i4.1
IL_2: add
IL_3: stloc.0
  ret
}
