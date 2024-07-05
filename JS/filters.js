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

// getSite.addEventListener("change", displayBatiments);



// ### Les bases de données ###
// const siteBdd = 
//     { 
//         CMP: "CMP", 
//         LYT: "LYT", 
//         USA: "CIRFA 61 / Usine A",
//         CSA: "CIRFA 72", 
//         FDL: "Ferme de l'aumône"
//     }

const buildings =
{
    myObject:
    [
        {
            site:"CMP",
            batiments:
            [
                "0001", "0014", "0015"
                
            ]
        },
        {
            site:"LYT",
            batiments:
            [
                "0029", "0030", "0031"
            ]
        },
        {
            site:"USA",
            batiments:
            [
                "0002"
            ]
        },
        {
            site:"CSA",
            batiments:
            [
                "0003"
            ]
        },
        {
            site:"FDL",
            batiments:
            [
                "0005", "0006"
            ]
        }
    ]
}


//  
// ### Les fonctions ###

// Cell-ci affiche bien les proprietés dans chaque champ
function displaySites(data)
{
    var selectSiteEl = document.getElementById("siteOptG");
    var selectBat = document.getElementById("batOptG");
    
    for (let i in buildings.myObject)
    {
        const option = document.createElement("OPTION");
        option.value = buildings.myObject[i].site;
        option.textContent = buildings.myObject[i].site;
        selectSiteEl.appendChild(option);

        for (let j in buildings.myObject[i].batiments) 
        {
            const options = document.createElement("OPTION");
            options.value = buildings.myObject[i].batiments[j];
            options.textContent = buildings.myObject[i].batiments[j];
            selectBat.appendChild(options);
        }
            
    }
          


    // for(let key in data)
    // {
    //     const option = document.createElement("OPTION");
    //     option.value = key;
    //     option.text = data[key];
        
    //     selectSiteEl.appendChild(option);

    //     console.log("sites :" + data) 
    // }


    
}
displaySites(buildings);



/*
function displayBatiments(aSiteValue)
{
    aSiteValue = event.target.value;
    console.log(`Valeur du paramètre : ${aSiteValue}`)
    // aSiteValue = getSite.value;
    

    buildings.forEach((element) => {
        console.log("Bâtiments :" + " " + element.batiments);
        var option = document.createElement("OPTION");
        option.value = element.site;
        option.textContent = element.batiments;
        getBatiment.appendChild(option);
    })

    // aSiteValue.forEach(function(value)
    // {
    //     var option = document.createElement("OPTION");
    //     option.value = aSiteValue;
    //     option.textContent = buildings[aSiteValue].batiments;
    //     getBatiment.appendChild(option);
    // });
    
     
    // for(var i = 0; i < options.length; i++) 
    // {
    //     var opt = options[i];
    
    //     var el = document.createElement("option");
    //     el.text = opt;
    //     el.value = opt;
    
    //     select.appendChild(el);
    // }​
}*/
    // buildings.forEach((element) => {
    // console.log(element.site + " " + buildings.length); // 100, 200, 300
    
    // console.log(element.batiments);
    // console.log(index); // 0, 1, 2
    // console.log(array); // same myArray object 3 times
    // var selectBatEl = document.getElementById("batOptG");
    
    
    // });

    

    // for(let key in data)
    // {
    //     const option = document.createElement("OPTION");
    //     option.value = key;
    //     option.text = data[key];
        
    //     selectBatEl.appendChild(option);

    //     console.log(data) 
    // }
    // console.log("Choix de la bite :" + " " + aSiteValue)



function getValue(aSiteValue)
{
    aSiteValue = getSite.value;
    console.log("Choix site :" + " " + aSiteValue)

    let myP = document.createElement("p");

    switch(aSiteValue)
    {
        case "CMP" :            
            site = "Caserne";
            break;  

        case "LYT" :
            site = "Lyautey";
            break; 
             
        case "USA" :
            site = "CIRFA 61 / Usine A"
            break;  

        case "CSA" :
            site = "CIRFA 72"
            break;

        case "FDL" :
            site = "Ferme de l'aumône"
            break;
        
        default :
            site = "Pas de site sélectionné"
    }
    
    let truc = document.getElementById("manualSearchResults");
    truc.textContent = `Site choisi : ${site}`;
    truc.appendChild(myP);
    
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

// Voir document fragment pour créér les éléments
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






// const aSelect = document.querySelector("#site");

// function loopThroughJSON(obj)
// {
//     for (let key in obj)
//     {
//         if (typeof obj[key] === 'object')
//         {
//             if (Array.isArray(obj[key])) 
//             {
//                 // loop through array
//                 for (let i = 0; i < obj[key].length; i++) 
//                 {
//                 loopThroughJSON(obj[key][i]);
//                 }
//             } 
//             else 
//             {
//             // call function recursively for object
//             loopThroughJSON(obj[key]);
//             }
//         } 
//         else 
//         {
            
            
//             // do something with value
//             console.log(key + ': ' + obj[key] + typeof obj[key]);
//         }
//     }
//   }

//   loopThroughJSON(myBDD)