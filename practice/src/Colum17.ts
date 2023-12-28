{
    type HasName = {name: string};
    type HasNameAndAge = { name: string, age: number };
    type Obj = {
        func: (arg: HasName) => string;
        method(arg: HasName): string;
    }

    const something: Obj = {
        func: user => user.name,
        method: user => user.name,
    }

    const getAge = (user: HasNameAndAge) => String(user.age);
    
    // 型 '(user: HasNameAndAge) => string' を型 '(arg: HasName) => string' に割り当てることはできません。
    // パラメーター 'user' および 'arg' は型に互換性がありません。
    //   プロパティ 'age' は型 'HasName' にありませんが、型 'HasNameAndAge' では必須です。
    // something.func = getAge;

    // これはエラーが発生しない
    something.method = getAge;
}