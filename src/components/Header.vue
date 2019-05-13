<template>
  <header class="mdl-layout__header mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <router-link to="/" exact>
        <span class="mdl-layout-title">{{ $root.page_title }}</span>
      </router-link>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation -->
      <nav class="mdl-navigation">
        <router-link v-for="pge in $root.pages" :key="pge.id" class="mdl-navigation__link" :to="{ name: 'visualization', params: { id: pge.id }}">{{ pge.name }}</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'NavBar'
}
</script>
