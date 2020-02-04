
 function Janela() {

    let altura = window.innerHeight
    let largura = window.innerWidth

    this.vidas = 3

    this.getVidas = function(){
        return this.vidas
    }

    this.setVidas = function( vidas){
        this.vidas = vidas
    }

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



function Mosquito (){

    //Remover mosquito caso exista
    if (!janela.getVidas()){
        document.getElementById('mosquito').remove()
            window.location.href = 'fim_de_jogo.html'
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
}

