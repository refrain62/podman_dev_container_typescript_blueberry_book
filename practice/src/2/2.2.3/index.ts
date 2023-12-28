// ブロックで囲まないと定数が重複していると怒られる
{
const greeting: string = "Hello, ";
const target: string = "world!";
console.log(greeting + target);
}