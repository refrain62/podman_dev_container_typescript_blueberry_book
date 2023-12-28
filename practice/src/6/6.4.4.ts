{
    type Obj = {
        0: string;
        1: number;
    }

    const obj: Obj = {
        0: "uhyo",
        "1": 26
    };

    obj["0"] = "jhon";
    obj[1] = 15;

    // ObjKeysは 0 | 1 型
    type ObjKeys = keyof Obj;

    // function get<T, K extends keyof T>(obj: Text, key: K): T[K] {
    //     // エラー
    //     // 型 'string | number | symbol' を型 'string' に割り当てることはできません。
    //     // 型 'number' を型 'string' に割り当てることはできません。
    //     const keyName: string = key;
    //     return obj[key];
    // }
    
    // 「& string」をつけることでエラーにならない
    function get<T, K extends keyof T & string>(obj: T, key: K): T[K] {
        const keyName: string = key;
        return obj[key];
    }
}