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
console.log(myDraw)
let isDrawing = false;
let x = 0;
let y = 0;

// déclaration des fonctions



// écoute des événements



//______________________________________TEST____________________________________//

// à essayer d'ecrir sous forme de fonction non fléchée

myDraw.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});
// à essayer d'ecrir sous forme de fonction non fléchée

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
//  ajouter une variable pour que l'utilisateur choisis sa couleur
    ctx.strokeStyle = 'black';
//  ajouter une variable pour que l'utilisateur choisis sa taille de pinceau en pixel
    ctx.lineWidth = 10;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}