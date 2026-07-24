class Student{
    name;
    roll;
    marks;

    constructor(name, roll, marks) {
        this.name = name;
        this.roll = roll;
        this.marks = marks;
    }

    grade() {
        return this.marks < 40 ? "fail" : "pass"
    }

}

let Shubham = new Student("Shubham", 21, 95);
console.log(Shubham.grade());