
const gridContainer = document.querySelector('.grid-container');
const button = document.querySelector("button");
const levels = document.querySelector('#levels');


button.addEventListener("click", function(){
    
    gridContainer.innerHTML = '';

    const numberCell = (levels.value);

    for (let i = 1; i <= numberCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', 'cell-' + numberCell);
        cell.innerHTML = i;
    
        cell.addEventListener('click', function () {
            console.log(this);
    
            this.classList.toggle('active');
    
            console.log(this.innerHTML);
        });
    
        gridContainer.append(cell);
    }

    // document.querySelector("h1").style.display = "none";
    // document.querySelector("button").style.display = "none";

});