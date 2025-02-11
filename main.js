"use strict"

//const criando variavel
// o . significa para acessar tal elemendo e () ao como chama 
const botaoTrocarCor = document.getElementById('trocar-cor')

//function manda o que fazer 
function trocarCor (){
    const cor = document.getElementById('cor') . value
    document.documentElement.style.setProperty ('--cor-fundo', cor )

}
botaoTrocarCor.addEventListener('click', trocarCor)
