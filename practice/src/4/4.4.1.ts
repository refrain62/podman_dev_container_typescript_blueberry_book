{
    function repeat<T>(element: T, length: number): T[] {
        const result: T[] = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }

    // [ 'a', 'a', 'a', 'a', 'a' ]
    console.log(repeat<string>("a", 5));

    // [ 123, 123, 123 ]
    console.log(repeat<number>(123, 3));
}