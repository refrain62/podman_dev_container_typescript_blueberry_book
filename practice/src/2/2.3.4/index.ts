{
    const bignum: bigint = (123n + 456n) * 2n;

    // 1158n と表示される
    console.log(bignum);

    // 整数のみしか扱えなく丸められる
    const result = 5n / 2n;
    // 2n と表示される
    console.log(result);

    // numberとbigintを混ぜるとエラー
    //const wrong = 100n + 50;
}