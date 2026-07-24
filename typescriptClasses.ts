class tsclass {
    private name: string;
    private age: number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }

    getName () {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

const obj = new tsclass("Adity", 21);
// obj.name;