{
    const d = new Date();
    // 2023-08-13T00:37:04.920Z
    console.log(d);

    const d2 = new Date("2020-02-03T15:00:00+09:00");
    // 2020-02-03T06:00:00.000Z
    console.log(d2);

    const date = new Date("2020-02-03T15:00:00+09:00");
    const timeNum = date.getTime();
    // 1580709600000
    console.log(timeNum);

    const date2 = new Date(timeNum);
    // 2020-02-03T06:00:00.000Z
    console.log(date2);

    // 1691887604134
    console.log(Date.now());
}