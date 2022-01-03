let i=0
let n=require("readline-sync");
let num=n.question("Enter number:-");
let sum=0;
while (i<=num){
    sum=sum+i
    i++
}
console.log(sum)


// let i=1
// sum=0
// do{
//     sum=sum+i
//     i++
// }while(i<=100);
// console.log(sum)