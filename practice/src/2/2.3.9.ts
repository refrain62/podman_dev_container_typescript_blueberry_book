const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください? ', (answer: any) => {
  // 文字列が入力されるとここが実行される
  console.log(`${answer}が入力されました`);

  // 1000を足して出力
  // ⇒ 1231000 と表示さえる
  console.log(answer + 1000);

  // いったん変数に入れて出力
  // ⇒ それでも文字列として処理される 暗黙の変換
  const result = answer + 1000;
  console.log(result);

  rl.close();
});