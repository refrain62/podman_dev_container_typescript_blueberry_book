{
    const r = /ab+c/;

    // true
    console.log(r.test("aabbbc"));
    
    // true
    console.log(r.test("Hello, abc world！"));
    
    // false
    console.log(r.test("ABC"));
    
    // false
    console.log(r.test("こんにちは"));

    const r2 = /^abc/;

    // true
    console.log(r2.test("abcdefg"));
    
    // false
    console.log(r2.test("Hello abcdefg"));
}