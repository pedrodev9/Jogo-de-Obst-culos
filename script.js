let personagem = document.querySelector('#personagem')
let pipe = document.querySelector('#pipe')
let msg = document.querySelector('#msg') //mensagem de Jogo perdido

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
} /* Essa função verifica se a função "Pular" foi localizada no elemento
    Caso não tenha sido encontrada, ela será adicionada e removida em um intervalo
    de 500ms*/

var testarColisao = setInterval(function(){
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var esquerdaPipe = parseInt(
        window.getComputedStyle(pipe).getPropertyValue('left')
    )

    if(esquerdaPipe < 100 && esquerdaPipe > 0 && topoPersonagem >= 213){
        pipe.style.animation = 'none' 
        personagem.style.animation = 'none'
        pipe.style.display = 'none'
        cloud.style.animation = 'none'
        msg.innerHTML = '<strong>Você Perdeu!!</strong>'

        var btn = document.querySelector("#refresh")
        btn. addEventListener("click", function() {
        location. reload()}
        ) /*Botão de recarregar página*/
    }
}, 1)/*Essa função verifica se houve colisão dos elementos, olhando na esquerda e no 
    topo de cada um*/