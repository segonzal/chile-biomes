<template id='app'>
<div id='page-content' class='mdl-layout mdl-js-layout'>
  <div id='background' :style='getBackgroundImage'></div>
  <Header/>
  <main class="mdl-layout__content">
    <router-view name='main'/>
  </main>
</div>
</template>

<style>
#page-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

#background {
  background: url('./assets/media/bg-01.jpg') center / cover;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1000;
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  computed: {
    getBackgroundImage: function() {
      var x = Math.floor((Math.random() * 36) + 1).toString();
      x = x.padStart(2, '0');
      x = require('./assets/media/bg-'+ x +'.jpg');
      return "background: url('"+ x +"') center / cover;"
    }
  }
}
</script>
