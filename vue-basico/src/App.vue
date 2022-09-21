<template>
  <div id="app">
    <Menu />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<script>

import Menu from '@/components/menu/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  :root {
    --cor-primaria: #4FC3F7;
    --cor-secundaria:#81D4FA;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }

</style>
