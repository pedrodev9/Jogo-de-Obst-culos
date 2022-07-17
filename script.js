let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
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

    var esquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(esquerdaQuadrado < 20 && esquerdaQuadrado > 0 && topoPersonagem >= 250){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        msg.innerHTML = '<strong>Você Perdeu!!</strong>'

        var btn = document.querySelector("#refresh")
        btn. addEventListener("click", function() {
        location. reload()}
        ) /*Botão de recarregar página*/
    }
}, 1)/*Essa função verifica se houve colisão dos elementos, olhando na esquerda e no 
    topo de cada um*/