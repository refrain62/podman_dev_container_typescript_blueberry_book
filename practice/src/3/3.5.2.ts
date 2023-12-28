{
    const arr = [0, 123, -456 * 100];
    // 0
    console.log(arr[0]);

    // 123
    console.log(arr[1]);

    // [ 0, 123, -45600 ]
    console.log(arr);

    // [ 0, 5400, -45600 ]
    arr[1] = 5400;
    console.log(arr);
}