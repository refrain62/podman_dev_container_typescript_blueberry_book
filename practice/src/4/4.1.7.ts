{
    const sum = (...args: number[]): number => {
        let result = 0;
        for (const num of args) {
            result += num;
        }
        return result;
    }

    // 111
    console.log(sum(1, 10, 100));
    // 579
    console.log(sum(123, 456));
    // 0
    console.log(sum());

    const sum2 = (base: number, ...args: number[]): number => {
        let result = base * 1000;
        for (const num of args) {
            result += num;
        }
        return result;
    }

    // 1110
    console.log(sum2(1, 10, 100));
    // 123456
    console.log(sum2(123, 456));
    // 45000 
    console.log(sum2(45));
    // 最低でも 1 個の引数が必要ですが、0 個指定されました。
    // console.log(sum2());
}