var readlineSync = require('readline-sync');
var name=readlineSync.question("enter:-")
let k=name.length
str=""
for (let i=k; i>=0; i--){
    str=str+name[i]
}
if (str===name){
    console.log("palindrom")
}
else{
    console.log("not palindrom")
}






