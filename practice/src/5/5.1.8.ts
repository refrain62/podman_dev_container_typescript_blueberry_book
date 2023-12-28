{   
    // クラス式でクラスを作成
    const User = class {
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

    // Userは今までと同様に仕様可能
    const uhyo = new User("uhyo", 26);
    // uhyo
    console.log(uhyo.name);
    // true
    console.log(uhyo.isAdult());

}