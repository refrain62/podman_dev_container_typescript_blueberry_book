{
    class User<T> {
        name: string;
        #age: number;
        readonly data: T;

        constructor(name: string, age: number, data: T) {
            this.name = name;
            this.#age = age;
            this.data = data;
        }

        public isAdult(): boolean {
            return this.#age >= 20;
        }
    }

    // uhyoはUser<string>型
    const uhyo = new User<string>("uhyo", 26, "追加データ");

    // dataはstring型
    const data = uhyo.data;

    // johnはUser<{num: number;}型
    const john = new User("john Smith", 15, {num: 123});

    // data は {num] number;}型
    const data2 = john.data;
}