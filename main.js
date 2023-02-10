var tabJeu= [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]
const divResultat= document.getElementById("resultat");
afficherTableau ();
function afficherTableau(){
    var txt= "";
    for (let i = 0;i < tabJeu.length;i++) {
        txt += "<div>";
        for (let j = 0;j < tabJeu[i].length;j++) {
            if (tabJeu[i][j]===0) {
                txt+="<button class='btn btn-primary m-2'style='width:100px;height:100px'>afficher</button>";
                
            }else{
                txt+="<img src='"+getImage(tabJeu[i][j])+"'style='width:100px;height:100px'class='m-2' />"
            }
        
        }
        txt+= "</div>"
    }

    divResultat.innerHTML=txt;
}
function getImage(valeur){
    var imageTxt="Image/";
    switch (valeur) {
        case 1:imageTxt+="elephant.png";
            
            break;
        case 2:imageTxt+="giraffe.png";
            
            break;
        case 3:imageTxt+="hippo.png";
            
            break;
        case 4:imageTxt+="monkey.png";
            
            break;
        case 5:imageTxt+="panda.png";
            
            break;
        case 6:imageTxt+="parrot.png";
            
            break;
        case 7:imageTxt+="penguin.png ";
            
            break;
        case 8:imageTxt+="pig.png ";
            
            break;
    
        default: console.log("erreur image");
            break;
    }
    return imageTxt;
}