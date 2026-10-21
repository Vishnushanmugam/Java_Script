let name='Vishnu'   //String
let age=24   // Number

const permanant_address='DPI'

let alive=true   //Boolean

//let we can change the values to variable after assigned
//Const we can't change the values to variable after assigned

let browser = ['Brave','Firefox','Chrome'] // In JS it called as array, In python it called as list

let user_details={                 //In JS it called as object, In python it called as dictionary
    u_name:"vishnu",
    u_age:24,
    u_location:"DPI"
}

console.log(user_details.u_name,user_details.u_age)


function is42(a, b) {
sum=a+b;
  if(sum == 42){
  return true
}else{
  return false
}
}

console.log(is42(4,2))

for (let i of browser){
    console.log(i)
}

function countOdds(numbers) {
  let odd=0;
  for (let i of numbers){
   
    if (i%2 == 0){
       odd++;
    }
  }
  return odd
}

console.log(countOdds([1,5,2,6,5,3,9,2]))

let string = "Test abc test test abc test test test abc test test abc";

string=string.replaceAll('abc', 'bug');
console.log(string)



function more4than0(n) {
let four=0;
let zero=0;

  for (let i of n){
    if (i == 4){
      four ++
    }
    else if( i == 0){
      zero ++
    }
    else{
      // return false
    }
  }

  if (four > zero){
    return true
  }
  else{
    return false
}
}

let arr=[1,2,4]
let as=[]
as=as.push(arr[1])
console.log(as)
aog=arr.length
console.log(aog)


function inandout(outside, inside){
    for (i=outside; i<=outside.length; i++){
        for (j=inside; j<=inside.length; j++){
            if(outside[i]==inside[j]){
                console.log("hello")
            }
        }
    }
}
inandout([0,6,3,7,2],[2,6,3,0,7])