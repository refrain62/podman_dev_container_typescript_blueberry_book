{
    {
        console.log("Hello");

        class C {
            static {
                console.log("uhyo");
            }
        }

        console.log("world");
    }
    {
        class User {
            #age: number = 0;

            getAge() {
                return this.#age;
            }

            setAge(newAge: number) {
                if (newAge < 0 || newAge > 150) {
                    return;
                }
                this.#age = newAge;
            }
        }
    }
    {
        class User {
            static adminUser: User;
            static {
                this.adminUser = new User();
                this.adminUser.#age = 9999;
            }

            #age: number = 0;
            
            getAge() {
                return this.#age;
            }

            setAge(newAge: number) {
                if (newAge < 0 || newAge > 150) {
                    return;
                }
                this.#age = newAge;
            }
        }

        // 9999
        console.log(User.adminUser.getAge());
    }
}