{
    type Animal = {
        age: number;
    };

    type Human = {
        age: number;
        name: string;
    }

    type AnimalFamily = {
        familyNmae: string;
        moher: Animal;
        father: Animal;
        child: Animal;
    }

    type HumanFamily = {
        familyname: string;
        mother: Human;
        father: Human;
        child: Human;
    }
}