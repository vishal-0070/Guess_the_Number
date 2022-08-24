// // practice set
// /*const prompt =require("prompt-sync")({sigint:true})
// let age=prompt("What is your age: ");
// if(age>10 && age<20){
//     console.log("Your age is lie between 10 &20")
// }
// else{
//     console.log("you does not lie between range")
// }
// */

// let age=prompt("what is your age?")
// switch(age){
//   case '12':
//     console.log("your age is special")
//     break
//   case '13':
//     console.log("your age is special")
//     break
//   case '14':
//     console.log("your age is /special")
//     break
//   case '15':
//     console.log("your age is special")  
//     break
//   default:
//     console.log("your age is not special")
// }


// let num =prompt("what is your age ?")
// // num=Number.parseInt(num)
// if(num%2==0 && num%3==0){
//   console.log("your number is divisible by 2 and 3")
// }
// else{
//   console.log("your number is not divisible by 2 and 3")
// }

// let age= 156
// let a = age>18 ?"you can drive" : "you can not drive a car"
// console.log(a)

// let n=prompt("enter the value: ")
// n=Number.parseInt(n)
// let i=0
// while(i<n){
//   console.log(i)
//   i++
// }

// let marks={
//   harry:20,
//   subject:34,
//   lovish:234 
// }
// for (let i=0;i<Object.keys(marks).length;i++){
//   console.log("the marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
// }
// const sum= (a,b,c,d)=>{
//   return a+b+c+d
// }
// console.log(sum(1,2,3,4))

// let name="harry"
// console.log(name.toUpperCase())


// const sentence ='The quick brown fox jumps over the lazy dog'
// const word="The"
// console.log(`The sentence ${sentence.startsWith(word) ? "is":'is not'} is start with The word` )



// let x=[1,2,3,4,5]
// // r=x.pop()
// x.push("hello")
// r=x.shift()
// console.log(x,r)

// function sort(a, b) {
//     return b - a
// }
// let n=[1,14,5,3,6,78]
// n.sort(sort)

// console.log(n)

// for (let i=0;i<num.length;i++){
//   console.log(num[i])
// }

// let a =num.map((value,index,array)=>{
//   console.log(value,index,array)
//   return value
// })
// console.log(a)


// let arr = [3, 4, 5, 6, 7, 87, 47]
// while(a != 0){
//   var a = prompt("enter number")
//   a = Number.parseInt(a)
//   arr.push(a)
// }
// console.log(arr)


// let arr=[10,2,3,4,5,60]
// let n=arr.filter((x)=>{
//   return x%10 ==0
// })

// console.log(n)

// let arr=[1,3,4,,5,6]
// let n =arr.reduce((x1,x2)=>{
//   return x1*x2
// }
//   )
// console.log(n)


let x = Math.floor((Math.random() * 100) + 1)
let a; 
var k=0
while(a!=x){
  a=prompt("Guess the number :")
  if (a>x){
    console.log("you have guess the larger number")
    ++k
    continue
  }
  else if(a<x){
    console.log("you have guess the smaller number")
    ++k
    continue
    
  } 
  else{
    console.log("correct guess",a)
  }
    
  }
let score = 100 - k; //To store the score of your game
console.log("\nCongratulations🥳🥳\nThe number generated was", x + " and you guessed it right😁\nYour final score is", score);

