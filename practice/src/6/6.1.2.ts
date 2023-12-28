{
    // 伝搬するユニオン型
    type Animal = {
        species: string;
        age: string;
    };

    type Human = {
        name: string;
        age: number;
    };

    type User = Animal | Human;

    const tama: User = {
        species: "Felis silvestris catus",
        age: "永遠の17歳"
    }

    const uhyo: User = {
        name: "uhyo",
        age: 26
    };

    function showAge(user: User) {
        // コンパイルエラーが出ない
        const age = user.age;
        console.log(age);
    }

    // 永遠の17歳
    showAge(tama);

    // 26
    showAge(uhyo);

    type MysteryFunc =
        | ((str: string) => string)
        | ((str: string) => number)
        ;
    
    function useFunc(func: MysteryFunc) {
        const result = func("uhyo");
        console.log(result);
    }
    
    function useFunc2(func: MysteryFunc) {
        const result = func("123");
        console.log(result);
    }

    type MaybeFunc2 = 
        | ((str: string) => string)
        | string
        ;

    // エラー
    // この式は呼び出し可能ではありません。
    // 型 'MaybeFunc' のすべての構成要素が呼び出し可能なわけではありません。
    // 型 'string' には呼び出しシグネチャがありません。
    // function useFunc(func: MaybeFunc2) {
    //     const result = func("uhyo");
    // }
}