{
    {
        type User = {name: string, age: number;};
        const u: User = {
            name: "uhyo",
            age: 26,
            // 型 '{ name: string; age: number; telNumber: string; }' を型 'User' に割り当てることはできません。
            // オブジェクト リテラルは既知のプロパティのみ指定できます。'telNumber' は型 'User' に存在しません。ts(2322)
    //        telNumber: "09012345678"
        };
    }
    {
        type User = {name: string; age: number;};
        const obj = {
            name: "uhyo",
            age: 26,
            // エラーにならない
            telNumber: "09012345678"
        };
        const u: User = obj;
    }
}
