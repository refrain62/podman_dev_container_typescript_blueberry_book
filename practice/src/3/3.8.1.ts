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
    const users: User[] = []; 
    
    const lines = data.split("\n");
    for (const line of lines) {
        if (line === "") {
            continue;
        }

        const [name, age, premiumUser] = line.split(",");

        users.push({
            name: name,
            age: Number(age),
            premiumUser: premiumUser === "1" ? true : false
        });
    }
 
    for (const user of users) {
        if (user.premiumUser) {
            console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
        } else {
            console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
        }
    }
}