{ 
    {
        type HasName = {
            name: string;
        };

        type Family<Parent extends HasName, Child extends HasName> = {
            mother: Parent;
            father: Parent;
            child: Child;
        };

        // エラー 型 'number' は制約 'HasName' を満たしていません。
    //    type T = Family<number, string>;

        type Animal = {
            name: string;
        }

        type Human = {
            name: string;
            age: number;
        };

        type T = Family<Animal, Human>;
    }

    {
        type HasName = {
            name: string;
        };
        
        type Animal = {
            name: string;
        }

        type Human = {
            name: string;
            age: number;
        };

        type Family<Parent extends HasName, Child extends Parent> = {
            mother: Parent;
            father: Parent;
            child: Child;
        }

        // これはOK
        type S = Family<Animal, Human>;
        // これはエラー
        // 型 'Animal' は制約 'Human' を満たしていません。
        // プロパティ 'age' は型 'Animal' にありませんが、型 'Human' では必須です。
//         type T = Family<Human, Animal>;
    }
}