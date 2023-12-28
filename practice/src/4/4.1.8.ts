{
    const sum = (...args: number[]): number => {
        let result = 0;
        for (const num of args) {
            result += num;
        }
        return result;
    };

    const nums = [1, 2, 3, 4, 5];

    // 15
    console.log(sum(...nums));


    const sum3 = (a: number, b: number, c: number) => a + b + c;
    // spread 引数には、組の種類を指定するか、rest パラメーターに渡す必要があります。
    // console.log(sum3(...nums));

}