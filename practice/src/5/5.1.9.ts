{
    // もう一つのプライベートプロパティ
    class User {
        name: string;
        #age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.#age = age;
        }

        isAdult(): boolean {
            return this.#age >= 20;
        }
    }

    const uhyo = new User("uhyo", 26);
    // uhyo
    console.log(uhyo.name);
    // true
    console.log(uhyo.isAdult());
    // プロパティ '#age' には private 識別子が指定されているため、クラス 'User' の外部ではアクセスできません。
    // console.log(uhyo.#age);
}