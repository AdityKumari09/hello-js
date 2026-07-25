const arr : number[] = [1, 2, 3, 4, 5];
const array : number[] = new Array<number>(1);
array[0] = 1

function greet(...names : string[]){
    // console.log("Names", names);
    for (const name in names){
        console.log(names[name])
    }
}

greet("Adity", "Shubham");

function Bye(bar : string| number){
    if (typeof bar === "string") return "Hii";

    if (typeof bar === "number") return bar;

    console.log(typeof bar);
}

let foo: any = 6;
foo = "jhfj";



