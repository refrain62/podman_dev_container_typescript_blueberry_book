{
  type HasToString = {
    toString: () => string
  }

  function useToString1(value: HasToString) {
    console.log(`value is ${value.toString()}`)
  }

  // "value is foo!"と表示される
  useToString1({
    toString() {
      return "foo!";
    },
  }) 

  // "value is 3.14"と表示される
  useToString1(3.14)
}
{
  type HasToString = {
    toString: () => string
  }

  function useToString2(value: HasToString & object) {
    console.log(`value is ${value.toString()}`)
  }

  // "value is foo!"　と表示される
  useToString2({
    toString() {
      return "foo!"
    }
  })

  // エラー: Argument of type 'number' is not assignable to parameter of type 'HasToString & object'.
  //          Type 'number' is not assignable to type 'object'
  //useToString2(3.14)

  function useNever(value: never) {
    // neer 型はどんな型にも当てはめれる
    const num: number = value;
    const str: string = value 
    const obj: object = value
    console.log(`value is ${value}`)
  }

  // エラー： Argment of type '{}' is not assignable to parameter of type 'neber'
  // useNever({})

  // エラー： Argment of type 'number' is not assign to paramter of type 'never'
  // useNever(3.14)


  function thrower(): never {
    throw new Error("error!!!!")
  }

  // コンパイルエラーは起きない
  const result: never = thrower();

  const str: string = result;
  console.log(str)
}