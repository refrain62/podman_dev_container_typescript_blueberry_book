{
    type SignType = "plus" | "minus";

    function signNumber(type: SignType) {
        return type === "plus" ? 1 : -1;
    }

    function numberWithSign(num: number, type: SignType | "none") {
        if (type === "none") {
            // ここではtypeは"none"型
            return 0;
        } else {
            // ここではtypeはSignType型
            return num * signNumber(type);
        }
    }

    // 5
    console.log(numberWithSign(5, "plus"));
    // -5
    console.log(numberWithSign(5, "minus"));
    // 0
    console.log(numberWithSign(5, "none"));


    function numberWithSign2(num: number, type:SignType | "none") {
        if(type === "none") {
            // ここではtypeは"none"型
            return 0;
        }

        // ここではtypeはSignType型
        return num * signNumber(type);
    }

    function numberWithSign3(num: number, type: SignType | "none") {
        return type === "none" ? 0 : num * signNumber(type);
    }

    // -5
    console.log(numberWithSign2(5, "minus"));
    // 3
    console.log(numberWithSign3(3, "plus"));
}