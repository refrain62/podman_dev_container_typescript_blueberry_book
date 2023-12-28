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

        // アローで書く方法
        public filterOlder(users: readonly User[]): User[] {
            // 型がわからないのでエラー：'this' implicitly has type 'any' because it does not have a type annotation.
            // return users.filter(function(u) { return u.#age > this.#age});
            return users.filter(u => u.#age > this.#age);
        }
        
        // コンパイルはできるが、ランタイムエラーになる
        public filterOlder2(users: User[]): User[] {
            return users.filter(function(this: User, u) { return u.#age > this.#age});
        }

        // あらかじめthisの内容を退避してカバー
        // だがアローで書くのと同じなのでこうは書かない
        public filterOlder3(users: User[]): User[] {
            const _this = this;
            return users.filter(function(u) {return u.#age > _this.#age});
        }
    }

    const uhyo = new User("uhyo", 25);
    const john = new User("John Smith", 15);
    const bob = new User("Bob", 40);

    const older = uhyo.filterOlder([john, bob]);
    // [ User { name: 'Bob' } ]
    console.log(older);

    // 実行するとエラーになる
    // const older2 = uhyo.filterOlder2([john, bob]);

    const older3 = uhyo.filterOlder3([john, bob]);
    // [ User { name: 'Bob' } ]
    console.log(older3);

}