{
    {
        // オプショナルプロパティ再訪
        type Human = {
            name: string;
            // number | undefined 型となる
            age?: number;
        }

        const uhyo: Human =  {
            name: "Uhyo",
            age: 25
        };

        const john: Human = {
            name: "Jhon Smith"
        }

        const taro: Human = {
            name: "Taro",
            // undefinedも許される
            age: undefined
        }
    }
    {
        // オプショナルプロパティ再訪
        type Human = {
            name: string;
            // number | undefined 型で宣言する
            age: number | undefined;
        }

        const uhyo: Human =  {
            name: "Uhyo",
            age: 25
        };

        const john: Human = {
            name: "Jhon Smith",
            // undefinedは許される
            age: undefined
        }

        // エラー ageは必須となる
        // プロパティ 'age' は型 '{ name: string; }' にありませんが、型 'Human' では必須です。
        // const taro: Human = {
        //     name: "Taro",
        // }
    }
}