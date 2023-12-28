{
    function helloWorldNTimes(n: number): void {
        for (let i = 0; i < n; i++) {
            console.log("Hello, world!");
        }
    }

    // Hello, world!
    // Hello, world!
    // Hello, world!
    // Hello, world!
    // Hello, world!
    helloWorldNTimes(5);


    function helloWorldNTimes2(n: number): void {
        if (n > 100) {
            console.log(`${n}回なんて無理です！`);
            return;
        }
        for (let i = 0; i < n; i++) {
            console.log("Hello, World!");
        }
    }

    // Hello, world!
    // Hello, world!
    helloWorldNTimes2(2);
    
    // 150回なんて無理です！
    helloWorldNTimes2(150);
}