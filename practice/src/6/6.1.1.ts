{
    // ユニオン型
    type Animal = {
        species: string;
    };

    type Human = {
        name: string;
    }

    type User = Animal | Human;

    // このオブジェクトはAnimal型なのでUser型に代入が可能
    const tama: User =  {
        species: "felis silvestris catus"
    }

    // このオブジェクトはHuman型なのでUser型に代入が可能
    const uhyo: User = {
        name: "uhyo"
    };

    // エラー
    // 型 '{ title: string; }' を型 'User' に割り当てることはできません。
    // オブジェクト リテラルは既知のプロパティのみ指定できます。'title' は型 'User' に存在しません。
    // const bool: User = {
    //     title: "Software Design"
    // };

    // プロパティ 'name' は型 'User' に存在しません。
    // function fetName(user: User): string {
    //     return user.name;
    // }

    // 戦闘要素の前に「|」を入れることも可能
    type User2 = 
        | Animal
        | Human
        ;
}