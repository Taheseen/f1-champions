<template>
  <div id="app">
    <championList/>
  </div>
</template>

<script>
import championList from './components/championList.vue'

export default {
  name: 'app',
  components: {
    championList
  }
}
</script>
