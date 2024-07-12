const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
console.log(numbers)
console.log(numbers.length)
console.log(numbers[4])
numbers.push("11")
numbers.pop()
numbers.unshift("0")
numbers.shift()
numbers.indexOf('8')


const book = {
    pages: "300",
    value: "100$"
}
book.width ="20sm";
delete book.value;
console.log(book.value)
valuesArray = Object.values(book);

console.log(valuesArray);