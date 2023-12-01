export class Prato extends Pedido{

    super
    nome
    preco
    qtd

    constructor (nome, preco, qtd){
        this.nome = nome
        this.preco = preco
        this.qtd = qtd
    }

    get nome(){
        return this.nome
    } 

    set nome(nome){
        this.nome = nome
    }

    get preco(){
        return this.prato
    }

    set preco(preco){
        this.preco = preco
    }

    calcValor(qtd, preco){
        valor = qtd * preco
    }

}