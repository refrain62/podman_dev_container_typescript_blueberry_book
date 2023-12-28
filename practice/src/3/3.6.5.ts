{
    const obj = {
        foo: 123,
        bar: "string",
        baz: false,
    };

    const { foo, ...restObj } = obj;

    // 123
    console.log(foo);

    // { bar: 'string', baz: false }
    console.log(restObj);

    const arr = [1, 1, 2, 3, 5, 8, 13];

    const [first, second, third, ...rest] = arr;

    console.log(first);     // 1
    console.log(second);    // 1
    console.log(third);     // 2
    console.log(rest);      // [3, 5, 8, 13]
}