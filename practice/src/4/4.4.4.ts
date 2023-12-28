{
    // 型引数を持つ関数型
    const repeat = function<T>(element: T, length: number): T[] {
        const result: T[] = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }

    // repeatの型は const repeat: <T>(element: T, length: number) => T[] 

    type Func = <T>(arg: T, num: number) => T[];

    const repeat2: Func = (element, length) => {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    };
}