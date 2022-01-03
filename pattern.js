// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
var i=1;
while (i<=5){
    k=""
    var j=1;
    while (j<=i){
        k=k+j+" "
        j=j+1
    }
    console.log(k)
    i++
}


// 5 4 3 2 1 
// 5 4 3 2 
// 5 4 3
// 5 4 
// 5
var i=1;
while (i<=5){
    var p=""
    var j=5;
    while(j>=i){
        p=p+j+" "
        j=j-1
    }
    console.log(p)
    i++
}


// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3 
// 2 2 
// 1 
var i=5;
while (i>=1){
    var p=""
    var j=1;
    while(j<=i){
        p=p+i+" "
        j=j+1
    }
    console.log(p)
    i--
}


// 5
// 4 4
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1
var i=1;
var l=5
while (i<=5){
    var m=""
    var j=1;
    while(j<=i){
        m=m+l+" "
        j=j+1
    }
    console.log(m)
    l=l-1
    i++
}

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1
var i=1;
while (i<=5){
    var l=5
    var m=""
    var j=1;
    while(j<=i){
        m=m+l+" "
        j=j+1
        l=l-1
    }
    console.log(m)
    i++
}


// not working

var i=1;
while (i<=5){
    b=1;
    while (b<=5-i){
        console.log(" ")
        b++
    }
    j=1
    var p=""
    while (j<=i){
        p=p+j+" "
        j++
    }
    console.log(p)
    i++
}








