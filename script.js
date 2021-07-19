document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
    if (document.getElementById("numero").value != "" && document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
        alert("Prontinho! Você receberá as novidades por email") 
     }else{
         alert("Por favor,preencha os campos nome,email e telefone!")
     }
}

