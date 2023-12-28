{
    type User = {
        name: string;
        age: number;
        premiumUser: boolean;
    }

    const data: string = `
                uhyo,26,1
                John Smith,17,0
                Mary Sue,14,1
                `;
        
    // ここにコードを足す
    const users: User[] = data.split("\n")
                                .filter(line => line !== "")
                                .map(line => {
                                    const [name, age, premiumUser] = line.split(",");

                                    return {
                                        name: name.trim(),
                                        age: Number(age),
                                        premiumUser: premiumUser === "1" ? true : false
                                    }
                                });
 
    for (const user of users) {
        if (user.premiumUser) {
            console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
        } else {
            console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
        }
    }
}