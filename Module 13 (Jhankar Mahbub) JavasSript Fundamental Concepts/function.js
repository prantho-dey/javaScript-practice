
function myFunction1() {
    console.log("Hii, ki obostha")
    console.log("Hii, ei to")
}

myFunction1();
console.log("Hello!")
myFunction1();

// =============

function myFunction2(name, age) {
    console.log("My name is" + " " + name + " " + "and I am" + " " + age + " " + "years old" )
    // var check = `My name is" + " " + ${name} + " " + "and I am" + " " + ${age} + " " + "years old`;
}

myFunction2("Kamal", 32)
myFunction2("Rahim", 35)
myFunction2("Abul", 45)

// =========================

function myFunction3(first, second) {
    var firstRes = first;
    var secondtRes = second;

    var total = firstRes + secondtRes;

    console.log(total)
}

myFunction3(56, 65)
myFunction3(96, 45)


function myFunction4(result) {
    var resultTotal = result * 2;

    console.log(resultTotal)
}

myFunction4(5)
myFunction4(6)


function myFunction5(result2) {
    var resultTotal = result2 * 2;

    return resultTotal;
}

var fastRes = myFunction5(2)
var scndRes = myFunction5(3)

var total2 = fastRes + scndRes
console.log(total2)