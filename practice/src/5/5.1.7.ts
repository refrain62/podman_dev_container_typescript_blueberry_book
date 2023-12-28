{
    // コンストラクタ引数でのプロパティ宣言

    // class User {
    //     name: string;
    //     private age: number;

    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }

    class User {
        constructor(public name: string, private age: number) {
        }
    }
}