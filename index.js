function add(a,b) {
return a + b;
}
function subtract(a,b) {
return a - b;
}
function multiply(a,b) {
return a * b;
}
function divide(a,b) {
return a / b;
}
let number = 0
function increment(n) {
    number++;
return n + number;
}
function decrement(n) {
    return n - number;
}
function makeInt(n) {
    return parseInt(n, 10)
}
function preserveDecimal(n) {
    return parseFloat (n, 10)
}