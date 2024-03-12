{
  type Option<T> = {
    tag: "some"
    value: T
  } | {
    tag: "none"
  }

  function showNumberIfExists(obj: Option<number>): void {
    if (obj.tag === "some") {
      console.log(obj.value)
    }
  }

  const four: Option<number> = {
    tag: "some",
    value: 4
  }

  const nothing: Option<number> = {
    tag: "none"
  }

  showNumberIfExists(four)    // 4が表示される
  showNumberIfExists(nothing) // 何も表示されない
}
{
  type Option<T> = {
    hasValue: true
    value: T
  } | {
    hasValue: false
  }
}
