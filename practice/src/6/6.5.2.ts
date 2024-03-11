{
  // string[]型
  const names1 = ["uhyo", "john", "Taro"];

  // readonly ["Uhyo", "John", "Taro"]型
  const name2 = ["Uhyo", "John", "Taro"] as const;

  // Type Name = "uhyo" | "John" | "Taro"
  type Name = (typeof name2)[number];
}
{
  type Name = "Uhyo" | "John" | "Taro";
  const names: Name[] = ["Uhyo", "John", "Taro"];
}