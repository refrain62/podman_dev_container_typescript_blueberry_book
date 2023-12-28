{
    function range(min: number, max: number): number[] {
        const result = [];
        for (let i = min; i <= max; i++) {
            result.push(i);
        }
        return result;
    }

    // 5
    // 6
    // 7
    // 8
    // 9
    // 10
    const arr = range(5, 10);
    for (const value of arr) console.log(value);

    // A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
    // function range2(min: number, max: number): number[] {
    //     const result = [];
    //     for (let i = min; i <= max; i++) {
    //         result.push(i);
    //     }
    //     // return result;
    // }

    // const arr2 = range2(5, 10);
    // for (const value of arr2) console.log(value);
}