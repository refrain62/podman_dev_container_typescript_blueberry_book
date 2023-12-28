{
    // オプショナル
    const toLowerOrUpper = (str: string, upper?: boolean): string => {
        if (upper) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    }

    // hello
    console.log(toLowerOrUpper("Hello"));
    // hello
    console.log(toLowerOrUpper("Hello", false));
    // HELLO
    console.log(toLowerOrUpper("Hello", true));
    // hello
    console.log(toLowerOrUpper("Hello", undefined));
}