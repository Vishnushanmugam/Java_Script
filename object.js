const student={
    "name":"Vishnu",
    "Age": 23,
    "Dept":"MCA",
    "CGPA": 81
}
console.log(student.name)
console.log(student.Age)
console.log(student.Dept)
console.log(student)

const Employee= {}
Employee.First_name = "Raj"
Employee.Last_name = "Mohan"
Employee.Age = 30
Employee.Department = "Software Development"
Employee.Salary = 160000

console.log(Employee)
console.log(Employee["Last_name"], student["Age"])

Employee.Salary=180000
console.log("Employee Salary Has Changed",Employee.Salary) // Change the Employee Salary

Employee.Skills={
    "Programming": "JS",
    "Automation_Framework": "Playwright",
    "Database":"Mysql"
}
console.log(Employee)

delete Employee.Skills.Database
console.log(Employee)

Employee.fname=function(){
return this.First_name + " " +this.Last_name
}

console.log(Employee.fname())

const car={
    "Brand":"Tata",
    "Model":"Nexon",
    "Year":2026,
    "Price":860000,
    Full_Detail:function(){
        return "Car Name is "+this.Brand +", Model is "+this.Model+", Price is " +this.Price
    }
}

console.log(car.Full_Detail())

const mark={
    Tamil:50,
    English:60,
    Maths: 25,
    Science:63,
    Social: 80
}
const mark1={}
for (let marks in mark){
    let std_mark=mark[marks]
    let re_status=std_mark >=35 ? "Pass" :"Fail"

    mark1[marks]={
        std_mark:std_mark,
        re_status:re_status
    }
}

console.log(mark1)

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("Shan", "Ran", 50, "blue");
const myMother = new Person("Krithi", "Krish", 48, "green");

console.log(myFather)
console.log(myMother.firstName)

console.log("\nFather Details")
for(let details in myFather){
    console.log(myFather[details])
}
console.log("\nMother Details")
for(let [key, value] of Object.entries(myMother)){
    console.log(key+ " : " +value)
}