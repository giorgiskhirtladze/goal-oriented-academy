function calculations(){
    let string = "10";
    let num = 20;
}
console.log(20 * 10);
console.log(20 / 10);
console.log(20 + 10);
console.log(20 - 10);
function change() {

    let text = prompt("Enter your text:");


    let textColor = prompt("Enter text color (e.g., 'red', '#FF0000', 'rgb(255, 0, 0)'):");


    let backgroundColor = prompt("Enter background color (e.g., 'blue', '#0000FF', 'rgb(0, 0, 255)'):");

    let paragraph = document.createElement("p");
    paragraph.textContent = text;

    paragraph.style.color = textColor;
    paragraph.style.backgroundColor = bgColor;
    paragraph.style.padding = "10px";

    document.body.appendChild(paragraph);
}

change();
