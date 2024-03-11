{
  function getFirstFiveLetters(strOrNum: string | number) {
    const str = strOrNum as string;
    return str.slice(0, 5);
  }

  // "uhyo"と表示される
  console.log(getFirstFiveLetters("uhyohyohyo"))

  // ランタイムエラー発生
  //console.log(getFirstFiveLetters(123))
}
{
  type Animal = {
    tag: "animal";
    species: string;
  }

  type Human = {
    tag: "human";
    name: string;
  }

  type User = Animal | Human;

  function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
    if (users.every(user => user.tag === "human")) {
      // エラー： Property 'name does not exist on type 'User'.
      //          Property 'name' does not exists on type 'Animal'
      // return users.map(user => user.name);

      return (users as Human[]).map(user => user.name);
    }

    return undefined;
  }

}