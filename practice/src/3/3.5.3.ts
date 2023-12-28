{
    // これはOK
    const arr: number[] = [1, 10, 100];

    // 型 'number' を型 'string' に割り当てることはできません。
//    const arr2: string[] = [123, 456];

    // 簡単な型の配列
    const arr1: boolean[] = [false, true];

    // 複雑な型の配列
    const arr2: Array<{
        name: string;
    }> = [
        {name: "山田さん"},
        {name: "田中さん"},
        {name: "鈴木さん"}
    ];

    // number[]型
    const arr3 = [1, 10, 100];

    // (String | number | boolean)[]型
    const arr4 = [100, "文字列", false];
}