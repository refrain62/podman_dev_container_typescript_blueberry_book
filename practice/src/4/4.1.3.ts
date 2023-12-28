{
    type Human = {
        height: number;
        weight: number;
    };
    const calcBMI = function(human: Human): number {
        return human.weight / human.height ** 2;
    };
    const uhyo: Human = { height: 1.84, weight: 72 };
    // 21.266540642722116
    console.log(calcBMI(uhyo));

    
    const calcBMI2 = function({height, weight}: Human): number {
        return weight / height ** 2;
    };
    // 21.266540642722116
    console.log(calcBMI2(uhyo));
}
