function isPrime(j) {
    for (i = 2; i < j; i++) {
        if (j % i == 0) {
            return "Is not a Prime Number"
        }
    }
    return "Is a Prime Number"
}

var result = isPrime(57);
console.log(result)