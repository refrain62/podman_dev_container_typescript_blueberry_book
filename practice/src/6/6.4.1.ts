{
    {
        type Human = {
            type: "human";
            name: string;
            age: number;
        };

        function setAge(human: Human, age: Human["age"]) {
            return {
                ...human,
                age
            };
        }

        const uhyo: Human = {
            type: "human",
            name: "uhyo",
            age: 26,
        };

        const uhyo2 = setAge(uhyo, 27);
        // { type: 'human', name: 'uhyo', age: 27 }
        console.log(uhyo2);
    }
    {
        type Human = {
            type: "human";
            name: string;
            age: bigint;
        };

        function setAge(human: Human, age: Human["age"]) {
            return {
                ...human,
                age
            };
        }

        const uhyo: Human = {
            type: "human",
            name: "uhyo",
            // BigIntに変更
            age: 26n,
        };

        // 引数をBigIntに変更
        const uhyo2 = setAge(uhyo, 27n);
        // { type: 'human', name: 'uhyo', age: 27n }
        console.log(uhyo2);
    }
}