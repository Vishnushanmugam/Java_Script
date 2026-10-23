let a='apple'

// For Loop

for ( i=0; i<10; i++){
    // console.log(i)
}

let jj=0

while (jj<10){
    console.log(jj )
    jj++
}

for (let i of a){
    console.log(i)
}

let My_String = "Hello Vishnu, Welcome to the world of JavaScript";

let t_o=0

for(i of My_String){
    if(i == 'o'){
        t_o += 1
    }
}

console.log(t_o)

for (i=1;i<=10;i++){
    console.log(i)
}

for (i=10; i>=1; i--){
    console.log(i)
}

for (i=1; i<=50; i++){
    if(i%2==0){
        console.log(i)
    }
}

for (i=1; i<=50; i++){
    if(i%2 !=0){
        console.log(i)
    }
}

let count=0
for (i=1; i<=100; i++){
    count+=i
}

console.log(count)

for (i=1;i<=10;i++){
    console.log(`5 *`,i,`=`,i*5)
}
let fact=1
for (i=1;i<=5;i++){
    fact*=i
}

console.log(fact)



function numcount(num_count){


if (num_count ===0){
    console.log("1")
}
let n_count=0
while (num_count !==0){
    num_count=Math.floor(num_count/10)
    n_count+=1
}
return n_count}

console.log(numcount(12345))

let reverse_num=121

let rev_num=0
while (reverse_num >0){
    rev_num=rev_num *10 +reverse_num %10
    reverse_num=Math.floor(reverse_num/10)
}
console.log(rev_num)

// palindrome

function palindrome(check){
    let reverse=0
    let temp=Math.abs(check)

    while(temp !=0){
        reverse=(reverse*10) + (temp %10)
        temp=Math.floor(temp/10)
    }
    return (reverse===Math.abs(check))
}

let checks=121
if (palindrome(checks)===true){
    console.log(true)
}else{
    console.log(false)
}

function ispalindrome(n){
    const s_str=n.toLowerCase()
    const reverse_str=s_str.split('').reverse().join('')
    return s_str === reverse_str
}

console.log(ispalindrome('abad'))


