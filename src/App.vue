<script setup>

import Header from "./components/Header.vue";
import Preloader from "./components/Preloader.vue";

import {onMounted, provide, ref, watch} from "vue";
import axios from "axios";
import router from "./router/router.js";


onMounted(async () => {
 await getFullCountriesList()
})

// Вотчер на роутер
watch(router.currentRoute, (value) => {
  const isLogin = localStorage.getItem("isLogin");
  if (typeof null === typeof isLogin) {
    router.push('/auth')
  } else {
    router.push('/')
  }
})

const getFullCountriesList = async () => {
  await axios.get('https://freetestapi.com/api/v1/countries').then((response) => {
    countries.value = response.data
  }).catch((error) => {console.log(error)})
}
provide("getFullCountriesList", getFullCountriesList)

const countries = ref([]);
provide("countries", countries);

const loading = ref(false);
provide("loading", loading)
</script>

<template>
  <Preloader v-if="loading"/>
  <div class="wrapper">
    <Header/>
    <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/style/mixins' as *;



.wrapper {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-direction: column;

  @include xs {
    width: 100vw;
  }

  @include xl {
    width: 1600px;
  }

}

</style>
