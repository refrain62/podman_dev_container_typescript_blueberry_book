{
    {
        type User = {name: string; age: number};

        const commnadList = ["attack", "defend", "run"] as const;

        // "attack" | "defend" | "run" 型
        type Commnad = typeof commnadList[number];
    }

    {
        type Commnad = "attack" | "defend" | "run";

        const commnadList: Commnad[] = ["attack", "defend", "run"];
    }
}