
 function Janela() {

    let altura = window.innerHeight
    let largura = window.innerWidth

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



class Mosquito {
    constructor (){
        this.posicaoX = Math.floor(Math.random()*(janela.getLargura() - 90)) 
        this.posicaoY = Math.floor(Math.random()*(janela.getAltura() - 90))
        
        this.element = document.createElement('img')
        this.element.src = 'img/mosca.png'
        this.element.className = 'mosquito1'
        this.element.style.left = this.posicaoX + 'px'
        this.element.style.top = this.posicaoY + 'px'
        this.element.style.position = 'absolute'
        document.body.appendChild(this.element)
    }
}

