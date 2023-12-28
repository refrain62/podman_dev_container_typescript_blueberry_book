{
    const arr = [1, 10, 100];
    arr.push(1000);

    // 
    console.log(arr);

    // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
//    arr.push("foobar");


    const arr2: readonly number[] = [1, 10, 100];

    // プロパティ 'push' は型 'readonly number[]' に存在しません。
//    arr2.push(10000);

    const arr3 = [1, 10, 100];

    // true
    console.log(arr3.includes(100));

    // false
    console.log(arr3.includes(50));

    // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません
//    console.log(arr3.includes("foobar"));


    const arr4 = [1, 10, 100];

    // 3
    console.log(arr4.length);

    arr4.push(1000);

    // 4
    console.log(arr4.length);
}