{
  type Option<T> = {
    tag: "some"
    value: T
  } | {
    tag: "none"
  }

  function isSome<T>(obj: Option<T>): obj is {tag: "some"; value: T} {
    return obj.tag === "some"
  }
}
{
  type Some<T> = {
    tag: "some"
    value: T
  }

  type None = {
    tag: "none"
  }

  type Option<T> = Some<T> | None

  function isSome2<T>(obj: Option<T>): obj is Some<T> {
    return obj.tag === "some"
  }
}