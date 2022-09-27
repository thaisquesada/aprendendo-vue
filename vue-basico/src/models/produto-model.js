import mascaraDeData from '@/utils/conversor-data';

export default class Produto {
    constructor(obj) {

        // garantia de que, se o objeto for nulo, ele será transformado em um objeto vazio, assim não dará erro
        obj = obj || {};

        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor || 0;
        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.dataCadastro = obj.dataCadastro && mascaraDeData.aplicarMascaraFormatoAmericanoEmDataIso(obj.dataCadastro);
        this.observacao = obj.observacao;
    }

    // função dentro da classe de produtos que retorna os atributos que são necessários para que o cadastro seja efetuado
    modeloValidoParaCadastro() {
        return !!this.nome;
    }

    modeloValidoParaAtualizar() {
        return !! (this.id && this.nome)
    }
}