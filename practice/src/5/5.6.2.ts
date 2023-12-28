{
    {
        class User {
            readonly name: string;
            readonly age: number;

            constructor(name: string, age: number) {
                if (name === "") {
                    throw Error("名前は空にできません！");
                }
                this.name = name;
                this.age = age;
            }

            getMessage(message: string): string {
                return `${this.name} (${this.age}) [${message}]`;
            }
        }

        const uhyo = new User("uhyo", 26);
        // uhyo (26) [こんにちは]
        console.log(uhyo.getMessage("こんにちは"));
    }
    {
        class User {
            #name: string;
            #age: number;

            constructor(name: string, age: number) {
                this.#name = name;
                this.#age = age;
            }

            getMessage(message: string): string {
                return `${this.#name} (${this.#age}) [${message}]`;
            }
        }

        const uhyo = new User("uhyo", 26);
        // uhyo (26) [こんにちは]
        console.log(uhyo.getMessage("こんにちは"));
    }
}