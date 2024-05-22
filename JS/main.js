const getLaunchAppButton = document.getElementById("launchApp");
getLaunchAppButton.addEventListener("click", goToLoginPage)

const getSearchItemButton = document.getElementById("launchSearchItem");
getSearchItemButton.addEventListener("click", goToSearchItemPage)


function showAppName()
{
    const getDiv = document.getElementById("appMultiArea")
    // getDiv.style.display = "block"
    getDiv.classList.add("showAppName")
    
}

function coucou()
{
    setTimeout(showAppName, 2000)
    document.getElementById("auth").classList.add("auth")
    setTimeout(hideLogo, 5000)
    setTimeout(showAuth, 5200)
    
}

function hideLogo()
{
    document.getElementById("appLogo").classList.add("hideLogo");
    // Suppression de tout contenu présent dans l'identifiant
    document.getElementById("loginId").value = "";
}

function goToLoginPage()
{
    // location.assign("file:///Users/yanis/Documents/HTML:CSS:JS/AdeleBS/HTML/login.html")
    location.assign("https://7dan2.github.io/AdeleBS/HTML/login.html")
}

function goToSearchItemPage()
{
    // location.assign("file:///Users/yanis/Documents/HTML:CSS:JS/AdeleBS/HTML/item_specs.html")
    location.assign("https://7dan2.github.io/AdeleBS/HTML/item_specs.html")
}

function showAuth()
{
    document.getElementById("auth").classList.remove("auth")
}