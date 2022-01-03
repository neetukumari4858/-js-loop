var n=require("readline-sync");
var num=n.questionInt("Enter any number:-")
var f=0;
var i=1
while (i<=num){
    if (num%i===0){
        f=f+1
    }
    i++
}
if (f==2){
    console.log("prime no")
}else{
    console.log("not prime number")
}


