const screen = document.querySelector('#screen')
const clears = document.querySelector('#clears')
const divide = document.querySelector("#divide")
const four = document.querySelector("#n4")
const seven = document.querySelector("#n7")
const eight = document.querySelector("#n8")
const nine = document.querySelector ("#n9")
const five = document.querySelector("#n5")
const six = document.querySelector("#n6")
const timez = document.querySelector("#timez")
const one = document.querySelector("#n1")
const two = document.querySelector("#n2")
const three = document.querySelector("#n3")
const minus = document.querySelector("#minus")
const zero = document.querySelector("#n0")
const decimal = document.querySelector("#decimal")
const equal = document.querySelector("#equal")
const plus = document.querySelector("#plus")

decimal.addEventListener('click', function() {
    screen.innerText='.'
})

minus.addEventListener('click', function() {
    screen.innerText='-'
})

equal.addEventListener('click', function() {
    screen.innerText='='
})

divide.addEventListener('click', function() {
    screen.innerText='/'
})

plus.addEventListener('click', function() {
    screen.innerText='+'
})

timez.addEventListener('click', function() {
    screen.innerText='*'
})

clears.addEventListener ('click', function() {
    screen.innerText=''
})

n0.addEventListener('click', function() {
    screen.innerText='0'
})

n1.addEventListener('click', function() {
    screen.innerText='1'
})

n2.addEventListener('click', function() {
    screen.innerText='2'
})

n3.addEventListener('click', function() {
    screen.innerText='3'
})

n4.addEventListener('click', function() {
    screen.innerText='4'
})

n5.addEventListener('click', function() {
    screen.innerText='5'
})

n6.addEventListener('click', function() {
    screen.innerText='6'
})

n7.addEventListener('click', function() {
    screen.innerText='7'
})

n8.addEventListener('click', function() {
    screen.innerText='8'
})

n9.addEventListener('click', function() {
    screen.innerText='9'
})

