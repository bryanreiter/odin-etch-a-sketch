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

function updatePixelSize(pixelCount){
    //calc the pixelSize based on the count
    const pixelSize = `calc((500px)/${pixelCount})`
    //get the pixel element
    const pixels = document.querySelectorAll('.pixel')

    pixels.forEach(pixel => {
        pixel.style.width = pixelSize
        pixel.style.height = pixelSize
    });


}

//When page loads, auto select 16x16 size and creategrid based on that.
document.addEventListener('DOMContentLoaded', function(){
    //get the pixel count dropdown element
    const pixelCountDropdown = document.getElementById('pixel-count-dropdown') 
    //store the initial selected pixel count
    let selectedPixelCount = pixelCountDropdown.value

    //Event listener when selectedPixelCount changes.
    pixelCountDropdown.addEventListener('change', function(){
        selectedPixelCount = pixelCountDropdown.value
        console.log('Selected Pixel Count:', selectedPixelCount)

        //create new grid
        createGrid(selectedPixelCount, selectedPixelCount);
        updatePixelSize(selectedPixelCount);
    });

    console.log('Initial Pixel Count:', selectedPixelCount);
    //create initial grid
    createGrid(selectedPixelCount, selectedPixelCount);
    updatePixelSize(selectedPixelCount);

    const canvasContainer = document.getElementById('canvas-container');

    canvasContainer.addEventListener('mouseover', function(event){
        const target = event.target

        if(target.classList.contains('pixel')){
            target.classList.add('color-black')
        }
    });
});
