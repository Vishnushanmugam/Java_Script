function test(){
    return "Hello Function"
}

console.log(test())

let test_fun=function(){
    console.log( "Hello Function")
}

test_fun()

function assign(){
    return "This " + test()
}

console.log(assign())

function add(a,b){
    return `a : ${a} \nb : ${b} \ntotal : a+b = ${a + b}` 
}

console.log(add(4,5))
console.log(add(8,6))
console.log(add(26,24))


function big_num(...max_num){
    let big_value=0
    for(let max of max_num){
        if (max > big_value){
            big_value = max
        }
    }
    return big_value
}

let max_num=big_num(13,23,57,43,78,98,54)

console.log(max_num)


let odd_even = function(value){
    return value %2 ==0 ? "Even" : "Odd";
}

console.log(odd_even(50))

let pass_args=(args)=>{
    return args ==true ? args : "hello"
}

console.log(pass_args())

let fact=(num)=>{
    let result=1
    for(let i=1; i<=num; i++){
        result *=i
    }
    return result
}

console.log(fact(5))

function factorial(n){
    if (n ===0 || n===1){
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5))

function reverse(string){
    return string.split("").reverse().join("")
}

console.log(reverse("Vishnu"))

