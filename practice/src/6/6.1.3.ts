{
    // インターセクション型とは
    type Animal = {
        species: string;
        age: number;
    }

    // Animal＋定義した内容
    type Human = Animal & {
        name: string;
    }

    const tama: Animal = {
        species: "Felis silvestris catus",
        age: 3
    };

    const uhyo: Human = {
        species: "Homo sapiens sapies",
        age: 26,
        name: "uhyo"
    };

    // stringでありnumberでもある
    type StringAndNumber = string & number;

    // 型 'string' を型 'Animal & string' に割り当てることはできません。
    // const cat1: Animal & string = "cat";

    // 型 '{ species: string; age: number; }' を型 'Animal & string' に割り当てることはできません。
    // 型 '{ species: string; age: number; }' を型 'string' に割り当てることはできません。
    // const cat2: Animal & string = {
    //     species: "Felis silvestris catus",
    //     age: 3
    // };

}