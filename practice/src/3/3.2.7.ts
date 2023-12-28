{
    type MyObj = {
        readonly foo: number;
    }

    const obj: MyObj = {foo: 123};

    // readonlyなのでエラー
//    obj.foo = 0;
}