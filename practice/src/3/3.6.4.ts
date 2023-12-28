{
    {
        type Obj = {foo?: number};
        const obj1: Obj = {};
        const obj2: Obj = { foo: -1234 };

        const { foo = 500 } = obj1;
        // 500
        console.log( foo );


        const { foo: bar = 500 } = obj2;
        // -1234
        console.log( bar );

        const foo2 = obj1.foo !== undefined ? obj1.foo : 500;
    }
    {
        const obj = { foo: null };

        const { foo = 123 } = obj;
        // null
        console.log( foo );
    }
    {
        type Obj = { foo?: number };
        const obj1: Obj = {};
        // fooの型は number型
        const { foo = 500 } = obj1;
    }
    {
        type NestedObj = {
            obj?: {
                foo: number
            }
        };

        const nested1: NestedObj = {
            obj: { foo: 123 }
        };

        const nested2: NestedObj = {};

        // foo1には123
        const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
        console.log(foo1);
        
        // foo2には500
        const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
        console.log(foo2);
    }
}