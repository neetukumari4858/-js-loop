var n=require("readline-sync")
var mul=1
var num=n.question("Enter number:-")
for (; num>=1; num--){
    mul=mul*num
    
}
console.log(mul)