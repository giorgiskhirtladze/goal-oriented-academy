document.removeEventListener("keydown", Event =>{
    if(Event.key.startWith("Arrow")){
        Event.preventDefault();

        switch(Event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;

            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;


        }
        mybox.style.top = `${y}px`
        mybox.style.left = `${x}px`
    }
})