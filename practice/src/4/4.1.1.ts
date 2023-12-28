{
    function range(min: number, max: number): number[] {
        const result = [];
        for (let i = min; i <= max; i++) {
            result.push(i);
        }
        return result;
    }

    // [ 5, 6, 7, 8, 9, 10 ]
    console.log(range(5, 10));

    // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
    // range("5", "10");

    // 2 個の引数が必要ですが、1 個指定されました。ts(2554)
    // 4.1.1.ts(2, 33): 'max' の引数が指定されていません。
    // range( 5 );

    // function range2(min: number, max: number): number[] {
    //     const result = [];
    //     for (let i = min; i <= max; i++) {
    //         result.push(i);
    //     }
    //     // 型 'number' を型 'number[]' に割り当てることはできません。
    //     return max;
    // }

    
}