{
    // 静的プロパティ・静的メソッド
    
    class User {
        static adminName: string = "uhyo";
        static getAdminUser() {
            return new User(User.adminName, 26);
        }

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

    // uhyo
    console.log(User.adminName);
    const admin = User.getAdminUser();
    // 26
    console.log(admin.age);
    // true
    console.log(admin.isAdult());

    const uhyo = new User("uhyo2", 27);
    // プロパティ 'adminName' は型 'User' には存在しません。代わりに静的メンバー 'User.adminName' にアクセスしようとしていましたか?
    // console.log(uhyo.adminName);
}