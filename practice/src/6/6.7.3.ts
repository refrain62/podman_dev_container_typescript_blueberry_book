{
  type NumberAndString = [number, ...string[]]

  //　これらはOK
  const arr1: NumberAndString = [25, "uhyo", "hyo", "hyo"]
  const arr2: NumberAndString = [25, "uhyo", "hyo", "hyo"]
  
  // これはエラー
  // const arr3: NumberAndString = ["uhyo", "hyo", "hyo"]
  // const arr4: NumberAndString = [25, 26, 27]
  // const arr5: NumberAndString = []

  type NumberStringNumber = [number, ...string[], number]

  // これらはOK
  const arr11: NumberStringNumber = [25, "uhyo", "hyo", "hyo", 0]
  const arr12: NumberStringNumber = [25, 26]

  // これらはエラー
  // const arr13: NumberStringNumber = [25, "uhyo", "hyo", "hyo"]
  // const arr14: NumberStringNumber = []
  // const arr15: NumberStringNumber = ["uhyo", "hyo", "hyo", 0]
  // const arr16: NumberStringNumber = [25, "uhyo", 25, "hyo", 0]
}
{
  // ...配列型を２回使っているのでコンパイルエラー
  // type T1 = [number, ...String[], number, ...string[]]
  // type T2 = [number, ...string[], ...string[], string]
  // オプショナルな要素を ...配列型 よりも後ろで使っているのでエラー
  // type T3 = [number, ...string[], number?]

  type NSN = [number, string, number]
  // SNSNS は [string, number, string, number, string]型
  type SNSNS = [string, ...NSN, string]
}