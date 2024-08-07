<script setup>
import 'vue3-openlayers/dist/vue3-openlayers.css';


</script>

<template>
  <ol-map>
    <ol-view :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

  </ol-map>
</template>

<style scoped lang="scss">

</style>