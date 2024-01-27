
function main() {
    const container = document.getElementById("wrapper");
    const button = document.getElementById("change_color");
    const outPut = document.getElementById("out_put");
    const copyBtn = document.getElementById("copy-code");

    // Color boxs
    const redBox = document.getElementById("red");
    const greenBox = document.getElementById("green");
    const blueBox = document.getElementById("blue");
    const opacityBox = document.getElementById("opacity");

    button.addEventListener('click', function() {

        // Colors
        const red = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)

        var bg_color = `rgba(${red}, ${green}, ${blue}, ${range.value})`

        container.style.backgroundColor = bg_color;
        outPut.value = bg_color;

        redBox.innerHTML = red;
        greenBox.innerHTML = green;
        blueBox.innerHTML = blue;
        opacityBox.innerHTML = range.value;
        
        // Range Bar Show
        range.style.display = "block";

    })

    // Control Opacity with range 
    const range = document.getElementById('contrast');

    range.addEventListener('input', function() {

        opacityBox.innerHTML = range.value;

        var gen_bg_color = `rgba(${redBox.textContent}, ${greenBox.textContent}, ${blueBox.textContent}, ${range.value})`

        container.style.backgroundColor = gen_bg_color;
        outPut.value = gen_bg_color;
    });

    // Show resulut on Click
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(outPut.value)
    })
}

window.onload = function () {
    main()
}


