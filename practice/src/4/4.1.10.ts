{
    {
        type User = { name: string, age: number };
        const getName = (u: User): string => u.name;
        const users: User[] = [
            { name: "uhyo", age: 26 },
            { name: "John Smith", age: 15 }
        ];

        const names = users.map(getName);
        // [ 'uhyo', 'John Smith' ]
        console.log(names);
    }
    {
        type User = { name: string, age: number };
        const getName = (u: User): String => {
            // u is { name: 'uhyo', age: 26 }
            // u is { name: 'John Smith', age: 15 }
            console.log("u is", u);
            return u.name;
        };
        const users: User[] = [
            { name: "uhyo", age: 26 },
            { name: "John Smith", age: 15 }
        ];

        const names = users.map(getName);
        // [ 'uhyo', 'John Smith' ]
        console.log(names);
    }
    {
        type User = { name: string; age: number };
        const users: User[] = [
            { name: "uhyo", age: 26 },
            { name: "John Smith", age: 15 }
        ];

        const names = users.map((u: User): string => u.name);
        // [ 'uhyo', 'John Smith' ]
        console.log(names);

        // 20歳以上のユーザーだけの配列
        const adultUsers = users.filter((user: User) => user.age >= 20);
        // すべてのユーザーが20歳以上ならtrue
        const allAdult = users.every((user: User) => user.age >= 20);
        // 60際以上んおユーザーが１人でもいればtrue
        const seniorExists = users.some((user: User) => user.age >= 60);
        // 名前がJohnで始めるユーザーを探して返す
        const john = users.find((user: User) => user.name.startsWith("John"));
    }
}