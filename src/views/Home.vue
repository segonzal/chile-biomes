<template>
<div class="mdl-grid center-items">
  <div class="mdl-cell mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
    <h1>{{ $root.page_title }}</h1>
    <hr>
    <p>Visualizations of climate data</p>

  </div>
</div>
</template>

<style scoped>
.mdl-grid.center-items {
  justify-content: center;
}
</style>

<script>
export default {
  name: 'Home'
}
</script>
