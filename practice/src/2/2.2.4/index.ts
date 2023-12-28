// ブロックで囲まないと定数が重複していると怒られる
{
let greeting: string, target: string;
greeting = "Hello, ";
target = "world!";
console.log(greeting + target);
}