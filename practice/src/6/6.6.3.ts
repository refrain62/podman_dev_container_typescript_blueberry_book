{
  function doNothing(val: unknown) {
    // エラー: object is of type 'unknow'
    //const name = val.name;

    console.log(val);
  }

  // doNothingにはどんな値でも渡すことができる
  doNothing(3);
  
  doNothing({
    user: {
      name: "uhyo"
    }
  });

  doNothing(() => {
    console.log("hi")
  });

  function useUnknown(val: unknown) {
    if (typeof val === "string") {
      // 型の絞り込みによりここではvalはstring型
      console.log("valは文字列です")
      console.log(val.slice(0, 5))
    } else {
      console.log("foobar")
      console.log(val)
    }
  }

  useUnknown("foober")
  useUnknown(null)
}