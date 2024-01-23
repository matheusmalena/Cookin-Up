<script lang="ts">
  import Banner from './components/Banner.vue';
  import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
  import SelecionarIngredientes from './components/SelecionarIngredientes.vue';
  import Rodape from './components/Rodape.vue';

  export default {
    components: { Banner, ConteudoPrincipal, SelecionarIngredientes, Rodape }
  }
</script>

<template>
  <Banner />
  <ConteudoPrincipal />
  <Rodape rodapetexto="Desenvolvido por Matheus Malena | 2024 - Projeto fictício sem fins comerciais." />
</template>
