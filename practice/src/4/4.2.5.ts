{
    type MyFunc = {
        isUsed?: boolean;
        (arg: number): void;
    };

    const double: MyFunc = (arg: number) => {
        console.log(arg * 2);
    };

    // doubleはisUsedプロパティを持つ
    double.isUsed = true;
    // true
    console.log(double.isUsed);

    // doubleは関数として呼び出せる
    // 2000
    double(1000);


    type F = (arg: string) => number;
    type G = {(arg: string): number; };

    type SwapFunc = {
        (arg: string): number;
        (arg: number): boolean;
    };
}

