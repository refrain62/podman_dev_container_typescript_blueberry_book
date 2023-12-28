{
    type HasName = {
        name: string;
    }
    type HasNameAndAge = {
        name: string;
        age: number;
    }

    const fromAge = (age: number): HasNameAndAge => ({
        name: "john Smith",
        age,
    });

    const f: (age: number) => HasName = fromAge;
    const obj: HasName = f(100);

    // { name: 'john Smith', age: 100 }
    console.log(obj);
}