{
    // ユニオン型とインターセクション型の表裏一体な関係
    type Animal = { species: string };
    type Human = Animal & { name: string };

    function getName(human: Human) {
        return human.name;
    }

    function getSpecies(animal: Animal) {
        return animal.species;
    }

    const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;

    const tama: Animal = {
        species: "Felis silvestris catus"
    };

    const uhyo: Human = {
        species: "human",
        name: "Uhyo"
    };

    // ランダムでspeciesの内容かnameの内容に変わる
    console.log( mysteryFunc(uhyo) ); 
}