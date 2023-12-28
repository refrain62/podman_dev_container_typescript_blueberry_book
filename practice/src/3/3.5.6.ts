 {
    const arr = [1, 10, 100];

    // 1
    // 10
    // 100
    for(const elm of arr) {
        console.log(elm);
    }

    // 10
    // 100
    // 1000
    for(let elm of arr) {
        elm *= 10;
        console.log(elm);
    }

    // [ 1, 10, 100 ]
    console.log(arr);
} 