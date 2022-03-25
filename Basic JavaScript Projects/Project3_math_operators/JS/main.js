{function add() {
    var addition = 389 + 494;
    document.getElementById("Math").innerHTML = addition;
}

function sub() {
    var subtraction = 534 - 265;
    document.getElementById("Math2").innerHTML = subtraction;
}

function mult() {
    var multiplication = 485 * 593;
    document.getElementById("Math3").innerHTML =  multiplication;
}

function div() {
    var division = 580 / 5;
    document.getElementById("Math4").innerHTML =  division;
}

function more_math() {
    var all = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML =  all;
}

function modulus() {
    var remainder = 25 % 6;
    document.getElementById("Math6").innerHTML = remainder;
}

function negation() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}}

function increment() {
    var value = parseInt(document.getElementById('Math8').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('Math8').value = value;
}

function decrement() {
    var value = parseInt(document.getElementById('Math9').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('Math9').value = value;
}
function random() {
    document.getElementById('Math10').innerHTML = (Math.random()*10)+1;
}
