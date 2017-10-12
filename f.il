.assembly Main {}
.assembly extern mscorlib {}
.method static void Main()
{
  .entrypoint
  .maxstack 1
  .locals(int32 a)
  ldc.i4.1
  stloc.0

  ldloc.0
  call void class [mscorlib]System.Console::WriteLine(int32)
  ret
}
