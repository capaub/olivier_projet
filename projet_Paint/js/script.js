// création des différentes partie html de la page
let struturHTML = document.querySelector("body")
struturHTML.innerHTML = `
    <header class="drawingSite">
        <h1>Super site de dessin en ligne</h1>
    </header>
    <main class="drawingMain">
        <section class="drawingMain-area Area">
            <nav class="Area-drawingTools">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
            <div class="Area-drawing">
                <canvas id="drawingArea" width="300px" height="300px">Désolé, votre navigateur ne prend pas en charge CANVAS...</canvas>
            </div>
        </section>
        <section class="">
        </section>
    <footer class="drawingFooter">
        <p class="footer"></p>
    </footer>
`;

// déclaration de variables & constante global

const myDraw = document.querySelector('#drawingArea');
const ctx = myDraw.getContext('2d');

let isDrawing = false;
let x = 0;
let y = 0;

// déclaration des fonctions



// écoute des événements



//______________________________________TEST____________________________________//

// let playground=document.querySelector("#playground");
// let xcoord=document.querySelector("#x-coord span");
// let ycoord=document.querySelector("#y-coord span");

// function logMovement(event)
// {
//     xcoord.innerHTML=event.offsetX;
//     ycoord.innerText=event.offsetY;
// };

// à essayer d'ecrir sous forme de fonction non fléchée
// la propriété .offsetX & .offsetY ne fonctione pas avec mousemove !!??
myDraw.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});
// à essayer d'ecrir sous forme de fonction non fléchée
// la propriété .offsetX & .offsetY ne fonctione pas avec mousemove !!??
myDraw.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});
// à essayer d'ecrir sous forme de fonction non fléchée
window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}