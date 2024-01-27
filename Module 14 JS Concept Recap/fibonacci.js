// iterative way
var fibo = [0, 1]

for (var i = 2; i <= 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
console.log(fibo)


// Recursive Way
function fiboRecursive(number) {
    if (number == 0) {
        return 0;
    }
    else if (number == 1) {
        return 1;
    }
    else {
        return fiboRecursive(number - 1) + fiboRecursive(number - 2);
    }
}

var result = fiboRecursive(12)
console.log(result)
