{
    type Animal = {
        tag: "animal";
        species: string;
    }

    type Human = {
        tag: "human";
        name: string;
    }

    type User = Animal | Human;

    const tama: User = {
        tag: "animal",
        species: "Felis silvestris catus"
    };

    const uhyo: User = {
        tag: "human",
        name: "uhyo"
    };

    // これは代入できない
    // const alien: User = {
    //     // エラー
    //     // 型 '"alien"' を型 '"animal" | "human"' に割り当てることはできません。
    //     tag: "alien",
    //     name: "gray"
    // };

    function getUserName(user: User) {
        if (user.tag === "human") {
            // ここではuserはHuman型
            return user.name;
        } else {
            // ここではuserはAnimal型
            return "名無し";
        }
    }

    const tama2: User = {
        tag: "animal",
        species: "Felis silvestris catus"
    };

    const uhyo2: User = {
        tag: "human",
        name: "uhyo"
    };

    // 名無し
    console.log(getUserName(tama2));
    
    // uhyo
    console.log(getUserName(uhyo2));
}