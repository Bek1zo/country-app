<script setup>

import {countryCode} from "../../assets/countryCode.js";
import {inject, ref} from "vue";

const selectedCountries = inject('selectedCountries')

const props = defineProps({
  country: Object
})

// Получение кода для страны для загрузки флага

const getCountryCode = (name) => {
  return countryCode.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()))[0];
}

</script>

<template>
  <div class="card">

    <router-link :to="'/country/' + country.id"><img :src="'https://flagsapi.com/' + getCountryCode(country.name)?.code + '/flat/64.png'"/></router-link>
      <div>{{ country.name }}</div>
      <input type="checkbox" :value="country" v-model="selectedCountries">

  </div>

</template>

<style scoped lang="scss">


</style>