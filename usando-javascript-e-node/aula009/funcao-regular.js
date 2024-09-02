function multiplicar (x,y) {
    return x * y
}

var a = multiplicar (5,2);
console.log(a)

var b = multiplicar (4,3);
console.log(b);



function somaValores(a,b = 2,c = 6) {
    var total = a + b + c
    return total
}

var f = somaValores(8);
console.log(f);