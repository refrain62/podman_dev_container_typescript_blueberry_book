{
    // 任意のプロパティ名を許容する型（インデックスシグネチャ）
    type PriceData = {
        [key: string]: number;
    }

    const data: PriceData = {
        apple: 220,
        coffee: 120,
        bento: 500,
    };

    // これはOK
    data.chicken = 250;

    // これはエラー(文字列入れてるので)
//    data.弁当 = "foo";
}