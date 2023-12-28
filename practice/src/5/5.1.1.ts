{
    class User {
        name: string = "";
        age: number = 0;
    }

    const uhyo = new User();
    // ""
    console.log(uhyo.name);
    // 0
    console.log(uhyo.age);

    uhyo.age = 26;
    // 26
    console.log(uhyo.age);

    // クラス 'User2' は宣言の前に使用されました。
    // const uhyo2 = new User2();

    class User2 {
        name: string = "";
        age: number = 0;
    }
}