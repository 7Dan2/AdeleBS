// Ici on créé les étiquettes contenant :
// 
const para = document.createElement("div");
para.innerHTML = "This is a para";
para.classList.add("qr")

const paras = document.createElement("div");
paras.innerHTML = "This is paras";
paras.classList.add("qr");
paras.setAttribute("id", "pate")


const pate = document.createElement("p");
pate.innerHTML = "This is pate";
pate.classList.add("p")

// Append to another element:
document.getElementById("myDIV").appendChild(paras);
document.getElementById("myDIV").appendChild(para);
document.getElementById("pate").appendChild(pate);