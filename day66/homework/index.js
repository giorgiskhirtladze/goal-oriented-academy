let username;
let Email;
let Phone_number;
let Password;
let Confirm_Password;

document.getElementById("Submit").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);

    Email = document.getElementById("mail")
    console.log(Email);

    Phone_number = document.getElementById("number")
    console.log(Phone_number);

    Password = document.getElementById("password")
    console.log(Password);

    Confirm_Password = document.getElementById("pc")
    console.log(Confirm_Password);
}