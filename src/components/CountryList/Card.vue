<script setup>

import {countryCode} from "../../assets/countryCode.js";
import {inject, ref} from "vue";

const selectedCountries = inject('selectedCountries')

const props = defineProps({
  countries: Array,
})

// Получение кода для страны для загрузки флага

const getCountryCode = (name) => {
  return countryCode.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()))[0];
}

// Drag n drop

let draggedItem = null;

const onDragStart = (event, item) => {
  draggedItem = item;
  event.dataTransfer.effectAllowed = 'move';
};

const onDrop = (event, targetItem) => {

  const draggedIndex = props.countries.indexOf(draggedItem);
  const targetIndex = props.countries.indexOf(targetItem);

  props.countries.splice(draggedIndex, 1);
  props.countries.splice(targetIndex, 0, draggedItem);
};

</script>

<template>
  <div class="card"
       draggable="true"
       @dragstart="onDragStart($event, country)"
       @dragover.prevent
       @drop="onDrop($event, country)"
       v-for="country in countries">

    <router-link :to="'/country/' + country.id"><img :src="'https://flagsapi.com/' + getCountryCode(country.name)?.code + '/flat/64.png'"/></router-link>
      <div>{{ country.name }}</div>
      <input type="checkbox" :value="country" v-model="selectedCountries">

  </div>

</template>

<style scoped lang="scss">


</style>