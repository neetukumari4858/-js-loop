var n=require("readline-sync");
var day=n.question("enter day :-")
if (day==="saturday" && day==="sunday"){
    console.log("weekend")
}
else{
    console.log("weekday")
}