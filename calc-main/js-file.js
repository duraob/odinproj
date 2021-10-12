/* MATH FUNCITON */
function add(itemOne, itemTwo) {
    return Number(itemOne) + Number(itemTwo);
}

function subtract(itemOne, itemTwo) {
    return Number(itemOne) - Number(itemTwo);
}

function multiply(itemOne, itemTwo) {
    return Number(itemOne) * Number(itemTwo);
}

function divide(itemOne, itemTwo) {
    return Number(itemOne) / Number(itemTwo);
}

function operate(itemOne, itemTwo, operator){
    let result = 0;

    if(operator == "+")
    {
        result = add(itemOne, itemTwo);
    }
    else if(operator == "-") 
    {
        result = subtract(itemOne, itemTwo);
    } 
    else if(operator == "*")
    {
        result = multiply(itemOne, itemTwo);
    }
    else if(operator == "/") 
    {
        result = divide(itemOne, itemTwo);
    }
    else {
        result = 0;
    }

    return result;
}


/* EVENTS 
const mainNum = document.querySelector();
const secondNum = document.querySelector();
*/
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => 
{
    button.addEventListener('mouseenter', () =>
    {
        button.classList.add('hover');
    });
    button.addEventListener('mouseleave', () =>
    {
        button.classList.remove('hover');
    });
    button.addEventListener('click', function(e) {
        const selection = e.target.id;
    });
});
