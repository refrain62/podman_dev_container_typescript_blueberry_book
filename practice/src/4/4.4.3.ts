{
    // 関数の型引数は省略可能
    function repeat<T>(element: T, length: number): T[] {
        const result: T[] = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }

    // resultはstring[]型となる
    const result = repeat("a", 5);

    // resultはnumber[]型となる
    const result2 = repeat(123, 3);
}