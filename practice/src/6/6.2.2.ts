{
    function getHelloStr(): `Hello, ${string}!` {
        const rand = Math.random();

        if (rand < 0.3) {
            return "Hello, world!";
        }
        else if (rand < 0.6) {
            return "Hello, my world!";
        }
        // else if (rand < 0.9) {
        //     // 型 '"Hello, world."' を型 '`Hello, ${string}!`' に割り当てることはできません。
        //     return "Hello, world.";
        // }
        // else  {
        //     // 型 '"Hell, world!"' を型 '`Hello, ${string}!`' に割り当てることはできません。
        //     return "Hell, world!";
        // }
        return "Hello, test!";
    }

    // ランダムで出力内容が変わる
    console.log( getHelloStr() );


    function makeKey<T extends string>(userName: T) {
        return `user:${userName}` as const;
    }

    const uhyoKey: "user:uhyo" = makeKey("uhyo");

    // user:uhyo
    console.log(uhyoKey);

    function fromKey<T extends string>(key: `user:${T}`): T {
        return key.slice(5) as T;
    }

    // userは"uhyo"型
    const user = fromKey("user:uhyo");

    // uhyo
    console.log(user);
}