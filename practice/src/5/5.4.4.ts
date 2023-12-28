{
    {
        class A {
            foo = 123;
            bar = this.foo + 100;
        }

        const obj = new A();
        // 223
        console.log(obj.bar);
    }
    {
        class A {
            foo = 123;
            bar = this.foo + 100;

            getFoo() {
                return this.foo;
            }
        }

        const obj = new A();
        // 223 123
        console.log(obj.bar, obj.getFoo());
    }
    {
        class A {
            static foo = 123;
            static bar = this.foo * 2;

            static {
                // bar is 246
                console.log("bar is", this.bar);
            }
        }
    }
}