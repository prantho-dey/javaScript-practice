
function rgbGenarator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  
  var rgb = `rgb(${red}, ${green}, ${blue})`;
  var hax = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
 
  return [rgb, hax];

}


function main() {
    
    const mainWrap = document.getElementById("wrapper");
    const output_rgb = document.getElementById("output_rgb");
    const output_hax = document.getElementById("output_hax");
    const copy_code_hax = document.getElementById("copy-code_hax");
    const copy_code_rgb = document.getElementById("copy-code_rgb");
    const change_color = document.getElementById("change_color");

    change_color.addEventListener('click', function() { 
        var rgbResult = rgbGenarator();
        var colorRGB = rgbResult[0];
        var colorHAX = rgbResult[1];

        const bg_color = colorRGB;
        const bg_color2 = colorHAX;
        
        mainWrap.style.backgroundColor = bg_color;
        output_rgb.value = bg_color;
        output_hax.value = bg_color2;
    })

    copy_code_hax.addEventListener('click', function() {
        navigator.clipboard.writeText(output_hax.value)
    })

    copy_code_rgb.addEventListener('click', function() {
        navigator.clipboard.writeText(output_rgb.value)
    })
}

window.onload = function () {
    main()
}
