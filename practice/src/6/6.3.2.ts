{
    // string
    console.log(typeof "uhyo");
    // number
    console.log(typeof 26);
    // object
    console.log(typeof {});
    // undefined
    console.log(typeof undefined);


    function formatNumberOrString(value: string | number) {
        if (typeof value === "number") {
            return value.toFixed(3);
        } else {
            return value;
        }
    }

    // 3.142
    console.log(formatNumberOrString(3.1415926535));

    // uhyoo
    console.log(formatNumberOrString("uhyoo"));
}