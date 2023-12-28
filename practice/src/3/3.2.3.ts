{
    type FooBarObj = {
        foo: number;
        bar: string;
    };

    const obj: FooBarObj = {
        foo: 123,
        bar: "Hello",
    }

    // 別名もつけれる
    type UserId = string;
    const id: UserId = "uhyo";

    type FooOjb = { foo: number };
    type MyObj = FooOjb;

    const obje: MyObj = { foo: 0 }
    
}