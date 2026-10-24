let array=["Vishnu", 25, 'QA', "MCA", "DP"]

for(i in array){
    console.log(array[i])
}

let arcount=0
while (arcount < array.length){
    console.log(array[arcount])
    if (arcount === array.length){
        break
    }
    arcount+=1
}

let lar_num=[1,15,20,45,25,41,65,11]
let lar_number=lar_num[0]
for (let i=0;i<=lar_num.length;i++){ 
    if (lar_number > lar_num[i]){
        lar_number=lar_num[i]
    }
}
console.log("Largest number in the array",lar_number)

let sum_array=0
for(let i =0; i<lar_num.length;i++){
    sum_array +=lar_num[i]
}

console.log("Sum Of Array",sum_array)

let avg_value=0
for(let i =0; i<lar_num.length;i++){
    avg_value+=lar_num[i]
}

console.log("Average of array value",avg_value/lar_num.length)

let avg_values=lar_num.reduce((sum,arr_value) => sum+arr_value)/lar_num.length

console.log("Average of array value",avg_values)


let array_number=[1,2,4,3,6,5,32,33,45,34,66,64,77,89,111]

let odd_count=0
let even_count=0

for (let i=0;i<array_number.length;i++){
    if(array_number[i]%2!=0){
        odd_count+=1
    }else{
        even_count+=1
    }
}

console.log(`Odd Count ${odd_count}`, `Even Count ${even_count}`)


let reverse_array=array_number.reverse()

console.log("Reverse Array",reverse_array)

let array_slice=array_number.slice(2,6)
console.log(array_slice)


console.log(array_number)

function rev_array(rev_arr){
let left=0, right=array_number.length-1

while(left <right){
    [rev_arr[left],rev_arr[right]]=[rev_arr[right],rev_arr[left]]
    left ++
    right --
}
}
let rev_arr=[1,2,4,3,6,5,32,33,45,34,66,64,77,89,111]
rev_array(rev_arr)
console.log(rev_arr.join(" "))

rev_arr.push(100)
console.log("100 is added on last array value using push method",rev_arr)

rev_arr.unshift(12)
console.log("12 is added in first of the array using unshift method",rev_arr)

rev_arr.pop() //remove last value from array
console.log("100 has removed from array",rev_arr)

console.log(rev_arr.indexOf(33))

let arr_sort=array.sort((a,b)=>a-b)
console.log(arr_sort)

console.log(rev_arr.includes(3))

let fruit=["Apple","banana","orange","mango"]
fruit.push("grape")
console.log(fruit)

fruit.splice(fruit.indexOf("banana"),1)
console.log(fruit)
console.log(fruit.indexOf("orange"))

let scores = [12,13,14,16]
var evenScores =[]
for(let i =0;i<scores.length;i++)
{
   
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

let newFilterEvenScores =scores.filter(score=>score%2==0)
console.log(newFilterEvenScores) //[ 12, 14, 16 ]=>[36,42,48]

let array_2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let i=0; i<array_2d.length;i++){
    for(let j=0;j<array_2d[i].length;j++){
        console.log(array_2d[i][j])

    }
}
// MAP
let map=new Map()

map.set('name',"vishnu")
map.set('age',25)
map.set('sex',"Male")

console.log(map)

for(let i of map){
    console.log(i)
}

map.set('age',24)
console.log(map.get("age"))
let text=""
map.forEach(function(lamma,somma){
text +=somma + " :" +lamma ;
})
console.log(text)

const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

function acallback({quantity}){
    return quantity >200? 'ok' : "less"
}

let result = Map.groupBy(fruits, acallback)

console.log(result)

console.log(map.has("name"))
console.log(map.size) 

let set1=new Set()
set1.add('a')
set1.add('b')
set1.add('c')
set1.add(1)
set1.add(2)

console.log(set1)

for (const x of set1){
    console.log(x)
}

console.log(set1.size)
console.log(set1.has('a'))

let set_num=new Set([1,2,3,4,5,6])

console.log(set1.difference(set_num))