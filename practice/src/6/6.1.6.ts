{
    // オプショナルチェイニングによるプロパティアクセス
    type Human = {
        name: string;
        age: number;
    }

    function useMayBeHuman(human: Human | undefined) {
        // ageは number | undefined型
        const age = human?.age;
        // こうもかける
        const age2 = human?.["age"];

        console.log(age);
        console.log(age2);
    }

    const uhyo: Human = {
        name: "Uhyo",
        age: 25,
    }

    // 25
    // 25
    useMayBeHuman(uhyo);

    // undefined
    // undefined
    useMayBeHuman(undefined);

    type GetTimeFunc = () => Date;

    function useTime(getTimeFunc: GetTimeFunc | undefined) {
        // timeOrUndefineは Date | undefined 型
        const timeOrUndefine = getTimeFunc?.();

        console.log(timeOrUndefine);
    }

    // undefined
    useTime(undefined);

    
    type User = {
        age: number;

        isAdult(): boolean;
    }

    function checkForAdultUser(user: User | null) {
        if (user?.isAdult()) {
            console.log("age:" + user.age);
        } else {
            console.log("user is null");
        }
    }

    const user1: User = {
        age: 25,
        isAdult() {
            return true;
        }
    };

    // age:25
    checkForAdultUser(user1);
    
    // user is null
    checkForAdultUser(null);

    
    function useTime2(getTimeFunc: GetTimeFunc | undefined) {
        // timeOrUndefineは Date | undefined 型
        // ?. はそれ以降のプロパティアクセス・関数呼び出し・メソッド呼び出しをまとめて飛ばす効果があるのでエラーにならない
        const timeOrUndefine = getTimeFunc?.().toString();

        console.log(timeOrUndefine);
    }
}