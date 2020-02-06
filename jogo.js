
 function Janela() {

    let altura = window.innerHeight
    let largura = window.innerWidth

    this.vidas = 3
    this.tempo = 10
    this.nivel = window.location.search.replace('?','')

    this.tempoNivel = function(){
        if (this.nivel == "facil"){
            this.tempo = 12
            return 1800
        } else if (this.nivel == "normal"){
            this.tempo = 14
            return 1400
        } else if (this.nivel == "dificil"){
            this.tempo = 16
            return 1000
        } else if (this.nivel == "insano"){
            this.tempo = 18
            return 750
        } 
    }

    this.getVidas = function(){
        return this.vidas
    }

    this.setVidas = function( vidas){
        this.vidas = vidas
    }

    this.getTempo = () => {return this.tempo}

    this.setTempo = (tempo) => {this.tempo = tempo}

    this.perderVida = function( ){
        this.setVidas(this.getVidas() - 1)
    }

    this.ganharVida = function( ){
        this.setVidas(this.getVidas() + 1)
    }
    
    this.ajustaTamanho = function () {
        altura = window.innerHeight
        largura = window.innerWidth
    }

    this.getAltura = function(){
        return altura
    }

    this.getLargura = function (){
        return largura
    }

}

let janela = new Janela()

function setCronometro(){
    document.getElementById('cronometro').textContent= janela.getTempo()
}

var cronometro = setInterval(function(){
    janela.setTempo(janela.getTempo()-1)
    if(janela.getTempo() < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href='vitoria.html'
    } else{
        setCronometro()
    }
},
1000)

function Mosquito (){

    //Remover mosquito caso exista
    if (!janela.getVidas()){
        gameOver()
    }
    else{
        if (document.getElementById('mosquito')){

            document.getElementById('mosquito').remove()
            document.getElementById('v'+ janela.getVidas()).src='img/coracao_vazio.png'
            janela.perderVida()
        }

        this.posicaoX = Math.floor(Math.random()*(janela.getLargura() - 90)) 
        this.posicaoY = Math.floor(Math.random()*(janela.getAltura() - 90))

        this.getClassMosquito = function (){
            switch ( Math.floor(Math.random()*3)){
                case 0:
                    return 'mosquito1'
                case 1:
                    return 'mosquito2'
                case 2:
                    return 'mosquito3'
            }
        }

        this.getLado = function (){
            switch ( Math.floor(Math.random()*2)){
                case 0:
                    return 'ladoA'
                case 1:
                    return 'ladoB'
            }
        }
        
        this.createMosquito = function(){
            this.element = document.createElement('img')
            this.element.src = 'img/mosca.png'
            this.element.id = 'mosquito'
            this.element.className = this.getClassMosquito() + ' ' + this.getLado()
            this.element.style.left = this.posicaoX + 'px'
            this.element.style.top = this.posicaoY + 'px'
            this.element.style.position = 'absolute'
            this.element.onclick = function(){
                this.remove()
            }
            document.body.appendChild(this.element)
        }

        this.createMosquito()
    }
}

function gameOver(){
    document.getElementById('mosquito').remove()
    window.location.href = 'fim_de_jogo.html'
}

