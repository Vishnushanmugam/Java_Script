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


function big_num(max_num){
    let big_value=0
    for(let max of max_num){
        if (max > big_value){
            big_value = max
        }
    }
    return big_value
}

let max_num=[13,23,57,43,78,98,54]

console.log(big_num(max_num))