{
    function get<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    type Human =  {
        name: string;
        age: number;
    }

    const uhyo: Human = {
        name: "uhyo",
        age: 26
    };

    // uhyoNameはstring型
    const uhyoName = get(uhyo, "name");

    // uhyoAgeはnumber型
    const uhyoAge = get(uhyo, "age");

    // エラー
    // 型 '"gender"' の引数を型 'keyof Human' のパラメーターに割り当てることはできません。
    // const uhyoGender = get(uhyo, "gender");

    // エラー
    // 型 'K' はインデックスの種類 'T' に使用できません。
    // function get2<T, K>(obj: T, key: K): T[K] {
    //     return obj[key];
    // }
}