const home = document.getElementById("home");
const patrocinadores = document.getElementById("patrocinadores");
const provas = document.getElementById("provas");
const temporadas = document.getElementById("temporadas");

home.addEventListener("mouseover", mudaCor);
home.addEventListener("mouseout", voltaCor);

function mudaCor () { 
    patrocinadores.style.color = "#eae";
    provas.style.color = "#eae768";
    temporadas.style.color = "#896eae";
 }

 function voltaCor () {
    patrocinadores.style.color = "#C52EB3";
    provas.style.color = "#C52EB3";
    temporadas.style.color = "#C52EB3";
 }