// While Loop
var num = 2;

while(num <= 10) {
    console.log(num)
    num++
}

// For Loop

var frinds = ['Prantho', "Priom", "Avi", "Simanto"]

for (var i = 0; i < frinds.length; i++) {
    var element = frinds[i];
    console.log(element);
}


// Switch
var number = 600;

switch (number) {
    case 100:
        console.log("Ok");
        break;
    case 200:
        console.log("Im 200");
        break;
    case 500:
    case 700:
        console.log("Iam 500 and 700")
        break;
    default:
        console.log("Iam not any number")
}