let user = {
    name : "Adity",
    job : "CTS",
    age: 88,
    "hobby": "kjhgfd"
};


user.surname = "afeaf"

console.log(user.name);
console.log(user.job);

console.log("name" in user);


for (let key in user){
    console.log(key, user[key])
}