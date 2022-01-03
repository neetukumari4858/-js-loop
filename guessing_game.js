let number=6;
console.log("you have only 5 chance")
console.log("you can guess only between 1 to 10")
n=require("readline-sync");
for  (let i=0 ; i<=5; i++){
    num=n.question("Enter number:-")
    if (num==number){
        console.log("you win")
        break
    }
    else if (num>number){
        console.log("number is high")
    }
    else if(num<number){
        console.log("number is short")
    }
}
if (num!=number){
    console.log("you are the losser")
}
