
function rgnGenerator() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


function main() {
    const container = document.getElementById("wrapper");
    const button = document.getElementById("change_color");
    const outPut = document.getElementById("out_put")

    button.addEventListener('click', function() {
        const bg_color = rgnGenerator()
        container.style.backgroundColor = bg_color;
        outPut.value = bg_color;
    })
}

window.onload = function () {
    main()
}


