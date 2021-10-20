/* MATH FUNCITON */
function add(a, b) {
    return Number(a) + Number(b)
}

function subtract(a, b) {
    return Number(a) - Number(b)
}

function multiply(a, b) {
    return Number(a) * Number(b)
}

function divide(a, b) {
    return Number(a) / Number(b)
}

function operate(a, b, operator){
    switch (operator) {
        case '+':
          return add(a, b);
        case '-':
          return subtract(a, b);
        case '*':
          return multiply(a, b);
        case '/':
          if (b === 0) return null;
          else return divide(a, b)
        default:
          return null
    }
}

function appendNum(num)
{
    if(curScreen.textContent === '0')
      if(num === '0')
        return
      else
        curScreen.textContent = num
    else
      curScreen.textContent += num
}

function setOperation(op) {
    firstNum = curScreen.textContent
    operation = op
    lastScreen.textContent = `${firstNum} ${operation}`
    curScreen.textContent = '0'
  }
  
  function evaluate() {
    if (operation == null) return
    if (operation == '/' && curScreen.textContent == '0') {
      alert("You can't divide by 0!")
      return
    }
    secondNum = curScreen.textContent
    curScreen.textContent = operate(firstNum, secondNum, operation)
    lastScreen.textContent = `${firstNum} ${operation} ${secondNum} =`
    operation = null

  }

  function del()
  {
    curScreen.textContent = curScreen.textContent.substring(0, curScreen.textContent.length - 1)
  }

  function clear()
  {
    curScreen.textContent = '0'
    lastScreen.textContent = ''
    firstNum = ''
    secondNum = ''
    operation = null
  }

  function addDot() {
    if (curScreen.textContent == '')
        curScreen.textContent = '0'
    if (curScreen.textContent.includes('.')) return
    curScreen.textContent += '.'
  }

  function hover(item) {
    item.addEventListener(('mouseenter'), ()=> item.style.filter = 'brightness(75%)')
    item.addEventListener(('mouseleave'), ()=> item.style.filter = 'brightness(100%)')
  }

/* EVENTS 
*/
let firstNum = ''
let secondNum = ''
let operation = null

const buttons = document.querySelectorAll('button')
const numButs = document.querySelectorAll('.num')
const operButs = document.querySelectorAll('.oper')
const clearBut = document.querySelector('#butclr')
const delBut = document.querySelector('#butdel')
const eqBut = document.querySelector('#buteq')
const dotBut = document.querySelector('#butdot')
const lastScreen = document.querySelector('#current-op')
const curScreen = document.querySelector('#main-num')

buttons.forEach((button) => hover(button))

numButs.forEach((button) =>
    button.addEventListener(('click'), ()=> appendNum(button.textContent))
)

operButs.forEach((button) => 
    button.addEventListener(('click'), ()=> setOperation(button.textContent))
)

eqBut.addEventListener(('click'), evaluate)
clearBut.addEventListener(('click'), clear)
delBut.addEventListener(('click'),  del)
dotBut.addEventListener(('click'), addDot)