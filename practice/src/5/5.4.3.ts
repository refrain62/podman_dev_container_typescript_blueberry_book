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

    const uhyo = new User("uhyo", 25);
    const john = new User("John Smith", 15);

    // true
    console.log(uhyo.isAdult());

    // jhonをthisとして呼び出す
    // false
    console.log(uhyo.isAdult.apply(john, []));


    // thisがuhyoに固定されたisAdult
    const boundIsAdult = uhyo.isAdult.bind(uhyo);

    // true
    console.log(boundIsAdult());

    // true
    console.log(boundIsAdult.call(john));
}