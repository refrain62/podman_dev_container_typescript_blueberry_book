{
    const str = "Hello, world";
    console.log(str.length);

    type HasLength = { length: number };
    const obj: HasLength = "foobar";

    // これはOK
    let val: {} = 123;
    val = "foobar";
    val = { num: 1234 };
    // これはエラー
    // val = null;
    // val = undefined;
}