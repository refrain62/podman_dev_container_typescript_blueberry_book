{
    type Human = {
        height: number;
        weight: number;
    };

    // 省略形
    const calcBMI = ({
        height, weight
    }: Human): number => weight / height ** 2;

    const uhyo: Human = { height: 1.84, weight: 72 };
    
    // 21.266540642722116
    console.log(calcBMI(uhyo));
}