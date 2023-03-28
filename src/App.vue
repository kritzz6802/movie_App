<script setup>
import HeaderView from './components/HeaderView.vue'
// import AllMovie from './components/AllMovie.vue'
// import FooterView from './components/FooterView.vue'
// import search from './components/search.vue'
</script>

<template>

  <HeaderView />
  <router-view />
  <!-- <AllMovie /> -->
  <search />

<!--  <FooterView /> -->

  <main>
  </main>
</template>

<style scoped>

</style>
