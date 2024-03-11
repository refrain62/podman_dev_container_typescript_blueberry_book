{
  type Human = {
    tag: "human";
    name: string;
  }


  // ! を用いてnullとundefinedを無視する
  function getOneUserName(user1?: Human, user2?: Human): String | undefined {
    if (user1 === undefined && user2 === undefined) {
      return undefined;
    }

    if (user1 !== undefined) {
      return user1.name;
    }

    // エラー:　Object is possibly 'undefined'.
    return user2?.name;
  }

  function showOneUserName(user1?: Human, user2?: Human): string | undefined {
    if (user1 === undefined && user2 === undefined) {
      return undefined;
    }

    if (user1 !== undefined) {
      return user1.name;
    }

    //return user2!.name;
    return (user2 as Human).name;
  }

  function showOneUserName3(user1?: Human, user2?: Human): string | undefined {
    return user1?.name ?? user2?.name;
  }
}