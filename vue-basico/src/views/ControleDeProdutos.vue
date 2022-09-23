<template>
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
      <h2 class="titulo">Produtos</h2>
      <hr>
    </div>
  </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <Button :callback="adicionarProduto" value="Adicionar"></Button>
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
                <i @click="editarProduto" class="fas fa-solid fa-pen icones-tabela"></i>
                <i @click="excluirProduto" class="fas fa-solid fa-trash icones-tabela"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '../components/button/Button.vue';
import produtoService from '@/api/produto-service';
import Produto from '@/models/produto-model';
import conversorDeData from '@/utils/conversor-data';
import conversorDeMoeda from '@/utils/conversor-moeda';

  export default {
    name: 'Dashboard',
    components: {
      Button
    },
    filters: {
      data(data) {
        return conversorDeData.aplicarMascaraEmDataIso(data);
      },
      moeda(valor) {
        return conversorDeMoeda.aplicarMascaraParaRealComPrefixo(valor);
      }
    },
    data() {
      return {
        produtos: []
      }
    },
    methods: {

      adicionarProduto() {
        this.$router.push({ name: "NovoProduto" })
      },

      editarProduto() {
        alert("Aqui vou editar o produto!!!")
      },

      excluirProduto() {
        alert("Aqui vou excluir o produto!!!")
      },

      obterTodosOsProdutos() {
        produtoService.obterTodos()
        .then(response => {
          this.produtos = response.data.map(p => new Produto(p));
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    mounted() {
      this.obterTodosOsProdutos();
    }
  }

</script>

<style scoped>
  .icones-tabela {
    margin: 5px;
    cursor: pointer;
    color: var(--cor-primaria);

  }
</style>
