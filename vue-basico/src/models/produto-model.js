export default class Produto {
    constructor(obj) {

        //garantia de que, se o objeto for nulo, ele será transformado em um objeto vazio, assim não dará erro
        obj = obj || {};

        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor || 0;
        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.dataCadastro = obj.dataCadastro;
    }
}