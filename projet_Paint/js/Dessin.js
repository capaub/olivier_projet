// Déclaration des variables à utiliser dans la fonction resizeCanvas();

let width = window.innerWidth;
let height = window.innerHeight;
let canvas = document.getElementById("areaDraw")

// Création de la classe Dessin

class Dessin{
    constructor(){

        let isDrawing = false;
        let x = 0;
        let y = 0;
        let sheet = document.querySelector("#feuille");

        this.ctx = sheet.getContext("2d");
        this.ctx.lineWidth = 2;

    //J'écoute les différents événement de utilisateur pour dessiner

        sheet.addEventListener("mousedown", e =>{
            isDrawing = true;
            x = e.offsetX;
            y = e.offsety;
        });

        sheet.addEventListener('mousemove', e =>{
            if (isDrawing){
                this.drawLine(this.ctx, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            };
        });

        sheet.addEventListener('mouseup', e =>{
            if (isDrawing){
                this.drawLine(this.ctx, x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawing = false;
            };
        });

        sheet.addEventListener('mouseout', e =>{
            if (isDrawing){
                this.drawLine(this.ctx, x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawing = false;
            };
        });
    };

    //Fonction pour déssiner

    drawLine(ctx, x1, y1, x2, y2){
        ctx.beginPath();
        ctx.strokeStyle = this.setColor();
        ctx.lineWidth = this.ctx.lineWidth;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    };
    
    //Fonction pour le changement de couleurs
    
    setColor(color){
        this.ctx.strokeStyle = color;
    };
    
    //Fonction plus gros trait
    
    upSizing(){
        this.ctx.lineWidth ++;
    };
    
    //Fonction plus petit trait 
    
    // --/-- écrite en ternaire --/-- prends moins de place mais apprends à marché avant de vouloir courir !!!!! (à utiliser seulement pour des conditions unique / simple)
    //stucture d'une condition ternaire : condition ? if : else ; 
    
    // downSizing(){
        //     if(this.ctx.lineWidth < 1){
            //         this.ctx.lineWidth = 1;
            //     } this.ctx.lineWidth --;
            // };
            
    downSizing(){this.ctx.lineWidth < 1 ? this.ctx.lineWidth = 1 : this.ctx.lineWidth --;
    };

    //Fonction effacer 
    
    erase(){
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    };

    // Fonction resize // ajouter un window.alert avec "attention tu vas perdre ton dessin !"

    resizeCanvas(){
        width = window.innerWidth * 0.5;
        height = window.innerHeight * 0.5;
        canvas.innerHTML=`
            <canvas id="feuille" width="${width}" height="${height}"></canvas>
            `
    };
};