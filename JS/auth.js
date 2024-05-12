// Récupération de l'identifiant et du mot de passe
let getId = document.getElementById("loginId");
getId.addEventListener("blur", checkId)

let getPasswd = document.getElementById("loginPwd").value

function checkId(id)
{
    id = document.getElementById("loginId").value;
    // Si aucun id n'est entré ou si l'utilisateur efface l'id
    if (!id)
    {
        alert ("Vous devez entrer un identifiant");
        document.getElementById("loginId").value = "";
        document.getElementById("loginPwd").style.display="none"


        // Proposer de demander un identifiant
        // Créér un lien vers messagerie par exemple
    }
    // Si l'identifiant est renseigné, vérification de son existance 
    // dans la base de données
    else
    {
        // On va chercher si l'id est connu dans la base de données
        searchForMembers(id)

        alert ("Bienvenue" + " " + id + ", entrez votre mot de passe")  
        
        document.getElementById("loginPwd").style.display="block"
    }
    
}

function searchForMembers(member)
{
    // faire une recherche dans le fichier JSON "authorized_members", rubrique "auth"
    var requestUrl = "./JSON/authorized_members";
    var request = new XMLHttpRequest();

    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();
    
    // Renvoyer un callback
    return true
}