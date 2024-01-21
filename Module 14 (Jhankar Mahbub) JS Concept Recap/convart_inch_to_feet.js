
// let inchi = 100;
let outPut = document.getElementById("convart_value");

// var feet = Math.round(inchi / 12);

// outPut.innerHTML = "Yours hight is" + " " + feet + " " + "Feet" 


function inchiToFeet(inchi) {
    var feet = inchi / 12;
    return feet;
}

var outPut1 = inchiToFeet(128);
outPut.innerHTML = outPut1

var outPut2 = inchiToFeet(256);
outPut.innerHTML = outPut2