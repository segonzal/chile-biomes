<template>
<div class="mdl-grid center-items">
  <div class="mdl-cell mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
    <h1>Hello!</h1>
    <Heatmap />
  </div>
</div>
</template>

<style scoped>
.mdl-grid.center-items {
  justify-content: center;
}
</style>

<script>
import Heatmap from '@/components/Heatmap.vue'

export default {
  name: 'Visualization',
  components: {
    Heatmap
  }
}
</script>
