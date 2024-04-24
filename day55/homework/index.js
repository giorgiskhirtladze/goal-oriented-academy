let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("text").value;
    console.log(username);
}

let num1 = parseFloat(prompt("Enter the first number:"));

let num2 = parseFloat(prompt("Enter the second number:"));


let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;


console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("multiplication:", multiplication);
