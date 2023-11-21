document.addEventListener('DOMContentLoaded', function(){
    const pixelCountDropdown = document.getElementById('pixel-count-dropdown')
    let selectedPixelCount = pixelCountDropdown.value

    pixelCountDropdown.addEventListener('change', function(){
        selectedPixelCount = pixelCountDropdown.value
        console.log('Selected Pixel Count:', selectedPixelCount)


    createGrid(selectedPixelCount, selectedPixelCount);
    });

    console.log('Initial Pixel Count:', selectedPixelCount);

    createGrid(selectedPixelCount, selectedPixelCount);
});


function createGrid(rows, cols){

    // canvasContainer is where the grid will be formed
    const canvasContainer = document.getElementById('canvas-container')
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