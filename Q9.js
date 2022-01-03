//  o/p---- 10+16+9+10+56+78+98+43+21+76..
n=require("readline-sync")
var sum=0
var i=1
while (i<=10){
    num=n.questionInt("entre no:-")
    sum=sum+num
    i++
}
console.log(sum)

// do while
// let sum=0
// var i=1
// do{
//     num=n.questionInt("entre no:-")
//     sum=sum+num
//     i++ 
// }while (i<=10);
// console.log(sum)