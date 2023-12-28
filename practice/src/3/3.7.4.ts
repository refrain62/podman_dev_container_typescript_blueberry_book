{
    const map: Map<string, number> = new Map();
    map.set("foo", 1234);

    // 1234
    console.log(map.get("foo"));
    // undefined
    console.log(map.get("bar"));
}