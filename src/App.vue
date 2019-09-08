<template>
  <div id="app">
    <header class="title">
      <img alt="F1 logo" class="logo" src="./assets/f1-logo.jpeg">
       <h1 >F1 Champions</h1>
    </header>
    <championList/>
  </div>
</template>

<script>
import championList from './components/championList/championList.vue'

export default {
  name: 'app',
  components: {
    championList
  }
}
</script>
