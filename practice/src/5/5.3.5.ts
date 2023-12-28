{
    type HasName = {
        name: string;
    }

    class User implements HasName {
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

    // クラス 'User2' はインターフェイス 'HasName' を正しく実装していません。
    // プロパティ 'name' は型 'User2' にありませんが、型 'HasName' では必須です。
    // class User2 implements HasName {
    //     #age: number;

    //     constructor(age: number) {
    //         this.#age = age;
    //     }

    //     public isAdult(): boolean {
    //         return this.#age >= 20;
    //     }
    // }
}