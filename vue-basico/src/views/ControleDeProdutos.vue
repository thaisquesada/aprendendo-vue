<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <Button :callback="adicionarProduto" value="Adicionar"></Button>
      </div>
      <div class="col-sm-10">
        <a @click="verProdutosEmCards" class="float-right ver-em-cards">
          Ver em cards
        </a>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>código</th>
              <th>nome</th>
              <th>quantidade</th>
              <th>valor</th>
              <th>data de cadastro</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.valor | moeda }}</td>
              <td>{{ item.dataCadastro | data }}</td>
              <td>
                <i
                  @click="editarProduto(item)"
                  class="fas fa-solid fa-pen icones-tabela"
                ></i>
                <i
                  @click="excluirProduto(item)"
                  class="fas fa-solid fa-trash icones-tabela"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/button/Button.vue";
import produtoService from "@/api/produto-service";
import Produto from "@/models/produto-model";
import conversorDeData from "@/utils/conversor-data";
import conversorDeMoeda from "@/utils/conversor-moeda";

export default {
  name: "Dashboard",
  components: {
    Button,
  },
  filters: {
    data(data) {
      return conversorDeData.aplicarMascaraEmDataIso(data);
    },
    moeda(valor) {
      return conversorDeMoeda.aplicarMascaraParaRealComPrefixo(valor);
    },
  },
  data() {
    return {
      produtos: [],
    };
  },
  mounted() {
    this.obterTodosOsProdutos();
  },

  methods: {

    verProdutosEmCards() {
      this.$router.push({ name: "ListaProdutosCards" })
    },

    adicionarProduto() {
      this.$router.push({ name: "NovoProduto" });
    },

    editarProduto(produto) {
      // utilizamos o "params" para passarmos o objeto da forma que quisermos. no caso, estamos criando o parâmetro id, onde iremos enviar o id do produto
      this.$router.push({ name: "EditarProduto", params: { id: produto.id } });
    },

    excluirProduto(produto) {
      
      this.$swal({
        title: "Deseja excluir o produto?",
        text: `Código: ${produto.id} | Nome: ${produto.nome}`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Cancelar"
      }).then((result) => {

        console.log(result);
        if (result.isConfirmed) {
          produtoService
          .deletar(produto.id)
          .then(() => {
            // vamos ter que limpar a tabela
            // encontrando o índice do produto que tem o id igual à esse

            let indice = this.produtos.findIndex((p) => p.id == produto.id);

            // o método "splice" consegue deletar coisas de dentro de um array e guardar informações na posição desejada
            // remover ou substituir itens de dentro de um array numa determinada posição
            this.produtos.splice(indice, 1);

              this.$swal({
                icon: 'success',
                title: 'Produto deletado com sucesso!',
                confirmButtonColor: '#FF3D00'
              })
          })
          .catch((error) => {
            console.log(error);
          });
        }
      });
    },

    ordenarProdutos(prodA, prodB) {
      // A < B = -1 | A > B = 1 | A = B = 0 | nem sempre o id vem em ordem, então precisamos utilizar essa lógica para ordenar os produtos
      return prodA.id < prodB.id ? -1 : prodA > prodB ? 1 : 0;
    },

    obterTodosOsProdutos() {
      produtoService
        .obterTodos()
        .then((response) => {
          let produtos = response.data.map((p) => new Produto(p));

          //para mudar para ordem decrescente, podemos adicionar o .reverse()
          this.produtos = produtos.sort(this.ordenarProdutos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.icones-tabela,
.ver-em-cards {
  margin: 5px;
  cursor: pointer;
  color: var(--cor-primaria);
}

.ver-em-cards {
  margin-top: 25px;
}
</style>
