const name_ : string = 'Adity';
let foo = "hllo";

function bhooo(n : number | string | number[]){
    if (typeof n === "string") return n.charCodeAt(0)
    
    if (typeof n === "number") return n.toExponential(0)

    return n.indexOf(0)
}

interface Student {
    fname : string;
    age : number;
    grade : Grade;
}

const Adity : Student = {
    fname : "Adity",
    age : 21,
    grade : "Pass"
}

type Grade = "Pass" | "Fail" | "Review"