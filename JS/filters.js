const getFiltersButton = document.getElementById("btn_searchFilters");
getFiltersButton.addEventListener("click", myFunction)

const getFilters = document.getElementById("filters");

function myFunction() {
    var x = document.getElementById("filters");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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