{
    let tuple:[string, number] = ["foo", 0];
    tuple = ["aiueo", -555];

    const str = tuple[0];
    const num = tuple[1];

    // 長さ '2' のタプル型 '[string, number]' にインデックス '2' の要素がありません。
    // const nothing = tuple[2];

    type User = [name: string, age: number];
    const uhyo: User = ["uhyo", 26];
    // 26
    console.log(uhyo[1]);
}