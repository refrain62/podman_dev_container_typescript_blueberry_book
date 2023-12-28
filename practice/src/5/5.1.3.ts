{
    // メソッドの宣言
    class User {
        name: string = "";
        age: number = 0;

        isAdult(): boolean {
            return this.age >= 20;
        }

        setAge(newAge: number) {
            this.age = newAge;
        }
    }

    const uhyo = new User();
    // false
    console.log(uhyo.isAdult());

    uhyo.setAge(26);
    // true
    console.log(uhyo.isAdult());


    const uhyo2 = new User();
    const baby = new User();

    uhyo2.age = 26;

    // true
    console.log(uhyo2.isAdult());
    // false
    console.log(baby.isAdult());
}