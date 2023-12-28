{
    // アクセシビリティ修飾子
    class User {
        name: string;
        private age: number;

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
    // プロパティ 'age' はプライベートで、クラス 'User' 内でのみアクセスできます。
    // console.log(uhyo.age);
}