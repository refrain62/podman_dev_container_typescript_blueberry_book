{
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

        function getUserName(user: User): String {
            switch(user.tag) {
                case "human":
                    return user.name;
                case "animal":
                    return "名無し"
            }
        }
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

        type Robot = {
            tag: "robot";
            name: string;
        }

        type User = Animal | Human | Robot;

        function getUserName(user: User): string {
            if (user.tag === "human") {
                return user.name;
            } else {
                return "名無し"
            }
        }

        // エラー
        // 関数に終了の return ステートメントがないため、戻り値の型には 'undefined' が含まれません。
        // function getUserName2(user: User): string {
        //     switch (user.tag) {
        //         case "human":
        //             return user.name;
        //         case "animal":
        //             return "名無し";
        //     }
        // }
        
        function getUserName2(user: User): string {
            switch (user.tag) {
                case "human":
                    return user.name;
                case "animal":
                    return "名無し";
                case "robot":
                    return `CPU ${user.name}`;
            }
        }
    }
}