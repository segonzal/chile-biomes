<template>
<div class='d3-container'>
</div>
</template>

<style scope>

</style>

<script>
import *  as d3 from 'd3';

export default {
  name: 'Heatmap',
  data () {
    return {
      data: [0,1,2,3,4,5,6,7,8,9]
    };
  },
  mounted() {
    const margin = {
      top: 90,
      right: 50,
      bottom: 140,
      left: 50
    };

    var maingroup = d3.select('#d3-container')
    .append("svg")
    .attr("class", "heatmap")
    .attr("width", 512 + margin.left + margin.right)
    .attr("height", 512 + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  }
}
</script>
