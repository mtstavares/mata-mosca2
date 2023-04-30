//altura e largura da página    
let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

let criaMoscaTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {

    criaMoscaTempo = 1500

}else if (nivel === 'dificil') {

    criaMoscaTempo = 1000
    
}else if (nivel === 'expert') {

    criaMoscaTempo = 750
    
}


function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
    }

    ajustaTamanho()

    let cronometro = setInterval(function(){

        tempo -= 1

        if (tempo < 0) {

            clearInterval(cronometro)
            clearInterval(criaMosca)
            window.location.href = 'vitoria.html'
            
        }else {
        document.getElementById('cronometro').innerHTML = tempo
        }
        
    }, 1000)

//posição da mosca radomicamente

function posicaoRandomica(){

    //remover o mosquito anterior caso exista
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if(vidas > 3){
        
            window.location.href = 'fim_de_jogo.html'

        } else{
            document.getElementById('v' + vidas).src = 'coracao_vazio.png'

            vidas++
        }
        
    }
    

    let posicaoX = Math.floor(Math.random() * largura - 90)
    let posicaoY = Math.floor(Math.random() * altura - 90)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)

//Criar elemento HTML
    let mosca = document.createElement('img')
    mosca.src = 'mosca.png'
    mosca.className = TamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca)

}


//Tamanho das moscas

function TamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}


//Escolhendo o lado do mosquito

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}