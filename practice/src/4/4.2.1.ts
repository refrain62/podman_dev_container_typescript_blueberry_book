{
    const xRepeat = (num: number): string => "x".repeat(num);

    type F = (repeatNum: number) => string;
    const xRepeat2: F = (num: number): string => "x".repeat(num);

    type F2 = (arg: string, arg2: string) => boolean;
    // 型 '(num: number) => void' を型 'F2' に割り当てることはできません。
    // パラメーター 'num' および 'arg' は型に互換性がありません。
    // 型 'string' を型 'number' に割り当てることはできません。
    // const fun: F2 = (num: number): void => console.log(num);

    type F3 = (repeatNum: number) => string;
    const xRepeat3: F3 = (num: number): string => "x".repeat(num);
    
}