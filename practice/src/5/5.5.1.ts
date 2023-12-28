{
    {
        console.log("エラーを発生させます");

        throwError();

        console.log("エラーを発生させました");

        function throwError() {
            const error = new Error("エラーが発生しました！！！");
            throw error;
        }
    }
    {
        getAverage([]);

        function getAverage(nums: number[]) {
            if (nums.length === 0) {
                throw new Error("配列が空です");
            }

            return sum(nums) / nums.length;
        }

        function sum(nums: number[]) {
            return 0;
        }
    }
}