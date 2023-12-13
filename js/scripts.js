
const gridContainer = document.querySelector('.grid-container');
const button = document.querySelector("button");


button.addEventListener("click", function(){

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = i;
    
        cell.addEventListener('click', function () {
            console.log(this);
    
            this.classList.toggle('active');
    
            console.log(this.innerHTML);
        });
    
        gridContainer.append(cell);
    }

    document.querySelector("h1").style.display = "none";
    document.querySelector("button").style.display = "none";

});