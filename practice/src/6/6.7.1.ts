{
  function isStringOrNumber(value: unknown): value is string | number {
    return typeof value === "string" || typeof value === "number"
  }

  const something: unknown = 123;

  if (isStringOrNumber(something)) {
    // ここではsomething は string | number 型
    console.log(something.toString())
  }
}
{
  function isStringOrNumber2(value: unknown): boolean {
    return typeof value === "string" || typeof value === "number"
  }

  const something: unknown = 123;

  if (isStringOrNumber2(something)) {
    // エラー： Obejct is of type 'unknown'
    // console.log(something.toString())
  }
}
{
  function isStringOrNumber3(value: unknown): value is string | number {
    // 実装を間違えているがエラーが起きない
    return typeof value === "string" || typeof value === "boolean"
  }
}
{
  type Human = {
    type: "human"
    name: string
    age: number
  }

  function isHuman(value: any): value is Human {
    // プロパティアクセスできない可能性を排除
    if (value == null) return false

    // 3つのプロパティの型を判定
    return (
      value.type === "Human" &&
      typeof value.name === "string" &&
      typeof value.age === "number"
    )
  }

  function assertHuman(value: any): asserts value is Human {
    // プロパティアクセスできない可能性を排除
    if (value == null) {
      throw new Error('Given value is null or undefined')
    }

    // 3爪のプロパティの型を判定
    if (
      value.type !== "Human" ||
      typeof value.name !== "string" ||
      typeof value.age !== "number"
    ) {
      throw new Error('Given value is not a Human')
    }
  }

  function checkAndUseHuman(value: unknown) {
    assertHuman(value)

    // ここから下ではvalueがHuman型になる
    const name = value.name;
    // 略
  }
}