/*
Module responsable de la génération de la fiche article.

** Philosophie :
- La fiche article est accessible en lecture seule par tout le monde
    sur flashage du QR code
- Sa modification est reservée au utilisateurs identifiés
- La vue par défaut est la recherche manuelle

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

window.addEventListener("load", (event) => {
    console.log("page chargée")
    getUrlOnLoad()
  });

// On recherche la présence du query dans l'URL
let getItemSearchValue = document.getElementById("manualItemSearchField");
getItemSearchValue.addEventListener("change",appendSearchQuery );

function getUrlOnLoad()
{
    let getUrl = new URLSearchParams(window.location.href)
    
    // var searchParams = new URLSearchParams(window.location.search);
    // searchParams.set("itemSearch", getItemSearchValue.value);
    // window.location.search = searchParams.toString();

    
    if(getUrl.search = null)
    {
        
        console.log("Pas de critere de recherche");
        
       
        appendSearchQuery()
       
    }
    else
    {
        const param = new URLSearchParams(document.location.search);
        let searchItem = param.get("searchItem");
        console.log("presence du critere de recherche avec la valeur :" + " " + searchItem )
        getQuery()
    }
}

function appendSearchQuery()
{
    let value = document.getElementById("manualItemSearchField").value;
    // location.replace("file:///Users/yanis/Documents/HTML:CSS:JS/AdeleBS/HTML/item_specs.html?searchItem=" + value);
    location.replace("https://7dan2.github.io/AdeleBS/HTML/item_specs.html?searchItem=" + value)
}
// Récupération du code article :
// Cas 1 => dans le "searchItem" de l'URL (par scan du QR code)

function getQuery()
{
    const param = new URLSearchParams(document.location.search);
    let searchItem = param.get("searchItem");
    const message = "Confirmez code article : \n"
    // console.log(searchItem + " " + "size : " + searchItem.size);
    console.log(`searchItem?:\n${param.has("searchItem")}`);

    if(searchItem)
    {
        if (confirm(message + searchItem) == true)
        {
            // Appel de la fonction tagazou pour la séquence de confirmation
        tagazou(searchItem)
    
            
        }
    }
    else if(`searchItem?:\n${param.has("searchItem")}` == false)
    {
        document.getElementById("btn__updt").style.display = "none";
        alert("Critère de recherche article manquant\nVeuillez entrer un code article valide");
        document.getElementById("info").style.display = "block"
        document.getElementById("manualCodeArticleField").value = ""
    }
}

// // Cas 2 => dans le cas d'une recherche manuelle 
// // Que ce soit en direct depuis l'application ou suite à erreur du QR Code scanné.
// // Ces deux possibilités renvoient au même formulaire
// // La récupération du code doit générer le query suivant sur l'URL : 
// //  ?searchItem avec le code récupéré afin de le réinjecter dans le script de validation 
// const getEntry = document.getElementById("manualCodeArticleField");
// getEntry.addEventListener("blur", getManualEntryCode);

// function getManualEntryCode()
// {
//     getEntryValue = document.getElementById("manualCodeArticleField").value;
//     console.log(getEntryValue)
// }


function tagazou(anItemCode)
{
    // let text = anItemCode;
    // let code = "Le code article est: " + " " + text + " " +"?"

    // // confirm(code)
    // if(confirm(code) == true)
    // {
        console.log("Code article confirmé");
        alert("Chargement des données pour :\n" + anItemCode);
        document.getElementById("container").style.visibility = "visible";
        document.getElementById("itemTitle").style.display="block";
        document.getElementById("code").innerHTML = anItemCode;
        document.getElementById("item").innerHTML = "BAES Evacuation"
        // document.getElementById("buttonArea").style.display = "none"
        
        
    // }
    // else
    // { 
    //     document.getElementById("btn__updt").style.display = "none";
    //     document.getElementById("info").style.display = "block";
    //     console.log("Code article non confirmé else tutut")
    // }
}

function showItem()
{
    var request = new XMLHttpRequest();
    var requestUrl = "../JSON/Bdd.json";
    
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
        dataLength = items.id.length;

    }
}}