{
    {
        const repeat = function<T>(element: T, length: number): T[] {
            const result: T[] = [];
            for (let i = 0; i < length; i++) {
                result.push(element);
            }
            return result;
        }

        const repeat2 = <T>(element: T, length: number): T[] => {
            const result: T[] = [];
            for (let i = 0; i < length; i++) {
                result.push(element);
            }
            return result;
        }

        const utils = {
            repeat<T>(element: T, length: number): T[] {
                const result: T[] = [];
                for (let i = 0; i < length; i++) {
                    result.push(element);
                }
                return result;
            }
        }

        const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
        // pは[string, number]型
        const p = pair<string, number>("uhyo", 26);
    }
    {
        const repeat = <T extends {
            name: string;
        }>(element: T, length: number): T[] => {
            const result: T[] = [];
            for (let i = 0; i < length; i++) {
                result.push(element);
            }
            return result;
        }

        type HasNameAndAge = {
            name: string;
            age: number;
        }

        // これはOK
        // 出力結果：
        // [
        //   { name: 'uhyo', age: 26 },
        //   { name: 'uhyo', age: 26 },
        //   { name: 'uhyo', age: 26 }
        // ]
        console.log(repeat<HasNameAndAge>({
            name: "uhyo",
            age: 26,
        }, 3));

        // これはNG
        // 型 'string' は制約 '{ name: string; }' を満たしていません。
        // console.log(repeat<string>("a", 5));
    }
}
