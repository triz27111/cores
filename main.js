"use strict"

const botaoTrocarCor = document.getElementById('trocar-cor')

function TrocarCor () {
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-fundo', cor)
}

botaoTrocarCor.addEventListener('click', TrocarCor)
