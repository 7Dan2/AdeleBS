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

function showAuth()
{
    document.getElementById("auth").classList.remove("auth")
}