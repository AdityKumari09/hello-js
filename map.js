let map = new Map();
map.set(1, 10)
map.set(2, 20)
map.set(3, 30)

console.log(map.get(1))
for (const[key, value] of map)
{
    console.log(key, value);
}

let set = new Set();
set.add(5)
set.add(5)
set.add(10)

console.log(set.has(5))
console.log(map.has(1))