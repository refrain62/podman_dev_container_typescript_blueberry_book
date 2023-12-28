{
    {
        type Item = {
            name: string;
            price: number;
        }

        const apple: Item = {
            name: "りんご",
            price: 200
        };

        const orange: Item = {
            name: "みかん",
            price: 150
        };

        // { name: 'りんご', price: 200 } { name: 'みかん', price: 150 }
        console.log(apple, orange);
    }
    {
        // コンパイルエラーの例
        type Item = {
            name: string;
            price: number;
        }

        const apple: Item = {
            name: "りんご",
            price: 200
        };

        // 'apple' は値を参照していますが、ここでは型として使用されています。'typeof apple' を意図していましたか?
        // const orange: apple = {
        //     name: "みかん",
        //     price: 150
        // };

        // 'Item' は型のみを参照しますが、ここで値として使用されています。
        // console.log(Item);
    }
    {
        // 空間が違うので問題なく動く
        
        // 型名の名前空間にItemを作成
        type Item = {
            name: string;
            price: number;
        }

        // 変数名の名前空間にItemを作成
        const Item: Item = {
            name: "りんご",
            price: 200
        };

        // このＩｔｅｍは型名のItem
        const orange: Item = {
            name: "みかん",
            price: 150
        };

        // このItemは変数名のItem
        // { name: 'りんご', price: 200 }
        console.log(Item);
    }
}
