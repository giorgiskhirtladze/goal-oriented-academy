const div = document.getElementById("gio");
let px = 0;

const moveRight = setInterval(function(){

    div.style.left = `${px}px`
    px++;
    if(px >= 100){
        clearInterval(moveRight)
    }
}, 10)