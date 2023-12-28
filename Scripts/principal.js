const icon_cadastro = document.getElementById("cadastro")
const opcoes_cadastro = document.getElementById("opcoes_cadastro")
icon_cadastro.addEventListener("click",()=>{
   opcoes_cadastro.style.display = (opcoes_cadastro.style.display === "none" || opcoes_cadastro.style.display === "")?"block" : "none";    
})