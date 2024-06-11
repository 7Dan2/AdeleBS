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
    if(getFilter.style.display === 'none')
    {
        getBtnUpdt.style.display="block";
    }
    else
    {
        getBtnUpdt.style.display="none";
    }
  } 

const bdd = 
[
    {
        site:"CMP",
        batiment:0014,
        equipements:
        [
            {
                SSI:
                [
                    {
                        BAESEvacuation:"R014023803001"
                    }
                ]
            }
        ]
    }
]