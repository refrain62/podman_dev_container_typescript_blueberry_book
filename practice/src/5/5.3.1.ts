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
        rank: number = 1;
    }

    const uhyo = new PremiumUser("uhyo", 26);

    // 1
    console.log(uhyo.rank);
    // uhyo
    console.log(uhyo.name);
    // true
    console.log(uhyo.isAdult());


    function getMessage(u: User) {
        return `こんにちは、${u.name}さん`;
    }

    const john = new User("John Smith", 15);
    const uhyo2 = new PremiumUser("uhyo", 26);

    // こんにちは、John Smithさん
    console.log(getMessage(john));
    
    // こんにちは、uhyoさん
    console.log(getMessage(uhyo));
}