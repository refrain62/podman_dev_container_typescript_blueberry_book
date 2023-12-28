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
        // 親にないのでoverrideするとエラー
        // このメンバーは、基底クラス 'User' で宣言されていないため、'override' 修飾子を指定することはできません。
        // override rank: number = 1;
         rank: number = 1;

        // オーバーライド
        public override isAdult(): boolean {
            return true;
        }
    }

    //　noImplicitOverrideを有効化するとoverrideを必ずつける必要が出てくる
}