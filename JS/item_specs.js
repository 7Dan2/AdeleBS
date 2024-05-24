/*
Module responsable de la génération de la fiche article.

** Philosophie :
- La fiche article est accessible en lecture seule par tout le monde
    sur flashage du QR code
- Sa modification est reservée au utilisateurs identifiés


** Fonctionnalitées Attendues :
- Récupération du code article dans l'URL (autre fonction dédiée)
- Message de confirmation reprenant le code article; on fait valider le code
par l'utilisateur, dans le cas d'une erreur entre le qrcode affiché et la bdd
    - Si validation : 
        * Interrogation de la base de données, création et affichage de la fiche équipement
    - Si erreur :
        * L'utilisateur entre le code item
        * Interrogation de la base de données
        * Création et affichage de la fiche équipement

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

// Récupération du code article dans le "searchItem" de l'URL
function getQuery()
{
    const param = new URLSearchParams(document.location.search);
    let searchItem = param.get("searchItem");
    const message = "Confirmez code article :"
    console.log(searchItem + " " + "size : " + searchItem.size);
    console.log(`searchItem?:\n${param.has("searchItem")}`);

    if(!searchItem)
    {
        alert("aucune recherche valide\n avez-vous modifié l'url ?")
    }

    if (confirm(message + searchItem) == true)
    {
        document.getElementById("code").innerHTML = searchItem
        document.getElementById("item").innerHTML = "BAES Evacuation"
    }
    
}
function showItem()
{
    var request = new XMLHttpRequest();
    var requestUrl = "./Bdd.json";
    
    request.open('GET', requestUrl, true);
    request.responseType = 'text';
    request.send();
    request.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        
        // Return key:value
        items = JSON.parse(request.responseText)
        console.log(items)
    }
}}



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