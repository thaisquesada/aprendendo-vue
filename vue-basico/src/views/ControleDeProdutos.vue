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
        <Button value="Adicionar"></Button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th>código</th>
              <th>nome</th>
              <th>quantidade</th>
              <th>valor</th>
              <th>data de cadastro</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '../components/button/Button.vue';
import produtoService from '@/api/produto-service';
import Produto from '@/models/produto-model';

  export default {
    name: 'Dashboard',
    components: {
      Button
    },
    data() {
      return {
        produtos: []
      }
    },
    methods: {
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



</style>
