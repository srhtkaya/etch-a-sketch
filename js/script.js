const mainContainer = document.querySelector('.main-container');
const btn = document.querySelector('#submit');
const totalSize = 640;

let alpha = 0.0;
var gridSize = setGridSize();

function setGridSize() {
    var temp = document.querySelector('.input').value;
    var gridsize;
    if(temp === "")
        gridsize = 32;
    else
        gridsize = parseInt(temp);
    
    while(mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }

    mainContainer.style.setProperty('grid-template-columns', 'repeat('+gridsize+', '+totalSize/gridsize+'px);');

    createGrid(gridsize);
    
    return gridsize;
}

function createGrid(gridSize) {
    var sizeParam = totalSize/gridSize;
    
    for(i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement('div');
    
        div.classList.add('item');
        mainContainer.appendChild(div);
    }

    const divs = document.querySelectorAll('.item');

    divs.forEach(function(item){
        item.style.width = (sizeParam-1)+'px';
        item.style.height = (sizeParam-1)+'px';
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}



