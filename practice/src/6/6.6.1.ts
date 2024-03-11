{
  function doWhatever(obj: any) {
    // 好きなプロパティにアクセスできる
    console.log(obj.user.name);

    // 関数よびだしもできる
    obj();

    // 計算もできる
    const result = obj * 10;
    return result;
  }

  // 全部コンパイルエラーが発生しないかランタイムエラーになる
  doWhatever(3);
  
  doWhatever({
    user: {
      name: "uhyo"
    }
  });

  doWhatever(() => {
    console.log("hi");
  });

  function useNumber(num: number) {
    console.log(num);
  }
  
  function doWhatever2(obj: any) {
    // string型の変数に入れられる
    const str: string = obj;

    // number型を要求する関数に渡せる
    useNumber(obj);
  }
}