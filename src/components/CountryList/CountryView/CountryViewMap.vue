<script setup>
import 'vue3-openlayers/dist/vue3-openlayers.css';


</script>

<template>
  <ol-map>
    <ol-view :center="[40, 40]" :zoom="5" projection="EPSG:4326" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
    <ol-vector-layer
        title="AIRPORTS"
    >
      <ol-source-vector
          ref="cities"
          url="Andorra.geojson"
          :format="geoJson"
          :projection="projection"
      >
        <ol-interaction-modify
            v-if="drawEnable"
            @modifyend="modifyend"
            @modifystart="modifystart"
        >
        </ol-interaction-modify>

        <ol-interaction-draw
            v-if="drawEnable"
            :type="drawType"
            @drawend="drawend"
            @drawstart="drawstart"
        >
        </ol-interaction-draw>

        <ol-interaction-snap v-if="drawEnable" />
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
        <ol-style-circle :radius="7">
          <ol-style-fill color="blue"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<style scoped lang="scss">

</style>