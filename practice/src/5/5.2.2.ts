{
    class User {
        name: string = "";
        age: number = 0;
    }

    type MyUserConstructor = new () => User;

    // UserはMyUserConstructor型を持つ
    const MyUser: MyUserConstructor = User;

    // MyUserはnewで使用可能
    const u = new MyUser();

    // uはUser型を持つ
    //  0
    console.log(u.name, u.age);

    type MyUserConstructor2 = {
        new (): User;
    }
}