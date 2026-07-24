let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.filter(n => n % 2 == 0);
let odd = arr.filter(n => n % 2 != 0);

console.log(odd)
let square = arr.map(n => n * 2);
console.log(square)

let sum = arr.reduce((previous, current) => previous + current, 0)
console.log(sum);


let min = arr.reduce((prev, curr) => Math.min(prev, curr), Infinity);
console.log(min);

let max = arr.reduce((prev, curr) => Math.max(prev, curr), -Infinity);
console.log(max);

let sum1 = arr.reduce((prev, curr) => prev + (curr * curr), 0);
console.log(sum1);

arr.forEach(p => console.log(p))

