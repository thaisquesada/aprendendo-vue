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

  export default {
    name: 'Dashboard',
    components: {
      Button
    },
    data() {
      return {
        mensagem: 'Estou na tela Controle de Produtos'
      }
    }
  }

</script>

<style scoped>



</style>
