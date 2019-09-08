<template>
  <div id="app">
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
