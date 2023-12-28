{
    const obj = {
        // メソッド記法
        double(num: number): number {
            return num * 2;
        },
        // 普通の記法 + アロー関数
        double2: (num: number): number => num * 2,
    };

    // 200
    console.log(obj.double(100));
    // -100
    console.log(obj.double2(-50));
}