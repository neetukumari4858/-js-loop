// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17
s=""
for (var i=1; i<=100; i++){
    if (i%5===0 && i%3===0){
        s=s+"FizzBuzz"+","
    }
    else if (i%5===0){
        s=s+"Buzz"+","
    }
    else if (i%3===0){
        s=s+"Fizz"+","
    }
    else{
        s=s+i+","
    }
}
console.log(s);