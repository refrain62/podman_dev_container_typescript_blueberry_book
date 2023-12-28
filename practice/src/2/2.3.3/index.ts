{
    // 数値リテラル
    const binary = 0b1010;      // 2進数リテラル
    const octal = 0o755;        // 8進数リテラル
    const hexadecimal = 0xff;   // 16進数リテラル

    // 10 493 255 と表示される
    console.log(binary, octal, hexadecimal);

    const big = 1e8;
    const small = 4e-5;

    // 100000000 0.00004 と表示される
    console.log(big, small);

    const million = 1_000_000;
    
    // 1000000 と表示される
    console.log(million);
}