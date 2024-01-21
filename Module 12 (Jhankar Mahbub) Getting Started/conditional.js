
var jobAche = true;

if(jobAche == true) {
    console.log("Ok")
}else {
    console.log("opps")
}

if(jobAche != true) {
    console.log("Ok")
}else {
    console.log("opps")
}

// Check Multiple

var havJob = true;
var savingAmount = 60;

if(havJob == true && savingAmount > 500000) {
    console.log("Ebar biye korte paro")
}else {
    console.log("Tumar koplae biya nai")
}

if(havJob == true || savingAmount > 500000) {
    console.log("Ebar biye korte paro")
}else {
    console.log("Tumar koplae biya nai")
}


if(havJob == true && savingAmount > 500000) {
    console.log("Ebar biye korte paro")
}else if(jobAche == true) {
    console.log("Koyekdin Jak tarpor dekha jak")
}else {
    console.log("Tumar koplae biya nai")
}

// School Grad System
var marks = 97;
var mark = document.getElementById("marks");

if(marks > 80) {
    mark.innerHTML = "You got A+";
}
else if (marks > 70 && marks < 79) {
    mark.innerHTML = "You got A"
}
else if (marks > 60 && marks < 69) {
    mark.innerHTML = "You got A-"
}
else if (marks > 50 && marks < 59) {
    mark.innerHTML = "You got B"
}
else if (marks > 40 && marks < 49) {
    mark.innerHTML = "You got C"
}
else if (marks > 33 && marks < 39) {
    mark.innerHTML = "You got D"
}
else {
    mark.innerHTML = "You are fail"
}



var number1 = "501";
var number2 = 101;

number1 = +number1;
console.log(number1)

// For Total
var totalAmount = number1 + number2;
console.log(totalAmount)

var number3 = 101.234;
var totalAmount2 = Math.floor(totalAmount + number3);
console.log(totalAmount2)


var result = 500;

if(totalAmount2 >= 300 && totalAmount2 < result) {
    console.log('You are passed')
}
else if (totalAmount2 >= result) {
    console.log('Outstanding Result')
}
else {
    console.log('You are fail')
}