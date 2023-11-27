let numbersInput = document.querySelector('[data-numbersInput]');

// console.log(numberArray)
let result = document.querySelector('#result')
let minBtn = document.querySelector('#minBtn')
let maxBtn = document.querySelector('#maxBtn')
minBtn.addEventListener('click', ()=> findMin(numbersInput.value))
maxBtn.addEventListener('click', ()=> findMax(numbersInput.value))


function findMin(a){
    numberArray = a.split(',')
    min = Math.min(...numberArray)
    return result.textContent = `The smallest number is ${min}`;
}

function findMax(a){
    numberArray = a.split(',')
    max = Math.max(...numberArray)
    return result.textContent = `The biggest number is ${max}`;
}
