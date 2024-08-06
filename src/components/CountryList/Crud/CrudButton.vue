<script setup>

import {inject, provide, ref} from "vue";
import CrudPopUp from "./CrudPopUp.vue";



const props = defineProps({
  name: String,
  text: String
})

const popUp = ref(false)



</script>

<template>

  <button class="button-success" @click="popUp = true">
    {{ name }}
  </button>

  <CrudPopUp v-if="popUp" :text="text" :value="popUp" @close="popUp = false" />

</template>

<style lang="scss">

@import '../../../assets/style/_composable.scss';

.delete-popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;

  hr {
    height: 1px;
    width: 100%;
    background: black;
  }

  .block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    background: #fff;
    width: 460px;
    height: 200px;

    .footer {
      display: flex;
      gap: 8px;
    }


  }
}
</style>