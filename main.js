var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]


var tabResultat = genereTableauAleatoire();

var oldSelection =[];
var nbAffiche = 0;
var ready = true;

const divResultat = document.getElementById("resultat");

afficherTableau();


function afficherTableau(){
    var txt = "";
    for (let i = 0; i < tabJeu.length; i++) {
       txt += "<div>";
       for (let j = 0; j < tabJeu[i].length; j++) {
        if (tabJeu[i][j] === 0) {
            txt += "<button class='btn btn-primary m-2' style= 'width:100px; height: 100px' onClick='verif(\""+i+"-"+j+"\")'>Afficher</button>";            
        }else{
            txt += "<img src='"+getImage(tabJeu[i][j])+"' class='m-2' style= 'width:100px; height: 100px'/>"
        }
        
       }
       txt += "</div>";
        
    }



    divResultat.innerHTML = txt;
}
function getImage(valeur){
    var imageTxt="image/";
    switch (valeur) {
        case 1: imageTxt +="elephant.png";
            
            break;
        case 2: imageTxt +="giraffe.png";
            
            break;
        case 3: imageTxt +="hippo.png";
            
            break;
        case 4: imageTxt +="monkey.png";
            
            break;
        case 5: imageTxt +="panda.png";
            
            break;
        case 6: imageTxt +="parrot.png";
            
            break;
        case 7: imageTxt +="penguin.png";
            
            break;
        case 8: imageTxt +="pig.png";
            
            break;
            

    
        default: console.log("erreure image");
            break;
    }
    return imageTxt;
}
function verif(button){
    if (ready) {
        nbAffiche++;

        var ligne = button.substr(0,1);
        var colonne = button.substr(2,1);
        
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTableau();

        if (nbAffiche>1) {
            ready = false;
            setTimeout(()=>{ 
                if (tabJeu[ligne][colonne]!== tabResultat[oldSelection[0]][oldSelection[1]]) {
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0;
                }
                afficherTableau();
                ready = true;
                nbAffiche =0;
                oldSelection = [ligne,colonne];
            },500)
           
           
        }else{
            oldSelection = [ligne,colonne];
        }
    
        
    }

}

function genereTableauAleatoire(){
    var tab = [];
    var nbImagePosition = [0,0,0,0,0,0,0,0];

    for (let i = 0; i < 4; i++) {
        var ligne = [];
        for (let j = 0; j < 4; j++) {
            var fin = false;
            while (!fin) {
                var randomImage = Math.floor(Math.random()*8);
                if (nbImagePosition[randomImage]<2) {
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
            }
            }
            
        }

        tab.push(ligne);
        
    }

    return tab;
}
