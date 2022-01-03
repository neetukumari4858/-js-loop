
// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

var n=require("readline-sync");
var num=n.question("Enter number:=")
var x=0;
var y=1;
var z=0;
s=""
while (z<=num){

    s=s+z+","
    x=y
    y=z
    z=x+y
    
}
console.log(s)