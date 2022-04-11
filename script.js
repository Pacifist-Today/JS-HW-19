function mainFunction () {
    let num = +prompt("Введите число")
    let pow = +prompt("Введите степень")
    if (isNaN(num) || isNaN(pow)) {
        alert("Введите числа!")
    }   else  {
        exponentiation(num, pow)
        multiply(num, pow)
        division(num, pow)
        module(num, pow)
    }
}

function exponentiation (num, pow) {
    let result = Math.pow(num, pow)
    alert("Результат возведения в степень " + result)
    console.log("Результат возведения в степень " + result)
}

function multiply (num, pow) {
    let result = num * pow
    console.log("Результат умножения равен " + result)
}

function division (num, pow) {
    let result = num / pow
    console.log("Результат деления равен " + result)
}

function module (num, pow) {
    let result = num % pow
    console.log("Результат деления с остатком равен " + result)
}

mainFunction()
// mainFunction(exponentiation(), multiply(), division(), module())