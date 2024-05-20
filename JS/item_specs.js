/*
Module responsable de la génération de la fiche article.

** Philosophie :
- La fiche article est accessible en lecture seule par tout le monde
    sur flashage du QR code
- Sa modification est reservée au utilisateurs identifiés


** Fonctionnalitées Attendues :
- Récupération du code article dans l'URL (autre fonction dédiée)
- Message de confirmation reprenant le code article, dans le cas d'une erreur de qrcode affiché
    - Si validation : 
        * Interrogation de la base de données
    - Si erreur :
        * L'utilisateur entre le code item
        * Interrogation de la base de données

    - L'interface présente alors :
        - Première ligne = > le Code Item 
        - Seconde ligne => Le libellé en clair de l'item
        - Suivi de 3 tableaux:
            * Rappel de l'emplacement de l'item
            * Les spécifications de l'item
            * Les maintenabces de l'item
    
    - Un bouton permettant de modifier la fiche
        * Généré uniquement si l'utilisateur est loggué
*/


document.getElementById("item").innerHTML = "BAES Evacuation"
document.getElementById("code").innerHTML = "R014023803001"



function tagazou()
{
    let text = "R014023803001"
    let code = "Le code article est: " + " " + text + " " +"?"

    // confirm(code)
    if(confirm(code) == true)
    {
        console.log("Code article confirmé");
        alert("Chargement des données");
        document.getElementById("container").style.visibility = "visible"
        document.getElementById("buttonArea").style.display = "none"
        
        
    }
    else
    { 
        document.getElementById("btn__updt").style.display = "none";
        document.getElementById("info").style.display = "block";
        console.log("Code article non confirmé else tutut")
    }
}