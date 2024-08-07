<script setup>

import {computed, inject, onMounted, ref, watch} from "vue";
import router from "../../router/router.js";
import CountryViewMap from "./CountryView/CountryViewMap.vue";

const center = ref([40, 40]);
const projection = ref('EPSG:4326');
const zoom = ref(3);
const rotation = ref(0);

const format = inject('ol-format');
const geoJson = new format.GeoJSON();


const countries = inject("countries");
const getFullCountriesList = inject("getFullCountriesList");
const country_id = computed(() => { return router.currentRoute.value.params.countryId })

let currentCountry = ref({})

onMounted(async () => {
  if (countries.value.length === 0) {
    await getFullCountriesList().then(() => {
      console.log('await')
      getCurrentCountry()
    })
  } else {
    getCurrentCountry()
  }
})

const getCurrentCountry = () => {
  currentCountry.value = countries.value.find((country) => country.id === parseInt(country_id.value))
}

</script>

<template>
  <div class="card-wrapper">
    <div class="card">
      <CountryViewMap/>
      <div class="card-info">
        <div class="header">
          {{ currentCountry.name }}
        </div>
        <div class="body">
          <div class="card-info-keys" v-for="[key, value] in Object.entries(currentCountry)"><div class="key">{{ key }}</div>{{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.card-wrapper {
  display: flex;
  justify-content: center;

  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding: 10px;
    width: 800px;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;

    .map {
      padding: 1px;
      border: 2px solid gray;
    }

    .card-info {
      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        width: 100%;
        justify-content: center;

        font-weight: bold;
        font-size: 18px;
      }

      .body {
        padding: 5px;


        .card-info-keys {
          display: flex;
          flex-direction: column;
          gap: 4px;
          .key {
            font-weight: bold;
          }
        }
      }
    }

  }
}

</style>