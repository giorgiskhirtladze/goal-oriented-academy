
//settimeout
function hello(){
    window.alert("hello")
}
setTimeout(hello, 2000)


function hello(){
    window.alert("sucsess")
}
clearTimeout(hello)





// math
let x = 23.4;
let b = 25;
let c = 1.3;
let d = 14.6;
let maximum;
let minimum;

x = Math.ceil(x);
b = Math.sqrt(b);
c = Math.floor(c);
d  = Math.round(d);
maximum = Math.max(x, b, c)
minimum = Math.min(x, b, c)


console.log(x);
console.log(b);
console.log(c);
console.log(d);
console.log(maximum)
console.log(minimum)


//setinterval
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

function displayRandomNumber() {
    const randomNumber = generateRandomNumber();
    console.log(randomNumber);
}

setInterval(displayRandomNumber, 2000);
