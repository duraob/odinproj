/* Creating 16x16 grid */
const body = document.querySelector('body');

const mainContent = document.createElement('div');
body.appendChild(mainContent);
mainContent.style.display = 'flex';
mainContent.style.flexFlow = 'column nowrap';
mainContent.style.alignItems = 'center';
const clearButton = document.createElement('button');
clearButton.textContent = "Clear Board";
clearButton.style.margin = '25px auto 25px auto';
mainContent.appendChild(clearButton);

let gridRows = 16;
let gridCols = 16;



for (x = 0; x < gridRows; x++) {
    const row = document.createElement('div');
    row.classList.add("row");
    for (y = 0; y < gridCols; y++) {
        const col = document.createElement('div');
        col.style.width = '40px';
        col.style.height = '40px';
        col.style.border = '1px solid black';
        col.classList.add("col");
        col.addEventListener('mouseenter', () => {
            const newColor = Math.floor(Math.random()*16777215).toString(16);
            col.style.backgroundColor = '#' + newColor;
        });
        col.addEventListener('mouseleave', () => {
            const newColor = Math.floor(Math.random()*16777215).toString(16);
            col.style.backgroundColor = '#' + newColor;
        });
        row.appendChild(col);
    }
    row.style.display = 'flex';
    row.style.flexDirection = 'row';
    row.style.justifyContent = 'center';
    mainContent.appendChild(row);
}


const boxes = document.querySelectorAll(".col");

clearButton.addEventListener('click', ()=>
{
    boxes.forEach(clearBoard);
});

function clearBoard(item) {
    item.style.backgroundColor = 'white';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }





