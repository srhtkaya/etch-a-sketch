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
            if(e.target.style.backgroundColor === '') {
                var r = 1 + Math.floor(Math.random()*255);
                var g = 1 + Math.floor(Math.random()*255);
                var b = 1 + Math.floor(Math.random()*255);
                e.target.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
            } else {
                var color = e.target.style.backgroundColor;
                e.target.style.backgroundColor = blackFadingRGB(color);
            }
        });
    });
}

function blackFadingRGB(color) {
    var colorSliced = color.split(',')
    var r = parseInt(colorSliced[0].slice(4));
    var g = parseInt(colorSliced[1].trim());
    var b = parseInt(colorSliced[2].slice(0, -1));
    if(r > 50) r = r - 50;
    else r = 0;
    if(g > 50) g = g - 50;
    else g = 0;
    if(b > 50) b = b - 50;
    else b = 0;

    return 'rgb('+r+','+g+','+b+')'
}

