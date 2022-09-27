<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Cards de produtos</h1>
        <hr />
      </div>
    </div>

    <div class="row mt-3">
      <!-- Aqui criaremos os cards -->
      <Card>
        <template v-slot:nome> Produto B </template>

        <template v-slot:valor> R$200,00 </template>

        <template v-slot:observacao> Produto novo </template>

        <template v-slot:acoes>
          <i
            @click="editarProduto(item)"
            class="fas fa-solid fa-pen icones-tabela"
          ></i>
          <i
            @click="excluirProduto(item)"
            class="fas fa-solid fa-trash icones-tabela"
          ></i>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card/Card.vue";

export default {
  name: "ListaProdutoCards",
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>