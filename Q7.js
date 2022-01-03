// let n=require("readline-sync");
// let num=n.question("Enter number:-");
// let i=1;
// while (i<=num){
//     if (i%7===0){
//         console.log(i)
//     }
//     i++
// }
// do while
let i=0
let n=require("readline-sync");
let num=n.question("Enter number:-");
do{
    if (i%7===0){
        console.log(i)
    }
    i++
}while (i<num)