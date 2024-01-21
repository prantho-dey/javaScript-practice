
let outPut = document.getElementById("convart_value");
let btn_id = document.getElementById("btn_id");

btn_id.addEventListener("click", function () {
    var number = Math.random() * 6;
    var number2 = Math.ceil(number);

    if (number2 == 0) {
        number2 + 1;
    }
    outPut.innerHTML = number2;
})
