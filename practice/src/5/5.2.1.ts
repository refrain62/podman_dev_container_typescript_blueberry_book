{
    {
        class User {
            name: string = "";
            age: number = 0;

            isAdult(): boolean {
                return this.age >= 20;
            }
        }

        // これはもちろんOK
        const uhyo: User = new User();

        // これもOK
        const john: User = {
            name: "John smith",
            age: 15,
            isAdult: () => true
        };

        const User2 = class {
            name: string = "";
            age: number = 0;

            isAdult(): boolean {
                return this.age >= 20;
            }
        };

        // これはOK
        const uhyo2 = new User2();

        // エラー：'User2' は値を参照していますが、ここでは型として使用されています。'typeof User2' を意図していましたか?
        // const john2: User2 = new User2();
    }
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
        }

        const uhyo: User<string> = new User("uhyo", 26, "追加データ");
    }
}