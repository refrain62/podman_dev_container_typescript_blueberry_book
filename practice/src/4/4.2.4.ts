{
    const xRepeat = (arg: number): string => "x".repeat(arg);

    type F = (arg: number) => string;
    // この関数式は引数の型を書かなくてもOK
    const xRepeat2: F = (num) => "x".repeat(num);

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = nums.filter((x) => x % 3 === 0);
    // [ 3, 6, 9 ]
    console.log(arr2);

    type Greetable = {
        greet: (str: string) => string;
    }
    const obj: Greetable = {
        greet: (str) => `Hello, ${str}`
    };

    // パラメーター 'num' の型は暗黙的に 'any' になっていますが、使い方からより良い型を推論できます。
    // const f = (num) => num * 2;
}