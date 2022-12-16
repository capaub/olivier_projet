// création des différentes partie html de la page
// let struturHTML = document.querySelector("body")
// struturHTML.innerHTML = `

// `;

// Création de mon objet canvas de la classe Dessin

let drawArea = new Dessin("#feuille");  

// Déclaration des fonctions

    // J'attribut le background suivant les couleurs choisit dans les <div> de mes couleurs prédéfinit

document.querySelectorAll("#palette div").forEach(color => {
        color.style.backgroundColor = color.dataset.color;
        
        //  Ici "j'écoute" la sélection de couleur pour modifier la couleur du pinceau

        color.addEventListener("click", () => {
            drawArea.setColor(color.dataset.color);
        });
});

window.onresize = () => {
    drawArea.resizeCanvas();
    drawArea = new Dessin("#feuille");
};

// Ecoute des événements & execution des != fonctions

document.querySelector("#plus").addEventListener("click", () => {
    drawArea.upSizing();
});

document.querySelector("#moins").addEventListener("click", () => {
    drawArea.downSizing();
});

document.querySelector("#gomme").addEventListener("click", () => {
    drawArea.setColor("white");
});

document.querySelector("#effacer").addEventListener("click", () => {
    drawArea.erase();
});
