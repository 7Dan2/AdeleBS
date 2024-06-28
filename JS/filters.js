const getFiltersButton = document.getElementById("btn_searchFilters");
getFiltersButton.addEventListener("click", myFunction)

const getFilters = document.getElementById("filters");
const getBtnUpdt = document.getElementById("btn__updt")

function myFunction() 
{
    /*
    On fait apparaitre / disparaitre les filtres sur appui du 
    bouton "Recherche par filtres"
    */
    if (getFilters.style.display === "none") 
    {
        getFilters.style.display = "block";
    } 
    else 
    {
        getFilters.style.display = "none";
    }

    /*
    Le bouton de validation de code item
    n'est visible que lorsque les filtres sont cachés
    */
    if(getFilters.style.display === 'none')
    {
        getBtnUpdt.style.display="block";
    }
    else
    {
        getBtnUpdt.style.display="none";
    }
  } 

/*
Moteur de recherche (n'ayons pas peur des mots)
permettant d'offrir à l'utilisateur des résultats
en fonction du choix du site, du bâtiment, de l'équipement
Le choix du site adapte le choix des bâtiments et des équipements du site
Le choix du bâtiment adapte le choix des équipements du bâtiment
*/

// Récupération du choix du site, du bâtiment, de l'équipement

let getSite = document.getElementById("site");
let getBatiment = document.getElementById("batiment");
let getEquipement = document.getElementById("equipement");

getSite.addEventListener("change", getValue)


function getValue()
{
    console.log(getSite.value)
    bdd.forEach(getSite.value)
}


// Voir les fonctions récursives pour indenter un JSON complexe
function recurse() 
{
    if(condition)
    {
        // stop calling itself
        //...
    } 
    else
    {
        recurse();
    }
}

// Voir document fragment pour créér les parties
const df = new DocumentFragment();


const myBDD =
[
    {
        "sites":
        [
            {
                "CMP":
                [
                    {
                        "batiments":
                        [
                            {
                                "0014":
                                [
                                    {
                                        "equipements":""
                                    }
                                ],
                            },
                            {
                                "0075":
                                [
                                    {
                                        "equipements":""
                                    }
                                ],
                            },
                            {
                                "0268":
                                [
                                    {
                                        "equipements":
                                        [
                                            {
                                                "CVC":
                                                [
                                                    {
                                                        "Climatiseur":
                                                        [
                                                            {"Climatiseur1":""},
                                                            {"Climatiseur2":""},
                                                            {"Climatiseur3":""},
                                                            {"Climatiseur4":""}
                                                        ]
                                                    },
                                                    {
                                                        "VMP":""
                                                }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                            }
                        ] 
                    }
                ]
            },
            {
                "LYT":
                [
                    {
                        "batiments":
                        [
                            {
                                "0030":
                                [
                                    {
                                        "equipements":""
                                    }
                                ],
                            },
                            {
                                "0031":
                                [
                                    {
                                        "equipements":""
                                    }
                                ],
                            }
                        ] 
                    }
                ]
            },
            {
                "C72":
                [
                    {
                        "batiments":
                        [
                            {
                                "0001":
                                [
                                    {
                                        "equipements":
                                        [
                                            {
                                                "SSI":
                                                [
                                                    {
                                                        "Centrale_incendie":""
                                                    },
                                                    {
                                                        "DM":
                                                        [
                                                            {"DM1":""},
                                                            {"DM2":""},
                                                            {"DM3":""}
                                                        ]
                                                    },
                                                    {
                                                        "Sirene":
                                                        [
                                                            {"Sirene1":""}
                                                        ]
                                                    },
                                                    {
                                                        "BAES_Evacuation":
                                                        [
                                                            {"BAES1":""},
                                                            {"BAES2":""},
                                                            {"BAES3":""},
                                                            {"BAES4":""}
                                                        ]
                                                    },
                                                    {
                                                        "DAAF":
                                                        [
                                                            {"DAAF1":""},
                                                            {"DAAF2":""},
                                                            {"DAAF3":""},
                                                            {"DAAF4":""}
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "CVC":
                                                [
                                                    {
                                                        "Chaudiere_murale":""
                                                    },
                                                    {
                                                        "Caisson_ventilation":
                                                        [
                                                            {"Caison1":""},
                                                            {"Caison2":""},
                                                            {"Caison3":""}
                                                        ]
                                                    }
                                                ]   
                                            }
                                        ]
                                    }
                                ]
                            }
                        ] 
                    }
                ]
            }
        ]
          
    }
]

otherBdd = 
[
    { CMP: "CMP", LYT:"LYT", CSAR:"CIRFA72", FDL:"Ferme" }
]



function displaySites(data)
{
    const selectEl = document.getElementById("site");
    for(let key in data)
    {
        const option = document.createElement("OPTION");
        option.value = key;
        option.text = data[key];
        selectEl.appendChild(option);

        console.log(data)
    }
    
}

displaySites(otherBdd)



const aSelect = document.querySelector("#site");

function loopThroughJSON(obj)
{
    for (let key in obj)
    {
        if (typeof obj[key] === 'object')
        {
            if (Array.isArray(obj[key])) 
            {
                // loop through array
                for (let i = 0; i < obj[key].length; i++) 
                {
                loopThroughJSON(obj[key][i]);
                }
            } 
            else 
            {
            // call function recursively for object
            loopThroughJSON(obj[key]);
            }
        } 
        else 
        {
            
            
            // do something with value
            console.log(key + ': ' + obj[key] + typeof obj[key]);
        }
    }
  }

//   loopThroughJSON(myBDD)