
// function rgnGenerator() {
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255)

//     return `rgba(${red}, ${green}, ${blue})`
// };

// // const range = document.getElementById('contrast');
// // let opacity = range.value;

// // range.addEventListener('input', function() {
// //     opacity = range.value;
// // });

// function main() {
//     const container = document.getElementById("wrapper");
//     const button = document.getElementById("change_color");
//     const outPut = document.getElementById("out_put");
//     const copyBtn = document.getElementById("copy-code");

//     button.addEventListener('click', function() {

//         const red = Math.floor(Math.random() * 255)
//         const green = Math.floor(Math.random() * 255)
//         const blue = Math.floor(Math.random() * 255)

//         // Show the RGB Color number in Different Field


//         // Control Opacity with range 

//         const range = document.getElementById('contrast');
//         let opacity = range.value;

//         let opControll = opacity;

//         range.addEventListener('input', function() {
//            opacity = range.value;
           
//         });
        
//         console.log(opControll)


//         // Use RGB color as
//         const bg_color = `rgba(${red}, ${green}, ${blue})`


//         // 
//         container.style.backgroundColor = bg_color;
//         outPut.value = bg_color;
//     })

    

//     copyBtn.addEventListener('click', function() {
//         navigator.clipboard.writeText(outPut.value)
//     })
// }

// window.onload = function () {
//     main()
// }


// function rgnGenerator() {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);

//     return `rgba(${red}, ${green}, ${blue})`;
// }

function main() {
    const container = document.getElementById("wrapper");
    const button = document.getElementById("change_color");
    const outPut = document.getElementById("out_put");
    const copyBtn = document.getElementById("copy-code");
    const range = document.getElementById('contrast');

    const opacityOutput = document.getElementById('iduuut');

    // let opacity = range.value;

    range.addEventListener('input', function() {
        opacity = range.value;
    });
    opacityOutput.innerHTML = opacity;

    button.addEventListener('click', function() {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        const bg_color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

        container.style.backgroundColor = bg_color;
        outPut.value = bg_color;
        opacityOutput.textContent = opacity;
    });

    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(outPut.value);
    });
}

window.onload = function() {
    main();
};
