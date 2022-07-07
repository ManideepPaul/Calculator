const ac = document.querySelector(".ac")
const del = document.querySelector(".del")
const divide = document.querySelector(".divide")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const multiply = document.querySelector(".multiply")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const sum = document.querySelector(".sum")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const subtract = document.querySelector(".subtract")
const dot = document.querySelector(".dot")
const zero = document.querySelector(".zero")
const equal = document.querySelector(".equal")

const display = document.querySelector(".display")

function btnClick(value) {
    console.log("working")
}
 
ac.addEventListener('click', () => {
    display.innerHTML = ''
})

one.addEventListener('click', () => {
    btnClick(one.getAttribute('data'))
})