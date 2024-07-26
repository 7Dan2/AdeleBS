/*
Module responsable de la génération de la fiche article.

** Philosophie :
- La fiche article est accessible en lecture seule par tout le monde
    sur flashage du QR code ou par entrée d'un code connu.
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

  function coucou()
  {
      console.log("coucou")
  }

// On recherche la présence du query dans l'URL
let getItemSearchValue = document.getElementById("manualItemSearchField");
// getItemSearchValue.addEventListener("change",appendSearchQuery );

// Sert également pour le moteur de recherche
getItemSearchValue.addEventListener("input", searchEngine);

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

function appendSearchQuery(aValue)
{
    aValue = getItemSearchValue.value;

    // location.replace("file:///Users/yanis/Documents/HTML:CSS:JS/AdeleBS/HTML/item_specs.html?searchItem=" + aValue);
    location.replace("https://7dan2.github.io/AdeleBS/HTML/item_specs.html?searchItem=" + value)
    // location.replace("http://localhost:9000/HTML/item_specs.html?searchItem=" + aValue)
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
            sessionStorage.setItem("code_item", searchItem )
        // document.getElementById("manualItemSearchField").value = searchItem;

        // Appel de la fonction tagazou pour la séquence de confirmation
        showItem(searchItem)
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

// Moteur de recherche avec base de données test
const documents = [
    {id: "R014029300000", content: "CMP bâtiment 0014 sous-station"},
    {id: "R014000800000", content: "CMP bâtiment 0014 éclairage de sécurité"},
    {id: "B030000181000", content: "LYT bâtiment 0030 TC BAES RDC"},
    {id: "B030102381000", content: "LYT bâtiment 0030 TC BAES Etage 1"},
    {id: "B030203481000", content: "LYT bâtiment 0030 TC BAES Etage 2"},
    {id: "B031035340001", content: "LYT bâtiment 0031 chaudière 1"},
    {id: "R014000400000", content: "CMP bâtiment 0014 ensemble CTA"},
    {id: "R014029310001", content: "CMP bâtiment 0014 sous-station circulateur 1 radiateurs"},
    {id: "R014029310002", content: "CMP bâtiment 0014 sous-station circulateur 2 radiateurs"},
    {id: "R014029310003", content: "CMP bâtiment 0014 sous-station circulateur 1 aérotherme"},
    {id: "R014029310004", content: "CMP bâtiment 0014 sous-station circulateur 2 aérotherme"},
    {id: "R068004300000", content: "CMP bâtiment 0068 chaufferie"},
    {id: "R068004340001", content: "CMP bâtiment 0068 chaudière 1"},
    {id: "R068004340002", content: "CMP bâtiment 0068 chaudière 2"},
    {id: "R068004340003", content: "CMP bâtiment 0068 chaudière 3"},
    {id: "B031035300000", content: "LYT bâtiment 0031 chaufferie"}
]

function searchEngine(query)
{
    if(query === "")
    {
        const resultsElement = document.getElementById('results').innerHTML = "";

    }
    else if(query != "")
    {
        query = getItemSearchValue.value.toLowerCase();
        const results = search(query);
        // console.log(`Recherche : ${query}`);
        displayResults(results);
        // console.log(`Resultats : ${results}`)
    }
    
}

function search(query)
{
    return documents.filter(doc => doc.content.toLowerCase().includes(query));
}

function displayResults(results) 
{
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = '';
    results.forEach(result => {
        const unsortedList = document.createElement('ul');
        const listItem = document.createElement('li');
        listItem.innerHTML = "<strong>" + result.id + "</strong>" + "</BR>" + result.content;
        listItem.className = "searched";
        unsortedList.appendChild(listItem)
        resultsElement.appendChild(unsortedList);
    });
}

// Fin moteur de recherche


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
        // document.getElementById("code").innerHTML = anItemCode;
        // document.getElementById("item").innerHTML = ""
        // document.getElementById("buttonArea").style.display = "none"
        
        
    // }
    // else
    // { 
    //     document.getElementById("btn__updt").style.display = "none";
    //     document.getElementById("info").style.display = "block";
    //     console.log("Code article non confirmé else tutut")
    // }
}


// Fonctionne avec serveur Python !
function showItem(aValue)
{
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("itemTitle").style.display="block";

    aValue = sessionStorage.getItem("code_item");
    console.log("valeur de aValue dans showItem: " + aValue)
    
    fetch('../JSON/Bdd.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            // 'mode': 'no-cors',
            'Access-Control-Allow-Origin': "*"
        },
    })
       .then(response => response.json())
       .then((response) => {
        
           console.table(response)

        let places_header = `
        <tr>
          <th>Bâtiment</th>
          <th>Niveau</th>
          <th>Pièce</th>
        </tr>`;

        let specs_header =`
        <tr>
          <th>Marque</th>
          <th>Modèle</th>
          <th>Numéro de série</th>
          <th>Date d'installation</th>
        </tr>`;

        let maints_header =`
        <tr>
          <th>Date</th>
          <th>Code</th>
          <th>Entreprise</th>
          <th>Nom</th>
        </tr>
        `

        document.querySelector(".places-header").innerHTML = places_header;
        document.querySelector(".specs-header").innerHTML = specs_header;
        document.querySelector(".maints-header").innerHTML = maints_header;

        // Localisations
        let place_rows = "";
        let specs_rows = "";
        let maints_rows = "";
        
        response.forEach((facility) => {

            if(facility.code_item === aValue)
            {
                document.getElementById("code").innerHTML = facility.code_item;
                document.getElementById("item").innerHTML = facility.libelle;
               
            // Remplissage de lignes de données
            place_rows += `
                <tr>
                    <td>${facility.localisation.batiment}</td>
                    <td>${facility.localisation.etage} </td>
                    <td>${facility.localisation.piece}</td>
                </tr>
                `;
                // document.querySelector(".place-body").innerHTML = place_rows;

            specs_rows += `
                <tr>
                    <td>${facility.marque} </td>
                    <td>${facility.modele}</td>
                    <td>${facility.num_serie}</td>
                    <td>${facility.annee_mep}</td>
                </tr>
                `;

                for(let i in facility.maintenances)
                {
                    maints_rows += `
                    <tr>
                        <td>${facility.maintenances[i].date} </td>
                        <td>${facility.maintenances[i].code_maintenance}</td>
                        <td>${facility.maintenances[i].entreprise}</td>
                        <td>${facility.maintenances[i].nom_technicien}</td>
                    </tr>
                    `;
                }
            }
                
        }
                
            );
              document.querySelector(".place-body").innerHTML = place_rows;
              document.querySelector(".specs-body").innerHTML = specs_rows;
              document.querySelector(".maints-body").innerHTML = maints_rows;
  
            });

        }
     
    // Fin du fichier 