<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Cards de produtos</h1>
        <hr />
      </div>
    </div>

    <div class="row mt-3">

      <div v-for="item in produtos" :key="item.id">
        <Card>
          <template v-slot:nome> {{ item.nome }} </template>

          <template v-slot:valor> {{ item.valor | real }} </template>

          <template v-slot:observacao> {{ item.observacao }} </template>

          <template v-slot:acoes><i @click="editarProduto(item)" class="fas fa-solid fa-pen icones-tabela"></i>
            <i @click="excluirProduto(item)" class="fas fa-solid fa-trash icones-tabela"></i>
          </template>
        </Card>
      </div>

    </div>
  </div>
</template>

<script>
import Card from "@/components/card/Card.vue";
import ProdutoMixin from "@/mixins/produto-mixin";

export default {
  name: "ListaProdutoCards",
  mixins: [ProdutoMixin],
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {
    trocarImagem(produto) {
    }
  },
};
</script>