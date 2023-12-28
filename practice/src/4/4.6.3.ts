{
    function map(array: number[], callback: (value: number) => number): number[] {
        const result: number[] = [];
        for (const element of array) {
            result.push(callback(element));
        }
        return result;
    }

    const data = [1, 1, 2, 3, 5, 6, 13];
    const result = map(data, (x) => x * 10);
    // [
    //   10, 10,  20, 30,
    //   50, 60, 130
    // ]
    console.log(result);
}