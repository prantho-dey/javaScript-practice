
var a = 5;
var b = 7;

var temp = a;

var a = b;
var b = temp;

console.log(a, b)

// Second way
var x = 5;
var y = 7;

x = x + y;

y = x - y;
x = x - y;

console.log(x, y)

// Third Way ( Just applicable on Javascript )
var m = 4;
var n = 9;

[m, n] = [n, m]
console.log(m, n)