{
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
            
            public isAdult(): boolean {
                // プロパティ '#age' には private 識別子が指定されているため、クラス 'User' の外部ではアクセスできません。
                // return this.#age >= 10;
                return true;
            }
        }
    }
    {
        class User {
            name: string;
            protected age: number;

            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }

            public isAdult(): boolean {
                return this.age >= 20;
            }
        }

        class PremiumUser extends User {
            
            public isAdult(): boolean {
                // protectedなのでアクセスできる
                return this.age >= 10;
            }
        }

        const miniUhyo = new PremiumUser("uhyo", 15);
        const john = new User("John Smith", 15);

        // true
        console.log(miniUhyo.isAdult());
        // false
        console.log(john.isAdult());

        // これはエラー
        // プロパティ 'age' は保護されているため、クラス 'User' とそのサブクラス内でのみアクセスできます。
        // console.log(miniUhyo.age);
    }
    {
        class User {
            name: string;
            protected age: number;
            private _isAdult: boolean;

            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
                this._isAdult = age >= 20;
            }

            public isAdult(): boolean {
                return this._isAdult;
            }
        }

        class PremiumUser extends User {
            
            // プレミアムユーザーは自分の年齢を編集できる
            public setAge(newAge: number) {
                this.age = newAge;
            }
        }

        const uhyo = new PremiumUser("uhyo", 26);
        // true
        console.log(uhyo.isAdult());

        uhyo.setAge(15);
        // true（_isAdultを再計算していないので）
        console.log(uhyo.isAdult());

        // 極力 privateや#を仕様することでバグが起きにくくなる
    }
}