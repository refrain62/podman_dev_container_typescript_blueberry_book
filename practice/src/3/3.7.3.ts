{
    // Hello, foobar world! abbc
    console.log("Hello, abbbbbbc world! abbc".replace(/ab+c/, "foobar"));
    
    // Hello, foobar world! foobar
    console.log("Hello, abbbbbbc world! abbc".replace(/ab+c/g, "foobar"));


    const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);
    if(result !== null) {
        // abbbbbbc
        console.log(result[0]);
        // bbbbbb
        console.log(result[1]);
    }

    const result2 = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
    if(result2 !== null) {
        // [Object: null prototype] { worldName: 'bbbbbb' }
        console.log(result2.groups);
    }

    const result3 = "Hello, abbbbbbc world! abc".match(/a(b+)c/g);
    // [ 'abbbbbbc', 'abc' ]
    console.log(result3);
}