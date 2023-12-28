{
    class User {
        name?: string;
        age: number = 0;
    }

    const uhyo = new User();
    // undefined
    console.log(uhyo.name);

    // うひょ
    uhyo.name = "うひょ";
    console.log(uhyo.name);

    
    class User2 {
        readonly name?: string;
        age: number = 0;
    }

    const uhyo2 = new User2();
    // 読み取り専用プロパティであるため、'name' に代入することはできません。
    // uhyo2.name = "うひょ";
}
