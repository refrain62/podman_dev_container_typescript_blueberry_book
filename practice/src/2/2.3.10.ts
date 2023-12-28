{
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('数値を入力してください? ', (answer: any) => {
        const num = Number(answer);

        // 123が入力された場合 1000を足して出力
        // ⇒ 1123 と表示さえる
        console.log(num + 1000);

        // 1 と表示
        const num1 = Number(true);
        console.log(num1);

        // 0 と表示
        const num2 = Number(false);
        console.log(num2);

        // 0 と表示
        const num3 = Number(null);
        console.log(num3);

        // NaN と表示
        const num4 = Number(undefined);
        console.log(num4);


        // 1234n と表示
        const bigint1 = BigInt("1234");
        console.log(bigint1);

        // 500n と表示
        const bigint2 = BigInt(500);
        console.log(bigint2);

        // 1n と表示
        const bigint3 = BigInt(true);
        console.log(bigint3);

        rl.close();

        // これは例外
        //const bigint = BigInt("foooo");

        // true
        console.log(Boolean(123));
        // false
        console.log(Boolean(0));
        // true
        console.log(Boolean(1n));
        // false
        console.log(Boolean(0n));
        // false
        console.log(Boolean(""));
        // true
        console.log(Boolean("foobar"));
        // false
        console.log(Boolean(null));
        // false
        console.log(Boolean(undefined));
    });

}