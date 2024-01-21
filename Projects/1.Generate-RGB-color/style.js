
function rgnGenerator() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}

const container = document.getElementById("wrapper");
const button = document.getElementById("change_color");

function main() {
    button.addEventListener('click', function() {
        const bg_color = rgnGenerator()
        container.style.backgroundColor = bg_color;
    })
}

window.onload = function () {
    const bg_color = rgnGenerator()
    container.style.backgroundColor = bg_color;

    main() 
}

setTimeout(() => {
    location.reload();
    
}, 5000);
