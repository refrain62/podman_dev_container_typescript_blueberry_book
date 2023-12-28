{
    // コンストラクタ
    class User {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        isAdult(): boolean {
            return this.age >= 20;
        }
    }

    const uhyo = new User("uhyo", 26);
    // uhyo
    console.log(uhyo.name);
    // true
    console.log(uhyo.isAdult());


    
    class User2 {
        name: string;
        readonly age: number;

        constructor(name: string, age: number) {
            this.name = name;
            // これはOK
            this.age = age;
        }

        setAge(newAge: number) {
            // 読み取り専用プロパティであるため、'age' に代入することはできません。
            // this.age = newAge;
        }

        isAdult(): boolean {
            return this.age >= 20;
        }
    }

    const uhyo2 = new User2("uhyo", 26);
    // 読み取り専用プロパティであるため、'age' に代入することはできません。
    // uhyo2.age = 27;
}