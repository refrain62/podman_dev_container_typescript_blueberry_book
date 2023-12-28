{
    const nested = {
        num: 123,
        obj: {
            foo: "hello",
            bar: "world"
        }
    }

    const { num, obj: { foo } } = nested;

    // 123
    console.log(num);

    // "hello"
    console.log(foo);
}