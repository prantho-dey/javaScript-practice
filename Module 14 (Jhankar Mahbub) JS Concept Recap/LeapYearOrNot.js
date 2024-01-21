
// function isLeapYear(year) {
//     const remainder = year % 4;

//     if(remainder == 0) {
//         return "This year is Leapyear";
//     }else {
//         return "This year is not Leapyear";
//     }
// }

// const printValue = isLeapYear(2001)
// console.log(printValue)

// 

function isLeapYear(year) {
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return year + " " + "This year is Leapyear";
    }else {
        return year + " " + "This year is not Leapyear";
    }
}

const printValue = isLeapYear(prompt("Enter your Year"))
console.log(printValue)