
class Group {
    students = [];

    addStudent = (student) => this.students.push(student);

    getAverageMark = () =>
        this.students.reduce((acc,e) => acc+= e.rating.reduce((acc,e,i,arr)=>acc+=e/arr.length,0 )/this.students.length,0);
}

const feGroup = new Group()


class Student{
    constructor(name, rating) {
        this.name = name
        this.rating = rating
    }
}

feGroup.addStudent(new Student('John Doe', [10, 10, 5, 10]));
feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));

console.log(feGroup.students)
console.log('Overall rating',feGroup.getAverageMark())