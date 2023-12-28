{
    type HasName = {
        name: string;
    };
    
    type Animal = {
        name: string;
    }

    type Family<Parent = Animal, Child = Animal> = {
        mother: Parent;
        father: Parent;
        child: Child;
    }

    // 通常どおりの使い方
    type S = Family<string, string>;

    // TはFamily<Animal, Animal>と同じ
    type T = Family;

    // UはFamily<string, Animal>と同じ
    type U = Family<string>;

    type Family2<Parent, Child = Animal> = {
        mother: Parent;
        father: Parent;
        child: Child;
    }

    type Family3<Parent extends HasName, Child extends HasName = Animal> = {
        mother: Parent;
        father: Parent;
        child: Child;
    }
}