// 1, -2, 3, -4, 5, -6 ..99, -100
let i=1;
while (i<=100){
    let s=""
    if (i%2===0){
        s=s+(i*(-1))+",";
    }
    else{
        s=i+s+","
    }
    i++
    console.log(s)
}


