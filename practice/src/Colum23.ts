{
    class User1 {
        private age = 0;
    }

    // privateは同じ名前を定義できない
    // クラス 'SuperUser1' は基底クラス 'User1' を正しく拡張していません。
    // 複数の型に、プライベート プロパティ 'age' の異なる宣言が含まれています。
    // class SuperUser1 extends User1 {
    //     private age = 1;
    // }

    class User2 {
        #age = 0;
    }

    class SuperUser2 extends User2 {
        // これはできる
        #age = 1;

        public getAge(): number {
            return this.#age;
        }
    }

    const uhyo = new SuperUser2();
    // 1
    console.log(uhyo.getAge());
}
