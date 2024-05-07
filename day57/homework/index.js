function changeDiv() {

    var width = document.getElementById("widthInput").value + "px";
    var height = document.getElementById("heightInput").value + "px";
    var color = document.getElementById("colorInput").value; + "color"

    var outputDiv = document.getElementById("outputDiv");

    outputDiv.style.width = width;
    outputDiv.style.height = height;
    outputDiv.style.backgroundColor = color;
}

document.getElementById("widthInput").addEventListener("input", updateDiv);
document.getElementById("heightInput").addEventListener("input", updateDiv);
document.getElementById("colorInput").addEventListener("input", updateDiv);

updateDiv();