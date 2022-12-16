let drawArea;

// au chargement de la page j'execute les fonctions créer plus bas de redimensionnement du canvas et la créations de 
window.onload = () => {  
    drawArea = document.getElementById("feuille");
    drawArea.style.backgroundColor = "#282a36";
    resizeCanvas();
    // drawRect();
    console.log(drawArea);
};

window.onresize = () => {
    resizeCanvas();
    // drawRect();
    console.log(drawArea);
};

function resizeCanvas(){
    drawArea.width = window.innerWidth;
    drawArea.height = window.innerHeight;
};

// function drawRect(){
//     let ctx = drawArea.getContext("2d");
//     let width = drawArea.width * 0.2;
//     let height = drawArea.height * 0.2;
//     let xPos = (drawArea.width / 2) - (width / 2);
//     let yPos = (drawArea.height / 2) - (height / 2);
//     ctx.fillStyle = "white";
//     ctx.fillRect(xPos, yPos, width, height);
//     console.log(width)
//     console.log(height)
//     console.log(xPos)
//     console.log(yPos)
// };