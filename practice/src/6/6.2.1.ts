{
    // これは"foo"という文字列のみが属するリテラル型
    type FooString = "foo";

    // これはOK
    const foo: FooString = "foo";

    // エラー
    // 型 '"bar"' を型 '"foo"' に割り当てることはできません。
    // const bar: FooString = "bar";


    // 文字列のリテラル型
    const foo2: "foo" = "foo";

    // 数値のリテラル型
    const one: 1 = 1;

    // 真偽値のリテラル型
    const t: true = true;

    // BigIntのリテラル型
    const three: 3n = 3n;

    // 変数uhyoNameは"uhyo"型
    const uhyoName = "uhyo";

    // 変数ageは26型
    const age = 26;
}