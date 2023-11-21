// canvasContainer is where the grid will be formed
const canvasContainer = document.getElementById('canvas-container')

function createGrid(rows, cols){
    //this clears any previous content
    canvasContainer.innerHTML = ''


    for (let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            const pixel = document.createElement('div')
            pixel.className = 'pixel'
            canvasContainer.appendChild(pixel)
        }
    }

    canvasContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
}


createGrid(16,16);