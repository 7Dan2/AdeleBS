function showAppName()
{
    const getDiv = document.getElementById("appLogo")
    // getDiv.style.display = "block"
    getDiv.classList.add("showAppName")
}

function coucou()
{
    setTimeout(showAppName, 3000)
    
}