{
const str1: string = "Hello";
const str2: string = 'world!';
// "Hello, world!" と表示される
console.log(str1 + ", " + str2);

// テンプレートリテラル
const message: string = `Hello
world!`;
console.log(message);
}
{
const str1: string = "Hello";
const str2: string = "world";
console.log(`${str1}, ${str2}`)
}
{
    // 123 + 456 = 579 と表示される
    console.log(`123 + 456 = ${123 + 456}`);
}