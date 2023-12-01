export class Pedido{

    nome_cliente
    status_pedido
    em_atendimento
    prato
    numero_mesa

    constructor(nome_cliente, prato, numero_mesa){
        this.nome_cliente = nome_cliente
        this.prato = prato
        this.numero_mesa = numero_mesa
    }

    get nome_cliente(){
        return this.nome_cliente
    }

    set nome_cliente(nome_cliente){
        this.nome_cliente = nome_cliente
    }

    get status_pedido(){
        return this.status_pedido
    }

    set status_pedido(status_pedido){
        this.status_pedido = status_pedido
    }

    get em_atendimento(){
        return this.em_atendimento
    }

    set em_atendimento(em_atendimento){
        this.em_atendimento = em_atendimento
    }

    get prato(){
        return this.prato
    }

    set prato(prato){
        this.prato = prato
    }

    get numero_mesa(){
        return this.numero_mesa
    }

    set numero_mesa(numero_mesa){
        this.numero_mesa = numero_mesa
    }
}
