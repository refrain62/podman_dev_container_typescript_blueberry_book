{
    interface FooBarObj {
        foo: number;
        bar: string;
    }

    const obj: FooBarObj = {
        foo: 0,
        bar: "string",
    }

    // type で代用が可能であり、Declaration Mergingを使う場合以外では困らない
}