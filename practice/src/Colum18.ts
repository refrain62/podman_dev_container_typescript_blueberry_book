{
    {
        // 読み取り専用配列型を受け取る関数の例
        function sum(nums: readonly number[]): number {
            let result = 0;
            for (const num of nums) {
                result += num;
            }
            return result;
        }

        // sumにはreadonly number[]型を与えることができる
        const nums1: readonly number[] = [1, 10, 100];
        // 111
        console.log(sum(nums1));


        // sumにはnumber[]型も与えることができる
        const nums2: number[] = [1, 1, 2, 3, 5 , 8];
        // 20
        console.log(sum(nums2));
    }
    {
        // 普通の配列型を受ける関数の例
        function fillZero(nums: number[]): void {
            for (let i = 0; i < nums.length; i++) {
                nums[i] = 0;
            }
        }

        // fillZeroにはnumber[]型を与えることができる
        const nums3: number[] = [1, 10, 100];
        fillZero(nums3);
        // [0, 0, 0]
        console.log(nums3);

        // fillZeroにreadonly unmber[]型を与えるのはエラー
        const nums4: readonly number[] = [1, 1, 2, 3, 5 ,8];
        // fillZero(nums4):
    }
    {
        type User = { name: string };
        type ReadonlyUser = { readonly name: string };

        const uhyoify = (user: User) => {
            user.name = "uhyo";
        };

        const john: ReadonlyUser = {
            name: "john Smith"
        };

        // これはコンパイルエラー
        // 読み取り専用プロパティであるため、'name' に代入することはできません。
        // john.name = "Nanashi";

        // これはエラーにならない
        uhyoify(john);

        // readonlyなのにnameが変えられてしまった
        // uhyoと表示される
        console.log(john.name);
    }
}