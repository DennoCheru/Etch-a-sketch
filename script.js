const container = document.querySelector(".container")
const newGridButton = document.querySelector("#newGridButton")

newGridButton.addEventListener('click', newGrid)

function createGrid(squaresPerSide) {
    const containerSize = 500;
    container.style.width = `${containerSize}px`;
    container.style.width = `${containerSize}px`;
    const squareSize = Math.floor((containerSize - (squaresPerSide -1))/ squaresPerSide);

    container.textContent = '';

    for (let i =0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.style.opacity = 0.1;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
            let currentOpacity = parseFloat(square.style.opacity);
            if (currentOpacity < 1) {
                square.style.opacity = currentOpacity + 0.1;
            }
        });

        container.appendChild(square);
    }
}

function newGrid() {
    let squaresPerSide = parseInt(prompt("Enter the number of squares per side. (Maximum 100): "));

    if(isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide> 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        createGrid(squaresPerSide);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);
