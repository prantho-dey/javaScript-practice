
var mamun = 30;
var mrinal = 39;
var ami = 38;

/* First way ============
if (mamun > mrinal) {
    if (mamun > ami) {
        console.log("Mamnu is Senior")
    }else (
        console.log("Ami is Senior")
    )
}else {
    if (mrinal > ami) {
        console.log("Mrinal is Senior")
    }else {
        console.log("Ami is Senior")
    }
}
*/

/* Second Way =============
var max = Math.max(mamun, mrinal, ami);
console.log(max)
*/

/* Third Way =============
if (mamun > mrinal && mamun > ami) {
    console.log("Mamnu is Senior")
} 
else if (mrinal > ami && mrinal > mamun) {
    console.log("Mrinal is Senior")
} 
else {
    console.log("Ami is Senior")
}
*/

var marks = [10, 30, 32, 34, 310, 32, 75]

var max = marks[0]

for(var i = 0; i < marks.length; i++) {
    var element = marks[i]
    if(element > max) {
        max = element
    }
}
console.log("Highest value is", max)

