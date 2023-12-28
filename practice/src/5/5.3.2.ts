{
    class User {
        name: string;
        #age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.#age = age;
        }

        public isAdult(): boolean {
            return this.#age >= 20;
        }
    }

    class PremiumUser extends User {
        rank: number = 1;

        // ここでisAdultを再宣言

        // stringで戻り値を定義するとエラー
        // 型 'PremiumUser' のプロパティ 'isAdult' を基本データ型 'User' の同じプロパティに割り当てることはできません。
        // 型 '() => string' を型 '() => boolean' に割り当てることはできません。
        // 型 'string' を型 'boolean' に割り当てることはできません。
        //public isAdult(): string {

        public isAdult(): boolean {
            return true;
        }
    }

    const john = new User("John Smith", 15);
    const taro = new PremiumUser("Taro Yamada", 15);

    // false
    console.log(john.isAdult());
    
    // true
    console.log(taro.isAdult());

    class PremiumUser2 extends User {
        rank: number = 1;

        constructor(name: string, age: number, rank: number) {
            // super()の前に先にthisでアクセスするとエラー
            // 'super' の呼び出しは、初期化されたプロパティ、パラメーターのプロパティ、private 識別子が派生クラスに含まれている場合は、'super' や 'this' を参照するコンストラクターの最初のステートメントである必要があります。
            // this.rank = rank;
            super(name, age);
            this.rank = rank;
        }
    }

    const uhyo2 = new PremiumUser2("uhyo", 26, 3);
    // uhyo
    console.log(uhyo2.name);
    // 3
    console.log(uhyo2.rank);
}