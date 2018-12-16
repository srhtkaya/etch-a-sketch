const mainContainer = document.querySelector('.main-container');
const btn = document.querySelector('#submit');

var gridSize = 32;

for(i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement('div');

        div.classList.add('item');
        mainContainer.appendChild(div);
}

const divs = document.querySelectorAll('.item');

divs.forEach(function(item){
    item.addEventListener('mouseover', (e) => { 
        e.target.style.backgroundColor = 'black'; 
    });
});


