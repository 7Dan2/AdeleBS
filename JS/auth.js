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
        // searchForMembers(id)
        
        alert ("Bienvenue" + " " + id + ", entrez votre mot de passe")  
        
        document.getElementById("loginPwd").style.display="block"
    }
    
}

async function logMovies() 
{
    // const response = await fetch("../JSON/test.json", {mode: "no-cors"});
    // const movies = await response.json();
    // // let movie = JSON.parse(movies)
    // console.log(movies)

    // Ca fonctionne !
    await fetch('../JSON/authorized_members.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        // 'mode': 'no-cors',
        'Access-Control-Allow-Origin': "*"
    },
})
   .then(response => response.json())

   .then((response) => {
    let headers = `
    <tr>
      <th>Id</th>
      <th>Prénom</th>
      <th>Nom</th>
      <th>Entreprise</th>
      <th>Rôle</th>
    </tr>`;
    document.querySelector("thead").innerHTML = headers;

    let rows = "";
          response.forEach((facility) => {
            rows += `
              <tr>
                <td>${facility.id}</td>
                <td>${facility.surname} </td>
                <td>${facility.name}</td>
                <td>${facility.compagny}</td>
                <td>${facility.role}</td>
              </tr>
            `;
          });
          document.querySelector("tbody").innerHTML = rows;
        });
   }
// Fin du fichier
