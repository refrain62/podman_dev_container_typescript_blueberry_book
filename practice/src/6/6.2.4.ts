{
    // 変数uhyo1は"uhyo"型
    const uhyo1 = "uhyo";

    // 変数uhyo2は"uhyo"型
    const uhyo2 = "uhyo";


    let uhyo: string | number = "uhyo";

    uhyo = "jhon";
    uhyo = 3.14;

    let uhyo3: "uhyo" | "john" = "uhyo";

    const uhyo4 = {
        name: "uhyo",
        age: 26
    };

    uhyo4.name = "john";


    type Human = {
        readonly name: string;
        readonly age: number;
    };

    const uhyo5: Human = {
        name: "uhyo",
        age: 26
    };


    type Uhyo6 = {
        name: "uhyo";
        age: number;
    };

    const uhyo7: Uhyo6 = {
        name: "uhyo",
        age: 26
    }


    function signNumber(type: "plus" | "minus") {
        return type === "plus" ? 1 : -1;
    }

    function useNumber(num: number) {
        return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
    }

    // エラー
    //     2 中 1 のオーバーロード, '(type: "plus" | "minus"): 1 | -1' により、次のエラーが発生しました。
    //     型 '"uhyo"' の引数を型 '"plus" | "minus"' のパラメーターに割り当てることはできません。
    //   2 中 2 のオーバーロード, '(type: "plus" | "minus"): 1 | -1' により、次のエラーが発生しました。
    //     型 '"uhyo"' の引数を型 '"plus" | "minus"' のパラメーターに割り当てることはできません。
    // signNumber("uhyo");

    // エラー
    // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
    // useNumber("uhyo");
}