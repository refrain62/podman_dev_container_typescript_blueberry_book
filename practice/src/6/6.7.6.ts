{
  // Tは {
  //   readonly name: string
  //   readonly age: number
  // }
  type T = Readonly<{
    name: string
    age: number
  }>;
}
{
  // T は {
  //   name?: string | undefined
  //   age?: number | undefined
  // }
  type T = Partial<{
    name: string
    age: number
  }>
}
{
  // T は {
  //   age: number
  // }
  type T = Pick<{
    name: string
    age: number
  }, "age">
}
{
  type Union = "uhyo" | "hyo" | 1 | 2 | 3
  // T は "uhyo" | "hyo"
  type T = Extract<Union, string>
}
{
  type Union = "uhyo" | "hyo" | 1 | 2 | 3
  // T は 1 | 2 | 3
  type T = Exclude<Union, string>
}