{
    {
        type Human = {
            name: string;
            age: number;
        };

        type HumanKeys = keyof Human;

        let key: HumanKeys = "name";
        key = "age";

        // エラー
        // 型 '"hoge"' を型 'keyof Human' に割り当てることはできません。
        // key = "hoge";
    }
    {
        const mmConvertsionTable = {
            mm: 1,
            m: 1e3,
            km: 1e6,
        };

        function convertUnits(value: number, unit: keyof typeof mmConvertsionTable) {
            const mmvalue = value * mmConvertsionTable[unit];

            return {
                mm: mmvalue,
                m: mmvalue / 1e3,
                km: mmvalue / 1e6
            };
        }

        // { mm: 5600000, m: 5600, km: 5.6 }
        console.log(convertUnits(5600, "m"));

        // エラー
        // 型 '"kg"' の引数を型 '"mm" | "m" | "km"' のパラメーターに割り当てることはできません。
        // convertUnits(5600, "kg");
    }
    {
        const mmConvertsionTable = {
            mm: 1,
            // この行を追加
            cm: 10,
            m: 1e3,
            km: 1e6,
        };

        function convertUnits2(value: number, unit: keyof typeof mmConvertsionTable) {
            const mmvalue = value * mmConvertsionTable[unit];

            return {
                mm: mmvalue,
                m: mmvalue / 1e3,
                km: mmvalue / 1e6
            };
        }

        // { mm: 3000000, m: 3000, km: 3 }
        console.log(convertUnits2(300000, "cm"));
    }
}