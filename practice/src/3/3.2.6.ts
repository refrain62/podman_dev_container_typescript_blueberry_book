{
    type MyObj = {
        foo: boolean;
        bar: boolean;
        baz?: number;
    }

    const obj: MyObj = {foo: false, bar: true};
    const obj2: MyObj = {foo: true, bar: false, baz: 1234};

    // undefinedと表示される
    console.log(obj.baz);

    // 1234と表示される
    console.log(obj2.baz);

    // これはコンパイルエラー
 //   console.log(obj2.baz * 1000);

    // これはOK
    if(obj2.baz !== undefined) {
        console.log(obj2.baz * 1000);
    }
}