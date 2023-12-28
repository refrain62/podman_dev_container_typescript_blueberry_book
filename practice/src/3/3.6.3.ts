{
    {
        const arr = [1, 2, 4, 8, 16, 32];

        const [first, second, third] = arr;

        console.log(first);     // 1
        console.log(second);    // 2
        console.log(third);     // 4

        const first2 = arr[0];
        const second2 = arr[1];
        const third2 = arr[2];

        // const { arr: [foo]} = obj;

        // const [{name}] = arr;
    }
    {
        const arr = [1, 2, 4, 8, 16, 32];

        const [, foo, , bar, , baz] = arr;
        
        console.log(foo);   // 2
        console.log(bar);   // 8
        console.log(baz);   // 32
    }
    {
        const tuple: [string, number] = ["uhyo", 26];
        const [myName, age] = tuple;

        console.log(myName);    // "uhyo"
        console.log(age);       // 26
    }
}