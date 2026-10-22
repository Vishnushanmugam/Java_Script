
let value=11

if (value >0){
    console.log("Positive")
}else if(value <0){
    console.log("Negative")
}else{
    console.log("Zero")
}


if(value%2 ==0){
    console.log("Even")
}else{
    console.log("ODD")
}


if (num1 > num2){
    console.log("Largest number is ",num1)
}else if(num2 > num1){
    console.log("Largest number is ",num2)
}else{
    console.log("Both are equal or enter the correct value")
}

if (age > 18){
    console.log("Eligible for vote")
}else{
    console.log("Not Eligible for vote")
}

let year=2004

if((year % 4 ==0 && year % 100 !=0)||(year %400 ==0)){
    console.log("Leap Year")
}else{
    console.log("Not Leap Year")
}

let mark=60.5

if (mark >=90 && mark <= 100){
    console.log("A")
}else if(mark >=80 && mark <=89){
    console.log("B")
}else if(mark >=70 && mark <= 79){
    console.log("C")
}else if(mark >=60 && mark <= 69){
    console.log("D")
}else{
    console.log("F")
}

let bet_num=10

if (bet_num >=10 && bet_num <=50){
    console.log(true)
}else{
    console.log(false)
}

const job_age=11

console.log((job_age >=18 ? "Graduate" :"Not Graduate"))

const dev_num=15
console.log((dev_num % 3 ==0 || dev_num % 5 ==0 ? true : false))

let x=10

console.log(x+=1)
console.log(x-=1)
console.log(x*=1)
console.log(x/=1)
console.log(x%=1)
